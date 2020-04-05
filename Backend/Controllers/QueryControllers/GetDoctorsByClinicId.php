<?php     
        require('../../Services/ReturnEntityListService.php');
        $clinicID = intval($_GET['clinicId']);
        $sql = "SELECT 
        dentistID, 
        concat (d.firstName,' ',d.lastName) as `Dentist Name`
        FROM employs as empl,
        dentists as d,
        clinics as c 
        WHERE c.clinicID = empl.clinic_id AND d.dentistID = empl.dentist_id AND empl.clinic_id = '".$clinicID."';";

        $list = fetchList(($sql));
        echo json_encode($list);
?>
