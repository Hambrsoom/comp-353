<?php
    require('../Services/DbService.php');
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
    }

    $sql = "SELECT * FROM bills WHERE paid = 0";


    if ($result = $con->query($sql)) {

        echo '<table class="u-full-width">
                        <thead>
                        <tr>
                            <th>Bill ID</th>
                            <th>Paid</th>
                            <th>Appointment ID</th>
                        </tr>
                        </thead>
                        <tbody>';

        while ($row = $result->fetch_assoc()) {
            echo '<tr>';
            echo '<td>' . $row['billID'] . '</td>';
            echo '<td>' . $row['paid'] . '</td>';
            echo '<td>' . $row['appointmentID'] . '</td>';
            echo '</tr>';
        }
        echo '<tbody>
                        </table>';

        mysqli_free_result($result);
    }
    $con->close();
?>
