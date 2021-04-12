<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

$file_name = $_POST["nameFile"];
$fileContents = $_POST["fileContents"];
$rootDirectory = "/home";

function getCurrentDirectory() {
    return getcwd();
}

if (!empty($file_name) and !empty($fileContents)) {
    chdir($rootDirectory);

    if (!file_exists("${file_name}.txt")) {
        $file_handler = fopen("${file_name}.txt", "w");
        fwrite($file_handler, $fileContents);
        fclose($file_handler);
        echo "Se creo el archivo";
    } else {
        echo "El documento ya existe";
    }
    
} else {
    echo "No hay datos para procesar!";
}
?>