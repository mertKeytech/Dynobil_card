<div class="row">
	<div class="col col-lg-12 col-xl-12">
		<?php
		if (@$_GET['do'] == "general_transaction_report") {

			if (Permission($_SESSION['user_group_id'], $_GET['do'])) {
                // TODO : DÜZENLE

				$Months = array("OCAK","ŞUBAT","MART","NİSAN","MAYIS","HAZİRAN","TEMMUZ","AĞUSTOS","EYLÜL","EKİM","KASIM","ARALIK");

				if(!empty($_GET["StartMonth"])){
					$header = $Months[$_GET["StartMonth"]-1]."-".$_GET["StartYear"];
					$Selected_Month = $_GET["StartMonth"];
					$Selected_Year = $_GET["StartYear"];
				} else {
					$header = $Months[date("m",time())-1]."-".date("Y",time());
					$Selected_Month = date("m",time());
					$Selected_Year = date("Y",time());
				}

				?>
				<div class="card">
					<div class="card-body">
						<div class="card-title">Filtreleme</div>
						<form method="GET" class="form-horizontal row-border" action="#">
							<input type="hidden" name="module" value="report/general_transaction_report"/>
							<input type="hidden" name="do" value="general_transaction_report"/>
							<div class="row">
								<div class="col-lg-4">
									<div class="form-group">
										<label>İlgili Ay</label>
										<select class="form-control single-select" name="StartMonth"
										id="StartMonth" required>
										<option disabled selected value>--Seçiniz--</option>
										<option value="1">Ocak</option>
										<option value="2">Şubat</option>
										<option value="3">Mart</option>
										<option value="4">Nisan</option>
										<option value="5">Mayıs</option>
										<option value="6">Haziran</option>
										<option value="7">Temmuz</option>
										<option value="8">Ağustos</option>
										<option value="9">Eylül</option>
										<option value="10">Ekim</option>
										<option value="11">Kasım</option>
										<option value="12">Aralık</option>
									</select>
								</div>
							</div>
							<div class="col-lg-4">
									<div class="form-group">
										<label>İlgili Yıl</label>
										<select class="form-control single-select" name="StartYear"
										id="StartYear" required>
										<option disabled selected value>--Seçiniz--</option>
										<option value="2020">2020</option>
										<option value="2021">2021</option>
										<option value="2022">2022</option>
										<option value="2023">2023</option>
										<option value="2024">2024</option>
										<option value="2025">2025</option>
										<option value="2026">2026</option>
										<option value="2027">2027</option>
										<option value="2028">2028</option>
										<option value="2029">2029</option>
										<option value="2030">2030</option>
										
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
						<i class="fa fa-table"></i> Genel Harcama Raporları - <?=$header?>
					</div>
             <div class="col-md-6 col-lg-6 col-xl-6" style="text-align: right;">
                <span class="btn btn-xs" title="Excele Aktar" style="background-color: orange;">
                    <i onclick="GetExcel()" class="">EXCEL</i>
                </span>
            </div>
        </div>
    </div>
    <div class="card-body">
    	<div class="table-responsive">
    		<table id="GeneralTransactionsDataTable" class="table table-bordered">
    			<thead>
    				<tr>
    					<th>BAYİ</th>
    					<th>HARCAMA SAYISI</th>    					
    				</tr>
    			</thead>
    			<tbody>
    				<?php
    				if($Selected_Month==12){
						$After_Month = 1;
    					$Year = $Selected_Year+1;
    				}else{
    					$After_Month = $Selected_Month+1;
    					$Year = $Selected_Year;
    				}

    					
    				$StartDate = strtotime(date("01-".$Selected_Month."-".$Selected_Year,time()));
    				$EndtDate = strtotime(date("01-".$After_Month."-".$Year,time()));

    				
    				$Filter = "transactions.transaction_status=4 and transactions.unix_time >= '" . $StartDate . "' and transactions.unix_time<='".$EndtDate."'";    		

    				$Query = $db->query("SELECT * FROM distributors WHERE deleted=0 and is_active=1 ORDER BY company_name");


    				
    				while ($row = $Query->fetch_assoc()) {
    					$QueryTotal = $db->query("SELECT COUNT(id) AS TOTAL FROM transactions WHERE ".$Filter." and distributor_id='".$row["id"]."'")->fetch_assoc();  					
    					

    					?>
    					<tr>
    						<td><?= $row["company_name"]?></td>
    						<td><?= $QueryTotal["TOTAL"] ?></td>
    						
    					</tr>
    					<?php
    				}

    				?>

    			</tbody>
    		</table>
    	</div>
    </div>
</div>
<script>

	function GetExcel(){
		var name = "Genel_Harcama_Raporları";
		var table2excel = new Table2Excel();
		table2excel.export(document.getElementById('GeneralTransactionsDataTable'),name);
	}                                   



</script>

<?php
} else {
	echo error("Bu İşlemi Yapmaya Yetkiniz Yoktur!");
}
}
?>
</div>
</div>