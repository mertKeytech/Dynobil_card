<?php
	//error_reporting(E_ALL);
	function htmlContextCleaner($input) {
        $bad_chars = array("<", ">");
		
        $safe_chars = array("&lt;", "&gt;");
		
        $output = str_replace($bad_chars, $safe_chars, $input);
		
        return stripslashes($output);
	}
	function scriptContextCleaner($input) {
        $bad_chars = array("\"", "<", "'", "\\\\", "%", "&");
		
        $safe_chars = array("&quot;", "&lt;", "&apos;", "&bsol;", "&percnt;", "&amp;");
		
        $output = str_replace($bad_chars, $safe_chars, $input);
		
        return stripslashes($output);
	}
	function attributeContextCleaner($input) {
        $bad_chars = array("\"", "'",  "`");
		
        $safe_chars = array("&quot;", "&apos;", "&grave;");
		
        $output = str_replace($bad_chars, $safe_chars, $input);
		
        return stripslashes($output);
	}
	function styleContextCleaner($input) {
        $bad_chars = array("\"", "'", "``", "(", "\\\\", "<", "&");
		
        $safe_chars = array("&quot;", "&apos;", "&grave;", "&lpar;", "&bsol;", "&lt;", "&amp;");
		
        $output = str_replace($bad_chars, $safe_chars, $input);
		
        return stripslashes($output);
	}
	function urlContextCleaner($url) {
        if(preg_match("#^(?:(?:https?|ftp):{1})\/\/[^\"\s\\\\]*.[^\"\s\\\\]*$#iu",(string)$url,$match))
        {
            return $match[0];
		}
        else {
            $noxss='javascript:void(0)';
            return $noxss;
		}
	}
	function xss_clean($data)
	{
		// Fix &entity\n;
		$data = str_replace(array('&amp;','&lt;','&gt;'), array('&amp;amp;','&amp;lt;','&amp;gt;'), $data);
		$data = preg_replace('/(&#*\w+)[\x00-\x20]+;/u', '$1;', $data);
		$data = preg_replace('/(&#x*[0-9A-F]+);*/iu', '$1;', $data);
		$data = html_entity_decode($data, ENT_COMPAT, 'UTF-8');
		
		// Remove any attribute starting with "on" or xmlns
		$data = preg_replace('#(<[^>]+?[\x00-\x20"\'])(?:on|xmlns)[^>]*+>#iu', '$1>', $data);
		
		// Remove javascript: and vbscript: protocols
		$data = preg_replace('#([a-z]*)[\x00-\x20]*=[\x00-\x20]*([`\'"]*)[\x00-\x20]*j[\x00-\x20]*a[\x00-\x20]*v[\x00-\x20]*a[\x00-\x20]*s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:#iu', '$1=$2nojavascript...', $data);
		$data = preg_replace('#([a-z]*)[\x00-\x20]*=([\'"]*)[\x00-\x20]*v[\x00-\x20]*b[\x00-\x20]*s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:#iu', '$1=$2novbscript...', $data);
		$data = preg_replace('#([a-z]*)[\x00-\x20]*=([\'"]*)[\x00-\x20]*-moz-binding[\x00-\x20]*:#u', '$1=$2nomozbinding...', $data);
		
		// Only works in IE: <span style="width: expression(alert('Ping!'));"></span>
		$data = preg_replace('#(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?expression[\x00-\x20]*\([^>]*+>#i', '$1>', $data);
		$data = preg_replace('#(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?behaviour[\x00-\x20]*\([^>]*+>#i', '$1>', $data);
		$data = preg_replace('#(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:*[^>]*+>#iu', '$1>', $data);
		
		// Remove namespaced elements (we do not need them)
		$data = preg_replace('#</*\w+:\w[^>]*+>#i', '', $data);
		filter_var($data, FILTER_SANITIZE_STRING);
		do
		{
			// Remove really unwanted tags
			$old_data = $data;
			$data = preg_replace('#</*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|i(?:frame|layer)|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|title|xml)[^>]*+>#i', '', $data);
		}
		while ($old_data !== $data);
		
		// we are done...
		return $data;
	}	
	
	
	function mSecurity(&$mVal, $db) {
		foreach ($mVal as $key => $val) {
			if(!is_array($mVal[$key])) {
				$mVal[$key] = stripslashes($val);
				$mVal[$key] = mysqli_real_escape_string($db, $val);
				$mVal[$key] = filter_var($val, FILTER_SANITIZE_STRIPPED);
				$mVal[$key] = xss_clean($val);
				$mVal[$key] = htmlContextCleaner($val);
				$mVal[$key] = scriptContextCleaner($val);
				$mVal[$key] = attributeContextCleaner($val);
				//$mVal[$key] = urlContextCleaner($val);
				//$mVal[$key] = 2;
				} else {
				mSecurity($mVal[$key], $db);
			}
		}	
	}
?>