<?php
ob_start();
session_start();

require_once('../system/database.php');
require_once('../system/functions.php');

$id = $_POST["id"];
$type = $_POST["type"];

if ($id == "" or $type == "") {
    echo "HATA!";
} else {

    $Update = $db->query("UPDATE date_list SET date_status='" . $type . "' WHERE id='" . $id . "'");

    if ($Update) {
        $SelectDate = $db->query("SELECT * FROM date_list WHERE id='" . $id . "'")->fetch_assoc();
        $Client = $db->query("SELECT * FROM clients WHERE id='" . $SelectDate["client_id"] . "'")->fetch_assoc();
        $Dist = $db->query("SELECT * FROM distributors WHERE id='" . $SelectDate["dist_id"] . "'")->fetch_assoc();
        $Address = str_replace(" ", "+", $Dist["company_address"]);

        if ($type == 2) {
            $SMSContent = "Sayın Müşterimiz, " . date("d-m-Y H:i", $SelectDate["start_unixtime"]) . " Tarihinde, " . $Dist["company_name"] . " Bayisinden almış olduğunuz randevunuz ONAYLANMIŞTIR. İyi Günler...";
        } else {
            $SMSContent = "Sayın Müşterimiz, " . date("d-m-Y H:i", $SelectDate["start_unixtime"]) . " Tarihinde, " . $Dist["company_name"] . " Bayisinden almış olduğunuz randevunuz REDDEDİLMİŞTİR. İyi Günler...";
        }

        $InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) 
                                        VALUES('" . $Client["id"] . "','" . $Client["client_mobile"] . "','" . $SMSContent . "')");
        if ($InsertSMS) {
            $SMSID = $db->insert_id;
            //GondericiAdiSor();
            $i = 1;
            while ($i <= 20) {
                $i++;
                $gelen = SendSMS($SMSContent, $Client["client_mobile"]);
                $Response = substr($gelen, 0, 1);
                if ($Response == "0") {
                    $UpdateSMS = $db->query("UPDATE sms SET sms_status=1 WHERE id='" . $SMSID . "'");
                    break;
                } else {
                    continue;
                }
            }
            if ($i == 21) {
                $UpdateSMS = $db->query("UPDATE sms SET sms_status=2 WHERE id='" . $SMSID . "'");
            }
        }
        echo "ok";
    }
}


?>