<?php

    function executeSelectStatementForAppointments($sql){
        require('DbConnectionService.php');    
        
        $output = 'Result not found';
        if ($result = $con->query($sql)) {
    
            require('FormatTableAppointments.php');
    
            $output = outputAppointmentsTable($result);
    
            mysqli_free_result($result);
        }
        $con->close();
        return $output;
    }
?>