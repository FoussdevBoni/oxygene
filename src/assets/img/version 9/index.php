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

        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <!-- Vendor CSS Files -->
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">

        <!-- Template Main CSS File -->
        <link href="assets/css/style.css" rel="stylesheet">
        <script src="index.js"></script>
        <!-- =======================================================
  * site Presta pour toute les  prestations de services au Bénin
  * Réaliser par DARSAF-TECH
  ======================================================== -->
    </head>

    <body>
        <?php 
        require 'authentification/backRegister/dbConnexion.php'; 
        session_start();

        include('navbar.php'); ?>

        <!-- ======= Hero Section ======= -->
        <section id="hero" class="d-flex align-items-center">

            <div class="container">
                <div class="row mt-5">
                    <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-1 order-lg-1"
                        data-aos="fade-up" data-aos-delay="200">
                        <h1>Nous mettons à votre disposition les meilleurs professionnels pour répondre à vos besoins !</h1>
                        <form class=" form-inline mr-auto ml-md-3 my-2 mb-4 mw-100 navbar-search Search" method="GET" action="recherche.php">
                            <div class="input-group">
                                <input type="text" class="form-control bg-light border-0 small"
                                    placeholder="De quoi avez-vous besoin ?" aria-label="Search"
                                    aria-describedby="basic-addon2" name="q" id="q">
                                <div class="input-group-append">
                                    <button class="btn trouver p-2 px-4" type="submit">
                                        Trouver
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-lg-6 d-flex order-3 justify-content-center">
                        <div class="m-2">
                            <a type="button" data-bs-toggle="modal" data-bs-target="#demander"
                                class="btn btn-b-n p-3 align-middle">
                                DEMANDER UN SERVICE
                            </a>
                        </div>
                        <?php 
                            if (isset($_SESSION['user_id'])) {
                                $id = $_SESSION['user_id'];
                                $presta = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $id ");
                                $presta->execute();
                            
                                $data1 = $presta->fetch();
                                $is_presta = $data1['is_presta'];       
                                
                                if ($is_presta == 0) {
                                    echo ' <div class="m-2">
                                    <a href="mon_compte/devenir-presta.php" class="btn btn-b-n p-3 ">
                                        DEVENIR PRESTATAIRE
                                    </a>
                                </div>';
                                }else {
                                    echo ' <div class="m-2">
                                    <a  class="btn btn-b-n p-3 " data-bs-toggle="modal" data-bs-target="#ajouter">
                                        AJOUTER UNE REALISATION
                                    </a>
                                </div>

                                <div class="modal fade" id="ajouter" tabindex="-1">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Ajouter une réalisation </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form action="mon_compte/ajout_realis.php" method="POST" enctype="multipart/form-data">
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
                                                                placeholder="une desciption de l\'image" required></textarea>
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
                                
                                ';
                                }
                                
                            }else {
                                echo ' <div class="m-2">
                                <a href="mon_compte/devenir-presta.php" class="btn btn-b-n p-3 ">
                                    DEVENIR PRESTATAIRE
                                </a>
                            </div>';
                            }
                    ?>
                    </div>
                    <div class="col-lg-6 order-2 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                        <!-- ======= Les Métiers disponibles ======= -->
                        <div id="news-carousel" class="swiper">
                        <div class="swiper-wrapper">
                            <?php
                                $nbr_metier=0;
                                $selectmetiers = $pdo->prepare("SELECT * FROM metiers");
                                $selectmetiers->execute();
                                while ($metier= $selectmetiers->fetch()){

                                        $id_metier = $metier['id_metier'];
                                        $nom_metier = $metier['nom_metier'];
                                        $description = $metier['descriptio'];

                                        $selectrealisation = $pdo->prepare("SELECT DISTINCT id_metier FROM realisations WHERE id_metier = $id_metier ");
                                        $selectrealisation->execute();
                                        while ($realisation= $selectrealisation->fetch()) {
                                            echo '
                                            <div class="carousel-item-c swiper-slide h-25 ">
                                                <div class="card-box-b card-shadow news-box">
                                                    <div class="img-box-b">
                                                        <img src="assets/img/post-2.jpg" alt="" class="img-b img-fluid">
                                                    </div>
                                                    <div class="card-overlay">
                                                        <div class="card-header-b">
                    
                                                            <div class="card-title-b">
                                                                <h2 class="title-2">
                                                                   <strong><a href="metier.php?id='.$id_metier.'">'.$nom_metier.' </a></strong> 
                                                                </h2>
                                                            </div>
                                                            <div class="card-date">
                                                                <span class="date-b">
                                                                ';
                                                                for ($n=0; $n < strlen( $description); $n++) { 
                                                                    # code...
                                                                    echo $description[$n];
                                                                    if ($n==60) {
                                                                       $n=strlen( $description);
                                                                    }
                                                                }

                                                                echo'
                                                                ...</span>
                                                            </div>
                                                            <div class="card-category-b text-end">
                                                                 <a class="category-b p-2 px-3" href="metier.php?id='.$id_metier.'"> Voir plus
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>   
                                        ';
                                        }
                                     }
                                     ?> 
                            </div>
                        </div>
                        <div class="row mx-5 mt-2 d-flex justify-content-center align-items-center"  >
                            <div class="col-auto p-1" style="color:rgba(255, 255, 255, 0.474) ; background-color: #2eca6ab3; border-radius: 100%;">
                                <i class="bi bi-chevron-left small"></i><i class="bi bi-chevron-right small"></i>
                            </div>
                            <div class="row w-90 col" style="border-bottom: rgba(255, 255, 255, 0.474) solid 0.1px">
                            </div>
                        </div>
                        

                        <!-- End Les Métiers disponibles -->
                    </div>
                </div>
            </div>
   
        </section><!-- End Hero -->
        <section class="section section-bg pb-4 bg-white" id="metiers"></section>
        <!-- services regoupés -->
        <section class="section section-bg-cat pt-4 ">
            <div class="container-fluid" data-aos="fade-up">

                <div class="content section-title">
                    <h2>Explorer nos categories</h2>

                </div>
                
                <div class="row categories">

                    <?php
                    $secondselect = $pdo->prepare("SELECT * FROM categories ORDER BY nom_categorie");
                    $secondselect->execute();

                      while ($donnees = $secondselect->fetch()) {

                            $id = $donnees['id_categorie'];
                            $nom = $donnees['nom_categorie'];
                            $icone = $donnees['icone'];

                                echo '
                                <div  class="category col-6 col-sm-4 col-md-3 col-lg-2 my-2">
                                        <div class="row"> 
                                        <a href="categorie.php?idcategorie='.$id.'"
                                        class="cta-btn align-middle ">
                                            <div class="icon text-center ';
                                
                                            if (strlen($nom)<=21) {
                                                
                                            }
                                            echo'pb-1">
                                                <div>
                                                    <img src="'.$icone.'" alt="" width=90 height=60 class="">
                                                </div>
                                                <div class="mx-2 text-center" style="font-size:14px; font-weight: 600; color: rgba(2, 41, 2, 0.804)">
                                                <strong> <small>'.$nom.'</small></strong>
                                                </div>
                                            </div>
                                        </a>
                                        </div>
                                </div>';
                      }
                    ?>

                </div>
            </div>
        </section><!-- End services regoupé -->

        <!-- ======= Cta Section ======= -->
        <section id="cta" class="cta mb-4">
            <div class="container" data-aos="zoom-in">

                <div class="row">
                    <div class="col-lg-8 text-center text-lg-start">
                        <h3>Comment ça marche ?</h3>
                        <div class="row mt-4">
                            <div class="col-lg-4 row">
                                <div class=" col-2"><i class="bi bi-question-lg"></i> </div>
                                <div class="col-10 mt-3">Choisisez le service dont vous recherchez </div>
                            </div>
                            <div class="col-lg-4 row">
                                <div class=" col-2"><i class="bi bi-person-check"></i> </div>
                                <div class="col-10 mt-3">Identifiez et géolocalisez un Prestataire le plus de vous qui
                                    respecte vos
                                    critères</div>
                            </div>
                            <div class="col-lg-4 row">
                                <div class=" col-2"><i class="bi bi-chat-text"></i> </div>
                                <div class="col-10 mt-3">Discutez et contactez le Prestataire</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 cta-btn-container text-center">
                    <a type="button" data-bs-toggle="modal" data-bs-target="#demander" class="cta-btn align-middle">Demander un
                            service</a>
                        </div>
                        <div class="modal fade" id="demander" tabindex="-1">
                            <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title">Demander un service</h5>
                                <span data-bs-dismiss="modal" class="right-boxed bi bi-x croix h2 text-dark"></span>
                                </div>
                                <div class="modal-body ">
                                <form class="form-a " action="mon_compte\demande.php" method="POST">
                                    <div class="row text-dark mx-3">
                                        <div class="col-md-12 mb-2">
                                            <div class="form-group">
                                                <label class="pb-2 text-dark" for=""><small>Donner des précisions sur le service
                                                        recherché</small></label>
                                                <textarea name="text" id="" cols="30" rows="4"
                                                    class="form-control form-control-lg form-control-a description"
                                                    placeholder="Ecrivez ici!"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <div class="form-group mt-3">
                                                <label class="pb-2 text-dark" for="metier">Métier</label>
                                                <select class="form-control form-select form-control-a" id="metier" name="metier">
                                                <?php
                                                        foreach($donnes as $donne)
                                                        {
                                        
                                                            echo " <option>". $donne['nom_metier']."</option>";
                                                            echo "<br>";
                                                        }
                                                        ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <div class="form-group mt-3">
                                                <label class="pb-2 text-dark" for="departement">Département</label>
                                                <select class="form-select" name="departement" id="first-list1">
                                                    <option value="">Département</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <div class="form-group mt-3">
                                                <label class="pb-2 text-dark" for="commune">Commune</label>
                                                <select class="form-select" name="commune" id="second-list1">
                                                    <option value="">Commune</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <div class="form-group mt-3">
                                                <label class="pb-2 text-dark" for="arrondissement">Arrondissement</label>
                                                <select class="form-select" name="arrondissement" id="third-list1">
                                                    <option value="">Arrondissement</option>
                                                </select>
                                            </div>
                                        </div>
                                    
                                        <div class="col-md-12 m-3 text-end">
                                            <button type="submit" class="btn btn-b-n text-dark px-4">LANCER LA DEMANDE</button>
                                        </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>

                <?php 
                            if (isset($_SESSION['user_id'])) {
                                $id = $_SESSION['user_id'];
                                $presta = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $id ");
                                $presta->execute();
                            
                                $data1 = $presta->fetch();
                                $is_presta = $data1['is_presta'];       
                                
                                if ($is_presta == 0) {
                                    echo '<div class="row mt-4 pt-4">
                                    <div class="col-lg-8 text-center text-lg-start">
                                        <h3>Vous voulez devenir Prestataire ?</h3>
                                        <div class="row mt-4">
                                            <div class="col-lg-4 row">
                                                <div class=" col-2"><i class="bi bi-question-lg"></i> </div>
                                                <div class="col-10 mt-3 ">Clickez sur "Devenir Prestataire" et renseigner toutes les
                                                    informations qui vous
                                                    seront demander </div>
                                            </div>
                                            <div class="col-lg-4 row">
                                                <div class=" col-2"><i class="bi bi-person-check"></i> </div>
                                                <div class="col-10 mt-3">Mettez un mot de passe de sécurité , Enregistrez vos
                                                    informations et faites vous
                                                    créer un profil Prestataire</div>
                                            </div>
                                            <div class="col-lg-4 row">
                                                <div class=" col-2"><i class="bi bi-chat-text"></i> </div>
                                                <div class="col-10 mt-3">Gérez votre compte en clickant sur "Mon compte"</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 cta-btn-container text-center">
                                        <a class="cta-btn align-middle" href="mon_compte/devenir-presta.php">Devenir
                                            prestataire</a>
                                    </div>
                                </div>';
                                }
                                
                            }else {
                                echo '<div class="row mt-4 pt-4">
                                <div class="col-lg-8 text-center text-lg-start">
                                    <h3>Vous voulez devenir Prestataire ?</h3>
                                    <div class="row mt-4">
                                        <div class="col-lg-4 row">
                                            <div class=" col-2"><i class="bi bi-question-lg"></i> </div>
                                            <div class="col-10 mt-3 ">Clickez sur "Devenir Prestataire" et renseigner toutes les
                                                informations qui vous
                                                seront demander </div>
                                        </div>
                                        <div class="col-lg-4 row">
                                            <div class=" col-2"><i class="bi bi-person-check"></i> </div>
                                            <div class="col-10 mt-3">Mettez un mot de passe de sécurité , Enregistrez vos
                                                informations et faites vous
                                                créer un profil Prestataire</div>
                                        </div>
                                        <div class="col-lg-4 row">
                                            <div class=" col-2"><i class="bi bi-chat-text"></i> </div>
                                            <div class="col-10 mt-3">Gérez votre compte en clickant sur "Mon compte"</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 cta-btn-container text-center">
                                    <a class="cta-btn align-middle" href="mon_compte/devenir-presta.php">Devenir
                                        prestataire</a>
                                </div>
                            </div>';
                            }
                    ?>
                
            </div>
        </section><!-- End Cta Section -->
  
        <section class="section section-bg px-4 pt-4 mt-4">
            <div class="content section-title">
            <h2>meilleures réalisations</h2>
            </div>
            <div class="row">
                
            <?php
                                //Récupération des réalisations depuis la base de données
                $select = $pdo->prepare("SELECT * FROM realisations ORDER BY id_photo DESC LIMIT 4");
                $select->execute();
                $nbr_realisations = 0;
                while ($donnees = $select->fetch()) {
                
                    $image = $donnees['photo'];
                    $description = $donnees['descriptio'];
                    $id = $donnees['id_personne'];
                    $idmetier = $donnees['id_metier'];

                    $selectAuthor = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $id");
                    $selectAuthor->execute();
                    $donnee = $selectAuthor->fetch();
                    $author = $donnee['prenom'];
                    $author_nom = $donnee['nom'];

                    print('<div class="col-md-4 col-lg-3 mt-4">
                        <div class="card card-blog p-2">
                        <a href="realisation.php?realisation='.$donnees['id_photo'].'&personne='. $donnee['id_personne'].'&metier='.$idmetier.'">
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
                            <a href="profil_prestataire.php?personne='. $donnee['id_personne'].'&metier='.$id_metier.'">
                                <div class="image justify-content-center">
                                        <img src="mon_compte/files/identite/profil.jpg" alt="" class="avatar rounded-circle">
                                    </div>
                                    <div class="nom">
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
                        echo "<i class = 'small'> ( Aucune réalisation disponible pour le moment )</i>";
                    }
                    ?>
            </div> 
        </section>

        <!-- ======= Footer ======= -->
        <footer id="footer">
            <div class="footer-top">
                <div class="container">
                <h3 style="text-decoration: underline 4px #2eca6a;"><strong>Presta</strong> </h3>
                    <div class="row mt-3">
                    <div class="col-lg-3 col-md-6 footer-links ">
                            <h4>Statistique</h4>
                            <ul>
                                <li><i class="bi bi-chevron-right"></i>Demandes en attentes : <b> 2754</b></li>
                                <li><i class="bi bi-chevron-right"></i>Demandes réglées : <b>  2754</b></li>
                                <li><i class="bi bi-chevron-right"></i>Satisfation des clients:  <b>  95,3%</b></li>
                            </ul>
                        </div>
                        
                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>A propos de Presta</h4>
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">En savoir plus</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Comment ça marche ?</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Devenir prestataire</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Centre d'aide et contact</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Visiter</h4>
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Acceuil</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Rechercher un metier</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Services disponibles</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Devenir prestataire</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Contacts</h4>
                            <ul>
                                <strong><b class="bi bi-youtube p-1" style="color = black; font-size: 25px;"></b></strong>
                                <strong><b class="bi bi-facebook p-1" style="color = black; font-size: 25px;"></b></strong>
                                <strong><b class="bi bi-twitter p-1" style="color = black; font-size: 25px;"></b></strong>
                                <strong><b class="bi bi-linkedin p-1" style="color = black; font-size: 25px;"></b></strong>
                                
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Conditions générales</a></li>
                            </ul>
                                
                        </div>
                    </div>
                </div>
            </div>
        </footer><!-- End Footer -->

        <div id="preloader"></div>
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>

            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <!-- Vendor JS Files -->
            
                <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <!-- Template Main JS File -->
        <script src="assets/js/main.js"></script>
        <script src="authentification/js/adresse.js"></script>


    </body>

</html>