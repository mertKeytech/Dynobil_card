<?php
ob_start();
session_start();

require_once('../system/database.php');
$id = $_POST["id"];

$delete = $db->query("UPDATE user SET deleted=1 WHERE user_group_id='".$id."'");
$deleteGroup = $db->query("UPDATE user_group SET deleted=1 WHERE id='".$id."'");


if($delete && $deleteGroup){
    echo "ok";
}else{
    echo "Sistem Hatası!";
}

?>