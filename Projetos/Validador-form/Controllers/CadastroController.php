<?php
namespace;

use;

class CadastroController extends Controller {
    public function index() {

    }

    public function register_action() {
        $nome = filter_input(INPUT_POST, 'nome');
        $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
        $senha = filter_input(INPUT_POST, 'senha');

        if($nome && $email && senha) {
            

            header("Location: home.php");
            exit;
        } else {

            header("Location: registro.php");
            exit;
        }
    }
}