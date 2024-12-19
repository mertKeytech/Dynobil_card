<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "date_wait_confirm") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                if ($_SESSION["user_group_id"] == 2) { //ADMIN
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


                    <div class="card mt-2">
                        <div class="card-content">
                            <div class="row row-group m-0">
                                <?php
                                $SelectDate = $db->query("SELECT * FROM date_list WHERE dist_id='" . $_SESSION["distributor_id"] . "' and date_status=1");

                                ?>
                                <div class="col-12 col-lg-6 col-xl-12 border-light">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table id="DepositDataTable" class="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th>RANDEVU TARİHİ</th>
                                                    <th>MÜŞTERİ</th>
                                                    <th>ÖDEME TÜRÜ</th>
                                                    <th>DOLULUK</th>
                                                    <th>İŞLEM</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <?php
                                                while ($row = $SelectDate->fetch_assoc()) {
                                                    $SelectQuery = $db->query("SELECT * FROM date_list WHERE dist_id='" . $_SESSION["distributor_id"] . "' and date_status=2 and start_unixtime='" . $row["start_unixtime"] . "'")->num_rows;
                                                    if ($SelectQuery > 0) {
                                                        $Status = "<font color='red'>DOLU</font>";
                                                    } else {
                                                        $Status = "<font color='green'>UYGUN</font>";
                                                    }
                                                    if ($row["price_type"] ==1 ) {
                                                        $price_type = "ONLİNE ÖDEME";
                                                    } else {
                                                        $price_type = "BAYİDE ÖDEME";
                                                    }
                                                    $Client = $db->query("SELECT * FROM clients WHERE id='" . $row["client_id"] . "'")->fetch_assoc();


                                                    ?>
                                                    <tr>
                                                        <td data-sort="<?= date("Y-m-d H:i", $row["start_unixtime"]) ?>"><?= date("d-m-Y H:i", $row["start_unixtime"]) ?></td>
                                                        <td><?= $Client["client_name"] ?></td>
                                                        <td><?= $price_type ?></td>
                                                        <td><?= $Status ?></td>
                                                        <td>
                                                            <button type="button"
                                                                    class="btn btn-success waves-effect waves-light m-1"
                                                                    title="ONAYLA"
                                                                    data-type="confirm"
                                                                    data-id="<?= $row["id"] ?>"
                                                                    id="modalShowConfirm_<?= $row["id"] ?>"><i
                                                                        class="fa fa-plus-circle"></i>
                                                            </button>
                                                            <button type="button"
                                                                    class="btn btn-outline-danger waves-effect waves-light m-1"
                                                                    title="REDDET"
                                                                    data-type="confirm"
                                                                    data-id="<?= $row["id"] ?>"
                                                                    id="modalShowReject_<?= $row["id"] ?>"><i
                                                                        class="fa fa-remove"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <script>
                                                        $(document).on("click", "#modalShowConfirm_<?=$row["id"]?>", function () {
                                                            $('#modalConfirm_<?=$row["id"]?>').modal('show');
                                                        });
                                                        $(document).on("click", "#modalShowReject_<?=$row["id"]?>", function () {
                                                            $('#modalReject_<?=$row["id"]?>').modal('show');
                                                        });
                                                    </script>
                                                    <div class="modal fade" id="modalConfirm_<?= $row["id"] ?>">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title">RANDEVU ONAYLAMA</h5>
                                                                    <button type="button" class="close"
                                                                            data-dismiss="modal"
                                                                            aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <p>
                                                                    <center>Seçilen Randevu Kabul Edilecektir!</center>
                                                                    </p>
                                                                    <p>
                                                                    <center>Onaylıyor musunuz?</center>
                                                                    </p>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-white"
                                                                            data-dismiss="modal"><i
                                                                                class="fa fa-times"></i>Hayır, Vazgeç
                                                                    </button>
                                                                    <button type="button"
                                                                            onclick="confirmDate_<?= $row["id"] ?>()"
                                                                            class="btn btn-primary"><i
                                                                                class="fa fa-check-square-o"></i>Evet
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <script>
                                                        function confirmDate_<?=$row["id"]?>(){
                                                            $.post("ajax/changeDateStatus.php", {
                                                                id: <?=$row["id"]?>,
                                                                type: 2
                                                            }).done(function (data) {
                                                                if (data == "ok") {
                                                                    swal({
                                                                        title: "BAŞARILI",
                                                                        text: "Randevu Onaylandı",
                                                                        icon: "success",
                                                                        button: "OK",
                                                                    })
                                                                        .then((willOk) => {
                                                                                if (willOk) {
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
                                                    <div class="modal fade" id="modalReject_<?= $row["id"] ?>">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title">RANDEVU REDDETME</h5>
                                                                    <button type="button" class="close"
                                                                            data-dismiss="modal"
                                                                            aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <p>
                                                                    <center>Seçilen Randevu REDDEDİLECEKTİR!</center>
                                                                    </p>
                                                                    <p>
                                                                    <center>Onaylıyor musunuz?</center>
                                                                    </p>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-white"
                                                                            data-dismiss="modal"><i
                                                                            class="fa fa-times"></i>Hayır, Vazgeç
                                                                    </button>
                                                                    <button type="button"
                                                                            onclick="rejectDate_<?= $row["id"] ?>()"
                                                                            class="btn btn-danger"><i
                                                                            class="fa fa-check-square-o"></i>Evet
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <script>
                                                        function rejectDate_<?=$row["id"]?>(){
                                                            $.post("ajax/changeDateStatus.php", {
                                                                id: <?=$row["id"]?>,
                                                                type: 3
                                                            }).done(function (data) {
                                                                if (data == "ok") {
                                                                    swal({
                                                                        title: "BAŞARILI",
                                                                        text: "Randevu Reddedildi",
                                                                        icon: "success",
                                                                        button: "OK",
                                                                    })
                                                                        .then((willOk) => {
                                                                                if (willOk) {
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


                <?php }

            } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        }
        ?>
    </div>
</div>