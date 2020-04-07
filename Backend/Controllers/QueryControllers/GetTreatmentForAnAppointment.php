<?php
    require('../../Services/ReturnEntityListService.php');
    $appID = $_GET['appId'];

    $sql = "SELECT app.appointmentsID as `appointment_id`, t.treatmentID as `treatment_id`, t.name as `treatment_name`
    FROM treatments as t, appointments as app, consist_of as treatmentsInApp
     WHERE treatmentsInApp.treatment_id = t.treatmentID AND app.appointmentsID = ".$appID." AND treatmentsInApp.appointment_id = ".$appID." ;";

    $list = fetchList(($sql));
    echo json_encode($list);
?>