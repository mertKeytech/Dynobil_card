<?php

require_once dirname(__FILE__) . '/../system/database.php';
require_once dirname(__FILE__) . '/APIJson.php';
$Result = array();
$mAPIJson = new APIJson();

if(isset($_GET['data'])){
    $_GET["data"] = str_replace('\\','',$_GET["data"]);
    $_GET["data"] = str_replace("'",'"',$_GET["data"]);
    $mAPIJson->SetInputStream($_GET['data']);
} else {
    $mAPIJson->GetInputStream();
}

if ($mAPIJson->isJSONValid()) {


    $RequestOBJ_ = $mAPIJson->StreamArray;

    if (!empty($RequestOBJ_["DeviceUniqueID"]) && !empty($RequestOBJ_["UnixTime"])) {
        $ControlDevice = $db->query("SELECT * FROM device WHERE device_unique_id = '".$RequestOBJ_["DeviceUniqueID"]."'");
        $CountControlDevice = $ControlDevice->num_rows;
        if($CountControlDevice == 1){
            $Device = $ControlDevice->fetch_assoc();
            $updateComm = $db->query("UPDATE device SET device_last_comm_time='".time()."' WHERE device_unique_id='".$RequestOBJ_["DeviceUniqueID"]."'"); // Son Haberleşme Zamanı Güncellendi.
            $serialized_array = "Parameters:".json_encode($RequestOBJ_["Parameters"])." Configuratios:".json_encode($RequestOBJ_["Configurations"]);
            $InsertRowData = $db->query("INSERT INTO device_raw_data (device_id,raw_data,data_unix_time,data_receive_time,packet_type) VALUES('".$Device["id"]."','".$serialized_array."','".$RequestOBJ_["UnixTime"]."','".time()."',1)");
            if($InsertRowData){
                $ParameterCount = count($RequestOBJ_["Parameters"]);
                $ConfigurationCount = count($RequestOBJ_["Configurations"]);
                foreach($RequestOBJ_["Parameters"] as $key=>$value2){
                    $query = $db->query("SELECT * FROM device_type_parameter WHERE parameter_unique_id='".$key."'")->fetch_assoc();
                    if($query["id"]!=""){
                        if($query["parameter_type"]==1){
                            $type = "val_int";
                        } else if($query["parameter_type"]==2){
                            $type = "val_double";
                        } else if($query["parameter_type"]==3){
                            $type = "val_boolean";
                        } else if($query["parameter_type"]==4){
                            $type = "val_string";
                        } else if($query["parameter_type"]==5){
                            $type = "val_array";
                        }
                        $value = $value2;
                        //$queryPara = "INSERT INTO device_parameter_history(data_unix_time,device_id,device_type_parameter_id,".$type.")
                        //VALUES('".$RequestOBJ_["UnixTime"]."','".$Device["id"]."','".$query["id"]."','".$value."')";

                        $InsertHistoryParameter = $db->query("INSERT INTO device_parameter_history(data_unix_time,device_id,device_type_parameter_id,".$type.") 
                        VALUES('".$RequestOBJ_["UnixTime"]."','".$Device["id"]."','".$query["id"]."','".$value."')");
                        $UpdateDeviceParameter = $db->query("UPDATE device_parameter SET ".$type."='".$value."' WHERE device_id='".$Device["id"]."' and device_type_parameter_id='".$query["id"]."'");

                    } else {
                        continue;
                    }
                }

                /*foreach(($RequestOBJ_["Configurations"] as $key=>$value2)
                    $query = $db->query("SELECT * FROM device_type_configuration WHERE configuration_unique_id='".$key."'")->fetch_assoc();
                    if($query["id"]!=""){
                        if($query["configuration_type"]==1){
                            $type = "val_int";
                        } else if($query["configuration_type"]==2){
                            $type = "val_double";
                        } else if($query["configuration_type"]==3){
                            $type = "val_boolean";
                        } else if($query["configuration_type"]==4){
                            $type = "val_string";
                        } else if($query["configuration_type"]==5){
                            $type = "val_array";
                        }
                        $value = $value2;
                        $UpdateDeviceParameter = $db->query("UPDATE device_configuration SET ".$type."='".$value."' WHERE device_id='".$Device["id"]."' and device_type_configuration_id='".$query["id"]."'");

                    } else {
                        continue;
                    }
                }*/
                $Result["Status"] = "OK";
                $FetchConfiguration = $db->query("SELECT * FROM device_configuration
                LEFT JOIN device_type_configuration ON device_type_configuration.id=device_configuration.device_type_configuration_id WHERE device_configuration.device_id = '".$Device["id"]."'");
                $j = 0;
                while($row=$FetchConfiguration->fetch_assoc()){
                    if($row["configuration_type"]==1){
                        $value = $row["val_int"];
                    } else if($row["configuration_type"]==2){
                        $value = $row["val_double"];
                    } else if($row["configuration_type"]==3){
                        $value = $row["val_boolean"];
                    } else if($row["configuration_type"]==4){
                        $value = $row["val_string"];
                    } else if($row["configuration_type"]==5){
                        $value = $row["val_array"];
                    }
                    $Result[$row["configuration_unique_id"]] = (int)$value;
                    $j++;
                }                

            } else {
                $Result["Status"] = "-2";
                $Result["StatusDescription"] = "Sistem Hatası!";
            }
        } else {
            $Result["Status"]="-3";
            $Result["StatusDescription"] = "Cihaz Sistemde Kayıtlı Değil";
        }
    } else {
        $Result["Status"] = "-4";
        $Result["StatusDescription"] = "Tüm Alanları Doldurunuz !";
    }
} else {
    $Result["Status"] = "-5";
    $Result["StatusDescription"] = "POST Edilen data json formatında değil.";
    echo $mAPIJson->InputStream;
    exit;
}

$ResultJSON = json_encode($Result);
ob_clean();
echo $ResultJSON;
exit;
?>
