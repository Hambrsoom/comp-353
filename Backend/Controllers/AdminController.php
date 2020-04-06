<?php 
        $statementType = $_POST['statementType'];
        $statement = $_POST['statement'];
        
        switch ($statementType) {
            case 'SELECT':
                echo executeSelect($statement);
                break;
            case 'INSERT':
                echo executeDML($statement,  $statementType);
                break;
            case 'DELETE':
                echo executeDML($statement,  $statementType);
                break;
            case 'UPDATE':
                echo executeDML($statement,  $statementType);
                break;
            case 'ALTER':
                echo executeDDL($statement, $statementType);
                break;
            case 'CREATE':
                echo executeDDL($statement, $statementType);
                break;
            case 'DROP':
                echo executeDDL($statement, $statementType);
                break;
            case 'SHOW':
                echo executeSelect($statement);
                break;
            default: 
                echo 'Unsupported statement';
                break;

        }


        function executeSelect($statement) {
            require('../Services/SelectQueryService.php');

            $sql = $statement;
        
            return executeSelectStatement($sql);  
        }

        function executeDML ($statement, $statementType) {
            $terms = explode(" ", $statement);
            $sql = $statement; 
            $tableName = '';
            if( $statementType == 'UPDATE'){
                $tableName =  $terms[1];
            } else {
                $tableName =  $terms[2];
            }

            require('../Services/DbConnectionService.php');

            if ($con->query($sql)) {

                require('../Services/SelectQueryService.php');

                $selectStatement = 'SELECT * FROM '.$tableName;
            
                return executeSelectStatement($selectStatement);  
        
            } else {
                return("Error : " . mysqli_error($con));
            }

            $con->close();
        }

        function executeDDL($statement, $statementType){
            $sql = $statement; 
            require('../Services/DbConnectionService.php');

            if ($con->query($sql)) {
                return $statementType.'executed successfully';
                     
            } else {
                return("Error : " . mysqli_error($con));
            }

            $con->close();
        }

?>
