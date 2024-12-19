<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "add_new_seller") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                if ($_POST) {
                    if (!empty($_POST["name"]) and !empty($_POST["address"]) and !empty($_POST["email"]) and !empty($_POST["mobile"])
                        and !empty($_POST["city"]) and !empty($_POST["county"]) and !empty($_POST["username"]) and !empty($_POST["password"])) {
                        $ControlUsername = $db->query("SELECT * FROM user WHERE username = '" . $_POST["username"] . "' and deleted=0")->num_rows;
                        if ($ControlUsername == 0) {
                            $ControlEmail = $db->query("SELECT * FROM user WHERE email = '" . $_POST["email"] . "' and deleted=0")->num_rows;
                            if ($ControlEmail == 0) {
                                $ControlCompanyName = $db->query("SELECT * FROM distributors WHERE company_name = '" . $_POST["name"] . "'")->num_rows;
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
        }
        ?>
    </div>
</div>