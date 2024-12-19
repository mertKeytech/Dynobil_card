<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "list_confirm_customer") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                // TODO : DÜZENLE
                ?>

                <div class="card">
                    <div class="card-header"><i class="fa fa-table"></i> Kurumsal Müşteri Üye İstekleri</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="default-datatable" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>EMAİL</th>
                                    <th>GSM NO</th>
                                    <th>TARİH</th>
                                    <th>İŞLEM</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php

                                $Query = $db->query("SELECT * FROM mobile_new_user");
                                while ($row = $Query->fetch_assoc()) {
                                    ?>
                                    <tr>
                                        <td><?= $row["email"] ?></td>
                                        <td><?= $row["mobile"] ?></td>
                                        <td><?= date("d-m-Y H:i", $row["unixtime"] + 10800); ?></td>
                                        <td>
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
                        $.post("ajax/deleteKurumsal.php", {
                            id: id
                        }).done(function (data) {
                            if (data == "ok") {
                                swal({
                                    title: "BAŞARILI",
                                    text: "İstek İncelendi ve Silindi!",
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
                        $
                    });
                </script>


                <?php
            } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        }
        ?>
    </div>
</div>