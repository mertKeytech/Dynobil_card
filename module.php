<?php
	
	
	if(isset($_GET['module'])) {
	
	
	$pos = strpos($_GET["module"], "../");
	if($pos !== false) {
		exit;
	}
	echo $pos;
	
		require_once("module/".$_GET['module'].".php");
		} else {
		require_once("module/main/main.php");
	}
?>

