<html>
    <head>
        <link rel="stylesheet" type="text/css" href="assets/css/skeleton.css">
        <link rel="stylesheet" type="text/css" href="assets/css/normalize.css">
        <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
    </head>
    <body>
        <?php    
            $patientID = intval($_GET['patientID']);
            $con = mysqli_connect("127.0.0.1:3306","root","","test");

            if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            exit();
            }

            $sql = "SELECT * FROM appointments WHERE patientID ='".$patientID."'";        
    
    
                if ($result = mysqli_query($con, $sql)) {
    
    
                    echo '<table class="u-full-width">
                    <thead>
                      <tr>
                        <th>Appointment ID</th>
                        <th>Missed</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Patient ID</th>
                        <th>Dentist ID</th>
                        <th>Treatment ID</th>
                      </tr>
                    </thead>
                    <tbody>';
    
                    while($row = $result->fetch_assoc()) {
                        echo '<tr>';
                        echo '<td>'.$row['appointmentsID'].'</td>';
                        echo '<td>'.$row['missed'].'</td>'; 
                        echo '<td>'.$row['date'].'</td>';
                        echo '<td>'.$row['time'].'</td>';
                        echo '<td>'.$row['patientID'].'</td>';
                        echo '<td>'.$row['dentistID'].'</td>';
                        echo '<td>'.$row['treatmentID'].'</td>';
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