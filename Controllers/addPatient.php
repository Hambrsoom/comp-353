<?php      
    require('../Services/DbService.php');

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];

    $sql = "INSERT INTO patients(firstName,lastName) VALUES('".$firstName."','".$lastName."')"; 

    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
    }
    $result = $con->query($sql);
    $con->close();
?>