<?php
    require '../authentification/backRegister/dbConnexion.php';
    session_start() ;

    
    if (isset($_SESSION['user_id'])) {
        # code...
        }else {
            header('Location:../authentification/pages-login.php');
    }

    if ((isset($_POST['text']) && $_POST['metier'] && $_POST['departement'] && $_POST['commune'] && $_POST['arrondissement']) || 
    (isset($_POST['text']) && $_GET['idmetier']  && $_GET['idpresta'] && $_POST['departement'] && $_POST['commune'] && $_POST['arrondissement'])  ) {
        
       
        $idauteur = $_SESSION['user_id'];
        $descriptio = $_POST['text'];
        
        $dep=$_POST['departement'] ;
        $com=$_POST['commune'] ;
        $arron=$_POST['arrondissement'];
        $date=date('Y/m/d');
        $heure=date("H:i:s");




        if (isset($_GET['idmetier'])) {
            $idmetier = $_GET['idmetier'];
        }else {
            $nommet=$_POST['metier'];
            //Seclectionner le metier spécifier par l'utilisateur
            $selectMetier = $pdo->prepare("SELECT * FROM metiers WHERE nom_metier = '$nommet'");
            $selectMetier->execute();
            $donnees = $selectMetier->fetch();
            $idmetier = $donnees['id_metier'];
        }
        
        
        //Enregistrer la demande

        $reqsql = $pdo->prepare("INSERT INTO demande(id_auteur, descriptio, id_metier, departement, commune, arrondissement, date_demande, heure_demande)
        VALUE(:idauteur, :descriptio, :idmetier, :dep, :com, :arron, :dates, :heure) ");
        
        $reqsql->bindParam(':idauteur', $idauteur);
        $reqsql->bindParam(':descriptio', $descriptio);
        $reqsql->bindParam(':idmetier', $idmetier);
        $reqsql->bindParam(':dep', $dep);
        $reqsql->bindParam(':com', $com);
        $reqsql->bindParam(':arron', $arron);
        $reqsql->bindParam(':dates', $date);
        $reqsql->bindParam(':heure', $heure);
        $reqsql->execute();

        if (isset($_GET['idpresta'])) {
            $idrecepteur = $_GET['idpresta'];
            $update = $pdo->prepare("UPDATE demande SET id_recepteur = :id_recepteur ORDER BY id_demande DESC LIMIT 1");    
            $update->bindParam(':id_recepteur', $idrecepteur);
            $update->execute();
        }
   
        
        header('Location: historique.php?ok');

    }

?>