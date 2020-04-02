<?php      
    require('../../Services/DbConnectionService.php');

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $dentist = $_POST['dentist'];
    $clinic = $_POST['clinic'];
    $cost  = $_POST['cost'];

    $sql = "INSERT INTO appoitments(firstName,lastName) VALUES('".$firstName."','".$lastName."');"; 

    if ($con->query($sql)){
        echo 'Appointment added successfully';
    } else {
        echo 'Error adding patient';
    }
    $con->close();
?>