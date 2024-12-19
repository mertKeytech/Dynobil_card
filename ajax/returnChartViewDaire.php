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
    $Distributor = array();
    $Transaction = array();
    $Distributor[3] = "Diğer";
    $Div = array();

    $today = time();
    $sevenDays = date("d-m-Y 00:00", strtotime("-7 days", $today));
    $sevenDaysEnd = date("d-m-Y 00:00", strtotime("+1 days", strtotime($sevenDays)));

    $strSeven = strtotime($sevenDays);  //Geçen Hafta Bugün Başlangıcı
    $strSevenEnd = strtotime($sevenDaysEnd); //Geçen Hafta Bugün Bitişi

    $todayStart = date("d-m-Y 00:00", $today);
    $todayEnd = date("d-m-Y 00:00", strtotime("+1 days", strtotime($todayStart)));

    $strToday = strtotime($todayStart); //Bugün Başlangıç
    $strTodeayEnd = strtotime($todayEnd); // Bugün Bitiş

    $query1 = $db->query("SELECT *,SUM(amount-campaign_amount) AS TOPLAM FROM transactions WHERE transaction_status=4 and unix_time>='" . $strToday . "' GROUP BY distributor_id ORDER BY TOPLAM DESC,unix_time DESC LIMIT 0,1")->fetch_assoc();

    if ($query1["id"] != "") {
        $DistQuery = $db->query("SELECT * FROM distributors WHERE id='".$query1["distributor_id"]."'")->fetch_assoc();
        $ID1 = $DistQuery["id"];
        $Distributor[0] = $DistQuery["company_name"];
        $Transaction[0] = number_format($query1["TOPLAM"],"2",".","");
        $HarcamaOran = "<td><i class='fa fa-circle text-white mr-2'></i>".$DistQuery["company_name"]."</td><td>‎₺".number_format($query1["TOPLAM"],"2",".","")."</td>";
        $query2 = $db->query("SELECT SUM(amount-campaign_amount) FROM transactions WHERE distributor_id='" . $query1["id"] . "' and transaction_status=4 and unix_time>='" . $strSeven . "' and unix_time<'" . $strSevenEnd . "'")->fetch_assoc();
        if ($query2["TOPLAM"] == "") {
            $query2["TOPLAM"] = 0;
        }
        if ($query1["TOPLAM"] > $query2["TOPLAM"]) {
            if ($query2["TOPLAM"] == 0) {
                $query2["TOPLAM"] = 1;
            }
            $Oran = ($query1["TOPLAM"]-$query2["TOPLAM"]) / $query2["TOPLAM"] * 100;
            $HarcamaOran .= "<td>+" . number_format($Oran, 1, '.', '') . "% (Geçen Hafta Bugün)</td>";
        } else if ($query1["TOPLAM"] < $query2["TOPLAM"]) {
            if ($query1["TOPLAM"] == 0) {
                $query1["TOPLAM"] = 1;
            }
            $Oran = ($query2["TOPLAM"]-$query1["TOPLAM"]) / $query1["TOPLAM"] * 100;
            $HarcamaOran .= "<td>-" . number_format($Oran, 1, '.', '') . "% (Geçen Hafta Bugün)</td>";
        } else { //Eşitse
            $HarcamaOran .= "<td>Eşit (Geçen Hafta Bugün)</td>";
        }
        $Div[0] = $HarcamaOran;

        $query1 = $db->query("SELECT *,SUM(amount-campaign_amount) AS TOPLAM FROM transactions WHERE transaction_status=4 and unix_time>='" . $strToday . "' GROUP BY distributor_id ORDER BY TOPLAM DESC,unix_time DESC LIMIT 1,1")->fetch_assoc();
        if ($query1["id"] != "") {
            $DistQuery = $db->query("SELECT * FROM distributors WHERE id='".$query1["distributor_id"]."'")->fetch_assoc();
            $ID2 = $DistQuery["id"];
            $Distributor[1] = $DistQuery["company_name"];
            $Transaction[1] = number_format($query1["TOPLAM"],"2",".","");
            $HarcamaOran = "<td><i class='fa fa-circle text-light-1 mr-2'></i>".$DistQuery["company_name"]."</td><td>‎₺".number_format($query1["TOPLAM"],"2",".","")."</td>";
            $query2 = $db->query("SELECT SUM(amount-campaign_amount) FROM transactions WHERE distributor_id='" . $query1["id"] . "' and transaction_status=4 and unix_time>='" . $strSeven . "' and unix_time<'" . $strSevenEnd . "'")->fetch_assoc();
            if ($query2["TOPLAM"] == "") {
                $query2["TOPLAM"] = 0;
            }
            if ($query1["TOPLAM"] > $query2["TOPLAM"]) {
                if ($query2["TOPLAM"] == 0) {
                    $query2["TOPLAM"] = 1;
                }
                $Oran = ($query1["TOPLAM"]-$query2["TOPLAM"]) / $query2["TOPLAM"] * 100;
                $HarcamaOran .= "<td>+" . number_format($Oran, 1, '.', '') . "% (Geçen Hafta Bugün)</td>";
            } else if ($query1["TOPLAM"] < $query2["TOPLAM"]) {
                if ($query1["TOPLAM"] == 0) {
                    $query1["TOPLAM"] = 1;
                }
                $Oran = ($query2["TOPLAM"]-$query1["TOPLAM"]) / $query1["TOPLAM"] * 100;
                $HarcamaOran .= "<td>-" . number_format($Oran, 1, '.', '') . "% (Geçen Hafta Bugün)</td>";
            } else { //Eşitse
                $HarcamaOran .= "<td>Eşit (Geçen Hafta Bugün)</td>";
            }
            $Div[1] = $HarcamaOran;

            $query1 = $db->query("SELECT *,SUM(amount-campaign_amount) AS TOPLAM FROM transactions WHERE transaction_status=4 and unix_time>='" . $strToday . "' GROUP BY distributor_id ORDER BY TOPLAM DESC,unix_time DESC LIMIT 2,1")->fetch_assoc();
            if ($query1["id"] != "") {
                $DistQuery = $db->query("SELECT * FROM distributors WHERE id='".$query1["distributor_id"]."'")->fetch_assoc();
                $ID3 = $DistQuery["id"];
                $Distributor[2] = $DistQuery["company_name"];
                $Transaction[2] = number_format($query1["TOPLAM"],"2",".","");
                $HarcamaOran = "<td><i class='fa fa-circle text-light-2 mr-2'></i>".$DistQuery["company_name"]."</td><td>‎₺".number_format($query1["TOPLAM"],"2",".","")."</td>";
                $query2 = $db->query("SELECT SUM(amount-campaign_amount) FROM transactions WHERE distributor_id='" . $query1["id"] . "' and transaction_status=4 and unix_time>='" . $strSeven . "' and unix_time<'" . $strSevenEnd . "'")->fetch_assoc();
                if ($query2["TOPLAM"] == "") {
                    $query2["TOPLAM"] = 0;
                }
                if ($query1["TOPLAM"] > $query2["TOPLAM"]) {
                    if ($query2["TOPLAM"] == 0) {
                        $query2["TOPLAM"] = 1;
                    }
                    $Oran = ($query1["TOPLAM"]-$query2["TOPLAM"]) / $query2["TOPLAM"] * 100;
                    $HarcamaOran .= "<td>+" . number_format($Oran, 1, '.', '') . "% (Geçen Hafta Bugün)</td>";
                } else if ($query1["TOPLAM"] < $query2["TOPLAM"]) {
                    if ($query1["TOPLAM"] == 0) {
                        $query1["TOPLAM"] = 1;
                    }
                    $Oran = ($query2["TOPLAM"]-$query1["TOPLAM"]) / $query1["TOPLAM"] * 100;
                    $HarcamaOran .= "<td>-" . number_format($Oran, 1, '.', '') . "% (Geçen Hafta Bugün)</td>";
                } else { //Eşitse
                    $HarcamaOran .= "<td>Eşit (Geçen Hafta Bugün)</td>";
                }
                $Div[2] = $HarcamaOran;

                $query1 = $db->query("SELECT *,SUM(amount-campaign_amount) AS TOPLAM FROM transactions WHERE transaction_status=4 and unix_time>='" . $strToday . "' and distributor_id!='".$ID1."' and distributor_id!='".$ID2."' and distributor_id!='".$ID3."'")->fetch_assoc();
                if ($query1["id"] != "") {
                    $Transaction[3] = number_format($query1["TOPLAM"],"2",".","");
                    $HarcamaOran = "<td><i class='fa fa-circle text-light-3 mr-2'></i>Diğerleri</td><td>‎₺".number_format($query1["TOPLAM"],"2",".","")."</td>";
                    $query2 = $db->query("SELECT SUM(amount-campaign_amount) FROM transactions WHERE distributor_id!='" . $ID1 . "' and distributor_id!='" . $ID2 . "' and distributor_id!='" . $ID3 . "' and transaction_status=4 and unix_time>='" . $strSeven . "' and unix_time<'" . $strSevenEnd . "'")->fetch_assoc();
                    if ($query2["TOPLAM"] == "") {
                        $query2["TOPLAM"] = 0;
                    }
                    if ($query1["TOPLAM"] > $query2["TOPLAM"]) {
                        if ($query2["TOPLAM"] == 0) {
                            $query2["TOPLAM"] = 1;
                        }
                        $Oran = ($query1["TOPLAM"]-$query2["TOPLAM"]) / $query2["TOPLAM"] * 100;
                        $HarcamaOran .= "<td>+" . number_format($Oran, 1, '.', '') . "% (Geçen Hafta Bugün)</td>";
                    } else if ($query1["TOPLAM"] < $query2["TOPLAM"]) {
                        if ($query1["TOPLAM"] == 0) {
                            $query1["TOPLAM"] = 1;
                        }
                        $Oran = ($query2["TOPLAM"]-$query1["TOPLAM"]) / $query1["TOPLAM"] * 100;
                        $HarcamaOran .= "<td>-" . number_format($Oran, 1, '.', '') . "% (Geçen Hafta Bugün)</td>";
                    } else { //Eşitse
                        $HarcamaOran .= "<td>Eşit (Geçen Hafta Bugün)</td>";
                    }
                    $Div[3] = $HarcamaOran;


                } else {
                    $Distributor[3] = "-";
                    $Transaction[3] = "0";
                    $Div[3] = "<td><i class='fa fa-circle text-light-3 mr-2'></i>-</td><td>‎₺0</td><td></td>";
                }

            } else {
                $Distributor[2] = "-";
                $Distributor[3] = "-";
                $Transaction[2] = "0";
                $Transaction[3] = "0";
                $Div[2] = "<td><i class='fa fa-circle text-light-2 mr-2'></i>-</td><td>‎₺0</td><td></td>";
                $Div[3] = "<td><i class='fa fa-circle text-light-3 mr-2'></i>-</td><td>‎₺0</td><td></td>";
            }

        } else {
            $Distributor[1] = "-";
            $Distributor[2] = "-";
            $Distributor[3] = "-";
            $Transaction[1] = "0";
            $Transaction[2] = "0";
            $Transaction[3] = "0";
            $Div[1] = "<td><i class='fa fa-circle text-light-1 mr-2'></i>-</td><td>‎₺0</td><td></td>";
            $Div[2] = "<td><i class='fa fa-circle text-light-2 mr-2'></i>-</td><td>‎₺0</td><td></td>";
            $Div[3] = "<td><i class='fa fa-circle text-light-3 mr-2'></i>-</td><td>‎₺0</td><td></td>";
        }
    } else {
        $Distributor[0] = "-";
        $Distributor[1] = "-";
        $Distributor[2] = "-";
        $Distributor[3] = "-";
        $Transaction[0] = "0";
        $Transaction[1] = "0";
        $Transaction[2] = "0";
        $Transaction[3] = "0";
        $Div[0] = "<td><i class='fa fa-circle text-white mr-2'></i>-</td><td>‎₺0</td><td></td>";
        $Div[1] = "<td><i class='fa fa-circle text-light-1 mr-2'></i>-</td><td>‎₺0</td><td></td>";
        $Div[2] = "<td><i class='fa fa-circle text-light-2 mr-2'></i>-</td><td>‎₺0</td><td></td>";
        $Div[3] = "<td><i class='fa fa-circle text-light-3 mr-2'></i>-</td><td>‎₺0</td><td></td>";
    }

    $rows["Labels"] = $Distributor;
    $rows["Data"] = $Transaction;
    $rows["Div"] = $Div;


    echo json_encode($rows);
} else {
    echo "Bu İşlemi Yapmaya Yetkiniz Yoktur!";
}