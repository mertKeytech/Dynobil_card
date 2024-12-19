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

    $Filter = "device_parameter_history.device_id='" . $_POST["id"] . "'";
    if (isset($_POST["StartTime"]) and !empty($_POST["StartTime"])) {
        $Filter .= " and device_parameter_history.data_unix_time >= '" . $_POST["StartTime"] . "'";
    }
    if (isset($_POST["EndTime"]) and !empty($_POST["EndTime"])) {
        $Filter .= " and device_parameter_history.data_unix_time <= '" . $_POST["EndTime"] . "'";
    }

    $parameter = $db->query("SELECT * FROM device_parameter_history     
    LEFT JOIN device_type_parameter ON device_type_parameter.id=device_parameter_history.device_type_parameter_id
    WHERE $Filter ORDER BY data_unix_time DESC,device_type_parameter.id ASC");
    echo mysqli_error($db);

    $rows = array();
    $rows2 = array();
    $rowData = array();


    while ($row = $parameter->fetch_assoc()) {

        if ($row["is_visible"] == 2) {
            continue;
        }
        if ($row["parameter_type"] == 1) {
            $row["VALUE"] = $row["val_int"];
        } else if ($row["parameter_type"] == 2) {
            $row["VALUE"] = $row["val_double"];
        } else if ($row["parameter_type"] == 3) {
            $row["VALUE"] = $row["val_boolean"];
        } else if ($row["parameter_type"] == 4) {
            $row["VALUE"] = $row["val_string"];
        } else if ($row["parameter_type"] == 5) {
            $row["VALUE"] = $row["val_array"];
        }


        $row["data_unix_time"] = date("m/d/Y H:i:s", $row["data_unix_time"]);

        $rows[$row["data_unix_time"]][] = $row;

        //array_push($rows, $row);
    }


    $color = array("#FFAA00","#DCDCDC","#DC143C","#BDB76B","#BC8F8F","#556B2F","#00FF00","#40E0D0","#0000CD","#FF00FF");

    $xaxis = array();
    $series = array();
    $yaxis = array();
    $xaxis["type"] = 'datetime';
    $i = 0;

    foreach($rows as $key=>$value){
        $xaxis['categories'][$i] = $key;
        $i++;
    }
    $parameter = $db->query("SELECT * FROM device_parameter_history     
    LEFT JOIN device_type_parameter ON device_type_parameter.id=device_parameter_history.device_type_parameter_id
    WHERE $Filter ORDER BY data_unix_time DESC,device_type_parameter.id ASC");
    while ($row = $parameter->fetch_assoc()) {

        if ($row["is_visible"] == 2) {
            continue;
        }
        if ($row["parameter_type"] == 1) {
            $row["VALUE"] = $row["val_int"];
        } else if ($row["parameter_type"] == 2) {
            $row["VALUE"] = $row["val_double"];
        } else if ($row["parameter_type"] == 3) {
            $row["VALUE"] = $row["val_boolean"];
        } else if ($row["parameter_type"] == 4) {
            $row["VALUE"] = $row["val_string"];
        } else if ($row["parameter_type"] == 5) {
            $row["VALUE"] = $row["val_array"];
        }


        $row["data_unix_time"] = date("m/d/Y H:i:s", $row["data_unix_time"]);

        $rows2[$row["parameter_name"]][] = $row;

        //array_push($rows, $row);
    }

    $i=0;
	$max = array();
	$min = array();
	
    foreach($rows2 as $key=>$value){
        $j = 0;

        if($i==0){
            $status = false;
        } else {
            $status = true;
        }
		$max[$i] = 0;
		$min[$i] = 0;
        foreach($value as $key2=>$value2) {
            $series[$i]['name'] = $value2["parameter_name"];
            $series[$i]['data'][(int)$j] = round($value2["VALUE"],4);
            $j++;
			
			if($value2["VALUE"] > $max[$i] or $max[$i] == 0)
				$max[$i] = $value2["VALUE"];
				
			if($value2["VALUE"] < $min[$i] or $min[$i] == 0)
				$min[$i] = $value2["VALUE"];
			
        }
		/*
		if($max[$i] < 0) 
			$max[$i] = 0;
		if($min[$i] > 0)
			$min[$i] = 0;
		*/
        $yaxis[$i]['seriesName'] = $value[0]['parameter_name'];
        $yaxis[$i]['opposite'] = $status;
        $yaxis[$i]['max'] = $max[$i] + abs($max[$i]*0.25);
        $yaxis[$i]['min'] = $min[$i] - abs($min[$i]*0.25);
        $yaxis[$i]['axisTicks']['show'] = true;
        $yaxis[$i]['axisBorder']['show'] = true;
        $yaxis[$i]['axisBorder']['color'] = $color[$i];
        $yaxis[$i]['labels']['style']['color'] = $color[$i];
        $yaxis[$i]['labels']['style']['fontsize'] = '12px';
        $yaxis[$i]['title']['text'] = $value[0]['parameter_name'];
        $yaxis[$i]['title']['style']['color'] = $color[$i];

        $i++;

    }
    $rowData['series'] = $series;
    $rowData['xaxis'] = $xaxis;
    $rowData['yaxis'] = $yaxis;

    echo json_encode($rowData);
} else {
    echo "Bu İşlemi Yapmaya Yetkiniz Yoktur!";
}
