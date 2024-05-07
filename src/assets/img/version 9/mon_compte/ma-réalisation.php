<?php 
  require '../authentification/backRegister/dbConnexion.php';
  session_start();
  if (isset($_SESSION['user_id'])) {
    # code...
  }else {
      header('Location:../authentification/pages-login.php');
  }

  $r = $_GET['id'];
  if (isset($_POST['descriptio'])) {
    $descript = $_POST['descriptio'];
    # code...
  }

if (!empty($_FILES)) {

  $file_name = $_FILES['photo']['name'];
  $file_extension = strrchr($file_name, ".");
  $authorized_extension = array('.jpg', '.JPG', '.JPEG', '.png', '.PNG');
  $file_tmp_name = $_FILES['photo']['tmp_name'];
  $files_destination = 'files/' . $file_name;

  if (in_array($file_extension, $authorized_extension)) {

      if (move_uploaded_file($file_tmp_name, $files_destination)) {

        $update = $pdo->prepare("UPDATE realisations SET photo = :photo, descriptio = :descriptio WHERE id_photo = $r");
        
        $update->bindParam(':photo', $files_destination);
        $update->bindParam(':descriptio', $descript);
        $update->execute();

        header("Location: ma-réalisation.php?id=$r");
        
        exit();
            
      } else {
          $error_message = "Erreur lors de la soumission, veuillez réessayez!";
      echo "<script>alert('Erreur lors de la soumission, veuillez réessayez!')</script>";
      }
  } else {
      $error_message = 'Format du fichier non accepté, ajoutez un fichier format PDF, JPEG (Photo) ou PNG (Image)';
      
      echo "<script>alert('Format du fichier non accepté, ajoutez un fichier format PDF, JPEG (Photo) ou PNG (Image)!')</script>";
      
      //echo "<meta http-equiv='refresh' content='2;url=ma-réalisation.php?id=$r'";
  }
}

if (isset($_POST['supprimer'])) {

  $id = $_POST['id'];
  $delete = $pdo->prepare("DELETE FROM realisations WHERE id_photo = $id");
  $delete->execute();

  if ($delete->rowCount() > 0) {
    header("Location: réalisations.php");
    exit();
  }else {
    $error_message = 'La suppression a échoué, réessayez svp';
  }

}


if (isset($_POST['commenter'])) {

  if (isset($_SESSION['user_id'])) {

      $commentaire = htmlspecialchars($_POST['commentaire']);

      if (!empty($commentaire)) {
          $date=date('Y/m/d');
          $heure=date("H:i:s");

      $idession = $_SESSION['user_id'];
     
      //inserer les données dans la base
      $insertComment = $pdo->prepare('INSERT INTO commentaires(id_photo, id_personne , commentaire, date_commentaire , heure_commentaire)            
      VALUES(:id_photo, :id_personne , :commentaire, :date_commentaire , :heure_commentaire)');
      
      $insertComment->bindParam(':id_photo', $r);
      $insertComment->bindParam(':id_personne', $idession);
      $insertComment->bindParam(':commentaire', $commentaire);
      $insertComment->bindParam(':date_commentaire', $date);
      $insertComment->bindParam(':heure_commentaire', $heure);
      $insertComment->execute();

  }
  }

}
?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">

        <title>votre-realisation</title>
        <meta content="" name="description">
        <meta content="" name="keywords">

        <!-- Favicons -->
        <link href="../assets/img/logo-presta3.png" rel="icon">
        <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon">

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

        <!-- Vendor CSS Files -->
        <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">

        <!-- Template Main CSS File -->
        <link href="../assets/css/style.css" rel="stylesheet">
        <link href="../assets/css/metier.css" rel="stylesheet">
        <link href="../assets/css/realisation.css" rel="stylesheet">
        <script src="index.js"></script>
        <!-- =======================================================
  * site PRESTA pour toute les prestations de services au Bénin
  * Réaliser par DARSAF-TECH
  ======================================================== -->
    </head>

    <body>

        <div class="guide aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="commentaire-title p-3 text-center">
                <a href="réalisations.php" class="text-white"><i class="bi bi-arrow-left pl-5 p-5"></i></a>
                <span class="h6">Votre réalisation</span>
            </div>
            <?php
          $realisation = $pdo->prepare("SELECT * FROM realisations WHERE id_photo = $r");
          $realisation->execute();
          $donnees = $realisation->fetch();
          echo '
            <section class="section section-bg px-4 pt-4">
            <div class="row">
              <div class="">
                <div class="detail-realisation p-4">
                  <p class="description bg-white ">'.$donnees['descriptio'].'
                  <div>
                    <span class="avis"><strong>Avis :</strong> </span>
                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;" class="bi bi-star-fill"></i>
                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;" class="bi bi-star-fill"></i>
                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;" class="bi bi-star-fill"></i>
                    <span style="font-size:small;">(10)</span>
                  </div>
                  </p>
                  <div class="image  ">
                    <a href="'.$donnees['photo'].'">
                      <img width=500 src="'.$donnees['photo'].'" alt="" class="img-fluid">
                    </a>
                  </div>
                  <div class="mt-4 mx-4 contact">
                    <button data-bs-toggle="modal" data-bs-target="#Supprimer"
                      class="col-auto btn btn-danger mx-5 my-2 align-middle">Supprimer</button>
                    <div class="modal fade border-danger" id="Supprimer" tabindex="-1">
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title text-danger">Supprimer !!</h5>
                            <span data-bs-dismiss="modal" class="right-boxed bi bi-x ml-5 croix"></span>
                          </div>
                          <div class="modal-body">
                            <p class="">Vous voulez vraiment supprimer cette réalisation ?</p>
                            <div class="text-end">

                              <form action="" method="post">
                                <input type="hidden" name="id" value="'.$r.'">
                                <a data-bs-dismiss="modal" href="" class="btn btn-light">
                                  Annuler</a>
                                <input type="submit" name="supprimer" value="Confirmer" class="btn btn-danger">
                              </form>
                      
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#basicModal">
                      Modifier
                    </button>
                    <div class="modal text-start fade" id="basicModal" tabindex="-1">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Modifier la réalisation </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <div class="text-center">
                              <img width=100 src="'.$donnees['photo'].'" alt="" class="img-fluid border-dark">
                            </div>
                            <form action="" method="POST" enctype="multipart/form-data">
                              <div class="col-12">
                                <label for="photo" class="form-label"><b>Image</b></label>
                                <div class="input-group has-validation">
                                  <input type="file" name="photo" class="form-control" id="photo" required>
                                </div>
                              </div>
                              <div class="col-12 mt-3">
                                <label for="descriptio" class="form-label"> <b>Description</b></label>
                                <div class="input-group has-validation">
                                  <textarea type="textarea" name="descriptio" class="form-control" cols="5" rows="2"
                                    id="descriptio" placeholder="une desciption de l\'image" required>
                                    '.$donnees['descriptio'].'
                                   </textarea>
                                </div>
                              </div>
                            
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Annuler</button>
                                <button type="submit" class="btn btn-success" style="background-color: #2eca6a;">Mettre à jour</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div><!-- End Basic Modal-->
                  </div>
                </div>
                
              </div>
            </div>
         
        ';
      ?>
        <div class="guide mt-4 aos-init aos-animate bg-white mx-3 " data-aos="fade-up" data-aos-delay="200">
                        <div class="commentaire-title p-3">
                            <h5 class="text-white">Avis des clients</h5>
                        </div>
                        <div class="p-3 row justify-content-between mx-3">
                            <div>
                            </div>
                            <div>
                                <div class="mt-3">
                                    
                                        <?php 
                                            $selectComment = $pdo->prepare("SELECT * FROM commentaires WHERE id_photo = '$r' ORDER BY id_commentaire DESC");
                                            $selectComment->execute(); 
                                            
                                            $nbr_commentaire=0;

                                            while ($data1 = $selectComment->fetch()) {

                                                $idclient = $data1['id_personne'];
                                                $client = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $idclient");
                                                $client->execute();
                                                $data2 = $client->fetch();

                                                    echo '<div class="commentaire mt-2 row">
                                                    <div class="col-auto">
                                                        <img width="40" src="'.$data2['profil'].'" alt=""
                                                            class="rounded-circle">
                                                    </div>
                                                    <div class="col">
                                                    <h7 class="small"><b>'.ucfirst(strtolower($data2['prenom'])).' '.strtoupper($data2['nom']).' </b> </h7>
                                                    <p class="bg-white">'.$data1['commentaire'].'</p>
                                                    <p class="bg-white" style="text-align: end;"><span>'.$data1['date_commentaire']. ' à '.$data1['heure_commentaire']. '</span> </p>
                                                    
                                                </div></div>';
                                                $nbr_commentaire +=1;
                                                    	
                                                    }
                                                
                                                if ($nbr_commentaire == 0 ) {
                                                    echo "<i class = 'small'> ( Dites nous ce que vous pensez de cette réalisation )</i>";
                                                }
                                                
                                        ?>
                                    
                                </div>
                                <div class="row mt-2">
                                <form action="" method="POST">
                                    <div class="input-group">
                                        <input type="text" class=" col-8 form-control" name="commentaire" id="commentaire" placeholder="Entrer votre commentaire ici" id="msgInput">
                                        <div class = "input-group-append">
                                            <button id="commenter" name="commenter" type="submit" class="btn p-2 px-3 " style="background-color: #2eca6a;"><i class="bi bi-telegram text-white h4"></i></button>
                                        </div>
                                    </div>
                                    
                                </form>
                                </div>

                            </div>

                        </div>
                    </div>
        </div>

        </section>
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>

        <!-- Vendor JS Files -->
        <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="../assets/vendor/swiper/swiper-bundle.min.js"></script>
        <!-- Template Main JS File -->
        <script src="../assets/js/main.js"></script>
        <script src="index.js"></script>

    </body>

</html>