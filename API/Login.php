<?php

require_once dirname(__FILE__) . '/../system/database.php';
require_once dirname(__FILE__) . '/../system/functions.php';
require_once dirname(__FILE__) . '/APIJson.php';

$Result = array();

$mAPIJson = new APIJson();
$mAPIJson->GetInputStream();

if ($mAPIJson->isJSONValid()) {

    $RequestOBJ_ = $mAPIJson->StreamArray;

    if (!empty($RequestOBJ_["PersonelUserName"]) and !empty($RequestOBJ_["PersonelPassword"])) {
        $UserQuery = $db->query("SELECT * FROM user WHERE username='" . $RequestOBJ_['PersonelUserName'] . "' and password='" . md5($RequestOBJ_['PersonelPassword']) . "' and deleted=0 and status=1 and user_group_id=3");
        if ($UserCount == 1) {
            $ReadUser = $UserQuery->fetch_assoc();
            $DistQuery = $db->query("SELECT * FROM clients WHERE user_id='".$ReadUser['id']."'")->fetch_assoc();
            $Result['UserID'] = (int)$ReadUser['id'];            
            $Result['Name'] = $ReadUser['name'];
            $Result['UserName'] = $ReadUser['username'];
            $Result["ClientID"] = (int)$DistQuery["id"];
            $Result['Address'] = $DistQuery['client_address'];
            $Result['Mobile'] = $DistQuery['client_mobile'];
            $Result['Status'] = "OK";
            $Result["StatusDescription"] = "Giriş Başarılı !";
        } else {
            $Result['Status'] = "-1";
            $Result["StatusDescription"] = "Müşteri Bulunamadı!";
        }              

    } else {
        $Result["Status"] = "-2";
        $Result["StatusDescription"] = "Eksik Alan !";
    }
} else {
    $Result["Status"] = "-3";
    $Result["StatusDescription"] = "POST Edilen data json formatında değil.";
}

$ResultJSON = json_encode($Result);
ob_clean();
echo $ResultJSON;
exit;
?>
