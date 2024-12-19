<div class="row">
	<div class="col col-lg-12 col-xl-12">
		<?php
		if (@$_GET['do'] == "upload_expertise") {
			if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                // TODO : DÜZENLE
				?>
				<div class="card">
					<div class="card-body">
						<div class="card-title">Filtreleme</div>
						<form method="GET" class="form-horizontal row-border" action="#">
							<input type="hidden" name="module" value="sales/upload_expertise"/>
							<input type="hidden" name="do" value="upload_expertise"/>
							<div class="row">
								<div class="col-lg-3">
									<div class="form-group">
										<label>Başlangıç Tarihi</label>
										<input type="text" name="StartDate" id="StartDate" class="form-control"
										autocomplete="off">
									</div>
								</div>
								<div class="col-lg-3">
									<div class="form-group">
										<label>Bitiş Tarihi</label>
										<input type="text" name="EndDate" id="EndDate" class="form-control"
										autocomplete="off">
									</div>
								</div>
								<div class="col-lg-3">
									<div class="form-group">
										<label>Müşteri</label>
										<select class="form-control single-select" name="client"
										id="client">
										<option disabled selected value>Seçiniz</option>
										<?php $query = $db->query("SELECT * FROM clients");
										while ($row = $query->fetch_assoc()) {
											?>
											<option value="<?= $row["id"] ?>"><?= $row["client_name"] ?></option>
										<?php } ?>
									</select>
								</div>
							</div>

							<div class="col-lg-3">
								<label>&emsp;</label>
								<div class="form-group" style="text-align: center">
									<button style="text-align: center;" type="submit"
									class="btn btn-warning px-5">Filtrele
								</button>
							</div>
						</div>

					</div>

				</form>
			</div>
		</div>
		<div class="card">
			<div class="card-header">
				<div class="row">
					<div class="col-md-6 col-lg-6 col-xl-6">
						<i class="fa fa-table"></i> Dosyasız Satış Listesi
					</div>
				</div>
			</div>
			<div class="card-body">
				<div class="table-responsive">
					<table id="default-datatable" class="table table-bordered">
						<thead>
							<tr>
								<th>İŞLEM TARİHİ</th>
								<th>İŞLEM YAPAN MÜŞTERİ</th>
								<th>PLAKA</th>
								<th>İŞLEM</th>
							</tr>
						</thead>
						<tbody>
							<?php

							$Filter = "transactions.distributor_id = '" . $_SESSION["distributor_id"] . "' and transactions.transaction_status=4";

							if (isset($_GET["client"]) and !empty($_GET["client"])) {
								$Filter .= " and transactions.client_id='" . $_GET["client"] . "'";
							}
							if (isset($_GET["StartDate"]) and !empty($_GET["StartDate"])) {
								$time = strtotime($_GET["StartDate"]);
								$Filter .= " and transactions.unix_time>='" . $time . "'";
							}
							if (isset($_GET["EndDate"]) and !empty($_GET["EndDate"])) {
								$time = strtotime($_GET["EndDate"]);
								$Filter .= " and transactions.unix_time <= '" . $time . "'";
							}

							$Query = $db->query("SELECT *,transactions.id AS ID,reports.id AS ReportID FROM transactions
								LEFT JOIN clients ON clients.id=transactions.client_id 
								LEFT JOIN reports ON transactions.id=reports.transaction_id                                                                                                                   
								WHERE " . $Filter . "");
							while ($row = $Query->fetch_assoc()) {

								?>
								<tr>
									<td><?= date("d-m-Y H:i:s", $row["unix_time"]) ?></td>
									<td><?= $row["client_name"] != "" ? $row["client_name"] : "<font color='red'>Silinmiş</font>"; ?></td>
									<td><?= $row["report_plate"] != "" ? $row["report_plate"] : "<font color='red'>-</font>"; ?></td>
									<td>
										<a href="index.php?module=sales/upload_expertise&do=upload_file_list&id=<?= $row["ID"] ?>">
											<button class="btn btn-success">YÜKLE</button>
										</a>
									</td>
								</tr>
								<?php
							}

							?>

						</tbody>
					</table>
				</div>
			</div>
		</div>


		<?php
	} else {
		echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
	}
} else if (@$_GET['do'] == "upload_file_list") {
	if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
		$Select = $db->query("SELECT * FROM transactions WHERE id='" . $_GET["id"] . "'")->fetch_assoc();
		if ($Select["distributor_id"] != $_SESSION["distributor_id"]) {
			echo error("Size Ait Olmayan Raporu Görüntüleyemezsiniz!");
			exit;
		}

                // TODO : DÜZENLE
		?>
		<div class="card">
			<div class="card-header">
				<div class="row">
					<div class="col-md-6 col-lg-6 col-xl-6">
						<i class="fa fa-table"></i> Dosya Seçimi
					</div>
				</div>
			</div>
			<div class="card-body">
				<div class="table-responsive">
					<table id="default-datatable" class="table table-bordered">
						<thead>
							<tr>
								<th>RAPOR ADI</th>
								<th>DURUMU</th>
								<th>İŞLEM</th>
							</tr>
						</thead>
						<tbody>
							<?php

							$Query = $db->query("SELECT * FROM reports WHERE transaction_id='" . $_GET["id"] . "'")->fetch_assoc();
							?>
							<tr>
								<td>ANASAYFA</td>
								<td><?= $Query["report_file_url"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
								<td><?php if ($Query["report_file_url"] == "") { ?>
									<a href="index.php?module=sales/upload_expertise&do=upload_file&id=<?= $Query["transaction_id"] ?>&name=url">
										<button class="btn btn-success">YÜKLE</button>
									</a>
								<?php } else {
									echo "<a href='" . $Query["report_file_url"] . "' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>"; ?>

									<button type="button"
									class="btn btn-danger waves-effect waves-light m-1"
									title="Sil"
									data-type="confirm"
									data-id="<?= $Query["report_file_url"].","."url,".$Query["transaction_id"] ?>" id="delete_user"><i
									class="fa fa fa-trash-o"></i>
									<span>SİL</span>
								</button>
								
							<?php } ?>
						</td>
					</tr>
					<tr>
						<td>DYNO1</td>
						<td><?= $Query["report_file_dyno1"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
						<td><?php if ($Query["report_file_dyno1"] == "") { ?>
							<a href="index.php?module=sales/upload_expertise&do=upload_file&id=<?= $Query["transaction_id"] ?>&name=dyno1">
								<button class="btn btn-success">YÜKLE</button>
							</a>
						<?php } else {
							echo "<a href='" . $Query["report_file_dyno1"] . "' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>"; ?>

							<button type="button"
							class="btn btn-danger waves-effect waves-light m-1"
							title="Sil"
							data-type="confirm"
							data-id="<?= $Query["report_file_dyno1"].","."dyno1,".$Query["transaction_id"] ?>" id="delete_user"><i
							class="fa fa fa-trash-o"></i>
							<span>SİL</span>
						</button>
						<?php
					} ?>
				</td>
			</tr>
			<tr>
				<td>DYNO2</td>
				<td><?= $Query["report_file_dyno2"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
				<td><?php if ($Query["report_file_dyno2"] == "") { ?>
					<a href="index.php?module=sales/upload_expertise&do=upload_file&id=<?= $Query["transaction_id"] ?>&name=dyno2">
						<button class="btn btn-success">YÜKLE</button>
					</a>
				<?php } else {
					echo "<a href='" . $Query["report_file_dyno2"] . "' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>"; ?>
					<button type="button"
					class="btn btn-danger waves-effect waves-light m-1"
					title="Sil"
					data-type="confirm"
					data-id="<?= $Query["report_file_dyno2"].","."dyno2,".$Query["transaction_id"] ?>" id="delete_user"><i
					class="fa fa fa-trash-o"></i>
					<span>SİL</span>
				</button>

				
				<?php
			} ?>
		</td>
	</tr>
	<tr>
		<td>DYNO3</td>
		<td><?= $Query["report_file_dyno3"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
		<td><?php if ($Query["report_file_dyno3"] == "") { ?>
			<a href="index.php?module=sales/upload_expertise&do=upload_file&id=<?= $Query["transaction_id"] ?>&name=dyno3">
				<button class="btn btn-success">YÜKLE</button>
			</a>
		<?php } else {
			echo "<a href='" . $Query["report_file_dyno3"] . "' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>"; ?>

			<button type="button"
			class="btn btn-danger waves-effect waves-light m-1"
			title="Sil"
			data-type="confirm"
			data-id="<?= $Query["report_file_dyno3"].","."dyno3,".$Query["transaction_id"] ?>" id="delete_user"><i
			class="fa fa fa-trash-o"></i>
			<span>SİL</span>
		</button>

		<?php
	} ?>
</td>
</tr>
<tr>
	<td>SÜSPANSİYON</td>
	<td><?= $Query["report_file_suspansiyon"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
	<td><?php if ($Query["report_file_suspansiyon"] == "") { ?>
		<a href="index.php?module=sales/upload_expertise&do=upload_file&id=<?= $Query["transaction_id"] ?>&name=suspansiyon">
			<button class="btn btn-success">YÜKLE</button>
		</a>
	<?php } else {
		echo "<a href='" . $Query["report_file_suspansiyon"] . "' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>"; ?>

		<button type="button"
		class="btn btn-danger waves-effect waves-light m-1"
		title="Sil"
		data-type="confirm"
		data-id="<?= $Query["report_file_suspansiyon"].","."suspansiyon,".$Query["transaction_id"] ?>" id="delete_user"><i
		class="fa fa fa-trash-o"></i>
		<span>SİL</span>
	</button>
	<?php
} ?>
</td>
</tr>
<tr>
	<td>FREN</td>
	<td><?= $Query["report_file_fren"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
	<td><?php if ($Query["report_file_fren"] == "") { ?>
		<a href="index.php?module=sales/upload_expertise&do=upload_file&id=<?= $Query["transaction_id"] ?>&name=fren">
			<button class="btn btn-success">YÜKLE</button>
		</a>
	<?php } else {
		echo "<a href='" . $Query["report_file_fren"] . "' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>"; ?>

		<button type="button"
		class="btn btn-danger waves-effect waves-light m-1"
		title="Sil"
		data-type="confirm"
		data-id="<?= $Query["report_file_fren"].","."fren,".$Query["transaction_id"] ?>" id="delete_user"><i
		class="fa fa fa-trash-o"></i>
		<span>SİL</span>
	</button>

	<?php
} ?>
</td>
</tr>
<tr>
	<td>YANALKAYMA</td>
	<td><?= $Query["report_file_yanalkayma"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
	<td><?php if ($Query["report_file_yanalkayma"] == "") { ?>
		<a href="index.php?module=sales/upload_expertise&do=upload_file&id=<?= $Query["transaction_id"] ?>&name=yanalkayma">
			<button class="btn btn-success">YÜKLE</button>
		</a>
	<?php } else {
		echo "<a href='" . $Query["report_file_yanalkayma"] . "' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>"; ?>

		<button type="button"
		class="btn btn-danger waves-effect waves-light m-1"
		title="Sil"
		data-type="confirm"
		data-id="<?= $Query["report_file_yanalkayma"].","."yanalkayma,".$Query["transaction_id"] ?>" id="delete_user"><i
		class="fa fa fa-trash-o"></i>
		<span>SİL</span>
	</button>

	<?php
} ?>
</td>
</tr>
<tr>
	<td>KAPORTA</td>
	<td><?= $Query["report_file_kaporta"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
	<td><?php if ($Query["report_file_kaporta"] == "") { ?>
		<a href="index.php?module=sales/upload_expertise&do=upload_file&id=<?= $Query["transaction_id"] ?>&name=kaporta">
			<button class="btn btn-success">YÜKLE</button>
		</a>
	<?php } else {
		echo "<a href='" . $Query["report_file_kaporta"] . "' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>"; ?>

		<button type="button"
		class="btn btn-danger waves-effect waves-light m-1"
		title="Sil"
		data-type="confirm"
		data-id="<?= $Query["report_file_kaporta"].","."kaporta,".$Query["transaction_id"] ?>" id="delete_user"><i
		class="fa fa fa-trash-o"></i>
		<span>SİL</span>
	</button>

	<?php
} ?>
</td>
</tr>
<tr>
	<td>HYB</td>
	<td><?= $Query["report_file_hyb"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
	<td><?php if ($Query["report_file_hyb"] == "") { ?>
		<a href="index.php?module=sales/upload_expertise&do=upload_file&id=<?= $Query["transaction_id"] ?>&name=hyb">
			<button class="btn btn-success">YÜKLE</button>
		</a>
	<?php } else {
		echo "<a href='" . $Query["report_file_hyb"] . "' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>"; ?>

		<button type="button"
		class="btn btn-danger waves-effect waves-light m-1"
		title="Sil"
		data-type="confirm"
		data-id="<?= $Query["report_file_hyb"].","."hyb,".$Query["transaction_id"] ?>" id="delete_user"><i
		class="fa fa fa-trash-o"></i>
		<span>SİL</span>
	</button>
	<?php
} ?>
</td>
</tr>
<tr>
	<td>TSE</td>
	<td><?= $Query["report_file_tse"] != "" ? "<font color='green'>YÜKLENMİŞ</font>" : "<font color='red'>YÜKLENMEMİŞ</font>"; ?></td>
	<td><?php if ($Query["report_file_tse"] == "") { ?>
		<a href="index.php?module=sales/upload_expertise&do=upload_file&id=<?= $Query["transaction_id"] ?>&name=tse">
			<button class="btn btn-success">YÜKLE</button>
		</a>
	<?php } else {
		echo "<a href='" . $Query["report_file_tse"] . "' target='_blank'><button type='button' class='btn btn-info'>RAPORU İNCELE</button></a>"; ?>

		<button type="button"
		class="btn btn-danger waves-effect waves-light m-1"
		title="Sil"
		data-type="confirm"
		data-id="<?= $Query["report_file_tse"].","."tse,".$Query["transaction_id"] ?>" id="delete_user"><i
		class="fa fa fa-trash-o"></i>
		<span>SİL</span>
	</button>
	<?php
} ?>
</td>
</tr>


</tbody>
</table>
</div>
</div>
</div>

<script>
	$(document).on("click", "#delete_user", function () {
		var id = $(this).data('id');
		var str = id.split(",");
		$("#delete_report_url").val(str[0]);
		$("#delete_report_name").val(str[1]);
		$("#delete_report_id").val(str[2]);
		$('#deleteReport').modal('show');
	});
</script>
<!--            Delete Region Modal-->
<div class="modal fade" id="deleteReport">
	<input type="hidden" id="delete_report_url">
	<input type="hidden" id="delete_report_name">
	<input type="hidden" id="delete_report_id">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Rapor Silme Formu</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<p>
					<center>Seçili Rapor Silinecektir!</center>
				</p>
				<p>
					<center>Onaylıyor musunuz?</center>
				</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-white" data-dismiss="modal"><i
					class="fa fa-times"></i>Hayır, Vazgeç
				</button>
				<button type="button" onclick="deleteReportExp()" class="btn btn-primary"><i
					class="fa fa-check-square-o"></i>Evet
				</button>
			</div>
		</div>
	</div>
</div>
<script>
	function deleteReportExp() {
		var url = document.getElementById('delete_report_url').value;
		var name = document.getElementById('delete_report_name').value;
		var id = document.getElementById('delete_report_id').value;

		$.post("ajax/deleteReportExp.php", {
			url: url,
			name: name,
			id: id
		}).done(function (data) {
			if (data == "ok") {
				swal({
					title: "BAŞARILI",
					text: "Rapor Silindi!",
					icon: "success",
					button: "OK",
				})
				.then((willOk) => {
					if (willOk) {
						$("#deleteReport").modal("hide");
						location.reload();
					}
				}
				);

			} else {
				swal("", data, "warning");
			}
		});
	}

</script>


<?php
} else {
	echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
}
} else if (@$_GET['do'] == "upload_file") {
	if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
		$ArrayName = array("url", "dyno1", "dyno2", "dyno3", "suspansiyon", "fren", "yanalkayma", "kaporta", "hyb", "tse");
		if (in_array($_GET["name"], $ArrayName)) {
			$key = array_search($_GET["name"], $ArrayName);
			$ArrayNameReal = array("ANASAYFA", "DYNO1", "DYNO2", "DYNO3", "SÜSPANSİYON", "FREN", "YANALKAYMA", "KAPORTA", "HYB", "TSE");
			$ReportName = $ArrayNameReal[$key];

			$Query = $db->query("SELECT * FROM transactions WHERE id='" . $_GET["id"] . "'")->fetch_assoc();
			$Dist = $db->query("SELECT * FROM distributors WHERE id='" . $Query["distributor_id"] . "'")->fetch_assoc();
			$Client = $db->query("SELECT * FROM clients WHERE id='" . $Query["client_id"] . "'")->fetch_assoc();
			if ($_POST) {
                        //echo $_FILES['Report']['error'];
				if (isset($_FILES['Report']) and $_FILES['Report']['error'] == 0) {
					$QueryReport = $db->query("SELECT * FROM reports WHERE transaction_id='" . $Query["id"] . "'")->fetch_assoc();
					if ($QueryReport["report_file" . $_GET["name"]] == "") {
						$DirStatus = false;
						$_FILES['Report'] = FileTrEn($_FILES['Report']);
						$dizin = 'files/report/';
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
							$yuklenecek_dosya = $dizin . RandomReportName(10)."_".basename($_FILES["Report"]["name"]);

							if (move_uploaded_file($_FILES['Report']['tmp_name'], $yuklenecek_dosya)) {
								$UpdateReport = $db->query("UPDATE reports SET report_file_" . $_GET["name"] . "='" . $yuklenecek_dosya . "' WHERE transaction_id='" . $Query["id"] . "'");

								if ($UpdateReport) {
									echo success("Rapor Başarılı Bir Şekilde Yüklenmiştir.<br>Sayfaya Yönlendiriliyorsunuz!");
									echo redirect("index.php?module=sales/upload_expertise&do=upload_file_list&id=".$_GET["id"], 2000);
								} else {
									echo error("Sistem Hatası!<br>Detay: " . mysqli_error($db));
									unlink($yuklenecek_dosya);
								}
							} else {
								echo error("Dosya Yükleme Hatası!");
							}
						} else {
							echo error("Dosya Yükleme Hatası!<br>Detay : Path Hatalı");
						}

					} else {
						echo warning("Bu Rapor Daha Önceden Eklenmiştir!");
					}
				} else {
					echo error("Dosya Yükleme Hatası!!!");
				}
			}

                    // TODO : DÜZENLE
			?>
			<div class="card">
				<div class="card-body">
					<div class="card-title">Ekspertiz Dosya Yükleme - '<?= $ReportName ?>'</div>
					<form method="POST" enctype="multipart/form-data" class="form-horizontal row-border"
					action="">

					<div class="row">
						<div class="col-lg-12 col-md-12">
							<div class="form-group">
								<label>DOSYA SEÇİNİZ</label>
								<input type="hidden" name="MAX_FILE_SIZE" value="20000000"/>
								<input type="file" accept=".pdf,.png,.jpeg,.jpg" name="Report" id="Report"
								class="form-control"
								required>
							</div>
						</div>
						<div class="col-lg-3">

							<div class="form-group">
								<button style="text-align: center;" type="submit"
								class="btn btn-warning px-5">YÜKLE
							</button>
						</div>
					</div>

				</div>

			</form>
		</div>
	</div>


	<?php

} else {
	echo error("Bilinmeyen Dosya Tipi!");
}
} else {
	echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
}
} 
?>
</div>
</div>