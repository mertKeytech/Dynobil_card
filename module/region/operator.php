
<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "list_operator") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                // TODO : DÜZENLE
            if (Permission($_SESSION['user_group_id'], "new_operator")) {
                ?>
                <a href="javascript:void(0);" class="btn btn-success btn-round waves-effect waves-light m-1"
                   data-toggle="modal" data-target="#addOperator"><?= $Lang["Operator"]["AddOperator"] ?></a>
            <br/><br>
            <?php } ?>
                <div class="card">
                    <div class="card-header"><i class="fa fa-table"></i> <?= $Lang["Operator"]["Header"] ?></div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="default-datatable" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th><?= $Lang["Operator"]["OperatorName"] ?></th>
                                    <th><?= $Lang["Operator"]["ProjectCount"] ?></th>
                                    <th><?= $Lang["Operator"]["Action"] ?></th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php $query = $db->query("SELECT * FROM operator WHERE deleted=0");
                                while ($row = $query->fetch_assoc()) {
                                    $count = $db->query("SELECT * FROM project WHERE operator_id = '" . $row["id"] . "' and deleted=0")->num_rows;
                                    ?>
                                    <tr>
                                        <td><?= $row["operator_name"] ?></td>
                                        <td><?= $count ?></td>
                                        <td><?php if (Permission($_SESSION['user_group_id'], "update_operator")) {
                                                ?>
                                                <button type="button"
                                                        class="btn btn-primary waves-effect waves-light m-1"
                                                        title="<?= $Lang["Operator"]["EditButtonTitle"] ?>"
                                                        data-type="confirm"
                                                        data-id="<?= $row["id"] . "," . $row["operator_name"] ?>"
                                                        id="edit_operator"><i class="fa fa-edit"></i>
                                                    <span><?= $Lang["Operator"]["EditButtonTitle"] ?></span>
                                                </button>
                                            <?php }
                                            if (Permission($_SESSION['user_group_id'], "delete_operator")) {
                                                ?>
                                                <button type="button"
                                                        class="btn btn-danger waves-effect waves-light m-1"
                                                        title="<?= $Lang["Operator"]["DeleteButtonTitle"] ?>"
                                                        data-type="confirm"
                                                        data-id="<?= $row["id"] ?>" id="delete_operator"><i
                                                            class="fa fa fa-trash-o"></i>
                                                    <span><?= $Lang["Operator"]["DeleteButtonTitle"] ?></span>
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
                    $(document).on("click", "#delete_operator", function () {
                        var id = $(this).data('id');
                        $("#delete_operator_id").val(id);
                        $('#deleteOperator').modal('show');
                    });
                </script>
                <!--            Delete Region Modal-->
                <div class="modal fade" id="deleteOperator">
                    <input type="hidden" id="delete_operator_id">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title"><?= $Lang["Operator"]["DeleteOperatorTitle"] ?></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>
                                <center><?= $Lang["Operator"]["DeleteText"] ?></center>
                                </p>
                                <p>
                                <center><?= $Lang["Operator"]["DeleteSure"] ?></center>
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-white" data-dismiss="modal"><i
                                            class="fa fa-times"></i><?= $Lang["Operator"]["CloseForm"] ?></button>
                                <button type="button" onclick="deleteOperator()" class="btn btn-primary"><i
                                            class="fa fa-check-square-o"></i><?= $Lang["Operator"]["DeleteYes"] ?>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <script>
                    function deleteOperator() {
                        var id = document.getElementById('delete_operator_id').value;

                        $.post("ajax/deleteOperator.php", {
                            id: id
                        }).done(function (data) {
                            if (data == "ok") {
                                swal({
                                    title: "<?=$Lang["Operator"]["Success"]?>",
                                    text: "<?=$Lang["Operator"]["SuccessDeleted"]?>",
                                    icon: "success",
                                    button: "OK",
                                })
                                    .then((willOk) => {
                                            if (willOk) {
                                                $("#deleteOperator").modal("hide");
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
                    $(document).on("click", "#edit_operator", function () {
                        var data = $(this).data('id');
                        var split = data.split(",");
                        $("#edit_operator_id").val(split[0]);
                        $("#edit_name").val(split[1]);
                        $('#editOperator').modal('show');
                    });
                </script>
                <!--                Edit Region Modal-->
                <div class="modal fade" id="editOperator">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title"><?= $Lang["Operator"]["EditOperatorModalTitle"] ?></h5>
                                <button type="button" onclick="ClearModalInputEdit()" class="close" data-dismiss="modal"
                                        aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <input type="hidden" id="edit_operator_id">
                                    <div class="form-group">
                                        <label for="input-1"><?= $Lang["Operator"]["OperatorName"] ?></label>
                                        <input type="text" class="form-control" id="edit_name"
                                               placeholder="<?= $Lang["Operator"]["OperatorNamePlac"] ?>">
                                    </div>

                                    <div class="form-group">
                                        <button type="button" onclick="editOperator()"
                                                class="btn btn-light px-5"><?= $Lang["Operator"]["SubmitEditOperator"] ?></button>
                                        <button type="button" onclick="ClearModalInputEdit();" class="btn btn-secondary"
                                                data-dismiss="modal"><?= $Lang["Operator"]["CloseForm"] ?></button>
                                    </div>
                                    <script>
                                        function editOperator() {
                                            var id = $("#edit_operator_id").val();
                                            var name = $("#edit_name").val();
                                            if (name == "") {
                                                swal("<?=$Lang["Login"]["Alert3-1"]?>", "<?=$Lang["Operator"]["AlertName"]?>", "warning");
                                            } else {
                                                $.post("ajax/editOperator.php", {
                                                    id: id,
                                                    name: name
                                                }).done(function (data) {
                                                    if (data == "ok") {
                                                        swal({
                                                            title: "<?=$Lang["Operator"]["Success"]?>",
                                                            text: "<?=$Lang["Operator"]["SwalTextSuccessEdit"]?>",
                                                            icon: "success",
                                                            button: "OK",
                                                        })
                                                            .then((willOk) => {
                                                                    if (willOk) {
                                                                        $("#editOperator").modal("hide");
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
                                            $("#edit_operator_id").val("");

                                        }
                                    </script>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!--        End-->
                <!--                New Region Modal-->
                <div class="modal fade" id="addOperator">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title"><?= $Lang["Operator"]["NewOperatorModalTitle"] ?></h5>
                                <button type="button" onclick="ClearModalInput()" class="close" data-dismiss="modal"
                                        aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="input-1"><?= $Lang["Operator"]["OperatorName"] ?></label>
                                        <input type="text" class="form-control" id="operator_name"
                                               placeholder="<?= $Lang["Operator"]["OperatorNamePlac"] ?>">
                                    </div>
                                    <div class="form-group">
                                        <button type="button" onclick="newOperator()"
                                                class="btn btn-light px-5"><?= $Lang["Operator"]["SubmitNewOperator"] ?></button>
                                        <button type="button" onclick="ClearModalInput();" class="btn btn-secondary"
                                                data-dismiss="modal"><?= $Lang["Operator"]["CloseForm"] ?></button>
                                    </div>
                                    <script>
                                        function newOperator() {
                                            var name = $("#operator_name").val();
                                            if (name == "") {
                                                swal("<?=$Lang["Login"]["Alert3-1"]?>", "<?=$Lang["Operator"]["AlertName"]?>", "warning");
                                            } else {
                                                $.post("ajax/newOperator.php", {
                                                    name: name
                                                }).done(function (data) {
                                                    if (data == "ok") {
                                                        swal({
                                                            title: "<?=$Lang["Operator"]["Success"]?>",
                                                            text: "<?=$Lang["Operator"]["SwalTextSuccess"]?>",
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
                <!--                End-->

                <?php
            } else {
                echo error("You are not authorized to do this!");
            }
        }
        ?>


    </div>
</div>