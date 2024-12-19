<?php
require_once "system/database.php";
require_once "system/functions.php";
session_start();
## 2. ADIM için örnek kodlar ##

## ÖNEMLİ UYARILAR ##
## 1) Bu sayfaya oturum (SESSION) ile veri taşıyamazsınız. Çünkü bu sayfa müşterilerin yönlendirildiği bir sayfa değildir.
## 2) Entegrasyonun 1. ADIM'ında gönderdiğniz merchant_oid değeri bu sayfaya POST ile gelir. Bu değeri kullanarak
## veri tabanınızdan ilgili siparişi tespit edip onaylamalı veya iptal etmelisiniz.
## 3) Aynı sipariş için birden fazla bildirim ulaşabilir (Ağ bağlantı sorunları vb. nedeniyle). Bu nedenle öncelikle
## siparişin durumunu veri tabanınızdan kontrol edin, eğer onaylandıysa tekrar işlem yapmayın. Örneği aşağıda bulunmaktadır.

$post = $_POST;
$oid = $post["merchant_oid"];


####################### DÜZENLEMESİ ZORUNLU ALANLAR #######################
#
## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
$merchant_key = '83LpkdXRF2Gc9qtK';
$merchant_salt = 'hYf8HXdtjJNcP58C';
###########################################################################

####### Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. #######
#
## POST değerleri ile hash oluştur.
$hash = base64_encode(hash_hmac('sha256', $post['merchant_oid'] . $merchant_salt . $post['status'] . $post['total_amount'], $merchant_key, true));
#
## Oluşturulan hash'i, paytr'dan gelen post içindeki hash ile karşılaştır (isteğin paytr'dan geldiğine ve değişmediğine emin olmak için)
## Bu işlemi yapmazsanız maddi zarara uğramanız olasıdır.
if ($hash != $post['hash'])
    die('PAYTR notification failed: bad hash');
###########################################################################

## BURADA YAPILMASI GEREKENLER
## 1) Siparişin durumunu $post['merchant_oid'] değerini kullanarak veri tabanınızdan sorgulayın.
## 2) Eğer sipariş zaten daha önceden onaylandıysa veya iptal edildiyse  echo "OK"; exit; yaparak sonlandırın.

/* Sipariş durum sorgulama örnek
    $durum = SQL
   if($durum == "onay" || $durum == "iptal"){
        echo "OK";
        exit;
    }
 */

if (strlen($oid) <= 20) { //Normal Yükleme
    $SelectDeposit = $db->query("SELECT * FROM deposits WHERE oid_number='" . $oid . "' and status=2 ORDER BY id DESC")->fetch_assoc();

    if ($post['status'] == 'success') { ## Ödeme Onaylandı

        ## BURADA YAPILMASI GEREKENLER
        ## 1) Siparişi onaylayın.
        ## 2) Eğer müşterinize mesaj / SMS / e-posta gibi bilgilendirme yapacaksanız bu aşamada yapmalısınız.
        ## 3) 1. ADIM'da gönderilen payment_amount sipariş tutarı taksitli alışveriş yapılması durumunda
        ## değişebilir. Güncel tutarı $post['total_amount'] değerinden alarak muhasebe işlemlerinizde kullanabilirsiniz.
        if ($SelectDeposit["status"] != 1) {
            $UpdateDeposit = $db->query("UPDATE deposits SET status=1 WHERE oid_number='" . $oid . "'");
        }
        $QueryCard = $db->query("SELECT * FROM clients WHERE id='" . $SelectDeposit["client_id"] . "'")->fetch_assoc();
        $CardTypeQuery = $db->query("SELECT * FROM cards LEFT JOIN clients ON clients.card_id=cards.id WHERE clients.id='" . $SelectDeposit["client_id"] . "'")->fetch_assoc();
        $price = $SelectDeposit["amount"];
        if ($CardTypeQuery["card_type"] == 1) {
            $Client = $db->query("SELECT * FROM clients WHERE id='" . $SelectDeposit["client_id"] . "'")->fetch_assoc();
            if ($CardTypeQuery["card_campaign_id"] != 0) {
                $CampaignFetch = $db->query("SELECT * FROM client_campaigns WHERE client_id='" . $SelectDeposit["client_id"] . "'")->fetch_assoc();
                $LastAmount = $CampaignFetch["last_upload"];
                $LastAmountAndPrice = ($LastAmount + $price);


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
            } else {
                $CampaignDetail = "Yüklemeniz Sonrası Kazanılan Kampanya Katılım Hakkı : 0";
            }


            $Update = $db->query("UPDATE clients SET balance=clients.balance+'" . $price . "'
            WHERE id='" . $SelectDeposit["client_id"] . "'");
            if ($Update) {
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
                    //echo error("SMS Gönderimi Başarısız!");
                }
                //echo $gelen . "<br>";

                //echo "OK";
            } else {
                //echo error("Sistem Hatası! Karttan Para Çekilmiş Olup Bakiye Yüklenememiştir!");
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
                    //echo error("SMS Gönderimi Başarısız!");
                }

            }
        } else {
            $credit = $db->query("SELECT * FROM credit_cards_type WHERE balance='" . $price . "'")->fetch_assoc();

            $Update = $db->query("UPDATE clients SET credit=clients.credit+'" . $credit["credit"] . "'
            WHERE id='" . $SelectDeposit["client_id"] . "'");
            if ($Update) {
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
                    //echo error("SMS Gönderimi Başarısız!");
                }
                //echo $gelen . "<br>";

                //echo "OK";
            } else {
                //echo error("Sistem Hatası! Karttan Para Çekilmiş Olup Bakiye Yüklenememiştir!");
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
                    //echo error("SMS Gönderimi Başarısız!");
                }

            }
        }


    } else { ## Ödemeye Onay Verilmedi

        ## BURADA YAPILMASI GEREKENLER
        ## 1) Siparişi iptal edin.
        ## 2) Eğer ödemenin onaylanmama sebebini kayıt edecekseniz aşağıdaki değerleri kullanabilirsiniz.
        ## $post['failed_reason_code'] - başarısız hata kodu
        ## $post['failed_reason_msg'] - başarısız hata mesajı
        $response = $post['failed_reason_code'] . ' : ' . $post['failed_reason_msg'];
        $UpdateDeposit = $db->query("UPDATE deposits SET status=0,description='" . $response . "' WHERE oid_number='" . $oid . "'");
    }
} else { //Randevu
    $SelectDeposit = $db->query("SELECT * FROM date_list WHERE oid_number='" . $oid . "' and price_status=0 ORDER BY id DESC")->fetch_assoc();
    $Client = $db->query("SELECT * FROM clients WHERE id='".$SelectDeposit["client_id"]."'")->fetch_assoc();
    $Packet = $db->query("SELECT * FROM customer_packet WHERE id='".$SelectDeposit["packet_id"]."'")->fetch_assoc();

    if ($post['status'] == 'success') { ## Ödeme Onaylandı

        ## BURADA YAPILMASI GEREKENLER
        ## 1) Siparişi onaylayın.
        ## 2) Eğer müşterinize mesaj / SMS / e-posta gibi bilgilendirme yapacaksanız bu aşamada yapmalısınız.
        ## 3) 1. ADIM'da gönderilen payment_amount sipariş tutarı taksitli alışveriş yapılması durumunda
        ## değişebilir. Güncel tutarı $post['total_amount'] değerinden alarak muhasebe işlemlerinizde kullanabilirsiniz.
        if ($SelectDeposit["price_status"] != 1) {
            $UpdateDeposit = $db->query("UPDATE date_list SET price_status=1 WHERE oid_number='" . $oid . "'");
        }
        $SMSContent = "Sayın Müşterimiz Randevu oluşturma işleminiz tamamlanmıştır.".$Packet["packet_name"]." hizmeti karşılığında " . $SelectDeposit["price"] . " TL ödediniz.İyi günler dileriz.";
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
            //echo error("SMS Gönderimi Başarısız!");
        }


    } else { ## Ödemeye Onay Verilmedi

        ## BURADA YAPILMASI GEREKENLER
        ## 1) Siparişi iptal edin.
        ## 2) Eğer ödemenin onaylanmama sebebini kayıt edecekseniz aşağıdaki değerleri kullanabilirsiniz.
        ## $post['failed_reason_code'] - başarısız hata kodu
        ## $post['failed_reason_msg'] - başarısız hata mesajı
        $response = $post['failed_reason_code'] . ' : ' . $post['failed_reason_msg'];
        $UpdateDeposit = $db->query("UPDATE date_list SET date_status=3,payment_desc='" . $response . "' WHERE oid_number='" . $oid . "'");

        $SMSContent = "Sayın Müşterimiz Randevu talebiniz için ödeme alınamamıştır.";
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
            //echo error("SMS Gönderimi Başarısız!");
        }
    }
}


## Bildirimin alındığını PayTR sistemine bildir.
ob_clean();
echo "OK";
exit;
?>