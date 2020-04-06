<?php
    require('../../Services/ReturnEntityListService.php');
    $appID = $_GET['appId'];

    $sql = "SELECT * FROM appointments WHERE appointmentsID = '".$appID."';";

    $list = fetchList(($sql));
    echo json_encode($list);
?>
