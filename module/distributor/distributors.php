<div class="row">
    <div class="col col-lg-12 col-xl-12">
        <?php
        if (@$_GET['do'] == "list_distributors") {
            if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                 ?>
                <div class="card">
                    <div class="card-header"><i class="fa fa-table"></i>Dynobil Bayi Listesi</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="default-datatable" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Firma Adı</th>
                                    <th>Firma Adresi</th>
                                    <th>Firma Email</th>
                                    <th>Firma Telefon-1</th>
                                    <th>Firma Cep Telefonu</th>
                                    <th>Şehir</th>
                                    <th>İlçe</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php

                                $Query = $db->query("SELECT *,distributors.id AS ID FROM distributors
                                                            LEFT JOIN city ON city.id = distributors.company_city_id
                                                            LEFT JOIN county ON county.id = distributors.company_county_id WHERE distributors.is_active=1");
                                while ($row = $Query->fetch_assoc()) {
                                    ?>
                                    <tr>
                                        <td><?= $row["company_name"] ?></td>
                                        <td><?= $row["company_address"] ?></td>
                                        <td><?= $row["company_contact_email"] ?></td>
                                        <td><?= $row["company_phone1"] ?></td>
                                        <td><?= $row["company_mobile"] ?></td>
                                        <td><?= $row["city_name"] ?></td>
                                        <td><?= $row["county_name"] ?></td>
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
        }
        ?>
    </div>
</div>