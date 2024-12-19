<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "list_seller") {
        if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
            // TODO : DÜZENLE
        if (Permission($_SESSION['user_group_id'], "new_seller")) {
            ?>
            <a href="index.php?module=seller/seller&do=new_seller"
               class="btn btn-success btn-round waves-effect waves-light m-1">Yeni Bayi Ekle</a>
        <br/><br>
        <?php } ?>
            <div class="card">
                <div class="card-body">
                    <div class="card-title">Bayi Filtreleme</div>
                    <form method="GET" class="form-horizontal row-border" action="#">
                        <input type="hidden" name="module" value="seller/seller"/>
                        <input type="hidden" name="do" value="list_seller"/>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="form-group">
                                    <label>Firma Adı</label>
                                    <input type="text" class="form-control" name="name">
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="form-group">
                                    <label>Şehir</label>
                                    <select class="form-control single-select" name="city"
                                            id="city" onchange="ChangeCityFilter()">
                                        <option value="0">Seçiniz</option>
                                        <?php $query = $db->query("SELECT * FROM city");
                                        while ($row = $query->fetch_assoc()) {
                                            ?>
                                            <option value="<?= $row["id"] ?>"><?= $row["city_name"] ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="form-group">
                                    <label>İlçe</label>
                                    <select class="form-control single-select" name="county"
                                            id="county">
                                    </select>
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
                            <div class="col-lg-3">
                                <div class="form-group">
                                    <label>Durumu</label>
                                    <select class="form-control" name="is_active">
                                        <option value="0">Seçiniz</option>
                                        <option value="1">AKTİF</option>
                                        <option value="2">PASİF</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="form-group" style="text-align: center">
                            <button style="text-align: center;" type="submit"
                                    class="btn btn-warning px-5">Filtrele
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            <div class="card">
                <div class="card-header"><i class="fa fa-table"></i> Bayi Listesi</div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="default-datatable" class="table table-bordered">
                            <thead>
                            <tr>
                                <th>Firma Adı</th>
                                <th>Firma Adresi</th>
                                <th>Firma Email</th>
                                <th>Firma Telefon-1</th>
                                <th>Firma Cep Telefonu</th>
                                <th>Şehir</th>
                                <th>İlçe</th>
                                <th>Durum</th>
                                <th>İşlem</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php

                            $Filter = "distributors.deleted = 0";
                            if (isset($_GET["name"]) and !empty($_GET["name"])) {
                                $Filter .= " and distributors.company_name LIKE '" . $_GET["name"] . "%'";
                            }
                            if (isset($_GET["city"]) and !empty($_GET["city"])) {
                                $Filter .= " and distributors.company_city_id='" . $_GET["city"] . "'";
                            }
                            if (isset($_GET["county"]) and !empty($_GET["county"])) {
                                $Filter .= " and distributors.company_county_id='" . $_GET["county"] . "'";
                            }
                            if (isset($_GET["is_active"]) and !empty($_GET["is_active"])) {
                                $Filter .= " and distributors.is_active = '" . $_GET["is_active"] . "'";
                            }

                            $Query = $db->query("SELECT *,distributors.id AS ID FROM distributors
                                                            LEFT JOIN city ON city.id = distributors.company_city_id
                                                            LEFT JOIN county ON county.id = distributors.company_county_id                                                                                                                    
                                                            WHERE " . $Filter . "");
                            while ($row = $Query->fetch_assoc()) {
                                ?>
                                <tr>
                                    <td><?= $row["company_name"] ?></td>
                                    <td><?= $row["company_address"] ?></td>
                                    <td><?= $row["company_contact_email"] ?></td>
                                    <td><?= $row["company_phone1"] ?></td>
                                    <td><?= $row["company_mobile"] ?></td>
                                    <td><?= $row["city_name"] ?></td>
                                    <td><?= $row["county_name"] ?></td>
                                    <td><?php if ($row["is_active"] == 1) {
                                            echo "<font color='green'>AKTİF</font>";
                                        } else if ($row["is_active"] == 2) {
                                            echo "<font color='red'>PASİF</font>";
                                        } ?>
                                    </td>
                                    <td>
                                        <a href="index.php?module=seller/seller&do=add_seller_card&id=<?= $row["ID"] ?>">
                                            <button type="button"
                                                    class="btn btn-primary waves-effect waves-light m-1"
                                                    title="Kart Ver"><i
                                                        class="fa fa-credit-card"></i>
                                                <span>Kart Ver</span>
                                            </button>
                                        </a>
                                        <a href="index.php?module=seller/seller&do=update_seller&id=<?= $row["ID"] ?>">
                                            <button type="button"
                                                    class="btn btn-secondary waves-effect waves-light m-1"
                                                    title="Düzenle"><i
                                                        class="fa fa-credit-card"></i>
                                                <span>Düzenle</span>
                                            </button>
                                        </a>
                                        <button type="button"
                                                class="btn btn-danger waves-effect waves-light m-1"
                                                title="Sil"
                                                data-type="confirm"
                                                data-id="<?= $row["ID"] ?>" id="delete_dist"><i
                                                    class="fa fa fa-trash-o"></i>
                                            <span>Sil</span>
                                        </button>
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
            <script>
                $(document).on("click", "#delete_dist", function () {
                    var id = $(this).data('id');
                    $("#delete_dist_id").val(id);
                    $('#deleteDist').modal('show');
                });
            </script>
            <!--            Delete Region Modal-->
            <div class="modal fade" id="deleteDist">
                <input type="hidden" id="delete_dist_id">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Bayi Silme Formu</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>
                            <center>Seçili Bayi Silinecektir!</center>
                            </p>
                            <p>
                            <center>Onaylıyor musunuz?</center>
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-white" data-dismiss="modal"><i
                                        class="fa fa-times"></i>Hayır, Vazgeç
                            </button>
                            <button type="button" onclick="deleteDist()" class="btn btn-primary"><i
                                        class="fa fa-check-square-o"></i>Evet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                function deleteDist() {
                    var id = document.getElementById('delete_dist_id').value;

                    $.post("ajax/deleteDistributor.php", {
                        id: id
                    }).done(function (data) {
                        if (data == "ok") {
                            swal({
                                title: "BAŞARILI",
                                text: "Bayi Silindi!",
                                icon: "success",
                                button: "OK",
                            })
                                .then((willOk) => {
                                        if (willOk) {
                                            $("#deleteDist").modal("hide");
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


        <?php
        } else {
            echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
        }
        } else if (@$_GET['do'] == "new_seller") {
        if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
        if ($_POST) {
            if (!empty($_POST["name"]) and !empty($_POST["address"]) and !empty($_POST["email"]) and !empty($_POST["mobile"])
                and !empty($_POST["city"]) and !empty($_POST["county"]) and !empty($_POST["username"]) and !empty($_POST["password"])) {
                $ControlUsername = $db->query("SELECT * FROM user WHERE username = '" . $_POST["username"] . "' and deleted=0")->num_rows;
                if ($ControlUsername == 0) {
                    $ControlEmail = $db->query("SELECT * FROM user WHERE email = '" . $_POST["email"] . "' and deleted=0")->num_rows;
                    if ($ControlEmail == 0) {
                        $ControlCompanyName = $db->query("SELECT * FROM distributors WHERE company_name = '" . $_POST["name"] . "' and deleted=0")->num_rows;
                        if ($ControlCompanyName == 0) {

                            $InsertUser = $db->query("INSERT INTO user(name,username,email,password,user_group_id) VALUES('" . $_POST["name"] . "','" . $_POST["username"] . "','" . $_POST["email"] . "','" . md5($_POST["password"]) . "',2)");
                            if ($InsertUser) {
                                $ID = $db->insert_id;
                                $InsertDistributors = $db->query("INSERT INTO distributors(company_name,company_address,company_contact_email,company_phone1,company_mobile,company_city_id,company_county_id,user_id)
VALUES('" . $_POST["name"] . "','" . $_POST["address"] . "','" . $_POST["email"] . "','" . $_POST["phone1"] . "','" . $_POST["mobile"] . "','" . $_POST["city"] . "','" . $_POST["county"] . "','" . $ID . "')");
                                if ($InsertDistributors) {
                                    echo success("Yeni Bayi Oluşturuldu!<br> Sisteme Kullanıcı Adı: <font color='red'>" . $_POST["username"] . "</font> Şifre:<font color='red'> " . $_POST["password"] . "</font> ile giriş yapabilir");

                                } else {
                                    echo error("Sistem Hatası! Bayi Oluşturulamadı");
                                    $db->query("DELETE FROM user WHERE id = '" . $ID . "'");
                                }
                            } else {
                                echo error("Sistem Hatası. Kullanıcı Oluşturulamadı!");
                            }


                        } else {
                            echo error("Bu Firma Adı Sistemde Kayıtlı");
                        }
                    } else {
                        echo error("Bu Email Sistemde Kayıtlı");
                    }
                } else {
                    echo error("Bu Kullanıcı Adı Sistemde Kayıtlı");
                }

            }

        }
        ?>
            <div class="card">
                <div class="card-body">
                    <div class="card-title">Yeni Bayi Bilgileri</div>
                    <form action="" method="POST">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Firma Adı</label>
                                    <input type="text" class="form-control" id="name" name="name"
                                           required
                                           autocomplete="off"
                                           placeholder="Firma Adını Giriniz">

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Firma Adresi</label>
                                    <input type="text" class="form-control" id="address" name="address" required
                                           autocomplete="off"
                                           placeholder="Firma Adresini Giriniz">

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label>Firma Email</label>
                                    <input type="text" class="form-control" id="email" name="email"
                                           autocomplete="off" required
                                           placeholder="Firma İletişim Email Giriniz">

                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label>Telefon - 1</label>
                                    <input type="text" class="form-control" id="phone1" name="phone1"
                                           autocomplete="off"
                                           placeholder="Firma Telefon No Giriniz">

                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label>Cep Telefonu</label>
                                    <input type="text" class="form-control" id="mobile" name="mobile"
                                           autocomplete="off" required
                                           placeholder="Firma Cep No Giriniz">

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Şehir</label>
                                    <select class="form-control single-select" name="city" required
                                            id="city" onchange="ChangeCityFilter()">
                                        <option value="0">Seçiniz</option>
                                        <?php $query = $db->query("SELECT * FROM city");
                                        while ($row = $query->fetch_assoc()) {
                                            ?>
                                            <option value="<?= $row["id"] ?>"><?= $row["city_name"] ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>İlçe</label>
                                    <select class="form-control single-select" name="county" required
                                            id="county">
                                    </select>
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
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Kullanıcı Adı</label>
                                    <input type="text" class="form-control" id="username" name="username"
                                           autocomplete="off" required
                                           placeholder="Kullanıcı Adını Giriniz">

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Şifre</label>
                                    <input type="text" class="form-control" id="password" name="password"
                                           autocomplete="off" required
                                           placeholder="Şifre Giriniz">

                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="form-group" style="text-align: center">
                            <button type="submit"
                                    class="btn btn-warning px-5">Ekle
                            </button>

                        </div>
                    </form>
                </div>
            </div>

        <?php } else {
            echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
        }
        } else if (@$_GET['do'] == "add_seller_card") {
        if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
            if ($_POST) {
                if ($_POST["card_list"]) {
                    $count = count($_POST["card_list"]);
                    for ($i = 0; $i < $count; $i++) {
                        $UpdateCardStatus = $db->query("UPDATE cards SET card_status=1,card_distributor_id='" . $_GET["id"] . "' WHERE id='" . $_POST["card_list"][$i] . "'");
                    }
                    if ($UpdateCardStatus) {
                        echo success("Kartlar Bayiye Atanmıştır!");
                    } else {
                        echo error("Sistem Hatası!<br>" . mysqli_error($db));
                    }


                } else {
                    echo warning("Lütfen Listeden En Az 1 Kart Seçiniz!");
                }
            }
            $DistQuery = $db->query("SELECT * FROM distributors WHERE id='" . $_GET["id"] . "'")->fetch_assoc();
            ?>
            <div class="card">
                <div class="card-body">
                    <div class="card-title"><?= $DistQuery["company_name"] ?></div>
                    <form action="" method="POST">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-6 col-lg-6 col-xl-6" style="text-align: center"><label>KUTUDAN
                                                KARTLARI SEÇİNİZ..</label></div>
                                        <div class="col-md-6 col-lg-6 col-xl-6" style="text-align: center"><label>SEÇİLEN
                                                KARTLAR..</label></div>
                                    </div>


                                    <select name="card_list[]" class="multi-select" multiple="multiple"
                                            id="my_multi_select3" style="width: 1000px;">
                                        <?php $query = $db->query("SELECT *,cards.id AS ID FROM cards LEFT JOIN campaigns ON campaigns.id=cards.card_campaign_id WHERE card_status=0 or card_distributor_id=15");
                                        while ($row = $query->fetch_assoc()) {
                                            if ($row["card_type"] == 1) {
                                                $TYPE = "BAKİYELİ";
                                            } else {
                                                $TYPE = "KREDİLİ";
                                            }
                                            ?>
                                            <option value="<?= $row["ID"] ?>"><?= CardNumberMask($row["card_number"]) . " - " . $row["campaign_name"] . " - " . $TYPE ?></option>
                                        <?php } ?>
                                    </select>


                                </div>
                            </div>

                        </div>

                        <br>
                        <div class="form-group" style="text-align: center">
                            <button type="submit"
                                    class="btn btn-warning px-5">BAYİYE VER
                            </button>

                        </div>
                    </form>
                </div>
            </div>

        <?php } else {
            echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
        }
        }
        else if (@$_GET['do'] == "update_seller") {
        if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
            $QueryDist = $db->query("SELECT * FROM distributors WHERE id='" . $_GET["id"] . "' and deleted=0")->fetch_assoc();
        if ($QueryDist["id"] != "") {
            if ($_POST) {
                if (!empty($_POST["name"]) and !empty($_POST["address"]) and !empty($_POST["email"]) and !empty($_POST["mobile"])
                    and !empty($_POST["city"]) and !empty($_POST["county"]) and !empty($_POST["username"]) and !empty($_POST["status"])) {
                    $ControlUsername = $db->query("SELECT * FROM user WHERE username = '" . $_POST["username"] . "' and deleted=0 and id!='" . $QueryDist["user_id"] . "'")->num_rows;
                    if ($ControlUsername == 0) {
                        $ControlEmail = $db->query("SELECT * FROM user WHERE email = '" . $_POST["email"] . "' and deleted=0 and id!='" . $QueryDist["user_id"] . "'")->num_rows;
                        if ($ControlEmail == 0) {
                            $ControlCompanyName = $db->query("SELECT * FROM distributors WHERE company_name = '" . $_POST["name"] . "' and id!='" . $_GET["id"] . "' and deleted=0")->num_rows;
                            if ($ControlCompanyName == 0) {
                                

                                    $UPDATEDIST = $db->query("UPDATE distributors SET company_name='" . $_POST["name"] . "' WHERE id='" . $_GET["id"] . "'");
                                    $UPDATEDIST = $db->query("UPDATE distributors SET company_address='" . $_POST["address"] . "' WHERE id='" . $_GET["id"] . "'");
                                    $UPDATEDIST = $db->query("UPDATE distributors SET company_contact_email='" . $_POST["email"] . "' WHERE id='" . $_GET["id"] . "'");
                                    $UPDATEDIST = $db->query("UPDATE distributors SET company_phone1='" . $_POST["phone1"] . "' WHERE id='" . $_GET["id"] . "'");
                                    $UPDATEDIST = $db->query("UPDATE distributors SET company_mobile='" . $_POST["mobile"] . "' WHERE id='" . $_GET["id"] . "'");
                                    $UPDATEDIST = $db->query("UPDATE distributors SET company_city_id='" . $_POST["city"] . "' WHERE id='" . $_GET["id"] . "'");
                                    $UPDATEDIST = $db->query("UPDATE distributors SET company_county_id='" . $_POST["county"] . "' WHERE id='" . $_GET["id"] . "'");
                                    $UPDATEDIST = $db->query("UPDATE distributors SET is_active='" . $_POST["status"] . "' WHERE id='" . $_GET["id"] . "'");

                                    $UPDATEUSER = $db->query("UPDATE user SET name = '" . $_POST["name"] . "' WHERE id='" . $QueryDist["user_id"] . "'");
                                    $UPDATEUSER = $db->query("UPDATE user SET username = '" . $_POST["username"] . "' WHERE id='" . $QueryDist["user_id"] . "'");
                                    $UPDATEUSER = $db->query("UPDATE user SET email = '" . $_POST["email"] . "' WHERE id='" . $QueryDist["user_id"] . "'");
                                    $UPDATEUSER = $db->query("UPDATE user SET status = '" . $_POST["status"] . "' WHERE id='" . $QueryDist["user_id"] . "'");
                                    if (!empty($_POST["password"])) {
                                        $UPDATEUSERPS = $db->query("UPDATE user SET password = '" . md5($_POST["password"]) . "' WHERE id='" . $QueryDist["user_id"] . "'");
                                        if ($UPDATEUSERPS) {
                                            echo success("Bayi Şifresi Başarıyla Güncellendi!");
                                        } else {
                                            echo error("Bayi Şifre Güncelleme Sistem Hatası!");
                                        }
                                    }
                                    if ($UPDATEDIST && $UPDATEUSER) {
                                        echo success("Bayi Güncelleme Başarılı!");
                                    } else {
                                        echo error("Bayi Güncelleme Sistem Hatası");
                                    }


                            } else {
                                echo error("Bu Firma Adı Sistemde Kayıtlı");
                            }
                        } else {
                            echo error("Bu Email Sistemde Kayıtlı");
                        }
                    } else {
                        echo error("Bu Kullanıcı Adı Sistemde Kayıtlı");
                    }

                }

            }
            $QueryDistributors = $db->query("SELECT * FROM distributors LEFT JOIN user ON user.id=distributors.user_id WHERE distributors.id='" . $_GET["id"] . "'")->fetch_assoc();
            ?>
            <div class="card">
                <div class="card-body">
                    <div class="card-title">"<?= $QueryDistributors["company_name"] ?>" Adlı Bayi Bilgileri</div>
                    <form action="" method="POST">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Firma Adı</label>
                                    <input type="text" class="form-control" id="name" name="name"
                                           required value="<?= $QueryDistributors["company_name"] ?>"
                                           autocomplete="off"
                                           placeholder="Firma Adını Giriniz">

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Firma Adresi</label>
                                    <input type="text" class="form-control" id="address" name="address" required
                                           autocomplete="off" value="<?= $QueryDistributors["company_address"] ?>"
                                           placeholder="Firma Adresini Giriniz">

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label>Firma Email</label>
                                    <input type="text" class="form-control" id="email" name="email"
                                           autocomplete="off" required
                                           value="<?= $QueryDistributors["company_contact_email"] ?>"
                                           placeholder="Firma İletişim Email Giriniz">

                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label>Telefon - 1</label>
                                    <input type="text" class="form-control" id="phone1" name="phone1"
                                           autocomplete="off" value="<?= $QueryDistributors["company_phone1"] ?>"
                                           placeholder="Firma Telefon No Giriniz">

                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label>Cep Telefonu</label>
                                    <input type="text" class="form-control" id="mobile" name="mobile"
                                           autocomplete="off" required
                                           value="<?= $QueryDistributors["company_mobile"] ?>"
                                           placeholder="Firma Cep No Giriniz">

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Şehir</label>
                                    <select class="form-control single-select" name="city" required
                                            id="city" onchange="ChangeCityFilter()">
                                        <option value="0">Seçiniz</option>
                                        <?php $query = $db->query("SELECT * FROM city");
                                        while ($row = $query->fetch_assoc()) {
                                            ?>
                                            <option <?php if ($row["id"] == $QueryDistributors["company_city_id"]) {
                                                echo "selected";
                                            } ?> value="<?= $row["id"] ?>"><?= $row["city_name"] ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>İlçe</label>
                                    <select class="form-control single-select" name="county" required
                                            id="county">
                                        <?php
                                        $Query = $db->query("SELECT * FROM county WHERE city_id='" . $QueryDistributors["company_city_id"] . "' ORDER BY county_name");
                                        ?>
                                        <option value="0">Seçiniz</option>
                                        <?php
                                        while ($row = $Query->fetch_assoc()) {
                                            /*$Query2 = $db->query("SELECT * FROM device_information WHERE device_type_information_id='".$row["id"]."'");
                                            while($row2 = $Query2->fetch_assoc()) {*/
                                            ?>
                                            <option <?php if ($row["id"] == $QueryDistributors["company_county_id"]) {
                                                echo "selected";
                                            } ?> value="<?= $row['id'] ?>"><?= $row['county_name'] ?></option>
                                            <?php
                                            // }
                                        }
                                        ?>
                                    </select>
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
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label>Kullanıcı Adı</label>
                                    <input type="text" class="form-control" id="username" name="username"
                                           autocomplete="off" required value="<?= $QueryDistributors["username"] ?>"
                                           placeholder="Kullanıcı Adını Giriniz">

                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label>Şifre</label>
                                    <input type="text" class="form-control" id="password" name="password"
                                           autocomplete="off"
                                           placeholder="Şifreyi Değiştirmek İstemiyorsanız Boş Bırakınız!">

                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label>Firma Durum</label>
                                    <select class="form-control" name="status" required
                                            id="status">
                                        <option <?php if (1 == $QueryDistributors["is_active"]) {
                                            echo "selected";
                                        } ?> value="1">AKTİF
                                        </option>
                                        <option <?php if (2 == $QueryDistributors["is_active"]) {
                                            echo "selected";
                                        } ?> value="2">PASİF
                                        </option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="form-group" style="text-align: center">
                            <button type="submit"
                                    class="btn btn-warning px-5">Düzenle
                            </button>

                        </div>
                    </form>
                </div>
            </div>

            <?php
        } else {
            echo error("Belirtilen Bayi Bulunamadı!");
        }
        } else {
            echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
        }
        }
        ?>
    </div>
</div>