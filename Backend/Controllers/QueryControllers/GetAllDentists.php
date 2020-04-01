
<?php
    require('../../Services/SelectQueryService.php');

    $sql = "SELECT firstName, lastName FROM dentists";

    echo executeSelectStatement($sql);  

?>
