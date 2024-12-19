<?php

session_start();
if (isset($_SESSION["user_id"])) {

    require_once("../system/database.php");
    require_once("../system/lang.php");
    /**
     * Created by PhpStorm.
     * User: keytech
     * Date: 21.02.2019
     * Time: 00:30
     */

    //$_POST["id"] = 4;

    $Filter = "device_parameter_history.device_id='".$_POST["id"]."'";
    if(isset($_POST["StartTime"]) and !empty($_POST["StartTime"])){
        $Filter .= " and device_parameter_history.data_unix_time >= '".$_POST["StartTime"]."'";
    }
    if(isset($_POST["EndTime"]) and !empty($_POST["EndTime"])){
        $Filter .= " and device_parameter_history.data_unix_time <= '".$_POST["EndTime"]."'";
    }

    $dateMax = $db->query("SELECT data_unix_time FROM device_parameter_history     
    LEFT JOIN device_type_parameter ON device_type_parameter.id=device_parameter_history.device_type_parameter_id
    WHERE $Filter ORDER BY data_unix_time DESC")->fetch_assoc();
    $Max = date("d-m-Y H:i:s",$dateMax["data_unix_time"]);

    $dateMin = $db->query("SELECT data_unix_time FROM device_parameter_history     
    LEFT JOIN device_type_parameter ON device_type_parameter.id=device_parameter_history.device_type_parameter_id
    WHERE $Filter ORDER BY data_unix_time ASC")->fetch_assoc();
    $Min = date("d-m-Y H:i:s",$dateMin["data_unix_time"]);

    echo mysqli_error($db);

    $rows = array();

    $rows['MAX'] = $Max;
    $rows['MIN'] = $Min;




    echo json_encode($rows);
} else {
    echo "Bu İşlemi Yapmaya Yetkiniz Yoktur!";
}