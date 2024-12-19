<?php
session_start();
if (isset($_SESSION["user_id"])) {
    require_once("../system/database.php");

    /**
     * Created by PhpStorm.
     * User: keytech
     * Date: 21.02.2019
     * Time: 00:30
     */
    $aylar_TR = array("Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara");
    $aylar_EN = array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    $rows = array();
    $Week = array();
    $Transaction = array();
    $Deposit = array();

    $Transaction[0] = "";
    $Deposit[0] = "";


    $today = time();

    $sevenDays1 = time();
    $sevenDays2 = strtotime(date("d-m-Y H:i", strtotime("-7 days", $sevenDays1)));
    $sevenDays3 = strtotime(date("d-m-Y H:i", strtotime("-7 days", $sevenDays2)));
    $sevenDays4 = strtotime(date("d-m-Y H:i", strtotime("-7 days", $sevenDays3)));
    $sevenDays5 = strtotime(date("d-m-Y H:i", strtotime("-7 days", $sevenDays4)));
    $sevenDays6 = strtotime(date("d-m-Y H:i", strtotime("-7 days", $sevenDays5)));
    $sevenDays7 = strtotime(date("d-m-Y H:i", strtotime("-7 days", $sevenDays6)));
    $sevenDays8 = strtotime(date("d-m-Y H:i", strtotime("-7 days", $sevenDays7)));
    $sevenDays9 = strtotime(date("d-m-Y H:i", strtotime("-7 days", $sevenDays8)));
    $sevenDays10 = strtotime(date("d-m-Y H:i", strtotime("-7 days", $sevenDays9)));
    $sevenDays11 = strtotime(date("d-m-Y H:i", strtotime("-7 days", $sevenDays10)));


    $Week[0] = str_replace($aylar_EN, $aylar_TR, date("d M", $sevenDays11));
    $Week[1] = str_replace($aylar_EN, $aylar_TR, date("d M", $sevenDays10));
    $Week[2] = str_replace($aylar_EN, $aylar_TR, date("d M", $sevenDays9));
    $Week[3] = str_replace($aylar_EN, $aylar_TR, date("d M", $sevenDays8));
    $Week[4] = str_replace($aylar_EN, $aylar_TR, date("d M", $sevenDays7));
    $Week[5] = str_replace($aylar_EN, $aylar_TR, date("d M", $sevenDays6));
    $Week[6] = str_replace($aylar_EN, $aylar_TR, date("d M", $sevenDays5));
    $Week[7] = str_replace($aylar_EN, $aylar_TR, date("d M", $sevenDays4));
    $Week[8] = str_replace($aylar_EN, $aylar_TR, date("d M", $sevenDays3));
    $Week[9] = str_replace($aylar_EN, $aylar_TR, date("d M", $sevenDays2));
    $Week[10] = str_replace($aylar_EN, $aylar_TR, date("d M", $sevenDays1));
    $j = 10;
    $k = 1;
    for ($i = 11; $i >= 2; $i--) {
        $query = $db->query("SELECT SUM(amount-campaign_amount) AS TOPLAM FROM transactions WHERE transaction_status=4 and unix_time>'" . ${"sevenDays$i"} . "' and unix_time<='" . ${"sevenDays$j"} . "' and distributor_id='".$_SESSION["distributor_id"]."'")->fetch_assoc();
        $Transaction[$k] = number_format($query["TOPLAM"],"2",".","");

        $j--;
        $k++;
    }

    $rows["Labels"] = $Week;
    $rows["Data0"] = $Transaction;

    $ThisMonthStart = strtotime(date("01-m-Y 00:00",time()));
    $LastMonthStart = strtotime("-1 months",$ThisMonthStart);

    $query3 = $db->query("SELECT SUM(amount-campaign_amount) AS TOPLAM FROM transactions WHERE transaction_status=4 and unix_time>='".$ThisMonthStart."' and distributor_id='".$_SESSION["distributor_id"]."'")->fetch_assoc();
    if($query3["TOPLAM"]==""){
        $query3["TOPLAM"] = 0;
    }
    $query4 = $db->query("SELECT SUM(amount-campaign_amount) AS TOPLAM FROM transactions WHERE transaction_status=4 and unix_time>='".$LastMonthStart."' and unix_time<'".$ThisMonthStart."' and distributor_id='".$_SESSION["distributor_id"]."'")->fetch_assoc();
    if($query4["TOPLAM"]==""){
        $query4["TOPLAM"] = 0;
    }

    $rows["ChartTotalTransaction"] = number_format($query3["TOPLAM"],"2",".","")." TL";

    if($query3["TOPLAM"]>$query4["TOPLAM"]){
        if($query4["TOPLAM"]==0){
            $query4["TOPLAM"] = 1;
        }
        $Oran = ($query3["TOPLAM"]-$query4["TOPLAM"]) / $query4["TOPLAM"] * 100;
        $HarcamaOran = "+".number_format($Oran, 1, '.', '')."%<i class='fa fa-arrow-up'></i> (Geçen Ay)";
    } else if($query3["TOPLAM"]<$query4["TOPLAM"]){
        if($query3["TOPLAM"]==0){
            $query3["TOPLAM"] = 1;
        }
        $Oran = ($query4["TOPLAM"]-$query3["TOPLAM"]) / $query3["TOPLAM"] * 100;
        $HarcamaOran = "-".number_format($Oran, 1, '.', '')."%<i class='fa fa-arrow-down'></i> (Geçen Ay)";
    } else{ //Eşitse
        $HarcamaOran = "Eşit <i class='fa fa-arrow-right'></i> (Geçen Ay)";
    }
    $rows["ChartTotalTransactionSpan"] = $HarcamaOran;



    echo json_encode($rows);
} else {
    echo "Bu İşlemi Yapmaya Yetkiniz Yoktur!";
}