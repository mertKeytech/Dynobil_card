<div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
    <div class="brand-logo">
        <a href="index.php">
            <img src="<?=$Configuration["BreadcumpLogo"]?>" class="logo-icon" alt="logo icon">
            <h5 class="logo-text">Dynobil Kart</h5>
        </a>
    </div>
    <ul class="sidebar-menu">
        <!--        <li class="sidebar-header">MAIN NAVIGATION</li>-->
        <li <?php if (!isset($_GET['module'])) {
            echo 'class="current"';
        } ?>>
            <a href="index.php" class="waves-effect">
                <i class="zmdi zmdi-view-dashboard"></i><span>ANASAYFA</span>
            </a></li>
        <?php
        $X1 = "X";

        if (isset($_GET['module'])) {
            $EXP = explode('/', $_GET['module']);
            $X1 = $EXP[0];
            $X1 = $EXP[0];
        }
        ?>
        <?php
        $query = $db->query("SELECT * FROM module_list ORDER BY sequence ASC");
        while ($row = $query->fetch_assoc()) {
            $sub_query = $db->query("SELECT * FROM module_menu
                            JOIN group_permission_menu ON module_menu.menu_link = group_permission_menu.modul_menu_link
                            WHERE module_menu.module_id='" . $row['id'] . "' and group_permission_menu.group_id='" . $_SESSION['user_group_id'] . "' and module_menu.visible_menu='1' ORDER BY sequence ASC");

            $count_sub_query = $sub_query->num_rows;
            if ($count_sub_query > 0) {
                ?>

                <li class="<?php if ($row['module_path'] == $X1 && $row['no_follow'] != 1) {
                    echo 'current';
                } ?>">
                    <a href="javaScript:void(0);" class="waves-effect">
                        <i class="<?= $row['menu_icon'] ?>"></i><?= $row['module_menu_title_tr'] ?>
                        <i class="fa fa-angle-left pull-right"></i>
                    </a>
                    <ul class="sidebar-submenu">
                        <?php

                        while ($row2 = $sub_query->fetch_assoc()) {
                            ?>
                            <li>
                                <a href="index.php?module=<?= $row['module_path'] ?>/<?= $row2['menu_link'] ?><?php if (!empty($row2['default_process'])) echo "&do=" . $row2['default_process'] . ""; ?>">
                                    <i class="zmdi zmdi-dot-circle-alt"></i><?= $row2['menu_text_tr'] ?>
                                </a>
                            </li>
                            <?php
                        }
                        ?>

                    </ul>
                </li>
                <?php
            }
        }
        ?>
    </ul>
</div>

