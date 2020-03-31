<?php            
            $firstName = intval($_GET['firstName']);
            $lastName = intval($_GET['lastName']);
            $patientId = intval($_GET['patientId']);
            $con = mysqli_connect("127.0.0.1:3306","root","","test");

            if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            exit();
            }

            $sql = "INSERT INTO patients VALUES (".$patientId.",'".$firstName."','".$lastName."')";        
    
    
             mysqli_query($con, $sql);

            
    
            mysqli_close($con);
        

        ?>