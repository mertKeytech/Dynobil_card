<?php
require_once("../system/database.php");
$Filter = "id!=0";
if (isset($_GET["distributor"]) and !empty($_GET["distributor"])) {
    $Filter .= " and dist_id='" . $_GET["distributor"] . "'";
}
if (isset($_GET["client"]) and !empty($_GET["client"])) {
    $Filter .= " and client_id='" . $_GET["client"] . "'";
}
if (isset($_GET["StartDate"]) and !empty($_GET["StartDate"])) {
    $time = strtotime($_GET["StartDate"]);
    $Filter .= " and start_unixtime>='" . $time . "'";
    $DATE = date("Y-m-d", $time);
} else {
    $DATE = date("Y-m-d", time());
}
if (isset($_GET["EndDate"]) and !empty($_GET["EndDate"])) {
    $time = strtotime($_GET["StartDate"]);
    $Filter .= " and start_unixtime<='" . $time . "'";
}
if (isset($_GET["status"]) and !empty($_GET["status"])) {
    $Filter .= " and date_status='" . $_GET["status"] . "'";
}
$SelectDate = $db->query("SELECT * FROM date_list WHERE " . $Filter . "");
$Array = array();
$i = 0;
while ($row = $SelectDate->fetch_assoc()) {
    $Dist = $db->query("SELECT * FROM distributors WHERE id='" . $row["dist_id"] . "'")->fetch_assoc();
    $Client = $db->query("SELECT * FROM clients WHERE id='" . $row["client_id"] . "'")->fetch_assoc();
    $Array[$i]["title"] = $Dist["company_name"] . "/" . $Client["client_name"];
    $Array[$i]["start"] = date("Y-m-d H:i:s", $row["start_unixtime"]);
    $Array[$i]["end"] = date("Y-m-d H:i:s", $row["start_unixtime"] + 60 * 60);
    $Array[$i]["start"] = str_replace(" ","T",$Array[$i]["start"]);
    $Array[$i]["end"] = str_replace(" ","T",$Array[$i]["end"]);
    $i++;
}

echo json_encode($Array);
