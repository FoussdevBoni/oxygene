<?php 
  require 'dbConnexion.php';
  session_start() ;

  $profession = securite($_POST['profession']);
  $typepiece = securite($_POST["typepiece"]);
  
  $idpersonne = $_SESSION['user_id'];

  $select = $pdo->prepare("SELECT id_metier FROM metiers WHERE nom_metier = '$profession'");
  $select->execute();

  $data = $select->fetch();
  $id = $data['id_metier'];


if (!empty($_FILES)) {

  $file_name = $_FILES['piece']['name'];
  $file_extension = strrchr($file_name, ".");
  $authorized_extension = array('.jpg', '.JPG', '.JPEG', '.png', '.PNG');
  $file_tmp_name = $_FILES['piece']['tmp_name'];
  $files_destination = 'files/pieces' . $file_name;

  if (in_array($file_extension, $authorized_extension)) {

      if (move_uploaded_file($file_tmp_name, $files_destination)) {
        
        $insert = $pdo->prepare('INSERT INTO prestataire(id_personne, id_metier,typepiece, piece_url)
        
        VALUES(:idpersonne,:id, :typepiece, :piece)');
    
        $insert->bindParam(':idpersonne', $idpersonne);
        $insert->bindParam(':id', $id);
        $insert->bindParam(':typepiece', $typepiece);
        $insert->bindParam(':piece', $files_destination);
        $insert->execute();

        $is=1;

        $update = $pdo->prepare("UPDATE  utilisateurs SET is_presta = :is_presta WHERE id_personne = $idpersonne");
        
        $update->bindParam(':is_presta', $is);
        $update->execute();

        header('Location:../../mon_compte/users-profile.php');
        
        echo 'success';
      } else {
          echo "Erreur lors de la soumission, veuillez vérifier vos informations";
      }
  } else {
      echo 'Format du fichier non accepté, ajoutez un fichier format PDF, JPEG (Photo) ou PNG (Image)';
  }
}
?>