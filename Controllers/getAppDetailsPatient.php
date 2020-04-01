
        <?php  
            require('../Services/DbService.php');
            $patientID = intval($_GET['patientID']);

            $sql = "SELECT * FROM appointments WHERE patientID ='".$patientID."'";        
    
    
                if ($result = $con->query($sql)) {
    
    
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
            
    
            $con->close()
        

        ?>
