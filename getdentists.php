<html>
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
    
            $sql = "SELECT * FROM dentists";        
    
    
                if ($result = mysqli_query($con, $sql)) {
    
    
                    echo '<table class="u-full-width">
                    <thead>
                      <tr>
                        <th>Dentist ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Clinic Id</th>
                      </tr>
                    </thead>
                    <tbody>';
    
                    while($row = $result->fetch_assoc()) {
                        echo '<tr>';
                        echo '<td>'.$row['dentistID'].'</td>';
                        echo '<td>'.$row['firstName'].'</td>'; 
                        echo '<td>'.$row['lastName'].'</td>';
                        echo '<td>'.$row['clinicID'].'</td>';
                        echo '</tr>';
                    }
    
                    echo '<tbody>
                    </table>';
        
                    mysqli_free_result($result);
                }
            
    
            mysqli_close($con);
        

        ?>
    </body>
</html>