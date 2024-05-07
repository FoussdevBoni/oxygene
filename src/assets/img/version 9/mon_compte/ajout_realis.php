<?php 
  require '../authentification/backRegister/dbConnexion.php';
  session_start() ;

  if (isset($_SESSION['user_id'])) {
    # code...
    }else {
        header('Location:../authentification/pages-login.php');
  }

    if (isset($_POST['descriptio'])) {
      $description = $_POST['descriptio'];
      # code...
    }

    if (!empty($_FILES)) {

      $file_name = $_FILES['photo']['name'];
      $file_extension = strrchr($file_name, ".");
      $authorized_extension = array('.jpg', '.JPG', '.JPEG', '.png', '.PNG');
      $file_tmp_name = $_FILES['photo']['tmp_name'];
      $files_destination = 'files/' . $file_name;

      $id = $_SESSION['user_id'];
      $idmetier = $_SESSION['id_metier'];

      if (in_array($file_extension, $authorized_extension)) {

          if (move_uploaded_file($file_tmp_name, $files_destination)) {
            
              $insert = $pdo->prepare('INSERT INTO realisations(photo, descriptio , id_personne , id_metier)
            
              VALUES(:photo, :descriptio , :id , :idmetier)');
              
              $insert->bindParam(':photo', $files_destination);
              $insert->bindParam(':descriptio', $description);
              $insert->bindParam(':id', $id);
              $insert->bindParam(':idmetier', $idmetier);
              $insert->execute();

              header('Location: réalisations.php?ok');

              
          } else {
              echo "Erreur lors de la soumission, veuillez vérifier vos informations";
          }
      } else {
          echo 'Format du fichier non accepté, ajoutez un fichier format PDF, JPEG (Photo) ou PNG (Image)';
      }
    }
?>