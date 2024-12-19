<?php

require_once dirname(__FILE__) . '/../system/database.php';
require_once dirname(__FILE__) . '/../system/functions.php';
require_once dirname(__FILE__) . '/APIJson.php';

$Result = array();

$mAPIJson = new APIJson();
$mAPIJson->GetInputStream();

if ($mAPIJson->isJSONValid()) {

	$RequestOBJ_ = $mAPIJson->StreamArray;

	$Query = $db->query("SELECT *,distributors.id AS ID FROM distributors
		LEFT JOIN city ON city.id = distributors.company_city_id
		LEFT JOIN county ON county.id = distributors.company_county_id");
	$i = 0;
	$Result['Status'] = "OK";
	$Result["StatusDescription"] = "Bayiler Çekildi !";
	while ($row = $Query->fetch_assoc()) {
		$Result["Distributors"][$i]["DistributorName"] = $row["company_name"];
		$Result["Distributors"][$i]["DistributorAddress"] = $row["company_address"];
		$Result["Distributors"][$i]["DistributorEmail"] = $row["company_contact_email"];
		$Result["Distributors"][$i]["DistributorPhone"] = $row["company_phone1"];
		$Result["Distributors"][$i]["DistributorMobilePhone"] = $row["company_mobile"];
		$Result["Distributors"][$i]["DistributorCity"] = $row["city_name"];
		$Result["Distributors"][$i]["DistributorCounty"] = $row["county_name"];
		$i++;
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
