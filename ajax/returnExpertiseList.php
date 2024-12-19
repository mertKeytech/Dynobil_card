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
    $Name = array();
    $Dist = array();
    $Button = array();

    $Expertiz = $db->query("SELECT *,reports.id AS ID,transactions.id AS TransID FROM transactions 
    LEFT JOIN reports ON reports.transaction_id=transactions.id
    LEFT JOIN distributors ON distributors.id=transactions.distributor_id
    LEFT JOIN clients ON clients.id=transactions.client_id  
    WHERE transactions.transaction_status=4 ORDER BY transactions.unix_time DESC LIMIT 6 ");
    $i = 0;
    while($row = $Expertiz->fetch_assoc()){
        $Button[$i] = '<li class="list-group-item bg-transparent">
                        <div class="media align-items-center">
                            <div class="media-body ml-3">
                                <h6 class="mb-0">'.$row["client_name"].'
                                    <small class="ml-4">'.date("d.m.Y H:i",$row["unix_time"]).'</small>
                                </h6>
                                <p class="mb-0 small-font">'.$row["company_name"].'</p>
                            </div><div class="star">';
        if($row["ID"]==""){
            $Button[$i] .= "Rapor Bekleniyor";
        } else {
            $Button[$i] .= "<a href=index.php?module=report/expertise_report&do=select_report&id=".$row["TransID"]."><button type='button' class='btn btn-info'>RAPORLARI İNCELE</button></a>";
        }
        $Button[$i] .= '</div></div></li>';
        $i++;
    }

    $rows["Report"] = $Button;



    echo json_encode($rows);
} else {
    echo "Bu İşlemi Yapmaya Yetkiniz Yoktur!";
}