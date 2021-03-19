<?php
    // Acceso al servidor
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    // header('content-type: application/json; charset=utf-8');

    // Obteniendo la data del frontend
    $data = json_decode(file_get_contents("php://input"), true);
    $catetoA = $data["catetoA"];
    $catetoB = $data["catetoB"];

    $getDirectory = getcwd();

    echo "$getDirectory";
