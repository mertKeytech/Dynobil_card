<?php
ob_start();
session_start();

require_once('../system/database.php');

$id = $_POST["id"];


$deleteUser = $db->query("UPDATE cards SET card_campaign_id=0 WHERE card_campaign_id='".$id."'");
$deleteDist = $db->query("DELETE FROM campaigns WHERE id='".$id."'");

if($deleteUser && $deleteDist){
    echo "ok";
}else{
    echo "Sistem Hatası!";
}

?>