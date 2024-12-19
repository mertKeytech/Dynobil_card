<?php
date_default_timezone_set("Europe/Istanbul");
ob_start();
session_start();

require_once('../system/database.php');
if ($_POST["name"] != "") {
    $Query = $db->query("SELECT * FROM user_group WHERE group_name='" . $_POST['name'] . "'");
    $Count = $Query->num_rows;
    if ($Count == 0) {
        $update = $db->query("INSERT INTO user_group(
            group_name)
            VALUES ('" . $_POST["name"] . "')");
        if ($update) {
            echo "ok";
        } else {
            echo "Sistem Hatası!";
        }
    } else {
        echo "Bu Grup Adı Sistemde Kayıtlı!";
    }
} else {
    echo "Grup Adı Boş Bırakılamaz!";
}

?>