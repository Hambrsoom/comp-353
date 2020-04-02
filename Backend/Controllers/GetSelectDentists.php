
<?php     
        require('../Services/ReturnEntityListService.php');
        $sql = "SELECT dentistID, firstName, lastName FROM dentists";        
        $list = fetchList(($sql));
        echo json_encode($list);
?>
