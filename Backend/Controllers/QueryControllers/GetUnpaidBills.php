<?php
    require('../../Services/SelectQueryService.php');
    $sql = "SELECT * FROM bills WHERE paid = 0";
    echo executeSelectStatement($sql);
?>
