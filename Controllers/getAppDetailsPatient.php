
        <?php  
            require('../Services/DbService.php');
            $patientID = intval($_GET['patientID']);

            $sql = "SELECT * FROM appointments WHERE patientID ='".$patientID."'";        
    
    
                if ($result = $con->query($sql)) {
    
                    require('../Services/TableService.php');

                    echo outputTable($result);
        
                    mysqli_free_result($result);
                }
            
    
            $con->close()
        

        ?>
