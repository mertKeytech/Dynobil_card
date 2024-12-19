<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "list_seller_sms") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">Bayilere SMS Gönderimi</div>
                        <form action="" method="POST">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label>SMS METNİ</label>
                                        <textarea name="sms" required class="form-control" id="sms"
                                                  placeholder="SMS Metnini Giriniz ve Aşağıdaki Listeden Gönderilecek Bayileri Seçiniz"></textarea>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <center>BAYİ LİSTESİ</center>
                                            <div class="icheck-material-warning">
                                                <input type="checkbox" name="AllGroup" id="AllGroup">
                                                <label for="AllGroup">BÜTÜN BAYİLER</label>
                                            </div>
                                        </div>
                                        <script>
                                            $(document).ready(function () {
                                                $("#AllGroup").click(function () {
                                                    $('input:checkbox').not(this).prop('checked', this.checked);
                                                });
                                            });

                                        </script>
                                        <div class="card-body">
                                            <div class="row">
                                                <?php $query = $db->query("SELECT * FROM distributors ORDER BY company_name");
                                                while ($row = $query->fetch_assoc()) {
                                                    if($row["is_active"]==1){
                                                        $status = "<font color='green'>AKTİF</font>";
                                                    } else if($row["is_active"]==2){
                                                        $status = "<font color='red'>PASİF</font>";
                                                    }
                                                    ?>
                                                    <div class="col-md-3 col-lg-3">
                                                        <div class="icheck-material-success">
                                                            <input class="CheckboxGroup" type="checkbox" name="Dist_<?=$row["id"]?>" id="Dist_<?=$row["id"]?>">
                                                            <label for="Dist_<?=$row["id"]?>"><?=$row["company_name"]." - ".$status?></label>
                                                        </div>
                                                    </div>

                                                <?php } ?>
                                            </div>
                                            <script>
                                                $(document).ready(function () {

                                                    $(".CheckboxGroup").click(function () {
                                                        if ($(this).is(":checked")) {
                                                            var isAllChecked = 0;

                                                            $(".CheckboxGroup").each(function () {
                                                                if (!this.checked)
                                                                    isAllChecked = 1;

                                                            });

                                                            if (isAllChecked == 0) {
                                                                $("#AllGroup").prop("checked", true);
                                                            }
                                                        } else {
                                                            $("#AllGroup").prop("checked", false);
                                                        }
                                                    });
                                                });
                                            </script>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br>
                            <div class="form-group" style="text-align: center">
                                <button type="button" onclick="newSMSDistributors()"
                                        class="btn btn-warning px-5">GÖNDER
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <script>
                    function newSMSDistributors(){
                        var checked = [];
                        $("input:checkbox").each(function () {
                            if (this.checked) {
                                checked.push($(this).attr('id'));
                            }
                        });
                        var message = $("#sms").val();
                        //alert(message);
                        if(checked[0]==undefined || message == ""){
                            swal("LÜTFEN","Mesaj Kutusunu Doldurunuz ve Listeden En Az 1 Bayi Seçiniz!","warning");
                        } else {
                            $.post("ajax/newSMSDistributors.php", {
                                message: message,
                                checked: JSON.stringify(checked)

                            }).done(function (data) {
                                if (data == "ok") {
                                    swal({
                                        title: "Başarılı",
                                        text: "SMS Kaydı Oluşturuldu",
                                        icon: "success",
                                        button: "Tamam",
                                    })
                                        .then((willOk) => {
                                                if (willOk) {
                                                    window.location.assign("index.php");
                                                }
                                            }
                                        );
                                } else {
                                    swal("", data, "warning");
                                }
                            });
                        }
                    }
                </script>


            <?php } else {
                echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
            }
        }
        ?>
    </div>
</div>