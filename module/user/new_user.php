<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "new_user") {
        if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
            if ($_POST) {
                if (!empty($_POST['name']) && !empty($_POST['username']) && !empty($_POST['user_group']) && !empty($_POST['email']) && !empty($_POST['password'])) {

                    $Query = $db->query("SELECT * FROM user WHERE username='" . $_POST['username'] . "'");
                    $Count = $Query->num_rows;
                    if ($Count == 0) {
                        $Query = $db->query("SELECT * FROM user WHERE email='" . $_POST['email'] . "'");
                        $Count = $Query->num_rows;
                        if ($Count == 0) {
                            $Insert = $db->query("INSERT INTO user (name,username,email,password,user_group_id) VALUES('".$_POST['name']."','".$_POST['username']."','".$_POST['email']."','".md5($_POST['password'])."','".$_POST['user_group']."')");

                            if ($Insert) {
                                echo success("Yeni Kullanıcı Başarıyla Oluşturuldu!");
                                echo redirect("index.php?module=user/user&do=list_user",2000);

                            } else {
                                echo error("Sistem Hatası!<br>Detay: ".mysqli_error($db));
                            }
                        } else {
                            echo error("Email Hesabı Sistemde Kayıtlı!");
                        }
                    } else {
                        echo error("Bu Kullanıcı Adı Sistemde Kayıtlı");
                    }
                } else {
                    echo warning("Lütfen Tüm Alanları Doldurunuz!");
                }
            }

            ?>

            <div class="card">
                <div class="card-header"><i
                        class="fa fa-table"></i> Yeni Kullanıcı Formu
                </div>
                <div class="card-body">
                    <form action="" method="POST">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Ad - Soyad</label>
                                    <input type="text" class="form-control" id="name_surname" name="name"
                                           required
                                           autocomplete="off"
                                           placeholder="Kullanıcı Ad-Soyad Giriniz...">

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Kullanıcı Adı</label>
                                    <input type="text" class="form-control" id="username" name="username"
                                           required
                                           autocomplete="off"
                                           placeholder="Kullanıcı Adını Giriniz...">

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" id="email" name="email"
                                           autocomplete="off" required
                                           placeholder="Email Adresi Giriniz...">

                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label>Kullanıcı Grubu</label>
                                    <select class="form-control" name="user_group" id="user_group" required>
                                        <option disabled selected value>--Seçiniz--</option>
                                        <?php $query = $db->query("SELECT * FROM user_group WHERE id!=2 and id!=3 ORDER BY group_name");
                                        while ($row = $query->fetch_assoc()) {
                                            ?>
                                            <option value="<?= $row["id"] ?>"><?= $row["group_name"] ?></option>
                                        <?php } ?>
                                    </select>

                                </div>
                            </div>
                            <div class="col-lg-4">
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
                                    class="btn btn-warning px-5">Ekle</button>

                        </div>
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
</div>
