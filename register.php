<?php

require_once 'conectionBD.php';
// Definir o BD (e a tabela)
// Conectar ao BD( com o PHP)

/*
echo '<pre>';
print_r($_POST);
echo '</pre>';
*/

// Para tirar a mascara do CPF
$cpf= $_POST['cpf_verifica'];

function limpaCPF($cpf){
    $cpf = trim($cpf);
    $cpf = str_replace(".", "", $cpf);
    $cpf = str_replace("-", "", $cpf);
    return $cpf;
   }

if(!empty($_POST)) {
   // Esta chegando dados por POST e então posso tentar inserir no banco
   // Obter as informações do formulario ($-POST)
   try {
       // Preparar as informações
       // Montar a SQL (pgsql)
     $sql = "INSERT INTO usuario(
        nome, 
        birth, 
        cpf,
        phone, 
        email,  
        uf, 
        city, 
        district, 
        street, 
        numberstreet, 
        complement, 
        observation)
     VALUES (
        :nome, 
        :birth,
        :cpf,
        :phone, 
        :email, 
        :uf, 
        :city, 
        :district, 
        :street, 
        :numberstreet, 
        :complement,
        :observation)";

       // Prepara a SQL (pdo)
       $stmt = $pdo->prepare($sql);


       // Definir/organizar os dados p/ SQL
        $dados = array(
            ':nome' => $_POST['nome'],
            ':birth' => $_POST['birth'],
            ':cpf' => $cpf,
            ':phone' => $_POST['phone'], 
            ':email' => $_POST['email'],  
            ':uf' => $_POST['uf'], 
            ':city' => $_POST['city'], 
            ':district' => $_POST['district'], 
            ':street' => $_POST['street'], 
            ':numberstreet' => $_POST['numberstreet'], 
            ':complement' => $_POST['complement'], 
            ':observation'=> $_POST['observation']
      
        );

       // Tentar Executar a SQL (INSERT)
       // Realizar a inserção das informações no BD (com o PHP_)
       if ($stmt->execute($dados)){
        
        header("Location: index.html:msgSucesso=Cadastro Realizado com Sucesso!");
        
       }
   } catch (PDOException $e){
        // die($e->getMessage());
        header("Location: index.html:msgErro=Falha ao cadastrar...");
   }
}else {
    echo "Falha ao cadastrar...";
}

?>


