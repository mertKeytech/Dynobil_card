<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
			if (@$_GET['do'] == "search_client_card_credit") {
				if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
					if ($_POST) {
						if (!empty($_POST["card"]) && !empty($_POST["remain1"])) {
							
							$price = $_POST["remain1"];
							
							$query = $db->query("SELECT *,clients.id AS ID FROM clients
                            LEFT JOIN cards ON cards.id=clients.card_id
                            LEFT JOIN client_campaigns ON client_campaigns.client_id=clients.id
                            LEFT JOIN campaigns ON campaigns.id=cards.card_campaign_id
                            WHERE cards.card_number='" . $_POST["card"] . "' and cards.card_type=2")->fetch_assoc();
							if ($query["ID"] != "") {
								$UserControl = $db->query("SELECT * FROM user WHERE id='".$query["user_id"]."'")->fetch_assoc();
								if($UserControl["status"]==1){
									
									if ($query["card_status"] == 3) {
										echo error("Kart Kayıp / Çalıntıdır.<br>Lütfen El Koyunuz!");
										} else if ($query["card_status"] == 4) {
										echo warning("Kart İptal Edilmiştir.<br>İşleme Devam Edilemez!");
										} else {
										if ($query["campaign_right"] > 0 and $query["card_type"] == 1) {
											$CampaignPrice = $price - ($price * $query["campaign_percent"] / 100);
											$IsCampaign = 1;
											$CampaignAmount = ($price * $query["campaign_percent"] / 100);
											} else {
											$CampaignPrice = $price;
											$IsCampaign = 0;
											$CampaignAmount = 0;
										}
										$Code = RandomSMSCode();
										$SMSContent = $CampaignPrice . " Kredi Tutarındaki Satış İçin Onay Kodunuz: " . $Code;
										$InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) 
                                        VALUES('" . $query["ID"] . "','" . $query["client_mobile"] . "','" . $SMSContent . "')");
										if ($InsertSMS) {
											$SMSID = $db->insert_id;
											//GondericiAdiSor();
											$i = 1;
											while ($i <= 10) {
												$i++;
												$gelen = SendSMS($SMSContent, $query["client_mobile"]);
												//echo $gelen;
												$Response = substr($gelen, 0, 1);
												if ($Response == "0") {
													$UpdateSMS = $db->query("UPDATE sms SET sms_status=1 WHERE id='" . $SMSID . "'");
													$InsertTransaction = $db->query("INSERT INTO transactions(unix_time,distributor_id,
                                                    client_id,amount,sms_key,is_campaign,campaign_amount,transaction_type) VALUES('" . time() . "','" . $_SESSION["distributor_id"] . "',
                                                    '" . $query["ID"] . "','" . $price . "','" . $Code . "','" . $IsCampaign . "','" . $CampaignAmount . "','" . $query["card_type"] . "')");
													if ($InsertTransaction) {
														$ID = $db->insert_id;
														echo redirect("index.php?module=sales/new_sales_credit&do=new_sales_credit&id=" . $ID);
													}
													break;
													} else {
													continue;
												}
											}
											if ($i == 11) {
												$UpdateSMS = $db->query("UPDATE sms SET sms_status=2 WHERE id='" . $SMSID . "'");
												echo error("SMS Gönderimi Başarısız !!");
											}
											
											} else {
											echo error("SMS Gönderimi Başarısız!");
										}
										
									}
									}else{
									echo error("Müşteri Pasif Durumdadır!");
								}
								
								} else {
								echo warning("Girilen Kart Numarasına Ait Müşteri Bulunamadı!");
							}
						}
					}
				?>
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">Müşteri Kart Sorgulama</div>
                        <form action="" method="POST">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <label>KART NUMARASI</label>
                                        <input type="text" class="form-control" id="card" name="card"
                                        required onkeypress="return event.charCode>=48 && event.charCode<=57"
                                        autocomplete="off" maxlength="16" minlength="16"
                                        placeholder="16 Haneli Müşteri Kart Numarasını Giriniz...">
										
									</div>
								</div>
							</div>
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <label>SATIŞ TUTARI (KREDİ)</label>
										
                                        <input type="text" required class="form-control" name="remain1"
                                        autocomplete="off"
                                        id="remain1" maxlength="4"
                                        placeholder="Kredi Giriniz"
                                        onkeypress="return event.charCode>=48 && event.charCode<=57">
										
										
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
				} else if (@$_GET['do'] == "new_sales_credit") {
				if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
					$query = $db->query("SELECT * FROM transactions WHERE id='" . $_GET["id"] . "'")->fetch_assoc();
					$client = $db->query("SELECT * FROM clients WHERE id = '" . $query["client_id"] . "'")->fetch_assoc();
					if ($_POST) {
						if (!empty($_POST["sms_key"])) {
							if ($query["sms_key"] == $_POST["sms_key"]) {
								if ($query["transaction_status"] != 4) {
									if(!empty($_POST["plate"])){
										$_POST["plate"] = strtoupper($_POST["plate"]);
										$_POST["plate"] = str_replace(" ", "", $_POST["plate"]);
										$_POST["plate"] = trim($_POST["plate"]);
										$PLATE = $_POST["plate"];
									}else{
										$PLATE = "";
									}
									
									if ($query["transaction_type"] == 1) {
										$NewAmount = ($query["amount"] - $query["campaign_amount"]);

										if ($client["balance"] >= $NewAmount) {
											if ($query["is_campaign"] == 1) {
												$UpdateCampaignRight = $db->query("UPDATE client_campaigns SET campaign_right=(client_campaigns.campaign_right-1) WHERE client_id='" . $client["id"] . "'");
											}
											$newBalance = $client["balance"] - $NewAmount;
											$UpdateClient = $db->query("UPDATE clients SET balance='" . $newBalance . "' WHERE id='" . $client["id"] . "'");
											$UpdateTransaction = $db->query("UPDATE transactions SET transaction_status=4 WHERE id='" . $query["id"] . "'");
											$InsertReport = $db->query("INSERT INTO reports(report_plate,upload_unixtime,distributor_id,client_id,transaction_id) 
											VALUES('".$PLATE."'," . time() . "','" . $query["distributor_id"] . "','" . $query["client_id"] . "','" . $query["id"] . "')");
											$SMSContent = "Sayın Müşterimiz " . date("d-m-Y H:i:s", time()) . " Tarihinde Yapmış Olduğunuz " . $NewAmount . " TL tutarındaki İşlem Başarılıdır. Yeni Bakiyeniz : " . $newBalance . " TL dir.";
											$InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) VALUES('" . $client["id"] . "','" . $client["client_mobile"] . "','" . $SMSContent . "')");
											$SMSID = $db->insert_id;
											//GondericiAdiSor();
											$i = 1;
											while ($i <= 10) {
												$i++;
												$gelen = SendSMS($SMSContent, $client["client_mobile"]);
												$Response = substr($gelen, 0, 1);
												if ($Response == "0") {
													$UpdateSMS = $db->query("UPDATE sms SET sms_status=1 WHERE id='" . $SMSID . "'");
													break;
													} else {
													continue;
												}
											}
											if ($i == 11) {
												$UpdateSMS = $db->query("UPDATE sms SET sms_status=2 WHERE id='" . $SMSID . "'");
												echo error("SMS Gönderimi Başarısız!");
											}
											echo success("İşlem Başarıyla Gerçekleşti.<br>
											Ekspertiz Raporu Yüklemek İçin <a href='index.php?module=sales/upload_expertise&do=upload_file_list&id=" . $query["id"] . "'><font color='blue'>TIKLAYIN</font></a><br>
											Anasayfa İçin <a href='index.php'><font color='orange'>TIKLAYIN</font></a>");
											} else {
											$UpdateTransaction = $db->query("UPDATE transactions SET transaction_status=3 WHERE id='" . $query["id"] . "'");
											$SMSContent = "Sayın Müşterimiz " . date("d-m-Y H:i:s", time()) . " Tarihinde Yapacak Olduğunuz " . $NewAmount . " TL tutarındaki İşlem için Bakiyeniz Yetersizdir. Mevcut Bakiyeniz : " . $client["balance"] . " TL dir.";
											$InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) VALUES('" . $client["id"] . "','" . $client["client_mobile"] . "','" . $SMSContent . "')");
											$SMSID = $db->insert_id;
											//GondericiAdiSor();
											$i = 1;
											while ($i <= 10) {
												$i++;
												$gelen = SendSMS($SMSContent, $client["client_mobile"]);
												$Response = substr($gelen, 0, 1);
												if ($Response == "0") {
													$UpdateSMS = $db->query("UPDATE sms SET sms_status=1 WHERE id='" . $SMSID . "'");
													break;
													} else {
													continue;
												}
											}
											if ($i == 11) {
												$UpdateSMS = $db->query("UPDATE sms SET sms_status=2 WHERE id='" . $SMSID . "'");
												echo error("SMS Gönderimi Başarısız!");
											}
											echo warning("İşlem İçin Müşteri Bakiyesi Yetersiz!");
											
										}
										} else {
										$NewAmount = $query["amount"];
										if ($client["credit"] >= $NewAmount) {
											
											$newBalance = $client["credit"] - $NewAmount;
											$UpdateClient = $db->query("UPDATE clients SET credit='" . $newBalance . "' WHERE id='" . $client["id"] . "'");
											$UpdateTransaction = $db->query("UPDATE transactions SET transaction_status=4 WHERE id='" . $query["id"] . "'");
											$InsertReport = $db->query("INSERT INTO reports(report_plate,upload_unixtime,distributor_id,client_id,transaction_id) 
											VALUES('".$PLATE."','" . time() . "','" . $query["distributor_id"] . "','" . $query["client_id"] . "','" . $query["id"] . "')");
											$SMSContent = "Sayın Müşterimiz " . date("d-m-Y H:i:s", time()) . " Tarihinde Yapmış Olduğunuz " . $NewAmount . " Kredi tutarındaki İşlem Başarılıdır. Yeni Kredi Hakkınız : " . $newBalance . ".";
											$InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) VALUES('" . $client["id"] . "','" . $client["client_mobile"] . "','" . $SMSContent . "')");
											$SMSID = $db->insert_id;
											//GondericiAdiSor();
											$i = 1;
											while ($i <= 10) {
												$i++;
												$gelen = SendSMS($SMSContent, $client["client_mobile"]);
												$Response = substr($gelen, 0, 1);
												if ($Response == "0") {
													$UpdateSMS = $db->query("UPDATE sms SET sms_status=1 WHERE id='" . $SMSID . "'");
													break;
													} else {
													continue;
												}
											}
											if ($i == 11) {
												$UpdateSMS = $db->query("UPDATE sms SET sms_status=2 WHERE id='" . $SMSID . "'");
												echo error("SMS Gönderimi Başarısız!");
											}
											echo success("İşlem Başarıyla Gerçekleşti.<br>
											Ekspertiz Raporu Yüklemek İçin <a href='index.php?module=sales/upload_expertise&do=upload_file_list&id=" . $query["id"] . "'><font color='blue'>TIKLAYIN</font></a><br>
											Anasayfa İçin <a href='index.php'><font color='orange'>TIKLAYIN</font></a>");
										} else {
											$UpdateTransaction = $db->query("UPDATE transactions SET transaction_status=3 WHERE id='" . $query["id"] . "'");
											$SMSContent = "Sayın Müşterimiz " . date("d-m-Y H:i:s", time()) . " Tarihinde Yapacak Olduğunuz " . $NewAmount . " Kredi tutarındaki İşlem için Kredi Hakkınız Yoktur.Mevcut Krediniz:".$client["credit"];
											$InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) VALUES('" . $client["id"] . "','" . $client["client_mobile"] . "','" . $SMSContent . "')");
											$SMSID = $db->insert_id;
											//GondericiAdiSor();
											$i = 1;
											while ($i <= 10) {
												$i++;
												$gelen = SendSMS($SMSContent, $client["client_mobile"]);
												$Response = substr($gelen, 0, 1);
												if ($Response == "0") {
													$UpdateSMS = $db->query("UPDATE sms SET sms_status=1 WHERE id='" . $SMSID . "'");
													break;
													} else {
													continue;
												}
											}
											if ($i == 11) {
												$UpdateSMS = $db->query("UPDATE sms SET sms_status=2 WHERE id='" . $SMSID . "'");
												echo error("SMS Gönderimi Başarısız!");
											}
											echo warning("İşlem İçin Müşteri Bakiyesi Yetersiz!");
										}
									}
									} else {
									echo warning("Bu İşlemi Daha Önceden Gerçekleştirdiniz!");
								}
								} else {
								$UpdateTransaction = $db->query("UPDATE transactions SET transaction_status=2 WHERE id='" . $query["id"] . "'");
								echo error("SMS Onay Kodu Hatalı Girildi!");
							}
							
							} else {
							echo error("Lütfen Doğrulama Kodunu Giriniz!");
						}
					}
					
				?>
				<div class="card">
					<div class="card-body">
						<div class="card-title">Onay Kodu Doğrulama</div>
						<form action="" method="POST">
							<div class="row">
								<div class="col-lg-6 col-md-6">
									<div class="form-group">
										<label>Müşteri Adı</label>
										
										<input type="text" required class="form-control" name="remain1"
										autocomplete="off" readonly value="<?= $client["client_name"] ?>"
										id="remain1">
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="form-group">
										<label>İşlem Tutarı(KREDİ)</label>
										
										<input type="text" class="form-control" name="remain2"
										autocomplete="off" readonly
										value="<?= $query["amount"]. " Kredi" ?>"
										id="remain2">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-4 col-md-4">
									<div class="form-group">
										<label>ONAY KODU</label>
										<input type="text" class="form-control" id="sms_key" name="sms_key"
										required
										autocomplete="off" maxlength="4" minlength="4"
										placeholder="4 Haneli Onay Kodunu Giriniz...">
										
									</div>
								</div>
								<div class="col-lg-5 col-md-5">
									<div class="form-group">
										<label>PLAKA</label>
										<input type="text" class="form-control" id="plate" name="plate"                                    
										autocomplete="off" maxlength="15" minlength="7"
										placeholder="Araç Plakasını Giriniz">
										
									</div>
								</div>
								<div class="col-lg-3 col-md-3">
									<label>&emsp;</label>
									<div class="form-group" style="text-align: center">
										<button type="submit"
										class="btn btn-warning px-5">ONAYLA
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