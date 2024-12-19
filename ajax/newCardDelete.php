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

    $QueryPersonal = $db->query("SELECT * FROM cards");
    while ($row = $QueryPersonal->fetch_assoc()) {
        $control = "Card_" . $row["id"];
        if (in_array($control, $CheckedID)) {
            $DeleteCard = $db->query("DELETE FROM cards WHERE id='".$row["id"]."'");
            $UpdateClients = $db->query("UPDATE clients SET card_id=0 WHERE card_id='".$row["id"]."'");
        }
    }
    if ($DeleteCard) {
        echo "ok";
    } else {
        echo "Sistem Hatası";
    }

} else {
    echo "En Az 1 Kart Seçimi Yapınız!";
}
