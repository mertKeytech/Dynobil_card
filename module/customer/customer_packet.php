<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "list_packet") {
        if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
            // TODO : DÜZENLE
            ?>
            <a href="index.php?module=customer/customer_packet&do=new_packet"
               class="btn btn-success btn-round waves-effect waves-light m-1">Yeni Paket Ekle</a>
        <br/><br>
            <div class="card">
                <div class="card-header"><i class="fa fa-table"></i> Bireysel Müşteri Paket Listesi</div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="default-datatable" class="table table-bordered">
                            <thead>
                            <tr>
                                <th>AD</th>
                                <th>TUTAR</th>
                                <th>DURUM</th>
                                <th>İŞLEM</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php

                            $Query = $db->query("SELECT * FROM customer_packet");
                            while ($row = $Query->fetch_assoc()) {
                                ?>
                                <tr>
                                    <td><?= $row["packet_name"] ?></td>
                                    <td><?= $row["packet_price"] . " TL" ?></td>
                                    <td><?= $row["status"] == 1 ? "<font color='green'>AKTİF</font>" : "<font color='red'>PASİF</font>" ?></td>
                                    <td><?= "<a href='index.php?module=customer/customer_packet&do=edit_customer_packet&id=" . $row["id"] . "'><button type='button' class='btn btn-success'>DÜZENLE</button></a>" ?>
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
                            <h5 class="modal-title">Paket Silme Formu</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>
                            <center>Seçili Bireysel Müşteri Paketi Silinecektir!</center>
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

                    $.post("ajax/deletePacket.php", {
                        id: id
                    }).done(function (data) {
                        if (data == "ok") {
                            swal({
                                title: "BAŞARILI",
                                text: "Paket Silindi!",
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
        } else if (@$_GET['do'] == "edit_customer_packet") {
        if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
        if ($_POST) {
            if (!empty($_POST["name"]) and !empty($_POST["amount"]) and !empty($_POST["status"])) {
                $ControlName = $db->query("SELECT * FROM customer_packet WHERE packet_name = '" . $_POST["name"] . "' and id!='" . $_GET["id"] . "'")->num_rows;
                if ($ControlName == 0) {
                    $UpdateCampaign = $db->query("UPDATE customer_packet SET packet_name='" . $_POST["name"] . "',
                            packet_price='" . $_POST["amount"] . "',status='" . $_POST["status"] . "' WHERE id='" . $_GET["id"] . "'");
                    if ($UpdateCampaign) {
                        echo success("Müşteri Paketi Düzenlendi!");
                    } else {
                        echo error("Sistem Hatası! Paket Düzenlenemedi<br>Detay: " . mysqli_error($db));
                    }

                } else {
                    echo error("Bu Paket Adı Sistemde Kayıtlı!");
                }
            }
        }

        $FetchCampaign = $db->query("SELECT * FROM customer_packet WHERE id='" . $_GET["id"] . "'")->fetch_assoc();
        ?>
            <div class="card">
                <div class="card-body">
                    <div class="card-title">Paket Düzenleme - <font
                                color="green"><?= $FetchCampaign["packet_name"] ?></font></div>
                    <form action="" method="POST">
                        <div class="form-group">
                            <label>Paket Adı</label>
                            <input type="text" class="form-control" id="name" name="name"
                                   required value="<?= $FetchCampaign["packet_name"] ?>"
                                   autocomplete="off"
                                   placeholder="Paket Adını Giriniz">

                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Paket Tutarı</label>
                                    <input type="text" class="form-control" id="amount" name="amount" required
                                           autocomplete="off" value="<?= $FetchCampaign["packet_price"] ?>"
                                           placeholder="Paket Tutarını Giriniz">

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Paket Durumu</label>
                                    <select class="form-control" id="status" name="status" required>
                                        <option <?php if ($FetchCampaign["status"] == 1) {
                                            echo "selected";
                                        } ?> value="1">AKTİF
                                        </option>
                                        <option <?php if ($FetchCampaign["status"] == 2) {
                                            echo "selected";
                                        } ?> value="2">PASİF
                                        </option>
                                    </select>

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
        }else if (@$_GET['do'] == "new_packet") {
        if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
            if ($_POST) {
                if (!empty($_POST["name"]) and !empty($_POST["amount"])) {
                    $ControlName = $db->query("SELECT * FROM customer_packet WHERE packet_name = '" . $_POST["name"] . "'")->num_rows;
                    if ($ControlName == 0) {
                        $INSERT = $db->query("INSERT INTO customer_packet(packet_name,packet_price) VALUES('".$_POST["name"]."','".$_POST["amount"]."')");
                        if($INSERT){
                            echo success("Müşteri Paketi Oluşturuldu!");
                        } else {
                            echo error("Sistem Hatası! Paket Oluşturulamadı<br>Detay: " . mysqli_error($db));
                        }


                    } else {
                        echo error("Bu Paket Adı Sistemde Kayıtlı!");
                    }
                }
            }

            ?>
            <div class="card">
                <div class="card-body">
                    <div class="card-title">Yeni Paket Formu</div>
                    <form action="" method="POST">
                        <div class="form-group">
                            <label>Paket Adı</label>
                            <input type="text" class="form-control" id="name" name="name"
                                   required
                                   autocomplete="off"
                                   placeholder="Paket Adını Giriniz">

                        </div>

                        <div class="form-group">
                            <label>Paket Tutarı</label>
                            <input type="text" class="form-control" id="amount" name="amount" required
                                   autocomplete="off"
                                   placeholder="Paket Tutarını Giriniz">

                        </div>


                        <br>
                        <div class="form-group" style="text-align: center">
                            <button type="submit"
                                    class="btn btn-warning px-5">EKLE
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