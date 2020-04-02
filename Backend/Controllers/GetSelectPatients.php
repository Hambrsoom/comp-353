
<?php     
        require('../Services/ReturnEntityListService.php');
        $sql = "SELECT patientID, firstName, lastName FROM patients;";        
        $list = fetchList(($sql));
        echo json_encode($list);
?>
