<?php 
    try {

    $pdo = new PDO('mysql:host=localhost;dbname=presta', 'root', '');
    $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION) ;

    
  } catch (PDOException $e) {
    die ('Erreur :'  .$e->getMessage());
  }
  function securite($donnees)
  {
    $resultat = trim($donnees);
    $resultat = stripslashes($resultat);
    $resultat = strip_tags($resultat);
    return $resultat;
  }
?>