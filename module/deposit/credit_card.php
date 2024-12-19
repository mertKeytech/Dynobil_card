<div class="row">
	<div class="col col-lg-12 col-xl-12 col-md-12">
		<?php
		if (@$_GET['do'] == "credit_card") {
			if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
				if ($_POST) {
					if (!empty($_POST["remain1"])) {
						$QueryCard = $db->query("SELECT * FROM clients WHERE id='" . $_SESSION["client_id"] . "'")->fetch_assoc();
						if ($QueryCard["card_id"] != 0) {
							$CardTypeQuery = $db->query("SELECT * FROM cards LEFT JOIN clients ON clients.card_id=cards.id WHERE clients.id='" . $_SESSION["client_id"] . "'")->fetch_assoc();
							if ($CardTypeQuery["card_type"] == 1) {

								if (!empty($_POST['remain2'])) {
									if (strlen($_POST["remain2"]) == 1) {
										$_POST["remain2"] = $_POST["remain2"] . "0";
									}
									$price = $_POST["remain1"] . "." . $_POST["remain2"];
								} else {
									$price = $_POST["remain1"] . ".00";
								}
								$credit = 0;
							} else {
								$PRICE = $db->query("SELECT * FROM credit_cards_type WHERE id='" . $_POST["remain1"] . "'")->fetch_assoc();
								$price = $PRICE["balance"];
								$credit = $PRICE["credit"];
							}
							$oid_random = RandomCode(20);
							while (1 == 1) {
								if (strlen($oid_random) == 20) {
									break;
								} else {
									$oid_random = RandomCode(20);
								}
							}
							$Insert = $db->query("INSERT INTO deposits (unixtime,client_id,amount,payment_method,oid_number,status,deposit_credit)
								VALUES('" . time() . "','" . $_SESSION["client_id"] . "','" . $price . "',1,'" . $oid_random . "',2,'".$credit."')");
							if ($Insert) {
								echo redirect("index.php?module=deposit/credit_card&do=payment_page");
							} else {
								echo mysqli_error($db);
							}


							/*if ($CardTypeQuery["card_type"] == 1) {
								$CampaignFetch = $db->query("SELECT * FROM client_campaigns WHERE client_id='" . $_SESSION["client_id"] . "'")->fetch_assoc();
								$LastAmount = $CampaignFetch["last_upload"];
								$LastAmountAndPrice = ($LastAmount + $price);

								$Client = $db->query("SELECT * FROM clients WHERE id='" . $_SESSION["client_id"] . "'")->fetch_assoc();
								$CampaignInfo = $db->query("SELECT * FROM campaigns LEFT JOIN cards ON cards.card_campaign_id=campaigns.id WHERE cards.id='" . $Client["card_id"] . "'")->fetch_assoc();
								$CampaignAmount = $CampaignInfo["campaign_amount"];
								$CampaignPercent = $CampaignInfo["campaign_percent"];

								if ($LastAmountAndPrice >= $CampaignAmount) {
                                $kalan = $LastAmountAndPrice % $CampaignAmount; // last_upload yazılacak değer
                                $bolum = $LastAmountAndPrice / $CampaignAmount;
                                $bolumInt = (int)$bolum; // kazanılan hak
                                //echo $kalan." ".$bolum." ".$bolumInt;
                                $Update = $db->query("UPDATE client_campaigns SET last_upload='" . $kalan . "',campaign_right=(client_campaigns.campaign_right+'" . $bolumInt . "') WHERE id='" . $CampaignFetch["id"] . "'");
                                $CampaignDetail = "Yüklemeniz Sonrası Kazanılan Kampanya Katılım Hakkı : " . $bolumInt;
                            } else {
                            	$Update = $db->query("UPDATE client_campaigns SET last_upload='" . $LastAmountAndPrice . "' WHERE id='" . $CampaignFetch["id"] . "'");
                            	$CampaignDetail = "Yüklemeniz Sonrası Kazanılan Kampanya Katılım Hakkı : 0";
                            }

                            $Insert = $db->query("INSERT INTO deposits (unixtime,client_id,amount,payment_method,oid,status)
                            	VALUES('" . time() . "','" . $_SESSION["client_id"] . "','" . $price . "',1,'" . $oid_random . "',2)");
                            $Update = $db->query("UPDATE clients SET balance=clients.balance+'" . $price . "' 
                            	WHERE id='" . $_SESSION["client_id"] . "'");
                            if ($Insert && $Update) {
                            	$SMSContent = "Sayın Müşterimiz Kartınıza " . $price . " TL Tutarında Bakiye Yüklenmiştir." . $CampaignDetail;
                            	$InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) 
                            		VALUES('" . $Client["id"] . "','" . $Client["client_mobile"] . "','" . $SMSContent . "')");
                            	$SMSID = $db->insert_id;
                                //GondericiAdiSor();
                            	$i = 1;
                            	while ($i <= 10) {
                            		$i++;
                            		$gelen = SendSMS($SMSContent, $Client["client_mobile"]);
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
                                //echo $gelen . "<br>";

                            	echo success("Bakiye Yüklemesi Gerçekleşmiştir!<br>" . $CampaignDetail);
                            } else {
                            	echo error("Sistem Hatası! Karttan Para Çekilmiş Olup Bakiye Yüklenememiştir!");
                            	$SMSContent = "Sayın Müşterimiz Kredi Kartınızdan " . $price . " TL Tutarında Ücret Tahsil Edilmiştir. Ancak Kartınıza Yüklenmesinde Sistemsel Bir Hata Oluşmuştur. Lütfen Bayiniz İle İletişime Geçiniz.";
                            	$InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) 
                            		VALUES('" . $Client["id"] . "','" . $Client["client_mobile"] . "','" . $SMSContent . "')");
                            	$SMSID = $db->insert_id;
                                //GondericiAdiSor();
                            	$i = 1;
                            	while ($i <= 10) {
                            		$i++;
                            		$gelen = SendSMS($SMSContent, $Client["client_mobile"]);
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

                            }
                        }
                        else {
                        	$credit = $db->query("SELECT * FROM credit_cards_type WHERE id='" . $_POST["remain1"] . "'")->fetch_assoc();
                        	$Insert = $db->query("INSERT INTO deposits (unixtime,client_id,amount,payment_method,oid,status)
                        		VALUES('" . time() . "','" . $_SESSION["client_id"] . "','" . $price . "',1,'" . $oid_random . "',2)");
                        	$Update = $db->query("UPDATE clients SET credit=clients.credit+'" . $credit["credit"] . "' 
                        		WHERE id='" . $_SESSION["client_id"] . "'");
                        	if ($Insert && $Update) {
                        		$SMSContent = "Sayın Müşterimiz Kartınıza " . $price . " TL Tutarı Karşılığında " . $credit["credit"] . " Kredi Hakkı Yüklenmiştir.";
                        		$InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) 
                        			VALUES('" . $QueryCard["id"] . "','" . $QueryCard["client_mobile"] . "','" . $SMSContent . "')");
                        		$SMSID = $db->insert_id;
                                //GondericiAdiSor();
                        		$i = 1;
                        		while ($i <= 10) {
                        			$i++;
                        			$gelen = SendSMS($SMSContent, $QueryCard["client_mobile"]);
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
                                //echo $gelen . "<br>";

                        		echo success("Kredi Yüklemesi Gerçekleşmiştir!<br>");
                        	} else {
                        		echo error("Sistem Hatası! Karttan Para Çekilmiş Olup Bakiye Yüklenememiştir!");
                        		$SMSContent = "Sayın Müşterimiz Kredi Kartınızdan " . $price . " TL Tutarında Ücret Tahsil Edilmiştir. Ancak Kartınıza Yüklenmesinde Sistemsel Bir Hata Oluşmuştur. Lütfen Bayiniz İle İletişime Geçiniz.";
                        		$InsertSMS = $db->query("INSERT INTO sms(client_id,mobile,sms_content) 
                        			VALUES('" . $QueryCard["id"] . "','" . $QueryCard["client_mobile"] . "','" . $SMSContent . "')");
                        		$SMSID = $db->insert_id;
                                //GondericiAdiSor();
                        		$i = 1;
                        		while ($i <= 10) {
                        			$i++;
                        			$gelen = SendSMS($SMSContent, $QueryCard["client_mobile"]);
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

                        	}
                        }*/
                    } else {
                    	echo error("Sistemde Kayıtlı Kartınız Bulunmamaktadır!<br>Lütfen Bayinizle İletişime Geçiniz.");
                    }

                } else {
                	echo error("Lütfen Tüm Alanları Doldurunuz!");
                }

            }
            ?>

            <form action="" method="POST" id="CardForm">
            	<div class="card">
            		<div class="card-body">
            			<div class="card-title">
            				<center>YÜKLEME BİLGİLERİ</center>
            			</div>
            			<br>
            			<?php $CardTypeQuery = $db->query("SELECT * FROM cards LEFT JOIN clients ON clients.card_id=cards.id WHERE clients.id='" . $_SESSION["client_id"] . "'")->fetch_assoc();
            			if ($CardTypeQuery["card_type"] == 1) {
            				?>
            				<div class="form-group row" style="text-align: center">
            					<div class="col-md-3 col-lg-3"></div>
            					<label class="col-md-2 col-lg-2 col-form-label">YÜKLENECEK MİKTAR :</label>
            					<div class="col-md-2 col-lg-2">
            						<input type="text" class="form-control" name="remain1"
            						onkeypress="return event.charCode>=48 && event.charCode<=57"
            						placeholder="Tutar Giriniz">
            					</div>
            					<label style="margin-top: 1.5%;">,</label>
            					<div class="col-md-1 col-lg-1">
            						<input type="text" class="form-control" name="remain2"
            						onkeypress="return event.charCode>=48 && event.charCode<=57"
            						placeholder="00">
            					</div>
            					<div class="col-md-2 col-lg-2"></div>
            				</div>
            			<?php } else { ?>
            				<div class="form-group row" style="text-align: center">
            					<div class="col-md-2 col-lg-2"></div>
            					<label class="col-md-3 col-lg-3 col-form-label">YÜKLENECEK MİKTAR :</label>
            					<div class="col-md-3 col-lg-3">
            						<select class="form-control" name="remain1">
            							<?php $TypeQuery = $db->query("SELECT * FROM credit_cards_type ORDER BY balance");
            							while ($row = $TypeQuery->fetch_assoc()) { ?>
            								<option value="<?= $row["id"] ?>"><?= $row["balance"] . " TL - " . $row["credit"] . " Kredi" ?></option>
            							<?php } ?>
            						</select>

            					</div>

            					<div class="col-md-2 col-lg-2"></div>
            				</div>
            			<?php } ?>
            		</div>
            	</div>
            	<div class="card">
            		<div class="card-body">
            			<div class="card-title">
            				<center>KREDi KARTI BİLGİLERİ</center>
            			</div>
            			<br>
            			<div class="row">
            				<div class="col-md-5 col-lg-5">
            					<div class="card-wrapper"></div>
            				</div>
            				<div class="col-md-7 col-lg-7">
            					<div class="form-group row">
            						<label class="col-md-3 col-lg-3 col-form-label">KART SAHİBİ</label>
            						<div class="col-md-5 col-lg-5">
            							<input type="text" class="form-control" name="name"
            							placeholder="Kart Üzerindeki Ad-Soyad">
            						</div>
            					</div>
            					<div class="form-group row">
            						<label class="col-md-3 col-lg-3 col-form-label">KART NUMARASI</label>
            						<div class="col-md-4 col-lg-4">
            							<input type="tel" class="form-control" name="number"
            							placeholder="16 Haneli Kart Numaranız">
            						</div>
            					</div>
            					<div class="form-group row">
            						<label class="col-md-3 col-lg-3 col-form-label">SON KULLANMA
            						TARİHİ</label>
            						<div class="col-md-2 col-lg-2">
            							<input type="tel" class="form-control" name="expiry"
            							placeholder="AA/YYYY">
            						</div>
            					</div>
            					<div class="form-group row">
            						<label class="col-md-3 col-lg-3 col-form-label">CVC</label>
            						<div class="col-md-2 col-lg-2">
            							<input type="text" class="form-control" name="cvc"
            							placeholder="CVC">
            						</div>
            					</div>

            				</div>
            			</div>
            			<br><br>
            		</div>
            	</div>
            	<div class="card" style="text-align: center">
            		<div class="card-body">
            			<br>
            			<div class="form-group" style="text-align: center">
            				<center>
            					<button type="submit"
            					class="btn btn-success px-5">ONAYLA
            				</button>
            			</center>
            		</div>

            	</div>
            </div>
        </form>
        
        <script src="assets/card/dist/card.js"></script>
        <script>
        	new Card({
        		form: document.querySelector('form'),
        		container: '.card-wrapper',
        		placeholders: {
        			number: '**** **** **** ****',
        			name: 'ADINIZ SOYADINIZ',
        			expiry: 'AA/YYYY',
        			cvc: '***'
        		}
        	});
        </script>

    <?php } else {
    	echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
    }
}
else if (@$_GET['do'] == "payment_page") {
	if (Permission($_SESSION['user_group_id'], $_GET['do'])) {


		$SelectDeposit = $db->query("SELECT * FROM deposits WHERE client_id='".$_SESSION["client_id"]."' ORDER BY id DESC")->fetch_assoc();
		$price = $SelectDeposit["amount"];
		$oid_random = $SelectDeposit["oid_number"];


		$paytrAmount = $price * 100;

        // PayTR entegrasyon

		$merchant_id = '173298';
		$merchant_key = '83LpkdXRF2Gc9qtK';
		$merchant_salt = 'hYf8HXdtjJNcP58C';
        //#
        //## Müşterinizin sitenizde kayıtlı veya form vasıtasıyla aldığınız eposta adresi
		$email = $_SESSION["email"];
        //#
        //## Tahsil edilecek tutar.
        $payment_amount = $paytrAmount; //9.99 için 9.99 * 100 = 999 gönderilmelidir.
        //#
        //## Sipariş numarası: Her işlemde benzersiz olmalıdır!! Bu bilgi bildirim sayfanıza yapılacak bildirimde geri gönderilir.
        $merchant_oid = $oid_random;
        //#
        //## Müşterinizin sitenizde kayıtlı veya form aracılığıyla aldığınız ad ve soyad bilgisi
        $user_name = $_SESSION['user_name'];
        //#
        //## Müşterinizin sitenizde kayıtlı veya form aracılığıyla aldığınız adres bilgisi
        $user_address = $_SESSION['address'] != "" ? $_SESSION['address'] : "A";
        //#
        //## Müşterinizin sitenizde kayıtlı veya form aracılığıyla aldığınız telefon bilgisi
        $user_phone = $_SESSION['mobile'] != "" ? $_SESSION['mobile'] : "1";
        //#
        //## Başarılı ödeme sonrası müşterinizin yönlendirileceği sayfa
        //## !!! Bu sayfa siparişi onaylayacağınız sayfa değildir! Yalnızca müşterinizi bilgilendireceğiniz sayfadır!
        //## !!! Siparişi onaylayacağız sayfa "Bildirim URL" sayfasıdır (Bakınız: 2.ADIM Klasörü).
        $merchant_ok_url = "https://dynobilkart.com/index.php";
        //#
        //## Ödeme sürecinde beklenmedik bir hata oluşması durumunda müşterinizin yönlendirileceği sayfa
        //## !!! Bu sayfa siparişi iptal edeceğiniz sayfa değildir! Yalnızca müşterinizi bilgilendireceğiniz sayfadır!
        //## !!! Siparişi iptal edeceğiniz sayfa "Bildirim URL" sayfasıdır (Bakınız: 2.ADIM Klasörü).
        $merchant_fail_url = "https://dynobilkart.com/index.php";

        //#
        //## Müşterinin sepet/sipariş içeriği
        $user_basket = base64_encode(json_encode(array(
            array('Kredi Yükleme Tahsilatı :', $paytrAmount, 1), // 1. ürün (Ürün Ad - Birim Fiyat - Adet )
        )));
        //#
        /* ÖRNEK $user_basket oluşturma - Ürün adedine göre array'leri çoğaltabilirsiniz
        $user_basket = base64_encode(json_encode(array(
            array("Örnek ürün 1", "18.00", 1), // 1. ürün (Ürün Ad - Birim Fiyat - Adet )
            array("Örnek ürün 2", "33.25", 2), // 2. ürün (Ürün Ad - Birim Fiyat - Adet )
            array("Örnek ürün 3", "45.42", 1)  // 3. ürün (Ürün Ad - Birim Fiyat - Adet )
        )));
        */
        //############################################################################################

        //## Kullanıcının IP adresi
        if (isset($_SERVER["HTTP_CLIENT_IP"])) {
        	$ip = $_SERVER["HTTP_CLIENT_IP"];
        } elseif (isset($_SERVER["HTTP_X_FORWARDED_FOR"])) {
        	$ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
        } else {
        	$ip = $_SERVER["REMOTE_ADDR"];
        }

        //## !!! Eğer bu örnek kodu sunucuda değil local makinanızda çalıştırıyorsanız
        //## buraya dış ip adresinizi (https://www.whatismyip.com/) yazmalısınız. Aksi halde geçersiz paytr_token hatası alırsınız.
        $user_ip = $ip;
        //##

        //## İşlem zaman aşımı süresi - dakika cinsinden
        $timeout_limit = "30";

        //## Hata mesajlarının ekrana basılması için entegrasyon ve test sürecinde 1 olarak bırakın. Daha sonra 0 yapabilirsiniz.
        $debug_on = 1;

        //## Mağaza canlı modda iken test işlem yapmak için 1 olarak gönderilebilir.
        $test_mode = 0;

        $no_installment = 0; // Taksit yapılmasını istemiyorsanız, sadece tek çekim sunacaksanız 1 yapın

        //## Sayfada görüntülenecek taksit adedini sınırlamak istiyorsanız uygun şekilde değiştirin.
        //## Sıfır (0) gönderilmesi durumunda yürürlükteki en fazla izin verilen taksit geçerli olur.
        $max_installment = 0;

        $currency = "TL";

        //####### Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. #######
        $hash_str = $merchant_id . $user_ip . $merchant_oid . $email . $payment_amount . $user_basket . $no_installment . $max_installment . $currency . $test_mode;
        $paytr_token = base64_encode(hash_hmac('sha256', $hash_str . $merchant_salt, $merchant_key, true));
        $post_vals = array(
        	'merchant_id' => $merchant_id,
        	'user_ip' => $user_ip,
        	'merchant_oid' => $merchant_oid,
        	'email' => $email,
        	'payment_amount' => $payment_amount,
        	'paytr_token' => $paytr_token,
        	'user_basket' => $user_basket,
        	'debug_on' => $debug_on,
        	'no_installment' => $no_installment,
        	'max_installment' => $max_installment,
        	'user_name' => $user_name,
        	'user_address' => $user_address,
        	'user_phone' => $user_phone,
        	'merchant_ok_url' => $merchant_ok_url,
        	'merchant_fail_url' => $merchant_fail_url,
        	'timeout_limit' => $timeout_limit,
        	'currency' => $currency,
        	'test_mode' => $test_mode
        );

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/api/get-token");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 20);
        $result = @curl_exec($ch);

        if (curl_errno($ch))
        	die("PAYTR IFRAME connection error. err:" . curl_error($ch));

        curl_close($ch);

        $result = json_decode($result, 1);

        if ($result['status'] == 'success')
        	$token = $result['token'];
        else
        	die("PAYTR IFRAME failed. reason:" . $result['reason']);
        //#########################################################################

        ?>

        <!-- <!-- Ödeme formunun açılması için gereken HTML kodlar / Başlangıç -->
        <script src="https://www.paytr.com/js/iframeResizer.min.js"></script>
        <iframe src="https://www.paytr.com/odeme/guvenli/<?php echo $token; ?>" id="paytriframe" frameborder="0"
        	scrolling="no" style="width: 100%;"></iframe>
        	<script>iFrameResize({}, '#paytriframe');</script>
        	<!-- Ödeme formunun açılması için gereken HTML kodlar / Bitiş --> -->


        <?php } else {
        	echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
        }
    } if (@$_GET['do'] == "response_payment") {
    	if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
    		
    		?>





    	<?php } else {
    		echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
    	}
    }
    ?>
</div>
</div>