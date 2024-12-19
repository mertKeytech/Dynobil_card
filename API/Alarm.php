<?php

$alarmString = "#(#(#{10}#>#5#)#and#1#==#1#)";

$explodeString = explode('#',$alarmString);

//gelen data türünde 10 var = sıcaklık dataValue = 18.25;
$gelenData = 10;
$gelenDeger = 4;

$allString = "";

$explodeStringCount = count($explodeString);
for($i = 0; $i<$explodeStringCount;$i++){
    if(substr($explodeString[$i],0,1) == '{'){
        $lenghtString = strlen($explodeString[$i]);
        $dataTypeID = substr($explodeString[$i],1,$lenghtString-2);
        if($dataTypeID == $gelenData){
            $explodeString[$i] = $gelenDeger;
        } else {

        }
    } else{

    }
}
for($i = 0; $i<$explodeStringCount;$i++){

    $allString = $allString." ".$explodeString[$i];
}
$allString = trim($allString);
echo $allString."<br>";
$LastExplode = explode(" ",$allString);
print_r($LastExplode);
echo "<br />";


/*echo $allString."<br>";
echo "((4>5) and 1==1)<br>";
if(( "4" > "5" ) and "1" == "1" ){
    echo "Alarm Var! Dikkat<br>";
} else {
    echo "Alarm Yok! Devam<br>";
}
if($allString){
    echo "Alarm Var! Dikkat<br>";
} else {
    echo "Alarm Yok! Devam<br>";
}*/
?>

<?php

$alarm = "#9#==#9";


$mArr = explode('#',$alarm);

print_r($mArr);

echo "<br />";
for($i = 1; $i <= count($mArr); $i++) {
    $a = $mArr[$i];

    if(is_numeric($a)) {

    } else {

        echo $a."<br />";

        if($mArr[$i] == "<") {
            if($mArr[$i-1] < $mArr[$i+1]) {
                echo "true";
            } else {
                echo "false";
            }
        } else if($mArr[$i] == ">") {
            if($mArr[$i-1] > $mArr[$i+1]) {
                echo "true";
            } else {
                echo "false";
            }
        } else if($mArr[$i] == "==") {
            if($mArr[$i-1] == $mArr[$i+1]) {
                echo "true";
            } else {
                echo "false";
            }
        } else if($mArr[$i] == ">=") {
            if($mArr[$i-1] >= $mArr[$i+1]) {
                echo "true";
            } else {
                echo "false";
            }
        } else if($mArr[$i] == "<=") {
            if($mArr[$i-1] <= $mArr[$i+1]) {
                echo "true";
            } else {
                echo "false";
            }
        } else if($mArr[$i] == "!=") {
            if($mArr[$i-1] != $mArr[$i+1]) {
                echo "true";
            } else {
                echo "false";
            }
        }

    }
}



?>
