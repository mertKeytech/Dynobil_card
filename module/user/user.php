<div class="row">
    <div class="col col-lg-12 col-xl-12">
		
        <?php
			
			if (@$_GET['do'] == "list_user") {
				if (Permission($_SESSION['user_group_id'], $_GET['do'])) { ?>
				<div class="card">
					<div class="card-body">
						<div class="card-title">Kullanıcı Filtreleme</div>
						<form method="GET" class="form-horizontal row-border" action="#">
							<input type="hidden" name="module" value="user/user"/>
							<input type="hidden" name="do" value="list_user"/>
							<div class="row">
								<div class="col-lg-3">
									<div class="form-group">
										<label>Ad-Soyad</label>
										<input type="text" name="name" id="name" class="form-control" placeholder="Kullanıcı Ad-Soyad"
										autocomplete="off">
									</div>
								</div>
								<div class="col-lg-3">
									<div class="form-group">
										<label>Kullanıcı Adı</label>
										<input type="text" name="username" id="username" class="form-control" placeholder="Kullanıcı Adı"
										autocomplete="off">
									</div>
								</div>
								<div class="col-lg-3">
									<div class="form-group">
										<label>Kullanıcı Durumu</label>
										<select class="form-control" name="status"
										id="status">
											<option disabled selected value>--Seçiniz--</option>
											<option value="1">Aktif</option>
											<option value="2">Pasif</option>
										</select>
									</div>
								</div>
								<div class="col-lg-3">
									<div class="form-group">
										<label>Kullanıcı Grubu</label>
										<select class="form-control single-select" name="group"
										id="group">
											<option disabled selected value>Seçiniz</option>
											<?php $query = $db->query("SELECT * FROM user_group WHERE deleted=0");
												while ($row = $query->fetch_assoc()) {
												?>
												<option value="<?= $row["id"] ?>"><?= $row["group_name"] ?></option>
											<?php } ?>
										</select>
									</div>
								</div>
								
							</div>
							<br>
							<div class="form-group" style="text-align: center">
								<button style="text-align: center;" type="submit"
								class="btn btn-warning px-5">Filtrele
								</button>
							</div>
							
						</form>
					</div>
				</div>
				
				<div class="card">
					<div class="card-header"><i class="fa fa-table"></i> Kullanıcı Listesi</div>
					<div class="card-body">
						<div class="table-responsive">
							<table id="default-datatable" class="table table-bordered">
								<thead>
									<tr>
										<th>Ad-Soyad</th>
										<th>Kullanıcı Adı</th>
										<th>Email</th>
										<th>Kullanıcı Grubu</th>
										<th>Durumu</th>
										<th>İşlem</th>
									</tr>
								</thead>
								<tbody>
									<?php
										
										$Filter = "user.deleted=0";
										
										
										if (isset($_GET["name"]) and !empty($_GET["name"])) {
											$Filter .= " and user.name LIKE '" . $_GET["name"] . "%'";
										}
										if (isset($_GET["status"]) and !empty($_GET["status"])) {
											$statusChange = $_GET["status"];
											$Filter .= " and user.status='" . $statusChange . "'";
										}
										if (isset($_GET["username"]) and !empty($_GET["username"])) {
											$Filter .= " and user.username LIKE '" . $_GET["username"] . "%'";
										}
										if (isset($_GET["group"]) and !empty($_GET["group"])) {
											$Filter .= " and user.user_group_id='" . $_GET["group"] . "'";
										}
										$QueryUser = $db->query("SELECT *,user.id AS user_id,user_group.id AS GroupID FROM user 
										LEFT JOIN user_group ON user_group.id = user.user_group_id 
										WHERE $Filter");
										while ($row = $QueryUser->fetch_assoc()) {
										?>
										
										<tr>
											<td>
												<?= $row["name"] ?>
											</td>
											<td>
												<?= $row["username"] ?>
											</td>
											<td><?= $row["email"] ?></td>
											<td><?= $row["group_name"] ?></td>
											<td><?= $row["status"] == 1 ? "AKTİF" : "PASİF"; ?></td>
											<td>
												
												<a href="index.php?module=user/user&do=update_user&id=<?= $row['user_id'] ?>">
													<button type="button"
													class="btn btn-primary waves-effect waves-light m-1"
													title="Düzenle"><i
														class="fa fa-edit"></i>
														<span>Düzenle</span>
													</button>
												</a>
												<?php if ($row["user_id"] != $_SESSION["user_id"]) { ?>
													<button type="button"
													class="btn btn-danger waves-effect waves-light m-1"
													title="Sil"
													data-type="confirm"
													data-id="<?= $row["user_id"] ?>" id="delete_user"><i
														class="fa fa fa-trash-o"></i>
														<span>Sil</span>
													</button>
												<?php } ?>
												
												
											</td>
											
										</tr>
									<?php } ?>
								</tbody>
							</table>
						</div>
					</div>
				</div>
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
								<h5 class="modal-title">Kullanıcı Silme Formu</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<p>
									<center>Seçili Kullanıcı Silinecektir!</center>
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
									text: "Kullanıcı Silindi!",
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
				
				<?php
					} else {
					echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur !");
				}
				} else if (@$_GET['do'] == "update_user") {
				if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
					if ($_POST) {
						if (!empty($_POST['name']) && !empty($_POST['username'])  && !empty($_POST['email']) && !empty($_POST['status'])) {
							
							$Query = $db->query("SELECT * FROM user WHERE username='" . $_POST['username'] . "' and id != '" . $_GET['id'] . "'");
							$Count = $Query->num_rows;
							if ($Count == 0) {
								$Query = $db->query("SELECT * FROM user WHERE email='" . $_POST['email'] . "' and id != '" . $_GET['id'] . "'");
								$Count = $Query->num_rows;
								if ($Count == 0) {
									$UpdateUser = $db->query("UPDATE user SET name='" . $_POST['name'] . "' WHERE id='" . $_GET['id'] . "'");
									$UpdateUser = $db->query("UPDATE clients SET client_name='" . $_POST['name'] . "' WHERE user_id='" . $_GET['id'] . "'");
									$UpdateUser = $db->query("UPDATE user SET username='" . $_POST['username'] . "' WHERE id='" . $_GET['id'] . "'");
									//$UpdateUser = $db->query("UPDATE user SET user_group_id='" . $_POST['user_group'] . "' WHERE id='" . $_GET['id'] . "'");
									$UpdateUser = $db->query("UPDATE user SET email='" . $_POST['email'] . "' WHERE id='" . $_GET['id'] . "'");
									$UpdateUser = $db->query("UPDATE user SET status='" . $_POST['status'] . "' WHERE id='" . $_GET['id'] . "'");
									
									
									
									$Query = $db->query("SELECT * FROM clients WHERE client_mobile='" . $_POST['client_mobile'] . "' and user_id != '" . $_GET['id'] . "'");
									$Count = $Query->num_rows;
									if ($Count == 0) {
										$UpdateClient = $db->query("UPDATE clients SET client_mobile='" . $_POST['client_mobile'] . "' WHERE user_id='" . $_GET['id'] . "'");
									} else {
										echo error("Cep Telefonu Sistemde Kayıtlı!");
									}
									
									
									$UpdateClient = $db->query("UPDATE clients SET client_tax_no='" . $_POST['client_tax_no'] . "' WHERE user_id='" . $_GET['id'] . "'");
									$UpdateClient = $db->query("UPDATE clients SET client_tax_name='" . $_POST['client_tax_name'] . "' WHERE user_id='" . $_GET['id'] . "'");
									$UpdateClient = $db->query("UPDATE clients SET client_address='" . $_POST['client_address'] . "' WHERE user_id='" . $_GET['id'] . "'");
									
									if ($UpdateUser) {
										echo success("Kullanıcı Bilgileri Güncellendi!");
										echo redirect("index.php?module=user/user&do=list_user", 2000);
										} else {
										echo error("Sistem Hatası!<br>Detay: " . mysqli_error($db));
									}
									
									} else {
									echo error("Email Hesabı Sistemde Kayıtlı!");
								}
								} else {
								echo error("Bu Kullanıcı Adı Sistemde Kayıtlı");
							}
							} else {
							echo error("Lütfen Tüm Alanları Doldurunuz!");
						}
					}
					$Query = $db->query("SELECT 
					user.name, 
					user.username, 
					user.email, 
					user.user_group_id, 
					clients.client_mobile,
					user.status,
					clients.client_tax_name,
					clients.client_tax_no,
					clients.client_address
					FROM user
					LEFT JOIN clients ON clients.user_id = user.id
					WHERE user.id='" . $_GET['id'] . "' ");
					$ReadUser = $Query->fetch_Assoc();
					$QueryGroup = $db->query("SELECT * FROM user_group WHERE id='".$ReadUser["user_group_id"]."'")->fetch_assoc();
					
				?>
				
				<div class="card">
					<div class="card-header"><i
						class="fa fa-table"></i> <?= $ReadUser["name"] . " Adlı Kullanıcı Bilgileri" ?>
					</div>
					<div class="card-body">
						<form action="" method="POST">
							<div class="row">
								<div class="col-lg-6">
									<div class="form-group">
										<label>Ad - Soyad</label>
										<input type="text" class="form-control" id="name_surname" name="name"
										value="<?= $ReadUser["name"] ?>"
										required
										autocomplete="off"
										placeholder="Kullanıcı Ad-Soyad Giriniz...">
										
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group">
										<label>Kullanıcı Adı</label>
										<input type="text" class="form-control" id="username" name="username"
										value="<?= $ReadUser["username"] ?>" required
										autocomplete="off"
										placeholder="Kullanıcı Adını Giriniz...">
										
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-4">
									<div class="form-group">
										<label>Cep Telefon Numarası</label>
										<input type="text" class="form-control" id="email" name="client_mobile"
										value="<?= $ReadUser["client_mobile"] ?>"
										autocomplete="off" required
										placeholder="Cep Telefonu : Giriniz">
										
									</div>
								</div>
								<div class="col-lg-4">
									<div class="form-group">
										<label>Email</label>
										<input type="text" class="form-control" id="email" name="email"
										value="<?= $ReadUser["email"] ?>"
										autocomplete="off" required
										placeholder="Email Adresi Giriniz">
										
									</div>
								</div>
								<?php if($QueryGroup["is_fixed"]==0){
								?>
								
								<div class="col-lg-4">
									<div class="form-group">
										<label>Kullanıcı Grubu</label>
										<select class="form-control" name="user_group" id="user_group" required>
											<?php $query = $db->query("SELECT * FROM user_group WHERE id!=2 and id!=3 ORDER BY group_name");
												while ($row = $query->fetch_assoc()) {
												?>
												<option <?php if ($row["id"] == $ReadUser["user_group_id"]) {
													echo "selected";
												} ?> value="<?= $row["id"] ?>"><?= $row["group_name"] ?></option>
											<?php } ?>
										</select>
										
									</div>
								</div>
								<?php } ?>
								<div class="col-lg-4">
									<div class="form-group">
										<label>Durum</label>
										<select class="form-control" name="status" required>
											<option <?php if (1 == $ReadUser["status"]) {
												echo "selected";
											} ?> value="1">Aktif
											</option>
											<option <?php if (2 == $ReadUser["status"]) {
												echo "selected";
											} ?> value="2">Pasif
											</option>
										</select>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-4">
									<div class="form-group">
										<label>İş Yeri Adresi : </label>
										<input type="text" class="form-control" id="email" name="client_address"
										value="<?= $ReadUser["client_address"] ?>"
										autocomplete="off" 
										placeholder="Adres Giriniz">
										
									</div>
								</div>
								
								<div class="col-lg-4">
									<div class="form-group">
										<label>Vergi Dairesi</label>
										<input type="text" class="form-control" id="email" name="client_tax_name"
										value="<?= $ReadUser["client_tax_name"] ?>"
										autocomplete="off" 
										placeholder="Vergi Dairesini Giriniz">
										
									</div>
								</div>
								
								<div class="col-lg-4">
									<div class="form-group">
										<label>Vergi Numarası</label>
										<input type="text" class="form-control" id="email" name="client_tax_no"
										value="<?= $ReadUser["client_tax_no"] ?>"
										autocomplete="off" 
										placeholder="Vergi No Giriniz">
										
									</div>
								</div>
								
							</div>
							<br>
							<div class="form-group">
								<button type="submit"
								class="btn btn-light px-5">Güncelle
								</button>
								
							</div>
						</form>
						
					</div>
				</div>
				<?php
					} else {
					echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur !");
				}
			}
		?>
	</div>
</div>
</div>
