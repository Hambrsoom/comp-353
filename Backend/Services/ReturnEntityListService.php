<?php 

    function fetchList($sql) {
        require('DbConnectionService.php');    
        $res=[];
        if ($result = $con->query($sql)) {
            /* fetch associative array */
            while ($row = mysqli_fetch_array($result)) {
                array_push($res,$row);
        }
            mysqli_free_result($result);
        }

        $con->close();
        return $res;

    }
?>