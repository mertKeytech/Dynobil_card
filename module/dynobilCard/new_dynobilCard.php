<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "new_dynobilCard") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                if ($_POST) {
                    if (!empty($_POST["card_number"])) {
                        $InsertCard = $db->query("INSERT INTO cards(card_number,card_create_time,card_campaign_id) 
VALUES('" . $_POST["card_number"] . "','" . time() . "','" . $_POST["campaign_single"] . "')");
                        if ($InsertCard) {
                            echo success("Yeni Tekli Kart Oluşturuldu!<br>Kart Numarası : " . CardNumberMask($_POST["card_number"]));
                        } else {
                            echo error("Sistem Hatası!<br>" . mysqli_error($db));
                        }

                    } else if (!empty($_POST["credit_card_number"])) {
                        $InsertCard = $db->query("INSERT INTO cards(card_number,card_create_time,card_campaign_id,card_type) 
VALUES('" . $_POST["card_number"] . "','" . time() . "','" . $_POST["campaign_single"] . "',2)");
                        if ($InsertCard) {
                            echo success("Yeni Tekli Kredili Kart Oluşturuldu!<br>Kart Numarası : " . CardNumberMask($_POST["card_number"]));
                        } else {
                            echo error("Sistem Hatası!<br>" . mysqli_error($db));
                        }

                    } else if (!empty($_POST["credit_card_count"])) {
                        $count = $_POST["credit_card_count"];
                        $CardNumberID = array();

                        for ($i = 0; $i < $count; $i++) {
                            while (1 == 1) {
                                $number = RandomCardNumber(16);
                                if (strlen($number) == 16) {
                                    $control = $db->query("SELECT * FROM cards WHERE card_number='" . $number . "'")->num_rows;
                                    if ($control > 0) {
                                        continue;
                                    } else {
                                        $InsertCard = $db->query("INSERT INTO cards(card_number,card_create_time,card_campaign_id,card_type) 
VALUES('" . $number . "','" . time() . "','".$_POST["campaign"]."',2)");
                                        if ($InsertCard) {
                                            $CardNumberID[$i] = $db->insert_id;
                                            break;
                                        } else {
                                            continue;
                                        }
                                    }
                                } else {
                                    continue;
                                }
                            }
                        }
                        $string = "id=";
                        for ($i = 0; $i < $count; $i++) {
                            $string .= $CardNumberID[$i];
                            if ($count - $i != 1) {
                                $string .= ",";
                            }
                        }
                        echo success($count . " Adet Kredili Kart Oluşturulmuştur!<br>Excele Dökmek İçin <a href='excel/Cards.php?" . $string . "'><font color='blue'>TIKLAYIN</font></a>");


                    } else if (!empty($_POST["card_count"])) {
                        $count = $_POST["card_count"];
                        $CardNumberID = array();

                        for ($i = 0; $i < $count; $i++) {
                            while (1 == 1) {
                                $number = RandomCardNumber(16);
                                if (strlen($number) == 16) {
                                    $control = $db->query("SELECT * FROM cards WHERE card_number='" . $number . "'")->num_rows;
                                    if ($control > 0) {
                                        continue;
                                    } else {
                                        $InsertCard = $db->query("INSERT INTO cards(card_number,card_create_time,card_campaign_id) 
VALUES('" . $number . "','" . time() . "','".$_POST["campaign"]."')");
                                        if ($InsertCard) {
                                            $CardNumberID[$i] = $db->insert_id;
                                            break;
                                        } else {
                                            continue;
                                        }
                                    }
                                } else {
                                    continue;
                                }
                            }
                        }
                        $string = "id=";
                        for ($i = 0; $i < $count; $i++) {
                            $string .= $CardNumberID[$i];
                            if ($count - $i != 1) {
                                $string .= ",";
                            }
                        }
                        echo success($count . " Adet Kart Oluşturulmuştur!<br>Excele Dökmek İçin <a href='excel/Cards.php?" . $string . "'><font color='blue'>TIKLAYIN</font></a>");


                    } else {
                        echo error("Kart Numarası Oluşturunuz ya da İstenilen Kadar Sayı Giriniz");
                    }

                }
                ?>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">Tekli Kart Ekleme</div>
                                <form action="" method="POST">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label>Kart Numarası</label>
                                                <div class="row">
                                                    <div class="col-md-7 col-lg-7">
                                                        <input type="text" class="form-control" id="card_number"
                                                               name="card_number"
                                                               required readonly
                                                               autocomplete="off"
                                                               placeholder="Oluştur Butonuna Tıklayınız">
                                                    </div>
                                                    <div class="col-md-5 col-lg-5">
                                                        <button type="button" class="btn btn-primary"
                                                                onclick="newSingleCard();">OLUŞTUR
                                                        </button>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>KART KAMPANYA SEÇİMİ</label>
                                        <select class="form-control" required name="campaign_single">
                                            <?php $query=$db->query("SELECT * FROM campaigns");
                                            while($row=$query->fetch_assoc()){ ?>
                                                <option value="<?=$row["id"]?>"><?=$row["campaign_name"]?></option>
                                                <?php } ?>
                                        </select>

                                    </div>

                                    <script>
                                        function newSingleCard() {
                                            $.post("ajax/newSingleCardNumber.php", {}).done(function (data) {
                                                $("#card_number").val("");
                                                $("#card_number").val(data);
                                            });
                                        }
                                    </script>
                                    <br>
                                    <div class="form-group" style="text-align: center">
                                        <button type="submit"
                                                class="btn btn-warning px-5">Ekle
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">Çoklu Kart Ekleme</div>
                                <form action="" method="POST">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label>Kart Sayısı</label>
                                                <input type="text" class="form-control" id="card_count"
                                                       name="card_count"
                                                       required
                                                       onkeypress="return event.charCode>=48 && event.charCode<=57"
                                                       autocomplete="off"
                                                       placeholder="Oluştur Butonuna Tıklayınız">

                                            </div>
                                        </div>

                                    </div>
                                    <div class="form-group">
                                        <label>KART KAMPANYA SEÇİMİ</label>
                                        <select class="form-control" required name="campaign">
                                            <?php $query=$db->query("SELECT * FROM campaigns");
                                            while($row=$query->fetch_assoc()){ ?>
                                                <option value="<?=$row["id"]?>"><?=$row["campaign_name"]?></option>
                                            <?php } ?>
                                        </select>

                                    </div>
                                    <br>
                                    <a href="#defaultModal" data-toggle="modal" data-target="#defaultModal">
                                        <div class="form-group" style="text-align: center">
                                            <button type="submit"
                                                    class="btn btn-warning px-5">OLUŞTUR
                                            </button>
                                        </div>
                                    </a>

                                    <div class="modal fade" id="defaultModal" tabindex="-1" role="dialog">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 class="title" id="defaultModalLabel">Toplu Kart Oluşturma</h4>
                                                </div>
                                                <div class="modal-body">Girdiğiniz Adet Kadar Kart Oluşturmayı Onaylıyor
                                                    musunuz?
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="submit"
                                                            class="btn btn-primary">Evet
                                                    </button>
                                                    <button type="button" class="btn btn-danger"
                                                            data-dismiss="modal">Hayır
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">Tekli <font color="orange">Kredili</font> Kart Ekleme</div>
                                <form action="" method="POST">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label>Kart Numarası</label>
                                                <div class="row">
                                                    <div class="col-md-7 col-lg-7">
                                                        <input type="text" class="form-control" id="credit_card_number"
                                                               name="credit_card_number"
                                                               required readonly
                                                               autocomplete="off"
                                                               placeholder="Oluştur Butonuna Tıklayınız">
                                                    </div>
                                                    <div class="col-md-5 col-lg-5">
                                                        <button type="button" class="btn btn-primary"
                                                                onclick="newSingleCard();">OLUŞTUR
                                                        </button>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <script>
                                        function newSingleCard() {
                                            $.post("ajax/newSingleCardNumber.php", {}).done(function (data) {
                                                $("#credit_card_number").val("");
                                                $("#credit_card_number").val(data);
                                            });
                                        }
                                    </script>
                                    <br>
                                    <div class="form-group" style="text-align: center">
                                        <button type="submit"
                                                class="btn btn-warning px-5">Ekle
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">Çoklu <font color="orange">Kredili</font> Kart Ekleme</div>
                                <form action="" method="POST">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label>Kart Sayısı</label>
                                                <input type="text" class="form-control" id="credit_card_count"
                                                       name="credit_card_count"
                                                       required
                                                       onkeypress="return event.charCode>=48 && event.charCode<=57"
                                                       autocomplete="off"
                                                       placeholder="Oluştur Butonuna Tıklayınız">

                                            </div>
                                        </div>

                                    </div>
                                    <br>
                                    <a href="#defaultModal" data-toggle="modal" data-target="#defaultModalCredit">
                                        <div class="form-group" style="text-align: center">
                                            <button type="submit"
                                                    class="btn btn-warning px-5">OLUŞTUR
                                            </button>
                                        </div>
                                    </a>

                                    <div class="modal fade" id="defaultModalCredit" tabindex="-1" role="dialog">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 class="title" id="defaultModalLabel">Toplu Kredili Kart Oluşturma</h4>
                                                </div>
                                                <div class="modal-body">Girdiğiniz Adet Kadar Kart Oluşturmayı Onaylıyor
                                                    musunuz?
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="submit"
                                                            class="btn btn-primary">Evet
                                                    </button>
                                                    <button type="button" class="btn btn-danger"
                                                            data-dismiss="modal">Hayır
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            <?php } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        }
        ?>
    </div>
</div>