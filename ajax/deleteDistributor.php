<?php
ob_start();
session_start();

require_once('../system/database.php');

$id = $_POST["id"];

$SelectDist = $db->query("SELECT * FROM distributors WHERE id='".$id."'")->fetch_assoc();

$deleteUser = $db->query("UPDATE user SET deleted=1 WHERE id='".$SelectDist["user_id"]."'");
$deleteDist = $db->query("UPDATE distributors SET deleted=1 WHERE id='".$id."'");

if($deleteUser && $deleteDist){
    echo "ok";
}else{
    echo "Sistem Hatası!";
}

?>