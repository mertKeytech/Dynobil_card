
<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "list_project") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                // TODO : DÜZENLE
            if (Permission($_SESSION['user_group_id'], "new_project")) {
                ?>
                <a href="javascript:void(0);" class="btn btn-success btn-round waves-effect waves-light m-1"
                   data-toggle="modal" data-target="#addProject"><?= $Lang["Project"]["AddProject"] ?></a>
            <br/><br>
            <?php } ?>
                <div class="card">
                    <div class="card-header"><i class="fa fa-table"></i> <?= $Lang["Project"]["Header"] ?></div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="default-datatable" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th><?= $Lang["Project"]["ProjectName"] ?></th>
                                    <th><?= $Lang["Operator"]["OperatorName"] ?></th>
                                    <th><?= $Lang["Operator"]["Action"] ?></th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php $query = $db->query("SELECT *,project.id as ID FROM project 
                                                    LEFT JOIN operator ON operator.id=project.operator_id WHERE project.deleted=0");
                                while ($row = $query->fetch_assoc()) {

                                    ?>
                                    <tr>
                                        <td><?= $row["project_name"] ?></td>
                                        <td><?= $row["operator_name"] ?></td>
                                        <td><?php if (Permission($_SESSION['user_group_id'], "update_project")) {
                                                ?>
                                                <button type="button"
                                                        class="btn btn-primary waves-effect waves-light m-1"
                                                        title="<?= $Lang["Operator"]["EditButtonTitle"] ?>"
                                                        data-type="confirm"
                                                        data-id="<?= $row["ID"] . "," . $row["project_name"] .",".$row["operator_id"] ?>"
                                                        id="edit_project"><i class="fa fa-edit"></i>
                                                    <span><?= $Lang["Operator"]["EditButtonTitle"] ?></span>
                                                </button>
                                            <?php }
                                            if (Permission($_SESSION['user_group_id'], "delete_project")) {
                                                ?>
                                                <button type="button"
                                                        class="btn btn-danger waves-effect waves-light m-1"
                                                        title="<?= $Lang["Operator"]["DeleteButtonTitle"] ?>"
                                                        data-type="confirm"
                                                        data-id="<?= $row["ID"] ?>" id="delete_project"><i
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
                    $(document).on("click", "#delete_project", function () {
                        var id = $(this).data('id');
                        $("#delete_project_id").val(id);
                        $('#deleteProject').modal('show');
                    });
                </script>
                <!--            Delete Region Modal-->
                <div class="modal fade" id="deleteProject">
                    <input type="hidden" id="delete_project_id">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title"><?= $Lang["Project"]["DeleteProjectTitle"] ?></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>
                                <center><?= $Lang["Project"]["DeleteText"] ?></center>
                                </p>
                                <p>
                                <center><?= $Lang["Project"]["DeleteSure"] ?></center>
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-white" data-dismiss="modal"><i
                                        class="fa fa-times"></i><?= $Lang["Operator"]["CloseForm"] ?></button>
                                <button type="button" onclick="deleteProject()" class="btn btn-primary"><i
                                        class="fa fa-check-square-o"></i><?= $Lang["Operator"]["DeleteYes"] ?>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <script>
                    function deleteProject() {
                        var id = document.getElementById('delete_project_id').value;

                        $.post("ajax/deleteProject.php", {
                            id: id
                        }).done(function (data) {
                            if (data == "ok") {
                                swal({
                                    title: "<?=$Lang["Operator"]["Success"]?>",
                                    text: "<?=$Lang["Project"]["SuccessDeleted"]?>",
                                    icon: "success",
                                    button: "OK",
                                })
                                    .then((willOk) => {
                                            if (willOk) {
                                                $("#deleteProject").modal("hide");
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
                    $(document).on("click", "#edit_project", function () {
                        var data = $(this).data('id');
                        var split = data.split(",");
                        $("#edit_project_id").val(split[0]);
                        $("#edit_name").val(split[1]);
                        $("#edit_operator_id").val(split[2]);
                        $('#editProject').modal('show');
                    });
                </script>
                <!--                Edit Region Modal-->
                <div class="modal fade" id="editProject">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title"><?= $Lang["Project"]["EditProjectModalTitle"] ?></h5>
                                <button type="button" onclick="ClearModalInputEdit()" class="close" data-dismiss="modal"
                                        aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <input type="hidden" id="edit_project_id">
                                    <div class="form-group">
                                        <label for="input-1"><?= $Lang["Project"]["ProjectName"] ?></label>
                                        <input type="text" class="form-control" id="edit_name"
                                               placeholder="<?= $Lang["Project"]["ProjectNamePlac"] ?>">
                                    </div>
                                    <div class="form-group">
                                        <label for="input-1"><?= $Lang["Operator"]["OperatorName"] ?></label>
                                        <select id="edit_operator_id" class="form-control">
                                            <?php $query = $db->query("SELECT * FROM operator WHERE deleted=0");
                                            while($row = $query->fetch_assoc()){?>
                                                <option value="<?=$row["id"]?>"><?=$row["operator_name"]?></option>
                                            <?php } ?>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <button type="button" onclick="editProject()"
                                                class="btn btn-light px-5"><?= $Lang["Operator"]["SubmitEditOperator"] ?></button>
                                        <button type="button" onclick="ClearModalInputEdit();" class="btn btn-secondary"
                                                data-dismiss="modal"><?= $Lang["Operator"]["CloseForm"] ?></button>
                                    </div>
                                    <script>
                                        function editProject() {
                                            var id = $("#edit_project_id").val();
                                            var name = $("#edit_name").val();
                                            var operator_id = $("#edit_operator_id").val();
                                            if (name == "" || operator_id=="") {
                                                swal("<?=$Lang["Login"]["Alert3-1"]?>", "<?=$Lang["Project"]["AlertAll"]?>", "warning");
                                            } else {
                                                $.post("ajax/editProject.php", {
                                                    id: id,
                                                    name: name,
                                                    operator_id: operator_id
                                                }).done(function (data) {
                                                    if (data == "ok") {
                                                        swal({
                                                            title: "<?=$Lang["Operator"]["Success"]?>",
                                                            text: "<?=$Lang["Project"]["SwalTextSuccessEdit"]?>",
                                                            icon: "success",
                                                            button: "OK",
                                                        })
                                                            .then((willOk) => {
                                                                    if (willOk) {
                                                                        $("#editProject").modal("hide");
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
                                            $("#edit_project_id").val("");
                                        }
                                    </script>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!--        End-->
                <!--                New Region Modal-->
                <div class="modal fade" id="addProject">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title"><?= $Lang["Project"]["NewProjectModalTitle"] ?></h5>
                                <button type="button" onclick="ClearModalInput()" class="close" data-dismiss="modal"
                                        aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="input-1"><?= $Lang["Project"]["ProjectName"] ?></label>
                                        <input type="text" class="form-control" id="project_name"
                                               placeholder="<?= $Lang["Project"]["ProjectNamePlac"] ?>">
                                    </div>
                                    <div class="form-group">
                                        <label for="input-1"><?= $Lang["Operator"]["OperatorName"] ?></label>
                                        <select id="operator_id" class="form-control ">
                                            <option disabled selected value=""><?=$Lang["Device"]["Choose"]?></option>
                                            <?php $query = $db->query("SELECT * FROM operator WHERE deleted=0");
                                            while($row = $query->fetch_assoc()){?>
                                                <option value="<?=$row["id"]?>"><?=$row["operator_name"]?></option>
                                            <?php } ?>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <button type="button" onclick="newProject()"
                                                class="btn btn-light px-5"><?= $Lang["Operator"]["SubmitNewOperator"] ?></button>
                                        <button type="button" onclick="ClearModalInput();" class="btn btn-secondary"
                                                data-dismiss="modal"><?= $Lang["Operator"]["CloseForm"] ?></button>
                                    </div>
                                    <script>
                                        function newProject() {
                                            var name = $("#project_name").val();
                                            var operator = $("#operator_id").val();
                                            if (name == "" || operator=="") {
                                                swal("<?=$Lang["Login"]["Alert3-1"]?>", "<?=$Lang["Project"]["AlertAll"]?>", "warning");
                                            } else {
                                                $.post("ajax/newProject.php", {
                                                    name: name,
                                                    operator: operator
                                                }).done(function (data) {
                                                    if (data == "ok") {
                                                        swal({
                                                            title: "<?=$Lang["Operator"]["Success"]?>",
                                                            text: "<?=$Lang["Project"]["SwalTextSuccess"]?>",
                                                            icon: "success",
                                                            button: "OK",
                                                        })
                                                            .then((willOk) => {
                                                                    if (willOk) {
                                                                        $("#addProject").modal("hide");
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
                                            $("#project_name").val("");
                                            $("#operator_id").val("");
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