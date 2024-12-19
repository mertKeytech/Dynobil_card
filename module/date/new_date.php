<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "new_date") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                if($_POST){
                    if(!empty($_POST["distributor"]) and !empty($_POST["date"]) and !empty($_POST["hour"])){
                        $Date = $_POST["date"]." ".$_POST["hour"];

                        $DateUnix = strtotime($Date);

                        if($DateUnix>time()){
                            $Control = $db->query("SELECT * FROM date_list WHERE dist_id='".$_POST["distributor"]."' and start_unixtime='".$DateUnix."' and date_Status!=3")->fetch_assoc();
                            if($Control["id"]!=""){ // o Tarihte başka bir randevu var
                                echo error("Seçilen Tarih Uyumsuz!");
                            }else{
                                $Insert = $db->query("INSERT INTO date_list(dist_id,client_id,start_unixtime) VALUES('".$_POST["distributor"]."','".$_SESSION["client_id"]."','".$DateUnix."')");
                                if($Insert){
                                    echo success("Randevu Talebiniz Başarıyla Oluşturuldu!");
                                }else{ // Sistem Hatası
                                    echo error("Sistem Hatası!");
                                }
                            }
                        }else{
                            echo error("Seçilen Tarih Uyumsuz!");
                        }

                    }else{
                        echo warning("Lütfen Tüm Alanları Doldurunuz!");
                    }
                }
                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">RANDEVU TALEBİ</div>
                        <form method="POST" class="form-horizontal row-border" action="">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>BAYİ</label>
                                        <select class="form-control single-select" onchange="ReturnHours()" name="distributor"
                                                id="distributor" required>
                                            <option disabled selected value>Seçiniz</option>
                                            <?php $query = $db->query("SELECT * FROM distributors");
                                            while ($row = $query->fetch_assoc()) {
                                                ?>
                                                <option value="<?= $row["id"] ?>"><?= $row["company_name"] ?></option>
                                            <?php } ?>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <label>TARİH</label>
                                        <input type="text" name="date" id="autoclose-datepicker" onchange="ReturnHours()" class="form-control"
                                               autocomplete="off" required>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>SAAT</label>
                                        <select class="form-control single-select" name="hour"
                                                id="hour" required>
                                        </select>
                                    </div>
                                </div>
                                <script>
                                    function ReturnHours(){
                                        var date = $('#autoclose-datepicker').val();
                                        var dist = $('#distributor').val();
                                        if(date!="" && dist!=""){
                                            $.post("ajax/ReturnDateDist.php", {
                                                date: date,
                                                dist: dist
                                            }).done(function (data) {
                                                $('#hour').html(data);
                                            });
                                        }

                                    }
                                </script>

                                    <div class="col-lg-3">
                                        <label>&emsp;</label>
                                        <div class="form-group" style="text-align: center">
                                            <button style="text-align: center;" type="submit"
                                                    class="btn btn-success px-5">OLUŞTUR
                                            </button>
                                        </div>
                                    </div>
                            </div>

                        </form>
                    </div>
                </div>


                <?php
            } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        }
        ?>
    </div>
</div>