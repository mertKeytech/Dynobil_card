<?php

require_once dirname(__FILE__) . '/../system/database.php';
require_once dirname(__FILE__) . '/APISecurity.php';

class APIToken {

	private $db;
	private $Token;
	private $ClientIP;


	private $TokenValidTime = 30; //Token will be valid for 30 seonds.


	public function APIToken() {

		global $db;
		$this->db = $db;

		$this->ClientIP = APISecurity::GetClientIPAddress();
		$this->ClearToken();

	}

	public function CreateNewToken() {
		$this->Token = bin2hex(openssl_random_pseudo_bytes(64));
		$Time = time() + $this->TokenValidTime;
		$this->db->query("INSERT INTO token (ip_address, token, valid_time) VALUES ('".$this->ClientIP."', '".$this->Token."', '".$Time."')");
		return $this->Token;
	}

	private function UseToken() {

		$this->db->query("DELETE FROM token WHERE token='".$this->Token."'");

	}

	public function TokenControl($Token) {
		$this->Token = $Token;
		$RecordControl = $this->db->query("SELECT * FROM token WHERE ip_address = '".$this->ClientIP."' and token='".$this->Token."' and valid_time > '".time()."'")->num_rows;
		if($RecordControl == 1 or 1 == 1) {
			$this->UseToken();
			return true;
		} else {
			return false;
		}
	}

	public function ClearToken() {

		$this->db->query("DELETE FROM token WHERE valid_time < '".time()."' LIMIT 1000");

	}
}
?>
