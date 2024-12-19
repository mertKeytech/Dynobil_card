<?php

	class APIJson {


		public $ResultCode;

		public $ErrorMessages;
		public $StreamArray;

		public $InputStream;
		private $MaxStreamSize = 1024;	//1024 Character length -> 1024 bytes.


		public function APIJson() {

		}

		public function setMaxStreamSize($Size_) {
			$this->MaxStreamSize = $Size_;
		}

		public function setFirewalEnabled($Val_) {
			$this->FirewalEnabled = $Val_;
		}

		public function setAuthRequired($Val_) {
			$this->AuthRequired = $Val_;
		}


		public function GetInputStream() {

			$this->InputStream = file_get_contents('php://input');
		}

		public function SetInputStream($mStream) {

			$this->InputStream = $mStream;
		}

		public function isJSONValid() {

			$returnVal = false;

			$this->StreamArray = json_decode($this->InputStream,true);

			switch (json_last_error()) {

				case JSON_ERROR_NONE:
					$returnVal = true;
					break;
				case JSON_ERROR_DEPTH:
					$this->ErrorMessages[] = 'The maximum stack depth has been exceeded.';
					$returnVal = false;
					break;
				case JSON_ERROR_STATE_MISMATCH:
					$this->ErrorMessages[] = 'Invalid or malformed JSON.';
					$returnVal = false;
					break;
				case JSON_ERROR_CTRL_CHAR:
					$this->ErrorMessages[] = 'Control character error, possibly incorrectly encoded.';
					$returnVal = false;
					break;
				case JSON_ERROR_SYNTAX:
					$this->ErrorMessages[] = 'Syntax error, malformed JSON.';
					$returnVal = false;
					break;
				// PHP >= 5.3.3
				case JSON_ERROR_UTF8:
					$this->ErrorMessages[] = 'Malformed UTF-8 characters, possibly incorrectly encoded.';
					$returnVal = false;
					break;
				// PHP >= 5.5.0
				case JSON_ERROR_RECURSION:
					$this->ErrorMessages[] = 'One or more recursive references in the value to be encoded.';
					$returnVal = false;
					break;
				// PHP >= 5.5.0
				case JSON_ERROR_INF_OR_NAN:
					$this->ErrorMessages[] = 'One or more NAN or INF values in the value to be encoded.';
					$returnVal = false;
					break;
				case JSON_ERROR_UNSUPPORTED_TYPE:
					$this->ErrorMessages[] = 'A value of a type that cannot be encoded was given.';
					$returnVal = false;
					break;
				default:
					$this->ErrorMessages[] = 'Unknown JSON error occured.';
					$returnVal = false;
					break;
			}

			return $returnVal;
		}

	}

?>
