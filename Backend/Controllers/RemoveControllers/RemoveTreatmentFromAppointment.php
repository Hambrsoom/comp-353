<?php 
    require('../../Services/DbConnectionService.php');

    $appId = intval($_GET['appId']);
    $treatmentId = intval($_GET['treatmentId']);

    $sql = "DELETE FROM consist_of WHERE treatment_id=".$treatmentId." and appointment_id=".$appId.";"; 

    if ($con->query($sql)){
        echo 'Treatment deleted successfully';
    } else {
        echo 'Error deleting treatment';
    }
    $con->close();


