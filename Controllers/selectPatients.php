<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" type="text/css" href="assets/css/skeleton.css">
        <link rel="stylesheet" type="text/css" href="assets/css/normalize.css">
        <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
</head>
<body>
<?php     
        $con = mysqli_connect("127.0.0.1:3306","root","","test");

        if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
        }

        $sql = "SELECT patientID, firstName, lastName FROM patients";        

        if ($result = mysqli_query($con, $sql)) {
            echo '<select id="select-patients">';
            /* fetch associative array */
            while ($row = mysqli_fetch_array($result)) {
                $fullName = $row['firstName']." ".$row['lastName'];
                echo "<option value='".$row['patientID']."'>".$fullName."</option>"; 
        }
            echo '</select>';

            mysqli_free_result($result);
        }

        mysqli_close($con);
        ?>
</body>
</html>