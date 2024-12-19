<?php
$url = $_GET["url"];

$url = urldecode($url);

$image = file_get_contents($url);
header("Content-Type: image/jpeg");
echo $image;

?>