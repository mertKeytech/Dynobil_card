<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "new_campaign") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                if ($_POST) {
                    if (!empty($_POST["name"]) and !empty($_POST["amount"]) and !empty($_POST["percent"])) {
                        $ControlName = $db->query("SELECT * FROM campaigns WHERE campaign_name = '" . $_POST["name"] . "'")->num_rows;
                        if ($ControlName == 0) {
                            $InsertCampaign = $db->query("INSERT INTO campaigns(campaign_name,campaign_amount,campaign_percent)
VALUES('" . $_POST["name"] . "','" . $_POST["amount"] . "','" . $_POST["percent"] . "')");
                            if ($InsertCampaign) {
                                echo success("Yeni Kampanya Oluşturuldu!");
                            } else {
                                echo error("Sistem Hatası! Kampanya Oluşturulamadı<br>Detay: " . mysqli_error($db));
                            }

                        } else {
                            echo error("Bu Kampanya Adı Sistemde Kayıtlı!");
                        }

                    }

                }
                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">Yeni Kampanya Bilgileri</div>
                        <form action="" method="POST">
                            <div class="form-group">
                                <label>Kampanya Adı</label>
                                <input type="text" class="form-control" id="name" name="name"
                                       required
                                       autocomplete="off"
                                       placeholder="Kampanya Adını Giriniz">

                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label>Kampanya Yükleme Tutarı</label>
                                        <input type="text" class="form-control" id="amount" name="amount" required
                                               autocomplete="off"
                                               placeholder="Kampanya Tutarını Giriniz">

                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label>Kampanya Oranı</label>
                                        <input type="text" class="form-control" id="percent" name="percent"
                                               autocomplete="off" required
                                               placeholder="Kampanya için Oran Giriniz">
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
        } ?>
    </div>
</div>