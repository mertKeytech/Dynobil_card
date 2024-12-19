<?php
ob_start();
session_start();

require_once('../system/database.php');

$id = $_POST["id"];
$url = $_POST["url"];
$name = $_POST["name"];

$UpdateReport = $db->query("UPDATE reports SET report_file_" . $name . "='' WHERE transaction_id='" . $id . "'");

if($UpdateReport){
	unlink("../".$url);
    echo "ok";
}else{
    echo "Sistem Hatası!";
}

?>