<?php     
        require('../Services/ReturnEntityListService.php');
        $sql = "SELECT clinicID, clinicName FROM clinics";        
        $list = fetchList(($sql));
        echo json_encode($list);
?>
