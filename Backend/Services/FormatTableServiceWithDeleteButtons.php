<?php 
    function outputTable($result) {
        $output = '';
        $firstLoop = false;
        while ($row = $result->fetch_assoc()) {
            if (!$firstLoop) {
            $output = $output.'<table class="u-full-width">
                <thead>
                  <tr>';
                foreach ($row as $key => $value) {
                    $output = $output.'<th>' . $key . '</th>';
                }
                $output = $output.' </tr>
                </thead>
                <tbody>';
                $firstLoop = true;
            }

            $output = $output.'<tr>';
            $id   = 0;
            foreach ($row as $key => $value) {
                $output = $output.'<td>'. $value .'</td>';
                if($key == "dentistID"){
                    $id= $value;
                }
            }
            $output = $output.'<td><button type="button" class="btn" onclick="deleteTreatment('.$id.')" >Choose</button></td>';
            $output = $output.'</tr>';
        }

        $output = $output.'<tbody>
                </table>';
        return $output;
    } 

?>