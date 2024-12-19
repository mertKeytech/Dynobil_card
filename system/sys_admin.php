<?php
require_once("database.php");



	if(@$_GET['do'] == "" or $_GET["do"] == 1) {


		$ModuleSQL = $db->query("SELECT * FROM module_list ORDER BY id ASC");
?>
<h2>Module List</h2>
<table border="1">
<tr>
	<td>Module Name</td>
	<td>Module Path</td>
	<td>Module Menu Title TR</td>
	<td>Menu Icon</td>
	<td>No Follow</td>
</tr>
<?php
		while($row = $ModuleSQL->fetch_assoc()) {
?>
	<tr>
		<td><a href="sys_admin.php?do=2&module_id=<?=$row["id"]?>"><?=$row["module_name"]?></a></td>
		<td><?=$row["module_path"]?></td>
		<td><?=$row["module_menu_title_tr"]?></td>
		<td><?=$row["menu_icon"]?></td>
		<td><?=$row["no_follow"]?></td>
	</tr>

<?php
		}
	} else if($_GET["do"] == 2) {
		
		if($_POST) {
			$db->query("INSERT INTO module_menu (module_id, menu_text_tr, menu_link, default_process, visible_menu, sequence) VALUES 
			('".$_GET["module_id"]."', '".$_POST["menu_text_tr"]."','".$_POST["menu_link"]."', '".$_POST["default_process"]."','".$_POST["visible_menu"]."','".$_POST["sequence"]."')");
			
		}
		$ModuleRead = $db->query("SELECT * FROM module_list WHERE id='".$_GET["module_id"]."'")->fetch_assoc();
		$ModuleMenuSQL = $db->query("SELECT * FROM module_menu WHERE module_id='".$_GET["module_id"]."'");
?>
<a href="sys_admin.php?do=1">Back to Process List</a><br /><br />
<h2>Menu List</h2>
<table border="1">
<tr>
	<td>Module Name</td>
	<td>Menu Text TR</td>
	<td>Menu Link</td>
	<td>Default Process</td>
	<td>Visible in Menu</td>
	<td>SEQUENCE</td>
</tr>
<?php	
		while($row = $ModuleMenuSQL->fetch_assoc()) {

?>

	<tr>
		<td><?=$ModuleRead["module_name"]?></td>
		<td><a href="sys_admin.php?do=3&module_id=<?=$ModuleRead["id"]?>&menu_id=<?=$row["id"]?>"><?=$row["menu_text_tr"]?></a></td>
		<td><?=$row["menu_link"]?></td>
		<td><?=$row["default_process"]?></td>
		<td><?=$row["visible_menu"]?></td>
		<td><?=$row["sequence"]?></td>
	</tr>



<?php
		}
?>

</table>
<h3>Add New Menu</h3>
<form method="POST" action="">
	<input type="text" name="menu_text_tr" placeholder="Menu Text TR" />
	<input type="text" name="menu_link" placeholder="Menu Link (.php File)" />
	<input type="text" name="default_process" placeholder="Default Process" />
	<input type="text" name="visible_menu" value="1" />
	<input type="text" name="sequence" value="" placeholder="Sıra Numarası" />
	<input type="submit" name="sbt" value="Add" />
</form>

<?php		
	} else if($_GET["do"] == 3) {
		
		if($_POST) {
			$Add = $db->query("INSERT INTO process_list (menu_id, process_tag,process_name_tr) VALUES ('".$_GET["menu_id"]."', '".$_POST["process_tag"]."', '".$_POST["process_name_tr"]."')");
		}
		if(isset($_GET["del"])) {
			$db->query("DELETE FROM process_list WHERE id='".$_GET["id"]."'");
		}
		$ModuleRead = $db->query("SELECT * FROM module_list WHERE id='".$_GET["module_id"]."'")->fetch_assoc();
		$ModuleMenuRead = $db->query("SELECT * FROM module_menu WHERE id='".$_GET["menu_id"]."'")->fetch_assoc();
		$ProcessSQL = $db->query("SELECT * FROM process_list WHERE menu_id='".$_GET["menu_id"]."'");
?>
<a href="sys_admin.php?do=2&module_id=<?=$_GET["module_id"]?>">Back to Menu List</a><br /><br />
<h2>Process List</h2>
<table border="1">
<tr>
	<td>Module Name</td>
	<td>Menu Name</td>
	<td>Process Tag TR</td>
	<td>Process Name</td>
	<td></td>
</tr>
<?php	
		while($row = $ProcessSQL->fetch_assoc()) {

?>

	<tr>
		<td><?=$ModuleRead["module_name"]?></td>
		<td><?=$ModuleMenuRead["menu_text_tr"]?></td>
		<td><?=$row["process_tag"]?></td>
		<td><?=$row["process_name_tr"]?></td>
		<td><a href="sys_admin.php?do=3&module_id=<?=$_GET["module_id"]?>&menu_id=<?=$_GET["menu_id"]?>&del=1&id=<?=$row["id"]?>">Del</a></td>
	</tr>



<?php
		}
?>
</table>
<h3>Add New Process</h3>
<form method="POST" action="">
	<input type="text" name="process_tag" placeholder="Process Tag" />
	<input type="text" name="process_name_tr" placeholder="Process Name TR" />
	<input type="submit" name="sbt" value="Add" />
</form>
<?php	
	}
?>