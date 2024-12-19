<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "date_list") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                if ($_SESSION["user_group_id"] == 1) { //ADMIN
                    if ($_POST) {
                        if (!empty($_POST["distributor"]) and !empty($_POST["date"]) and !empty($_POST["hour"])) {
                            $Date = $_POST["date"] . " " . $_POST["hour"];
                            $DateUnix = strtotime($Date);
                            if ($DateUnix > time()) {
                                $Control = $db->query("SELECT * FROM date_list WHERE dist_id='" . $_POST["distributor"] . "' and start_unixtime='" . $DateUnix . "' and date_Status!=3")->fetch_assoc();
                                if ($Control["id"] != "") { // o Tarihte başka bir randevu var
                                    echo error("Seçilen Tarih Uyumsuz!");
                                } else {
                                    $Insert = $db->query("INSERT INTO date_list(dist_id,client_id,start_unixtime) VALUES('" . $_POST["distributor"] . "','" . $_SESSION["client_id"] . "','" . $DateUnix . "')");
                                    if ($Insert) {
                                        echo success("Randevu Talebiniz Başarıyla Oluşturuldu!");
                                    } else { // Sistem Hatası
                                        echo error("Sistem Hatası!");
                                    }
                                }
                            } else {
                                echo error("Seçilen Tarih Uyumsuz!");
                            }

                        } else {
                            echo warning("Lütfen Tüm Alanları Doldurunuz!");
                        }
                    }
                    ?>
                    <div class="card">
                        <div class="card-body">
                            <div class="card-title">Filtreleme</div>
                            <form method="GET" class="form-horizontal row-border" action="#">
                                <input type="hidden" name="module" value="date/date_list"/>
                                <input type="hidden" name="do" value="date_list"/>
                                <input type="hidden" name="TYPE" value="<?= $_GET["TYPE"] ?>"/>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>Başlangıç Tarihi</label>
                                            <input type="text" name="StartDate" id="StartDate" class="form-control"
                                                   autocomplete="off" value="<?= $_GET["StartDate"] ?>">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>Bitiş Tarihi</label>
                                            <input type="text" name="EndDate" id="EndDate" class="form-control"
                                                   autocomplete="off" value="<?= $_GET["EndDate"] ?>">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="col-lg-4 col-md-4">
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
                                    <div class="col-lg-4 col-md-4">
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
                                    <div class="col-lg-4 col-md-4">
                                        <div class="form-group">
                                            <label>Randevu Durumu</label>
                                            <select class="form-control single-select" name="status"
                                                    id="status">
                                                <option disabled selected value>Seçiniz</option>
                                                <option value="1">BEKLİYOR</option>
                                                <option value="2">ONAYLANDI</option>
                                                <option value="3">REDDEDİLDİ</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
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
                <?php if ($_GET["TYPE"] == "" or $_GET["TYPE"] == 1) { ?>
                    <div style="text-align: center"><a href="index.php?module=date/date_list&do=date_list&TYPE=2">
                            <button type="button" class="btn btn-success">TAKVİM</button>
                        </a></div><br>
                <hr>
                    <div class="card mt-2">
                        <div class="card-content">
                            <div class="row row-group m-0">
                                <?php
                                $Filter = "date_list.id!=0";
                                if (isset($_GET["distributor"]) and !empty($_GET["distributor"])) {
                                    $Filter .= " and date_list.dist_id='" . $_GET["distributor"] . "'";
                                }
                                if (isset($_GET["client"]) and !empty($_GET["client"])) {
                                    $Filter .= " and date_list.client_id='" . $_GET["client"] . "'";
                                }
                                if (isset($_GET["StartDate"]) and !empty($_GET["StartDate"])) {
                                    $time = strtotime($_GET["StartDate"]);                                    
                                    $Filter .= " and date_list.start_unixtime>='" . $time . "'";
                                }
                                if (isset($_GET["EndDate"]) and !empty($_GET["EndDate"])) {
                                    $time = strtotime($_GET["EndDate"]);
                                    $Filter .= " and date_list.start_unixtime<='" . $time . "'";
                                }
                                if (isset($_GET["status"]) and !empty($_GET["status"])) {
                                    $Filter .= " and date_list.date_status='" . $_GET["status"] . "'";
                                }
                                $SelectDate = $db->query("SELECT * FROM date_list WHERE " . $Filter . "");

                                ?>
                                <div class="col-12 col-lg-6 col-xl-12 border-light">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table id="DepositDataTable" class="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th>RANDEVU TARİHİ</th>
                                                    <th>BAYİ</th>                                                    
                                                    <th>DURUM</th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <?php
                                                while ($row = $SelectDate->fetch_assoc()) {
                                                    if ($row["date_status"] == 1) {
                                                        $STATUS = "<font color='orange'>BEKLİYOR</font>";
                                                        $STATUS2 = "BEKLİYOR";
                                                    } else if ($row["date_status"] == 2) {
                                                        $STATUS = "<font color='green'>ONAYLANDI</font>";
                                                        $STATUS2 = "ONAYLANDI";
                                                    } else if ($row["date_status"] == 3) {
                                                        $STATUS = "<font color='red'>REDDEDİLDi</font>";
                                                        $STATUS2 = "REDDEDİLDi";
                                                    } else {
                                                        $STATUS = "<font color='red'>HATA!</font>";
                                                        $STATUS2 = "HATA!";
                                                    }
                                                    $Dist = $db->query("SELECT * FROM distributors WHERE id='" . $row["dist_id"] . "'")->fetch_assoc();
                                                    $Client = $db->query("SELECT * FROM clients WHERE id='" . $row["client_id"] . "'")->fetch_assoc();
                                                    $Address = str_replace(" ", "+", $Dist["company_address"]);

                                                    ?>
                                                    <tr>
                                                        <td data-sort="<?= date("Y-m-d H:i", $row["start_unixtime"]) ?>"><?= date("d-m-Y H:i", $row["start_unixtime"]) ?></td>
                                                        <td><?= $Dist["company_name"] ?></td>
                                                        <td><?= $STATUS ?></td>
                                                        <td>
                                                            <button type="button"
                                                                    class="btn btn-outline-warning waves-effect waves-light m-1"
                                                                    title="İNCELE"
                                                                    data-type="confirm"
                                                                    id="modalShow_<?= $row["id"] ?>"><i
                                                                        class="fa fa fa-search o"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <script>
                                                        $(document).on("click", "#modalShow_<?=$row["id"]?>", function () {
                                                            $('#modal_<?=$row["id"]?>').modal('show');
                                                        });
                                                    </script>
                                                    <div class="modal fade" id="modal_<?= $row["id"] ?>">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title">Randevu Detayları</h5>
                                                                    <button type="button" class="close"
                                                                            data-dismiss="modal"
                                                                            aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <div class="form-group">
                                                                        <label
                                                                                for="distModal_<?= $row["id"] ?>">BAYİ</label>
                                                                        <input type="text" disabled
                                                                               class="form-control"
                                                                               id="distModal_<?= $row["id"] ?>"
                                                                               value="<?= $Dist["company_name"] ?>">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label
                                                                                for="clientModal_<?= $row["id"] ?>">MÜŞTERİ</label>
                                                                        <input type="text" disabled
                                                                               class="form-control"
                                                                               id="clientModal_<?= $row["id"] ?>"
                                                                               value="<?= $Client["client_name"] ?>">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label
                                                                                for="dateModal_<?= $row["id"] ?>">TARİH</label>
                                                                        <input type="text" disabled
                                                                               class="form-control"
                                                                               id="dateModal_<?= $row["id"] ?>"
                                                                               value="<?= date("Y-m-d H:i", $row["start_unixtime"]) ?>">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label for="addressModal_<?= $row["id"] ?>">ADRES</label>
                                                                        <input type="text" disabled
                                                                               class="form-control"
                                                                               id="addressModal_<?= $row["id"] ?>"
                                                                               value="<?= $Dist["company_address"] ?>">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label
                                                                                for="statusModal_<?= $row["id"] ?>">DURUM</label>
                                                                        <input type="text" disabled
                                                                               class="form-control"
                                                                               id="statusModal_<?= $row["id"] ?>"
                                                                               value="<?= $STATUS2 ?>">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <a target="_blank"
                                                                           href="https://www.google.com/maps/search/?api=1&query=<?= $Address ?>">
                                                                            <button type="button"
                                                                                    class="btn btn-light px-5"><i
                                                                                        class="icon-map"></i> YOL
                                                                                TARİFİ
                                                                            </button>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <?php
                                                }

                                                ?>

                                                </tbody>
                                            </table>
                                        </div>
                                        <hr>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                <?php
                } else {
                ?>
                    <div style="text-align: center"><a href="index.php?module=date/date_list&do=date_list&TYPE=1">
                            <button type="button" class="btn btn-success">TABLO</button>
                        </a></div><br>
                <hr>
                <?php if (isset($_GET["distributor"]) and !empty($_GET["distributor"])){ ?>
                    <div id='calendar'></div>
                <?php

                if (isset($_GET["StartDate"]) and !empty($_GET["StartDate"])) {
                    $time = strtotime($_GET["StartDate"]);
                    $Filter .= " and date_list.start_unixtime>='" . $time . "'";
                    $DATE = date("Y-m-d", $time);
                } else {
                    $DATE = date("Y-m-d", time());
                }


                ?>
                    <script>
                        $(document).ready(function () {

                            $('#calendar').fullCalendar({
                                header: {
                                    left: 'prev,next today',
                                    center: 'title',
                                    right: 'month,agendaWeek,agendaDay'
                                },
                                defaultDate: '<?=$DATE?>',
                                navLinks: false, // can click day/week names to navigate views
                                selectable: false,
                                selectHelper: false,
                                editable: false,
                                eventLimit: true, // allow "more" link when too many events
                                events: {
                                    url: 'ajax/ReturnCalendarData.php?StartDate=<?=$_GET["StartDate"]?>&EndDate=<?=$_GET["EndDate"]?>&distributor=<?=$_GET["distributor"]?>&client=<?=$_GET["client"]?>&status=<?=$_GET["status"]?>',
                                    dataType: 'json',
                                    type: "GET"
                                },
                                timeFormat: 'H:mm',
                                axisFormat: 'HH:mm',
                                slotLabelFormat: "HH:mm"
                            });

                        });
                    </script>

                <?php } else {
                    echo warning("Lütfen Bayi Seçimi Yapınız!");
                } ?>


                <?php } ?>

                <?php }

            } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        }
        ?>
    </div>
</div>