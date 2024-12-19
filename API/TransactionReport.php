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
		$Filter = "transactions.client_id = '" . $RequestOBJ_["ClientID"] . "' and transactions.transaction_status=4";
		if (isset($RequestOBJ_["StartDate"]) and !empty($RequestOBJ_["StartDate"])) {				
			$Filter .= " and transactions.unix_time >= '" . $RequestOBJ_["StartDate"] . "'";
		}
		if (isset($RequestOBJ_["EndDate"]) and !empty($RequestOBJ_["EndDate"])) {				
			$Filter .= " and transactions.unix_time <= '" . $RequestOBJ_["EndDate"] . "'";
		}
		$Query = $db->query("SELECT * FROM transactions
			LEFT JOIN clients ON clients.id=transactions.client_id 
			LEFT JOIN distributors ON distributors.id=transactions.distributor_id                                         
			WHERE " . $Filter . "");
		
		$i = 0;
		$Result['Status'] = "OK";
		$Result["StatusDescription"] = "Harcama Raporları Çekildi !";
		while ($row = $Query->fetch_assoc()) {
			if($row["transaction_type"]==1){
				$TYPE = "NORMAL";
			} else {
				$TYPE = "KREDİLİ";
			}
			$Result["Reports"][$i]["TransactionDate"] = date("d-m-Y H:i:s", $row["unix_time"]);
			$Result["Reports"][$i]["TransactionAmount"] = $row["amount"] . " TL - ".$TYPE;
			$Result["Reports"][$i]["CampaignAmount"] = $row["campaign_amount"] . " TL";
			
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
