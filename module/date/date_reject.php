<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "date_reject") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                if ($_SESSION["user_group_id"] == 2) { //BAYİ

                    ?>


                    <div class="card mt-2">
                        <div class="card-content">
                            <div class="row row-group m-0">
                                <?php
                                $SelectDate = $db->query("SELECT * FROM date_list WHERE dist_id='" . $_SESSION["distributor_id"] . "' and date_status=3");

                                ?>
                                <div class="col-12 col-lg-6 col-xl-12 border-light">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table id="DepositDataTable" class="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th>RANDEVU TARİHİ</th>
                                                    <th>MÜŞTERİ</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <?php
                                                while ($row = $SelectDate->fetch_assoc()) {

                                                    $Client = $db->query("SELECT * FROM clients WHERE id='" . $row["client_id"] . "'")->fetch_assoc();


                                                    ?>
                                                    <tr>
                                                        <td data-sort="<?= date("Y-m-d H:i", $row["start_unixtime"]) ?>"><?= date("d-m-Y H:i", $row["start_unixtime"]) ?></td>
                                                        <td><?= $Client["client_name"] ?></td>

                                                    </tr>

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