<?php
ob_start();
session_start();

require_once('../system/database.php');

$id = $_POST["id"];

$deleteDist = $db->query("DELETE FROM mobile_new_user WHERE id='".$id."'");

if($deleteDist){
    echo "ok";
}else{
    echo "Sistem Hatası!";
}

?>