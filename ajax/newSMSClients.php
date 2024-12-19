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

        $QueryPersonal = $db->query("SELECT * FROM clients");
        while ($row = $QueryPersonal->fetch_assoc()) {
            $control = "Client_".$row["id"];
            if (in_array($control, $CheckedID)) {
                $InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) VALUES('".$row["id"]."','".$row["client_mobile"]."','".$_POST["message"]."')");
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
    echo "En Az 1 Müşteri Seçimi Yapınız!";
}
