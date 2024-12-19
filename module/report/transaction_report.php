<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
            if (@$_GET['do'] == "transaction_report") {
                if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                    // TODO : DÜZENLE
                    if(!empty($_GET["StartDate"]) or !empty($_GET["EndDate"])){
                        $header = "";
                        } else {
                        $header = " - (Son 1 Ay)";
                    }
                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">Filtreleme</div>
                        <form method="GET" class="form-horizontal row-border" action="#">
                            <input type="hidden" name="module" value="report/transaction_report"/>
                            <input type="hidden" name="do" value="transaction_report"/>
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
                                            <label>Bayi</label>
                                            <select class="form-control single-select" name="distributor"
                                            id="distributor">
                                                <option disabled selected value>Seçiniz</option>
                                                <?php $query = $db->query("SELECT * FROM distributors");
                                                    while ($row = $query->fetch_assoc()) {
                                                    ?>
                                                    <option value="<?= $row["id"] ?>"><?= $row["company_name"] ?></option>
                                                <?php } ?>
                                            </select>
                                        </div>
                                    </div>
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
                                    <div class="col-lg-12">
                                        <div class="form-group" style="text-align: center">
                                            <button style="text-align: center;" type="submit"
                                            class="btn btn-warning px-5">Filtrele
                                            </button>
                                        </div>
                                    </div>
                                    <?php } else { ?>
                                    <div class="col-lg-3">
                                        <label>&emsp;</label>
                                        <div class="form-group" style="text-align: center">
                                            <button style="text-align: center;" type="submit"
                                            class="btn btn-warning px-5">Filtrele
                                            </button>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>
                            
                        </form>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-6 col-lg-6 col-xl-6">
                                <i class="fa fa-table"></i> Harcama Raporları<?=$header?>
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
                            <table id="default-datatable" class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>İŞLEM TARİHİ</th>
                                        <th>HARCANAN TUTARI</th>
                                        <th>KAMPANYA TUTARI</th>
                                        <?php if ($_SESSION["user_group_id"] != 3) { ?>
                                            <th>İŞLEM YAPAN MÜŞTERİ</th>
                                            
                                        <?php } ?>
                                        <th>İŞLEM YAPAN BAYİ</th>
                                        <th>PLAKA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                        if ($_SESSION["user_group_id"] == 3) {
                                            $Filter = "transactions.client_id = '" . $_SESSION["client_id"] . "' and transactions.transaction_status=4";
                                            } else {
                                            $Filter = "transactions.transaction_status=4";
                                        }
                                        
                                        if (isset($_GET["client"]) and !empty($_GET["client"])) {
                                            $Filter .= " and transactions.client_id='" . $_GET["client"] . "'";
                                        }
                                        if (isset($_GET["distributor"]) and !empty($_GET["distributor"])) {
                                            $Filter .= " and transactions.distributor_id='" . $_GET["distributor"] . "'";
                                        }
                                        if (isset($_GET["StartDate"]) and !empty($_GET["StartDate"])) {
                                            $time = strtotime($_GET["StartDate"]);
                                            $Filter .= " and transactions.unix_time>='".$time."'";
                                            // if(isset($_GET["EndDate"]) and !empty($_GET["EndDate"])){
                                            //     $Start = strtotime($_GET["StartDate"]);;
                                            //     $End = strtotime($_GET["EndDate"]);
                                            //     if($End-$Start > 7776000){
                                            //         if ($_SESSION["user_group_id"] == 3) {
                                            //             $FilterNew = "transactions.client_id = " . $_SESSION["client_id"] . " and transactions.transaction_status=4";
                                            //         } else {
                                            //             $FilterNew = "transactions.transaction_status=4";
                                            //         }
                                            //         if (isset($_GET["client"]) and !empty($_GET["client"])) {
                                            //             $FilterNew .= " and transactions.client_id=" . $_GET["client"];
                                            //         }
                                            //         if (isset($_GET["distributor"]) and !empty($_GET["distributor"])) {
                                            //             $FilterNew .= " and transactions.distributor_id=" . $_GET["distributor"];
                                            //         }
                                            //         $FilterNew .= " and transactions.unix_time >= " . $Start . " and transactions.unix_time<=".$End;
                                            //         $sql = "SELECT * FROM transactions LEFT JOIN clients ON clients.id=transactions.client_id LEFT JOIN distributors ON distributors.id=transactions.distributor_id WHERE ".$FilterNew;
                                            //         $QueryUser = $db->query("SELECT * FROM user WHERE id='".$_SESSION["user_id"]."'")->fetch_assoc();
                                            //         $Insert =$db->query("INSERT INTO reports_mail(report_sql,report_type,send_user_id,send_user_group_id,send_email) VALUES('".$sql."',3,'".$QueryUser["id"]."''".$QueryUser["user_group_id"]."','".$QueryUser["email"]."')");
                                            
                                            //         if($Insert) {
                                            //             echo warning("3 Aydan Uzun Filtreleme Mail Yoluyla Yollanacaktır!");
                                            //         } else {
                                            //             echo error("Sistem Hatası!<br>Detay : ".mysqli_error($db));
                                            //         }
                                            
                                            
                                            //     } else {
                                            //         $Filter .= " and transactions.unix_time >= '" . $Start . "' and transactions.unix_time<='".$End."'";
                                            //     }
                                            
                                            // } else {
                                            //     $time = strtotime($_GET["StartDate"]);
                                            //     $monthTime = strtotime("+1 months",$time);
                                            //     $Filter .= " and transactions.unix_time >= '" . $time . "' and transactions.unix_time<='".$monthTime."'";
                                            // }
                                            
                                        }
                                        if (isset($_GET["EndDate"]) and !empty($_GET["EndDate"])) {
                                            $time = strtotime($_GET["EndDate"]);
                                            $Filter .= " and transactions.unix_time<='".$time."'";
                                            // if(isset($_GET["StartDate"]) and !empty($_GET["StartDate"])){
                                            
                                            // } else {
                                            //     $time = strtotime($_GET["EndDate"]);
                                            //     $monthTime = strtotime("-1 months",$time);
                                            //     $Filter .= " and transactions.unix_time <= '" . $time . "' and transactions.unix_time>='".$monthTime."'";
                                            // }
                                            
                                        }
                                        if(empty($_GET["StartDate"]) and empty($_GET["EndDate"])){
                                            $time = strtotime("-1 months",time());
                                            $Filter .= " and transactions.unix_time>='".$time."'";
                                        }
                                        
                                        $Query = $db->query("SELECT *,transactions.id as ID FROM transactions
                                        LEFT JOIN clients ON clients.id=transactions.client_id 
                                        LEFT JOIN distributors ON distributors.id=transactions.distributor_id                                                                                                                    
                                        WHERE " . $Filter . "");
                                        
                                        
                                        $total_credit = 0;
                                        $p_count = 0;
                                        while ($row = $Query->fetch_assoc()) {
                                            
                                            $PLATECAR = $db->query("SELECT * FROM reports WHERE transaction_id='".$row["ID"]."'")->fetch_assoc();
                                            if($row["transaction_type"]==1){
                                                $TYPE = "<font color='blue'>NORMAL</font>";
                                                } else {
                                                $TYPE = "<font color='orange'>KREDİLİ</font>";
                                            }
                                            $total_credit += $row["amount"];
                                            $p_count += 1;
                                        ?>
                                        <tr>
                                            <td data-sort="<?=date("Y-m-d H:i:s", $row["unix_time"]+10800)?>"><?= date("Y-m-d H:i:s", $row["unix_time"]+10800) ?></td>
                                            <td><?= $row["amount"] . " TL - ".$TYPE ?></td>
                                            <td><?= $row["campaign_amount"] . " TL" ?></td>
                                            <?php if ($_SESSION["user_group_id"] != 3) { ?>
                                                <td><?= $row["client_name"]!="" ? $row["client_name"] : "<font color='red'>Silinmiş</font>"; ?></td>
                                                
                                            <?php } ?>
                                            <td><?= $row["company_name"] ?></td>
                                            <td><?= $PLATECAR["report_plate"]!="" ? $PLATECAR["report_plate"] : "<font color='red'>-</font>" ?></td>
                                        </tr>
                                        <?php
                                        }
                                        
                                    ?>
                                    
                                </tbody>
                            </table>
                            
                            <h3> Toplam İşlem Adedi : <?=$p_count?></h3>
                            <h3> Toplam Harcanan Kredi Miktarı : <?=$total_credit?></h3>
                        </div>
                    </div>
                </div>
                <script>
                    
                    function GetExcel(){
                        var name = "Harcama_Raporları";
                        var table2excel = new Table2Excel();
                        table2excel.export(document.getElementById('default-datatable'),name);
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