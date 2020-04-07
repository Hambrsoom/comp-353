<?php      
    require('../../Services/DbConnectionService.php');

    $appID = $_POST['appId'];

    $sql = "DELETE FROM bills, appointments 
    USING bills, appointments
    WHERE appointments.appointmentsID = '".$appID."' AND appointments.billID = bills.billID;"; 

    if ($con->query($sql)){
        echo 'Appointment deleted successfully';
    } else {
        echo 'Error deleted patient';
    }
    $con->close();
?>