<?php     
        require('../../Services/ReturnEntityListService.php');


        $clinicID = intval($_GET['clinicId']);
        $sql = "SELECT 
        receptionistsID,
        resp.firstName as `firstName`,
        resp.lastName  as `lastName` 
        FROM employs as empl,
        receptionists as resp,
        clinics as c 
        WHERE c.clinicID = empl.clinic_id AND resp.receptionistsID = empl.receptionist_id AND empl.clinic_id = '".$clinicID."';";

        $list = fetchList(($sql));
        echo json_encode($list);
?>
