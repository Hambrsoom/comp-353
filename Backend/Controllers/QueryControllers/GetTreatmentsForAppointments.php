<?php
    require('../../Services/SelectQueryService.php');
    $appId = $_GET['appId'];

    $sql = "SELECT app.appointmentsID, t.name as `Treatment's Name` , t.description as `Treatment's Description`, t.cost as `Treatment's Cost`
             FROM treatments as t, appointments as app, consist_of as treatmentsInApp
              WHERE treatmentsInApp.treatment_id = t.treatmentID AND app.appointmentsID = ".$appId." AND treatmentsInApp.appointment_id = ".$appId." ;";

    
    echo executeSelectStatement($sql);
?>