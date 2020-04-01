<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" type="text/css" href="assets/css/skeleton.css">
        <link rel="stylesheet" type="text/css" href="assets/css/normalize.css">
        <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
</head>
<body>
<?php     
        require('../Services/DbService.php');
        $sql = "SELECT patientID, firstName, lastName FROM patients";        

        if ($result = $con->query($sql)) {
            echo '<select id="select-patients">';
            /* fetch associative array */
            while ($row = mysqli_fetch_array($result)) {
                $fullName = $row['firstName']." ".$row['lastName'];
                echo "<option value='".$row['patientID']."'>".$fullName."</option>"; 
        }
            echo '</select>';

            mysqli_free_result($result);
        }

        $con->close();
        ?>
</body>
</html>