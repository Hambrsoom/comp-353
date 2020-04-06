<?php
    require('../../Services/ReturnEntityListService.php');

    $dentistID = $_GET['dentistId'];
    $date = $_GET['date'];

    $sql = " SELECT 
    app.appointmentsID, 
    app.time
    FROM 
    appointments as app,
    dentists as den,
    patients as p,
    clinics as c,
    receptionists as r
    WHERE app.dentistID = '".$dentistID."' AND app.date = '".$date."' AND app.dentistID = den.dentistID AND p.patientID = app.patientID AND r.receptionistsID = app.receptionistID AND c.clinicID = app.clinicID;";
    $list = fetchList(($sql));
    echo json_encode($list);
?>