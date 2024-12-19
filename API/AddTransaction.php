<?php

require_once dirname(__FILE__) . '/../system/database.php';
require_once dirname(__FILE__) . '/../system/functions.php';
require_once dirname(__FILE__) . '/APIJson.php';

$Result = array();

$mAPIJson = new APIJson();
$mAPIJson->GetInputStream();

if ($mAPIJson->isJSONValid()) {

    $RequestOBJ_ = $mAPIJson->StreamArray;

    if (!empty($RequestOBJ_["RequestID"]) and !empty($RequestOBJ_["Code"])) {
        $Time = time();
        $Query = $db->query("SELECT * FROM request_api_transaction WHERE id='" . $RequestOBJ_["RequestID"] . "' and code='" . $RequestOBJ_["Code"] . "' and start<='" . $Time . "' and end>='" . $Time . "' and is_used=0")->fetch_assoc();
        if ($Query["id"] != "") {
            $InsertTransaction = $db->query("INSERT INTO transactions(unix_time,distributor_id,client_id,amount,sms_key,transaction_status,transaction_type,is_api)
VALUES('" . $Time . "',9999,'" . $Query["client_id"] . "','" . $Query["credit"] . "','" . $Query["code"] . "',4,2,1) ");
            if ($InsertTransaction) {
                $ID = $db->insert_id;
                $UpdateClient = $db->query("UPDATE clients SET credit=clients.credit-'".$Query["credit"]."' WHERE id='".$Query["client_id"]."'");
                $UpdateUsed = $db->query("UPDATE request_api_transaction SET is_used=1 WHERE id='".$RequestOBJ_["RequestID"]."'");
                if($UpdateClient){
                    $SelectClient = $db->query("SELECT * FROM clients WHERE id='".$Query["client_id"]."'")->fetch_assoc();
                    $SMSContent = "İşlem Başarıyla Gerçekleştirildi. Bakiyeniz ".$Query["credit"]." kredi eksildi.";
                    $i = 1;
                    while ($i <= 10) {
                        $i++;
                        $gelen = SendSMS($SMSContent, $SelectClient["client_mobile"]);
                        $Response = substr($gelen, 0, 1);
                        if ($Response == "0") {
                            break;
                        } else {
                            continue;
                        }
                    }

                    $Result["Status"] = "OK";
                    $Result["StatusDescription"] = "İşlem Başarılı";
                }else{
                    $DeleteTrans = $db->query("DELETE FROM transactions WHERE id='".$ID."'");
                    $Result["Status"] = "-3";
                    $Result["StatusDescription"] = "Bakiye Düşülemedi!";
                }
            } else {
                $Result["Status"] = "-2";
                $Result["StatusDescription"] = "İşlem Oluşturulamadı!";
            }

        } else {
            $Result["Status"] = "-1";
            $Result["StatusDescription"] = "İstek Bulunamadı veya zaman aşımına uğradı!";
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
