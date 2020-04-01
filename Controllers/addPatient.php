<?php      
    require('../Services/DbService.php');

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];

    $sql = "INSERT INTO patients(firstName,lastName) VALUES('".$firstName."','".$lastName."')"; 

    $result = $con->query($sql);
    $con->close();
?>