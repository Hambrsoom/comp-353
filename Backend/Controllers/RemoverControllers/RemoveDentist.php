<?php      
    require('../Services/DbService.php');

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $sql = "DELETE FROM table_name WHERE condition firstName='".$firstName."' AND lastName ='".$lastName."'"
    
    $result = $con->query($sql);
    $con->close();
?>