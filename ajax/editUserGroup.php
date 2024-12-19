<?php
date_default_timezone_set("Europe/Istanbul");
ob_start();
session_start();

require_once('../system/database.php');


if ($_POST["name"] != "" and $_POST["id"] != "") {

    $Query = $db->query("SELECT * FROM user_group WHERE group_name='" . $_POST['name'] . "' and id!='" . $_POST["id"] . "'");
    $Count = $Query->num_rows;
    if ($Count == 0) {

        $update = $db->query("UPDATE user_group SET group_name='" . $_POST["name"] . "' WHERE id='" . $_POST["id"] . "'");
        if ($update) {
            echo "ok";
        } else {
            echo "Sistem Hatası";
        }

    } else {
        echo "Bu Grup Adı Sistemde Kayıtlı!";
    }
} else {
    echo "Grup Adı Boş Bırakılamaz!";
}

?>