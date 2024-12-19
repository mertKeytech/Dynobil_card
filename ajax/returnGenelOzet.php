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
    $rows = array();

    $today = time();

    $sevenDays = date("d-m-Y 00:00",strtotime("-7 days",$today));
    $sevenDaysEnd = date("d-m-Y 00:00",strtotime("+1 days",strtotime($sevenDays)));

    $strSeven = strtotime($sevenDays);  //Geçen Hafta Bugün Başlangıcı
    $strSevenEnd = strtotime($sevenDaysEnd); //Geçen Hafta Bugün Bitişi

    $todayStart = date("d-m-Y 00:00",$today);
    $todayEnd = date("d-m-Y 00:00",strtotime("+1 days",strtotime($todayStart)));

    $strToday = strtotime($todayStart); //Bugün Başlangıç
    $strTodeayEnd = strtotime($todayEnd); // Bugün Bitiş
    //HarcamaAdet
    $HarcamaAdet = $db->query("SELECT * FROM transactions WHERE transaction_status=4 AND unix_time>='".$strToday."'")->num_rows;
    $HarcamaAdetGecen = $db->query("SELECT * FROM transactions WHERE transaction_status=4 AND unix_time>='".$strSeven."' and unix_time<='".$strSevenEnd."'")->num_rows;
    $HarcamaUst = $HarcamaAdet."<span class='float-right'><i class='fa fa-shopping-cart'></i></span>";
    if($HarcamaAdet>$HarcamaAdetGecen){
        if($HarcamaAdetGecen == 0){
            $HarcamaAdetGecen = 1;
        }
        $Oran = ($HarcamaAdet-$HarcamaAdetGecen)/$HarcamaAdetGecen * 100;
        $HarcamaOran = "+".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-up'></i> (Geçen Hafta Bugün)";
    } else if($HarcamaAdet<$HarcamaAdetGecen){
        if($HarcamaAdet == 0){
            $HarcamaAdet = 1;
        }
        $Oran = ($HarcamaAdetGecen-$HarcamaAdet)/$HarcamaAdet * 100;
        $HarcamaOran = "-".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-down'></i> (Geçen Hafta Bugün)";
    } else{ //Eşitse
        $HarcamaOran = "Eşit <i class='zmdi zmdi-long-arrow-right'></i> (Geçen Hafta Bugün)";
    }
    $rows["HarcamaAdet"] = $HarcamaUst;
    $rows["HarcamaAdetSpan"] = $HarcamaOran;
    //END
    //HarcamaTRY
    $HarcamaTRY = $db->query("SELECT SUM(amount-campaign_amount) AS TOPLAM FROM transactions WHERE transaction_status=4 AND unix_time>='".$strToday."'")->fetch_assoc();
    if($HarcamaTRY["TOPLAM"]==""){
        $HarcamaTRY["TOPLAM"] = 0;
    }
    $HarcamaTRYGecen = $db->query("SELECT SUM(amount-campaign_amount) AS TOPLAM FROM transactions WHERE transaction_status=4 AND unix_time>='".$strSeven."' and unix_time<='".$strSevenEnd."'")->fetch_assoc();
    if($HarcamaTRYGecen["TOPLAM"]==""){
        $HarcamaTRYGecen["TOPLAM"] = 1;
    }
    $HarcamaUst = number_format($HarcamaTRY["TOPLAM"], 2, '.', '')."<span class='float-right'><i class='fa fa-try'></i></span>";
    if($HarcamaTRY["TOPLAM"]>$HarcamaTRYGecen["TOPLAM"]){
        if($HarcamaTRYGecen["TOPLAM"]==0){
            $HarcamaTRYGecen["TOPLAM"] = 1;
        }
        $Oran = ($HarcamaTRY["TOPLAM"]-$HarcamaTRYGecen["TOPLAM"]) / $HarcamaTRYGecen["TOPLAM"] * 100;
        $HarcamaOran = "+".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-up'></i> (Geçen Hafta Bugün)";
    } else if($HarcamaTRY["TOPLAM"]<$HarcamaTRYGecen["TOPLAM"]){
        if($HarcamaTRY["TOPLAM"]==0){
            $HarcamaTRY["TOPLAM"] = 1;
        }
        $Oran = ($HarcamaTRYGecen["TOPLAM"]-$HarcamaTRY["TOPLAM"])/$HarcamaTRY["TOPLAM"] * 100;
        $HarcamaOran = "-".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-down'></i> (Geçen Hafta Bugün)";
    } else{ //Eşitse
        $HarcamaOran = "Eşit <i class='zmdi zmdi-long-arrow-right'></i> (Geçen Hafta Bugün)";
    }
    $rows["HarcamaTRY"] = $HarcamaUst;
    $rows["HarcamaTRYSpan"] = $HarcamaOran;
    //END
    //YüklemeTRY
    $YuklemeTRY = $db->query("SELECT SUM(amount) AS TOPLAM FROM deposits WHERE unixtime>='".$strToday."' and status=1")->fetch_assoc();
    if($YuklemeTRY["TOPLAM"]==""){
        $YuklemeTRY["TOPLAM"] = 0;
    }
    $YuklemeTRYGecen = $db->query("SELECT SUM(amount) AS TOPLAM FROM deposits WHERE unixtime>='".$strSeven."' and unixtime<='".$strSevenEnd."' and status=1")->fetch_assoc();
    if($YuklemeTRYGecen["TOPLAM"]==""){
        $YuklemeTRYGecen["TOPLAM"] = 0;
    }
    $YuklemeUst = number_format($YuklemeTRY["TOPLAM"], 2, '.', '')."<span class='float-right'><i class='fa fa-try'></i></span>";
    if($YuklemeTRY["TOPLAM"]>$YuklemeTRYGecen["TOPLAM"]){
        if($YuklemeTRYGecen["TOPLAM"]==0){
            $YuklemeTRYGecen["TOPLAM"] = 1;
        }
        $Oran = ($YuklemeTRY["TOPLAM"]-$YuklemeTRYGecen["TOPLAM"]) / $YuklemeTRYGecen["TOPLAM"] * 100;
        $HarcamaOran = "+".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-up'></i> (Geçen Hafta Bugün)";
    } else if($YuklemeTRY["TOPLAM"]<$YuklemeTRYGecen["TOPLAM"]){
        if($YuklemeTRY["TOPLAM"]==0){
            $YuklemeTRY["TOPLAM"] = 1;
        }
        $Oran = ($YuklemeTRYGecen["TOPLAM"]-$YuklemeTRY["TOPLAM"]) / $YuklemeTRY["TOPLAM"] * 100;
        $HarcamaOran = "-".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-down'></i> (Geçen Hafta Bugün)";
    } else{ //Eşitse
        $HarcamaOran = "Eşit <i class='zmdi zmdi-long-arrow-right'></i> (Geçen Hafta Bugün)";
    }
    $rows["YuklemeTRY"] = $YuklemeUst;
    $rows["YuklemeTRYSpan"] = $HarcamaOran;
    //END
    //YeniMusteri
    $HarcamaAdet = $db->query("SELECT * FROM clients WHERE unixtime>='".$strToday."'")->num_rows;
    $HarcamaAdetGecen = $db->query("SELECT * FROM clients WHERE unix_time>='".$strSeven."' and unix_time<='".$strSevenEnd."'")->num_rows;
    $HarcamaUst = $HarcamaAdet."<span class='float-right'><i class='fa fa-eye'></i></span>";
    if($HarcamaAdet>$HarcamaAdetGecen){
        if($HarcamaAdetGecen == 0){
            $HarcamaAdetGecen = 1;
        }
        $Oran = ($HarcamaAdet-$HarcamaAdetGecen)/$HarcamaAdetGecen * 100;
        $HarcamaOran = "+".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-up'></i> (Geçen Hafta Bugün)";
    } else if($HarcamaAdet<$HarcamaAdetGecen){
        if($HarcamaAdet == 0){
            $HarcamaAdet = 1;
        }
        $Oran = ($HarcamaAdetGecen-$HarcamaAdet)/$HarcamaAdet * 100;
        $HarcamaOran = "-".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-down'></i> (Geçen Hafta Bugün)";
    } else{ //Eşitse
        $HarcamaOran = "Eşit <i class='zmdi zmdi-long-arrow-right'></i> (Geçen Hafta Bugün)";
    }
    $rows["YeniMusteri"] = $HarcamaUst;
    $rows["YeniMusteriSpan"] = $HarcamaOran;
    
    
    
    $ToplamKrediMiktari = $db->query("SELECT * FROM clients WHERE unixtime>='".$strToday."'")->num_rows;
    
    
    
    //END

    echo json_encode($rows);
} else {
    echo "Bu İşlemi Yapmaya Yetkiniz Yoktur!";
}