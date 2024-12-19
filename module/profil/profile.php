<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "profile") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                ?>
                <?php
                if ($_POST) {
                    $_GET['id'] = $_SESSION['user_id'];
                    if ($_SESSION["user_group_id"] == 2) {
                        if (!empty($_POST['company_name']) && !empty($_POST['company_address'])
                            && !empty($_POST['company_mobile'])
                            && !empty($_POST['username'])) {
                            $ControlUsername = $db->query("SELECT * FROM user WHERE username = '" . $_POST["username"] . "' and deleted=0 and id!='" . $_GET["id"] . "'")->num_rows;
                        if ($ControlUsername == 0) {

                            $ControlCompanyName = $db->query("SELECT * FROM distributors WHERE company_name = '" . $_POST["company_name"] . "' and user_id!='" . $_GET["id"] . "'")->num_rows;
                            if ($ControlCompanyName == 0) {
                                $ControlMobile = $db->query("SELECT * FROM distributors WHERE company_mobile = '" . $_POST["company_mobile"] . "' and user_id!='" . $_GET["id"] . "'")->num_rows;
                                if ($ControlMobile == 0) {
                                    $UpdateUser = $db->query("UPDATE user SET name='" . $_POST["company_name"] . "',
                                        username='" . $_POST["username"] . "' WHERE id='" . $_GET["id"] . "'");
                                    if (!empty($_POST["password"])) {
                                        $UpdateUser = $db->query("UPDATE user SET password='" . md5($_POST["password"]) . "' WHERE id='" . $_GET["id"] . "'");
                                        echo warning("Şifreniz Güncellenmiştir!<br>Yeni Şifreniz:" . $_POST["password"]);
                                    }
                                    $UpdateDist = $db->query("UPDATE distributors SET company_name='" . $_POST["company_name"] . "',
                                        company_address='" . $_POST["company_address"] . "',company_phone1='" . $_POST["company_phone1"] . "',
                                        company_mobile='" . $_POST["company_mobile"] . "' WHERE user_id='" . $_GET["id"] . "'");
                                    if ($UpdateUser && $UpdateDist) {
                                        echo success("Profil Bilgileriniz Güncellendi!");
                                    } else {
                                        echo error("Sistem Hatası!<br>" . mysqli_error($db));
                                    }

                                } else {
                                    echo error("Bu Cep No Sistemde Kayıtlı");
                                }
                            } else {
                                echo error("Bu Firma Adı Sistemde Kayıtlı");
                            }

                        } else {
                            echo error("Bu Kullanıcı Adı Sistemde Kayıtlı");
                        }

                    } else {
                        echo error("Lütfen Zorunlu Alanları Doldurunuz.");
                    }
                } else if ($_SESSION["user_group_id"] == 3) {
                    if (!empty($_POST['client_name']) && !empty($_POST['client_address']) && !empty($_POST['client_mobile'])
                        && !empty($_POST['username'])) {
                        $ControlUsername = $db->query("SELECT * FROM user WHERE username = '" . $_POST["username"] . "' and deleted=0 and id!='" . $_GET["id"] . "'")->num_rows;
                    if ($ControlUsername == 0) {
                        $ControlCompanyName = $db->query("SELECT * FROM clients WHERE client_name = '" . $_POST["client_name"] . "' and user_id!='" . $_GET["id"] . "'")->num_rows;
                        if ($ControlCompanyName == 0) {
                            $ControlMobile = $db->query("SELECT * FROM clients WHERE client_mobile = '" . $_POST["client_mobile"] . "' and user_id!='" . $_GET["id"] . "'")->num_rows;
                            if ($ControlMobile == 0) {
                                $UpdateUser = $db->query("UPDATE user SET name='" . $_POST["client_name"] . "',
                                    username='" . $_POST["username"] . "' WHERE id='" . $_GET["id"] . "'");
                                if (!empty($_POST["password"])) {
                                    $UpdateUser = $db->query("UPDATE user SET password='" . md5($_POST["password"]) . "' WHERE id='" . $_GET["id"] . "'");
                                    echo warning("Şifreniz Güncellenmiştir!<br>Yeni Şifreniz:" . $_POST["password"]);
                                }
                                $UpdateClient = $db->query("UPDATE clients SET client_name='" . $_POST["client_name"] . "',
                                    client_address='" . $_POST["client_address"] . "',client_phone1='" . $_POST["client_phone1"] . "',
                                    client_mobile='" . $_POST["client_mobile"] . "' WHERE user_id='" . $_GET["id"] . "'");
                                if ($UpdateUser && $UpdateClient) {
                                    echo success("Profil Bilgileriniz Güncellendi!");
                                } else {
                                    echo error("Sistem Hatası!<br>" . mysqli_error($db));
                                }
                            } else {
                                echo error("Bu Cep No Sistemde Kayıtlı");
                            }
                        } else {
                            echo error("Bu Müşteri Adı Sistemde Kayıtlı");
                        }

                    } else {
                        echo error("Bu Kullanıcı Adı Sistemde Kayıtlı");
                    }
                } else {
                    echo error("Lütfen Zorunlu Alanları Doldurunuz.");
                }

            } else {
                if (!empty($_POST['name']) && !empty($_POST['username']) && !empty($_POST['email'])) {
                    $Query = $db->query("SELECT * FROM user WHERE username='" . $_POST['username'] . "' and id != '" . $_GET['id'] . "'");
                    $Count = $Query->num_rows;
                    if ($Count == 0) {
                        $Query = $db->query("SELECT * FROM user WHERE email='" . $_POST['email'] . "' and id != '" . $_GET['id'] . "'");
                        $Count = $Query->num_rows;
                        if ($Count == 0) {

                            $UpdateUser = $db->query("UPDATE user SET name='" . $_POST['name'] . "' WHERE id='" . $_GET['id'] . "'");
                            $UpdateUser = $db->query("UPDATE user SET username='" . $_POST['username'] . "' WHERE id='" . $_GET['id'] . "'");
                            $UpdateUser = $db->query("UPDATE user SET email='" . $_POST['email'] . "' WHERE id='" . $_GET['id'] . "'");

                            $_SESSION['user_name'] = $_POST['name'];

                            if (!empty($_POST['password'])) {
                                $UpdateUser = $db->query("UPDATE user SET password='" . md5($_POST['password']) . "' WHERE id='" . $_GET['id'] . "'");
                                echo warning("Şifreniz Güncellenmiştir!<br>Yeni Şifreniz:" . $_POST["password"]);

                            }
                            if ($UpdateUser) {
                                echo success("Profil Bilgileriniz Güncellendi!");
                            } else {
                                echo error("Sistem Hatası!<br>" . mysqli_error($db));
                            }

                        } else {
                            echo error("Bu Email Adresi Sistemde Kayıtlı!");
                        }
                    } else {
                        echo error("Bu Kullanıcı Adı Sistemde Kayıtlı!");
                    }
                } else {
                    echo error("Lütfen Zorunlu Alanları Doldurunuz.");
                }
            }

        }
        if ($_SESSION["user_group_id"] == 2) {
            $Query = $db->query("SELECT * FROM distributors LEFT JOIN user ON user.id=distributors.user_id WHERE user.id='" . $_SESSION["user_id"] . "'");
            $ReadUser = $Query->fetch_Assoc();
        } else if ($_SESSION["user_group_id"] == 3) {
            $Query = $db->query("SELECT * FROM clients LEFT JOIN user ON user.id=clients.user_id WHERE user.id='" . $_SESSION["user_id"] . "'");
            $ReadUser = $Query->fetch_Assoc();
        } else {
            $Query = $db->query("SELECT * FROM user WHERE id='" . $_SESSION['user_id'] . "'");
            $ReadUser = $Query->fetch_Assoc();
        }


        ?>

        <div class="card">
            <div class="card-body">
                <div class="card-title"><i class="icon-user"></i> Profil Bilgilerim</div>
                <form action="" method="POST"
                enctype="multipart/form-data">
                <?php if ($_SESSION["user_group_id"] == 2) { ?>
                    <div class="form-group"><label>Firma Adı</label>
                        <input type="text" value="<?= $ReadUser['company_name'] ?>" name="company_name"
                        required
                        class="form-control">

                    </div>
                    <div class="form-group"><label>Firma Adresi</label>
                        <textarea name="company_address" class="form-control"
                        required><?= $ReadUser['company_address'] ?></textarea>

                    </div>
                    <div class="form-group"><label>Firma Email</label>
                        <input type="text" readonly value="<?= $ReadUser['company_contact_email'] ?>"
                        name="company_email"
                        required
                        class="form-control email">
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group"><label>Firma Şehir</label>
                                <?php $query = $db->query("SELECT * FROM city WHERE id='" . $ReadUser["company_city_id"] . "'")->fetch_assoc(); ?>
                                <input type="text" readonly value="<?= $query['city_name'] ?>"
                                name="city"
                                required
                                class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group"><label>Firma İlçe</label>
                                <?php $query = $db->query("SELECT * FROM county WHERE id='" . $ReadUser["company_county_id"] . "'")->fetch_assoc(); ?>
                                <input type="text" readonly value="<?= $query['county_name'] ?>"
                                name="county"
                                required
                                class="form-control">
                            </div>
                        </div>
                    </div>
                    <script>
                        function ChangeCityFilter() {
                            $('#county').html("");
                            var id = document.getElementById('city').value;
                            $.post("ajax/ChangeCity.php", {
                                id: id
                            }).done(function (data) {
                                $('#county').html(data);

                            });
                        }
                    </script>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group"><label>Telefon-1</label>
                                <input type="text" value="<?= $ReadUser['company_phone1'] ?>"
                                name="company_phone1"
                                class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group"><label>Cep Telefonu</label>
                                <input type="text" value="<?= $ReadUser['company_mobile'] ?>"
                                name="company_mobile"
                                required
                                class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group"><label>Kullanıcı Adı</label>
                                <input type="text" value="<?= $ReadUser['username'] ?>" name="username"
                                required
                                class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group"><label>Şifre</label>
                                <input type="text" name="password"
                                placeholder="Şifrenizi Değiştirmek İstemiyorsanız Boş Bırakınız..."
                                class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="form-actions"><input type="submit"
                       value="Düzenle"
                       class="btn btn-primary pull-right"></div>
                   <?php } else if ($_SESSION["user_group_id"] == 3) { ?>
                    <div class="form-group"><label>Müşteri Adı</label>
                        <input type="text" value="<?= $ReadUser['client_name'] ?>" name="client_name"
                        required
                        class="form-control">

                    </div>
                    <div class="form-group"><label>Müşteri Adresi</label>
                        <textarea name="client_address" class="form-control"
                        required><?= $ReadUser['client_address'] ?></textarea>

                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group"><label>Telefon-1</label>
                                <input type="text" value="<?= $ReadUser['client_phone1'] ?>"
                                name="client_phone1"
                                class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group"><label>Cep Telefonu</label>
                                <input type="text" value="<?= $ReadUser['client_mobile'] ?>"
                                name="client_mobile"
                                required
                                class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-4">
                            <div class="form-group"><label>Kullanıcı Adı</label>
                                <input type="text" value="<?= $ReadUser['username'] ?>" name="username"
                                required
                                class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="form-group"><label>Email</label>
                                <input type="text" value="<?= $ReadUser['email'] ?>" name="email" readonly
                                required
                                class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="form-group"><label>Şifre</label>
                                <input type="text" name="password"
                                placeholder="Şifrenizi Değiştirmek İstemiyorsanız Boş Bırakınız..."
                                class="form-control">
                            </div>
                        </div>
                    </div>
                    <?php $Query = $db->query("SELECT * FROM contracts WHERE client_id='".$_SESSION["client_id"]."' and contract_number=1")->fetch_assoc();
                    $Query2 = $db->query("SELECT * FROM contracts WHERE client_id='".$_SESSION["client_id"]."' and contract_number=2")->fetch_assoc(); ?>
                    <div class="row">
                        <?php if($Query["contract_url"]!=""){
                            $URL = $Query["contract_url"];
                        }else {
                            $URL = "#";
                        }
                        if($Query2["contract_url"]!=""){
                            $URL2 = $Query2["contract_url"];
                        }else {
                            $URL2 = "#";
                        }
                        ?>
                        <div class="col-lg-3 col-md-3">
                            <label>&emsp;</label>
                            <div class="form-group" style="text-align: left">
                                <a href="<?=$URL?>" target="_blank"><button style="text-align: left;" type="button"
                                    class="btn btn-warning px-5">SÖZLEŞME - 1
                                </button></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3">
                            <label>&emsp;</label>
                            <div class="form-group" style="text-align: left">
                                <a href="<?=$URL2?>" target="_blank"><button style="text-align: left;" type="button"
                                    class="btn btn-warning px-5">SÖZLEŞME - 2
                                </button></a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <label>&emsp;</label>
                            <div class="form-group" style="text-align: right">
                                <button style="text-align: right;" type="submit"
                                class="btn btn-primary px-5">DÜZENLE
                            </button>
                        </div>
                    </div>
                </div>

            <?php } else { ?>
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group"><label>Ad-Soyad</label>
                            <input type="text" value="<?= $ReadUser['name'] ?>" name="name"
                            required
                            class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group"><label>Kullanıcı Adı</label>
                            <input type="text" value="<?= $ReadUser['username'] ?>" name="username"
                            required
                            class="form-control">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group"><label>Email</label>
                            <input type="text" value="<?= $ReadUser['email'] ?>" name="email"
                            required
                            class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group"><label>Şifre</label>
                            <input type="text" name="password"
                            placeholder="Şifrenizi Değiştirmek İstemiyorsanız Boş Bırakınız..."
                            class="form-control">
                        </div>
                    </div>
                </div>
                <div class="form-actions"><input type="submit"
                   value="Düzenle"
                   class="btn btn-primary pull-right"></div>

               <?php } ?>



           </form>
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