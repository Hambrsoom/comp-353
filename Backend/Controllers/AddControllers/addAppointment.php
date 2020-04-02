<?php      
    require('../../Services/DbConnectionService.php');

    $patientId = $_POST['patientId'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $dentistId = $_POST['dentist'];
    $clinicId = $_POST['clinic'];
    $cost  = $_POST['cost'];

    echo "Hello"

    $sql = "INSERT INTO appoitments(firstName,lastName) VALUES('".$firstName."','".$lastName."');"; 

    if ($con->query($sql)){
        echo 'Appointment added successfully';
    } else {
        echo 'Error adding patient';
    }


    $con->close();
?>