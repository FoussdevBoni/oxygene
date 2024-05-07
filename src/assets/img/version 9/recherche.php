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
            
            include('navbar.php');

            if (isset($_GET["q"]) && !empty($_GET["q"]) && $_GET["q"] != ' ' ){
                    function traiter($q){
                    
                        $q = htmlspecialchars($q);// échappe les caractères spéciaux
    
                        $q = strtolower(str_replace(' ','',$q)); // nettoie et convertit en minuscules
                        
                        $q = iconv('UTF-8', 'ASCII//TRANSLIT', $q);
    
                        $q = preg_replace('/[^a-zA-Z0-9 -]/','',$q); // supprime les accents
                        
                        return $q;
                    }
    
                    $q = traiter($_GET["q"]);
                    
                    //Selectionner les prestataires qui correspondent à la recherche lancer par l'utilisateur
                    $selectPersonne = $pdo->prepare("SELECT * FROM utilisateurs WHERE ( REPLACE(LOWER(nom),' ','') LIKE '%$q%'
                    OR REPLACE(LOWER(prenom),' ','') LIKE '%$q%' OR REPLACE(LOWER(departement),' ','') LIKE '%$q%'
                    OR REPLACE(LOWER(commune),' ','') LIKE '%$q%' OR REPLACE(LOWER(arrondissement),' ','') LIKE '%$q%'
                    OR REPLACE(LOWER(biographie),' ','') LIKE '%$q%' OR REPLACE(LOWER(contact),' ','') LIKE '%$q%' ) AND is_presta='1' ORDER BY id_personne");
    
                    //Selectionner les réalisations qui correspondent à la recherche lancer par l'utilisateur
                    $selectRealisation = $pdo->prepare("SELECT * FROM realisations WHERE REPLACE(LOWER(descriptio),' ','') LIKE '%$q%'
                    OR REPLACE(LOWER(photo),' ','') LIKE '%$q%' ORDER BY id_photo DESC");

                    //Selectionner les prestataires qui correspondent à la recherche lancer par l'utilisateur
                    $selectMetier = $pdo->prepare("SELECT * FROM metiers WHERE REPLACE(LOWER(nom_metier),' ','') LIKE '%$q%'
                    OR REPLACE(LOWER(descriptio),' ','') LIKE '%$q%' ORDER BY id_metier");                    

            }

        ?>

        <section class="section section-bg px-4 mt-2">
                <!-- ======= Intro Single ======= -->
            <section class="intro-single">
                <div class="container">
                    <div class="row">
                    <div class="col-md-12 col-lg-8">
                        <div class="title-single-box">
                        <h1 class="title-single">
                            Réalisations
                        </h1>
                        <span class="color-text-a">
                            <?php
                                    if (isset($_GET["q"]) && !empty($_GET["q"]) && $_GET["q"] != ' ' ) {
                                        echo $_GET["q"];
                                    }else {
                                        echo 'Toutes les réalisations';
                                    }
                        
                                ?></span>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-4">
                        <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                            <form class=" form-inline mr-auto ml-md-3 my-2 mb-4 mw-100 navbar-search Search" method="GET" action="recherche.php">
                                <div class="input-group">
                                    <input type="text" class="form-control bg-light small bg-white trouver"
                                        placeholder="De quoi avez-vous besoin ?" aria-label="Search"
                                        aria-describedby="basic-addon2" name="q" id="q" style="color: black;">
                                    <div class="input-group-append">
                                        <button class="btn trouver p-2 px-4" type="submit" style="background-color: #023314;">
                                            Trouver
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </nav>
                    </div>
                    </div>
                </div>
            </section><!-- End Intro Single-->                
                <!-- ======= Les réalisations disponibles ======= -->
                <section>
                        <div class="row mx-4">
                    
                            <?php
                                    $nbr_realisations = 0;

                                    if (isset($_GET["q"]) && !empty($_GET["q"]) && $_GET["q"] != ' ' ) {

                                        $selectRealisation->execute();
                                        while ($data1 = $selectRealisation->fetch()) {
                                        
                                            $image = $data1['photo'];
                                            $description = $data1['descriptio'];
                                            $id = $data1['id_personne'];
                                            $id_metier = $data1['id_metier'];
    
                                            $selectAuthor = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $id");
                                            $selectAuthor->execute();
                                            $donnee = $selectAuthor->fetch();
                                            $author = $donnee['prenom'];
                                            $author_nom = $donnee['nom'];
                                            
                                            print('
                                                <div class="col-md-4 col-lg-3 mt-4">
                                                    <div class="card card-blog p-2">
                                                    <a href="realisation.php?realisation='.$data1['id_photo'].'&personne='. $data1['id_personne'].'&metier='.$id_metier.'">
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
                                                            <a href="profil_prestataire.php?personne='. $data1['id_personne'].'&metier='.$id_metier.'">
                                                                <div class="image justify-content-center">
                                                                    <img src="mon_compte/files/identite/profil.jpg" alt="" class="avatar rounded-circle">
                                                                </div>
                                                                <div class="nom mt-2">
                                                                    <div class=""> <span class="">'.ucfirst(strtolower($author)).' '.strtoupper($author_nom).'</span>
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

                                        $selectMetier->execute();
                                        while ($data2 = $selectMetier->fetch()) {

                                            $idmetier = $data2['id_metier'];
                                            $select = $pdo->prepare("SELECT * FROM realisations WHERE id_metier = $idmetier  ORDER BY id_photo DESC");
                                            $select->execute();

                                            while ($donnees = $select->fetch()) {
                                        
                                                $image = $donnees['photo'];
                        
                        
                                                $description = $donnees['descriptio'];
                        
                                                $id = $donnees['id_personne'];
                                                $id_metier = $donnees['id_metier'];
        
                                                
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
                                                                        <img src="mon_compte/files/identite/profil.jpg" alt="" class="avatar rounded-circle">
                                                                    </div>
                                                                    <div class="nom mt-2">
                                                                        <div class=""> <span class="">'.ucfirst(strtolower($author)).' '.strtoupper($author_nom).'</span>
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
                                        
                                        $selectPersonne->execute();
                                        while ($data3 = $selectPersonne->fetch()) {

                                            $idpersonne = $data3['id_personne'];
                                            $select = $pdo->prepare("SELECT * FROM realisations WHERE id_personne = $idpersonne  ORDER BY id_photo DESC");
                                            $select->execute();

                                            while ($donnees = $select->fetch()) {
                                        
                                                $image = $donnees['photo'];
                        
                        
                                                $description = $donnees['descriptio'];
                        
                                                $id = $donnees['id_personne'];
                                                $id_metier = $donnees['id_metier'];
        
                                                
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
                                                                        <img src="mon_compte/files/identite/profil.jpg" alt="" class="avatar rounded-circle">
                                                                    </div>
                                                                    <div class="nom mt-2">
                                                                        <div class=""> <span class="">'.ucfirst(strtolower($author)).' '.strtoupper($author_nom).'</span>
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
                                            echo "<i class = 'small'> ( Aucune réalisation ne correspond à votre recheche )</i>";
                                        }

                                    }else {
                                         //Récupération des réalisations depuis la base de données
                                    $select = $pdo->prepare("SELECT * FROM realisations ORDER BY id_photo DESC");
                                    $select->execute();
                                    while ($donnees = $select->fetch()) {
                                        
                                        $image = $donnees['photo'];
                
                
                                        $description = $donnees['descriptio'];
                
                                        $id = $donnees['id_personne'];
                                        $id_metier = $donnees['id_metier'];

                                        
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
                                                                <div class=""> <span class="">'.ucfirst(strtolower($author)).' '.strtoupper($author_nom).'</span>
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
                                        echo "<i class = 'small'> ( Aucune réalisation disponible pour le moment)</i>";
                                    }
                                    }

                                      
                                    ?>
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
                </section>           
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
                                <li><i class="bx bx-chevron-right"></i>Nombre de Prestataires : <b> 2754</b></li>
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