<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "search_client_card_balance") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                if ($_POST) {
                    if(!empty($_POST["card"])){
                        $query = $db->query("SELECT * FROM clients
                        LEFT JOIN cards ON cards.id=clients.card_id
                        WHERE cards.card_number='".$_POST["card"]."'")->fetch_assoc();
                        if($query["id"]!=""){
                            if($query["card_type"]==1) {
                                echo success("<font size='5'>Müşteri Adı : " . $query["client_name"] . "<br>Kart Bakiyesi : <font color='blue'>" . $query["balance"] . " TL</font></font>");
                            } else if($query["card_type"]==2){
                                echo success("<font size='5'>Müşteri Adı : " . $query["client_name"] . "<br>Kart Kredi Hakkı : <font color='blue'>" . $query["credit"] . "</font></font>");
                            }

                        } else {
                            echo warning("Girilen Kart Numarasına Ait Müşteri Bulunamadı!");
                        }
                    }
                }
                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">Müşteri Bakiye Sorgulama</div>
                        <form action="" method="POST">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label>KART NUMARASI</label>
                                        <input type="text" class="form-control" id="card" name="card"
                                               required onkeypress="return event.charCode>=48 && event.charCode<=57"
                                               autocomplete="off" maxlength="16" minlength="16"
                                               placeholder="16 Haneli Müşteri Kart Numarasını Giriniz...">

                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="form-group" style="text-align: center">
                                <button type="submit"
                                        class="btn btn-warning px-5">SORGULA
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