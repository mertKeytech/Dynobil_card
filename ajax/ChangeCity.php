<?php
require_once("../system/database.php");

$Query = $db->query("SELECT * FROM county WHERE city_id='" . $_POST['id'] . "' ORDER BY county_name");
?>
<option disabled selected value="">Seçiniz</option>
<?php
while ($row = $Query->fetch_assoc()) {
    /*$Query2 = $db->query("SELECT * FROM device_information WHERE device_type_information_id='".$row["id"]."'");
    while($row2 = $Query2->fetch_assoc()) {*/
    ?>
    <option value="<?= $row['id'] ?>"><?= $row['county_name'] ?></option>
    <?php
    // }
}
?>
