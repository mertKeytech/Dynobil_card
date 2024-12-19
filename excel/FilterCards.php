<?php
session_start();
require_once "../system/database.php";
require_once "../system/functions.php";
require_once "Classes/PHPExcel.php";
include_once("../system/user_control.php");
//Classı tanımladık.

$excel = new PHPExcel();

//Başlığı tanımladık.
$excel->getActiveSheet()->setTitle("KART LİSTESİ");

$excel->getActiveSheet()->getColumnDimension('A')->setWidth(20);
$excel->getActiveSheet()->getColumnDimension('B')->setWidth(20);
$excel->getActiveSheet()->getColumnDimension('C')->setWidth(20);
$excel->getActiveSheet()->getColumnDimension('D')->setWidth(20);
$excel->getActiveSheet()->getColumnDimension('E')->setWidth(20);
$excel->getActiveSheet()->getColumnDimension('F')->setWidth(20);


//Sütun Başlıklarını Tanımlıyoruz.
$excel->getActiveSheet()->setCellValue("A1","KART NUMARASI");
$excel->getActiveSheet()->setCellValue("B1","KART KAMPANYASI");
$excel->getActiveSheet()->setCellValue("C1","OLUŞTURMA ZAMANI");
$excel->getActiveSheet()->setCellValue("D1","KART DURUMU");
$excel->getActiveSheet()->setCellValue("E1","DAĞITIM BAYİSİ");
$excel->getActiveSheet()->setCellValue("F1","MÜŞTERİ BİLGİSİ");

$Filter = "cards.id != 0 and cards.card_type='".$_GET["Type"]."'";
if (isset($_GET["distributor"]) and !empty($_GET["distributor"])) {
    $Filter .= " and cards.card_distributor_id ='" . $_GET["distributor"] . "'";
}
if (isset($_GET["status"]) and !empty($_GET["status"])) {
    if($_GET["status"]==5){
        $statusChange=0;
    } else {
        $statusChange = $_GET["status"];
    }
    $Filter .= " and cards.card_status='" . $statusChange . "'";
}
if (isset($_GET["StartDate"]) and !empty($_GET["StartDate"])) {
    $time = strtotime($_GET["StartDate"]);
    $Filter .= " and cards.card_create_time>='" . $time . "'";
}
if (isset($_GET["EndDate"]) and !empty($_GET["EndDate"])) {
    $time = strtotime($_GET["EndDate"]);
    $Filter .= " and cards.card_create_time <= '" . $time . "'";
}
$Query = $db->query("SELECT * FROM cards 
LEFT JOIN distributors ON distributors.id = cards.card_distributor_id 
LEFT JOIN clients ON cards.id = clients.card_id
LEFT JOIN campaigns ON campaigns.id=cards.card_campaign_id
WHERE " . $Filter . "");

$i=2;
while($row=$Query->fetch_assoc()){
    if ($row["company_name"] != "") {
        $dist = $row["company_name"];
    } else {
        $dist = "-";
    }
    if ($row["client_name"] != "") {
        $client = $row["client_name"];
    } else {
        $client = "-";
    }
    if ($row["card_status"] == 0) {
        $status = "MERKEZDE";
    } else if ($row["card_status"] == 1) {
        $status = "BAYİDE";
    } else if ($row["card_status"] == 2) {
        $status = "MÜŞTERİDE";
    } else if ($row["card_status"] == 3) {
        $status = "KAYIP / ÇALINTI";
    } else if ($row["card_status"] == 4) {
        $status = "İPTAL";
    }


    $excel->getActiveSheet()->setCellValue('A'.$i,CardNumberMask($row['card_number']));
    $excel->getActiveSheet()->setCellValue('B'.$i,$row['campaign_name']);
    $excel->getActiveSheet()->setCellValue('C'.$i,date("d-m-Y H:i:s",$row["card_create_time"]));
    $excel->getActiveSheet()->setCellValue('D'.$i,$status);
    $excel->getActiveSheet()->setCellValue('E'.$i,$dist);
    $excel->getActiveSheet()->setCellValue('F'.$i,$client);
    $i++;


}


//Excel Dosyasını İndiriyoruz.
header('Content-Type: application/vnd.ms-excel');
header('Content-Disposition: attachment;filename=DYNOBİLCARD_LİSTESİ.xlsx');
header('Cache-Control: max-age=0');
// If you're serving to IE 9, then the following may be needed
header('Cache-Control: max-age=1');

// If you're serving to IE over SSL, then the following may be needed
header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
header ('Pragma: public'); // HTTP/1.0

$save = PHPExcel_IOFactory::createWriter($excel, 'Excel2007');
$save->save('php://output');
?>