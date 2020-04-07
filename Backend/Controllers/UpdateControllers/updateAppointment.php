<?php      
    require('../../Services/DbConnectionService.php');

    $appID     = $_POST['appId'];
    $patientId = $_POST['patientId'];
    $date      = $_POST['date'];
    $time      = $_POST['time'];
    $dentistId = $_POST['dentistId'];
    $clinicId  = $_POST['clinicId'];
    $receptionistID = $_POST['receptionitId'];

    $sql = "UPDATE appointments
    SET
    `date` = '".$date."',
    `time` ='".$time."',
    `patientID` ='".$patientId."',
    `dentistID` = '".$dentistId."',
    `clinicID` ='".$clinicId."',
    `receptionistID` = '".$receptionistID."'
    WHERE `appointmentsID` = '".$appID."';";

    if ($con->query($sql)){
        echo 'Appointment edited successfully';
    } else {
        echo 'Error editing appointment';
    }
    $con->close();
?>



















