<?php
ob_start();
session_start();

require_once('../system/database.php');
require_once('../system/functions.php');

while(1==1){
    $number = RandomCardNumber(16);
    if(strlen($number)==16) {
        $control = $db->query("SELECT * FROM cards WHERE card_number='" . $number . "'")->num_rows;
        if ($control > 0) {
            continue;
        } else {
            echo $number;
            break;
        }
    } else {
        continue;
    }
}
?>