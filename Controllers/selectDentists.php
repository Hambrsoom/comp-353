
<?php     
        require('../Services/DbService.php');

        $sql = "SELECT dentistID, firstName, lastName FROM dentists";        

        if ($result = $con->query($sql)) {
            echo '<select id="select-dentists">';
            /* fetch associative array */
            while ($row = mysqli_fetch_array($result)) {
                $fullName = $row['firstName']." ".$row['lastName'];
                echo "<option value='".$row['dentistID']."'>".$fullName."</option>"; 
        }
            echo '</select>';

            mysqli_free_result($result);
        }

        $con->close();
?>
