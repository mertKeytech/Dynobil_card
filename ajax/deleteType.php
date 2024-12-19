<?php
ob_start();
session_start();

require_once('../system/database.php');

$id = $_POST["id"];

$delete = $db->query("DELETE FROM credit_cards_type WHERE id='".$id."'");
if($delete){
    echo "ok";
}else{
    echo "Sistem Hatası!";
}

?>