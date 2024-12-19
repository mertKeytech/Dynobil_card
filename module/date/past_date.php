<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "past_date") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {

                ?>
                <div class="card mt-2">
                    <div class="card-content">
                        <div class="row row-group m-0">
                            <?php $SelectDate = $db->query("SELECT * FROM date_list WHERE client_id='" . $_SESSION["client_id"] . "'");

                                ?>
                                <div class="col-12 col-lg-6 col-xl-12 border-light">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table id="DepositDataTable" class="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th>RANDEVU TARİHİ</th>
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
                                                    $Address = str_replace(" ", "+", $Dist["company_address"]);

                                                    ?>
                                                    <tr>
                                                        <td data-sort="<?= date("Y-m-d H:i", $row["start_unixtime"]) ?>"><?= date("d-m-Y H:i", $row["start_unixtime"]) ?></td>
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
                                                                    <button type="button" class="close" data-dismiss="modal"
                                                                            aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <div class="form-group">
                                                                        <label for="distModal_<?=$row["id"]?>">BAYİ</label>
                                                                        <input type="text" disabled class="form-control" id="distModal_<?=$row["id"]?>" value="<?= $Dist["company_name"] ?>">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label for="dateModal_<?=$row["id"]?>">TARİH</label>
                                                                        <input type="text" disabled class="form-control" id="dateModal_<?=$row["id"]?>" value="<?= date("Y-m-d H:i", $row["start_unixtime"]) ?>">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label for="addressModal_<?=$row["id"]?>">ADRES</label>
                                                                        <input type="text" disabled class="form-control" id="addressModal_<?=$row["id"]?>" value="<?= $Dist["company_address"] ?>">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label for="statusModal_<?=$row["id"]?>">DURUM</label>
                                                                        <input type="text" disabled class="form-control" id="statusModal_<?=$row["id"]?>" value="<?=$STATUS2?>">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=<?=$Address?>"><button type="button" class="btn btn-light px-5"><i class="icon-map"></i> YOL TARİFİ</button></a>
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
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        }
        ?>
    </div>
</div>