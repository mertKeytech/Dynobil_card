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

    $KartSahipleri = $db->query("SELECT * FROM cards WHERE card_status=2")->num_rows;
    $rows["DynobilCartSahipleri"] = $KartSahipleri;
    $DynobilBayi = $db->query("SELECT * FROM distributors")->num_rows;
    $rows["DynobilBayiler"] = $DynobilBayi;
    $HarcamaAdet = $db->query("SELECT * FROM transactions WHERE transaction_status=4")->num_rows;
    $rows["DynobilCartHarcamaAdet"] = $HarcamaAdet;
    $Expertiz = $db->query("SELECT *,reports.id AS ID FROM transactions LEFT JOIN reports ON reports.transaction_id=transactions.id WHERE transactions.transaction_status=4");
    $i = 0;
    while($row = $Expertiz->fetch_assoc()){
        if($row["ID"]==""){
            $i++;
        }
    }
    $rows["ExpertizRaporuBekleyen"] = $i;



    echo json_encode($rows);
} else {
    echo "Bu İşlemi Yapmaya Yetkiniz Yoktur!";
}