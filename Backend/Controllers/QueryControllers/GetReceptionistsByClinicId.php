<?php
    require('../../Services/SelectTableServiceEditDeleteButtons.php');

    $clinicID = intval($_GET['clinicId']);
    $sql = "SELECT 
    dentistID, 
    resp.firstName as `Receptionist's First Name`,
    resp.lastName as `Dentist's Last Name`
    FROM employs as empl,
    receptionists as resp,
    clinics as c 
    WHERE c.clinicID = empl.clinic_id AND d. = empl.dentist_id AND empl.clinic_id = '".$clinicID."';";

    echo  executeSelectStatement($sql);  

?>
