<?php      
    require('../../Services/DbConnectionService.php');

    $patientId = $_POST['patientId'];
    $date      = $_POST['date'];
    $time      =  13:00:00;
    $dentistId = $_POST['dentistId'];
    $clinicId  = $_POST['clinicId'];
    $receptionistId = 8;
    $billId   = 10;

    $emptyValue = NULL;

    $sql = "INSERT INTO appoitments(missed,date,time,patientID,dentistID,clinicID,receptionistID,billID) VALUES('".$emptyValue."','".$date."','".$time."','".$patientId."','".$dentistId."','".$clinicId."','".$receptionistId."','".$billId."');"; 

    if ($con->query($sql)){
        echo 'Appointment added successfully';
    } else {
        echo 'Error adding patient';
    }


    $con->close();
?>