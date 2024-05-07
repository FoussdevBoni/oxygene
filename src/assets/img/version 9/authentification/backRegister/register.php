<?php

require 'dbConnexion.php';

$nom = securite($_POST["nom"]);
$prenom=securite($_POST['prenom']);
$contact = securite($_POST['contact']);

$departement = securite($_POST['departement']);

$commune = securite($_POST['commune']);

$arrondissement = securite($_POST['arrondissement']);

$hashMotDePasse = password_hash($_POST['mp'], PASSWORD_DEFAULT);

$hashMpConifrm = password_hash($_POST['mpConfirm'], PASSWORD_DEFAULT);

$insert = $pdo->prepare('INSERT INTO utilisateurs(nom, prenom, contact, departement, commune, arrondissement, mp, mpConfirm)
            
            VALUES(:nom, :prenom, :contact, :departement, :commune, :arrondissement, :mp, :mpConfirm)');
            
            $insert->bindParam(':nom', $nom);
            $insert->bindParam(':prenom', $prenom);
            $insert->bindParam(':contact', $contact);
            $insert->bindParam(':departement', $departement);
            $insert->bindParam(':commune', $commune);
            $insert->bindParam(':arrondissement', $arrondissement);
            $insert->bindParam(':mp', $hashMotDePasse);
            $insert->bindParam(':mpConfirm', $hashMpConifrm);
            $insert->execute();

            header('Location:../pages-login.php');
            
"PDO::close" ;

?>.