<?php

require_once dirname(__FILE__) . '/../system/database.php';
require_once dirname(__FILE__) . '/../system/functions.php';
require_once dirname(__FILE__) . '/APIJson.php';

$Result = array();

$mAPIJson = new APIJson();
$mAPIJson->GetInputStream();

if ($mAPIJson->isJSONValid()) {

	$RequestOBJ_ = $mAPIJson->StreamArray;

	if (!empty($RequestOBJ_["Type"]) and !empty($RequestOBJ_["ClientID"]) and !empty($RequestOBJ_["UserID"])) {
    	if($RequestOBJ_["Type"]==1){ // Profil Bilgileri Listeleme
    		$Query = $db->query("SELECT * FROM clients LEFT JOIN user ON user.id=clients.user_id WHERE user.id='" . $RequestOBJ_["UserID"] . "'");
    		$ReadUser = $Query->fetch_Assoc();
    		$Result["ClientName"] = $ReadUser["client_name"];
    		$Result["ClientAddress"] = $ReadUser["client_address"];
    		$Result["ClientPhone1"] = $ReadUser["client_phone1"];
    		$Result["ClientMobile"] = $ReadUser["client_mobile"];
    		$Result["UserName"] = $ReadUser["username"];
    		$Result["Email"] = $ReadUser["email"];
    		$Query = $db->query("SELECT * FROM contracts WHERE client_id='".$RequestOBJ_["ClientID"]."' and contract_number=1")->fetch_assoc();
    		$Query2 = $db->query("SELECT * FROM contracts WHERE client_id='".$RequestOBJ_["ClientID"]."' and contract_number=2")->fetch_assoc(); 
    		if($Query["contract_url"]!=""){
    			$URL = "card.dynobil.com/".$Query["contract_url"];
    		}else {
    			$URL = "";
    		}
    		if($Query2["contract_url"]!=""){
    			$URL2 = "card.dynobil.com/".$Query2["contract_url"];
    		}else {
    			$URL2 = "";
    		}
    		$Result["Contract1"] = $URL;
    		$Result["Contract2"] = $URL2;
    		$Result['Status'] = "OK";
    		$Result["StatusDescription"] = "Profil Bilgileri Çekildi !";
    	} else if($RequestOBJ_["Type"]==2){ // Profil Bilgileri Güncelleme
    		if (!empty($RequestOBJ_['ClientName']) && !empty($RequestOBJ_['ClientAddress']) && !empty($RequestOBJ_['ClientMobile'])
    			&& !empty($RequestOBJ_['UserName'])) {
    			$ControlUsername = $db->query("SELECT * FROM user WHERE username = '" . $RequestOBJ_["UserName"] . "' and deleted=0 and id!='" . $RequestOBJ_["UserID"] . "'")->num_rows;
    		if ($ControlUsername == 0) {
    			$ControlCompanyName = $db->query("SELECT * FROM clients WHERE client_name = '" . $RequestOBJ_["ClientName"] . "' and user_id!='" . $RequestOBJ_["UserID"] . "'")->num_rows;
    			if ($ControlCompanyName == 0) {
    				$ControlMobile = $db->query("SELECT * FROM clients WHERE client_mobile = '" . $RequestOBJ_["ClientMobile"] . "' and user_id!='" . $RequestOBJ_["UserID"] . "'")->num_rows;
    				if ($ControlMobile == 0) {
    					$UpdateUser = $db->query("UPDATE user SET name='" . $RequestOBJ_["ClientName"] . "',
    						username='" . $RequestOBJ_["UserName"] . "' WHERE id='" . $RequestOBJ_["UserID"] . "'");
    					if (!empty($RequestOBJ_["Password"])) {
    						$UpdateUser = $db->query("UPDATE user SET password='" . md5($RequestOBJ_["Password"]) . "' WHERE id='" . $RequestOBJ_["UserID"] . "'");
    						//echo warning("Şifreniz Güncellenmiştir!<br>Yeni Şifreniz:" . $_POST["password"]);
    					}
    					$UpdateClient = $db->query("UPDATE clients SET client_name='" . $RequestOBJ_["ClientName"] . "',
    						client_address='" . $RequestOBJ_["ClientAddress"] . "',client_phone1='" . $RequestOBJ_["ClientPhone1"] . "',
    						client_mobile='" . $RequestOBJ_["ClientMobile"] . "' WHERE user_id='" . $RequestOBJ_["UserID"] . "'");
    					if ($UpdateUser && $UpdateClient) {
    						$Result['Status'] = "OK";
    						$Result["StatusDescription"] = "Profil Bilgileriniz Güncellendi !";
    						//echo success("Profil Bilgileriniz Güncellendi!");
    					} else {
    						$Result['Status'] = "-1";
    						$Result["StatusDescription"] = "Sistem Hatası! Detay: " . mysqli_error($db);
    						//echo error("Sistem Hatası!<br>" . mysqli_error($db));
    					}
    				} else {
    					$Result['Status'] = "-1";
    					$Result["StatusDescription"] = "Bu Cep No Sistemde Kayıtlı !";
    					//echo error("Bu Cep No Sistemde Kayıtlı");
    				}
    			} else {
    				$Result['Status'] = "-1";
    				$Result["StatusDescription"] = "Bu Müşteri Adı Sistemde Kayıtlı !";
    				//echo error("Bu Müşteri Adı Sistemde Kayıtlı");
    			}

    		} else {
    			$Result['Status'] = "-1";
    			$Result["StatusDescription"] = "Bilinmeyen İşlem Denemesi!";
    			//echo error("Bu Kullanıcı Adı Sistemde Kayıtlı");
    		}
    	} else {
    		$Result['Status'] = "-1";
    		$Result["StatusDescription"] = "Lütfen Zorunlu Alanları Doldurunuz!";
    	}


    } else {
    	$Result['Status'] = "-1";
    	$Result["StatusDescription"] = "Bilinmeyen İşlem Denemesi!";
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
