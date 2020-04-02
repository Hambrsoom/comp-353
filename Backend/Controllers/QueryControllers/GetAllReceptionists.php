
<?php
    require('../../Services/SelectQueryService.php');

    $sql = "SELECT firstName, lastName FROM receptionists;";

    echo executeSelectStatement($sql);  

?>
