<?php
include_once("functions.php");
//upload.php

if(isset($_POST["imgBase64"]))
{
    $data = $_POST["imgBase64"];

    $image_array_1 = explode(";", $data);

    $image_array_2 = explode(",", $image_array_1[1]);

    $data = base64_decode($image_array_2[1]);

    $imageName = RandomString(10) . '.jpeg';

    file_put_contents("../files/temp/images/".$imageName, $data);

    echo $imageName;

    //copy("../../files/temp/images/".$imageName,"../../files/advertisement/".$imageName);

}

?>