
<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "card_delete") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                ?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">Toplu Kart Silme</div>
                        <form action="" method="POST">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <center>KART LİSTESİ</center>
                                            <div class="icheck-material-warning">
                                                <input type="checkbox" name="AllGroup" id="AllGroup">
                                                <label for="AllGroup">BÜTÜN KARTLAR</label>
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
                                                <?php $query = $db->query("SELECT * FROM cards ORDER BY card_status");
                                                while ($row = $query->fetch_assoc()) {
                                                    if($row["card_status"]==0){
                                                        $status = "<font color='green'>MERKEZDE</font>";
                                                    } else if($row["card_status"]==1){
                                                        $status = "<font color='blue'>BAYİDE</font>";
                                                    } else if($row["card_status"]==2){
                                                        $status = "<font color='orange'>MÜŞTERİDE</font>";
                                                    } else if($row["card_status"]==3){
                                                        $status = "<font color='red'>KAYIP / ÇALINTI</font>";
                                                    } else if($row["card_status"]==4){
                                                        $status = "<font color='red'>İPTAL</font>";
                                                    }
                                                    ?>
                                                    <div class="col-md-3 col-lg-3">
                                                        <div class="icheck-material-success">
                                                            <input class="CheckboxGroup" type="checkbox" name="Card_<?=$row["id"]?>" id="Card_<?=$row["id"]?>">
                                                            <label for="Card_<?=$row["id"]?>"><?=CardNumberMask($row["card_number"])." - ".$status?></label>
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
                                <button type="button" onclick="newCardDelete()"
                                        class="btn btn-warning px-5">SİL
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <script>
                    function newCardDelete(){
                        var checked = [];
                        $("input:checkbox").each(function () {
                            if (this.checked) {
                                checked.push($(this).attr('id'));
                            }
                        });
                        //alert(message);
                        if(checked[0]==undefined){
                            swal("LÜTFEN","Listeden Silinecek En Az 1 Kart Seçiniz!","warning");
                        } else {
                            $.post("ajax/newCardDelete.php", {
                                checked: JSON.stringify(checked)
                            }).done(function (data) {
                                if (data == "ok") {
                                    swal({
                                        title: "Başarılı",
                                        text: "Seçili Kartlar Silindi!",
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