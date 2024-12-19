<?php

require_once dirname(__FILE__) . '/../system/database.php';
require_once dirname(__FILE__) . '/../system/functions.php';
require_once dirname(__FILE__) . '/APIJson.php';

$Result = array();

$mAPIJson = new APIJson();
$mAPIJson->GetInputStream();

if ($mAPIJson->isJSONValid()) {

    $RequestOBJ_ = $mAPIJson->StreamArray;
	/*
	$RequestOBJ_["CardNo"] = "2843430116582387";
	$RequestOBJ_["TransactionID"] = "22275";
	*/
	
    if (!empty($RequestOBJ_["CardNo"]) and !empty($RequestOBJ_["TransactionID"])) {
	
	
		$FindClientByCardNo = $db->query("SELECT clients.id as mClientID FROM clients LEFT JOIN cards ON cards.id = clients.card_id 
		WHERE cards.card_number = '".$RequestOBJ_["CardNo"]."'");
		
		
		
		if($FindClientByCardNo->num_rows == 1) {
		
			$ReadClient = $FindClientByCardNo->fetch_assoc();
			
			$UpdateTransaction = $db->query("UPDATE transactions SET 
			is_api = 1 WHERE id='".$RequestOBJ_["TransactionID"]."'");
			
			$ReadTransaction = $db->query("SELECT * FROM transactions WHERE id='".$RequestOBJ_["TransactionID"]."'")->fetch_assoc();
			
			$Result["Status"] = "0";
			$Result["StatusDescription"] = "Islem Tamamlandi !";	
			$Result["CreditAmount"] = $ReadTransaction["amount"];
			
			
		
		} else {
	        $Result["Status"] = "-3";
			$Result["StatusDescription"] = "Kart bilgisi bulunamadi !";	
		}
	
    } else {
        $Result["Status"] = "-2";
        $Result["StatusDescription"] = "Eksik Alan !";
    }
} else {
    $Result["Status"] = "-3";
    $Result["StatusDescription"] = "POST Edilen data json formatinda degil.";
}

$ResultJSON = json_encode($Result);
ob_clean();
echo $ResultJSON;
exit;
?>
