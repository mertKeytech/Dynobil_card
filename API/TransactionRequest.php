<?php

require_once dirname(__FILE__) . '/../system/database.php';
require_once dirname(__FILE__) . '/../system/functions.php';
require_once dirname(__FILE__) . '/APIJson.php';

$Result = array();

$mAPIJson = new APIJson();
$mAPIJson->GetInputStream();

if ($mAPIJson->isJSONValid()) {

    $RequestOBJ_ = $mAPIJson->StreamArray;

    if (!empty($RequestOBJ_["Phone"]) and !empty($RequestOBJ_["Credit"])) {
        $UserQuery = $db->query("SELECT * FROM clients WHERE client_mobile LIKE '%" . $RequestOBJ_['Phone'] . "' and deleted=0 and is_active=1")->fetch_assoc();
        if ($UserQuery["id"] != "") {

            if($UserQuery["credit"]>=$RequestOBJ_["Credit"]){

                $Code = RandomSMSCode();
                $SMSContent = $RequestOBJ_["Credit"] . " kredi tutarı hesaptan düşülecektir. Onay Kodunuz: " . $Code;
                $InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) 
                                        VALUES('" . $UserQuery["id"] . "','" . $UserQuery["client_mobile"] . "','" . $SMSContent . "')");
                if ($InsertSMS) {

                    $SMSID = $db->insert_id;
                    //GondericiAdiSor();
                    $i = 1;
                    while ($i <= 10) {

                        $i++;
                        $gelen = SendSMS($SMSContent, $UserQuery["client_mobile"]);
                        $Response = substr($gelen, 0, 1);
                        //$Result["SMSResponse"] = $Response;
                        echo $Response;
                        if ($Response == "0") {
                            $Time = time();
                            $Time15 = $Time+(15*60);
                            $UpdateSMS = $db->query("UPDATE sms SET sms_status=1 WHERE id='" . $SMSID . "'");
                            $InsertRequest = $db->query("INSERT INTO request_api_transaction(start,end,code,client_id,credit) VALUES('".$Time."','".$Time15."','".$Code."','".$UserQuery["id"]."','".$RequestOBJ_["Credit"]."')");

                            if ($InsertRequest) {
                                $ID = $db->insert_id;
                                $Result["Status"] = "OK";
                                $Result["RequestID"] = $ID;
                                $Result["StatusDescription"] = "Müşteriye SMS Gönderildi";
                            }
                            break;
                        } else {
                            continue;
                        }
                    }

                    if ($i == 11) {
                        $UpdateSMS = $db->query("UPDATE sms SET sms_status=2 WHERE id='" . $SMSID . "'");
                        $Result["Status"] = "-1";
                        $Result["StatusDescription"] = "SMS Gönderimi Başarısız!";
                    }

                } else {
                    $Result["Status"] = "-2";
                    $Result["StatusDescription"] = "SMS Kayıt Edilemedi! Gönderim Başarısız!";
                }
            }else{ //bakiye yetersiz
                $Result['Status'] = "-4";
                $Result["StatusDescription"] = "Yetersiz Kredi!";
            }

        } else {
            $Result['Status'] = "-1";
            $Result["StatusDescription"] = "Müşteri Bulunamadı!";
        }
    } else {
        $Result["Status"] = "-2";
        $Result["StatusDescription"] = "Eksik Alan !";
    }
} else {
    $Result["Status"] = "-3";
    $Result["StatusDescription"] = "POST Edilen data json formatında değil.";
}

$ResultJSON = json_encode($Result);
ob_clean();
echo $ResultJSON;
exit;
?>
