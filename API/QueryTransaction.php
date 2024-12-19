<?php

require_once dirname(__FILE__) . '/../system/database.php';
require_once dirname(__FILE__) . '/../system/functions.php';
require_once dirname(__FILE__) . '/APIJson.php';

$Result = array();

$mAPIJson = new APIJson();
$mAPIJson->GetInputStream();

if ($mAPIJson->isJSONValid()) {

    $RequestOBJ_ = $mAPIJson->StreamArray; /*
	$RequestOBJ_["CardNo"] = "2843430116582387";
	$RequestOBJ_["SmsKey"] = "2553";
	*/
	
    if (!empty($RequestOBJ_["CardNo"]) and !empty($RequestOBJ_["SmsKey"])) {
	
	
		$FindClientByCardNo = $db->query("SELECT clients.id as mClientID FROM clients LEFT JOIN cards ON cards.id = clients.card_id 
		WHERE cards.card_number = '".$RequestOBJ_["CardNo"]."'");
		
		
		
		if($FindClientByCardNo->num_rows == 1) {
		
			$ReadClient = $FindClientByCardNo->fetch_assoc();
			
			
			//GET TRANSACTION INFO
			
			$GetMaxID = ($db->query("SELECT * FROM transactions ORDER BY id DESC LIMIT 0, 1")->fetch_assoc());
			
			$MaxID = $GetMaxID["id"] - 50;

		
			$GetTransaction = $db->query("SELECT * FROM transactions 
			WHERE sms_key='".$RequestOBJ_["SmsKey"]."' and 
			client_id='".$ReadClient["mClientID"]."' and 
			transaction_status = '4' and id > '".$MaxID."'");
			
			if($GetTransaction->num_rows == 1) {
				$GetTransactionData = $GetTransaction->fetch_assoc();
								
				if($GetTransactionData["is_api"] == 0) {
					$Result["Status"] = "0";
					$Result["StatusDescription"] = "Kayit Bulundu ! Isleme Alinabilir !";	
					$Result["TransactionID"] = $GetTransactionData["id"];
				} else {
					$Result["Status"] = "-5";
					$Result["StatusDescription"] = "Kayit Bulundu ! Islem Zaten Yapilmis !";	
				}
			
			} else {
				$Result["Status"] = "-4";
				$Result["StatusDescription"] = "Islem Kaydi Bulunamadi yada Zaman Asimina Ugramis";	
			}
			
		
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
