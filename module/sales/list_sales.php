<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "list_sales") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                // TODO : DÜZENLE
                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">Filtreleme</div>
                        <form method="GET" class="form-horizontal row-border" action="#">
                            <input type="hidden" name="module" value="sales/list_sales"/>
                            <input type="hidden" name="do" value="list_sales"/>
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>BAŞLANGIÇ TARİHİ</label>
                                        <input type="text" name="StartDate" id="StartDate" class="form-control"
                                               autocomplete="off">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>BİTİŞ TARİHİ</label>
                                        <input type="text" name="EndDate" id="EndDate" class="form-control"
                                               autocomplete="off">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>MÜŞTERİ</label>
                                        <select class="form-control single-select" name="client"
                                                id="client">
                                            <option selected value>Seçiniz</option>
                                            <?php $query = $db->query("SELECT * FROM clients");
                                            while ($row = $query->fetch_assoc()) {
                                                ?>
                                                <option value="<?= $row["id"] ?>"><?= $row["client_name"] ?></option>
                                            <?php } ?>
                                        </select>
                                    </div>
                                </div>

                                <!--<div class="col-lg-3">
                                    <div class="form-group">
                                        <label>DOSYA DURUMU</label>
                                        <select class="form-control" name="status"
                                                id="client">
                                            <option selected value>Seçiniz</option>
                                            <option value="1">BEKLEYENLERİ GÖSTER</option>

                                        </select>
                                    </div>
                                </div>-->
                            </div>
                            <br>
                            <div class="form-group" style="text-align: center">
                                <button style="text-align: center;" type="submit"
                                        class="btn btn-warning px-5">Filtrele
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-6 col-lg-6 col-xl-6">
                                <i class="fa fa-table"></i> Satış Listesi
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="default-datatable" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>İŞLEM TARİHİ</th>
                                    <th>İŞLEM YAPAN MÜŞTERİ</th>
                                    <th>DOSYA YÜKLENME TARİHİ</th>
                                    <th>İŞLEM</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php

                                $Filter = "transactions.distributor_id = '" . $_SESSION["distributor_id"] . "' and transactions.transaction_status=4";

                                if (isset($_GET["client"]) and !empty($_GET["client"])) {
                                    $Filter .= " and transactions.client_id='" . $_GET["client"] . "'";
                                }
                                if (isset($_GET["StartDate"]) and !empty($_GET["StartDate"])) {
                                    $time = strtotime($_GET["StartDate"]);
                                    $Filter .= " and transactions.unix_time>='" . $time . "'";
                                }
                                if (isset($_GET["EndDate"]) and !empty($_GET["EndDate"])) {
                                    $time = strtotime($_GET["EndDate"]);
                                    $Filter .= " and transactions.unix_time <= '" . $time . "'";
                                }

                                $Query = $db->query("SELECT *,transactions.id AS ID FROM transactions
                                                            LEFT JOIN clients ON clients.id=transactions.client_id 
                                                            LEFT JOIN reports ON transactions.id=reports.transaction_id                                                                                                                    
                                                            WHERE " . $Filter . "");
                                while ($row = $Query->fetch_assoc()) {

                                    ?>
                                    <tr>
                                        <td><?= date("d-m-Y H:i:s", $row["unix_time"]) ?></td>
                                        <td><?= $row["client_name"]!="" ? $row["client_name"] : "<font color='red'>Silinmiş</font>"; ?></td>
                                        <td><?= $row["upload_unixtime"] != "" ? date("d-m-Y H:i:s", $row["upload_unixtime"]) : "<font color='red'>YÜKLENMEDİ</font>" ?></td>
                                        <td>
                                                <a href="index.php?module=sales/upload_expertise&do=upload_file_list&id=<?=$row["ID"]?>">
                                                    <button class="btn btn-success">GÖRÜNTÜLE</button>
                                                </a>

                                        </td>
                                    </tr>
                                    <?php
                                }

                                ?>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                <?php
            } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        }
        ?>
    </div>
</div>