<?php            
            $firstName = $_GET['firstName'];
            $lastName = $_GET['lastName'];
            $con = mysqli_connect("127.0.0.1:3306","root","","test");

            if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            exit();
            }


            $sql = "INSERT INTO patients(firstName,lastName) VALUES('".$firstName."','".$lastName."')";        
            
            echo '<p>'.$firstName.'</p>';
            echo '<p>'.$row['missed'].'</p>'; 

            mysqli_query($con, $sql);
            mysqli_close($con);

        ?>