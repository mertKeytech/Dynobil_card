<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "list_campaign") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                // TODO : DÜZENLE
                ?>

                <div class="card">
                    <div class="card-header"><i class="fa fa-table"></i> Kampanya Listesi</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="default-datatable" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Kampanya Adı</th>
                                    <th>Kampanya Tutarı</th>
                                    <th>Kampanya Oranı</th>
                                    <th>İŞLEM</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php

                                $Query = $db->query("SELECT * FROM campaigns");
                                while ($row = $Query->fetch_assoc()) {
                                    ?>
                                    <tr>
                                        <td><?= $row["campaign_name"] ?></td>
                                        <td><?= $row["campaign_amount"]." TL" ?></td>
                                        <td><?= "%".$row["campaign_percent"] ?></td>
                                        <td><?= "<a href='index.php?module=campaign/campaign&do=edit_campaign&id=" . $row["id"] . "'><button type='button' class='btn btn-success'>DÜZENLE</button></a>"?>
                                            <button type="button"
                                                    class="btn btn-danger waves-effect waves-light m-1"
                                                    title="Sil"
                                                    data-type="confirm"
                                                    data-id="<?= $row["id"] ?>" id="delete_dist"><i
                                                        class="fa fa fa-trash-o"></i>
                                                <span>Sil</span>
                                            </button>
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
            <script>
                $(document).on("click", "#delete_dist", function () {
                    var id = $(this).data('id');
                    $("#delete_dist_id").val(id);
                    $('#deleteDist').modal('show');
                });
            </script>
            <!--            Delete Region Modal-->
            <div class="modal fade" id="deleteDist">
                <input type="hidden" id="delete_dist_id">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Kampanya Silme Formu</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>
                            <center>Seçili Kampanya Silinecektir!</center>
                            </p>
                            <p>
                            <center>Onaylıyor musunuz?</center>
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-white" data-dismiss="modal"><i
                                        class="fa fa-times"></i>Hayır, Vazgeç
                            </button>
                            <button type="button" onclick="deleteDist()" class="btn btn-primary"><i
                                        class="fa fa-check-square-o"></i>Evet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                function deleteDist() {
                    var id = document.getElementById('delete_dist_id').value;

                    $.post("ajax/deleteCampaign.php", {
                        id: id
                    }).done(function (data) {
                        if (data == "ok") {
                            swal({
                                title: "BAŞARILI",
                                text: "Kampanya Silindi!",
                                icon: "success",
                                button: "OK",
                            })
                                .then((willOk) => {
                                        if (willOk) {
                                            $("#deleteDist").modal("hide");
                                            location.reload();
                                        }
                                    }
                                );

                        } else {
                            swal("", data, "warning");
                        }
                    });
                }

            </script>


                <?php
            } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        } else if (@$_GET['do'] == "edit_campaign") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                if ($_POST) {
                    if (!empty($_POST["name"]) and !empty($_POST["amount"]) and !empty($_POST["percent"])) {
                        $ControlName = $db->query("SELECT * FROM campaigns WHERE campaign_name = '" . $_POST["name"] . "' and id!='".$_GET["id"]."'")->num_rows;
                        if ($ControlName == 0) {
                            $UpdateCampaign = $db->query("UPDATE campaigns SET campaign_name='".$_POST["name"]."',
                            campaign_amount='".$_POST["amount"]."',campaign_percent='".$_POST["percent"]."' WHERE id='".$_GET["id"]."'");
                            if ($UpdateCampaign) {
                                echo success("Kampanya Düzenlendi!");
                            } else {
                                echo error("Sistem Hatası! Kampanya Oluşturulamadı<br>Detay: " . mysqli_error($db));
                            }

                        } else {
                            echo error("Bu Kampanya Adı Sistemde Kayıtlı!");
                        }
                    }
                }

                $FetchCampaign = $db->query("SELECT * FROM campaigns WHERE id='".$_GET["id"]."'")->fetch_assoc();
                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">Kampanya Düzenleme - <font color="green"><?=$FetchCampaign["campaign_name"]?></font></div>
                        <form action="" method="POST">
                            <div class="form-group">
                                <label>Kampanya Adı</label>
                                <input type="text" class="form-control" id="name" name="name"
                                       required value="<?=$FetchCampaign["campaign_name"]?>"
                                       autocomplete="off"
                                       placeholder="Kampanya Adını Giriniz">

                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label>Kampanya Yükleme Tutarı</label>
                                        <input type="text" class="form-control" id="amount" name="amount" required
                                               autocomplete="off" value="<?=$FetchCampaign["campaign_amount"]?>"
                                               placeholder="Kampanya Tutarını Giriniz">

                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label>Kampanya Oranı</label>
                                        <input type="text" class="form-control" id="percent" name="percent"
                                               autocomplete="off" required value="<?=$FetchCampaign["campaign_percent"]?>"
                                               placeholder="Kampanya için Oran Giriniz">
                                    </div>
                                </div>
                            </div>

                            <br>
                            <div class="form-group" style="text-align: center">
                                <button type="submit"
                                        class="btn btn-warning px-5">Düzenle
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            <?php } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        } else if (@$_GET['do'] == "distributor_detail") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {

                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="tabs-vertical tabs-vertical-warning">
                                    <ul class="nav nav-tabs flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link py-4 active" data-toggle="tab" href="#General"><i
                                                    class="icon-user"></i> <span
                                                    class="hidden-xs">GENEL BİLGİLER</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link py-4" data-toggle="tab" href="#Sales"><i
                                                    class="icon-folder"></i> <span
                                                    class="hidden-xs">SATIŞ ÖZETİ</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link py-4" data-toggle="tab" href="#Cards"><i
                                                    class="icon-credit-card"></i> <span
                                                    class="hidden-xs">KART DETAY</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <!-- Tab panes -->
                                <div class="tab-content">
                                    <div id="General" class="container tab-pane active">
                                        <?php $query = $db->query("SELECT * FROM distributors 
                                        LEFT JOIN user ON user.id=distributors.user_id 
                                        LEFT JOIN city ON city.id=distributors.company_city_id
                                        LEFT JOIN county ON county.id=distributors.company_county_id
                                        WHERE distributors.id='" . $_GET["id"] . "'")->fetch_assoc(); ?>
                                        <div class="row">
                                            <div class="col-md-6 col-lg-6">
                                                <div class="row">
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">BAYİ ADI :</font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["company_name"] ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">BAYİ ADRESİ :</font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["company_address"] ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">BAYİ EMAİL : </font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["company_contact_email"] ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">BAYİ TELEFON : </font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["company_phone1"] ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">BAYİ CEP NO : </font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["company_mobile"] ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">BAYİ İL / İLÇE : </font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["city_name"] . " / " . $query["county_name"] ?></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-6">
                                                <div class="row">
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">KULLANICI ADI :</font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["username"] ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">EMAİL : </font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["email"] ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">DURUMU :</font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["status"] == 1 ? "<font color='green'>AKTİF</font>" : "<font color='red'>PASİF</font>" ?></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Sales" class="container tab-pane fade">
                                        <?php
                                        $LastWeek = strtotime('-7 days', time());
                                        $LastMonth = strtotime('-1 months', time());
                                        $LastYear = strtotime('-1 year', time());
                                        $QueryWeek = $db->query("SELECT SUM(amount) AS TOPLAM FROM transactions WHERE distributor_id='" . $_GET["id"] . "' and transaction_status=4 and unix_time>='" . $LastWeek . "'")->fetch_assoc();
                                        $QueryMonth = $db->query("SELECT SUM(amount) AS TOPLAM FROM transactions WHERE distributor_id='" . $_GET["id"] . "' and transaction_status=4 and unix_time>='" . $LastMonth . "'")->fetch_assoc();
                                        $QueryYear = $db->query("SELECT SUM(amount) AS TOPLAM FROM transactions WHERE distributor_id='" . $_GET["id"] . "' and transaction_status=4 and unix_time>='" . $LastYear . "'")->fetch_assoc();

                                        $QueryWeek2 = $db->query("SELECT * FROM transactions WHERE distributor_id='" . $_GET["id"] . "' and transaction_status=4 and unix_time>='" . $LastWeek . "'")->num_rows;
                                        $QueryMonth2 = $db->query("SELECT * FROM transactions WHERE distributor_id='" . $_GET["id"] . "' and transaction_status=4 and unix_time>='" . $LastMonth . "'")->num_rows;
                                        $QueryYear2 = $db->query("SELECT * FROM transactions WHERE distributor_id='" . $_GET["id"] . "' and transaction_status=4 and unix_time>='" . $LastYear . "'")->num_rows;
                                        ?>
                                        <div class="row">
                                            <div class="col-lg-3 col-md-3">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="media align-items-center">
                                                            <div class="media-body">
                                                                <h5 class="mb-0 text-white"><?= $QueryWeek2 . " ADET" ?></h5>
                                                                <p class="mb-0 text-white">SON 1 HAFTA SATIŞ MİKTARI
                                                                    (ADET)</p>
                                                            </div>
                                                            <div class="w-icon"><i
                                                                    class="fa fa-shopping-cart text-warning"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="media align-items-center">
                                                            <div class="media-body">
                                                                <h5 class="mb-0 text-white"><?= $QueryWeek["TOPLAM"] == "" ? "<font color='red'>0 TRY</font>" : $QueryWeek["TOPLAM"] . " TRY" ?></h5>
                                                                <p class="mb-0 text-white">SON 1 HAFTA SATIŞ MİKTARI
                                                                    (TRY)</p>
                                                            </div>
                                                            <div class="w-icon"><i class="fa fa-try text-green"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="media align-items-center">
                                                            <div class="media-body">
                                                                <h5 class="mb-0 text-white"><?= $QueryMonth2 . " ADET" ?></h5>
                                                                <p class="mb-0 text-white">SON 1 AY SATIŞ MİKTARI
                                                                    (ADET)</p>
                                                            </div>
                                                            <div class="w-icon"><i
                                                                    class="fa fa-shopping-cart text-warning"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="media align-items-center">
                                                            <div class="media-body">
                                                                <h5 class="mb-0 text-white"><?= $QueryMonth["TOPLAM"] == "" ? "<font color='red'>0 TRY</font>" : $QueryMonth["TOPLAM"] . " TRY" ?></h5>
                                                                <p class="mb-0 text-white">SON 1 AY SATIŞ&emsp; MİKTARI
                                                                    (TRY)</p>
                                                            </div>
                                                            <div class="w-icon"><i class="fa fa-try text-green"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="media align-items-center">
                                                            <div class="media-body">
                                                                <h5 class="mb-0 text-white"><?= $QueryYear2 . " ADET" ?></h5>
                                                                <p class="mb-0 text-white">SON 1 YIL SATIŞ MİKTARI
                                                                    (ADET)</p>
                                                            </div>
                                                            <div class="w-icon"><i
                                                                    class="fa fa-shopping-cart text-warning"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="media align-items-center">
                                                            <div class="media-body">
                                                                <h5 class="mb-0 text-white"><?= $QueryYear["TOPLAM"] == "" ? "<font color='red'>0 TRY</font>" : $QueryYear["TOPLAM"] . " TRY" ?></h5>
                                                                <p class="mb-0 text-white">SON 1 YIL SATIŞ MİKTARI
                                                                    (TRY)</p>
                                                            </div>
                                                            <div class="w-icon"><i class="fa fa-try text-green"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div id="Cards" class="container tab-pane fade">
                                        <?php
                                        $InDist = $db->query("SELECT * FROM cards WHERE card_status=1 and card_distributor_id='" . $_GET["id"] . "'")->num_rows;
                                        $InClient = $db->query("SELECT * FROM cards WHERE card_status=2 and card_distributor_id='" . $_GET["id"] . "'")->num_rows;
                                        ?>
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="media align-items-center">
                                                            <div class="media-body">
                                                                <h5 class="mb-0 text-white"><?= $InDist . " ADET" ?></h5>
                                                                <p class="mb-0 text-white">BAYİNİN ELİNDEKİ KART
                                                                    SAYISI</p>
                                                            </div>
                                                            <div class="w-icon"><i
                                                                    class="fa fa-credit-card text-warning"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="media align-items-center">
                                                            <div class="media-body">
                                                                <h5 class="mb-0 text-white"><?= $InClient . " ADET" ?></h5>
                                                                <p class="mb-0 text-white">BAYİNİN DAĞITTIĞI KART
                                                                    SAYISI</p>
                                                            </div>
                                                            <div class="w-icon"><i
                                                                    class="fa fa-credit-card text-green"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!--End Row-->
                    </div>
                </div>

            <?php } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        } else if (@$_GET['do'] == "client_detail") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {

                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="tabs-vertical tabs-vertical-warning">
                                    <ul class="nav nav-tabs flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link py-4 active" data-toggle="tab" href="#General"><i
                                                    class="icon-user"></i> <span
                                                    class="hidden-xs">GENEL BİLGİLER</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link py-4" data-toggle="tab" href="#Deposit"><i
                                                    class="fa fa-credit-card"></i> <span
                                                    class="hidden-xs">YÜKLEME GEÇMİŞİ</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link py-4" data-toggle="tab" href="#Transaction"><i
                                                    class="fa fa-shopping-cart"></i> <span
                                                    class="hidden-xs">HARCAMA GEÇMİŞİ</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link py-4" data-toggle="tab" href="#Sales"><i
                                                    class="fa fa-exchange"></i> <span
                                                    class="hidden-xs">SATIŞLAR</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link py-4" data-toggle="tab" href="#Cards"><i
                                                    class="icon-credit-card"></i> <span
                                                    class="hidden-xs">GEÇMİŞ KARTLAR</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link py-4" data-toggle="tab" href="#Campaigns"><i
                                                    class="fa fa-calendar-minus-o"></i> <span
                                                    class="hidden-xs">KAMPANYALAR</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <!-- Tab panes -->
                                <div class="tab-content">
                                    <div id="General" class="container tab-pane active">
                                        <?php $query = $db->query("SELECT * FROM clients 
                                        LEFT JOIN user ON user.id=clients.user_id   
                                        LEFT JOIN cards ON cards.id=clients.card_id                                      
                                        WHERE clients.id='" . $_GET["id"] . "' and cards.card_status=2")->fetch_assoc(); ?>
                                        <div class="row">
                                            <div class="col-md-6 col-lg-6">
                                                <div class="row">
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">MÜŞTERİ ADI :</font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["client_name"] ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">ADRESİ :</font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["client_address"] ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">EMAİL : </font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["email"] ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">TELEFON : </font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["client_phone1"] ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">CEP NO : </font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["client_mobile"] ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">KART NO : </font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= CardNumberMask($query["card_number"]) ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">BAKİYE : </font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["balance"] . " TL" ?></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-6">
                                                <div class="row">
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">KULLANICI ADI :</font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["username"] ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">EMAİL : </font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["email"] ?></h5>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4">
                                                        <h5><font color="orange">DURUMU :</font></h5>
                                                    </div>
                                                    <div class="col-md-8 col-lg-8">
                                                        <h5><?= $query["status"] == 1 ? "<font color='green'>AKTİF</font>" : "<font color='red'>PASİF</font>" ?></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Deposit" class="container tab-pane">
                                        <div class="card">
                                            <div class="card-header"><i class="fa fa-table"></i> YÜKLEME GEÇMİŞİ</div>
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table id="default-datatable" class="table table-bordered">
                                                        <thead>
                                                        <tr>
                                                            <th>İŞLEM TARİHİ</th>
                                                            <th>YÜKLENEN TUTAR</th>
                                                            <th>ÖDEME TÜRÜ</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <?php

                                                        $Query = $db->query("SELECT * FROM deposits WHERE client_id='" . $_GET["id"] . "'");
                                                        while ($row = $Query->fetch_assoc()) {
                                                            if ($row["payment_method"] == 1) {
                                                                $method = "KREDİ KARTI";
                                                            } else {
                                                                $method = "DİĞER";
                                                            }
                                                            ?>
                                                            <tr>
                                                                <td><?= date("d-m-Y H:i:s", $row["unixtime"]); ?></td>
                                                                <td><?= $row["amount"] . " TL" ?></td>
                                                                <td><?= $method; ?></td>
                                                            </tr>
                                                            <?php
                                                        }

                                                        ?>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Transaction" class="container tab-pane">
                                        <div class="card">
                                            <div class="card-header"><i class="fa fa-table"></i> HARCAMA GEÇMİŞİ</div>
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table id="default-datatable2" class="table table-bordered">
                                                        <thead>
                                                        <tr>
                                                            <th>İŞLEM TARİHİ</th>
                                                            <th>HARCANAN TUTAR</th>
                                                            <th>BAYİ BİLGİSİ</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <?php

                                                        $Query = $db->query("SELECT * FROM transactions LEFT JOIN distributors ON distributors.id=transactions.distributor_id
                                                        WHERE transactions.client_id='" . $_GET["id"] . "' and transactions.transaction_status=4");
                                                        while ($row = $Query->fetch_assoc()) {
                                                            ?>
                                                            <tr>
                                                                <td><?= date("d-m-Y H:i:s", $row["unix_time"]); ?></td>
                                                                <td><?= $row["amount"] . " TL" ?></td>
                                                                <td><?= $row["company_name"]; ?></td>
                                                            </tr>
                                                            <?php
                                                        }

                                                        ?>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Sales" class="container tab-pane fade">
                                        <div class="card">
                                            <div class="card-header"><i class="fa fa-table"></i>SATIŞ İŞLEMLERİ</div>
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table id="default-datatable4" class="table table-bordered">
                                                        <thead>
                                                        <tr>
                                                            <th>İŞLEM TARİHİ</th>
                                                            <th>SATIŞ TUTARI</th>
                                                            <th>SATIŞ BAYİ</th>
                                                            <th>DOSYA BAŞLIK</th>
                                                            <th>DOSYA AÇIKLAMA</th>
                                                            <th>DOSYA</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <?php

                                                        $Query = $db->query("SELECT * FROM transactions LEFT JOIN distributors ON distributors.id=transactions.distributor_id
                                                        LEFT JOIN reports ON reports.transaction_id=transactions.id
                                                        WHERE transactions.client_id='" . $_GET["id"] . "' and transactions.transaction_status=4");
                                                        while ($row = $Query->fetch_assoc()) {
                                                            ?>
                                                            <tr>
                                                                <td><?= date("d-m-Y H:i:s", $row["unix_time"]); ?></td>
                                                                <td><?= $row["amount"] . " TL" ?></td>
                                                                <td><?= $row["company_name"]; ?></td>
                                                                <td><?= $row["report_title"]!="" ? $row["report_title"] : "-"; ?></td>
                                                                <td><?= $row["report_description"]!="" ? $row["report_description"] : "-"; ?></td>
                                                                <td><?= $row["report_file_url"]!="" ? "<a href='".$row["report_file_url"] ."' target='_blank'><button type='button' class='btn btn-success'>GÖRÜNTÜLE</button></a>" : "<font color='red'>YÜKLENMEDİ</font>"; ?></td>
                                                            </tr>
                                                            <?php
                                                        }

                                                        ?>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Cards" class="container tab-pane fade">
                                        <div class="card">
                                            <div class="card-header"><i class="fa fa-table"></i> GEÇMİŞ KART KAYITLARI
                                            </div>
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table id="default-datatable3" class="table table-bordered">
                                                        <thead>
                                                        <tr>
                                                            <th>İŞLEM TARİHİ</th>
                                                            <th>KART NUMARASI</th>
                                                            <th>KART DURUMU</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <?php

                                                        $Query = $db->query("SELECT * FROM cards_stolen LEFT JOIN cards ON cards.id=cards_stolen.card_id
                                                        WHERE cards_stolen.client_id='" . $_GET["id"] . "'");
                                                        while ($row = $Query->fetch_assoc()) {
                                                            if ($row["card_status"] == 3) {
                                                                $status = "KAYIP / ÇALINTI";
                                                            } else if ($row["card_status"] == 4) {
                                                                $status = "İPTAL";
                                                            }
                                                            ?>
                                                            <tr>
                                                                <td><?= date("d-m-Y H:i:s", $row["unixtime"]); ?></td>
                                                                <td><?= CardNumberMask($row["card_number"]) ?></td>
                                                                <td><?= $status; ?></td>
                                                            </tr>
                                                            <?php
                                                        }

                                                        ?>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div id="Campaigns" class="container tab-pane fade"></div>
                                </div>
                            </div>
                        </div><!--End Row-->
                    </div>
                </div>

            <?php } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        } else if (@$_GET['do'] == "change_card") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                if ($_POST) {
                    if (!empty($_POST["card"])) {
                        $ReadClient = $db->query("SELECT * FROM clients LEFT JOIN cards ON cards.id=clients.card_id WHERE clients.id='" . $_GET["id"] . "'")->fetch_assoc();
                        if ($_SESSION["user_group_id"] == 2) {
                            $dist = $_SESSION["distributor_id"];
                        } else {
                            $dist = 0;
                        }
                        if ($ReadClient["card_number"] == "") {
                            $Update = $db->query("UPDATE cards SET card_status=2,card_distributor_id='" . $dist . "' WHERE id='" . $_POST["card"] . "'");
                            $UpdateCLient = $db->query("UPDATE clients SET card_id='" . $_POST["card"] . "' WHERE id='" . $_GET["id"] . "'");
                            if ($Update && $UpdateCLient) {
                                echo success("Müşteri Kartı Değiştirildi!<br>Müşteri Listesine Yönlendiriliyorsunuz!");
                                echo redirect("index.php?module=customer/customer&do=list_customer", 3000);
                            } else {
                                echo error("Sistem Hatası!<br>Detay : " . mysqli_error($db));
                            }
                        } else {
                            if (!empty($_POST["status"])) {
                                $Update = $db->query("UPDATE cards SET card_status=2,card_distributor_id='" . $dist . "' WHERE id='" . $_POST["card"] . "'");
                                $UpdateOld = $db->query("UPDATE cards SET card_status='" . $_POST["status"] . "' WHERE id='" . $ReadClient["card_id"] . "'");
                                $InsertStolen = $db->query("INSERT INTO cards_stolen(card_id,client_id,card_status,unixtime) VALUES('" . $ReadClient["card_id"] . "','" . $_GET["id"] . "','" . $_POST["status"] . "','" . time() . "')");
                                $UpdateCLient = $db->query("UPDATE clients SET card_id='" . $_POST["card"] . "' WHERE id='" . $_GET["id"] . "'");
                                if ($Update && $UpdateOld && $InsertStolen && $UpdateCLient) {
                                    echo success("Müşteri Kartı Değiştirildi!<br>Müşteri Listesine Yönlendiriliyorsunuz!");
                                    echo redirect("index.php?module=customer/customer&do=list_customer", 3000);
                                } else {
                                    echo error("Sistem Hatası!<br>Detay : " . mysqli_error($db));
                                }
                            } else {
                                echo warning("Lütfen Kart Değişim Nedenini Seçiniz!");
                            }
                        }
                    } else {
                        echo warning("Lütfen Listeden Bir Kart Seçiniz!");
                    }
                }
                $ReadClient = $db->query("SELECT * FROM clients LEFT JOIN cards ON cards.id=clients.card_id WHERE clients.id='" . $_GET["id"] . "'")->fetch_assoc();
                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">MÜŞTERİ KART GÜNCELLEME</div>
                        <form action="" method="POST">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <label>Müşteri Adı</label>
                                        <input type="text" class="form-control" id="name" name="name"
                                               readonly value="<?= $ReadClient["client_name"] ?>"
                                               autocomplete="off"
                                               placeholder="Müşteri Adını Giriniz">

                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>Mevcut Kart Numarası</label>
                                        <input type="text" class="form-control" id="address" name="address"
                                               autocomplete="off"
                                               value="<?= $ReadClient["card_number"] != "" ? CardNumberMask($ReadClient["card_number"]) : "-" ?>"
                                               readonly>

                                    </div>
                                </div>
                                <?php if ($ReadClient["card_number"] != "") { ?>
                                    <div class="col-lg-3 col-md-3">
                                        <div class="form-group">
                                            <label>Değiştirme Nedeni</label>
                                            <select class="form-control single-select" name="status" required
                                                    id="status">
                                                <option disabled selected value>--Seçiniz--</option>
                                                <option value="3">KAYIP / ÇALINTI</option>
                                                <option value="4">İPTAL</option>
                                            </select>
                                        </div>
                                    </div>
                                <?php } ?>
                                <div class="col-lg-3 col-md-3">
                                    <div class="form-group">
                                        <label>Kart</label>
                                        <select class="form-control single-select" name="card" required
                                                id="card">
                                            <option disabled selected value>--Seçiniz--</option>
                                            <?php if ($_SESSION["user_group_id"] == 2) {
                                                $query = $db->query("SELECT * FROM cards WHERE card_status=1 and card_distributor_id='" . $_SESSION["distributor_id"] . "'");
                                            } else {
                                                $query = $db->query("SELECT * FROM cards WHERE card_status=0");
                                            }
                                            while ($row = $query->fetch_assoc()) {
                                                ?>
                                                <option value="<?= $row["id"] ?>"><?= CardNumberMask($row["card_number"]) ?></option>
                                            <?php } ?>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <br>
                            <div class="form-group" style="text-align: center">
                                <button type="submit"
                                        class="btn btn-warning px-5">Güncelle
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            <?php } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        }
        ?>
    </div>
</div>