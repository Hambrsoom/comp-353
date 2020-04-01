
        <?php
        require('../Services/DbService.php');

        $sql = "SELECT firstName, lastName FROM dentists";

        if ($result = $con->query($sql)) {

            require('../Services/TableService.php');

            echo outputTable($result);

            mysqli_free_result($result);
        }


        $con->close()


        ?>
