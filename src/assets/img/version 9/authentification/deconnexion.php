<?php

    session_start();

    //Détruire toutes les variables de sesion
    $_SESSION = array();

    //Effacer le cookie de la session pour détruire complètement la session
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(),'',time() - 42000,
        $params["path"],$params["domain"],$params["secure"], 
        $params["httponly"]
    );
    }

    session_destroy();
    
//    unset($_SESSION['user_id']) ;
//    unset($_SESSION['nom']) ;
//    unset($_SESSION['prenom']);
//    unset($_SESSION['departement']) ;
//    unset($_SESSION['commune']) ;
//    unset($_SESSION['arrondissement']) ;
//    unset($_SESSION['contact']) ;   
    
    header("Location: ../index.php");
?>