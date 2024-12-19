<div class="row pt-2 pb-2">
    <div class="col-sm-9">
        <?php
        if (isset($_GET['module'])) {
            $EXP = explode('/', $_GET['module']);
            $X1 = $EXP[0];
            $X2 = $EXP[1];

            $Read = $db->query("SELECT * FROM module_menu WHERE menu_link='" . $X2 . "'");
            $ReadM = $Read->fetch_assoc();
            $Read = $db->query("SELECT * FROM process_list WHERE process_tag='" . $_GET['do'] . "'");
            $ReadP = $Read->fetch_assoc();
        }
        ?>
        <h4 class="page-title"><?= $ReadP['process_name_tr'] ?></h4>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.php">Anasayfa</a></li>
            <?php
            if (isset($_GET['module'])) { ?>
                    <li class="breadcrumb-item">
                        <a href="index.php?module=<?= $_GET['module'] ?>&do=<?= $ReadM['default_process'] ?>" <?php if (!isset($_GET['do']) or $_GET['do'] == @$ReadM['default_process']) {
                            echo "class='current'";
                        } ?>> <?= $ReadM['menu_text_tr'] ?></a>
                    </li>
                    <?php

                    if (@$_GET['do'] != @$ReadM['default_process']) {

                        ?>
                        <li class="breadcrumb-item active"><a href="#" class='current'> <?= $ReadP['process_name_tr'] ?></a></li>
                        <?php
                    }
                }
            ?>
        </ol>
    </div>
</div>





    

