<?php
    require('../../Services/SelectQueryService.php');

    $sql = "SELECT app.patientID,  patient.firstName, patient.lastName, COUNT(missed) as NumberOfMissedAppointments
            FROM appointments as app , patients as patient
            WHERE patient.patientID = app.patientID
            GROUP BY patientID
            HAVING COUNT(missed) > 0;";

    echo executeSelectStatement($sql);
?>