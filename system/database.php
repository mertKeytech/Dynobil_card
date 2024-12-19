<?php
error_reporting(0);
date_default_timezone_set('Europe/Istanbul');


$HOST = "keytech.com.tr";
$USER = "root";
$PASS = "KeyTech2015**";
$DB = "dynobil_card";

$db = mysqli_connect($HOST, $USER, $PASS, $DB);
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit;
}
$db->set_charset("utf8");

include_once("security.php");
mSecurity($_POST, $db);
mSecurity($_GET, $db);

?>
