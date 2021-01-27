<?php
require_once 'environment.php';

if('ENVIRONMENT' == 'dev') {
    define("BASE_URL", "http://localhost/Cursos/b7web_FS/JS/Projetos/Validador-form/");
    $db_name = 'login_glass';
    $db_host = 'localhost';
    $db_user = 'root';
    $db_pass = '';
}

try {

    $pdo = new PDO("mysql:dbname=".$db_name.";host=".$db_host, $db_user, $db_pass);

} catch(PDOException $e) {
    die($e->getMessage());
}