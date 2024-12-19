<?php
	date_default_timezone_set("Europe/Istanbul");
	ob_start();
	session_start();
	include_once("system/database.php");
	include_once("system/functions.php");
	include_once("system/user_control.php");
	require_once("system/configuration.php");
?>
<!DOCTYPE html>
<html lang="en">
	
	<head>
		<meta charset="utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
		<meta name="description" content=""/>
		<meta name="author" content=""/>
		<title><?= $Configuration["IndexHeader"] ?></title>
		<link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">
		<!-- Vector CSS -->
		<link href="assets/plugins/vectormap/jquery-jvectormap-2.0.2.css" rel="stylesheet"/>
		<!-- simplebar CSS-->
		<link href="assets/plugins/simplebar/css/simplebar.css" rel="stylesheet"/>
		<!-- Bootstrap core CSS-->
		<link href="assets/css/bootstrap.min.css" rel="stylesheet"/>
		<!-- animate CSS-->
		<link href="assets/css/animate.css" rel="stylesheet" type="text/css"/>
		<!-- Icons CSS-->
		<link href="assets/css/icons.css" rel="stylesheet" type="text/css"/>
		<!-- Sidebar CSS-->
		<link href="assets/css/sidebar-menu.css" rel="stylesheet"/>
		<!-- Custom Style-->
		<link href="assets/css/app-style.css" rel="stylesheet"/>
		<link href="assets/plugins/bootstrap-datatable/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css">
		<link href="assets/plugins/bootstrap-datatable/css/buttons.bootstrap4.min.css" rel="stylesheet" type="text/css">
		<link href="assets/plugins/select2/css/select2.min.css" rel="stylesheet"/>
		<link href="assets/plugins/inputtags/css/bootstrap-tagsinput.css" rel="stylesheet" />
		<link href="assets/plugins/jquery-multi-select/multi-select.css" rel="stylesheet" type="text/css">
		<link href="assets/css/jquery.datetimepicker.css" rel="stylesheet" type="text/css"/>
		<!--Full Calendar Css-->
		<link href="assets/plugins/fullcalendar/css/fullcalendar.min.css" rel='stylesheet'/>
		
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/table2excel.js"></script>
		<script src="assets/js/popper.min.js"></script>
		<script src="assets/js/bootstrap.min.js"></script>
		
		<!-- simplebar js -->
		<script src="assets/plugins/simplebar/js/simplebar.js"></script>
		<!-- sidebar-menu js -->
		<script src="assets/js/sidebar-menu.js"></script>
		<!-- loader scripts -->
		<script src="assets/js/jquery.loading-indicator.html"></script>
		<!-- Custom scripts -->
		<script src="assets/js/app-script.js"></script>
		
		<!--Data Tables js-->
		<script src="assets/plugins/bootstrap-datatable/js/jquery.dataTables.min.js"></script>
		<script src="assets/plugins/bootstrap-datatable/js/dataTables.bootstrap4.min.js"></script>
		<script src="assets/plugins/bootstrap-datatable/js/dataTables.buttons.min.js"></script>
		<script src="assets/plugins/bootstrap-datatable/js/buttons.bootstrap4.min.js"></script>
		<script src="assets/plugins/bootstrap-datatable/js/jszip.min.js"></script>
		<script src="assets/plugins/bootstrap-datatable/js/pdfmake.min.js"></script>
		<script src="assets/plugins/bootstrap-datatable/js/vfs_fonts.js"></script>
		<script src="assets/plugins/bootstrap-datatable/js/buttons.html5.min.js"></script>
		<script src="assets/plugins/bootstrap-datatable/js/buttons.print.min.js"></script>
		<script src="assets/plugins/bootstrap-datatable/js/buttons.colVis.min.js"></script>
		<script src="assets/plugins/bootstrap-touchspin/js/jquery.bootstrap-touchspin.js"></script>
		<script src="assets/plugins/bootstrap-touchspin/js/bootstrap-touchspin-script.js"></script>
		<!-- Chart js -->
		
		
		<!-- Vector map JavaScript -->
		<script src="assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js"></script>
		<script src="assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js"></script>
		<!-- Easy Pie Chart JS -->
		<script src="assets/plugins/jquery.easy-pie-chart/jquery.easypiechart.min.js"></script>
		<!-- Sparkline JS -->
		<script src="assets/plugins/sparkline-charts/jquery.sparkline.min.js"></script>
		<script src="assets/plugins/jquery-knob/excanvas.js"></script>
		<script src="assets/plugins/jquery-knob/jquery.knob.js"></script>
		
		<!--Sweet Alerts -->
		<script src="assets/plugins/alerts-boxes/js/sweetalert.min.js"></script>
		<script src="assets/plugins/alerts-boxes/js/sweet-alert-script.js"></script>
		<script src="assets/plugins/select2/js/select2.min.js"></script>
		<script src="assets/plugins/inputtags/js/bootstrap-tagsinput.js"></script>
		<script type="text/javascript" src="assets/js/jquery.datetimepicker.full.min.js"></script>
		<script src="assets/plugins/apexcharts/dist/apexcharts.js"></script>
		
		<script src="assets/plugins/jquery-multi-select/jquery.multi-select.js"></script>
		<script src="assets/plugins/jquery-multi-select/jquery.quicksearch.js"></script>
		
		<script src='assets/plugins/fullcalendar/js/moment.min.js'></script>
		<script src='assets/plugins/fullcalendar/js/fullcalendar.min.js'></script>
		
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDKXKdHQdtqgPVl2HI2RnUa_1bjCxRCQo4&amp;callback=initMap"
		async defer></script>
		
		
		<script>
			$(document).ready(function() {
				$('.single-select').select2();
				$('.multiple-select').select2();
			});
			$(function() {
				$(".knob").knob();
			});
		</script>
		
		<!-- Index js -->
		
		
	</head>
	<body class="bg-theme bg-theme9">
		<!-- start loader -->
		<div id="pageloader-overlay" class="visible incoming">
			<div class="loader-wrapper-outer">
				<div class="loader-wrapper-inner">
					<div class="loader"></div>
				</div>
			</div>
		</div>
		<!-- end loader -->
		<div id="wrapper">
			<?php require_once("system/menu.php") ?>
			<?php require_once("header.php") ?>
			<div class="clearfix"></div>
			<div class="content-wrapper">
				
				<div class="container-fluid">
					<?php require_once("module/main/breadcumb.php") ?>
					<?php require_once("module.php") ?>
				</div>
			</div>
			<!--Start Back To Top Button-->
			<a href="javaScript:void(0);" class="back-to-top"><i class="fa fa-angle-double-up"></i> </a>
			<!--End Back To Top Button-->
		</div>
		
		
		
		
	</body>
	
</html>
<script>
    $(document).ready(function () {
        //Default data table
		$('#default-datatable').DataTable({
			"language": {
				"url": "assets/js/tr.json"
			},
			dom: 'Bfrtip',
			buttons: [
			'excel'
			]
		});
        $('#default-datatable2').DataTable({
            "language":{
                "url":"assets/js/tr.json"
			}
		});
        $('#default-datatable3').DataTable({
            "language":{
                "url":"assets/js/tr.json"
			}
		});
        $('#default-datatable4').DataTable({
            "language":{
                "url":"assets/js/tr.json"
			}
		});
		
        $('#DepositDataTable').DataTable( {
            "language":{
                "url":"assets/js/tr.json"
			}
		});
		
        $('#GeneralTransactionsDataTable').DataTable( {
            "language":{
                "url":"assets/js/tr.json"
			}
		});
		
	});
	
</script>
<script>
    $(document).ready(function() {
        $('.single-select').select2();
		
        $('.multiple-select').select2();
		
        //multiselect start
		
        $('#my_multi_select1').multiSelect();
        $('#my_multi_select2').multiSelect({
            selectableOptgroup: true
		});
		
        $('#my_multi_select3').multiSelect({
            selectableHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='Arama Kutusu '>",
            selectionHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='Arama Kutusu'>",
            afterInit: function (ms) {
                var that = this,
                $selectableSearch = that.$selectableUl.prev(),
                $selectionSearch = that.$selectionUl.prev(),
                selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';
				
                that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
                .on('keydown', function (e) {
                    if (e.which === 40) {
                        that.$selectableUl.focus();
                        return false;
					}
				});
				
                that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
                .on('keydown', function (e) {
                    if (e.which == 40) {
                        that.$selectionUl.focus();
                        return false;
					}
				});
			},
            afterSelect: function () {
                this.qs1.cache();
                this.qs2.cache();
			},
            afterDeselect: function () {
                this.qs1.cache();
                this.qs2.cache();
			}
		});
		
        $('.custom-header').multiSelect({
            selectableHeader: "<div class='custom-header'>Selectable items</div>",
            selectionHeader: "<div class='custom-header'>Selection items</div>",
            selectableFooter: "<div class='custom-header'>Selectable footer</div>",
            selectionFooter: "<div class='custom-header'>Selection footer</div>"
		});
		
		
	});
    $.datetimepicker.setLocale('tr');
    $("#StartDate").datetimepicker({
        dateformat: "dd.MM.yy H:i",
        altFormat:"yy-mm-dd",
        dayOfWeekStart: 1
		
	});
    $("#EndDate").datetimepicker({
        dateformat: "dd.MM.yy H:i",
        altFormat:"yy-mm-dd",
        dayOfWeekStart: 1
		
	});
	
	
</script>