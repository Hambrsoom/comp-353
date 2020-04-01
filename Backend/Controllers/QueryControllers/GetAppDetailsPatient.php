
<?php  
    require('../../Services/SelectQueryService.php');
    
    $patientID = intval($_GET['patientID']);

    $sql = "SELECT * FROM appointments WHERE patientID ='".$patientID."'";        
    
    echo executeSelectStatement($sql);  

?>
