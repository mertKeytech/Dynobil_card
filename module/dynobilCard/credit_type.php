<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "credit_type") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                // TODO : DÜZENLE
                ?>
            <a href="index.php?module=dynobilCard/credit_type&do=new_credit_type"
               class="btn btn-success btn-round waves-effect waves-light m-1">Yeni Yükleme Tipi Ekle</a>
        <br/><br>
                <div class="card">
                    <div class="card-header"><i class="fa fa-table"></i> Kredi Yükleme Tİpleri</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="default-datatable" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Yükleme Tutarı</th>
                                    <th>Yüklenecek Kredi</th>
                                    <th>İŞLEM</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php

                                $Query = $db->query("SELECT * FROM credit_cards_type");
                                while ($row = $Query->fetch_assoc()) {
                                    ?>
                                    <tr>

                                        <td><?= $row["balance"]." TL" ?></td>
                                        <td><?= $row["credit"] ?></td>
                                        <td><?= "<a href='index.php?module=dynobilCard/credit_type&do=edit_credit_type&id=" . $row["id"] . "'><button type='button' class='btn btn-success'>DÜZENLE</button></a>"?>
                                            <button type="button"
                                                    class="btn btn-danger waves-effect waves-light m-1"
                                                    title="Sil"
                                                    data-type="confirm"
                                                    data-id="<?= $row["id"] ?>" id="delete_credit_type"><i
                                                    class="fa fa fa-trash-o"></i>
                                                <span>Sil</span>
                                            </button></td>
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
                $(document).on("click", "#delete_credit_type", function () {
                    var id = $(this).data('id');
                    $("#delete_type_id").val(id);
                    $('#deleteType').modal('show');
                });
            </script>
            <!--            Delete Region Modal-->
            <div class="modal fade" id="deleteType">
                <input type="hidden" id="delete_type_id">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Kredi Yükleme Tipi Silme Formu</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>
                            <center>Seçili Tip Silinecektir!</center>
                            </p>
                            <p>
                            <center>Onaylıyor musunuz?</center>
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-white" data-dismiss="modal"><i
                                    class="fa fa-times"></i>Hayır, Vazgeç
                            </button>
                            <button type="button" onclick="deleteType()" class="btn btn-primary"><i
                                    class="fa fa-check-square-o"></i>Evet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                function deleteType() {
                    var id = document.getElementById('delete_type_id').value;

                    $.post("ajax/deleteType.php", {
                        id: id
                    }).done(function (data) {
                        if (data == "ok") {
                            swal({
                                title: "BAŞARILI",
                                text: "Kredi Yükleme Tipi Silindi!",
                                icon: "success",
                                button: "OK",
                            })
                                .then((willOk) => {
                                        if (willOk) {
                                            $("#deleteType").modal("hide");
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
        } else if (@$_GET['do'] == "edit_credit_type") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                if ($_POST) {
                    if (!empty($_POST["balance"]) and !empty($_POST["credit"])) {
                        $ControlName = $db->query("SELECT * FROM credit_cards_type WHERE balance = '" . $_POST["balance"] . "' and id!='".$_GET["id"]."'")->num_rows;
                        if ($ControlName == 0) {
                            $UpdateCampaign = $db->query("UPDATE credit_cards_type SET balance='".$_POST["balance"]."',
                            credit='".$_POST["credit"]."' WHERE id='".$_GET["id"]."'");
                            if ($UpdateCampaign) {
                                echo success("Yükleme Tipi Düzenlendi!");
                            } else {
                                echo error("Sistem Hatası! Yükleme Tipi Düzenlenemedi!<br>Detay: " . mysqli_error($db));
                            }

                        } else {
                            echo error("Bu Tutar İçin Sistemde Kayıt Mevcuttur!");
                        }
                    }
                }

                $FetchCampaign = $db->query("SELECT * FROM credit_cards_type WHERE id='".$_GET["id"]."'")->fetch_assoc();
                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">Kredi Yükleme Tipi Düzenleme</div>
                        <form action="" method="POST">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label>Yükleme Tutarı</label>
                                        <input type="text" class="form-control" id="balance" name="balance" required
                                               autocomplete="off" value="<?=$FetchCampaign["balance"]?>"
                                               placeholder="Yükleme Tutarını Giriniz">

                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label>Yüklenecek Kredi</label>
                                        <input type="text" class="form-control" id="credit" name="credit"
                                               autocomplete="off" required value="<?=$FetchCampaign["credit"]?>"
                                               placeholder="Yüklenecek Krediyi Giriniz">
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
        }  else if (@$_GET['do'] == "new_credit_type") {
        if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
            if ($_POST) {
                if (!empty($_POST["balance"]) and !empty($_POST["credit"])) {
                    $ControlName = $db->query("SELECT * FROM credit_cards_type WHERE balance = '" . $_POST["balance"] . "'")->num_rows;
                    if ($ControlName == 0) {
                        $UpdateCampaign = $db->query("INSERT INTO credit_cards_type(balance,credit) 
VALUES('".$_POST["balance"]."','".$_POST["credit"]."')");
                        if ($UpdateCampaign) {
                            echo success("Yükleme Tipi Eklendi!");
                        } else {
                            echo error("Sistem Hatası! Yükleme Tipi Oluşturulamadı<br>Detay: " . mysqli_error($db));
                        }

                    } else {
                        echo error("Bu Tutar İçin Sistemde Kayıt Mevcuttur!");
                    }
                }
            }

            ?>
            <div class="card">
                <div class="card-body">
                    <div class="card-title">Kredi Yükleme Tipi Ekleme Formu</div>
                    <form action="" method="POST">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Yükleme Tutarı</label>
                                    <input type="text" class="form-control" id="amount" name="balance" required
                                           autocomplete="off"
                                           placeholder="Yükleme Tutarını Giriniz">

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Yüklenecek Kredi</label>
                                    <input type="text" class="form-control" id="credit" name="credit"
                                           autocomplete="off" required
                                           placeholder="Yüklenecek Krediyi Giriniz">
                                </div>
                            </div>
                        </div>

                        <br>
                        <div class="form-group" style="text-align: center">
                            <button type="submit"
                                    class="btn btn-warning px-5">Ekle
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