<?php

require_once("../system/database.php");

class Client {

    private $db;
    private $client_id;
    private $client_data;

    public function Client($client_id) {
        global $db;
        $this->db = $db;

        $this->client_id = $client_id;
        $this->client_data = $db->query("SELECT * FROM clients WHERE id='" . $client_id . "'")->fetch_assoc();

    }

    public function GetClientTotalCredit() {
        $NowTime = time();
        $Query = $this->db->query("SELECT SUM(remain_credit) as kalan_kredi FROM deposits WHERE client_id='".$this->client_id."' and status=1")->fetch_assoc();
        return $Query["kalan_kredi"];
    }
    
    public function GetDepositIDForExpense($ExpenseCredit) {
        $Query = $this->db->query("SELECT * FROM deposits WHERE client_id='".$this->client_id."' AND "
                . "status=1 AND "
                . "remain_credit >= '".$ExpenseCredit."' "
                . "ORDER BY unixtime ASC LIMIT 1");
        if($Query->num_rows > 0) {
            $Read = $Query->fetch_assoc();
            return $Read["id"];
        } else {
            return 0;
        }
    }
    
    public function ExpenseNewCredit() {
        //KREDI HARCAMA
        /* GetDepositIDForExpense != 0 olmalı hangi depositten harcanacak buna karar ver..
         * 
         */
    }
    
    public function SetExpenseIDForTransaction($TransactionID, $ExpenseDepositID) {
        $this->db->query("UPDATE transactions SET expense_deposit_id='".$ExpenseDepositID."' WHERE id='".$TransactionID."'");
    }

    /*


      

      public function NewTransaction();

      public function NewDeposit();
     * 
     */
}

$mClient = new Client(270);
print_r($mClient->GetClientTotalCredit());
//print_r($mClient->GetDepositIDForExpense(2));
//print_r($mClient->SetExpenseIDForTransaction(2));
?>