<?php
    require('../../Services/SelectTableServiceEditDeleteButtons.php');

    $appID = $_GET['appId'];

    $sql = " SELECT
    t.treatmentID,
    t.name,
    t.description,
    t.cost
    FROM 
    treatments as t,
    consist_of as cf
    WHERE t.treatmentID = cf.treatment_id AND cf.appointment_id = '".$appID."';";

    echo executeSelectStatement($sql);  
?>