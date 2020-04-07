<?php
    require('../../Services/ReturnEntityListService.php');
    $appID = $_GET['appId'];

    $sql = "SELECT * FROM consist_of WHERE appointment_id = '".$appID."';";

    $list = fetchList(($sql));
    echo json_encode($list);
?>