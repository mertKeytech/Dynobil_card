<?php

require_once dirname(__FILE__) . '/../system/database.php';
require_once dirname(__FILE__) . '/../system/functions.php';
require_once dirname(__FILE__) . '/APIJson.php';

$Result = array();

$mAPIJson = new APIJson();
$mAPIJson->GetInputStream();

if ($mAPIJson->isJSONValid()) {

    $RequestOBJ_ = $mAPIJson->StreamArray;

    if (!empty($RequestOBJ_["Phone"])) {
        $UserQuery = $db->query("SELECT * FROM clients WHERE client_mobile LIKE '%" . $RequestOBJ_['Phone'] . "' and deleted=0 and is_active=1")->fetch_assoc();
        if ($UserQuery["id"] != "") {
            $SelectCard = $db->query("SELECT * FROM cards WHERE id='".$UserQuery["card_id"]."'")->fetch_assoc();
            $Result['Status'] = "OK";
            $Result["StatusDescription"] = "Müşteri Bulundu!";
            $Result["ClientName"] = $UserQuery["client_name"];
            $Result["ClientAddress"] = $UserQuery["client_address"];
            $Result["ClientPhone"] = $UserQuery["client_mobile"];
            $Result["ClientTC"] = $UserQuery["client_tc"];
            $Result["ClientTAXNo"] = $UserQuery["client_tax_no"];
            $Result["ClientTAXName"] = $UserQuery["client_tax_name"];
            $Result["ClientCredit"] = $UserQuery["credit"];
            $Result["ClientCardNo"] = $SelectCard["card_number"];
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
