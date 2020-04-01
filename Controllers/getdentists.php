
        <?php
        require('../Services/DbService.php');

        $sql = "SELECT * FROM dentists";

        if ($result = $con->query($sql)) {
            echo '<table class="u-full-width">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                      </tr>
                    </thead>
                    <tbody>';

            while ($row = $result->fetch_assoc()) {
                echo '<tr>';
                echo '<td>' . $row['firstName'] . '</td>';
                echo '<td>' . $row['lastName'] . '</td>';
                echo '</tr>';
            }

            echo '<tbody>
                    </table>';

            mysqli_free_result($result);
        }


        $con->close()


        ?>
