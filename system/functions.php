<?php
include "lang.php";

function warning($msg)
{
    global $Lang;
    ?>
    <div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <div class="alert-icon contrast-alert">
            <i class="fa fa-warning"></i>
        </div>
        <div class="alert-message">
            <span><strong><?= $Lang["Functions"]["Danger"] ?></strong> <?= $msg ?></span>
        </div>
    </div>
    <?php
}

function error($msg)
{
    global $Lang;
    ?>
    <div class="alert alert-danger alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <div class="alert-icon contrast-alert">
            <i class="fa fa-times"></i>
        </div>
        <div class="alert-message">
            <span><strong><?= $Lang["Functions"]["Danger"] ?></strong> <?= $msg ?></span>
        </div>
    </div>
    <?php
}

function success($msg)
{
    global $Lang;

    ?>
    <div class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <div class="alert-icon contrast-alert">
            <i class="fa fa-check"></i>
        </div>
        <div class="alert-message">
            <span><strong><?= $Lang["Functions"]["Success"] ?></strong> <?= $msg ?></span>
        </div>
    </div>
    <?php
}

function information($msg)
{
    ?>
    <div class="alert alert-info alert-block"><a class="close" data-dismiss="alert" href="#">×</a>
        <h4 class="alert-heading">Bilgilendirme!</h4>
        <?= $msg ?>
    </div>
    <?php
}

function redirect($URL, $time)
{
    if (empty($time)) {
        $time = 1000;
    }
    ?>
    <script>
        window.setTimeout(function () {
            window.location.href = "<?=$URL?>";
        }, <?=$time?>);
    </script>
    <?php
}

function Permission($user_id, $tag)
{
    include("database.php");
    $Query = $db->query("SELECT * FROM group_permission_process WHERE group_id='" . $user_id . "' and modul_process_tag='" . $tag . "'");
    $Count = $Query->num_rows;
    if ($Count == 0) return false;
    else return true;
}

function EncodeEnglish($deger)
{
    $turkce = array("s", "S", "i", "(", ")", "‘", "ü", "Ü", "ö", "Ö", "ç", "Ç", " ", "/", "*", "?", "s", "S", "i", "g", "G", "I", "ö", "Ö", "Ç", "ç", "ü", "Ü");
    $duzgun = array("s", "S", "i", "", "", "", "u", "U", "o", "O", "c", "C", "-", "-", "-", "", "s", "S", "i", "g", "G", "I", "o", "O", "C", "c", "u", "U");
    $deger = str_replace($turkce, $duzgun, $deger);
    $deger = preg_replace("@[^A-Za-z0-9-_]+@i", "", $deger);
    return $deger;
}

function RandomString($len = 10)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randstring = '';
    for ($i = 0; $i < $len; $i++) {
        $randstring .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randstring;
}

function RandomCardNumber($len)
{
    $characters = '01234567890123456789';
    $randstring = '';
    for ($i = 0; $i < $len; $i++) {
        $randstring .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randstring;
}

function CardNumberMask($card)
{
    $length = strlen($card);
    $NewCard = "";
    for ($i = 1; $i <= $length; $i++) {
        if ($i % 4 == 0) {
            $NewCard .= $card[$i - 1];
            $NewCard .= " ";
        } else {
            $NewCard .= $card[$i - 1];
        }
    }
    return $NewCard;
}

function RandomSMSCode()
{
    $characters = '01234567890123456789';
    $randstring = '';
    for ($i = 0; $i < 4; $i++) {
        $randstring .= $characters[rand(0, strlen($characters) - 1)];
    }
    if (strlen($randstring) == 4) {
        return $randstring;
    } else {
        RandomSMSCode();
    }
}

function Random6SMSCode()
{
    $characters = '01234567890123456789';
    $randstring = '';
    for ($i = 0; $i < 6; $i++) {
        $randstring .= $characters[rand(0, strlen($characters) - 1)];
    }
    if (strlen($randstring) == 6) {
        return $randstring;
    } else {
        Random6SMSCode();
    }
}

function GetCompanyType($Val)
{
    if ($Val == "1")
        return "AKTIF";
    else
        return "PASIF";
}

function FileTrEn($file)
{
    $search = array('I', 'Ü', 'G', 'Ö', 'Ç', 'S', 's', 'ç', 'ö', 'g', 'ü', 'i');
    $change = array('I', 'U', 'G', 'O', 'C', 'S', 's', 'c', 'o', 'g', 'u', 'i');
    $file['name'] = str_replace($search, $change, $file['name']);

    return $file;
}

function RandomCode($len)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randstring = '';
    for ($i = 0; $i < $len; $i++) {
        $randstring .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randstring;
}

function RandomReportName($len)
{
    $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randstring = '';
    for ($i = 0; $i < $len; $i++) {
        $randstring .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randstring;
}

function SendSMS($SMSContent, $Phone)
{
$xml = '<?xml version="1.0" encoding="UTF-8"?>
<mainbody>
<header>
<company dil="TR">Netgsm</company>        
<usercode>8508409292</usercode>
<password>3%C32FF</password>
<type>1:n</type>
<msgheader>Dynobil</msgheader>
</header>
<body>
<msg>
' . $SMSContent . ' Dynobil tarafindan SMS almak istemiyorsaniz 8508409292 numarasina RED yazin
</msg>
<no>' . $Phone . '</no>                                 
</body>
</mainbody>';

//echo $xml;

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://api.netgsm.com.tr/sms/send/xml');
	
    //curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, Array("Content-Type: text/xml"));
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
    $result = curl_exec($ch);
	if(curl_errno($ch)){
		echo 'Curl error: ' . curl_error($ch);
		echo "<br />";
	}
		echo "CURL RESULT = ";
		print_r($result);
		echo "<br />";
	
	//exit;
    return $result;
}

//function GondericiAdiSor()  NETGSM
//{
//
//
//    $username = "5336647644"; //
//    $password = urlencode("5A13EC"); //
//
//    $url = "https://api.netgsm.com.tr/sms/header/?usercode=$username&password=$password";
//
//    $ch = curl_init($url);
//    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
//    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
//    $http_response = curl_exec($ch);
//    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
//
//    if ($http_code != 200) {
//        echo "$http_code $http_response\n";
//        return false;
//    }
//    $Info = $http_response;
//    echo "$Info";
//    //return $balanceInfo;
//}

?>