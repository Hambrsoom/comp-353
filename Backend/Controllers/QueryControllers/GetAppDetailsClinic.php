
<?php
    require('../../Services/SelectQueryService.php');
    $clinicID = intval($_GET['clinicID']);
    $date = $_GET['appDate'];

    $sql = "SELECT * FROM appointments as appointments INNER JOIN dentists as dentists
            ON appointments.dentistID = dentists.dentistID
            WHERE clinicID = ".$clinicID." AND date='".$date."';";

    echo executeSelectStatement($sql);  

?>
