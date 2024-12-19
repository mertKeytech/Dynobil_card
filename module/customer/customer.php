<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
			if (@$_GET['do'] == "list_customer") {
				if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
					// TODO : DÜZENLE
					if (Permission($_SESSION['user_group_id'], "new_customer")) {
					?>
                    <a href="index.php?module=customer/customer&do=new_customer"
                    class="btn btn-success btn-round waves-effect waves-light m-1">Yeni Müşteri Ekle</a>
                    <br/><br>
				<?php } ?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">Müşteri Filtreleme</div>
                        <form method="GET" class="form-horizontal row-border" action="#">
                            <input type="hidden" name="module" value="customer/customer"/>
                            <input type="hidden" name="do" value="list_customer"/>
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Müşteri Adı</label>
                                        <input type="text" class="form-control" name="name" autocomplete="off">
									</div>
								</div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Müşteri Kart Numarası</label>
                                        <input type="text" autocomplete="off" class="form-control" name="card"
                                        maxlength="16" minlength="16"
                                        onkeypress="return event.charCode>=48 && event.charCode<=57">
									</div>
								</div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>Durumu</label>
                                        <select class="form-control" name="is_active">
                                            <option value="0">Seçiniz</option>
                                            <option value="1">AKTİF</option>
                                            <option value="2">PASİF</option>
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
					<div class="card-header"><i class="fa fa-table"></i> Müşteri Listesi</div>
					<div class="card-body">
						<div class="table-responsive">
							<table id="default-datatable" class="table table-bordered">
								<thead>
									<tr>
										<th>Müşteri Adı</th>
										<th>TC</th>
										<th>Vergi No</th>
										<th>Vergi Dairesi</th>
										<th>Müşteri Adresi</th>
										<th>Müşteri Telefon-1</th>
										<th>Müşteri Cep Telefonu</th>
										<th>Kart Numarası</th>
										<th>Kart Kampanyası</th>
										<th>Kartın Verildiği Bayi</th>
										<th>Bakiyesi</th>
										<th>Son Yükleme Tarihi</th>
										<th>Durum</th>
										<th>İŞLEM</th>
									</tr>
								</thead>
								<tbody>
									<?php
										
										$Filter = "clients.deleted = 0";
										if (isset($_GET["name"]) and !empty($_GET["name"])) {
											$Filter .= " and clients.client_name LIKE '" . $_GET["name"] . "%'";
										}
										if (isset($_GET["card"]) and !empty($_GET["card"])) {
											$Filter .= " and cards.card_number='" . $_GET["card"] . "'";
										}
										if (isset($_GET["is_active"]) and !empty($_GET["is_active"])) {
											$Filter .= " and clients.is_active = '" . $_GET["is_active"] . "'";
										}
										
										$Query = $db->query("SELECT *,clients.is_active AS STATUS,distributors.id AS DistID,clients.id AS ClientID,clients.user_id as UserID,MAX(deposits.unixtime) as son_yukleme_tarihi
										FROM clients
										LEFT JOIN cards ON cards.id = clients.card_id
										LEFT JOIN campaigns ON cards.card_campaign_id = campaigns.id
										LEFT JOIN distributors ON distributors.id=cards.card_distributor_id
										LEFT JOIN deposits ON deposits.client_id = clients.id
										WHERE $Filter 
										GROUP BY clients.id
										");
										while ($row = $Query->fetch_assoc()) {
											$QueryReport = $db->query("SELECT * FROM contracts WHERE client_id='".$row["ClientID"]."' and contract_number=1")->fetch_assoc();
											if($QueryReport["contract_url"]!=""){
												$URL = $QueryReport["contract_url"];
												}else {
												$URL = "";
											}
											$QueryReport2 = $db->query("SELECT * FROM contracts WHERE client_id='".$row["ClientID"]."' and contract_number=2")->fetch_assoc();
											if($QueryReport2["contract_url"]!=""){
												$URL2 = $QueryReport2["contract_url"];
												}else {
												$URL2 = "";
											}
											if($row["card_type"]==1){
												$ClientBalance = $row["balance"] . " TL";
												} else {
												$ClientBalance = $row["credit"]." Kredi";
											}
											if ($row["company_name"] == "") {
												if ($row["card_number"] == "") {
													$Dagitim = "-";
													} else {
													$Dagitim = "<font color='orange'>MERKEZ</font>";
												}
												} else {
												$Dagitim = "<a href='index.php?module=customer/customer&do=distributor_detail&id=" . $row["DistID"] . "'>" . $row["company_name"] . "</a>";
											}
										?>
										<tr>
											<td><?= "<a href='index.php?module=customer/customer&do=client_detail&id=" . $row["ClientID"] . "'>" . $row["client_name"] . "</a>" ?></td>
											<td><?= $row["client_tc"]!=""?$row["client_tc"]:"-" ?></td>
											<td><?= $row["client_tax_no"]!=""?$row["client_tax_no"]:"-" ?></td>
											<td><?= $row["client_tax_name"]!=""?$row["client_tax_name"]:"-" ?></td>
											<td><?= $row["client_address"] ?></td>
											<td><?= $row["client_phone1"] ?></td>
											<td><?= $row["client_mobile"] ?></td>
											<td><?= $row["card_number"] != "" ? CardNumberMask($row["card_number"]) : "-" ?></td>
											<td><?= $row["campaign_name"] != "" ? $row["campaign_name"] : "-" ?></td>
											<td><?= $Dagitim ?></td>
											<td><?= $ClientBalance ?></td>
											<td><?= date("Y-m-d H:i:s", $row["son_yukleme_tarihi"])?></td>
											<td><?php if ($row["STATUS"] == 1) {
												echo "<font color='green'>AKTİF</font>";
												} else if ($row["STATUS"] == 2) {
												echo "<font color='red'>PASİF</font>";
											} ?>
											</td>
											<td><?= "<a href='index.php?module=customer/customer&do=change_card&id=" . $row["ClientID"] . "'><button type='button' class='btn btn-success'>KART DEĞİŞTİR</button></a>" ?>
												<?php if($_SESSION["user_group_id"]!=2){ ?>
													<button type="button"
													class="btn btn-danger waves-effect waves-light m-1"
													title="Sil"
													data-type="confirm"
													data-id="<?= $row["UserID"] ?>" id="delete_user"><i
														class="fa fa fa-trash-o"></i>
														<span>Sil</span>
														</button><?php if($URL!=""){ ?>
														<a href="<?=$URL?>" target="_blank"><button style="text-align: left;" type="button"
															class="btn btn-warning waves-effect waves-light m-1">SÖZLEŞME - 1
															</button></a>
													<?php } ?>
													<?php if($URL2!=""){ ?>
														<a href="<?=$URL2?>" target="_blank"><button style="text-align: left;" type="button"
															class="btn btn-warning waves-effect waves-light m-1">SÖZLEŞME - 2
															</button></a>
													<?php } ?>
													<?= "<a href='index.php?module=customer/customer&do=change_report&number=1&id=" . $row["ClientID"] . "'><button type='button' class='btn btn-primary'>SÖZLEŞME - 1 DEĞİŞTİR</button></a>" ?>
													<?= "<a href='index.php?module=customer/customer&do=change_report&number=2&id=" . $row["ClientID"] . "'><button type='button' class='btn btn-primary'>SÖZLEŞME - 2 DEĞİŞTİR</button></a>" ?>
													
												<?php } ?></td>
										</tr>
										<?php
										}
										
									?>
									
								</tbody>
							</table>
							<script>
								$(document).on("click", "#delete_user", function () {
									var id = $(this).data('id');
									$("#delete_user_id").val(id);
									$('#deleteUser').modal('show');
								});
							</script>
							<!--            Delete Region Modal-->
							<div class="modal fade" id="deleteUser">
								<input type="hidden" id="delete_user_id">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title">Müşteri Silme Formu</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											<p>
												<center>Seçili Müşteri Silinecektir!</center>
											</p>
											<p>
												<center>Onaylıyor musunuz?</center>
											</p>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-white" data-dismiss="modal"><i
												class="fa fa-times"></i>Hayır, Vazgeç
											</button>
											<button type="button" onclick="deleteUser()" class="btn btn-primary"><i
												class="fa fa-check-square-o"></i>Evet
											</button>
										</div>
									</div>
								</div>
							</div>
							<script>
								function deleteUser() {
									var id = document.getElementById('delete_user_id').value;
									
									$.post("ajax/deleteUser.php", {
										id: id
										}).done(function (data) {
										if (data == "ok") {
											swal({
												title: "BAŞARILI",
												text: "Müşteri Silindi!",
												icon: "success",
												button: "OK",
											})
											.then((willOk) => {
												if (willOk) {
													$("#deleteUser").modal("hide");
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
							<!--            End-->
						</div>
					</div>
				</div>
				
				
				<?php
					} else {
					echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
				}
			}
			else if (@$_GET['do'] == "new_customer") {
				if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
					if ($_POST) {
						
						if (!empty($_POST["name"]) and !empty($_POST["address"]) and !empty($_POST["email"]) and !empty($_POST["mobile"])
						and !empty($_POST["card"]) and !empty($_POST["username"]) and !empty($_POST["password"])) {
							
							$ControlUsername = $db->query("SELECT * FROM user WHERE username = '" . $_POST["username"] . "' and deleted=0")->num_rows;
							if ($ControlUsername == 0) {
								$ControlEmail = $db->query("SELECT * FROM user WHERE email = '" . $_POST["email"] . "' and deleted=0")->num_rows;
								if ($ControlEmail == 0) {
									$ControlCompanyName = $db->query("SELECT * FROM clients WHERE client_name = '" . $_POST["name"] . "'")->num_rows;
									if ($ControlCompanyName == 0) {
										$ControlMobile = $db->query("SELECT * FROM clients WHERE client_mobile = '" . $_POST["mobile"] . "'")->num_rows;
										if ($ControlMobile == 0) {
											$InsertUser = $db->query("INSERT INTO user(name,username,email,password,user_group_id) VALUES('" . $_POST["name"] . "','" . $_POST["username"] . "','" . $_POST["email"] . "','" . md5($_POST["password"]) . "',3)");
											if ($InsertUser) {
												$ID = $db->insert_id;
												$InsertClient = $db->query("INSERT INTO clients(client_tc,client_tax_no,client_name,client_address,client_phone1,client_mobile,user_id,card_id,unixtime,client_tax_name)
												VALUES('" . $_POST["tc"] . "','" . $_POST["tax_no"] . "','" . $_POST["name"] . "','" . $_POST["address"] . "','" . $_POST["phone1"] . "','" . $_POST["mobile"] . "','" . $ID . "','" . $_POST["card"] . "','" . time() . "','".$_POST["tax_name"]."')");
												if ($InsertClient) {
													$ClientID = $db->insert_id;
													$InsertCampaigns = $db->query("INSERT INTO client_campaigns(client_id) VALUES('" . $ClientID . "')");
													if ($_SESSION["user_group_id"] == 2) {
														$dist = $_SESSION["distributor_id"];
														} else {
														$dist = 0;
													}
													$UpdateCard = $db->query("UPDATE cards SET card_status=2,card_distributor_id='" . $dist . "' WHERE id='" . $_POST["card"] . "' ");
													if (!$UpdateCard) {
														echo error(mysqli_error($db));
													}
													if (isset($_FILES['Report']) and $_FILES['Report']['error'] == 0) {
														$DirStatus = false;
														$_FILES['Report'] = FileTrEn($_FILES['Report']);
														$dizin = 'files/contracts/';
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
															$yuklenecek_dosya = $dizin .RandomReportName(10)."_".basename($_FILES["Report"]["name"]);
															
															if (move_uploaded_file($_FILES['Report']['tmp_name'], $yuklenecek_dosya)) {
																$InsertReport = $db->query("INSERT INTO contracts(upload_unixtime,distributor_id,client_id,
																contract_url) VALUES('" . time() . "','" . $dist . "','" . $ClientID . "','" . $yuklenecek_dosya . "')");
																if ($InsertReport) {
																	echo success("Sözleşme - 1 Başarılı Bir Şekilde Yüklenmiştir.");
																	} else {
																	echo error("Sistem Hatası - 1!<br>Detay: " . mysqli_error($db));
																	unlink($yuklenecek_dosya);
																}
																} else {
																echo error("Dosya Yükleme Hatası - 1!");
															}
															} else {
															echo error("Dosya Yükleme Hatası - 1!<br>Detay : Path Hatalı");
														}
													}
													
													if (isset($_FILES['Report2']) and $_FILES['Report2']['error'] == 0) {
														$DirStatus = false;
														$_FILES['Report2'] = FileTrEn($_FILES['Report2']);
														$dizin = 'files/contracts/';
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
															$yuklenecek_dosya = $dizin .RandomReportName(10)."_".basename($_FILES["Report2"]["name"]);
															
															if (move_uploaded_file($_FILES['Report2']['tmp_name'], $yuklenecek_dosya)) {
																$InsertReport = $db->query("INSERT INTO contracts(upload_unixtime,distributor_id,client_id,
																contract_url,contract_number) VALUES('" . time() . "','" . $dist . "','" . $ClientID . "','" . $yuklenecek_dosya . "',2)");
																if ($InsertReport) {
																	echo success("Sözleşme - 2 Başarılı Bir Şekilde Yüklenmiştir.");
																	} else {
																	echo error("Sistem Hatası - 2!<br>Detay: " . mysqli_error($db));
																	unlink($yuklenecek_dosya);
																}
																} else {
																echo error("Dosya Yükleme Hatası - 2!");
															}
															} else {
															echo error("Dosya Yükleme Hatası - 2!<br>Detay : Path Hatalı");
														}
													}
													
													echo success("Yeni Müşteri Oluşturuldu!<br> Sisteme, Kullanıcı Adı: <font color='red'>" . $_POST["username"] . "</font> Şifre:<font color='red'> " . $_POST["password"] . "</font> ile giriş yapabilir");
													
													} else {
													echo error("Sistem Hatası! Müşteri Oluşturulamadı");
													$db->query("DELETE FROM user WHERE id = '" . $ID . "'");
												}
												} else {
												echo error("Sistem Hatası. Kullanıcı Oluşturulamadı!");
											}
											
											} else {
											echo error("Bu Cep No Sistemde Kayıtlı");
										}
										} else {
										echo error("Bu Müşteri Adı Sistemde Kayıtlı");
									}
									} else {
									echo error("Bu Email Sistemde Kayıtlı");
								}
								} else {
								echo error("Bu Kullanıcı Adı Sistemde Kayıtlı");
							}
							
							} else {
							echo warning("Lütfen Tüm Alanları Doldurunuz!");
						}
						
					}
				?>
				<div class="card">
					<div class="card-body">
						<div class="card-title">Yeni Müşteri Bilgileri</div>
						<form action="" method="POST" enctype="multipart/form-data">
							<div class="row">
								<div class="col-lg-4">
									<div class="form-group">
										<label>Müşteri Adı</label>
										<input type="text" class="form-control" id="name" name="name"
										required
										autocomplete="off"
										placeholder="Müşteri Adını Giriniz">
										
									</div>
								</div>
								<div class="col-lg-4">
									<div class="form-group">
										<label>Müşteri Adresi</label>
										<input type="text" class="form-control" id="address" name="address" required
										autocomplete="off"
										placeholder="Müşteri Adresini Giriniz">
										
									</div>
								</div>
								<div class="col-lg-4">
									<div class="form-group">
										<label>Kart</label>
										<select class="form-control single-select" name="card" required
										id="card">
											<option value="0">Seçiniz</option>
											<?php if ($_SESSION["user_group_id"] == 2) {
												$query = $db->query("SELECT *,cards.id AS ID FROM cards LEFT JOIN campaigns ON campaigns.id=cards.card_campaign_id WHERE card_status=1 and card_distributor_id='" . $_SESSION["distributor_id"] . "'");
												} else {
												$query = $db->query("SELECT *,cards.id AS ID FROM cards LEFT JOIN campaigns ON campaigns.id=cards.card_campaign_id WHERE card_status=0");
											}
											while ($row = $query->fetch_assoc()) {
												if($row["card_type"]==1){
													$TYPE = "BAKİYELİ";
													} else {
													$TYPE = "KREDİLİ";
												}
											?>
											<option value="<?= $row["ID"] ?>"><?= CardNumberMask($row["card_number"])." - ".$row["campaign_name"]." - ".$TYPE ?></option>
											<?php } ?>
										</select>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-6">
									<div class="form-group">
										<label>Telefon - 1</label>
										<input type="text" class="form-control" id="phone1" name="phone1"
										autocomplete="off"
										placeholder="Müşteri Telefon No Giriniz">
										
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group">
										<label>Cep Telefonu</label>
										<input type="text" class="form-control" id="mobile" name="mobile"
										autocomplete="off" required
										placeholder="Müşteri Cep No Giriniz">
										
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-4">
									<div class="form-group">
										<label>Kullanıcı Adı</label>
										<input type="text" class="form-control" id="username" name="username"
										autocomplete="off" required
										placeholder="Kullanıcı Adını Giriniz">
										
									</div>
								</div>
								<div class="col-lg-4">
									<div class="form-group">
										<label>Email</label>
										<input type="text" class="form-control" id="email" name="email"
										autocomplete="off" required
										placeholder="Email Giriniz">
										
									</div>
								</div>
								<div class="col-lg-4">
									<div class="form-group">
										<label>Şifre</label>
										<input type="text" class="form-control" id="password" name="password"
										autocomplete="off" required
										placeholder="Şifre Giriniz">
										
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-6">
									<div class="form-group">
										<label>T.C. KİMLİK Numarası</label>
										<input type="text" class="form-control" id="tc" name="tc"
										autocomplete="off" maxlength="11" onkeypress="return event.charCode>=48 && event.charCode<=57"
										placeholder="T.C Kimlik Numarası Giriniz">
										
									</div>
								</div>
								<div class="col-lg-2">
									<div class="form-group">
										<label>Vergİ NO</label>
										<input type="text" class="form-control" id="tax_no" name="tax_no"
										autocomplete="off" maxlength="11" onkeypress="return event.charCode>=48 && event.charCode<=57"
										placeholder="Vergi No Giriniz">
										
									</div>
								</div>
								<div class="col-lg-4">
									<div class="form-group">
										<label>Vergi Dairesi</label>
										<input type="text" class="form-control" id="tax_name" name="tax_name"
										autocomplete="off"
										placeholder="Vergi Dairesi Giriniz">
										
									</div>
								</div>
							</div>
							<br>
							<div class="row">
								<div class="col-lg-4 col-md-4">
									<div class="form-group">
										<label>SÖZLEŞME - 1</label>
										<input type="hidden" name="MAX_FILE_SIZE" value="20000000"/>
										<input type="file" name="Report" id="Report" class="form-control"
										required>
									</div>
								</div>
								<div class="col-lg-4 col-md-4">
									<div class="form-group">
										<label>SÖZLEŞME - 2</label>
										<input type="hidden" name="MAX_FILE_SIZE" value="20000000"/>
										<input type="file" name="Report2" id="Report2" class="form-control">
									</div>
								</div>
								<div class="col-lg-3">
									<label>&emsp;</label>
									<div class="form-group" style="text-align: center">
										<button style="text-align: center;" type="submit"
										class="btn btn-warning px-5">EKLE
										</button>
									</div>
								</div>
							</div>
							
						</form>
					</div>
				</div>
				
				<?php } else {
					echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
				}
				} else if (@$_GET['do'] == "distributor_detail") {
				if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
					
				?>
				<div class="card">
					<div class="card-body">
						<div class="row">
							<div class="col-md-3">
								<div class="tabs-vertical tabs-vertical-warning">
									<ul class="nav nav-tabs flex-column">
										<li class="nav-item">
											<a class="nav-link py-4 active" data-toggle="tab" href="#General"><i
												class="icon-user"></i> <span
											class="hidden-xs">GENEL BİLGİLER</span></a>
										</li>
										<li class="nav-item">
											<a class="nav-link py-4" data-toggle="tab" href="#Sales"><i
												class="icon-folder"></i> <span
											class="hidden-xs">SATIŞ ÖZETİ</span></a>
										</li>
                                        <li class="nav-item">
                                            <a class="nav-link py-4" data-toggle="tab" href="#Cards"><i
                                                class="icon-credit-card"></i> <span
											class="hidden-xs">KART DETAY</span></a>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-md-9">
								<!-- Tab panes -->
								<div class="tab-content">
									<div id="General" class="container tab-pane active">
										<?php $query = $db->query("SELECT * FROM distributors 
											LEFT JOIN user ON user.id=distributors.user_id 
											LEFT JOIN city ON city.id=distributors.company_city_id
											LEFT JOIN county ON county.id=distributors.company_county_id
										WHERE distributors.id='" . $_GET["id"] . "'")->fetch_assoc(); ?>
										<div class="row">
											<div class="col-md-6 col-lg-6">
												<div class="row">
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">BAYİ ADI :</font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["company_name"] ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">BAYİ ADRESİ :</font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["company_address"] ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">BAYİ EMAİL : </font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["company_contact_email"] ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">BAYİ TELEFON : </font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["company_phone1"] ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">BAYİ CEP NO : </font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["company_mobile"] ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">BAYİ İL / İLÇE : </font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["city_name"] . " / " . $query["county_name"] ?></h5>
													</div>
												</div>
											</div>
											<div class="col-md-6 col-lg-6">
												<div class="row">
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">KULLANICI ADI :</font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["username"] ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">EMAİL : </font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["email"] ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">DURUMU :</font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["status"] == 1 ? "<font color='green'>AKTİF</font>" : "<font color='red'>PASİF</font>" ?></h5>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id="Sales" class="container tab-pane fade">
										<?php
											$LastWeek = strtotime('-7 days', time());
											$LastMonth = strtotime('-1 months', time());
											$LastYear = strtotime('-1 year', time());
											$QueryWeek = $db->query("SELECT SUM(amount) AS TOPLAM FROM transactions WHERE distributor_id='" . $_GET["id"] . "' and transaction_status=4 and unix_time>='" . $LastWeek . "'")->fetch_assoc();
											$QueryMonth = $db->query("SELECT SUM(amount) AS TOPLAM FROM transactions WHERE distributor_id='" . $_GET["id"] . "' and transaction_status=4 and unix_time>='" . $LastMonth . "'")->fetch_assoc();
											$QueryYear = $db->query("SELECT SUM(amount) AS TOPLAM FROM transactions WHERE distributor_id='" . $_GET["id"] . "' and transaction_status=4 and unix_time>='" . $LastYear . "'")->fetch_assoc();
											
											$QueryWeek2 = $db->query("SELECT * FROM transactions WHERE distributor_id='" . $_GET["id"] . "' and transaction_status=4 and unix_time>='" . $LastWeek . "'")->num_rows;
											$QueryMonth2 = $db->query("SELECT * FROM transactions WHERE distributor_id='" . $_GET["id"] . "' and transaction_status=4 and unix_time>='" . $LastMonth . "'")->num_rows;
											$QueryYear2 = $db->query("SELECT * FROM transactions WHERE distributor_id='" . $_GET["id"] . "' and transaction_status=4 and unix_time>='" . $LastYear . "'")->num_rows;
										?>
										<div class="row">
											<div class="col-lg-3 col-md-3">
												<div class="card">
													<div class="card-body">
														<div class="media align-items-center">
															<div class="media-body">
																<h5 class="mb-0 text-white"><?= $QueryWeek2 . " ADET" ?></h5>
																<p class="mb-0 text-white">SON 1 HAFTA SATIŞ MİKTARI
																(ADET)</p>
															</div>
															<div class="w-icon"><i
																class="fa fa-shopping-cart text-warning"></i>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-md-3">
												<div class="card">
													<div class="card-body">
														<div class="media align-items-center">
															<div class="media-body">
																<h5 class="mb-0 text-white"><?= $QueryWeek["TOPLAM"] == "" ? "<font color='red'>0 TRY</font>" : $QueryWeek["TOPLAM"] . " TRY" ?></h5>
																<p class="mb-0 text-white">SON 1 HAFTA SATIŞ MİKTARI
																(TRY)</p>
															</div>
															<div class="w-icon"><i class="fa fa-try text-green"></i>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-md-3">
												<div class="card">
													<div class="card-body">
														<div class="media align-items-center">
															<div class="media-body">
																<h5 class="mb-0 text-white"><?= $QueryMonth2 . " ADET" ?></h5>
																<p class="mb-0 text-white">SON 1 AY SATIŞ MİKTARI
																(ADET)</p>
															</div>
															<div class="w-icon"><i
																class="fa fa-shopping-cart text-warning"></i>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-md-3">
												<div class="card">
													<div class="card-body">
														<div class="media align-items-center">
															<div class="media-body">
																<h5 class="mb-0 text-white"><?= $QueryMonth["TOPLAM"] == "" ? "<font color='red'>0 TRY</font>" : $QueryMonth["TOPLAM"] . " TRY" ?></h5>
																<p class="mb-0 text-white">SON 1 AY SATIŞ&emsp; MİKTARI
																(TRY)</p>
															</div>
															<div class="w-icon"><i class="fa fa-try text-green"></i>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-lg-6 col-md-6">
												<div class="card">
													<div class="card-body">
														<div class="media align-items-center">
															<div class="media-body">
																<h5 class="mb-0 text-white"><?= $QueryYear2 . " ADET" ?></h5>
																<p class="mb-0 text-white">SON 1 YIL SATIŞ MİKTARI
																(ADET)</p>
															</div>
															<div class="w-icon"><i
																class="fa fa-shopping-cart text-warning"></i>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-lg-6 col-md-6">
												<div class="card">
													<div class="card-body">
														<div class="media align-items-center">
															<div class="media-body">
																<h5 class="mb-0 text-white"><?= $QueryYear["TOPLAM"] == "" ? "<font color='red'>0 TRY</font>" : $QueryYear["TOPLAM"] . " TRY" ?></h5>
																<p class="mb-0 text-white">SON 1 YIL SATIŞ MİKTARI
																(TRY)</p>
															</div>
															<div class="w-icon"><i class="fa fa-try text-green"></i>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
									</div>
									<div id="Cards" class="container tab-pane fade">
										<?php
											$InDist = $db->query("SELECT * FROM cards WHERE card_status=1 and card_distributor_id='" . $_GET["id"] . "'")->num_rows;
											$InClient = $db->query("SELECT * FROM cards WHERE card_status=2 and card_distributor_id='" . $_GET["id"] . "'")->num_rows;
										?>
										<div class="row">
											<div class="col-lg-6 col-md-6">
												<div class="card">
													<div class="card-body">
														<div class="media align-items-center">
															<div class="media-body">
																<h5 class="mb-0 text-white"><?= $InDist . " ADET" ?></h5>
																<p class="mb-0 text-white">BAYİNİN ELİNDEKİ KART
																SAYISI</p>
															</div>
															<div class="w-icon"><i
																class="fa fa-credit-card text-warning"></i>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-lg-6 col-md-6">
												<div class="card">
													<div class="card-body">
														<div class="media align-items-center">
															<div class="media-body">
																<h5 class="mb-0 text-white"><?= $InClient . " ADET" ?></h5>
																<p class="mb-0 text-white">BAYİNİN DAĞITTIĞI KART
																SAYISI</p>
															</div>
															<div class="w-icon"><i
															class="fa fa-credit-card text-green"></i></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div><!--End Row-->
					</div>
				</div>
				
				<?php } else {
					echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
				}
				} else if (@$_GET['do'] == "client_detail") {
				if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
					
				?>
				<div class="card">
					<div class="card-body">
						<div class="row">
							<div class="col-md-3">
								<div class="tabs-vertical tabs-vertical-warning">
									<ul class="nav nav-tabs flex-column">
										<li class="nav-item">
											<a class="nav-link py-4 active" data-toggle="tab" href="#General"><i
												class="icon-user"></i> <span
											class="hidden-xs">GENEL BİLGİLER</span></a>
										</li>
										<li class="nav-item">
											<a class="nav-link py-4" data-toggle="tab" href="#Deposit"><i
												class="fa fa-credit-card"></i> <span
											class="hidden-xs">YÜKLEME GEÇMİŞİ</span></a>
										</li>
										<li class="nav-item">
											<a class="nav-link py-4" data-toggle="tab" href="#Transaction"><i
												class="fa fa-shopping-cart"></i> <span
											class="hidden-xs">HARCAMA GEÇMİŞİ</span></a>
										</li>
										<li class="nav-item">
											<a class="nav-link py-4" data-toggle="tab" href="#Sales"><i
												class="fa fa-exchange"></i> <span
											class="hidden-xs">SATIŞLAR</span></a>
										</li>
										<li class="nav-item">
											<a class="nav-link py-4" data-toggle="tab" href="#Cards"><i
												class="icon-credit-card"></i> <span
											class="hidden-xs">GEÇMİŞ KARTLAR</span></a>
										</li>
										<!--                                        <li class="nav-item">-->
										<!--                                            <a class="nav-link py-4" data-toggle="tab" href="#Campaigns"><i-->
										<!--                                                        class="fa fa-calendar-minus-o"></i> <span-->
										<!--                                                        class="hidden-xs">KAMPANYALAR</span></a>-->
										<!--                                        </li>-->
									</ul>
								</div>
							</div>
							<div class="col-md-9">
								<!-- Tab panes -->
								<div class="tab-content">
									<div id="General" class="container tab-pane active">
										<?php $query = $db->query("SELECT * FROM clients 
											LEFT JOIN user ON user.id=clients.user_id   
											LEFT JOIN cards ON cards.id=clients.card_id 
											LEFT JOIN campaigns ON campaigns.id=cards.card_campaign_id                                     
										WHERE clients.id='" . $_GET["id"] . "'")->fetch_assoc(); ?>
										<div class="row">
											<div class="col-md-6 col-lg-6">
												<div class="row">
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">MÜŞTERİ ADI :</font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["client_name"] ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">ADRESİ :</font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["client_address"] ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">EMAİL : </font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["email"] ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">TELEFON : </font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["client_phone1"] ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">CEP NO : </font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["client_mobile"] ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">KART NO : </font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= CardNumberMask($query["card_number"]) ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">KAMPANYA : </font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["campaign_name"] ?></h5>
													</div>
													<?php if ($query["card_type"] == 1) { ?>
														<div class="col-md-4 col-lg-4">
															<h5><font color="orange">BAKİYE : </font></h5>
														</div>
														<div class="col-md-8 col-lg-8">
															<h5><?= $query["balance"] . " TL" ?></h5>
														</div>
														<?php } else { ?>
														<div class="col-md-4 col-lg-4">
															<h5><font color="orange">KREDİ HAKKI : </font></h5>
														</div>
														<div class="col-md-8 col-lg-8">
															<h5><?= $query["credit"]?></h5>
														</div>
													<?php } ?>
												</div>
											</div>
											<div class="col-md-6 col-lg-6">
												<div class="row">
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">KULLANICI ADI :</font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["username"] ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">EMAİL : </font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["email"] ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">DURUMU :</font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["status"] == 1 ? "<font color='green'>AKTİF</font>" : "<font color='red'>PASİF</font>" ?></h5>
													</div><br>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">TC :</font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["client_tc"] != "" ? $query["client_tc"] : "<font color='red'>-</font>" ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">Vergi Dairesi :</font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["client_tax_name"] != "" ? $query["client_tax_name"] : "<font color='red'>-</font>" ?></h5>
													</div>
													<div class="col-md-4 col-lg-4">
														<h5><font color="orange">Vergi NO :</font></h5>
													</div>
													<div class="col-md-8 col-lg-8">
														<h5><?= $query["client_tax_no"] != "" ? $query["client_tax_no"] : "<font color='red'>-</font>" ?></h5>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id="Deposit" class="container tab-pane">
										<div class="card">
											<div class="card-header"><i class="fa fa-table"></i> YÜKLEME GEÇMİŞİ</div>
											<div class="card-body">
												<div class="table-responsive">
													<table id="default-datatable" class="table table-bordered">
														<thead>
															<tr>
																<th>İŞLEM TARİHİ</th>
																<th>YÜKLENEN TUTAR</th>
																<th>ÖDEME TÜRÜ</th>
															</tr>
														</thead>
														<tbody>
															<?php
																
																$Query = $db->query("SELECT * FROM deposits WHERE client_id='" . $_GET["id"] . "' and status=1");
																while ($row = $Query->fetch_assoc()) {
																	if ($row["payment_method"] == 1) {
																		$method = "KREDİ KARTI";
																		} else {
																		$method = "DİĞER";
																	}
																?>
																<tr>
																	<td><?= date("d-m-Y H:i:s", $row["unixtime"]); ?></td>
																	<td><?= $row["amount"] . " TL" ?></td>
																	<td><?= $method; ?></td>
																</tr>
																<?php
																}
																
															?>
															
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
									<div id="Transaction" class="container tab-pane">
										<div class="card">
											<div class="card-header"><i class="fa fa-table"></i> HARCAMA GEÇMİŞİ</div>
											<div class="card-body">
												<div class="table-responsive">
													<table id="default-datatable2" class="table table-bordered">
														<thead>
															<tr>
																<th>İŞLEM TARİHİ</th>
																<th>HARCANAN TUTAR</th>
																<th>BAYİ BİLGİSİ</th>
																<th>İŞLEM TÜRÜ</th>
															</tr>
														</thead>
														<tbody>
															<?php
																
																$Query = $db->query("SELECT * FROM transactions LEFT JOIN distributors ON distributors.id=transactions.distributor_id
																WHERE transactions.client_id='" . $_GET["id"] . "' and transactions.transaction_status=4");
																while ($row = $Query->fetch_assoc()) {
																?>
																<tr>
																	<td><?= date("Y-m-d H:i:s", $row["unix_time"]); ?></td>
																	<td><?= $row["amount"] . " TL" ?></td>
																	<td><?= $row["company_name"]; ?></td>
																	<td><?php 
																		if($row["transaction_type"] == 2) {
																			echo "Harcama";
																		} else if($row["transaction_type"] == 999) {
																			echo "Kredi Zaman Aşımı";
																		}
																	?></td>
																</tr>
																<?php
																}
																
															?>
															
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
									<div id="Sales" class="container tab-pane fade">
										<div class="card">
											<div class="card-header"><i class="fa fa-table"></i>SATIŞ İŞLEMLERİ</div>
											<div class="card-body">
												<div class="table-responsive">
													<table id="default-datatable4" class="table table-bordered">
														<thead>
															<tr>
																<th>İŞLEM TARİHİ</th>
																<th>SATIŞ TUTARI</th>
																<th>SATIŞ BAYİ</th>
																<th>DOSYA BAŞLIK</th>
																<th>DOSYA AÇIKLAMA</th>
																<th>DOSYA</th>
															</tr>
														</thead>
														<tbody>
															<?php
																
																$Query = $db->query("SELECT * FROM transactions LEFT JOIN distributors ON distributors.id=transactions.distributor_id
																LEFT JOIN reports ON reports.transaction_id=transactions.id
																WHERE transactions.client_id='" . $_GET["id"] . "' and transactions.transaction_status=4");
																while ($row = $Query->fetch_assoc()) {
																?>
																<tr>
																	<td><?= date("Y-m-d H:i:s", $row["unix_time"]); ?></td>
																	<td><?= $row["amount"] . " TL" ?></td>
																	<td><?= $row["company_name"]; ?></td>
																	<td><?= $row["report_title"] != "" ? $row["report_title"] : "-"; ?></td>
																	<td><?= $row["report_description"] != "" ? $row["report_description"] : "-"; ?></td>
																	<td><?= $row["report_file_url"] != "" ? "<a href='" . $row["report_file_url"] . "' target='_blank'><button type='button' class='btn btn-success'>GÖRÜNTÜLE</button></a>" : "<font color='red'>YÜKLENMEDİ</font>"; ?></td>
																</tr>
																<?php
																}
																
															?>
															
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
									<div id="Cards" class="container tab-pane fade">
										<div class="card">
											<div class="card-header"><i class="fa fa-table"></i> GEÇMİŞ KART KAYITLARI
											</div>
											<div class="card-body">
												<div class="table-responsive">
													<table id="default-datatable3" class="table table-bordered">
														<thead>
															<tr>
																<th>İŞLEM TARİHİ</th>
																<th>KART NUMARASI</th>
																<th>KART DURUMU</th>
															</tr>
														</thead>
														<tbody>
															<?php
																
																$Query = $db->query("SELECT * FROM cards_stolen LEFT JOIN cards ON cards.id=cards_stolen.card_id
																WHERE cards_stolen.client_id='" . $_GET["id"] . "'");
																while ($row = $Query->fetch_assoc()) {
																	if ($row["card_status"] == 3) {
																		$status = "KAYIP / ÇALINTI";
																		} else if ($row["card_status"] == 4) {
																		$status = "İPTAL";
																	}
																?>
																<tr>
																	<td><?= date("d-m-Y H:i:s", $row["unixtime"]); ?></td>
																	<td><?= CardNumberMask($row["card_number"]) ?></td>
																	<td><?= $status; ?></td>
																</tr>
																<?php
																}
																
															?>
															
														</tbody>
													</table>
												</div>
											</div>
										</div>
										
									</div>
									<!--<div id="Campaigns" class="container tab-pane fade"></div> -->
								</div>
							</div>
						</div><!--End Row-->
					</div>
				</div>
				
				<?php } else {
					echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
				}
				} else if (@$_GET['do'] == "change_card") {
				if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
					if ($_POST) {
						if (!empty($_POST["card"])) {
							$ReadClient = $db->query("SELECT * FROM clients LEFT JOIN cards ON cards.id=clients.card_id WHERE clients.id='" . $_GET["id"] . "'")->fetch_assoc();
							if ($_SESSION["user_group_id"] == 2) {
								$dist = $_SESSION["distributor_id"];
								} else {
								$dist = 0;
							}
							if ($ReadClient["card_number"] == "") {
								$Update = $db->query("UPDATE cards SET card_status=2,card_distributor_id='" . $dist . "' WHERE id='" . $_POST["card"] . "'");
								$UpdateCLient = $db->query("UPDATE clients SET card_id='" . $_POST["card"] . "' WHERE id='" . $_GET["id"] . "'");
								if ($Update && $UpdateCLient) {
									echo success("Müşteri Kartı Değiştirildi!<br>Müşteri Listesine Yönlendiriliyorsunuz!");
									echo redirect("index.php?module=customer/customer&do=list_customer", 3000);
									} else {
									echo error("Sistem Hatası!<br>Detay : " . mysqli_error($db));
								}
								} else {
								if (!empty($_POST["status"])) {
									$Update = $db->query("UPDATE cards SET card_status=2,card_distributor_id='" . $dist . "' WHERE id='" . $_POST["card"] . "'");
									$UpdateOld = $db->query("UPDATE cards SET card_status='" . $_POST["status"] . "' WHERE id='" . $ReadClient["card_id"] . "'");
									$InsertStolen = $db->query("INSERT INTO cards_stolen(card_id,client_id,card_status,unixtime) VALUES('" . $ReadClient["card_id"] . "','" . $_GET["id"] . "','" . $_POST["status"] . "','" . time() . "')");
									$UpdateCLient = $db->query("UPDATE clients SET card_id='" . $_POST["card"] . "' WHERE id='" . $_GET["id"] . "'");
									if ($Update && $UpdateOld && $InsertStolen && $UpdateCLient) {
										echo success("Müşteri Kartı Değiştirildi!<br>Müşteri Listesine Yönlendiriliyorsunuz!");
										echo redirect("index.php?module=customer/customer&do=list_customer", 3000);
										} else {
										echo error("Sistem Hatası!<br>Detay : " . mysqli_error($db));
									}
									} else {
									echo warning("Lütfen Kart Değişim Nedenini Seçiniz!");
								}
							}
							} else {
							echo warning("Lütfen Listeden Bir Kart Seçiniz!");
						}
					}
					$ReadClient = $db->query("SELECT * FROM clients LEFT JOIN cards ON cards.id=clients.card_id LEFT JOIN campaigns ON campaigns.id=cards.card_campaign_id WHERE clients.id='" . $_GET["id"] . "'")->fetch_assoc();
				?>
				<div class="card">
					<div class="card-body">
						<div class="card-title">MÜŞTERİ KART GÜNCELLEME</div>
						<form action="" method="POST">
							<div class="row">
								<div class="col-lg-12 col-md-12">
									<div class="form-group">
										<label>Müşteri Adı</label>
										<input type="text" class="form-control" id="name" name="name"
										readonly value="<?= $ReadClient["client_name"] ?>"
										autocomplete="off"
										placeholder="Müşteri Adını Giriniz">
										
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="form-group">
										<label>Mevcut Kart Numarası</label>
										<input type="text" class="form-control" id="address" name="address"
										autocomplete="off"
										value="<?= $ReadClient["card_number"] != "" ? CardNumberMask($ReadClient["card_number"]) . " -  " . $ReadClient["campaign_name"] : "-" ?>"
										readonly>
										
									</div>
								</div>
								<?php if ($ReadClient["card_number"] != "") { ?>
									<div class="col-lg-3 col-md-3">
										<div class="form-group">
											<label>Değiştirme Nedeni</label>
											<select class="form-control single-select" name="status" required
											id="status">
												<option disabled selected value>--Seçiniz--</option>
												<option value="3">KAYIP / ÇALINTI</option>
												<option value="4">İPTAL</option>
											</select>
										</div>
									</div>
								<?php } ?>
								<div class="col-lg-3 col-md-3">
									<div class="form-group">
										<label>Kart</label>
										<select class="form-control single-select" name="card" required
										id="card">
											<option disabled selected value>--Seçiniz--</option>
											<?php if ($_SESSION["user_group_id"] == 2) {
												$query = $db->query("SELECT *,cards.id AS ID FROM cards LEFT JOIN campaigns ON campaigns.id=cards.card_campaign_id WHERE card_status=1 and card_distributor_id='" . $_SESSION["distributor_id"] . "'");
												} else {
												$query = $db->query("SELECT *,cards.id AS ID FROM cards LEFT JOIN campaigns ON campaigns.id=cards.card_campaign_id WHERE card_status=0 or card_status=1");
											}
											while ($row = $query->fetch_assoc()) {
											?>
											<option value="<?= $row["ID"] ?>"><?= CardNumberMask($row["card_number"]) . " - " . $row["campaign_name"] ?></option>
											<?php } ?>
										</select>
									</div>
								</div>
							</div>
							
							
							<br>
							<div class="form-group" style="text-align: center">
								<button type="submit"
								class="btn btn-warning px-5">Güncelle
								</button>
								
							</div>
						</form>
					</div>
				</div>
				<?php } else {
					echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
				}
				} else if (@$_GET['do'] == "change_report") {
				if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
					if ($_POST) {
						if($_GET["number"]==1 or $_GET["number"]==2){
							if ($_SESSION["user_group_id"] == 2) {
								$dist = $_SESSION["distributor_id"];
								} else {
								$dist = 0;
							}
							
							if (isset($_FILES['Report']) and $_FILES['Report']['error'] == 0) {
								$DirStatus = false;
								$_FILES['Report'] = FileTrEn($_FILES['Report']);
								$dizin = 'files/contracts/';
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
							$yuklenecek_dosya = $dizin .RandomReportName(10)."_".basename($_FILES["Report"]["name"]);
							
							if (move_uploaded_file($_FILES['Report']['tmp_name'], $yuklenecek_dosya)) {
							$QueryControl = $db->query("SELECT * FROM contracts WHERE client_id='".$_GET["id"]."' and contract_number='".$_GET["number"]."'")->fetch_assoc();
							if($QueryControl["id"]==""){
							$InsertReport = $db->query("INSERT INTO contracts(upload_unixtime,distributor_id,client_id,
							contract_url,contract_number) VALUES('" . time() . "','" . $dist . "','" . $_GET["id"] . "','" . $yuklenecek_dosya . "','".$_GET["number"]."')");
							} else {
							$InsertReport = $db->query("UPDATE contracts SET contract_url='".$yuklenecek_dosya."' WHERE id='".$QueryControl["id"]."'");
							}
							
							if ($InsertReport) {
							echo success("Sözleşme - ".$_GET["number"]." Başarılı Bir Şekilde Güncellendi.");
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
							echo error("Dosya Yükleme Hatası !");
							}
							}else{
							echo error("Sözleşme Numarası Hatalı !");
							}
							
							
							}
							$SelectClient = $db->query("SELECT * FROM clients WHERE id='".$_GET["id"]."'")->fetch_assoc();
							?>
							<div class="card">
							<div class="card-body">
							<div class="card-title">"<?=$SelectClient["client_name"]?>" Adlı Müşteri Sözleşme - <?=$_GET["number"]?> Güncelleme</div>
							<form action="" method="POST" enctype="multipart/form-data">                           
							
							<div class="row">
							<div class="col-lg-4 col-md-4">
							<div class="form-group">
							<label>SÖZLEŞME - <?=$_GET["number"]?></label>
							<input type="hidden" name="MAX_FILE_SIZE" value="20000000"/>
							<input type="file" name="Report" id="Report" class="form-control"
							required>
							</div>
							</div>
							<div class="col-lg-3">
							<label>&emsp;</label>
							<div class="form-group" style="text-align: center">
							<button style="text-align: center;" type="submit"
							class="btn btn-warning px-5">GÜNCELLE
							</button>
							</div>
							</div>
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