<?php
// Acceso al servidor
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

$rootDirectory = "/var/www/";
$home = "home";

chdir($rootDirectory);
mkdir("{$rootDirectory}/$home");

echo scandir(getcwd());

/* if (!file_exists($home)) {
    mkdir("{$rootDirectory}/{$home}");
    echo scandir(getcwd());
} else {
    echo getcwd();
} */
