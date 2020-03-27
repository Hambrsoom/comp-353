<?php
    
    $con = mysqli_connect("127.0.0.1:3306","root","","test");

    if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
    }

    $sql = "SELECT * FROM played_in";  
    echo '<form action="#" method="post">';

    echo "<select name='pid'>";

    if ($result = mysqli_query($con, $sql)) {

        /* fetch associative array */
        while ($row = mysqli_fetch_array($result)) {
            echo "<option value='".$row['pid']."'>".$row['pid']."</option>"; 
    }

        mysqli_free_result($result);
    }

    echo 
    '</select>
    <input type="submit" name="submit" value="Get Selected Values" />
    </form>';

    if(isset($_POST['submit'])){
        $selected_val = $_POST['pid'];  // Storing Selected Value In Variable
        echo "You have selected :" .$selected_val;  // Displaying Selected Value
    }

    mysqli_close($con);


?>