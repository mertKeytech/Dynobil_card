<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "list_dynobilCard") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                // TODO : DÜZENLE
                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">KART Filtreleme</div>
                        <form method="GET" class="form-horizontal row-border" action="#">
                            <input type="hidden" name="module" value="dynobilCard/dynobilCard_list"/>
                            <input type="hidden" name="do" value="list_dynobilCard"/>
                            <div class="row">
                                <?php if ($_SESSION["user_group_id"] != 2) { ?>
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
                                <?php } ?>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Kart Durumu</label>
                                        <select class="form-control single-select" name="status"
                                                id="status">
                                            <option disabled selected value>Seçiniz</option>
                                            <?php if ($_SESSION["user_group_id"] != 2) { ?>
                                                <option value="5">Merkezde</option>
                                            <?php } ?>
                                            <option value="1">Bayide</option>
                                            <option value="2">Müşteride</option>
                                            <option value="3">Kayıp/Çalıntı</option>
                                            <option value="4">İptal</option>

                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Oluşturma Zamanı(Başlangıç)</label>
                                        <input type="text" name="StartDate" id="StartDate" class="form-control"
                                               autocomplete="off">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Oluşturma Zamanı(Bitiş)</label>
                                        <input type="text" name="EndDate" id="EndDate" class="form-control"
                                               autocomplete="off">
                                    </div>
                                </div>
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
                                <i class="fa fa-table"></i> DynobilCard Listesi
                            </div>
                            <div class="col-md-6 col-lg-6 col-xl-6" style="text-align: right">
                                <a href="excel/FilterCards.php?distributor=<?= $_GET["distributor"] ?>&status=<?= $_GET["status"] ?>&StartDate=<?= $_GET["StartDate"] ?>&EndDate=<?= $_GET["EndDate"] ?>&Type=1">
                                    <button type="button"
                                            id="ExcelButton"
                                            class="btn btn-secondary">EXCEL
                                    </button>
                                </a>
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
                                    <?php if($_SESSION["user_group_id"]!=2){ ?>
                                    <th>İŞLEM</th>
                                    <?php } ?>
                                </tr>
                                </thead>
                                <tbody>
                                <?php
                                if ($_SESSION["user_group_id"] == 2) {
                                    $Filter = "cards.card_distributor_id = '" . $_SESSION["distributor_id"] . "'";
                                } else {
                                    $Filter = "cards.id != 0";
                                }

                                $Filter .= " and cards.card_type = 1";

                                if (isset($_GET["distributor"]) and !empty($_GET["distributor"])) {
                                    $Filter .= " and cards.card_distributor_id ='" . $_GET["distributor"] . "'";
                                }
                                if (isset($_GET["status"]) and !empty($_GET["status"])) {
                                    if ($_GET["status"] == 5) {
                                        $statusChange = 0;
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

                                $Query = $db->query("SELECT *,cards.id AS CardID FROM cards
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
                                        $status = "<font color='red'>İPTAL</font>";
                                    }
                                    ?>
                                    <tr>
                                        <td><?= CardNumberMask($row["card_number"]) ?></td>
                                        <td><?= $row["campaign_name"]!="" ? $row["campaign_name"] : "-" ?></td>
                                        <td><?= date("d-m-Y H:i:s", $row["card_create_time"]) ?></td>
                                        <td><?= $status ?></td>
                                        <td><?= $dist ?></td>
                                        <td><?= $client ?></td>
                                        <?php if($_SESSION["user_group_id"]!=2){ ?>
                                        <td><?php if ($row["card_status"] == 2) {
                                                echo "<a href='index.php?module=dynobilCard/dynobilCard_list&do=add_manuel_amount_dynobilCard&id=" . $row["CardID"] . "'>
                                                <button type='button' class='btn btn-success'>Kredi Yükle</button></a>";
                                            } else if ($row["card_status"] == 1) { 
                                                echo "<a href='index.php?module=dynobilCard/dynobilCard_list&do=change_card_dist&id=" . $row["CardID"] . "'>
                                                <button type='button' class='btn btn-warning'>Bayi Değiştir</button></a>"; 
                                            } else echo "-"; ?></td>
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


                <?php
            } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        }
        else if (@$_GET['do'] == "add_manuel_amount_dynobilCard") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                $Query = $db->query("SELECT * FROM cards                    
                    LEFT JOIN clients ON cards.id = clients.card_id                                                                                                                             
                    WHERE cards.id='" . $_GET["id"] . "'")->fetch_assoc();
                if ($Query["card_type"] == 1 and $Query["client_name"]!="") {
                    if ($_POST) {

                        if (!empty($_POST["CardID"]) and !empty($_POST["remain1"])) {
                            $QueryCard = $db->query("SELECT * FROM clients WHERE card_id='" . $_POST["CardID"] . "'")->fetch_assoc();
                            if ($QueryCard["card_id"] != 0) {

                                if (!empty($_POST['remain2'])) {
                                    if (strlen($_POST["remain2"]) == 1) {
                                        $_POST["remain2"] = $_POST["remain2"] . "0";
                                    }
                                    $price = $_POST["remain1"] . "." . $_POST["remain2"];
                                } else {
                                    $price = $_POST["remain1"] . ".00";
                                }

                                $CampaignFetch = $db->query("SELECT * FROM client_campaigns WHERE client_id='" . $QueryCard["id"] . "'")->fetch_assoc();
                                $LastAmount = $CampaignFetch["last_upload"];
                                $LastAmountAndPrice = ($LastAmount + $price);

                                $Client = $db->query("SELECT * FROM clients WHERE id='" . $QueryCard["id"] . "'")->fetch_assoc();
                                $CampaignInfo = $db->query("SELECT * FROM campaigns LEFT JOIN cards ON cards.card_campaign_id=campaigns.id WHERE cards.id='" . $Client["card_id"] . "'")->fetch_assoc();
                                $CampaignAmount = $CampaignInfo["campaign_amount"];
                                $CampaignPercent = $CampaignInfo["campaign_percent"];

                                if ($LastAmountAndPrice >= $CampaignAmount) {
                                    $kalan = $LastAmountAndPrice % $CampaignAmount; // last_upload yazılacak değer
                                    $bolum = $LastAmountAndPrice / $CampaignAmount;
                                    $bolumInt = (int)$bolum; // kazanılan hak
                                    //echo $kalan." ".$bolum." ".$bolumInt;
                                    $Update = $db->query("UPDATE client_campaigns SET last_upload='" . $kalan . "',campaign_right=(client_campaigns.campaign_right+'" . $bolumInt . "') WHERE id='" . $CampaignFetch["id"] . "'");
                                    $CampaignDetail = "Yüklemeniz Sonrası Kazanılan Kampanya Katılım Hakkı : " . $bolumInt;
                                } else {
                                    $Update = $db->query("UPDATE client_campaigns SET last_upload='" . $LastAmountAndPrice . "' WHERE id='" . $CampaignFetch["id"] . "'");
                                    $CampaignDetail = "Yüklemeniz Sonrası Kazanılan Kampanya Katılım Hakkı : 0";
                                }

                                $Insert = $db->query("INSERT INTO deposits (unixtime,client_id,amount,payment_method)
                        VALUES('" . time() . "','" . $QueryCard["id"] . "','" . $price . "',1)");
                                $Update = $db->query("UPDATE clients SET balance=clients.balance+'" . $price . "' 
                            WHERE id='" . $QueryCard["id"] . "'");
                                if ($Insert && $Update) {
                                    $SMSContent = "Sayın Müşterimiz Kartınıza " . $price . " TL Tutarında Bakiye Yüklenmiştir." . $CampaignDetail;
                                    $InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) 
                            VALUES('" . $Client["id"] . "','" . $Client["client_mobile"] . "','" . $SMSContent . "')");
                                    $SMSID = $db->insert_id;
                                    //GondericiAdiSor();
                                    $i = 1;
                                    while ($i <= 10) {
                                        $i++;
                                        $gelen = SendSMS($SMSContent, $Client["client_mobile"]);
                                        $Response = substr($gelen, 0, 1);
                                        if ($Response == "0") {
                                            $UpdateSMS = $db->query("UPDATE sms SET sms_status=1 WHERE id='" . $SMSID . "'");
                                            break;
                                        } else {
                                            continue;
                                        }
                                    }
                                    if ($i == 11) {
                                        $UpdateSMS = $db->query("UPDATE sms SET sms_status=2 WHERE id='" . $SMSID . "'");
                                        echo error("SMS Gönderimi Başarısız!");
                                    }
                                    //echo $gelen . "<br>";

                                    echo success("Bakiye Yüklemesi Gerçekleşmiştir!<br>" . $CampaignDetail);
                                } else {
                                    echo error("Sistem Hatası! Karttan Para Çekilmiş Olup Bakiye Yüklenememiştir!");
                                    $SMSContent = "Sayın Müşterimiz Kredi Kartınızdan " . $price . " TL Tutarında Ücret Tahsil Edilmiştir. Ancak Kartınıza Yüklenmesinde Sistemsel Bir Hata Oluşmuştur. Lütfen Bayiniz İle İletişime Geçiniz.";
                                    $InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) 
                            VALUES('" . $Client["id"] . "','" . $Client["client_mobile"] . "','" . $SMSContent . "')");
                                    $SMSID = $db->insert_id;
                                    //GondericiAdiSor();
                                    $i = 1;
                                    while ($i <= 10) {
                                        $i++;
                                        $gelen = SendSMS($SMSContent, $Client["client_mobile"]);
                                        $Response = substr($gelen, 0, 1);
                                        if ($Response == "0") {
                                            $UpdateSMS = $db->query("UPDATE sms SET sms_status=1 WHERE id='" . $SMSID . "'");
                                            break;
                                        } else {
                                            continue;
                                        }
                                    }
                                    if ($i == 11) {
                                        $UpdateSMS = $db->query("UPDATE sms SET sms_status=2 WHERE id='" . $SMSID . "'");
                                        echo error("SMS Gönderimi Başarısız!");
                                    }

                                }

                            } else {
                                echo error("Sistemde Bu Kart İle kayıtlı Müşteri Bulunmamaktadır!");
                            }

                        } else {
                            echo error("Lütfen Tüm Alanları Doldurunuz!");
                        }

                    }
                    $Query = $db->query("SELECT * FROM cards                    
                    LEFT JOIN clients ON cards.id = clients.card_id                                                                                                                             
                    WHERE cards.id='" . $_GET["id"] . "'")->fetch_assoc();

                    ?>

                    <form action="" method="POST" id="CardForm">
                        <input type="hidden" name="CardID" value="<?= $_GET["id"] ?>">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">
                                    <center>YÜKLENECEK KART BİLGİLERİ</center>
                                </div>

                                <div class="form-group row" style="text-align: center">
                                    <div class="col-md-3 col-lg-3"></div>
                                    <label class="col-md-2 col-lg-2 col-form-label">KART NUMARASI :</label>
                                    <div class="col-md-2 col-lg-2">
                                        <label class="col-md-12 col-lg-12 col-form-label"><font
                                                    size="4"><?= CardNumberMask($Query["card_number"]) ?></font></label>
                                    </div>

                                    <div class="col-md-2 col-lg-2"></div>
                                </div>
                                <div class="form-group row" style="text-align: center">
                                    <div class="col-md-3 col-lg-3"></div>
                                    <label class="col-md-2 col-lg-2 col-form-label">MÜŞTERİ ADI :</label>
                                    <div class="col-md-2 col-lg-2">
                                        <label class="col-md-12 col-lg-12 col-form-label"><font
                                                    size="4"><?= $Query["client_name"] ?></font></label>
                                    </div>

                                    <div class="col-md-2 col-lg-2"></div>
                                </div>

                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">
                                    <center>YÜKLEME BİLGİLERİ</center>
                                </div>
                                <br>
                                <div class="form-group row" style="text-align: center">
                                    <div class="col-md-3 col-lg-3"></div>
                                    <label class="col-md-2 col-lg-2 col-form-label">YÜKLENECEK MİKTAR :</label>
                                    <div class="col-md-2 col-lg-2">
                                        <input type="text" class="form-control" name="remain1" onkeypress="return event.charCode>=48 && event.charCode<=57"
                                               placeholder="Tutar Giriniz">
                                    </div>
                                    <label style="margin-top: 1.5%;">,</label>
                                    <div class="col-md-1 col-lg-1">
                                        <input type="text" class="form-control" name="remain2" onkeypress="return event.charCode>=48 && event.charCode<=57"
                                               placeholder="00">
                                    </div>
                                    <div class="col-md-2 col-lg-2"></div>
                                </div>

                            </div>
                        </div>
                        <div class="card" style="text-align: center">
                            <div class="card-body">
                                <br>
                                <div class="form-group" style="text-align: center">
                                    <center>
                                        <button type="submit"
                                                class="btn btn-success px-5">ONAYLA
                                        </button>
                                    </center>
                                </div>

                            </div>
                        </div>
                    </form>


                    <?php
                } else {
                    echo error("Belirtilen Kart Bulunamadı!");
                }
            } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        } else if (@$_GET['do'] == "change_card_dist") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                $Query = $db->query("SELECT * FROM cards WHERE cards.id='" . $_GET["id"] . "'")->fetch_assoc();
                if ($Query["card_type"] == 1 and $Query["card_status"]==1) {
                    if ($_POST) {

                        if (!empty($_POST["CardID"]) and !empty($_POST["remain2"])) {                                                         
                                                               
                                
                                $Update = $db->query("UPDATE cards SET card_distributor_id='" . $_POST["remain2"] . "' WHERE id='" . $Query["id"] . "'");
                                if ($Update) {                                    
                                    //echo $gelen . "<br>";
                                    echo success("Kart Bayisi Değiştirildi!<br>");
                                } else {
                                    echo error("Sistem Hatası!");

                                }                            

                        } else {
                            echo error("Lütfen Tüm Alanları Doldurunuz!");
                        }

                    }
                    $Query = $db->query("SELECT * FROM cards                    
                    LEFT JOIN clients ON cards.id = clients.card_id                                                                                                                             
                    WHERE cards.id='" . $_GET["id"] . "'")->fetch_assoc();

                    ?>

                    <form action="" method="POST" id="CardForm">
                        <input type="hidden" name="CardID" value="<?= $_GET["id"] ?>">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">
                                    <center>BAYİ DEĞİŞTİRİLECEK KART BİLGİLERİ</center>
                                </div>

                                <div class="form-group row" style="text-align: center">
                                    <div class="col-md-3 col-lg-3"></div>
                                    <label class="col-md-2 col-lg-2 col-form-label">KART NUMARASI :</label>
                                    <div class="col-md-2 col-lg-2">
                                        <label class="col-md-12 col-lg-12 col-form-label"><font
                                                    size="4"><?= CardNumberMask($Query["card_number"]) ?></font></label>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">
                                    <center>YENİ BAYİ</center>
                                </div>
                                <br>
                                <div class="form-group row" style="text-align: center">
                                    <div class="col-md-3 col-lg-3"></div>
                                    <label class="col-md-2 col-lg-2 col-form-label">BAYİLER :</label>
                                    <div class="col-md-2 col-lg-2">
                                        <select class="form-control" name="remain2" required>
                                            <option selected value="0">--Seçiniz--</option>
                                            <?php $TypeQuery = $db->query("SELECT * FROM distributors WHERE deleted=0 ORDER BY company_name");
                                            while ($row = $TypeQuery->fetch_assoc()) { ?>
                                                <option value="<?= $row["id"] ?>"><?= $row["company_name"]?></option>
                                            <?php } ?>
                                        </select>

                                    </div>

                                    <div class="col-md-2 col-lg-2"></div>
                                </div>

                            </div>
                        </div>
                        <div class="card" style="text-align: center">
                            <div class="card-body">
                                <br>
                                <div class="form-group" style="text-align: center">
                                    <center>
                                        <button type="submit"
                                                class="btn btn-success px-5">DEĞİŞTİR
                                        </button>
                                    </center>
                                </div>

                            </div>
                        </div>
                    </form>


                    <?php
                } else {
                    echo error("Belirtilen Kart Bulunamadı!");
                }
            } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        }
        ?>
    </div>
</div>