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
    $KHO = array();
    $KYO = array();
    $KHOS = array();
    $KYOS = array();


    $today = time();

    $sevenDays = date("d-m-Y 00:00",strtotime("-7 days",$today));
    $sevenDaysEnd = date("d-m-Y 00:00",strtotime("+1 days",strtotime($sevenDays)));
    $strSeven = strtotime($sevenDays);  //Geçen Hafta Bugün Başlangıcı
    $strSevenEnd = strtotime($sevenDaysEnd); //Geçen Hafta Bugün Bitişi
    $todayStart = date("d-m-Y 00:00",$today);
    $todayEnd = date("d-m-Y 00:00",strtotime("+1 days",strtotime($todayStart)));
    $strToday = strtotime($todayStart); //Bugün Başlangıç
    $strTodeayEnd = strtotime($todayEnd); // Bugün Bitiş

    $week=date("d-m-Y 23:59:59", strtotime("last Sunday", strtotime(date("Y-m-d H:i:s"))));
    $lastweek = date("d-m-Y 23:59:59",strtotime("last Sunday",strtotime($week)));



    $lastMonthStart =  strtotime(date('Y-m-d', strtotime('first day of last month')));
    $lastMonthEnd =  strtotime(date('Y-m-d 23:59:59', strtotime('last day of last month')));


    //HarcamaAdet
    $HarcamaAdet = $db->query("SELECT * FROM transactions WHERE client_id='".$_SESSION["client_id"]."' and transaction_status=4 AND unix_time>='".$strToday."'")->num_rows;
    $HarcamaAdetGecen = $db->query("SELECT * FROM transactions WHERE client_id='".$_SESSION["client_id"]."' and transaction_status=4 AND unix_time>='".$strSeven."' and unix_time<='".$strSevenEnd."'")->num_rows;
    $KHO[0] = $HarcamaAdet."<span class='float-right'><i class='fa fa-shopping-cart'></i></span>";
    if($HarcamaAdet>$HarcamaAdetGecen){
        if($HarcamaAdetGecen == 0){
            $HarcamaAdetGecen = 1;
        }
        $Oran = ($HarcamaAdet-$HarcamaAdetGecen)/$HarcamaAdetGecen * 100;
        $KHOS[0] = "+".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-up'></i> (Geçen Hafta Bugün)";
    } else if($HarcamaAdet<$HarcamaAdetGecen){
        if($HarcamaAdet == 0){
            $HarcamaAdet = 1;
        }
        $Oran = ($HarcamaAdetGecen-$HarcamaAdet)/$HarcamaAdet * 100;
        $KHOS[0] = "-".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-down'></i> (Geçen Hafta Bugün)";
    } else{ //Eşitse
        $KHOS[0] = "Eşit <i class='zmdi zmdi-long-arrow-right'></i> (Geçen Hafta Bugün)";
    }
    //END
    //Harcama Haftalık
    $HarcamaTRY = $db->query("SELECT SUM(amount-campaign_amount) AS TOPLAM FROM transactions WHERE client_id='".$_SESSION["client_id"]."' and transaction_status=4 AND unix_time>='".strtotime($week)."'")->fetch_assoc();
    if($HarcamaTRY["TOPLAM"]==""){
        $HarcamaTRY["TOPLAM"] = 0;
    }
    $HarcamaTRYGecen = $db->query("SELECT SUM(amount-campaign_amount) AS TOPLAM FROM transactions WHERE client_id='".$_SESSION["client_id"]."' and transaction_status=4 AND unix_time>='".strtotime($lastweek)."' and unix_time<='".strtotime($week)."'")->fetch_assoc();
    if($HarcamaTRYGecen["TOPLAM"]==""){
        $HarcamaTRYGecen["TOPLAM"] = 1;
    }
    $KHO[1] = number_format($HarcamaTRY["TOPLAM"], 2, '.', '')."<span class='float-right'><i class='fa fa-try'></i></span>";
    if($HarcamaTRY["TOPLAM"]>$HarcamaTRYGecen["TOPLAM"]){
        if($HarcamaTRYGecen["TOPLAM"]==0){
            $HarcamaTRYGecen["TOPLAM"] = 1;
        }
        $Oran = ($HarcamaTRY["TOPLAM"]-$HarcamaTRYGecen["TOPLAM"]) / $HarcamaTRYGecen["TOPLAM"] * 100;
        $KHOS[1] = "+".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-up'></i> (Geçen Hafta)";
    } else if($HarcamaTRY["TOPLAM"]<$HarcamaTRYGecen["TOPLAM"]){
        if($HarcamaTRY["TOPLAM"]==0){
            $HarcamaTRY["TOPLAM"] = 1;
        }
        $Oran = ($HarcamaTRYGecen["TOPLAM"]-$HarcamaTRY["TOPLAM"])/$HarcamaTRY["TOPLAM"] * 100;
        $KHOS[1] = "-".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-down'></i> (Geçen Hafta)";
    } else{ //Eşitse
        $KHOS[1] = "Eşit <i class='zmdi zmdi-long-arrow-right'></i> (Geçen Hafta)";
    }
    //END
    //Harcama Aylık
    $HarcamaTRY = $db->query("SELECT SUM(amount-campaign_amount) AS TOPLAM FROM transactions WHERE client_id='".$_SESSION["client_id"]."' and transaction_status=4 AND unix_time>'".$lastMonthEnd."'")->fetch_assoc();
    if($HarcamaTRY["TOPLAM"]==""){
        $HarcamaTRY["TOPLAM"] = 0;
    }
    $HarcamaTRYGecen = $db->query("SELECT SUM(amount-campaign_amount) AS TOPLAM FROM transactions WHERE client_id='".$_SESSION["client_id"]."' and transaction_status=4 AND unix_time>='".$lastMonthStart."' and unix_time<='".$lastMonthEnd."'")->fetch_assoc();
    if($HarcamaTRYGecen["TOPLAM"]==""){
        $HarcamaTRYGecen["TOPLAM"] = 1;
    }
    $KHO[2] = number_format($HarcamaTRY["TOPLAM"], 2, '.', '')."<span class='float-right'><i class='fa fa-try'></i></span>";
    if($HarcamaTRY["TOPLAM"]>$HarcamaTRYGecen["TOPLAM"]){
        if($HarcamaTRYGecen["TOPLAM"]==0){
            $HarcamaTRYGecen["TOPLAM"] = 1;
        }
        $Oran = ($HarcamaTRY["TOPLAM"]-$HarcamaTRYGecen["TOPLAM"]) / $HarcamaTRYGecen["TOPLAM"] * 100;
        $KHOS[2] = "+".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-up'></i> (Geçen Ay)";
    } else if($HarcamaTRY["TOPLAM"]<$HarcamaTRYGecen["TOPLAM"]){
        if($HarcamaTRY["TOPLAM"]==0){
            $HarcamaTRY["TOPLAM"] = 1;
        }
        $Oran = ($HarcamaTRYGecen["TOPLAM"]-$HarcamaTRY["TOPLAM"])/$HarcamaTRY["TOPLAM"] * 100;
        $KHOS[2] = "-".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-down'></i> (Geçen Ay)";
    } else{ //Eşitse
        $KHOS[2] = "Eşit <i class='zmdi zmdi-long-arrow-right'></i> (Geçen Ay)";
    }
    //END
    // TOPLAM Harcama
    $HarcamaTRY = $db->query("SELECT SUM(amount-campaign_amount) AS TOPLAM FROM transactions WHERE client_id='".$_SESSION["client_id"]."' and transaction_status=4")->fetch_assoc();
    if($HarcamaTRY["TOPLAM"]==""){
        $HarcamaTRY["TOPLAM"] = 0;
    }
    $KHO[3] = number_format($HarcamaTRY["TOPLAM"], 2, '.', '')."<span class='float-right'><i class='fa fa-try'></i></span>";
    //END
    //Yükleme Adet
    $HarcamaAdet = $db->query("SELECT * FROM deposits WHERE client_id='".$_SESSION["client_id"]."' and unixtime>='".$strToday."' and status=1")->num_rows;
    $HarcamaAdetGecen = $db->query("SELECT * FROM deposits WHERE client_id='".$_SESSION["client_id"]."' and unixtime>='".$strSeven."' and unixtime<='".$strSevenEnd."' and status=1")->num_rows;
    $KYO[0] = $HarcamaAdet."<span class='float-right'><i class='fa fa-shopping-cart'></i></span>";
    if($HarcamaAdet>$HarcamaAdetGecen){
        if($HarcamaAdetGecen == 0){
            $HarcamaAdetGecen = 1;
        }
        $Oran = ($HarcamaAdet-$HarcamaAdetGecen)/$HarcamaAdetGecen * 100;
        $KYOS[0] = "+".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-up'></i> (Geçen Hafta Bugün)";
    } else if($HarcamaAdet<$HarcamaAdetGecen){
        if($HarcamaAdet == 0){
            $HarcamaAdet = 1;
        }
        $Oran = ($HarcamaAdetGecen-$HarcamaAdet)/$HarcamaAdet * 100;
        $KYOS[0] = "-".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-down'></i> (Geçen Hafta Bugün)";
    } else{ //Eşitse
        $KYOS[0] = "Eşit <i class='zmdi zmdi-long-arrow-right'></i> (Geçen Hafta Bugün)";
    }
    //END
    //Yükleme Haftalık
    $HarcamaTRY = $db->query("SELECT SUM(amount) AS TOPLAM FROM deposits WHERE client_id='".$_SESSION["client_id"]."' and unixtime>='".strtotime($week)."' and status=1")->fetch_assoc();
    if($HarcamaTRY["TOPLAM"]==""){
        $HarcamaTRY["TOPLAM"] = 0;
    }
    $HarcamaTRYGecen = $db->query("SELECT SUM(amount) AS TOPLAM FROM deposits WHERE client_id='".$_SESSION["client_id"]."' and unixtime>='".strtotime($lastweek)."' and unixtime<='".strtotime($week)."' and status=1")->fetch_assoc();
    if($HarcamaTRYGecen["TOPLAM"]==""){
        $HarcamaTRYGecen["TOPLAM"] = 1;
    }
    $KYO[1] = number_format($HarcamaTRY["TOPLAM"], 2, '.', '')."<span class='float-right'><i class='fa fa-try'></i></span>";
    if($HarcamaTRY["TOPLAM"]>$HarcamaTRYGecen["TOPLAM"]){
        if($HarcamaTRYGecen["TOPLAM"]==0){
            $HarcamaTRYGecen["TOPLAM"] = 1;
        }
        $Oran = ($HarcamaTRY["TOPLAM"]-$HarcamaTRYGecen["TOPLAM"]) / $HarcamaTRYGecen["TOPLAM"] * 100;
        $KYOS[1] = "+".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-up'></i> (Geçen Hafta)";
    } else if($HarcamaTRY["TOPLAM"]<$HarcamaTRYGecen["TOPLAM"]){
        if($HarcamaTRY["TOPLAM"]==0){
            $HarcamaTRY["TOPLAM"] = 1;
        }
        $Oran = ($HarcamaTRYGecen["TOPLAM"]-$HarcamaTRY["TOPLAM"])/$HarcamaTRY["TOPLAM"] * 100;
        $KYOS[1] = "-".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-down'></i> (Geçen Hafta)";
    } else{ //Eşitse
        $KYOS[1] = "Eşit <i class='zmdi zmdi-long-arrow-right'></i> (Geçen Hafta)";
    }
    //END
    //Yükleme Aylık
    $HarcamaTRY = $db->query("SELECT SUM(amount) AS TOPLAM FROM deposits WHERE client_id='".$_SESSION["client_id"]."' and unixtime>'".$lastMonthEnd."' and status=1")->fetch_assoc();
    if($HarcamaTRY["TOPLAM"]==""){
        $HarcamaTRY["TOPLAM"] = 0;
    }
    $HarcamaTRYGecen = $db->query("SELECT SUM(amount) AS TOPLAM FROM deposits WHERE client_id='".$_SESSION["client_id"]."' and unixtime>='".$lastMonthStart."' and unixtime<='".$lastMonthEnd."' and status=1")->fetch_assoc();
    if($HarcamaTRYGecen["TOPLAM"]==""){
        $HarcamaTRYGecen["TOPLAM"] = 1;
    }
    $KYO[2] = number_format($HarcamaTRY["TOPLAM"], 2, '.', '')."<span class='float-right'><i class='fa fa-try'></i></span>";
    if($HarcamaTRY["TOPLAM"]>$HarcamaTRYGecen["TOPLAM"]){
        if($HarcamaTRYGecen["TOPLAM"]==0){
            $HarcamaTRYGecen["TOPLAM"] = 1;
        }
        $Oran = ($HarcamaTRY["TOPLAM"]-$HarcamaTRYGecen["TOPLAM"]) / $HarcamaTRYGecen["TOPLAM"] * 100;
        $KYOS[2] = "+".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-up'></i> (Geçen Ay)";
    } else if($HarcamaTRY["TOPLAM"]<$HarcamaTRYGecen["TOPLAM"]){
        if($HarcamaTRY["TOPLAM"]==0){
            $HarcamaTRY["TOPLAM"] = 1;
        }
        $Oran = ($HarcamaTRYGecen["TOPLAM"]-$HarcamaTRY["TOPLAM"])/$HarcamaTRY["TOPLAM"] * 100;
        $KYOS[2] = "-".number_format($Oran, 1, '.', '')."%<i class='zmdi zmdi-long-arrow-down'></i> (Geçen Ay)";
    } else{ //Eşitse
        $KYOS[2] = "Eşit <i class='zmdi zmdi-long-arrow-right'></i> (Geçen Ay)";
    }
    //END
    // TOPLAM Yükleme
    $HarcamaTRY = $db->query("SELECT SUM(amount) AS TOPLAM FROM deposits WHERE client_id='".$_SESSION["client_id"]."' and status=1")->fetch_assoc();
    if($HarcamaTRY["TOPLAM"]==""){
        $HarcamaTRY["TOPLAM"] = 0;
    }
    $KYO[3] = number_format($HarcamaTRY["TOPLAM"], 2, '.', '')."<span class='float-right'><i class='fa fa-try'></i></span>";
    //END

    $rows["KHO"] = $KHO;
    $rows["KHOS"] = $KHOS;
    $rows["KYO"] = $KYO;
    $rows["KYOS"] = $KYOS;


    echo json_encode($rows);
} else {
    echo "Bu İşlemi Yapmaya Yetkiniz Yoktur!";
}