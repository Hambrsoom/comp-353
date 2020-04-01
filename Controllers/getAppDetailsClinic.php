
        <?php
        require('../Services/DbService.php');
        $clinicID = intval($_GET['clinicID']);
        $date = $_GET['appDate'];

        $sql = "SELECT * FROM appointments as appointments INNER JOIN dentists as dentists
            ON appointments.dentistID = dentists.dentistID
            WHERE clinicID = ".$clinicID." AND date='".$date."';";

        if ($result = $con->query($sql)) {
            require('../Services/TableService.php');

            echo outputTable($result);

            mysqli_free_result($result);
        }


        $con->close()


        ?>
