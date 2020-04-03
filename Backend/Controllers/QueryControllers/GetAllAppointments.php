<?php
    require('../../Services/SelectQueryService.php');

    $sql = "SELECT * FROM appointments";

    echo executeSelectStatement($sql);  

?>
