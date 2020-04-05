<?php
    require('../../Services/SelectQueryService.php');

    $sql = "SELECT 
    app.appointmentsID as `Appointment ID`, 
    app.date as `Date`, 
    app.time as `Time`, 
    concat(p.firstName,' ', p.lastName) as `Patient's Name`, 
    concat('Dr. ', den.firstName,' ', den.lastName) as `Dentist's Name`, 
    concat(r.firstName,' ', r.lastName) as `Receptionist's Name`,
    c.clinicName as `Clinic Name`,
    c.address as `Clinic's Address`
    FROM 
    appointments as app, 
    clinics as c, 
    receptionists as r,
    dentists as den,
    patients as p
    WHERE
    den.dentistID = app.dentistID AND
    app.patientID = p.patientID AND
    c.clinicID = app.clinicID AND
    r.receptionistsID = app.receptionistID;";

    echo executeSelectStatement($sql);  
?>
