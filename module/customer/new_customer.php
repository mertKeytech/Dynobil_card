<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "add_new_customer") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                if ($_POST) {

            if (!empty($_POST["name"]) and !empty($_POST["address"]) and !empty($_POST["email"]) and !empty($_POST["mobile"])
                and !empty($_POST["card"]) and !empty($_POST["username"]) and !empty($_POST["password"])) {

                $ControlUsername = $db->query("SELECT * FROM user WHERE username = '" . $_POST["username"] . "' and deleted=0")->num_rows;
            if ($ControlUsername == 0) {
                $ControlEmail = $db->query("SELECT * FROM user WHERE email = '" . $_POST["email"] . "' and deleted=0")->num_rows;
                if ($ControlEmail == 0) {
                    $ControlCompanyName = $db->query("SELECT * FROM clients WHERE client_name = '" . $_POST["name"] . "'")->num_rows;
                    if ($ControlCompanyName == 0) {
                        $ControlMobile = $db->query("SELECT * FROM clients WHERE client_mobile = '" . $_POST["mobile"] . "'")->num_rows;
                        if ($ControlMobile == 0) {
                            $InsertUser = $db->query("INSERT INTO user(name,username,email,password,user_group_id) VALUES('" . $_POST["name"] . "','" . $_POST["username"] . "','" . $_POST["email"] . "','" . md5($_POST["password"]) . "',3)");
                            if ($InsertUser) {
                                $ID = $db->insert_id;
                                $InsertClient = $db->query("INSERT INTO clients(client_tc,client_tax_no,client_name,client_address,client_phone1,client_mobile,user_id,card_id,unixtime,client_tax_name)
                                    VALUES('" . $_POST["tc"] . "','" . $_POST["tax_no"] . "','" . $_POST["name"] . "','" . $_POST["address"] . "','" . $_POST["phone1"] . "','" . $_POST["mobile"] . "','" . $ID . "','" . $_POST["card"] . "','" . time() . "','".$_POST["tax_name"]."')");
                                if ($InsertClient) {
                                    $ClientID = $db->insert_id;
                                    $InsertCampaigns = $db->query("INSERT INTO client_campaigns(client_id) VALUES('" . $ClientID . "')");
                                    if ($_SESSION["user_group_id"] == 2) {
                                        $dist = $_SESSION["distributor_id"];
                                    } else {
                                        $dist = 0;
                                    }
                                    $UpdateCard = $db->query("UPDATE cards SET card_status=2,card_distributor_id='" . $dist . "' WHERE id='" . $_POST["card"] . "' ");
                                    if (!$UpdateCard) {
                                        echo error(mysqli_error($db));
                                    }
                                    if (isset($_FILES['Report']) and $_FILES['Report']['error'] == 0) {
                                        $DirStatus = false;
                                        $_FILES['Report'] = FileTrEn($_FILES['Report']);
                                        $dizin = 'files/contracts/';
                                        $Year = date("Y", time());
                                        $Month = date("m", time());
                                        $Day = date("d", time());
                                        $dizin .= $Year . "/";
                                        if (file_exists($dizin)) {
                                            $dizin .= $Month . "/";
                                            if (file_exists($dizin)) {
                                                $dizin .= $Day . "/";
                                                if (file_exists($dizin)) {
                                                    $DirStatus = true;
                                                } else {
                                                    $NewDayDir = mkdir($dizin, 0777);
                                                    if ($NewDayDir) {
                                                        $DirStatus = true;
                                                    } else {
                                                        echo "Day-Dir Error!";
                                                    }
                                                }
                                            } else {
                                                $NewMonthDir = mkdir($dizin, 0777);
                                                if ($NewMonthDir) {
                                                    $dizin .= $Day . "/";
                                                    $NewDayDir = mkdir($dizin, 0777);
                                                    if ($NewDayDir) {
                                                        $DirStatus = true;
                                                    } else {
                                                        echo "Day-Dir Error!";
                                                    }
                                                } else {
                                                    echo "Month-Dir Error!";
                                                }
                                            }
                                        } else {
                                            $NewYearDir = mkdir($dizin, 0777);
                                            if ($NewYearDir) {
                                                $dizin .= $Month . "/";
                                                $NewMonthDir = mkdir($dizin, 0777);
                                                if ($NewMonthDir) {
                                                    $dizin .= $Day . "/";
                                                    $NewDayDir = mkdir($dizin, 0777);
                                                    if ($NewDayDir) {
                                                        $DirStatus = true;
                                                    } else {
                                                        echo "Day-Dir Error!";
                                                    }
                                                } else {
                                                    echo "Month-Dir Error!";
                                                }
                                            } else {
                                                echo "Year-Dir Error!";
                                            }
                                        }
                                                    //$dizin .= $Year."/".$Month."/".$Day."/";
                                        if ($DirStatus) {
                                            $yuklenecek_dosya = $dizin .RandomReportName(10)."_".basename($_FILES["Report"]["name"]);

                                            if (move_uploaded_file($_FILES['Report']['tmp_name'], $yuklenecek_dosya)) {
                                                $InsertReport = $db->query("INSERT INTO contracts(upload_unixtime,distributor_id,client_id,
                                                    contract_url) VALUES('" . time() . "','" . $dist . "','" . $ClientID . "','" . $yuklenecek_dosya . "')");
                                                if ($InsertReport) {
                                                    echo success("Sözleşme - 1 Başarılı Bir Şekilde Yüklenmiştir.");
                                                } else {
                                                    echo error("Sistem Hatası - 1!<br>Detay: " . mysqli_error($db));
                                                    unlink($yuklenecek_dosya);
                                                }
                                            } else {
                                                echo error("Dosya Yükleme Hatası - 1!");
                                            }
                                        } else {
                                            echo error("Dosya Yükleme Hatası - 1!<br>Detay : Path Hatalı");
                                        }
                                    }

                                    if (isset($_FILES['Report2']) and $_FILES['Report2']['error'] == 0) {
                                        $DirStatus = false;
                                        $_FILES['Report2'] = FileTrEn($_FILES['Report2']);
                                        $dizin = 'files/contracts/';
                                        $Year = date("Y", time());
                                        $Month = date("m", time());
                                        $Day = date("d", time());
                                        $dizin .= $Year . "/";
                                        if (file_exists($dizin)) {
                                            $dizin .= $Month . "/";
                                            if (file_exists($dizin)) {
                                                $dizin .= $Day . "/";
                                                if (file_exists($dizin)) {
                                                    $DirStatus = true;
                                                } else {
                                                    $NewDayDir = mkdir($dizin, 0777);
                                                    if ($NewDayDir) {
                                                        $DirStatus = true;
                                                    } else {
                                                        echo "Day-Dir Error!";
                                                    }
                                                }
                                            } else {
                                                $NewMonthDir = mkdir($dizin, 0777);
                                                if ($NewMonthDir) {
                                                    $dizin .= $Day . "/";
                                                    $NewDayDir = mkdir($dizin, 0777);
                                                    if ($NewDayDir) {
                                                        $DirStatus = true;
                                                    } else {
                                                        echo "Day-Dir Error!";
                                                    }
                                                } else {
                                                    echo "Month-Dir Error!";
                                                }
                                            }
                                        } else {
                                            $NewYearDir = mkdir($dizin, 0777);
                                            if ($NewYearDir) {
                                                $dizin .= $Month . "/";
                                                $NewMonthDir = mkdir($dizin, 0777);
                                                if ($NewMonthDir) {
                                                    $dizin .= $Day . "/";
                                                    $NewDayDir = mkdir($dizin, 0777);
                                                    if ($NewDayDir) {
                                                        $DirStatus = true;
                                                    } else {
                                                        echo "Day-Dir Error!";
                                                    }
                                                } else {
                                                    echo "Month-Dir Error!";
                                                }
                                            } else {
                                                echo "Year-Dir Error!";
                                            }
                                        }
                                                    //$dizin .= $Year."/".$Month."/".$Day."/";
                                        if ($DirStatus) {
                                            $yuklenecek_dosya = $dizin .RandomReportName(10)."_".basename($_FILES["Report2"]["name"]);

                                            if (move_uploaded_file($_FILES['Report2']['tmp_name'], $yuklenecek_dosya)) {
                                                $InsertReport = $db->query("INSERT INTO contracts(upload_unixtime,distributor_id,client_id,
                                                    contract_url,contract_number) VALUES('" . time() . "','" . $dist . "','" . $ClientID . "','" . $yuklenecek_dosya . "',2)");
                                                if ($InsertReport) {
                                                    echo success("Sözleşme - 2 Başarılı Bir Şekilde Yüklenmiştir.");
                                                } else {
                                                    echo error("Sistem Hatası - 2!<br>Detay: " . mysqli_error($db));
                                                    unlink($yuklenecek_dosya);
                                                }
                                            } else {
                                                echo error("Dosya Yükleme Hatası - 2!");
                                            }
                                        } else {
                                            echo error("Dosya Yükleme Hatası - 2!<br>Detay : Path Hatalı");
                                        }
                                    }

                                    echo success("Yeni Müşteri Oluşturuldu!<br> Sisteme, Kullanıcı Adı: <font color='red'>" . $_POST["username"] . "</font> Şifre:<font color='red'> " . $_POST["password"] . "</font> ile giriş yapabilir");

                                } else {
                                    echo error("Sistem Hatası! Müşteri Oluşturulamadı");
                                    echo mysqli_Error($db);
                                    $db->query("DELETE FROM user WHERE id = '" . $ID . "'");
                                }
                            } else {
                                echo error("Sistem Hatası. Kullanıcı Oluşturulamadı!");
                                echo mysqli_Error($db);
                            }

                        } else {
                            echo error("Bu Cep No Sistemde Kayıtlı");
                        }
                    } else {
                        echo error("Bu Müşteri Adı Sistemde Kayıtlı");
                    }
                } else {
                    echo error("Bu Email Sistemde Kayıtlı");
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
        <div class="card-body">
            <div class="card-title">Yeni Müşteri Bilgileri</div>
            <form action="" method="POST" enctype="multipart/form-data">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label>Müşteri Adı</label>
                            <input type="text" class="form-control" id="name" name="name"
                            required
                            autocomplete="off"
                            placeholder="Müşteri Adını Giriniz">

                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label>Müşteri Adresi</label>
                            <input type="text" class="form-control" id="address" name="address" required
                            autocomplete="off"
                            placeholder="Müşteri Adresini Giriniz">

                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label>Kart</label>
                            <select class="form-control single-select" name="card" required
                            id="card">
                            <option value="0">Seçiniz</option>
                            <?php if ($_SESSION["user_group_id"] == 2) {
                                $query = $db->query("SELECT *,cards.id AS ID FROM cards LEFT JOIN campaigns ON campaigns.id=cards.card_campaign_id WHERE card_status=1 and card_distributor_id='" . $_SESSION["distributor_id"] . "'");
                            } else {
                                $query = $db->query("SELECT *,cards.id AS ID FROM cards LEFT JOIN campaigns ON campaigns.id=cards.card_campaign_id WHERE card_status=0");
                            }
                            while ($row = $query->fetch_assoc()) {
                                if($row["card_type"]==1){
                                    $TYPE = "BAKİYELİ";
                                } else {
                                    $TYPE = "KREDİLİ";
                                }
                                ?>
                                <option value="<?= $row["ID"] ?>"><?= CardNumberMask($row["card_number"])." - ".$row["campaign_name"]." - ".$TYPE ?></option>
                            <?php } ?>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label>Telefon - 1</label>
                        <input type="text" class="form-control" id="phone1" name="phone1"
                        autocomplete="off"
                        placeholder="Müşteri Telefon No Giriniz">

                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label>Cep Telefonu</label>
                        <input type="text" class="form-control" id="mobile" name="mobile"
                        autocomplete="off" required
                        placeholder="Müşteri Cep No Giriniz">

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="form-group">
                        <label>Kullanıcı Adı</label>
                        <input type="text" class="form-control" id="username" name="username"
                        autocomplete="off" required
                        placeholder="Kullanıcı Adını Giriniz">

                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" id="email" name="email"
                        autocomplete="off" required
                        placeholder="Email Giriniz">

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
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label>T.C. KİMLİK Numarası</label>
                        <input type="text" class="form-control" id="tc" name="tc"
                        autocomplete="off" maxlength="11" onkeypress="return event.charCode>=48 && event.charCode<=57"
                        placeholder="T.C Kimlik Numarası Giriniz">

                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group">
                        <label>Vergİ NO</label>
                        <input type="text" class="form-control" id="tax_no" name="tax_no"
                        autocomplete="off" maxlength="11" onkeypress="return event.charCode>=48 && event.charCode<=57"
                        placeholder="Vergi No Giriniz">

                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label>Vergi Dairesi</label>
                        <input type="text" class="form-control" id="tax_name" name="tax_name"
                        autocomplete="off"
                        placeholder="Vergi Dairesi Giriniz">

                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="form-group">
                        <label>SÖZLEŞME - 1</label>
                        <input type="hidden" name="MAX_FILE_SIZE" value="20000000"/>
                        <input type="file" name="Report" id="Report" class="form-control"
                        required>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="form-group">
                        <label>SÖZLEŞME - 2</label>
                        <input type="hidden" name="MAX_FILE_SIZE" value="20000000"/>
                        <input type="file" name="Report2" id="Report2" class="form-control">
                    </div>
                </div>
                <div class="col-lg-3">
                    <label>&emsp;</label>
                    <div class="form-group" style="text-align: center">
                        <button style="text-align: center;" type="submit"
                        class="btn btn-warning px-5">EKLE
                    </button>
                </div>
            </div>
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