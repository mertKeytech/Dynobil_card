<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "list_modules") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                // TODO : DÜZENLE

                ?>
                <div class="card">
                    <div class="card-header"><i class="fa fa-table"></i> Modül Listesi</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Modül Adı</th>
                                    <th>İşlem</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php
                                $QueryProject = $db->query("SELECT * FROM module_list ORDER BY module_name ASC");
                                $CountProject = $QueryProject->num_rows;
                                while ($row = $QueryProject->fetch_Assoc()) {
                                    ?>
                                    <tr>
                                        <td><?= $row['module_name'] ?></td>
                                        <td>
                                            <a href="index.php?module=main/module_list&do=module_user_group_permission&id=<?= $row['id'] ?>">
                                                <button type="button"
                                                        class="btn btn-info btn-lg btn-round waves-effect waves-light m-1">Yetkilendir</button>
                                            </a>
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

                <?php
            } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        } else if (@$_GET['do'] === "module_user_group_permission") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {

                if ($_POST) {

                    //CHECKBOX DEĞERLERİ POST EDİLMİYOR BU NEDENLE DÜZELTME AMAÇLI YAZILMIŞTIR.
                    foreach ($_POST as $key => $value) {
                        $exp_key = explode('_', $key);


                        if ($exp_key[0] == "usergroup") {
                            unset($_POST[$key]);
                            $group_id = $exp_key[1];

                            if ($exp_key[2] == "listofmenu") {
                                $menu_id = $exp_key[3];
                                $_POST["usergroup_" . $group_id . "_listofmenu"][] = $menu_id;
                            } else if ($exp_key[2] == "processlistofmenu") {
                                $menu_id = $exp_key[3];
                                $process_id = $exp_key[4];

                                $_POST["usergroup_" . $group_id . "_processlistofmenu_" . $menu_id][] = $process_id;

                            }
                        }


                    }
                    $UserGroupQueryNotFixed = $db->query("SELECT * FROM user_group WHERE is_fixed=0");
                    while($row = $UserGroupQueryNotFixed->fetch_assoc()){
                        $TruncateMenu = $db->query("DELETE FROM group_permission_menu WHERE modul_id='" . $_GET['id'] . "' and group_id='".$row["id"]."'");
                        $TruncateProcess = $db->query("DELETE FROM group_permission_process WHERE modul_id='" . $_GET['id'] . "' and group_id='".$row["id"]."'");
                    }

                    $UserGroupQuery = $db->query("SELECT * FROM user_group WHERE is_fixed=0");
                    while ($row = $UserGroupQuery->fetch_Assoc()) {

                        if (isset($_POST['usergroup_' . $row['id'] . '_listofmenu'])) {

                            foreach ($_POST['usergroup_' . $row['id'] . '_listofmenu'] as $key => $val) {

                                $MenuQuery = $db->query("SELECT * FROM module_menu WHERE id='" . $val . "'");
                                $ReadMenu = $MenuQuery->fetch_Assoc();
                                $AddToDB = $db->query("INSERT INTO group_permission_menu (group_id, modul_id, modul_menu_link) VALUES ('" . $row['id'] . "', '" . $_GET['id'] . "', '" . $ReadMenu['menu_link'] . "')");
                                $ModulID = $key;

                                if (isset($_POST['usergroup_' . $row['id'] . '_processlistofmenu_' . $ReadMenu['id']])) {
                                    foreach ($_POST['usergroup_' . $row['id'] . '_processlistofmenu_' . $ReadMenu['id']] as $key => $val) {
                                        $ProcessQuery = $db->query("SELECT * FROM process_list WHERE id='" . $val . "'");
                                        $ReadProcess = $ProcessQuery->fetch_Assoc();
                                        $AddToDB = $db->query("INSERT INTO group_permission_process (group_id, modul_id, modul_process_tag) VALUES ('" . $row['id'] . "', '" . $_GET['id'] . "', '" . $ReadProcess['process_tag'] . "')");

                                    }
                                }
                            }
                        }
                    }
                    echo success("Ayarlar Başarılı Şekilde Kaydedilmiştir!");
                    redirect("index.php?module=main/module_list&do=list_modules", 2000);
                }
                ?>

                <?php


                $QueryModul = $db->query("SELECT * FROM module_list WHERE id='" . $_GET['id'] . "'");
                $ReadModul = $QueryModul->fetch_Assoc();
                ?>
                <div class="card">
                    <div class="card-header"><i class="fa fa-table"></i> (<?= $ReadModul['module_name'] ?>)
                        - Yetki Ayarları</div>
                    <div class="card-body">
                        <form method="POST" class="form-horizontal row-border" action="#">
                            <input type="hidden" name="update_permission" value="1"/>
                            <div class="row">
                                <?php
                                $i = 1;
                                $UserGroupQuery = $db->query("SELECT * FROM user_group WHERE is_fixed=0 and deleted=0");
                                while ($row = $UserGroupQuery->fetch_Assoc()) {
                                    ?>
                                    <div class="form-group"><label class="col-md-12 col-lg-12 control-label"><?= $i ?>
                                            - <?= $row['group_name'] ?></label><br/>
                                        <?php

                                        $ModuleMenuQuery = $db->query("SELECT * FROM module_menu WHERE module_id='" . $_GET['id'] . "' and virtual_menu=0 ORDER BY id ASC");
                                        $m = 1;
                                        while ($row2 = $ModuleMenuQuery->fetch_Assoc()) {
                                            $MenuControlQuery = $db->query("SELECT * FROM group_permission_menu WHERE group_id='" . $row['id'] . "' and modul_menu_link ='" . $row2['menu_link'] . "'");
                                            $MenuControlCount = $MenuControlQuery->num_rows;


                                            ?>
                                            <div class="col-md-12 col-lg-12">
                                                <div class="icheck-material-white"><input type="checkbox"
                                                                                          id="usergroup_<?= $row['id'] ?>_listofmenu_<?= $row2["id"] ?>"
                                                                                          name="usergroup_<?= $row['id'] ?>_listofmenu_<?= $row2["id"] ?>" <?php if ($MenuControlCount == 1) {
                                                        echo 'checked="1"';
                                                    } ?> value="1">
                                                    <label for="usergroup_<?= $row['id'] ?>_listofmenu_<?= $row2["id"] ?>"><?= "<font color='green'>MENÜ_" . $m . "</font> - " . $row2['menu_text_tr'] ?>
                                                    </label>
                                                </div>
                                                <br/>
                                                <?php
                                                $ModuleProcessQuery = $db->query("SELECT * FROM process_list WHERE  menu_id='" . $row2['id'] . "'");
                                                $m++;
                                                $p = 1;
                                                while ($row3 = $ModuleProcessQuery->fetch_Assoc()) {

                                                    $ProcessControlQuery = $db->query("SELECT * FROM group_permission_process WHERE group_id='" . $row['id'] . "' and modul_process_tag ='" . $row3['process_tag'] . "'");
                                                    $ProcessControlCount = $ProcessControlQuery->num_rows;
                                                    ?>

                                                    <div class="icheck-material-white">&emsp;&emsp;<input
                                                                type="checkbox"
                                                                id="usergroup_<?= $row['id'] ?>_processlistofmenu_<?= $row2['id'] ?>_<?= $row3["id"] ?>"
                                                                name="usergroup_<?= $row['id'] ?>_processlistofmenu_<?= $row2['id'] ?>_<?= $row3["id"] ?>" <?php if ($ProcessControlCount == 1) {
                                                            echo 'checked="1"';
                                                        } ?> value="1">
                                                        <label for="usergroup_<?= $row['id'] ?>_processlistofmenu_<?= $row2['id'] ?>_<?= $row3["id"] ?>"><?= "<font color='red'>İŞLEM_" . $p . "</font> - " . $row3['process_name_tr'] ?>
                                                        </label>
                                                    </div>
                                                    <br/>
                                                    <?php
                                                    $p++;

                                                }
                                                ?>
                                            </div>
                                            <?php
                                        }
                                        ?>
                                    </div>
                                    <?php
                                    $i++;
                                }

                                ?>
                            </div>
                            <a href="#defaultModal" data-toggle="modal" data-target="#defaultModal">
                                <div class="body">
                                    <button type="button"
                                            class="btn btn-success">Düzenle</button>
                                </div>
                            </a>
                    </div>
                </div>
                <div class="modal fade" id="defaultModal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="title" id="defaultModalLabel">İzinleri Kaydet</h4>
                            </div>
                            <div class="modal-body">Seçtiğiniz İzin Ayarlarını Kaydetmek İstiyor musunuz?
                            </div>
                            <div class="modal-footer">
                                <button type="submit"
                                        class="btn btn-primary">Evet</button>
                                <button type="button" class="btn btn-danger"
                                        data-dismiss="modal">Hayır</button>
                            </div>
                        </div>
                    </div>
                </div>

                </form>


                <?php
            } else {
                echo error("You are not authorized to do this!");
            }

        }
        ?>


    </div>
</div>