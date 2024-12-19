<?php
require_once("../system/database.php");
require_once("../system/functions.php");

$Query = $db->query("SELECT *,clients.id AS ID FROM clients
 LEFT JOIN cards ON cards.id=clients.card_id WHERE card_number LIKE '" . $_POST['value'] . "%'
  or client_name LIKE '".$_POST["value"]."%' ORDER BY client_name");
?>
<option disabled selected value="">--Seçiniz--</option>
<?php
while ($row = $Query->fetch_assoc()) {
    /*$Query2 = $db->query("SELECT * FROM device_information WHERE device_type_information_id='".$row["id"]."'");
    while($row2 = $Query2->fetch_assoc()) {*/
    ?>
    <option value="<?= $row['ID'] ?>"><?= $row['client_name']." - ".CardNumberMask($row["card_number"]) ?></option>
    <?php
    // }
}
?>
