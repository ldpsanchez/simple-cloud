<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

$rootDirectory = "/home";
$enrutador = $_POST["selector"];

if (!empty($enrutador)) {
    chdir($rootDirectory);
    $listFiles = scandir(getcwd());
    echo json_encode($listFiles);
} else {
    chdir($rootDirectory);
    $getListFiles = scandir(getcwd());
    echo json_encode($getListFiles);
}
?>