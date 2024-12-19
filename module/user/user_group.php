<div class="row">
    <div class="col col-lg-12 col-xl-12">

        <?php

        if (@$_GET['do'] == "list_user_group") {
        if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
            ?>

            <a href="javascript:void(0);" class="btn btn-success btn-round waves-effect waves-light m-1"
               data-toggle="modal" data-target="#addGroup">Yeni Grup Ekle</a>
        <br/><br>

            <div class="card">
                <div class="card-header"><i class="fa fa-table"></i>Kullanıcı Grupları</div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="default-datatable" class="table table-bordered">
                            <thead>
                            <tr>
                                <th>Grup Adı</th>
                                <th>Gruba Kayıtlı Kullanıcı Sayısı</th>
                                <th>İşlem</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php
                            $QueryUser = $db->query("SELECT * FROM user_group WHERE deleted=0");
                            while ($row = $QueryUser->fetch_assoc()) {
                                $count = $db->query("SELECT * FROM user WHERE user_group_id='".$row["id"]."' and deleted=0")->num_rows;
                                ?>

                                <tr>
                                    <td>
                                        <?= $row["group_name"] ?>
                                    </td>
                                    <td>
                                        <?= $count ?>
                                    </td>
                                    <td>
                                        <?php
                                        if ($row["is_fixed"]==0) {
                                            ?>
                                            <button type="button"
                                                    class="btn btn-primary waves-effect waves-light m-1"
                                                    title="Düzenle"
                                                    data-type="confirm"
                                                    data-id="<?= $row["id"].",".$row["group_name"] ?>" id="update_user_group"><i
                                                    class="fa fa-edit"></i>
                                                <span>Düzenle</span>
                                            </button>
                                        <?php }
                                        if ($row["is_fixed"]==0) {
                                            ?>
                                            <button type="button"
                                                    class="btn btn-danger waves-effect waves-light m-1"
                                                    title="Sil"
                                                    data-type="confirm"
                                                    data-id="<?= $row["id"] ?>" id="delete_user_group"><i
                                                    class="fa fa-trash-o"></i>
                                                <span>Sil</span>
                                            </button>
                                        <?php } ?>
                                    </td>

                                </tr>
                            <?php } ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <script>
                $(document).on("click", "#delete_user_group", function () {
                    var id = $(this).data('id');
                    $("#delete_user_id").val(id);
                    $('#deleteUser').modal('show');
                });
            </script>
            <!--            Delete Region Modal-->
            <div class="modal fade" id="deleteUser">
                <input type="hidden" id="delete_user_id">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Kullanıcı Grubu Silme</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>
                            <center>Seçili Kullanıcı Grubu ve Gruba Ait Kullanıcılar Silinecektir.</center>
                            </p>
                            <p>
                            <center>Silmek İstediğinize Emin misiniz?</center>
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-white" data-dismiss="modal"><i
                                    class="fa fa-times"></i>Hayır, Kapat</button>
                            <button type="button" onclick="deleteUserGroup()" class="btn btn-primary"><i
                                    class="fa fa-check-square-o"></i>Sil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                function deleteUserGroup() {
                    var id = document.getElementById('delete_user_id').value;

                    $.post("ajax/deleteUserGroup.php", {
                        id: id
                    }).done(function (data) {
                        if (data == "ok") {
                            swal({
                                title: "BAŞARILI",
                                text: "Kullanıcı Grubu ve Kullanıcılar Silindi!",
                                icon: "success",
                                button: "OK",
                            })
                                .then((willOk) => {
                                        if (willOk) {
                                            $("#deleteUser").modal("hide");
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
            <!--            End-->
            <script>
                $(document).on("click", "#update_user_group", function () {
                    var data = $(this).data('id');
                    var split = data.split(",");
                    $("#edit_group_id").val(split[0]);
                    $("#edit_name").val(split[1]);
                    $('#editGroup').modal('show');
                });
            </script>
            <!--                Edit Region Modal-->
            <div class="modal fade" id="editGroup">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Kullanıcı Grubu Düzenleme</h5>
                            <button type="button" onclick="ClearModalInputEdit()" class="close" data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <input type="hidden" id="edit_group_id">
                                <div class="form-group">
                                    <label for="input-1">Grup Adı</label>
                                    <input type="text" class="form-control" id="edit_name"
                                           placeholder="Grup Adı Giriniz">
                                </div>

                                <div class="form-group">
                                    <button type="button" onclick="editGroup()"
                                            class="btn btn-light px-5">Düzenle</button>
                                    <button type="button" onclick="ClearModalInputEdit();" class="btn btn-secondary"
                                            data-dismiss="modal">Vazgeç</button>
                                </div>
                                <script>
                                    function editGroup() {
                                        var id = $("#edit_group_id").val();
                                        var name = $("#edit_name").val();
                                        if (name == "") {
                                            swal("Lütfen", "Grup Adı Alanını Doldurunuz", "warning");
                                        } else {
                                            $.post("ajax/editUserGroup.php", {
                                                id: id,
                                                name: name
                                            }).done(function (data) {
                                                if (data == "ok") {
                                                    swal({
                                                        title: "BAŞARILI",
                                                        text: "Kullanıcı Grubu Düzenlendi!",
                                                        icon: "success",
                                                        button: "OK",
                                                    })
                                                        .then((willOk) => {
                                                                if (willOk) {
                                                                    $("#editGroup").modal("hide");
                                                                    location.reload();
                                                                }
                                                            }
                                                        );
                                                } else {
                                                    swal("", data, "warning");
                                                }
                                            });
                                        }
                                    }

                                    function ClearModalInputEdit() {
                                        $("#edit_name").val("");
                                        $("#edit_group_id").val("");

                                    }
                                </script>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="addGroup">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Yeni Grup Formu</h5>
                            <button type="button" onclick="ClearModalInput()" class="close" data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="input-1">Grup Adı</label>
                                    <input type="text" class="form-control" id="operator_name"
                                           placeholder="Kullanıcı Grubu Adını Giriniz">
                                </div>
                                <div class="form-group">
                                    <button type="button" onclick="newGroup()"
                                            class="btn btn-light px-5">Ekle</button>
                                    <button type="button" onclick="ClearModalInput();" class="btn btn-secondary"
                                            data-dismiss="modal">İptal</button>
                                </div>
                                <script>
                                    function newGroup() {
                                        var name = $("#operator_name").val();
                                        if (name == "") {
                                            swal("Lütfen", "Grup Adı Alanını Doldurunuz", "warning");
                                        } else {
                                            $.post("ajax/newUserGroup.php", {
                                                name: name
                                            }).done(function (data) {
                                                if (data == "ok") {
                                                    swal({
                                                        title: "BAŞARILI",
                                                        text: "Yeni Kullanıcı Grubu Oluşturuldu!",
                                                        icon: "success",
                                                        button: "OK",
                                                    })
                                                        .then((willOk) => {
                                                                if (willOk) {
                                                                    $("#addOperator").modal("hide");
                                                                    location.reload();
                                                                }
                                                            }
                                                        );
                                                } else {
                                                    swal("", data, "warning");
                                                }
                                            });
                                        }
                                    }

                                    function ClearModalInput() {
                                        $("#operator_name").val("");
                                    }
                                </script>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        <?php
        } else {
            echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur !");
        }
        }
        ?>
    </div>
</div>
</div>
