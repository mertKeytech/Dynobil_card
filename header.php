<header class="topbar-nav">
    <nav class="navbar navbar-expand fixed-top">
        <ul class="navbar-nav mr-auto align-items-center">
            <li class="nav-item">
                <a class="nav-link toggle-menu" href="javascript:void();">
                    <i class="icon-menu menu-icon"></i>
                </a>
            </li>
        </ul>

        <ul class="navbar-nav align-items-center right-nav-link">
            <li class="nav-item">
                <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown" href="#">
                    <span class="user-profile"><img src="assets/images/dynobil-logo.png" class="img-circle" alt="user avatar"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                    <li class="dropdown-item user-details">
                        <a href="javaScript:void();">
                            <div class="media">
                                <div class="avatar"><img class="align-self-start mr-3" src="assets/images/dynobil-logo.png" alt="user avatar"></div>
                                <div class="media-body">
                                    <h6 class="mt-2 user-title"><?=$_SESSION["user_name"]?></h6>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li class="dropdown-item"><a href="index.php?module=profil/profile&do=profile"><i class="icon-wallet mr-2"></i>Profilim</a></li>
                    <li class="dropdown-divider"></li>
                    <li class="dropdown-item"><a href="logout.php"><i class="icon-power mr-2"></i>Çıkış</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</header>
