<?php
  $host='127.0.0.1:3306'; // Host name.
  $user='root'; //mysql user
  $password=''; //mysql pass
  $dbname='test'; // Database name.
  $con=  mysqli_connect($host,$user,$password,$dbname);
 
  // Check connection
  if (!$con)
  {
    echo "Failed to connect to MySQL: ";
  }

?>