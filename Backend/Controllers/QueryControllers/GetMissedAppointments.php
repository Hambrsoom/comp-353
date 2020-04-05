<?php
    require('../../Services/SelectQueryService.php');

    $sql = "SELECT app.patientID,  concat(patient.firstName,' ', patient.lastName) as `Patient's Name`, COUNT(missed) as NumberOfMissedAppointments
            FROM appointments as app , patients as patient
            WHERE patient.patientID = app.patientID
            GROUP BY patientID
            HAVING COUNT(missed) > 0;";

    
    echo executeSelectStatement($sql);
?>