<?php 
    require('../../Services/DbConnectionService.php');

    $appId = $_GET['appId'];
    $treatmentId = $_GET['treatmentId'];


    $sql = "INSERT INTO consist_of VALUES(".$treatmentId.",".$appId.");"; 

    if ($con->query($sql)){
        echo 'Treatment added successfully';
    } else {
        echo 'Error adding treatment';
    }
    $con->close();


