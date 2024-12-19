<?php
session_start();
require_once "../system/database.php";
require_once "../system/functions.php";
require_once "Classes/PHPExcel.php";
include_once("../system/user_control.php");
//Classı tanımladık.

$excel = new PHPExcel();

//Başlığı tanımladık.
$excel->getActiveSheet()->setTitle("KARTLAR");

$excel->getActiveSheet()->getColumnDimension('A')->setWidth(20);
$excel->getActiveSheet()->getColumnDimension('B')->setWidth(20);
$excel->getActiveSheet()->getColumnDimension('C')->setWidth(20);

//Sütun Başlıklarını Tanımlıyoruz.
$excel->getActiveSheet()->setCellValue("A1","Kart Numarası");
$excel->getActiveSheet()->setCellValue("B1","Kampanya");
$excel->getActiveSheet()->setCellValue("C1","Oluşturma Tarihi");

$IDArray = explode(",",$_GET["id"]);
$count = count($IDArray);

for($a = 0;$a<$count;$a++){
    $i = $a+2;
    $Query = $db->query("SELECT * FROM cards LEFT JOIN campaigns ON campaigns.id=cards.card_campaign_id WHERE cards.id='".$IDArray[$a]."'")->fetch_assoc();
    $excel->getActiveSheet()->setCellValue('A'.$i,CardNumberMask($Query['card_number']));
    $excel->getActiveSheet()->setCellValue('B'.$i,$Query['campaign_name']);
    $excel->getActiveSheet()->setCellValue('C'.$i,date("d-m-Y H:i:s",$Query["card_create_time"]));

}

//Excel Dosyasını İndiriyoruz.
header('Content-Type: application/vnd.ms-excel');
header('Content-Disposition: attachment;filename=KARTLAR.xls');
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