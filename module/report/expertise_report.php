<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "expertise_report") {
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
                            <input type="hidden" name="module" value="report/expertise_report"/>
                            <input type="hidden" name="do" value="expertise_report"/>
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Başlangıç Tarihi</label>
                                        <input type="text" name="StartDate" id="StartDate" class="form-control" required
                                        autocomplete="off" value="<?=$_GET["StartDate"]?>">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Bitiş Tarihi</label>
                                        <input type="text" name="EndDate" id="EndDate" class="form-control" required
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
                                    <!--<div class="col-lg-3">
                                        <div class="form-group">
                                            <label>DOSYA DURUMU(TARİH SEÇİLEMEZ)</label>
                                            <select class="form-control" name="status"
                                                    id="client">
                                                <option selected value>Seçiniz</option>
                                                <option value="1">BEKLEYENLERİ GÖSTER</option>

                                            </select>
                                        </div>
                                    </div>-->
                                    <div class="col-lg-12">
                                        <label>&emsp;</label>
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
                        <i class="fa fa-table"></i> Ekspertiz Raporları<?=$header?>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table id="default-datatable" class="table table-bordered">
                        <thead>
                            <tr>
                                <th>DOSYA YÜKLEME TARİHİ</th>
                                <?php if ($_SESSION["user_group_id"] != 3) { ?>
                                    <th>İŞLEM YAPAN MÜŞTERİ</th>
                                    <th>İŞLEM YAPAN BAYİ</th>
                                <?php } ?>
                                <th>İŞLEM</th>
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
                            
                            
                            
                            if (isset($_GET["StartDate"]) and !empty($_GET["StartDate"]) and isset($_GET["EndDate"]) and !empty($_GET["EndDate"])) {
                                $time = strtotime($_GET["StartDate"]);
                                $time2 = strtotime($_GET["EndDate"]);
                                $Filter .= " and (reports.upload_unixtime>='".$time."' and reports.upload_unixtime<='".$time2."')";                         
                            }
                           
                            
                            
                            if (empty($_GET["StartDate"]) and empty($_GET["EndDate"])) { //or (strtotime($_GET["EndDate"]) - strtotime($_GET["StartDate"]) > 7776000)
                                if (empty($_GET["status"])) {
                                    $time = strtotime("-1 months", time());
                                    $Filter .= " and reports.upload_unixtime>='" . $time . "'";
                                }
                            }
                            
                            
                            //echo $Filter;

                            $Query = $db->query("SELECT *,transactions.id AS ID FROM transactions
                                LEFT JOIN clients ON clients.id=transactions.client_id 
                                LEFT JOIN distributors ON distributors.id=transactions.distributor_id
                                LEFT JOIN reports ON transactions.id=reports.transaction_id                                                                                                                    
                                WHERE " . $Filter . "");
                            
                            echo mysqli_error($db);

                            while ($row = $Query->fetch_assoc()) {

                                ?>
                                <tr>
                                    <td data-sort="<?=date("Y-m-d H:i:s", $row["upload_unixtime"]+10800)?>"><?= $row["upload_unixtime"] != "" ? date("Y-m-d H:i:s", $row["upload_unixtime"]+10800) : "<font color='red'>YÜKLENMEDİ</font>" ?></td>


                                    <?php if ($_SESSION["user_group_id"] != 3) { ?>
                                        <td><?= $row["client_name"]!="" ? $row["client_name"] : "<font color='red'>Silinmiş</font>"; ?></td>
                                        <td><?= $row["company_name"] ?></td>
                                    <?php } ?>
                                    <td><a href="index.php?module=report/expertise_report&do=select_report&id=<?=$row["ID"]?>"><button class="btn btn-success">GÖRÜNTÜLE</button></a></td>
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
} else if (@$_GET['do'] == "select_report") {
    if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
        if($_SESSION["user_group_id"]==3){
            $Select = $db->query("SELECT * FROM transactions WHERE id='".$_GET["id"]."'")->fetch_assoc();
            if($Select["client_id"]!=$_SESSION["client_id"]){
                echo error("Size Ait Olmayan Raporu Görüntüleyemezsiniz!");
                exit;
            }
        }
                // TODO : DÜZENLE
        ?>
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6 col-lg-6 col-xl-6">
                        <i class="fa fa-table"></i> Dosya Seçimi
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table id="default-datatable" class="table table-bordered">
                        <thead>
                            <tr>
                                <th>RAPOR ADI</th>
                                <th>DURUMU</th>
                                <th>İŞLEM</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php

                            $Query = $db->query("SELECT * FROM reports WHERE transaction_id='" . $_GET["id"] . "'")->fetch_assoc();
                            ?>
                            <tr>
                                <td>ANASAYFA</td>
                                <td><?= $Query["report_file_url"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
                                <td><?php if ($Query["report_file_url"] == "") { ?>
                                    -
                                <?php } else {
                                    echo "<a href='".$Query["report_file_url"]."' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>";
                                } ?>
                            </td>
                        </tr>
                        <tr>
                            <td>DYNO1</td>
                            <td><?= $Query["report_file_dyno1"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
                            <td><?php if ($Query["report_file_dyno1"] == "") { ?>
                                -
                            <?php } else {
                                echo "<a href='".$Query["report_file_dyno1"]."' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>";
                            } ?>
                        </td>
                    </tr>
                    <tr>
                        <td>DYNO2</td>
                        <td><?= $Query["report_file_dyno2"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
                        <td><?php if ($Query["report_file_dyno2"] == "") { ?>
                            -
                        <?php } else {
                            echo "<a href='".$Query["report_file_dyno2"]."' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>";
                        } ?>
                    </td>
                </tr>
                <tr>
                    <td>DYNO3</td>
                    <td><?= $Query["report_file_dyno3"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
                    <td><?php if ($Query["report_file_dyno3"] == "") { ?>
                     -
                 <?php } else {
                    echo "<a href='".$Query["report_file_dyno3"]."' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>";
                } ?>
            </td>
        </tr>
        <tr>
            <td>SÜSPANSİYON</td>
            <td><?= $Query["report_file_suspansiyon"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
            <td><?php if ($Query["report_file_suspansiyon"] == "") { ?>
                -
            <?php } else {
                echo "<a href='".$Query["report_file_suspansiyon"]."' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>";
            } ?>
        </td>
    </tr>
    <tr>
        <td>FREN</td>
        <td><?= $Query["report_file_fren"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
        <td><?php if ($Query["report_file_fren"] == "") { ?>
            -
        <?php } else {
            echo "<a href='".$Query["report_file_fren"]."' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>";
        } ?>
    </td>
</tr>
<tr>
    <td>YANALKAYMA</td>
    <td><?= $Query["report_file_yanalkayma"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
    <td><?php if ($Query["report_file_yanalkayma"] == "") { ?>
        -
    <?php } else {
        echo "<a href='".$Query["report_file_yanalkayma"]."' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>";
    } ?>
</td>
</tr>
<tr>
    <td>KAPORTA</td>
    <td><?= $Query["report_file_kaporta"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
    <td><?php if ($Query["report_file_kaporta"] == "") { ?>
        -
    <?php } else {
        echo "<a href='".$Query["report_file_kaporta"]."' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>";
    } ?>
</td>
</tr>
<tr>
    <td>HYB</td>
    <td><?= $Query["report_file_hyb"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
    <td><?php if ($Query["report_file_hyb"] == "") { ?>
     -
 <?php } else {
    echo "<a href='".$Query["report_file_hyb"]."' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>";
} ?>
</td>
</tr>
<tr>
    <td>TSE</td>
    <td><?= $Query["report_file_tse"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
    <td><?php if ($Query["report_file_tse"] == "") { ?>
        -
    <?php } else {
        echo "<a href='".$Query["report_file_tse"]."' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>";
    } ?>
</td>
</tr>


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