<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">

        <title>PRESTA</title>
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
        <link href="assets/css/categorie.css" rel="stylesheet">
        <!-- =======================================================
  * site PRESTA pour toute les  prestations de services au Bénin
  * Réaliser par DARSAF-TECH
  ======================================================== -->
    </head>

    <body>
        <?php 
            require 'authentification/backRegister/dbConnexion.php';
            session_start();

            $idcategorie = $_GET['idcategorie'];
            if (!isset($_GET['idcategorie'])) {
                $idcategorie = 1;
            }
            include('navbar.php');
            $selectcat = $pdo->prepare("SELECT * FROM categories WHERE id_categorie = $idcategorie");
            $selectcat->execute() ;
            $categorie = $selectcat->fetch()

        ?>

        <section class="section section-bg px-4 mt-2">
                <!-- ======= Intro Single ======= -->
            <section class="intro-single">
                <div class="container">
                    <div class="row">
                    <div class="col-md-12 col-lg-8">
                        <div class="title-single-box">
                        <h1 class="title-single">
                        <?php echo $categorie['nom_categorie'];
                            ?> 
                        </h1>
                        <span class="color-text-a">Categorie de metier</span>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-4">
                        <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                            <div class="" style="border: #2eca6a solid 2px;">
                                <a class="nav-link dropdown-toggle p-2 bg-white" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" >Explorer les metiers de ce catégorie 
                                   </a>
                                <div class="dropdown-menu px-4 pt-4 row">
                                    <ul class="px-4">                  
                                    <?php
                                                $selectmetier = $pdo->prepare("SELECT * FROM metiers WHERE id_categorie = $idcategorie");
                                                $selectmetier->execute() ;

                                                    while ($metiers = $selectmetier->fetch()){

                                                        $id_metier = $metiers['id_metier'];
                                                        $nom_metier = $metiers['nom_metier'];
                                                        echo '<li class="mt-2">
                                                        <a href="metier.php?id='.$id_metier.'">                                                    
                                                                '.$nom_metier.'
                                                        </a></li> 
                                                        ';
                                                    
                                                    }
                                        ?> 
                                    </ul> 
                                </div>
                                
                            </div>
                           
                        </nav>
                    </div>
                    </div>
                </div>
            </section><!-- End Intro Single-->
            <div class=" hero-img" data-aos="zoom-in" data-aos-delay="200">
                        <!-- ======= Les Métiers disponibles ======= -->
                        <div id="" class="row mx-sm-4">
                            <?php
                                $nbr_metier=0;
                                $selectmetiers = $pdo->prepare("SELECT * FROM metiers WHERE id_categorie = $idcategorie");
                                $selectmetiers->execute() ;
                                $nbr_realisations = 0;
                                while ($metier= $selectmetiers->fetch()){

                                        $id_metier = $metier['id_metier'];
                                        $nom_metier = $metier['nom_metier'];
                                        $description = $metier['descriptio'];

                                                                //Récupération des réalisations depuis la base de données
                                        $select = $pdo->prepare("SELECT * FROM realisations WHERE id_metier = $id_metier   ORDER BY id_photo DESC");
                                        $select->execute();
                                       
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
                                     }
                                    
                                     if ($nbr_realisations == 0 ) {
                                        echo "<i class = 'small'> ( Aucun prestataire disponible dans cette categorie de metier )</i>";
                                    }
                                     ?> 
                                <!-- End carousel item -->

                        </div>
                        <div class='row d-flex justify-content-center'>
                            <div class="row w-75 mx-5 mt-3 d-flex justify-content-center align-items-center"  >
                                <div class="col-auto p-1" style="color: white ; background-color: #2eca6a; border-radius: 100%;">
                                    <i class="bi bi-chevron-left small"></i><i class="bi bi-chevron-right small"></i>
                                </div>
                                <div class="row w-50 col" style="border-bottom: #2eca6a solid 0.1px">
                                </div>
                            </div>
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
                            <h3>Presta</h3>
                            <p>
                                République du Bénin <br>
                                Disponibles<br>
                                Pour tout les Quatiers de ville et villages<br><br>
                                <strong>Phone(Allo Presta):</strong> +229 97304917<br>
                                <strong>Email(SOS Presta):</strong> Presta@example.com<br>
                            </p>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Visiter</h4>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Acceuil</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Rechercher un metier</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Services disponibles</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Devenir Prestataire</a></li>
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
                                <li><i class="bx bx-chevron-right"></i> <a href="#"></a>Devenir Prestataire</li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Se connecter</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">S'incrire</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Statistique</h4>
                            <p>Le site Presta est disponible pour tout les résidants du pays</p>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i>Nombre de prestataires : <b> 2754</b></li>
                                <li><i class="bx bx-chevron-right"></i>Nombre de clients : <b> 2000</b></li>
                                <li><i class="bx bx-chevron-right"></i>Nombre de visteurs : <b> 45577</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer><!-- End Footer -->


        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>

                          <!-- Vendor JS Files -->
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>


        <!-- Template Main JS File -->
        <script src="assets/js/main.js"></script>
        <script src="authentification/js/adresse.js"></script>

    </body>

</html>