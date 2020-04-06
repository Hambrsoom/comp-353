<?php      
    require('../../Services/DbConnectionService.php');

    $patientId = $_POST['patientId'];
    $date      = $_POST['date'];
    $time      = $_POST['time'];
    $dentistId = $_POST['dentistId'];
    $clinicId  = $_POST['clinicId'];
    $receptionistId = 8;
    $billId   = 10;
    $emptyValue = NULL;
    $sql = "INSERT INTO appointments(missed,date,time,patientID,dentistID,clinicID,receptionistID,billID) VALUES('".$emptyValue."','".$date."','".$time."','".$patientId."','".$dentistId."','".$clinicId."','".$receptionistId."','".$billId."');"; 

    if ($con->query($sql)){
        echo 'Appointment added successfully';
    } else {
        echo 'Error adding appointment';
    }
    $con->close();
?>