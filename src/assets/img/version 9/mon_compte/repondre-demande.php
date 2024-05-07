<?php
    require '../authentification/backRegister/dbConnexion.php';
    session_start() ;

    
    if (isset($_SESSION['user_id'])) {
        # code...
        }else {
            header('Location:../authentification/pages-login.php');
    }

    if (isset($_GET['id_demande']) && isset($_GET['motif']) && isset($_GET['id_personne'])) {
        $id_demande = $_GET['id_demande'];
        $id_personne = $_GET['id_personne'];
        
        $motif = $_GET['motif'];
        $statut = 'REGLEE';
        $id_recepteur = $_SESSION['id_prestataire'];
     
        
        $update = $pdo->prepare("UPDATE demande SET id_recepteur = :id_recepteur, statut_demande = :statut_demande WHERE id_demande = $id_demande");    
        $update->bindParam(':id_recepteur', $id_recepteur);
        $update->bindParam(':statut_demande', $statut);
        $update->execute();
        

        //Envoyer une notification
        
        $detail = ' est disponible pour répondre à votre demande : "'.$_SESSION['nom_metier'].'..." Vous pouvez le contacter pour être satisfait';
        $objet= ucfirst(strtolower($_SESSION['prenom'])).' '.strtoupper($_SESSION['nom']) ;
        $lien = '../profil_prestataire.php?personne='.$_SESSION['user_id'].'&metier='.$_SESSION['id_metier'];
        $image = $_SESSION['profil'];
       
        $date=date('Y/m/d');
        $heure=date("H:i:s");

     
       
        //inserer les données dans la base
        $insertNotification = $pdo->prepare('INSERT INTO notifications(id_personne , objet, detail, lien_notification,image_notifiction , date_notification , heure_notification)            
        VALUES(:id_personne, :objet, :detail, :lien_notification, :image_notifiction, :date_notification, :heure_notification )');
        
        $insertNotification->bindParam(':id_personne', $id_personne);
        $insertNotification->bindParam(':objet', $objet);
        $insertNotification->bindParam(':detail', $detail);
        $insertNotification->bindParam(':lien_notification', $lien);
        $insertNotification->bindParam(':image_notifiction', $image);
        $insertNotification->bindParam(':date_notification', $date);
        $insertNotification->bindParam(':heure_notification', $heure);
        $insertNotification->execute();


        if ($motif == 'chat') {
            header('Location: ../chat/chatPage.php?id='.$id_personne);
        }elseif($motif == 'call') {
            header('Location: ../chat/callPage.php?id='.$id_personne);
        }elseif($motif == 'locate') {
            header('Location: ../chat/locatePage.php?id='.$id_personne);
        }else {
            header('Location: ../chat/chatPage.php?id='.$id_personne);
        }
    

    }elseif (isset($_GET['demande']) && isset($_GET['motif']) && isset($_GET['id']) && isset($_GET['metier']) ) {

        $id_demande = $_GET['demande'];

        if ($_GET['motif'] == 'annule') {
            $statut = 'ANNULEE';

        }elseif ($_GET['motif'] == 'relance') {
            $statut = 'EN ATTENTE';
        }else {
            header('Location: historique.php');
        }

        $update = $pdo->prepare("UPDATE demande SET statut_demande = :statut_demande WHERE id_demande = $id_demande");    
        $update->bindParam(':statut_demande', $statut);
        $update->execute();

        header('Location: ma-demande.php?id_demande='.$id_demande.'&id_personne='.$_GET['id'].'&metier='.$_GET['metier']);

    }else {
        header('Location: historique.php');
    }



    

   



?>