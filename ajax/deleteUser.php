<?php
ob_start();
session_start();

require_once('../system/database.php');

$id = $_POST["id"];

$delete = $db->query("UPDATE user SET deleted=1 WHERE id='".$id."'");

$deleteClient = $db->query("UPDATE clients SET deleted=1 WHERE user_id='".$id."'");
$deleteDist = $db->query("UPDATE distributors SET deleted=1 WHERE user_id='".$id."'");

if($delete){
    echo "ok";
}else{
    echo "Sistem Hatası!";
}

?>