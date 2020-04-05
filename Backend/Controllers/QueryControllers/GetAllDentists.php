
<?php
    require('../../Services/SelectQueryService.php');

    $sql = "SELECT d.firstName as `Dentist's First Name`, d.lastName as `Dentist's Last Name`, c.clinicName as `Works at` FROM employs as empl, dentists as d, clinics as c WHERE c.clinicID = empl.clinic_id AND d.dentistID = empl.dentist_id;";

    echo executeSelectStatement($sql);  

?>
