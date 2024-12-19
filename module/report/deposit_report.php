
<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "deposit_report") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                // TODO : DÜZENLE
                if(!empty($_GET["StartDate"]) or !empty($_GET["EndDate"])){
                    $header = "";
                } else {
                    $header = " - (Son 1 Ay)";
                }
                //$header = "";
                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">Filtreleme</div>
                        <form method="GET" class="form-horizontal row-border" action="#">
                            <input type="hidden" name="module" value="report/deposit_report"/>
                            <input type="hidden" name="do" value="deposit_report"/>
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Başlangıç Tarihi</label>
                                        <input type="text" name="StartDate" id="StartDate" class="form-control"
                                        autocomplete="off" value="<?=$_GET["StartDate"]?>">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Bitiş Tarihi</label>
                                        <input type="text" name="EndDate" id="EndDate" class="form-control"
                                        autocomplete="off" value="<?=$_GET["EndDate"]?>">
                                    </div>
                                </div>
                                <?php if ($_SESSION["user_group_id"] != 3) { ?>
                                    <div class="col-lg-3">
                                        <div class="form-group">
                                            <label>Müşteri</label>
                                            <select class="form-control single-select" name="client"
                                            id="client">
                                            <option disabled selected value>Seçiniz</option>
                                            <?php $query = $db->query("SELECT * FROM clients");
                                            while ($row = $query->fetch_assoc()) {
                                                ?>
                                                <option value="<?= $row["id"] ?>"><?= $row["client_name"] ?></option>
                                            <?php } ?>
                                        </select>
                                    </div>
                                </div>
                            <?php } ?>
                            <div class="col-lg-3">
                                <label>&emsp;</label>
                                <div class="form-group" style="text-align: center">
                                    <button style="text-align: center;" type="submit"
                                    class="btn btn-warning px-5">Filtrele
                                </button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6 col-lg-6 col-xl-6">
                        <i class="fa fa-table"></i> Yükleme Raporları<?=$header?>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-6" style="text-align: right;">
                        <span class="btn btn-xs" title="Excele Aktar" style="background-color: orange;">
                            <i onclick="GetExcel()" class="">EXCEL</i>
                        </span>
                    </div>


                    
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table id="DepositDataTable" class="table table-bordered">
                        <thead>
                            <tr>
                                <th>İŞLEM TARİHİ</th>
                                <th>İŞLEM SIRASI</th>
                                <th>YÜKLENEN TUTAR</th>
                                <th>YÜKLENEN KREDİ</th>
                                <th>ÖDEME TÜRÜ</th>
                                <?php if ($_SESSION["user_group_id"] != 3) { ?>
                                    <th>İŞLEM YAPAN MÜŞTERİ</th>
                                    <th>DAĞITIM BAYİSİ</th>
                                <?php } ?>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            if ($_SESSION["user_group_id"] == 3) {
                                $Filter = "deposits.client_id = '" . $_SESSION["client_id"] . "' and deposits.status=1";
                            } else {
                                $Filter = "deposits.status = 1";
                            }

                            if (isset($_GET["client"]) and !empty($_GET["client"])) {
                                $Filter .= " and deposits.client_id='" . $_GET["client"] . "'";
                            }

                            if (isset($_GET["StartDate"]) and !empty($_GET["StartDate"])) {
                                $time = strtotime($_GET["StartDate"]);                                
                                $Filter .= " and deposits.unixtime >= '" . $time . "'";
                                // if(isset($_GET["EndDate"]) and !empty($_GET["EndDate"])){
                                //     $Start = strtotime($_GET["StartDate"]);;
                                //     $End = strtotime($_GET["EndDate"]);
                                //     if($End-$Start > 7776000){
                                //         if ($_SESSION["user_group_id"] == 3) {
                                //             $FilterNew = "deposits.client_id = " . $_SESSION["client_id"];
                                //         } else {
                                //             $FilterNew = "deposits.id != 0";
                                //         }
                                //         if (isset($_GET["client"]) and !empty($_GET["client"])) {
                                //             $FilterNew .= " and deposits.client_id=" . $_GET["client"];
                                //         }
                                //         $FilterNew .= " and deposits.unixtime >= " . $Start . " and deposits.unixtime<=".$End;
                                //         $sql = "SELECT * FROM deposits LEFT JOIN clients ON clients.id=deposits.client_id WHERE " . $FilterNew;
                                //         $QueryUser = $db->query("SELECT * FROM user WHERE id='".$_SESSION["user_id"]."'")->fetch_assoc();
                                //         $Insert =$db->query("INSERT INTO reports_mail(report_sql,report_type,send_user_id,send_user_group_id,send_email) VALUES('".$sql."',2,'".$QueryUser["id"]."','".$QueryUser["user_group_id"]."','".$QueryUser["email"]."')");
                                //         if($Insert) {
                                //             echo warning("3 Aydan Uzun Filtreleme Mail Yoluyla Yollanacaktır!");
                                //         } else {
                                //             echo error("Sistem Hatası!<br>Detay : ".mysqli_error($db));
                                //         }

                                //     } else {
                                //         $Filter .= " and deposits.unixtime >= '" . $Start . "' and deposits.unixtime<='".$End."'";
                                //     }

                                // } else {
                                //     $time = strtotime($_GET["StartDate"]);
                                //     $monthTime = strtotime("+1 months",$time);
                                //     $Filter .= " and deposits.unixtime >= '" . $time . "' and deposits.unixtime<='".$monthTime."'";
                                // }

                            }
                            if (isset($_GET["EndDate"]) and !empty($_GET["EndDate"])) {
                                $time = strtotime($_GET["EndDate"]);                                
                                $Filter .= " and deposits.unixtime <= '" . $time . "'";
                                // if(isset($_GET["StartDate"]) and !empty($_GET["StartDate"])){

                                // } else {
                                //     $time = strtotime($_GET["EndDate"]);
                                //     $monthTime = strtotime("-1 months",$time);
                                //     $Filter .= " and deposits.unixtime <= '" . $time . "' and deposits.unixtime>='".$monthTime."'";
                                // }

                            }
                            if(empty($_GET["StartDate"]) and empty($_GET["EndDate"])){ //or (strtotime($_GET["EndDate"])-strtotime($_GET["StartDate"])>7776000)
                                $time = strtotime("-1 months",time());
                                $Filter .= " and deposits.unixtime>='".$time."'";
                            }

                            $Query = $db->query("SELECT *,deposits.unixtime AS UNIXTIME FROM deposits
                                LEFT JOIN clients ON clients.id=deposits.client_id                                                                                                                    
                                WHERE " . $Filter . " ORDER BY deposits.client_id ASC,deposits.unixtime ASC");
                            $BehindID = "";
                            $count = 1;
                            while ($row = $Query->fetch_assoc()) {  
                                if($BehindID==$row["client_id"]){
                                    $count += 1;
                                }else if($BehindID==""){

                                }else{
                                    $count=1;
                                }
                                $BehindID = $row["client_id"];

                                $DistDetail = $db->query("SELECT * FROM cards LEFT JOIN distributors ON distributors.id=cards.card_distributor_id WHERE cards.id='".$row["card_id"]."'")->fetch_assoc();
                                if($DistDetail["company_name"]!=""){
                                    $DistName = $DistDetail["company_name"];
                                }else{
                                    $DistName = "<font color='orange'>MERKEZ</font>";
                                }
                                if ($row["payment_method"] == 1) {
                                    $method = "Kredi Kartı";
                                } else {
                                    $method = "HAVALE";
                                }
                                ?>
                                <tr>
                                    <td data-sort="<?=date("Y-m-d H:i:s", $row["UNIXTIME"]+10800)?>"><?= date("Y-m-d H:i:s", $row["UNIXTIME"]+10800) ?></td>
                                    <td><?=$count.". YÜKLEME"?></td>
                                    <td><?= $row["amount"] . " TL" ?></td>
                                    <td><?= $row["deposit_credit"] != "" ? $row["deposit_credit"] . " KREDi" : "-" ?></td>
                                    <td><?= $method ?></td>
                                    <?php if ($_SESSION["user_group_id"] != 3) { ?>
                                        <td><?= $row["client_name"]!="" ? $row["client_name"] : "<font color='red'>Silinmiş</font>"; ?></td>
                                        <td><?= $DistName; ?></td>
                                    <?php } ?>
                                </tr>
                                <?php
                            }

                            ?>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <script>

            function GetExcel(){
                var name = "Yükleme_Raporları";
                var table2excel = new Table2Excel();
                table2excel.export(document.getElementById('DepositDataTable'),name);
            }                                   



        </script>


        <?php
    } else {
        echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
    }
}
?>
</div>
</div>