<?php            
            $firstName = $_POST['firstName'];
            $lastName = $_POST['lastName'];
            $con = mysqli_connect("127.0.0.1:3306","root","","test");

            if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            exit();
            }


            $sql = "INSERT INTO patients(firstName,lastName) VALUES('".$firstName."','".$lastName."')";        

            mysqli_query($con, $sql);
            mysqli_close($con);

?>