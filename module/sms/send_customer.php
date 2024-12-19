<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "list_customer_sms") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                if ($_POST) {
                    if (!empty($_POST["search"]) and !empty($_POST["sms"]) and !empty($_POST["clientID"])) {
					
						
						$_POST["sms"] = str_replace("\\\\r\\\\n",'\n',$_POST["sms"]);
						//echo $_POST ["sms"];
						//exit;
                        $query = $db->query("SELECT * FROM clients WHERE id= '".$_POST["clientID"]."'")->fetch_assoc();
                        if($query["id"]!=""){
                            $InsertCard = $db->query("INSERT INTO sms(client_id,mobile,sms_content) 
VALUES('" . $query["id"] . "','" . $query["client_mobile"] . "','".$_POST["sms"]."')");

                            if ($InsertCard) {
                                $SMSID = $db->insert_id;
                                //GondericiAdiSor();
                                $i = 1;
                                while($i<=10) {
                                    $i++;
                                    $gelen = SendSMS($_POST["sms"],$query["client_mobile"]);
									echo $gelen;
									//exit;
                                    $Response = substr($gelen,0,1);
                                    if ($Response == "0" and $Response != "") {
                                        $UpdateSMS = $db->query("UPDATE sms SET sms_status=1 WHERE id='".$SMSID."'");
                                        echo success("SMS Başarıyla Gönderildi!");
                                        break;
                                    } else {
                                        continue;
                                    }
                                }
                                if($i==11){
                                    $UpdateSMS = $db->query("UPDATE sms SET sms_status=2 WHERE id='".$SMSID."'");
                                    echo error("SMS Gönderimi Başarısız!");
                                }
                                //echo success("Müşteriye SMS Gönderimi Başarıyla Kaydedildi!");
                            } else {
                                echo error("Sistem Hatası!<br>" . mysqli_error($db));
                            }
                        } else {
                            echo warning("Lütfen Listeden Bir Müşteri Seçiniz!");
                        }

                    }
                    else if (!empty($_POST["sms_toplu"])) {
                        $query = $db->query("SELECT * FROM clients WHERE client_mobile!=''");
                        while($row = $query->fetch_assoc()){
                            $InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) 
VALUES('" . $row["id"] . "','" . $row["client_mobile"] . "','".$_POST["sms_toplu"]."')");
                            $SMSID = $db->insert_id;
                            //GondericiAdiSor();
                            $i = 1;
                            while($i<=10) {
                                $i++;
                                $gelen = SendSMS($_POST["sms_toplu"],$row["client_mobile"]);
                                $Response = substr($gelen,0,1);
                                if ($Response == "0") {
                                    $UpdateSMS = $db->query("UPDATE sms SET sms_status=1 WHERE id='".$SMSID."'");
                                    //echo success("SMS Başarıyla Gönderildi!");
                                    break;
                                } else {
                                    continue;
                                }
                            }
                            if($i==11){
                                $UpdateSMS = $db->query("UPDATE sms SET sms_status=2 WHERE id='".$SMSID."'");
                                //echo error("SMS Gönderimi Başarısız!");
                            }
                        }
                        if($InsertSMS){
                            echo success("Tüm Müşterilere SMS Gönderimi Başarıyla Kaydedildi!");
                        } else {
                            echo error("Sistem Hatası!<br>" . mysqli_error($db));
                        }
                    } else {
                        echo error("Lütfen Tek Müşteri ya da Tüm Müşteriler İşlemlerinden Birini Gerçekleştiriniz!");
                    }

                }
                ?>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title" style="text-align: center">Tek Müşteriye Gönder</div>
                                <form action="" method="POST">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label>SMS METNİ</label>
                                                <textarea name="sms" required class="form-control" id="sms"
                                                          placeholder="SMS Metnini Giriniz ve Aşağıdaki Arama Kutusundan Müşteri Arayınız"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label>Müşteri Arama <font color="green">(Kart Numarası,Müşteri Adı)</font></label>
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12">
                                                        <input type="text" class="form-control" id="search"
                                                               name="search" onkeyup="returnClientList()"
                                                               autocomplete="off"
                                                               placeholder="Lütfen En Az 3 Karakter Giriniz">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group" style="text-align: center; display: none;" id="ClientsDiv">
                                                <label>Müşteriler</label>
                                                <select class="form-control single-select" name="clientID" required
                                                        id="clientID">
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <script>
                                        function returnClientList() {
                                            var search = $("#search").val();
                                            if(search.length<3){
                                                $("#ClientsDiv").css("display", "none");
                                                $("#SendButton").css("display", "none");

                                            } else {
                                                $.post("ajax/returnClientList.php", {
                                                    value: search
                                                }).done(function (data) {
                                                    $('#clientID').html(data);

                                                });
                                                $("#ClientsDiv").css("display", "block");
                                                $("#SendButton").css("display", "block");

                                            }

                                        }
                                    </script>
                                    <br>
                                    <div class="form-group" style="text-align: center; display: none;" id="SendButton">
                                        <button type="submit" value="Single"
                                                class="btn btn-warning px-5">Gönder
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">Tüm Müşterilere Gönder</div>
                                <form action="" method="POST">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label>SMS METNİ</label>
                                                <textarea name="sms_toplu" required class="form-control" id="sms_toplu"
                                                          placeholder="SMS Metnini Giriniz ve GÖNDER Butonuna Basınız"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    <a href="#defaultModal" data-toggle="modal" data-target="#defaultModal">
                                        <div class="form-group" style="text-align: center">
                                            <button type="submit"
                                                    class="btn btn-warning px-5">GÖNDER
                                            </button>
                                        </div>
                                    </a>

                                    <div class="modal fade" id="defaultModal" tabindex="-1" role="dialog">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 class="title" id="defaultModalLabel">Tüm Müşterilere SMS Gönderme</h4>
                                                </div>
                                                <div class="modal-body">Girdiğiniz SMS Metnini Bütün Müşterilere Göndermeyi Onaylıyor Musunuz?
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="submit"
                                                            class="btn btn-primary">Evet</button>
                                                    <button type="button" class="btn btn-danger"
                                                            data-dismiss="modal">Hayır</button>
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