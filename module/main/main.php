<?php if ($_SESSION["user_group_id"] == 1) { ?>
    <div class="row">
        <div class="col-lg-12">
            <h4>Hızlı Erişim</h4>
            <br/>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header text-uppercase">Müşteri Ara</div>
                <div class="card-body" style="text-align: center">
                    <input type="text" class="form-control" id="searchClient" name="searchClient"
                           onkeyup="returnClientList()"
                           placeholder="Müşteri Adı yada Kart Numarası Giriniz ...(En Az 3 Hane)"><br>
                    <div class="row">
                        <div class="col-lg-1 col-md-1"></div>
                        <div class="col-lg-6 col-md-6" id="ClientsDiv" style="display: none">
                            <select class="form-control single-select" name="clientID" id="clientID"></select>
                        </div>
                        <div class="col-lg-5 col-md-5" style="text-align: center; display: none;" id="SendButton">
                            <button type="submit" value="Single" onclick="SearchClient()"
                                    class="btn btn-warning px-5">DETAY
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <script>
            function returnClientList() {
                var search = $("#searchClient").val();
                if (search.length < 3) {
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

            function SearchClient() {
                var id = $('#clientID option:selected').val();
                if (id != "") {
                    window.location.href = "index.php?module=customer/customer&do=client_detail&id=" + id;
                } else {
                    swal("LÜTFEN", "Listeden Bir Müşteri Seçiniz!", "warning");
                }
            }
        </script>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header text-uppercase">Bayi Ara</div>
                <div class="card-body" style="text-align: center">
                    <input type="text" class="form-control" id="searchDist" name="searchDist" onkeyup="returnDistList()"
                           placeholder="Bayi Adını Giriniz ...(En Az 3 Hane)"><br>
                    <div class="row">
                        <div class="col-lg-1 col-md-1"></div>
                        <div class="col-lg-6 col-md-6" id="DistsDiv" style="display: none">
                            <select class="form-control single-select" name="distID" id="distID"></select>
                        </div>
                        <div class="col-lg-5 col-md-5" style="text-align: center; display: none;" id="SendButtonDist">
                            <button type="submit" value="Single" onclick="SearchDist()"
                                    class="btn btn-warning px-5">DETAY
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            function returnDistList() {
                var search = $("#searchDist").val();
                if (search.length < 3) {
                    $("#DistsDiv").css("display", "none");
                    $("#SendButtonDist").css("display", "none");

                } else {
                    $.post("ajax/returnDistList.php", {
                        value: search
                    }).done(function (data) {
                        $('#distID').html(data);

                    });
                    $("#DistsDiv").css("display", "block");
                    $("#SendButtonDist").css("display", "block");

                }

            }

            function SearchDist() {
                var id = $('#distID option:selected').val();
                if (id != "") {
                    window.location.href = "index.php?module=customer/customer&do=distributor_detail&id=" + id;
                } else {
                    swal("LÜTFEN", "Listeden Bir Bayi Seçiniz!", "warning");
                }
            }
        </script>
    </div><!--End Row-->

    <!--Start Dashboard Content-->
    <h4>Genel Özet</h4>
    <div class="card mt-3">
        <div class="card-content">
            <div class="row row-group m-0">
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="HarcamaAdet">9526 <span class="float-right"><i
                                        class="fa fa-shopping-cart"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Harcama(Adet) <span class="float-right"
                                                                                  id="HarcamaAdetSpan">+4.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i> (Geçen Hafta Bugün)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="HarcamaTRY">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Harcama(TRY) <span class="float-right"
                                                                                 id="HarcamaTRYSpan">+1.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i>(Geçen Hafta Bugün)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="YuklemeTRY">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Yükleme(TRY) <span class="float-right"
                                                                                 id="YuklemeTRYSpan">+1.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i>(Geçen Hafta Bugün)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="YeniMusteri">6200 <span class="float-right"><i
                                        class="fa fa-eye"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Yeni Müşteri <span class="float-right"
                                                                                 id="YeniMusteriSpan">+5.2%<i
                                        class="zmdi zmdi-long-arrow-up"></i>(Geçen Hafta Bugün)</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function () {
            var loop = function () {
                $.ajax({
                    url: "ajax/returnGenelOzet.php",
                    error: function (xhr, status, ex) {
                        alert("error" + xhr.responseText + ex);
                    },
                    success: function (response, status, xhr) {
                        updateView(response);
                        console.log('updated Genel Özet!');
                    }
                });
                setTimeout(loop, 3000);
            }
            var updateView = function (data) {
                var alarm = JSON.parse(data);
                $('#HarcamaAdet').html(alarm["HarcamaAdet"]);
                $('#HarcamaAdetSpan').html(alarm["HarcamaAdetSpan"]);
                $('#HarcamaTRY').html(alarm["HarcamaTRY"]);
                $('#HarcamaTRYSpan').html(alarm["HarcamaTRYSpan"]);
                $('#YuklemeTRY').html(alarm["YuklemeTRY"]);
                $('#YuklemeTRYSpan').html(alarm["YuklemeTRYSpan"]);
                $('#YeniMusteri').html(alarm["YeniMusteri"]);
                $('#YeniMusteriSpan').html(alarm["YeniMusteriSpan"]);
            }
            loop();
        });
    </script>

    <div class="row">
        <div class="col-12 col-lg-7 col-xl-7">
            <div class="card">
                <div class="card-header">Satış / Yükleme - Haftalık Bazda
                    <div class="card-action">
                        <div class="dropdown">
                            <a href="javascript:void();" class="dropdown-toggle dropdown-toggle-nocaret"
                               data-toggle="dropdown">
                                <i class="icon-options"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" onclick="ReturnChartView()"
                                   href="javascript:void();">Yenile</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="list-inline">
                        <li class="list-inline-item"><i class="fa fa-circle mr-2 text-white"></i>Kredi Harcama
                        </li>
                        <li class="list-inline-item"><i class="fa fa-circle mr-2 text-light"></i>Kredi Yükleme
                        </li>
                    </ul>
                    <div class="chart-container-1" id="ChartDiv">
                        <canvas id="ChartView"></canvas>
                    </div>
                </div>


                <div class="row m-0 row-group text-center border-top border-light-3">
                    <div class="col-12 col-lg-6">
                        <div class="p-3">
                            <h5 class="mb-0" id="ChartTotalDeposit">45.87M</h5>
                            <small class="mb-0">Toplam Kredi Yükleme <span id="ChartTotalDepositSpan"> <i
                                            class="fa fa-arrow-up"></i> 2.43% (Geçen Ay)</span>
                            </small>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="p-3">
                            <h5 class="mb-0" id="ChartTotalTransaction">45.87M</h5>
                            <small class="mb-0">Toplam Kredi Harcama <span id="ChartTotalTransactionSpan"> <i
                                            class="fa fa-arrow-up"></i> 2.43% (Geçen Ay)</span>
                            </small>
                        </div>
                    </div>
                </div>
                <script>
                    function ReturnChartView() {
                        "use strict";
                        $.post("ajax/returnChartView.php", {}).done(function (data) {
                            var alarm = JSON.parse(data);
                            $('#ChartView').remove();
                            $('#ChartDiv').append('<canvas id="ChartView"></canvas>');
                            var ctx = document.getElementById('ChartView').getContext('2d');
                            var settingsChart = {
                                type: 'line',
                                data: {
                                    labels: [],
                                    datasets: [{
                                        label: 'Harcama',
                                        data: [],
                                        backgroundColor: '#fff',
                                        borderColor: "transparent",
                                        pointRadius: "0",
                                        borderWidth: 3
                                    }, {
                                        label: 'Yükleme',
                                        data: [],
                                        backgroundColor: "rgba(255, 255, 255, 0.25)",
                                        borderColor: "transparent",
                                        pointRadius: "0",
                                        borderWidth: 1
                                    }]
                                },
                                options: {
                                    maintainAspectRatio: false,
                                    legend: {
                                        display: false,
                                        labels: {
                                            fontColor: '#ddd',
                                            boxWidth: 40
                                        }
                                    },
                                    tooltips: {
                                        displayColors: false
                                    },
                                    scales: {
                                        xAxes: [{
                                            ticks: {
                                                beginAtZero: true,
                                                fontColor: '#ddd'
                                            },
                                            gridLines: {
                                                display: true,
                                                color: "rgba(221, 221, 221, 0.08)"
                                            },
                                        }],
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true,
                                                fontColor: '#ddd'
                                            },
                                            gridLines: {
                                                display: true,
                                                color: "rgba(221, 221, 221, 0.08)"
                                            },
                                        }]
                                    }

                                }
                            };
                            for (var i = 0; i < 11; i++) {
                                settingsChart["data"]["labels"][i] = alarm["Labels"][i];
                                settingsChart['data']['datasets'][0]['data'][i] = alarm["Data0"][i];
                                settingsChart['data']['datasets'][1]['data'][i] = alarm["Data1"][i];
                            }
                            var myChart = new Chart(ctx, settingsChart);

                            $('#ChartTotalDeposit').html(alarm["ChartTotalDeposit"]);
                            $('#ChartTotalDepositSpan').html(alarm["ChartTotalDepositSpan"]);
                            $('#ChartTotalTransaction').html(alarm["ChartTotalTransaction"]);
                            $('#ChartTotalTransactionSpan').html(alarm["ChartTotalTransactionSpan"]);

                        });
                    }

                    ReturnChartView();


                </script>

            </div>
        </div>

        <div class="col-12 col-lg-5 col-xl-5">
            <div class="card">
                <div class="card-header">Bayi Bazında Kredi Harcama (Bugün)
                    <div class="card-action">
                        <div class="dropdown">
                            <a href="javascript:void();" class="dropdown-toggle dropdown-toggle-nocaret"
                               data-toggle="dropdown">
                                <i class="icon-options"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" onclick="ReturnChartViewDaire()" href="javascript:void();">Yenile</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="chart-container-2" id="ChartDivDaire">
                        <canvas id="ChartViewDaire"></canvas>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table align-items-center">
                        <tbody>
                        <tr id="ChartViewDaire1">
                            <td><i class="fa fa-circle text-white mr-2"></i>Ankara-1</td>
                            <td>‎₺5856</td>
                            <td>+25% (Geçen Hafta Bugün)</td>
                        </tr>
                        <tr id="ChartViewDaire2">
                            <td><i class="fa fa-circle text-light-1 mr-2"></i>İstanbul-1</td>
                            <td>‎₺2602</td>
                            <td>+25%</td>
                        </tr>
                        <tr id="ChartViewDaire3">
                            <td><i class="fa fa-circle text-light-2 mr-2"></i>İstanbul-2</td>
                            <td>‎₺1802</td>
                            <td>+15%</td>
                        </tr>
                        <tr id="ChartViewDaire4">
                            <td><i class="fa fa-circle text-light-3 mr-2"></i>Diğerleri</td>
                            <td>‎₺1105</td>
                            <td>+5%</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div><!--End Row-->
    <script>
        function ReturnChartViewDaire() {
            "use strict";
            $.post("ajax/returnChartViewDaire.php", {}).done(function (data) {
                var alarm = JSON.parse(data);
                $('#ChartViewDaire').remove();
                $('#ChartDivDaire').append('<canvas id="ChartViewDaire"></canvas>');
                var ctx = document.getElementById("ChartViewDaire").getContext('2d');
                var settingsChart = {
                    type: 'doughnut',
                    data: {
                        labels: [],
                        datasets: [{
                            backgroundColor: [
                                "#ffffff",
                                "rgba(255, 255, 255, 0.70)",
                                "rgba(255, 255, 255, 0.50)",
                                "rgba(255, 255, 255, 0.20)"
                            ],
                            data: [],
                            borderWidth: [0, 0, 0, 0]
                        }]
                    },
                    options: {
                        maintainAspectRatio: false,
                        legend: {
                            position: "bottom",
                            display: false,
                            labels: {
                                fontColor: '#ddd',
                                boxWidth: 15
                            }
                        }
                        ,
                        tooltips: {
                            displayColors: false
                        }
                    }
                };

                for (var i = 0; i < 4; i++) {
                    settingsChart["data"]["labels"][i] = alarm["Labels"][i];
                    settingsChart['data']['datasets'][0]['data'][i] = alarm["Data"][i];
                    $('#ChartViewDaire' + (i + 1)).html(alarm["Div"][i]);
                }
                var myChart = new Chart(ctx, settingsChart);


            });
        }

        ReturnChartViewDaire();


    </script>

    <h4>Kredi Harcama Özeti</h4>
    <div class="card mt-3">
        <div class="card-content">
            <div class="row row-group m-0">
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KHO1">9526 <span class="float-right"><i
                                        class="fa fa-shopping-cart"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Bugün (Adet) <span class="float-right" id="KHOS1">+4.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i> (Geçen Hafta Bugün)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KHO2">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Haftalık <span class="float-right" id="KHOS2">+1.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i>(Geçen Hafta)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KHO3">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Aylık <span class="float-right" id="KHOS3">+1.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i>(Geçen Ay)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KHO4">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Toplam</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h4>Kredi Yükleme Özeti</h4>
    <div class="card mt-3">
        <div class="card-content">
            <div class="row row-group m-0">
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KYO1">9526 <span class="float-right"><i
                                        class="fa fa-shopping-cart"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Bugün (Adet) <span class="float-right" id="KYOS1">+4.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i> (Geçen Hafta Bugün)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KYO2">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Haftalık <span class="float-right" id="KYOS2">+1.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i>(Geçen Hafta)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KYO3">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Aylık <span class="float-right" id="KYOS3">+1.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i>(Geçen Ay)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KYO4">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Toplam</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function () {
            var loop = function () {
                $.ajax({
                    url: "ajax/returnHarcamaYukleme.php",
                    error: function (xhr, status, ex) {
                        alert("error" + xhr.responseText + ex);
                    },
                    success: function (response, status, xhr) {
                        updateKHY(response);
                        console.log('updated Genel Özet!');
                    }
                });
                setTimeout(loop, 3000);
            }
            var updateKHY = function (data) {
                var alarm = JSON.parse(data);
                for (var i = 0; i < 4; i++) {
                    $('#KHO' + (i + 1)).html(alarm["KHO"][i]);
                    $('#KYO' + (i + 1)).html(alarm["KYO"][i]);
                }
                for (var i = 0; i < 3; i++) {
                    $('#KHOS' + (i + 1)).html(alarm["KHOS"][i]);
                    $('#KYOS' + (i + 1)).html(alarm["KYOS"][i]);
                }
            }
            loop();
        });
    </script>


    <div class="row">
        <div class="col-12 col-lg-6 col-xl-6">
            <div class="card">
                <div class="card-body">
                    <div class="media align-items-center">
                        <div class="media-body">
                            <h5 class="mb-0 text-white" id="DynobilCartSahipleri">7543</h5>
                            <p class="mb-0 text-white">Dynobil Kart Sahipleri</p>
                        </div>
                        <div class="w-icon"><i class="zmdi zmdi-accounts-alt text-white"></i></div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <div class="media align-items-center">
                        <div class="media-body">
                            <h5 class="mb-0 text-white" id="DynobilBayiler">7543</h5>
                            <p class="mb-0 text-white">Dynobil Bayileri</p>
                        </div>
                        <div class="w-icon"><i class="zmdi zmdi-eye text-white"></i></div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <div class="media align-items-center">
                        <div class="media-body">
                            <h5 class="mb-0 text-white" id="DynobilCartHarcamaAdet">7543</h5>
                            <p class="mb-0 text-white">Dynobil Kart Harcama Adet</p>
                        </div>
                        <div class="w-icon"><i class="zmdi zmdi-shopping-cart text-white"></i></div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <div class="media align-items-center">
                        <div class="media-body">
                            <h5 class="mb-0 text-white" id="ExpertizRaporuBekleyen">7543</h5>
                            <p class="mb-0 text-white">Ekspertiz Raporu Bekleyen</p>
                        </div>
                        <div class="w-icon"><i class="zmdi zmdi-alarm-check text-white"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            $(document).ready(function () {
                var loop = function () {
                    $.ajax({
                        url: "ajax/returnGenelOzet-2.php",
                        error: function (xhr, status, ex) {
                            alert("error" + xhr.responseText + ex);
                        },
                        success: function (response, status, xhr) {
                            updateWidget(response);
                            console.log('updated Genel Özet!');
                        }
                    });
                    setTimeout(loop, 3000);
                }
                var updateWidget = function (data) {
                    var alarm = JSON.parse(data);
                    $('#DynobilCartSahipleri').html(alarm["DynobilCartSahipleri"]);
                    $('#DynobilBayiler').html(alarm["DynobilBayiler"]);
                    $('#DynobilCartHarcamaAdet').html(alarm["DynobilCartHarcamaAdet"]);
                    $('#ExpertizRaporuBekleyen').html(alarm["ExpertizRaporuBekleyen"]);
                }
                loop();
            });
        </script>

        <div class="col-12 col-lg-6 col-xl-6">
            <div class="card">
                <div class="card-header">Ekspertiz Raporları
                    <div class="card-action">
                        <div class="dropdown">
                            <a href="javascript:void(0)" class="dropdown-toggle dropdown-toggle-nocaret"
                               data-toggle="dropdown">
                                <i class="icon-options"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" onclick="returnExpertiseList()" href="javascript:void();">Yenile</a>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="list-group list-group-flush" id="ExpertiseList">

                </ul>
            </div>
        </div>
    </div><!--End Row-->
    <script>
        function returnExpertiseList() {
            $.post("ajax/returnExpertiseList.php", {}).done(function (data) {
                $('#ExpertiseList').empty();
                var alarm = JSON.parse(data);
                for (var i = 0; i < 6; i++) {
                    $('#ExpertiseList').append(alarm["Report"][i]);
                }

            });
        }

        returnExpertiseList();
    </script>
<?php } else if ($_SESSION["user_group_id"] == 2) { ?>
    <div class="row">
        <div class="col-lg-12">
            <h4>Hızlı Erişim</h4>
            <br/>
        </div>
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header text-uppercase">Müşteri Ara</div>
                <div class="card-body" style="text-align: center">
                    <input type="text" class="form-control" id="searchClient" name="searchClient"
                           onkeyup="returnClientList()"
                           placeholder="Müşteri Adı yada Kart Numarası Giriniz ...(En Az 3 Hane)"><br>
                    <div class="row">
                        <div class="col-lg-1 col-md-1"></div>
                        <div class="col-lg-6 col-md-6" id="ClientsDiv" style="display: none">
                            <select class="form-control single-select" name="clientID" id="clientID"></select>
                        </div>
                        <div class="col-lg-5 col-md-5" style="text-align: center; display: none;" id="SendButton">
                            <button type="submit" value="Single" onclick="SearchClient()"
                                    class="btn btn-warning px-5">DETAY
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div><!--End Row-->
    <script>
        function returnClientList() {
            var search = $("#searchClient").val();
            if (search.length < 3) {
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

        function SearchClient() {
            var id = $('#clientID option:selected').val();
            if (id != "") {
                window.location.href = "index.php?module=customer/customer&do=client_detail&id=" + id;
            } else {
                swal("LÜTFEN", "Listeden Bir Müşteri Seçiniz!", "warning");
            }
        }
    </script>

    <!--Start Dashboard Content-->
    <h4>Genel Özet</h4>
    <div class="card mt-3">
        <div class="card-content">
            <div class="row row-group m-0">
                <div class="col-12 col-lg-6 col-xl-6 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="HarcamaAdetBayi">9526 <span class="float-right"><i
                                        class="fa fa-shopping-cart"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Harcama(Adet) <span class="float-right"
                                                                                  id="HarcamaAdetBayiSpan">+4.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i> (Geçen Hafta Bugün)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-6 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="HarcamaTRYBayi">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Harcama(TRY) <span class="float-right"
                                                                                 id="HarcamaTRYBayiSpan">+1.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i>(Geçen Hafta Bugün)</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function () {
            var loop = function () {
                $.ajax({
                    url: "ajax/returnGenelOzetBayi.php",
                    error: function (xhr, status, ex) {
                        alert("error" + xhr.responseText + ex);
                    },
                    success: function (response, status, xhr) {
                        updateViewBayi(response);
                        console.log('updated Genel Özet!');
                    }
                });
                setTimeout(loop, 3000);
            }
            var updateViewBayi = function (data) {
                var alarm = JSON.parse(data);
                $('#HarcamaAdetBayi').html(alarm["HarcamaAdet"]);
                $('#HarcamaAdetBayiSpan').html(alarm["HarcamaAdetSpan"]);
                $('#HarcamaTRYBayi').html(alarm["HarcamaTRY"]);
                $('#HarcamaTRYBayiSpan').html(alarm["HarcamaTRYSpan"]);
            }
            loop();
        });
    </script>

    <div class="row">
        <div class="col-12 col-lg-12 col-xl-12">
            <div class="card">
                <div class="card-header">Satış - Haftalık Bazda
                    <div class="card-action">
                        <div class="dropdown">
                            <a href="javascript:void();" class="dropdown-toggle dropdown-toggle-nocaret"
                               data-toggle="dropdown">
                                <i class="icon-options"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" onclick="ReturnChartViewBayi()" href="javascript:void(0);">Yenile</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="list-inline">
                        <li class="list-inline-item"><i class="fa fa-circle mr-2 text-white"></i>Kredi Harcama</li>
                    </ul>
                    <div class="chart-container-1" id="ChartDivBayi">
                        <canvas id="ChartViewBayi"></canvas>
                    </div>
                </div>

                <div class="row m-0 row-group text-center border-top border-light-3">
                    <div class="col-12 col-lg-12">
                        <div class="p-3">
                            <h5 class="mb-0" id="ChartTotalTransactionBayi">45.87M</h5>
                            <small class="mb-0">Toplam Kredi Harcama <span id="ChartTotalTransactionBayiSpan"> <i
                                            class="fa fa-arrow-up"></i> 2.43% (Geçen Ay)</span>
                            </small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div><!--End Row-->
    <script>
        function ReturnChartViewBayi() {
            "use strict";
            $.post("ajax/returnChartViewBayi.php", {}).done(function (data) {
                var alarm = JSON.parse(data);
                $('#ChartViewBayi').remove();
                $('#ChartDivBayi').append('<canvas id="ChartViewBayi"></canvas>');
                var ctx = document.getElementById('ChartViewBayi').getContext('2d');
                var settingsChart = {
                    type: 'line',
                    data: {
                        labels: [],
                        datasets: [{
                            label: 'Harcama',
                            data: [],
                            backgroundColor: '#fff',
                            borderColor: "transparent",
                            pointRadius: "0",
                            borderWidth: 3
                        }]
                    },
                    options: {
                        maintainAspectRatio: false,
                        legend: {
                            display: false,
                            labels: {
                                fontColor: '#ddd',
                                boxWidth: 40
                            }
                        },
                        tooltips: {
                            displayColors: false
                        },
                        scales: {
                            xAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: '#ddd'
                                },
                                gridLines: {
                                    display: true,
                                    color: "rgba(221, 221, 221, 0.08)"
                                },
                            }],
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: '#ddd'
                                },
                                gridLines: {
                                    display: true,
                                    color: "rgba(221, 221, 221, 0.08)"
                                },
                            }]
                        }

                    }
                };
                for (var i = 0; i < 11; i++) {
                    settingsChart["data"]["labels"][i] = alarm["Labels"][i];
                    settingsChart['data']['datasets'][0]['data'][i] = alarm["Data0"][i];
                }
                var myChart = new Chart(ctx, settingsChart);

                $('#ChartTotalTransactionBayi').html(alarm["ChartTotalTransaction"]);
                $('#ChartTotalTransactionBayiSpan').html(alarm["ChartTotalTransactionSpan"]);

            });
        }

        ReturnChartViewBayi();


    </script>

    <h4>Kredi Harcama Özeti</h4>
    <div class="card mt-3">
        <div class="card-content">
            <div class="row row-group m-0">
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KHOB1">9526 <span class="float-right"><i
                                        class="fa fa-shopping-cart"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Bugün (Adet) <span class="float-right"
                                                                                 id="KHOBS1">+4.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i> (Geçen Hafta Bugün)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KHOB2">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Haftalık <span class="float-right" id="KHOBS2">+1.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i>(Geçen Hafta)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KHOB3">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Aylık <span class="float-right" id="KHOBS3">+1.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i>(Geçen Ay)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KHOB4">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Toplam</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function () {
            var loop = function () {
                $.ajax({
                    url: "ajax/returnHarcamaYuklemeBayi.php",
                    error: function (xhr, status, ex) {
                        alert("error" + xhr.responseText + ex);
                    },
                    success: function (response, status, xhr) {
                        updateKHYB(response);
                        console.log('updated Genel Özet!');
                    }
                });
                setTimeout(loop, 3000);
            }
            var updateKHYB = function (data) {
                var alarm = JSON.parse(data);
                for (var i = 0; i < 4; i++) {
                    $('#KHOB' + (i + 1)).html(alarm["KHO"][i]);
                }
                for (var i = 0; i < 3; i++) {
                    $('#KHOBS' + (i + 1)).html(alarm["KHOS"][i]);
                }
            }
            loop();
        });
    </script>
    <div class="row">
        <div class="col-12 col-lg-12 col-xl-12">
            <div class="card">
                <div class="card-header">Ekspertiz Raporları (Son 20)
                    <div class="card-action">
                        <div class="dropdown">
                            <a href="javascript:void();" class="dropdown-toggle dropdown-toggle-nocaret"
                               data-toggle="dropdown">
                                <i class="icon-options"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" onclick="returnExpertiseListBayi()" href="javascript:void(0);">Yenile</a>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="list-group list-group-flush" id="ExpertiseListBayi">

                </ul>
                <script>
                    function returnExpertiseListBayi() {

                        $.post("ajax/returnExpertiseListBayi.php", {}).done(function (data) {
                            $('#ExpertiseListBayi').empty();
                            var alarm = JSON.parse(data);
                            for (var i = 0; i < 20; i++) {
                                $('#ExpertiseListBayi').append(alarm["Report"][i]);
                            }
                        });
                    }

                    returnExpertiseListBayi();
                </script>
            </div>
        </div>
    </div><!--End Row-->
<?php } else if ($_SESSION["user_group_id"] == 3) { ?>

<?php


    if(isset($_POST["is_contract_agreement"]) && is_numeric($_POST["is_contract_agreement"])) {
        $db->query("UPDATE clients SET is_contract_agreement='".$_POST["is_contract_agreement"]."' WHERE id='".$_SESSION["client_id"]."'");
    }

    $ReadUserAgreement = $db->query("SELECT * FROM clients WHERE id='".$_SESSION["client_id"]."'")->fetch_assoc();
    $is_contract_agreement = $ReadUserAgreement["is_contract_agreement"];
    if($is_contract_agreement == 0) {
?>

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

<!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Dynobil Kart Sözleşmesi Onayı</h4>
      </div>
      <div class="modal-body">
        <p>Sayın Müşterimiz, <br />İşleminize devam edebilmek için <b>Dynobil Kart Sözleşmesini</b> onaylamak zorundasınız.<br />
            Sözleşmeyiyi okumak için <a style="color:green;" target="_blank" href="Dynobil_Card_Sozlemesi.pdf">tıklayın.</a><br />
            <br />
            <br />
            <br />
            <h4>Sözleşme Onayı</h4>
            <form method="post" action="">
                <input type="checkbox" name="is_contract_agreement" value="1"/> Sözleşmeyi Okudum Onaylıyorum
                <br />
                <br />
                <input type="submit" value="Onaylıyorum">
            </form>
            </p>
      </div>
    </div>

  </div>
</div>
<script>
    $('#myModal').modal({backdrop: 'static', keyboard: false})  
</script>
<?php
    } else {
        //
    }
  
    
?>
    <h4>Kredi Yükleme Özeti</h4>
    <div class="card mt-2">
        <div class="card-content">
            <div class="row row-group m-0">
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KYOM1">9526 <span class="float-right"><i
                                        class="fa fa-shopping-cart"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Bugün (Adet) <span class="float-right"
                                                                                 id="KYOMS1">+4.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i> (Geçen Hafta Bugün)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KYOM2">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Haftalık <span class="float-right" id="KYOMS2">+1.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i>(Geçen Hafta)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KYOM3">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Aylık <span class="float-right" id="KYOMS3">+1.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i>(Geçen Ay)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KYOM4">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Toplam</p>
                    </div>
                </div>
                <br><br>
                <?php $SelectQuery = $db->query("SELECT * FROM clients WHERE id='".$_SESSION["client_id"]."'")->fetch_assoc(); ?>
                <div class="col-12 col-lg-6 col-xl-12 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KYOM4"><?=$SelectQuery["credit"]." Kredi"?> <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">BAKİYE - KREDİ</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h4>Kredi Harcama Özeti</h4>
    <div class="card mt-3">
        <div class="card-content">
            <div class="row row-group m-0">
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KHOM1">9526 <span class="float-right"><i
                                        class="fa fa-shopping-cart"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Bugün (Adet) <span class="float-right"
                                                                                 id="KHOMS1">+4.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i> (Geçen Hafta Bugün)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KHOM2">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Haftalık <span class="float-right" id="KHOMS2">+1.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i>(Geçen Hafta)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KHOM3">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Aylık <span class="float-right" id="KHOMS3">+1.2% <i
                                        class="zmdi zmdi-long-arrow-up"></i>(Geçen Ay)</span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-3 border-light">
                    <div class="card-body">
                        <h5 class="text-white mb-0" id="KHOM4">8323 <span class="float-right"><i
                                        class="fa fa-try"></i></span></h5>
                        <div class="progress my-3" style="height:3px;">
                            <div class="progress-bar" style="width:55%"></div>
                        </div>
                        <p class="mb-0 text-white small-font">Toplam</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function () {
            var loop = function () {
                $.ajax({
                    url: "ajax/returnHarcamaYuklemeMusteri.php",
                    error: function (xhr, status, ex) {
                        alert("error" + xhr.responseText + ex);
                    },
                    success: function (response, status, xhr) {
                        updateKHYM(response);
                        console.log('updated Genel Özet!');
                    }
                });
                setTimeout(loop, 10000);
            }
            var updateKHYM = function (data) {
                var alarm = JSON.parse(data);
                for (var i = 0; i < 4; i++) {
                    $('#KHOM' + (i + 1)).html(alarm["KHO"][i]);
                    $('#KYOM' + (i + 1)).html(alarm["KYO"][i]);
                }
                for (var i = 0; i < 3; i++) {
                    $('#KHOMS' + (i + 1)).html(alarm["KHOS"][i]);
                    $('#KYOMS' + (i + 1)).html(alarm["KYOS"][i]);
                }
            }
            loop();
        });
    </script>
    <div class="row">
        <div class="col-12 col-lg-12 col-xl-12">
            <div class="card">
                <div class="card-header">Ekspertiz Raporları (Son 20)
                    <div class="card-action">
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle dropdown-toggle-nocaret"
                               data-toggle="dropdown">
                                <i class="icon-options"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" onclick="returnExpertiseListMusteri()"
                                   href="javascript:void(0);">Yenile</a>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="list-group list-group-flush" id="ExpertiseListMusteri">

                </ul>
                <script>
                    function returnExpertiseListMusteri() {

                        $.post("ajax/returnExpertiseListMusteri.php", {}).done(function (data) {
                            $('#ExpertiseListMusteri').empty();
                            var alarm = JSON.parse(data);
                            for (var i = 0; i < 20; i++) {
                                $('#ExpertiseListMusteri').append(alarm["Report"][i]);
                            }
                        });
                    }

                    returnExpertiseListMusteri();
                </script>
            </div>
        </div>
    </div><!--End Row-->
<?php } ?>
<script src="assets/plugins/Chart.js/Chart.min.js"></script>
<script src="assets/js/index.js"></script>