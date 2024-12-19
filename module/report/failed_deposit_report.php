<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "failed_deposit_report") {
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
                            <input type="hidden" name="module" value="report/failed_deposit_report"/>
                            <input type="hidden" name="do" value="failed_deposit_report"/>
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Başlangıç Tarihi</label>
                                        <input type="text" name="StartDate" id="StartDate" class="form-control"
                                        autocomplete="off">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Bitiş Tarihi</label>
                                        <input type="text" name="EndDate" id="EndDate" class="form-control"
                                        autocomplete="off">
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
                        <i class="fa fa-table"></i> Hatalı Yükleme Raporları<?=$header?>
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
                                <th>YÜKLENEN TUTAR</th>
                                <th>ÖDEME TÜRÜ</th>
                                <?php if ($_SESSION["user_group_id"] != 3) { ?>
                                    <th>İŞLEM YAPAN MÜŞTERİ</th>
                                <?php } ?>
                                <th>AÇIKLAMA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            if ($_SESSION["user_group_id"] == 3) {
                                $Filter = "deposits.client_id = '" . $_SESSION["client_id"] . "' and deposits.status=0";
                            } else {
                                $Filter = "deposits.status = 0";
                            }

                            if (isset($_GET["client"]) and !empty($_GET["client"])) {
                                $Filter .= " and deposits.client_id='" . $_GET["client"] . "'";
                            }

                            if (isset($_GET["StartDate"]) and !empty($_GET["StartDate"])) {
                                if(isset($_GET["EndDate"]) and !empty($_GET["EndDate"])){
                                    $Start = strtotime($_GET["StartDate"]);;
                                    $End = strtotime($_GET["EndDate"]);
                                    if($End-$Start > 7776000){
                                        if ($_SESSION["user_group_id"] == 3) {
                                            $FilterNew = "deposits.status=0 and deposits.client_id = " . $_SESSION["client_id"];
                                        } else {
                                            $FilterNew = "deposits.status = 0";
                                        }
                                        if (isset($_GET["client"]) and !empty($_GET["client"])) {
                                            $FilterNew .= " and deposits.client_id=" . $_GET["client"];
                                        }
                                        $FilterNew .= " and deposits.unixtime >= " . $Start . " and deposits.unixtime<=".$End;
                                        $sql = "SELECT * FROM deposits LEFT JOIN clients ON clients.id=deposits.client_id WHERE " . $FilterNew;
                                        $QueryUser = $db->query("SELECT * FROM user WHERE id='".$_SESSION["user_id"]."'")->fetch_assoc();
                                        $Insert =$db->query("INSERT INTO reports_mail(report_sql,report_type,send_user_id,send_user_group_id,send_email) VALUES('".$sql."',2,'".$QueryUser["id"]."','".$QueryUser["user_group_id"]."','".$QueryUser["email"]."')");
                                        if($Insert) {
                                            echo warning("3 Aydan Uzun Filtreleme Mail Yoluyla Yollanacaktır!");
                                        } else {
                                            echo error("Sistem Hatası!<br>Detay : ".mysqli_error($db));
                                        }

                                    } else {
                                        $Filter .= " and deposits.unixtime >= '" . $Start . "' and deposits.unixtime<='".$End."'";
                                    }

                                } else {
                                    $time = strtotime($_GET["StartDate"]);
                                    $monthTime = strtotime("+1 months",$time);
                                    $Filter .= " and deposits.unixtime >= '" . $time . "' and deposits.unixtime<='".$monthTime."'";
                                }

                            }
                            if (isset($_GET["EndDate"]) and !empty($_GET["EndDate"])) {
                                if(isset($_GET["StartDate"]) and !empty($_GET["StartDate"])){

                                } else {
                                    $time = strtotime($_GET["EndDate"]);
                                    $monthTime = strtotime("-1 months",$time);
                                    $Filter .= " and deposits.unixtime <= '" . $time . "' and deposits.unixtime>='".$monthTime."'";
                                }

                            }
                            if((empty($_GET["StartDate"]) and empty($_GET["EndDate"])) or (strtotime($_GET["EndDate"])-strtotime($_GET["StartDate"])>7776000)){
                                $time = strtotime("-1 months",time());
                                $Filter .= " and deposits.unixtime>='".$time."'";
                            }

                            $Query = $db->query("SELECT * FROM deposits
                                LEFT JOIN clients ON clients.id=deposits.client_id                                                                                                                    
                                WHERE " . $Filter . "");
                            while ($row = $Query->fetch_assoc()) {
                                if ($row["payment_method"] == 1) {
                                    $method = "Kredi Kartı";
                                } else {
                                    $method = "DİĞER";
                                }
                                ?>
                                <tr>
                                    <td data-sort="<?= date("Y-m-d H:i:s", $row["unixtime"]) ?>"><?= date("Y-m-d H:i:s", $row["unixtime"]) ?></td>
                                    <td><?= $row["amount"] . " TL" ?></td>
                                    <td><?= $method ?></td>
                                    <?php if ($_SESSION["user_group_id"] != 3) { ?>
                                        <td><?= $row["client_name"]!="" ? $row["client_name"] : "<font color='red'>Silinmiş</font>"; ?></td>
                                    <?php } ?>
                                    <td><?= $row["description"] ?></td>
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
                var name = "Hatalı_Yüklemeler";
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