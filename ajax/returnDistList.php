<?php
require_once("../system/database.php");
require_once("../system/functions.php");

$Query = $db->query("SELECT * FROM distributors
  WHERE company_name LIKE '" . $_POST['value'] . "%'
  ORDER BY company_name");
?>
<option disabled selected value="">--Seçiniz--</option>
<?php
while ($row = $Query->fetch_assoc()) {
    /*$Query2 = $db->query("SELECT * FROM device_information WHERE device_type_information_id='".$row["id"]."'");
    while($row2 = $Query2->fetch_assoc()) {*/
    ?>
    <option value="<?= $row['id'] ?>"><?= $row['company_name']?></option>
    <?php
    // }
}
?>
