<?php
session_start();
require_once("system/database.php");
require_once("system/functions.php");
require_once("system/configuration.php");

?>
<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from codervent.com/dashtreme/demo/dashtreme-dark/authentication-signin.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 09 Dec 2019 06:46:33 GMT -->
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="description" content=""/>
    <meta name="author" content=""/>
    <title><?= $Configuration["LoginTitle"] ?></title>
    <!--favicon-->
    <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">
    <!-- Bootstrap core CSS-->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet"/>
    <!-- animate CSS-->
    <link href="assets/css/animate.css" rel="stylesheet" type="text/css"/>
    <!-- Icons CSS-->
    <link href="assets/css/icons.css" rel="stylesheet" type="text/css"/>
    <!-- Custom Style-->
    <link href="assets/css/app-style.css" rel="stylesheet"/>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

</head>

<body class="bg-theme bg-theme9">

<!-- start loader -->
<div id="pageloader-overlay" class="visible incoming">
    <div class="loader-wrapper-outer">
        <div class="loader-wrapper-inner">
            <div class="loader"></div>
        </div>
    </div>
</div>
<!-- end loader -->

<!-- Start wrapper-->
<div id="wrapper">

    <div class="loader-wrapper">
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="card card-authentication1 mx-auto my-5">
        <div class="card-body">
            <div class="card-content p-2">
                <div class="text-center">
                    <img style="width: 50%; height:50%" src="<?= $Configuration["LoginLogo"] ?>" alt="logo icon">
                </div>
                <div class="card-title text-uppercase text-center py-3"></div>
                <form class="form-vertical login-form" action="" method="post">
                    <?php
                    if ($_POST) {
                        if (!empty($_POST['email']) and !empty($_POST['password'])) {
                            $UserQuery = $db->query("SELECT * FROM user WHERE (email='" . $_POST['email'] . "' or username='" . $_POST['email'] . "') and (password='" . md5($_POST['password']) . "') 
                            and deleted=0 and status=1");
                            $UserCount = $UserQuery->num_rows;
                        if ($UserCount == 1) {
                            $ReadUser = $UserQuery->fetch_assoc();
                        if ($ReadUser['status'] == 1) {
                        if ($ReadUser['user_group_id'] != 4) {
                            $_SESSION['user_id'] = $ReadUser['id'];
                            $_SESSION['user_group_id'] = $ReadUser['user_group_id'];
                            $_SESSION['user_name'] = $ReadUser['name'];
                            $_SESSION['email'] = $ReadUser['email'];
                            if ($ReadUser['user_group_id'] == 2) {
                                $DistQuery = $db->query("SELECT * FROM distributors WHERE user_id='" . $ReadUser['id'] . "'")->fetch_assoc();
                                $_SESSION["distributor_id"] = $DistQuery["id"];
                            } else if ($ReadUser['user_group_id'] == 3) {
                                $DistQuery = $db->query("SELECT * FROM clients WHERE user_id='" . $ReadUser['id'] . "'")->fetch_assoc();
                                $_SESSION["client_id"] = $DistQuery["id"];
                                $_SESSION['address'] = $DistQuery['client_address'];
                                $_SESSION['mobile'] = $DistQuery['client_mobile'];
                            }
                            echo redirect("index.php", 500);
                        }else { ?>
                            <script>
                                swal("UYARI", "Girilen Bilgilerle Kullanıcı Bulunamadı", "warning");
                            </script>
                        <?php
                        }

                        } else { ?>
                            <script>
                                swal("UYARI", "Üyeliğiniz Aktif Değildir!", "warning");
                            </script>
                        <?php
                        }

                        } else { ?>
                            <script>
                                swal("HATA", "Girilen Bilgilerle Kullanıcı Bulunamadı", "warning");
                            </script>
                        <?php

                        }
                        } else { ?>
                            <script>
                                swal("LÜTFEN", "Tüm Alanları Doldurunuz", "warning");
                            </script>
                            <?php
                        }
                    }
                    ?>
                    <div class="form-group">
                        <label for="exampleInputUsername" class="sr-only">Kullanıcı Adı</label>
                        <div class="position-relative has-icon-right">
                            <input type="text" id="exampleInputUsername" required name="email"
                                   class="form-control input-shadow"
                                   placeholder="Kullanıcı Adınız">
                            <div class="form-control-position">
                                <i class="icon-user"></i>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword" class="sr-only">Şifre</label>
                        <div class="position-relative has-icon-right">
                            <input type="password" required name="password" id="exampleInputPassword"
                                   class="form-control input-shadow"
                                   placeholder="Şifreniz">
                            <div class="form-control-position">
                                <i class="icon-lock"></i>
                            </div>
                        </div>
                    </div>
                    <div style="text-align: center" class="form-group">
                        <a href="loginCustomer.php"><font color="green"><u>Müşteri Girişi</u></font></a>
                    </div>

                    <button type="submit" class="btn btn-light btn-block">Giriş</button>


                </form>
            </div>
        </div>

    </div>

    <!--Start Back To Top Button-->
    <a href="javaScript:void(0);" class="back-to-top"><i class="fa fa-angle-double-up"></i> </a>
    <!--End Back To Top Button-->


</div><!--wrapper-->

<!-- Bootstrap core JavaScript-->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>

<!-- sidebar-menu js -->
<script src="assets/js/sidebar-menu.js"></script>

<!-- Custom scripts -->
<script src="assets/js/app-script.js"></script>

</body>

<!-- Mirrored from codervent.com/dashtreme/demo/dashtreme-dark/authentication-signin.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 09 Dec 2019 06:46:33 GMT -->
</html>
