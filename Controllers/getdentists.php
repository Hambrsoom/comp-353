<html>
    <head>
        <link rel="stylesheet" type="text/css" href="assets/css/skeleton.css">
        <link rel="stylesheet" type="text/css" href="assets/css/normalize.css">
        <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
    </head>
    <body>
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
    
                    while($row = $result->fetch_assoc()) {
                        echo '<tr>';
                        echo '<td>'.$row['firstName'].'</td>'; 
                        echo '<td>'.$row['lastName'].'</td>';
                        echo '</tr>';
                    }
    
                    echo '<tbody>
                    </table>';
        
                    mysqli_free_result($result);
                }
            
    
            $con->close()
        

        ?>
    </body>
</html>