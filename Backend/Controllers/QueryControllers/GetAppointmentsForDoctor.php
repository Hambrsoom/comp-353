<?php
    require('../../Services/SelectQueryService.php');

    $dentistID = $_POST['dentistId'];
    $date = $_POST['date'];

    //$sql = "SELECT * FROM appointments as app, dentists as den WHERE app.dentistID = den.dentistID AND app.dentistID = 5 AND week(app.date) = 11;";
    $sql = "SELECT * FROM appointments as app, dentists as den WHERE app.dentistID = den.dentistID AND app.dentistID = '".$dentistID."' AND week(app.date) = '".$date."';";

    echo executeSelectStatement($sql);  
?>