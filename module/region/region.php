<script>
    $(document).ready(function () {
        //Default data table
        $('#default-datatable').DataTable();

    });

</script>
<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "list_region") {
        if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
            // TODO : DÜZENLE
        if (Permission($_SESSION['user_group_id'], "new_region")) {
            ?>
            <a href="javascript:void(0);" class="btn btn-success btn-round waves-effect waves-light m-1"
               data-toggle="modal" data-target="#addRegion"><?= $Lang["Region"]["AddRegion"] ?></a>
        <br/><br>
            <?php } ?>
            <div class="card">
                <div class="card-header"><i class="fa fa-table"></i> <?= $Lang["Region"]["Header"] ?></div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="default-datatable" class="table table-bordered">
                            <thead>
                            <tr>
                                <th><?= $Lang["Region"]["RegionName"] ?></th>
                                <th><?= $Lang["Region"]["MasterRegionName"] ?></th>
                                <th><?= $Lang["Region"]["SubRegionCount"] ?></th>
                                <th><?= $Lang["Region"]["Action"] ?></th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php
                            function MasterRegion($id = 0, $string = 1)
                            {
                                global $Lang;
                                global $db;
                                $query = $db->query("SELECT * FROM region WHERE deleted=0 and master_region_id='" . $id . "'");
                                $count = $query->num_rows;
                                if ($count > 0) {
                                    while ($row = $query->fetch_assoc()) {
                                        $MasterRegion = $db->query("SELECT * FROM region WHERE deleted=0 and id = '" . $row["master_region_id"] . "'")->fetch_assoc();
                                        if ($MasterRegion["id"] != "") {
                                            $MasterRegionName = $MasterRegion["region_name"];
                                        } else {
                                            $MasterRegionName = "-";
                                        }
                                        $ID = $row["id"];
                                        $SubRegionCount = $db->query("SELECT * FROM region WHERE deleted=0 and master_region_id = '" . $ID . "'")->num_rows;

                                        ?>
                                        <tr>
                                            <td><?= $row["region_name"] ?></td>
                                            <td><?= $MasterRegionName ?></td>
                                            <td><?= $SubRegionCount ?></td>
                                            <td><?php if (Permission($_SESSION['user_group_id'], "update_region")) {
                                            ?>
                                                <button type="button"
                                                        class="btn btn-primary waves-effect waves-light m-1"
                                                        title="<?= $Lang["Region"]["EditButtonTitle"] ?>"
                                                        data-type="confirm"
                                                        data-id="<?= $ID . "," . $row["region_name"] . "," . $MasterRegionName ?>"
                                                        id="edit_region"><i class="fa fa-edit"></i>
                                                    <span><?= $Lang["Region"]["EditButtonTitle"] ?></span></button>
                                            <?php } if (Permission($_SESSION['user_group_id'], "delete_region")) {
                                                ?>
                                                <button type="button"
                                                        class="btn btn-danger waves-effect waves-light m-1"
                                                        title="<?= $Lang["Region"]["DeleteButtonTitle"] ?>"
                                                        data-type="confirm"
                                                        data-id="<?= $ID ?>" id="delete_region"><i
                                                            class="fa fa fa-trash-o"></i>
                                                    <span><?= $Lang["Region"]["DeleteButtonTitle"] ?></span>
                                                </button>
                                            <?php } ?>
                                            </td>
                                        </tr>
                                        <?php
                                        MasterRegion($ID);
                                    }
                                }
                            }

                            MasterRegion();
                            ?>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <script>
                $(document).on("click", "#delete_region", function () {
                    var id = $(this).data('id');
                    $("#delete_region_id").val(id);
                    $('#deleteRegion').modal('show');
                });
            </script>
            <!--            Delete Region Modal-->
            <div class="modal fade" id="deleteRegion">
                <input type="hidden" val="" id="delete_region_id">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title"><?= $Lang["Region"]["DeleteRegionTitle"] ?></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>
                            <center><?= $Lang["Region"]["DeleteText"] ?></center>
                            </p>
                            <p>
                            <center><?= $Lang["Region"]["DeleteSure"] ?></center>
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-white" data-dismiss="modal"><i
                                        class="fa fa-times"></i><?= $Lang["Region"]["CloseForm"] ?></button>
                            <button type="button" onclick="deleteRegion()" class="btn btn-primary"><i
                                        class="fa fa-check-square-o"></i><?= $Lang["Region"]["DeleteYes"] ?></button>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                function deleteRegion() {
                    var id = document.getElementById('delete_region_id').value;

                    $.post("ajax/deleteRegion.php", {
                        id: id
                    }).done(function (data) {
                        if (data == "ok") {
                            swal({
                                title: "<?=$Lang["Region"]["Success"]?>",
                                text: "<?=$Lang["Region"]["SuccessDeleted"]?>",
                                icon: "success",
                                button: "OK",
                            })
                                .then((willOk) => {
                                        if (willOk) {
                                            $("#deleteRegion").modal("hide");
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
                $(document).on("click", "#edit_region", function () {
                    var data = $(this).data('id');
                    var split = data.split(",");
                    $("#edit_region_id").val(split[0]);
                    $("#edit_name").val(split[1]);
                    $("#edit_master_name").val(split[2]);
                    $('#editRegion').modal('show');
                });
            </script>
            <!--                Edit Region Modal-->
            <div class="modal fade" id="editRegion">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title"><?= $Lang["Region"]["EditRegionModalTitle"] ?></h5>
                            <button type="button" onclick="ClearModalInputEdit()" class="close" data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="input-1"><?= $Lang["Region"]["RegionName"] ?></label>
                                    <input type="text" class="form-control" id="edit_name"
                                           placeholder="<?= $Lang["Region"]["RegionNamePlac"] ?>">
                                </div>
                                <div class="form-group">
                                    <label for="input-1"><?= $Lang["Region"]["MasterRegion"] ?></label>
                                    <input type="text" disabled class="form-control" id="edit_master_name"
                                           placeholder="<?= $Lang["Region"]["MasterRegionNamePlac"] ?>">
                                </div>
                                <div class="form-group">
                                    <label for="input-2"><?= $Lang["Region"]["MasterRegionNew"] ?></label>
                                    <input type="text" autocomplete="off" class="form-control" id="edit_master_region"
                                           placeholder="<?= $Lang["Region"]["MasterRegionPlac"] ?>"
                                           onkeyup="SearchRegionEdit()">
                                    <input type="hidden" name="edit_master_region_id" id="edit_master_region_id"
                                           value=""/>
                                    <input type="hidden" name="edit_region_id" id="edit_region_id" value=""/>
                                    <style>
                                        #EditMasterRegionResult {
                                            max-height: 150px;
                                            overflow-y: scroll;
                                            background-color: #FFF;
                                            border: 2px solid gray;
                                            margin-left: -0px;
                                            min-height: 0px;
                                        }

                                        .SearchResultEdit {
                                            border-bottom: 1px solid black;
                                            margin-left: 20px;
                                            font-size: 16px;
                                            line-height: 25px;
                                            margin-right: 20px;
                                        }
                                    </style>
                                    <div id="EditMasterRegionResult" style="display: none;"></div>
                                </div>
                                <div class="form-group">
                                    <button type="button" onclick="editRegion()"
                                            class="btn btn-light px-5"><?= $Lang["Region"]["SubmitEditRegion"] ?></button>
                                    <button type="button" onclick="ClearModalInputEdit();" class="btn btn-secondary"
                                            data-dismiss="modal"><?= $Lang["Region"]["CloseForm"] ?></button>
                                </div>
                                <script>
                                    function editRegion() {
                                        var id = $("#edit_region_id").val();
                                        var name = $("#edit_name").val();
                                        var master_id = $("#edit_master_region_id").val();
                                        if (name == "") {
                                            swal("<?=$Lang["Login"]["Alert3-1"]?>", "<?=$Lang["Region"]["Alert"]?>", "warning");
                                        } else {
                                            $.post("ajax/editRegion.php", {
                                                id: id,
                                                name: name,
                                                master_id: master_id
                                            }).done(function (data) {
                                                if (data == "ok") {
                                                    swal({
                                                        title: "<?=$Lang["Region"]["Success"]?>",
                                                        text: "<?=$Lang["Region"]["SwalTextSuccessEdit"]?>",
                                                        icon: "success",
                                                        button: "OK",
                                                    })
                                                        .then((willOk) => {
                                                                if (willOk) {
                                                                    $("#editRegion").modal("hide");
                                                                    $("#edit_region_id").val("");
                                                                    $("#edit_name").val("");
                                                                    $("#edit_master_region_id").val("");
                                                                    $("#edit_master_region").val("");
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

                                    function SearchRegionEdit() {
                                        var val = $("#edit_master_region").val();
                                        var id = $("#edit_region_id").val();
                                        if (val != "") {

                                            $("#EditMasterRegionResult").hide();
                                            //alert(val);
                                            $.post("ajax/SearchMasterRegionEdit.php", {
                                                RegionName: val,
                                                ID: id
                                            }).done(function (data) {
                                                $("#EditMasterRegionResult").html(data);
                                                $("#EditMasterRegionResult").show();
                                            });
                                        } else {
                                            $("#EditMasterRegionResult").hide();
                                            $("#edit_master_region_id").val("");
                                        }

                                    }

                                    function SelectRegionEdit(div, region_id) {
                                        //alert(company_id);
                                        $("#edit_master_region_id").val(region_id);
                                        $(".SearchResultEdit").attr("style", 'border:0px solid blue; color:black');
                                        $(div).attr("style", 'border:2px solid blue; color:black');
                                    }

                                    function ClearModalInputEdit() {
                                        $("#edit_master_region_id").val("");
                                        $("#edit_name").val("");
                                        $("#edit_region_id").val("");
                                        $("#edit_master_name").val("");
                                        $("#edit_master_region").val("");
                                        $("#EditMasterRegionResult").hide();

                                    }
                                </script>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!--        End-->
            <!--                New Region Modal-->
            <div class="modal fade" id="addRegion">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title"><?= $Lang["Region"]["NewRegionModalTitle"] ?></h5>
                            <button type="button" onclick="ClearModalInput()" class="close" data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="input-1"><?= $Lang["Region"]["RegionName"] ?></label>
                                    <input type="text" class="form-control" id="region_name"
                                           placeholder="<?= $Lang["Region"]["RegionNamePlac"] ?>">
                                </div>
                                <div class="form-group">
                                    <label for="input-2"><?= $Lang["Region"]["MasterRegion"] ?></label>
                                    <input type="text" autocomplete="off" class="form-control" id="master_region"
                                           placeholder="<?= $Lang["Region"]["MasterRegionPlac"] ?>"
                                           onkeyup="SearchRegion()">
                                    <input type="hidden" name="master_region_id" id="master_region_id" value=""/>
                                    <style>
                                        #MasterRegionResult {
                                            max-height: 150px;
                                            overflow-y: scroll;
                                            background-color: #FFF;
                                            border: 2px solid gray;
                                            margin-left: -0px;
                                            min-height: 0px;
                                        }

                                        .SearchResult {
                                            border-bottom: 1px solid black;
                                            margin-left: 20px;
                                            font-size: 16px;
                                            line-height: 25px;
                                            margin-right: 20px;
                                        }
                                    </style>
                                    <div id="MasterRegionResult" style="display: none;"></div>
                                </div>
                                <div class="form-group">
                                    <button type="button" onclick="newRegion()"
                                            class="btn btn-light px-5"><?= $Lang["Region"]["SubmitNewRegion"] ?></button>
                                    <button type="button" onclick="ClearModalInput();" class="btn btn-secondary"
                                            data-dismiss="modal"><?= $Lang["Region"]["CloseForm"] ?></button>
                                </div>
                                <script>
                                    function newRegion() {
                                        var name = $("#region_name").val();
                                        var master_id = $("#master_region_id").val();
                                        if (name == "") {
                                            swal("<?=$Lang["Login"]["Alert3-1"]?>", "<?=$Lang["Region"]["Alert"]?>", "warning");
                                        } else {
                                            $.post("ajax/newRegion.php", {
                                                name: name,
                                                master_id: master_id
                                            }).done(function (data) {
                                                if (data == "ok") {
                                                    swal({
                                                        title: "<?=$Lang["Region"]["Success"]?>",
                                                        text: "<?=$Lang["Region"]["SwalTextSuccess"]?>",
                                                        icon: "success",
                                                        button: "OK",
                                                    })
                                                        .then((willOk) => {
                                                                if (willOk) {
                                                                    $("#addRegion").modal("hide");
                                                                    $("#region_name").val("");
                                                                    $("#master_region").val("");
                                                                    $("#master_region_id").val("");
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

                                    function SearchRegion() {
                                        var val = $("#master_region").val();
                                        if (val != "") {

                                            $("#MasterRegionResult").hide();
                                            //alert(val);
                                            $.post("ajax/SearchMasterRegion.php", {RegionName: val})
                                                .done(function (data) {
                                                    $("#MasterRegionResult").html(data);
                                                    $("#MasterRegionResult").show();
                                                });
                                        } else {
                                            $("#MasterRegionResult").hide();
                                            $("#master_region_id").val("");
                                        }

                                    }

                                    function SelectRegion(div, region_id) {
                                        //alert(company_id);
                                        $("#master_region_id").val(region_id);
                                        $(".SearchResult").attr("style", 'border:0px solid blue; color:black');
                                        $(div).attr("style", 'border:2px solid blue; color:black');
                                    }

                                    function ClearModalInput() {
                                        $("#master_region_id").val("");
                                        $("#region_name").val("");
                                        $("#master_region").val("");
                                        $("#MasterRegionResult").hide();

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