<?php      
    require('../../Services/DbConnectionService.php');

    $appID = $_POST['appId'];

    $sql = "DELETE FROM appointments WHERE appointmentsID = '".$appID."';"; 

    if ($con->query($sql)){
        echo 'Appointment deleted successfully';
    } else {
        echo 'Error deleted patient';
    }
    $con->close();
?>