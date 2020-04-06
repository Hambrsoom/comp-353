<?php     
        require('../Services/SelectAppointmentsForTreatments.php');
        $sql = "SELECT * FROM appointments";        
        echo executeSelectStatementForAppointments($sql);  
?>
