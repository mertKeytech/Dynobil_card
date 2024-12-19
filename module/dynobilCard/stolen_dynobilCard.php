<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "stolen_dynobilCard") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                if($_POST){
                    if(!empty($_POST["card"]) and !empty($_POST["status"])){
                        $query = $db->query("SELECT * FROM cards WHERE card_number='".$_POST["card"]."'")->fetch_assoc();
                        if($query["id"]!=""){
                            $Update = $db->query("UPDATE cards SET card_status='".$_POST["status"]."' WHERE id='".$query["id"]."'");
                            $Client = $db->query("SELECT * FROM clients WHERE card_id='".$query["id"]."'")->fetch_assoc();
                            $Insert = $db->query("INSERT INTO cards_stolen(card_id,client_id,card_status,unixtime) VALUES('".$query["id"]."','".$Client["id"]."','".$_POST["status"]."','".time()."')");
                            if($Client["id"]!=""){
                                $UpdateClient = $db->query("UPDATE clients SET card_id=0 WHERE id='".$Client["id"]."'");
                            }
                            if($Update){
                                echo success("Kart Başarıyla Kayıp - İptal Listesine Eklendi");
                            } else {
                                echo error("Sistem Hatası!<br>Detay: ".mysqli_error($db));
                            }
                        } else {
                            echo warning("Girilen Kart Numarası Bulunamadı!");
                        }
                    } else {
                        echo warning("Lütfen Müşteri Kart Numarasını Giriniz ve Durumu Seçiniz!");
                    }
                }
                // TODO : DÜZENLE
                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">Kayıp / Çalıntı - İptal Kart</div>
                        <form method="POST" class="form-horizontal row-border" action="#">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label>KART NUMARASI</label>
                                        <input type="text" class="form-control" id="card" name="card"
                                               required onkeypress="return event.charCode>=48 && event.charCode<=57"
                                               autocomplete="off" maxlength="16" minlength="16"
                                               placeholder="16 Haneli Müşteri Kart Numarasını Giriniz...">

                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Kart Durumu</label>
                                        <select class="form-control single-select" name="status" required
                                                id="status">
                                            <option disabled selected value>Seçiniz</option>
                                            <option value="3">Kayıp/Çalıntı</option>
                                            <option value="4">İptal</option>

                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <label>&emsp;</label>
                                    <div class="form-group" style="text-align: center">
                                        <button style="text-align: center;" type="submit"
                                                class="btn btn-warning px-5">BİLDİR
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">KART Filtreleme</div>
                        <form method="GET" class="form-horizontal row-border" action="#">
                            <input type="hidden" name="module" value="dynobilCard/stolen_dynobilCard"/>
                            <input type="hidden" name="do" value="stolen_dynobilCard"/>
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Dağıtım BAYİSİ</label>
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
                                        <label>Oluşturma Zamanı(BAŞLANGIÇ)</label>
                                        <input type="text" name="StartDate" id="StartDate" class="form-control"
                                               autocomplete="off">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Oluşturma Zamanı(BİTİŞ)</label>
                                        <input type="text" name="EndDate" id="EndDate" class="form-control"
                                               autocomplete="off">
                                    </div>
                                </div>
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
                                <i class="fa fa-table"></i> Kayıp / Çalıntı - İptal DynobilCard Listesi
                            </div>

                        </div>

                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="default-datatable" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>KART NUMARASI</th>
                                    <th>KART KAMPANYASI</th>
                                    <th>OLUŞTURMA ZAMANI</th>
                                    <th>KART DURUMU</th>
                                    <th>DAĞITIM BAYİSİ</th>
                                    <th>MÜŞTERİ BİLGİSİ</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php

                                $Filter = "(cards.card_status = 3 or cards.card_status = 4)";
                                if (isset($_GET["distributor"]) and !empty($_GET["distributor"])) {
                                    $Filter .= " and cards.card_distributor_id ='" . $_GET["distributor"] . "'";
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
                                while ($row = $Query->fetch_assoc()) {
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
                                        $status = "<font color='green'>MERKEZDE</font>";
                                    } else if ($row["card_status"] == 1) {
                                        $status = "<font color='blue'>BAYİDE</font>";
                                    } else if ($row["card_status"] == 2) {
                                        $status = "<font color='orange'>MÜŞTERİDE</font>";
                                    } else if ($row["card_status"] == 3) {
                                        $status = "<font color='red'>KAYIP / ÇALINTI</font>";
                                    } else if ($row["card_status"] == 4) {
                                        $status = "<font color='orange'>İPTAL</font>";
                                    }
                                    ?>
                                    <tr>
                                        <td><?= CardNumberMask($row["card_number"] )?></td>
                                        <td><?= $row["campaign_name"]!="" ? $row["campaign_name"] : "-" ?></td>
                                        <td><?= date("d-m-Y H:i:s", $row["card_create_time"]) ?></td>
                                        <td><?= $status ?></td>
                                        <td><?= $dist ?></td>
                                        <td><?= $client ?></td>
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