<?php
    require('../Services/DbService.php');
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
    }

    $sql = "SELECT * FROM bills WHERE paid = 0";


    if ($result = $con->query($sql)) {

        require('../Services/TableService.php');

        echo outputTable($result);

        mysqli_free_result($result);
    }
    $con->close();
?>
