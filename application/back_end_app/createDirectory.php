<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

$directoryName = $_POST["nameDir"];
$rootDirectory = "/home/";

if (!empty($directoryName)) {
    chdir($rootDirectory);
    
    if (file_exists($directoryName)) {
        echo "Ya existe el directorio dentro del servidor";
    } else {
        mkdir($directoryName);

        if(!file_exists($directoryName)) {
            echo "Se creo el directorio";
        }
    }
} else {
    echo "Error, no envio ningun dato";
}
