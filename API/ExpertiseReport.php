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
			$Filter .= " and reports.upload_unixtime >= '" . $RequestOBJ_["StartDate"] . "'";
		}
		if (isset($RequestOBJ_["EndDate"]) and !empty($RequestOBJ_["EndDate"])) {				
			$Filter .= " and reports.upload_unixtime <= '" . $RequestOBJ_["EndDate"] . "'";
		}
		$Query = $db->query("SELECT *,transactions.id AS ID FROM transactions
			LEFT JOIN clients ON clients.id=transactions.client_id 
			LEFT JOIN distributors ON distributors.id=transactions.distributor_id
			LEFT JOIN reports ON transactions.id=reports.transaction_id WHERE " . $Filter . "");
		
		$i = 0;
		$Result['Status'] = "OK";
		$Result["StatusDescription"] = "Expertiz Raporları Çekildi !";

		while ($row = $Query->fetch_assoc()) {
			$Value = "card.dynobil.com/";
			$QueryReport = $db->query("SELECT * FROM reports WHERE transaction_id='" . $row["ID"] . "'")->fetch_assoc();
			$Result["Reports"][$i]["UploadDate"] = date("d-m-Y H:i:s", $row["upload_unixtime"]);
			$Result["Reports"][$i]["UploadReport"]["ANASAYFA"] = $QueryReport["report_file_url"] != "" ? $Value.$QueryReport["report_file_url"] : "-";
			$Result["Reports"][$i]["UploadReport"]["DYNO1"] = $QueryReport["report_file_dyno1"] != "" ? $Value.$QueryReport["report_file_dyno1"] : "-";
			$Result["Reports"][$i]["UploadReport"]["DYNO2"] = $QueryReport["report_file_dyno2"] != "" ? $Value.$QueryReport["report_file_dyno2"] : "-";
			$Result["Reports"][$i]["UploadReport"]["DYNO3"] = $QueryReport["report_file_dyno3"] != "" ? $Value.$QueryReport["report_file_dyno3"] : "-";
			$Result["Reports"][$i]["UploadReport"]["SUSPANSIYON"] = $QueryReport["report_file_suspansiyon"] != "" ? $Value.$QueryReport["report_file_suspansiyon"] : "-";
			$Result["Reports"][$i]["UploadReport"]["FREN"] = $QueryReport["report_file_fren"] != "" ? $Value.$QueryReport["report_file_fren"] : "-";
			$Result["Reports"][$i]["UploadReport"]["YANALKAYMA"] = $QueryReport["report_file_yanalkayma"] != "" ? $Value.$QueryReport["report_file_yanalkayma"] : "-";
			$Result["Reports"][$i]["UploadReport"]["KAPORTA"] = $QueryReport["report_file_kaporta"] != "" ? $Value.$QueryReport["report_file_kaporta"] : "-";
			$Result["Reports"][$i]["UploadReport"]["HYB"] = $QueryReport["report_file_hyb"] != "" ? $Value.$QueryReport["report_file_hyb"] : "-";
			$Result["Reports"][$i]["UploadReport"]["TSE"] = $QueryReport["report_file_tse"] != "" ? $Value.$QueryReport["report_file_tse"] : "-";
			
			
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
