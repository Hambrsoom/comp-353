<?php
    require('../../Services/SelectQueryService.php');

    $dentistID = $_POST['dentistId'];
    $date = $_POST['date'];
    

    $sql = " SELECT 
    app.appointmentsID as `Appointment ID`, 
    app.date as `Date`, 
    app.time as `Time`, 
    concat(p.firstName,' ', p.lastName) as `Patient's Name`, 
    concat('Dr. ', den.firstName,' ', den.lastName) as `Dentist's Name`,
    concat(r.firstName,' ', r.lastName) as `Receptionist's Name`,
    c.clinicName as `Clinic Name`,
    C.address as `Clinic Address`
    FROM 
    appointments as app,
    dentists as den,
    patients as p,
    clinics as c,
    receptionists as r
    WHERE app.dentistID = '".$dentistID."' AND week(app.date, 1) = '".$date."' AND app.dentistID = den.dentistID AND p.patientID = app.patientID AND r.receptionistsID = app.receptionistID AND c.clinicID = app.clinicID;";
    echo executeSelectStatement($sql);  
?>