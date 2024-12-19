<?php

require_once dirname(__FILE__) . '/../system/database.php';
require_once dirname(__FILE__) . '/../system/functions.php';
require_once dirname(__FILE__) . '/APIJson.php';

$Result = array();

$mAPIJson = new APIJson();
$mAPIJson->GetInputStream();

if ($mAPIJson->isJSONValid()) {

	$RequestOBJ_ = $mAPIJson->StreamArray;

	if (!empty($RequestOBJ_["ClientID"])) {
		$Filter = "deposits.client_id = '" . $RequestOBJ_["ClientID"] . "' and deposits.status=1";
		if (isset($RequestOBJ_["StartDate"]) and !empty($RequestOBJ_["StartDate"])) {				
			$Filter .= " and deposits.unixtime >= '" . $RequestOBJ_["StartDate"] . "'";
		}
		if (isset($RequestOBJ_["EndDate"]) and !empty($RequestOBJ_["EndDate"])) {				
			$Filter .= " and deposits.unixtime <= '" . $RequestOBJ_["EndDate"] . "'";
		}
		$Query = $db->query("SELECT *,deposits.unixtime AS UNIXTIME FROM deposits
			LEFT JOIN clients ON clients.id=deposits.client_id WHERE " . $Filter . "");
		
		$i = 0;
		$Result['Status'] = "OK";
		$Result["StatusDescription"] = "Yükleme Raporları Çekildi !";
		while ($row = $Query->fetch_assoc()) {
			if ($row["payment_method"] == 1) {
				$method = "Kredi Kartı";
			} else {
				$method = "DİĞER";
			}
			$Result["Reports"][$i]["DepositDate"] = date("d-m-Y H:i:s", $row["UNIXTIME"]+10800);
			$Result["Reports"][$i]["DepositAmount"] = $row["amount"]." TL";
			$Result["Reports"][$i]["DepositMethod"] = $method;
			
			$i++;
		}    
	}else{
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
