<?php     
        require('../Services/ReturnEntityListService.php');
        $sql = "SELECT treatmentID, name FROM treatments;";        
        $list = fetchList(($sql));
        echo json_encode($list);
?>
