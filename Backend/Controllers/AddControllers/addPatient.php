<?php      
    require('../../Services/DbConnectionService.php');

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];

    $sql = "INSERT INTO patients(firstName,lastName) VALUES('".$firstName."','".$lastName."');"; 

    if ($con->query($sql)){
        echo 'Patient added successfully';
    } else {
        echo 'Error adding patient';
    }
    $con->close();
?>