
<?php     
        require('../Services/DbConnectionService.php');
        $sql = "SELECT clinicID, clinicName FROM clinics";        

        if ($result = $con->query($sql)) {
            echo '<select id="select-clinics">';
            /* fetch associative array */
            while ($row = mysqli_fetch_array($result)) {
                echo "<option value='".$row['clinicID']."'>".$row['clinicName']."</option>"; 
        }
            echo '</select>';

            mysqli_free_result($result);
        }

        $con->close();
?>
