<?php      
    require('../../Services/DbConnectionService.php');

    $patientId = $_POST['patientId'];
    $date      = $_POST['date'];
    $time      = $_POST['time'];
    $dentistId = $_POST['dentistId'];
    $clinicId  = $_POST['clinicId'];
    $receptionistId = 8;
    $emptyValue = 0;

    $sql = "INSERT INTO appointments(missed,date,time,patientID,dentistID,clinicID,receptionistID) VALUES('".$emptyValue."','".$date."','".$time."','".$patientId."','".$dentistId."','".$clinicId."','".$receptionistId."');"; 

    if ($con->query($sql)){

        $getAppIdSql = 'SELECT max(appointmentsID) from appointments';

        if($res = $con->query($getAppIdSql)) {
            $row = mysqli_fetch_array($res);
            $appId = $row[0];

            $createBillSql = 'INSERT INTO bills(paid) VALUES (0)';

            if ($con->query($createBillSql)) { 
                $getBillId = 'SELECT max(billID) from bills';

                if($res2 = $con->query($getBillId)) {
                    $row = mysqli_fetch_array($res2);
                    $billId = $row[0];

                    $updateSql = 'UPDATE appointments SET billID ='.$billId.' WHERE appointmentsID ='.$appId.'';
                    if($con->query($updateSql)) {
    
                        echo 'Appointment added successfully';

                    }
                }

            }
        }

    } else {
        echo 'Error adding appointment';
    }
    $con->close();
?>