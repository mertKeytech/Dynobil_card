<?php
session_start();


require_once dirname(__FILE__) . '/../system/database.php';


class APISecurity {

	//global $db;
	private $db;
	private $ClientIP;
	private $Time;

	private $TimeInterval = 5; //Seconds
	private $MaxRequest = 25;	//Max Request per Interval

	public function APISecurity($db) {

		$this->db = $db;
		$this->Time = time();
		$this->ClientIP = APISecurity::GetClientIPAddress();

		$this->LogRequest();
		$this->ClearLog(); // il will be deleted -> will be added in CronTab ie : ClearAccessLog.php
	}

	public function ClientControl() {

		$CountUserRequests = $this->db->query("SELECT * FROM firewall WHERE ip_address='".$this->ClientIP."'")->num_rows;

		if($CountUserRequests > $this->MaxRequest) {
			return false;
		} else {
			return true;
		}

	}

	public function GetClientIP() {
		return $this->ClientIP;
	}

	private function LogRequest() {
		$this->db->query("INSERT INTO firewall (ip_address,unix_time) VALUES ('".$this->ClientIP."', '".$this->Time."')");
	}

	public function GrantLog($api_name, $param1, $param2, $param3 = 0 ,$city_id=0, $county_id=0) {
		$this->db->query("INSERT INTO tbl_log (ip_address,unix_time,api_name, param1, param2, city_id, county_id, param3) 
		VALUES ('".$this->ClientIP."', '".$this->Time."','".$api_name."', '".$param1."','".$param2."', '".$city_id."', '".$county_id."', '".$param3."')");
	}

	public function ClearLog() {
		$Time = time() - $this->TimeInterval;
		$this->db->query("DELETE FROM firewall WHERE unix_time < '".$Time."' LIMIT 1000");
	}

	public static function GetClientIPAddress() {
	    // check for shared internet/ISP IP
	    if (!empty($_SERVER['HTTP_CLIENT_IP']) && validate_ip($_SERVER['HTTP_CLIENT_IP'])) {
	        return $_SERVER['HTTP_CLIENT_IP'];
	    }

	    // check for IPs passing through proxies
	    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
	        // check if multiple ips exist in var
	        if (strpos($_SERVER['HTTP_X_FORWARDED_FOR'], ',') !== false) {
	            $iplist = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
	            foreach ($iplist as $ip) {
	                if (validate_ip($ip))
	                    return $ip;
	            }
	        } else {
	            if (validate_ip($_SERVER['HTTP_X_FORWARDED_FOR']))
	                return $_SERVER['HTTP_X_FORWARDED_FOR'];
	        }
	    }
	    if (!empty($_SERVER['HTTP_X_FORWARDED']) && validate_ip($_SERVER['HTTP_X_FORWARDED']))
	        return $_SERVER['HTTP_X_FORWARDED'];
	    if (!empty($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']) && validate_ip($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']))
	        return $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
	    if (!empty($_SERVER['HTTP_FORWARDED_FOR']) && validate_ip($_SERVER['HTTP_FORWARDED_FOR']))
	        return $_SERVER['HTTP_FORWARDED_FOR'];
	    if (!empty($_SERVER['HTTP_FORWARDED']) && validate_ip($_SERVER['HTTP_FORWARDED']))
	        return $_SERVER['HTTP_FORWARDED'];

	    // return unreliable ip since all else failed
	    return $_SERVER['REMOTE_ADDR'];
	}
}
?>
