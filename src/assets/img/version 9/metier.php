<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">

        <title>Presta</title>
        <meta content="" name="description">
        <meta content="" name="keywords">

        <!-- Favicons -->
        <link href="assets/img/logo-presta3.png" rel="icon">
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
        <!-- Vendor CSS Files -->
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

        <!-- Template Main CSS File -->
        <link href="assets/css/style.css" rel="stylesheet">
        <link href="assets/css/metier.css" rel="stylesheet">
        <script src="index.js"></script>
        <!-- =======================================================
  * site PRESTA pour toute les  prestations de services au Bénin
  * Réaliser par DARSAF-TECH
  ======================================================== -->
    </head>

    <body>

    <?php
            require 'authentification/backRegister/dbConnexion.php';
            session_start();
    
         include('navbar.php');
        $id_metier = $_GET['id'];

        if (!isset($_GET['id'])) {
            $id_metier = 1;
        }
        $selectMetier = $pdo->prepare("SELECT * FROM metiers WHERE id_metier = $id_metier");
        $selectMetier->execute();
        $donnees = $selectMetier->fetch();
         
    ?>


        <!-- ======= Cta Section ======= -->
        <style>
            .cta1{
                    background: linear-gradient(rgba(0, 0, 0, 0.650), rgba(0, 0, 0, 0.650)),  url("assets/img/post-4.jpg") fixed center center;
                   
                }
        </style>
        <section id="cta1" class="cta1 mb-4">
            <div class="container" data-aos="zoom-in">

                <div class="row">
                    <div class=" text-center text-lg-start">
                        <h3><?php
                        
                        echo $donnees['nom_metier']; ?></h3>
                        <p class="my-4" ><?php echo $donnees['descriptio']; ?></p>
                        
                    </div>
                </div>
            </div>
        </section><!-- End Cta Section -->
        <section class="section section-bg px-4 pt-4 mt-4">
             <?php if (isset($_SESSION['user_id']) ) {
                echo '<nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">'.$_SESSION['commune'].'</li>
                    <li class="breadcrumb-item active">'.$_SESSION['commune'].'</li>
                </ol>
            </nav>';
                
            } ; ?></p>
            
            <div class="row">
               
            <?php
                        //Récupération des réalisations depuis la base de données
                    $select = $pdo->prepare("SELECT * FROM realisations WHERE id_metier = $id_metier   ORDER BY id_photo DESC");
                    $select->execute();
                    $nbr_realisations = 0;
                    while ($donnees = $select->fetch()) {
                        
                        $image = $donnees['photo'];


                        $description = $donnees['descriptio'];

                        $id = $donnees['id_personne'];

                        $selectAuthor = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $id");
                        $selectAuthor->execute();
                        $donnee = $selectAuthor->fetch();
                        $author = $donnee['prenom'];
                        $author_nom = $donnee['nom'];
                        
                        print('
                            <div class="col-md-4 col-lg-3 mt-4">
                                <div class="card card-blog p-2">
                                <a href="realisation.php?realisation='.$donnees['id_photo'].'&personne='. $donnees['id_personne'].'&metier='.$id_metier.'">
                                    <div class="card-img text-center">
                                        <img src="mon_compte/'.$image.'" alt="" class="img-fluid image-realisation">
                                    </div>
                                    <p class="card-description"><small>
                                    ');
                                        for ($n=0; $n < strlen( $description); $n++) { 
                                            # code...
                                            echo $description[$n];
                                            if ($n==30) {
                                                echo ' ...';
                                               $n=strlen( $description);
                                            }
                                        }
                                        
                                       
                                        print('</small></p></a>
                                    <div class="card-footer">
                                        <div class="post-author ">
                                        <a href="profil_prestataire.php?personne='. $donnees['id_personne'].'&metier='.$id_metier.'">
                                            <div class="image justify-content-center">
                                                <img src="mon_compte/'.$donnee['profil'].'" alt="" class="avatar rounded-circle">
                                            </div>
                                            <div class="nom mt-2">
                                                <div class=""> <span class="small">'.ucfirst(strtolower($author)).' '.strtoupper($author_nom).'</span>
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
                        $nbr_realisations +=1 ;
                    }
                    if ($nbr_realisations == 0 ) {
                        echo "<i class = 'small'> ( Aucun prestataire disponibles n'exerce ce métier à votre adresse )</i>";
                    }
                    ?>
            </div>
            </div>

        </section>

        </div>
        <!-- ======= Footer ======= -->
        <footer id="footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 footer-contact">
                            <h3>PRESTA</h3>
                            <p>
                                République du Bénin <br>
                                Disponibles<br>
                                Pour tout les Quatiers de ville et villages<br><br>
                                <strong>Phone(Allo presta):</strong> +229 97304917<br>
                                <strong>Email(SOS presta):</strong> presta@example.com<br>
                            </p>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Visiter</h4>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Acceuil</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Rechercher un metier</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Services disponibles</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Devenir prestataire</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Nos Rubriques</h4>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i>
                                    <a href="#">
                                        Demander un services

                                    </a>
                                </li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#"></a>Devenir prestataire</li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Se connecter</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">S'incrire</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Statistique</h4>
                            <p>Le site presta est disponible pour tout les résidants du pays</p>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i>Nombre de Prestataires : <b> 2754</b></li>
                                <li><i class="bx bx-chevron-right"></i>Nombre de clients : <b> 2000</b></li>
                                <li><i class="bx bx-chevron-right"></i>Nombre de visteurs : <b> 45577</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer><!-- End Footer -->

        <div id="preloader"></div>
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>

          <!-- Vendor JS Files -->
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/js/main.js"></script>
        <script src="authentification/js/adresse.js"></script>

    </body>

</html>