<?php
ob_start();
session_start();
require_once('../system/database.php');
require_once('../system/functions.php');

$_POST["checked"] = json_decode(json_encode($_POST["checked"], true));
$checked = explode(",", $_POST["checked"]);
$count = count($checked);
for ($a = 0; $a < $count; $a++) {
    $checkedNew = explode("\\\"", $checked[$a]);
    $CheckedID[$a] = $checkedNew[1];
}
if ($count > 0) {

    if (!empty($_POST["message"])) {

        $QueryPersonal = $db->query("SELECT * FROM distributors");
        while ($row = $QueryPersonal->fetch_assoc()) {
            $control = "Dist_".$row["id"];
            if (in_array($control, $CheckedID)) {
                $InsertSMS = $db->query("INSERT INTO sms(distributor_id,mobile,sms_content) 
VALUES('".$row["id"]."','".$row["company_mobile"]."','".$_POST["message"]."')");
                $SMSID = $db->insert_id;
                //GondericiAdiSor();
                $i = 1;
                while($i<=10) {
                    $i++;
                    $gelen = SendSMS($_POST["message"],$row["company_mobile"]);
                    $Response = substr($gelen,0,1);
                    if ($Response == "0") {
                        $UpdateSMS = $db->query("UPDATE sms SET sms_status=1 WHERE id='".$SMSID."'");
                        //echo success("SMS Başarıyla Gönderildi!");
                        break;
                    } else {
                        continue;
                    }
                }
                if($i==11){
                    $UpdateSMS = $db->query("UPDATE sms SET sms_status=2 WHERE id='".$SMSID."'");
                    //echo error("SMS Gönderimi Başarısız!");
                }
            }
        }
        if ($InsertSMS) {
            echo "ok";
        } else {
            echo "Sistem Hatası";
        }

    } else {
        echo "Mesaj Kutusunu Doldurunuz";

    }
} else {
    echo "En Az 1 Bayi Seçimi Yapınız!";
}
