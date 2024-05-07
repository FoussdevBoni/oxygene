<?php 
require_once 'ajout_realis.php';

    if (isset($_SESSION['user_id'])) {
      # code...
  }else {
      header('Location:../authentification/pages-login.php');
  }


?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">

        <title>Rélalisations</title>
        <meta content="" name="description">
        <meta content="" name="keywords">

        <!-- Favicons -->
        <link href="img/logo-presta.png" rel="icon">
        <link href="img/apple-touch-icon.png" rel="apple-touch-icon">

        <!-- Google Fonts -->
        <link href="https://fonts.gstatic.com" rel="preconnect">
        <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet">

              <!-- Vendor CSS Files -->
              
              <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
              <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
        <!-- Template Main CSS File -->
        <!-- Template Main CSS File -->
        <link href="../assets/css/style.css" rel="stylesheet">
        <link href="../assets/css/categorie.css" rel="stylesheet">

    </head>

    <body>

    <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
            <div class="container my-2">

                    <span class="nav-item text-center">
                    <a class="nav-link" href="../index.php"><i class="bi bi-house-door h5"></i>
                    <span class="d-none d-lg-block">Acceuil</span></a> </span>

                    <?php 
                    if (isset($_SESSION['user_id'])) {
                        $id = $_SESSION['user_id'];
                        $presta = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $id ");
                        $presta->execute();
                            
                        $data1 = $presta->fetch();
                        $is_presta = $data1['is_presta'];       
                                
                        if ($is_presta == 1) {
                            echo '<span class="nav-item text-center">
                            <a class="nav-link" href="attente.php"><i class="bi bi-clipboard-data h5"></i>
                            <span class="badge bg-danger badge-number">3</span>
                            <span class="d-none d-lg-block">En attente</span></a>
                            </span>';}                                
                        }
                    ?>

                    <span class="nav-item text-center">
                    <a class="nav-link" href="messages.php">
                    <i class="bi bi-messenger h5"></i>
                    <span class="badge bg-danger badge-number"></span>
                    <span class="d-none d-lg-block">Messages</span></a> </span>

                    <span class="nav-item text-center ">
                    <a class="nav-link" href="notifications.php">
                     <i class="bi bi-bell h5"></i>
                    <span class="badge bg-danger badge-number">67</span>
                    <span class="d-none d-lg-block">Notifications</span>
                    </a> </span>

                    <span class="nav-item text-center">
                    <a class="nav-link" href="../recherche.php">
                     <i class="bi bi-gift h5"></i>
                    <span class="badge bg-danger badge-number">6</span>
                    <span class="d-none d-lg-block">Rélalisations</span>
                    </a> </span>
                
                        <span class="nav-item dropdown text-center">
                            <a class="nav-link active nav-profile" href="#"
                            data-bs-toggle="dropdown">
                            <?php echo '<img src="'.$_SESSION['profil'].'" alt="Profile" width=43 class="rounded-circle">
                        </a><!-- End Profile Iamge Icon -->
                        
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages px-2">
                            <li class="dropdown-header">
                                <h6> '.ucfirst(strtolower($_SESSION['prenom'])).' '.strtoupper($_SESSION['nom']); ?></h6>
                                <span><?php 
                                if ($is_presta == 1) {
                                    echo $_SESSION['nom_metier'] ; 
                                }
                                ?></span>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center" href="users-profile.php">
                                    <i class="bi bi-person px-1"></i>
                                    <span>Mon profil</span>
                                </a>
                            </li>
                            
                            <?php 
                                if ($is_presta == 1) {
                                    echo '
                                    <li>
                                    <hr class="dropdown-divider">
                                    </li>
                                    <li>
                                    <a class="dropdown-item d-flex align-items-center" href="réalisations.php">
                                        <i class="bi bi-gift px-1"></i>
                                        <span>Mes réalisations</span>
                                    </a>
                                </li>' ; 
                                }
                                ?>
                           

                            <li>
                                <hr class="dropdown-divider">
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center" href="historique.php">
                                    <i class="bi bi-clock-history px-1"></i>
                                    <span>Historiques</span>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center" href="../authentification/deconnexion.php">
                                    <i class="bi bi-box-arrow-right px-1"></i>
                                    <span>Se déconnecter</span>
                                </a>
                            </li>

                        </ul><!-- End Profile Dropdown Items -->
                        </span>
           
                    </div>
        </nav><!-- End Header/Navbar -->
        
        <section class="mt-5 mx-5">

       
        <section id="cta" class=" cta mb-3 mt-5  row px-lg-4">
                <div class="col-lg-8  text-center text-lg-start">
                    <h3>Proposez gratuitement vos compétences aux nouveaux clients !</h3>

                </div>
                <div class="col-lg-4 cta-btn-container text-center">
                    <button type="button" class="btn cta-btn" data-bs-toggle="modal" data-bs-target="#basicModal">
                        Ajouter une réalistion
                    </button>
                    <div class="modal fade" id="basicModal" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Ajouter une réalisation </h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <form action="" method="POST" enctype="multipart/form-data">
                                    <div class="modal-body">
                                        <div class="col-12">
                                            <label for="photo" class="form-label"><b>Image</b></label>
                                            <div class="input-group has-validation">
                                                <input type="file" name="photo" class="form-control" id="photo"
                                                    required>
                                            </div>
                                        </div>
                                        <div class="col-12 mt-3">
                                            <label for="descriptio" class="form-label"> <b>Description</b></label>
                                            <div class="input-group has-validation">
                                                <textarea type="textarea" name="descriptio" class="form-control"
                                                    cols="5" rows="2" id="descriptio"
                                                    placeholder="une desciption de l'image" required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-b-n text-dark px-4 mr-4">AJOUTER</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div><!-- End Basic Modal-->
                </div>

        </section><!-- End Cta Section -->

            <section class="section section-bg px-4 pt-4 mt-4">
                <div class="section-title">
                    <h2>Mes réalisations</h2>
                </div>
                <div class="row">
                    <?php
                     if (isset($_GET['ok'])) {
                        echo '<div class="mx-5"><div class="mx-5 alert alert-success alert-dismissible fade show" role="alert">
                        <i class="bi bi-check-circle me-1"></i>
                        Réalisation ajoutée avec succès.
                        <button type="button" class="btn-close h5" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div> </div>';
                    }
                    $id = $_SESSION['user_id'];
                        //Récupération des réalisations depuis la base de données
                    $select = $pdo->prepare("SELECT * FROM realisations WHERE id_personne = $id   ORDER BY id_photo DESC");
                    $select->execute();

                    while ($donnees = $select->fetch()) {
                        
                        $image = $donnees['photo'];
                        $description = $donnees['descriptio'];
                    
                        print('
                            <div class="col-md-4 col-lg-3 mt-4">
                                <div class="card card-blog p-2">
                                    <div class="card-img text-center">
                                        <a href="ma-réalisation.php?id='.$donnees['id_photo'].'">
                                        <img src="'.$image.'" alt="" class="img-fluid image-realisation"></a>
                                    </div>
                                    <p class="card-description">
                                    <small >
                                    ');
                                        for ($n=0; $n < strlen( $description); $n++) { 
                                            # code...
                                            echo $description[$n];
                                            if ($n==30) {
                                                echo ' ...';
                                               $n=strlen( $description);
                                            }
                                        }
                                       
                                       
                                        print('</small></p>
                                    <div class="card-footer">
                                            <div class="post-author ">
                                            <a href="users-profile.php">
                                                <div class="image justify-content-center">
                                                    <img src="'.$_SESSION['profil'].'" alt="" class="avatar rounded-circle">
                                                </div>
                                                <div class="nom mt-2 small">
                                                        <div class=""> <span class="small">'.ucfirst(strtolower($_SESSION['prenom'])).' '.strtoupper($_SESSION['nom']).'</span>
                                                        </div>
                                                        <div>
                                                        <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;" class="bi bi-star-fill"></i>
                                                        <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;" class="bi bi-star-fill"></i>
                                                        <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;" class="bi bi-star-fill"></i>
                                                        <span style="font-size:small;">(10)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        </div>
                                </div>
                            </div>
                        ');
                    }
                    ?>

                </div>
            </section>

            </section>
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>

         <!-- Vendor JS Files -->
         
         <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
 

        <!-- Template Main JS File -->
        <script src="js/main.js"></script>
        <script src="js/deconnexion.js"></script>
    </body>

</html>