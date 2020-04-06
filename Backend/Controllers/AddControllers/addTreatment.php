<?php 
    require('../../Services/DbConnectionService.php');

    $treatmentName = $_POST['treatmentName'];
    $treatmentDescription = $_POST['treatmentDescription'];
    $treatmentCost = $_POST['treatmentCost'];

    $sql = "INSERT INTO treatments(name,description,cost) VALUES('".$treatmentName."','".$treatmentDescription."','".$treatmentCost."');"; 

    if ($con->query($sql)){
        echo 'Treatment added successfully';
    } else {
        echo 'Error adding treatment';
    }
    $con->close();
?>
