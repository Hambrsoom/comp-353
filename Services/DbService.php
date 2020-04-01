<?php
class DbService
{
    private $_connection;

    public function __construct()
    {
        $this->connect();
    }


    public function __destruct()
    {
        $this->_connection->close();
    }

    public function getConnection()
    {
        return $this->_connection;
    }

    /**
     * Method to connect to the DB
     * @return mysqli handle for the DB connection
     */
    private function connect()
    {
        $config_info = parse_ini_file("../Config/config.ini");

        // Connecting to the DB
        $this->_connection = new mysqli(
            $config_info["host"],
            $config_info["username"],
            $config_info["password"],
            $config_info["dbname"],
            $config_info["port"]
        );

        // Check if connection has been successful
        if ($this->_connection->connect_error) {
            die("Connection Error: " . $this->_connection->connect_error);
        }
        return $this->_connection;
    }

}
