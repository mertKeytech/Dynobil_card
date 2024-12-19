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
                    <img style="width: 40%; height:40%" src="<?= $Configuration["LoginLogo"] ?>" alt="logo icon">
                </div>
                <div class="card-title text-uppercase text-center py-3"></div>
                <form class="form-vertical login-form" action="" method="post">
                    <?php
                    if ($_POST) {
                        if (!empty($_POST['code']) and !empty($_GET["Client"])) {
                            $CodeQuery = $db->query("SELECT * FROM login_sms 
                            WHERE code='" . $_POST["code"] . "' and client_id='" . $_GET["Client"] . "' and is_used=0");
                            $CodeCount = $CodeQuery->num_rows;
                        if ($CodeCount == 1) {
                            $ReadCode = $CodeQuery->fetch_assoc();
                            $UpdateCode = $db->query("UPDATE login_sms SET is_used=1 WHERE id='" . $ReadCode["id"] . "'");
                            $ReadUser = $db->query("SELECT *,user.id AS UserID FROM clients 
                            LEFT JOIN user ON user.id=clients.user_id
                            WHERE clients.id='" . $_GET["Client"] . "'")->fetch_assoc();
                            if($ReadUser["deleted"]==0){
                                if ($ReadUser['status'] == 1) {
                                $_SESSION['user_id'] = $ReadUser['UserID'];
                                $_SESSION['user_group_id'] = 3;
                                $_SESSION['user_name'] = $ReadUser['name'];
                                $_SESSION['email'] = $ReadUser['email'];
                                $_SESSION['address'] = $ReadUser['client_address'];
                                $_SESSION["client_id"] = $_GET["Client"];
                                $_SESSION['mobile'] = $ReadUser['client_mobile'];

                                echo redirect("index.php", 500);
                            }else{ ?>
                                <script>
                                swal("UYARI", "Üyeliğiniz Aktif Değildir!", "warning");
                            </script>
                            <?php }
                            } else { ?>
                                <script>
                                swal("HATA", "Kulanıcı Pasif ya da Silinmiş", "warning");
                                </script>
                            <?php
                            }


                        } else { ?>
                            <script>
                                swal("HATA", "KOD HATALI GİRİLDİ", "warning");
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
                        <label for="exampleInputUsername" class="sr-only">ONAY KODU</label>
                        <div class="position-relative has-icon-right">
                            <input type="text" id="exampleInputUsername" name="code" class="form-control input-shadow"
                                   placeholder="SMS ile Gönderilen Onay Kodunu Giriniz" autocomplete="off" maxlength="6"
                                   minlength="6" required>
                            <div class="form-control-position">
                                <i class="icon-check"></i>
                            </div>
                        </div>
                    </div>

                    <div style="text-align: center" class="form-group">
                        <a href="loginCustomer.php"><font color="green"><u>Geri Dön</u></font></a>
                    </div>

                    <button type="submit" class="btn btn-light btn-block">Onayla</button>


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
