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
        <link href="assets/css/realisation.css" rel="stylesheet">
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

            #Récupererer les données du prestataire qui a effectué la réalisation
            $idpersonne = $_GET['personne'];
            $personne = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $idpersonne");
            $personne->execute();
            $data = $personne->fetch();
            $nom = $data['nom'];
            $prenom = $data['prenom'];
            $departement = $data['departement'];
            $commune = $data['commune'];
            $arrondissement = $data['arrondissement'];

            $presta =  $pdo->prepare("SELECT * FROM prestataire WHERE id_personne = $idpersonne");
            $presta->execute(); 
            $fixer = $presta->fetch();

            #Récupererer les données du metier
            $idmetier = $_GET['metier'];
            $metier = $pdo->prepare("SELECT * FROM metiers WHERE id_metier = $idmetier");
            $metier->execute();
            $donnee = $metier->fetch();
            $metier = $donnee['nom_metier'];
            $idcategorie = $donnee['id_categorie'];

            $cat = $pdo->prepare("SELECT * FROM categories WHERE id_categorie = $idcategorie");
            $cat->execute();
            $donnees = $cat->fetch();
        ?>

        

        <style>
            .cta1{
                    background: linear-gradient(rgba(0, 0, 0, 0.650), rgba(0, 0, 0, 0.650)),  url("assets/img/post-4.jpg") fixed center center;
                    }
        </style>
        
        <section id="cta1" class="cta1">
            <div class="container">

                <div class="row">
                    <div class=" text-center text-lg-start">
                        <h7><?php echo $donnees['nom_categorie']; ?></h7>
                        <h3><strong><?php 
                                echo $metier;
                        ?></strong></h3>
                    </div>
                </div>
            </div>
        </section><!-- End Cta Section -->

        <section class="guide">
            <div class="card-body profile-card d-flex flex-column align-items-center">
            <?php echo'
                <img width="90" src="mon_compte/'.$data['profil'].'" alt="Profile" class="rounded-circle">
                <h5><strong>'.  ucfirst(strtolower($prenom)).' '.strtoupper($nom) ;
                        ?></strong> </h5>
                <small><?php 
                        echo '<div class=" mx-5">
                        <ol class="breadcrumb mt-2">
                        <li class="breadcrumb-item">'.$departement.'</li>
                        <li class="breadcrumb-item">'.$commune.'</li>
                        <li class="breadcrumb-item active">'.$arrondissement.'</li>
                    </ol></div>';
                    if (isset($_SESSION['user_id'])) {
                        if ($idpersonne == $_SESSION['user_id']) {

                        }else {
                            echo '
                            <div class=" mt-1 text-center">
                            <a href="chat/chatPage.php?id='.$data['id_personne'].'" class="btn btn-b-n text-dark px-4">CONTACTER</a>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#demander1"  href="" class="btn btn-b-n text-dark px-4">DEMANDER UN SERVICE</button>
                        </div>' ;
                        }
                    }else {
                        echo '
                        <div class=" mt-1 text-center">
                        <a href="chat/chatPage.php?id='.$data['id_personne'].'" class="btn btn-b-n text-dark px-4">CONTACTER</a>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#demander1"  href="" class="btn btn-b-n text-dark px-4">DEMANDER UN SERVICE</button>
                    </div>' ;
                    }
                    
                ?></small>
                <div class="modal fade" id="demander1" tabindex="-1">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Demander un service à <strong> <?php echo ucfirst(strtolower($prenom));?></strong></h5>
                                        <span data-bs-dismiss="modal" class="right-boxed bi bi-x croix h2 text-dark"></span>
                                    </div>
                                    <div class="modal-body ">
                                        <form class="form-a " action="<?php echo 'mon_compte\demande.php?idpresta='.$fixer['id_prestataire'].'&idmetier='.$idmetier;?>" method="POST">
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
        </section>

        <section class="section section-bg px-4">
            <div class="row">
                <div class="col-lg-3 ">
                    <div class="guide mt-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <div class="commentaire-title p-3 text-center ">
                            <h5 class="text-white">Statistiques prestataire</h5>
                        </div>
                        <div class=" row justify-content-between p-3">
                            <small>
                                <div>
                                    <i class="bi bi-briefcase-fill px-2"></i> Professionnel en Agriculture
                                </div>
                                <div class="mt-1">
                                    <span> <i class="bi bi-chat-left-text px-2"></i>Disponible sur Presta</span>
                                </div>
                                <div class="mt-1 row justify-content-between">
                                    <span class="col-9"> <i class="bi bi-hand-thumbs-up-fill px-2"></i>Avis
                                        positifs</span>
                                    <span class="text-end col-2"><small><strong>43</strong></small> </span>
                                </div>
                                <div class="mt-1 row justify-content-between">
                                    <span class="col-9"><i class="bi bi-hand-thumbs-down-fill px-2"></i>Avis
                                        négatifs</span>
                                    <span class="text-end col-2"><small><strong>0</strong></small> </span>
                                </div>
                                <div class="mt-1 row justify-content-between">
                                    <span class="col-9"><i class="bi bi-person-plus px-2"></i>Contacts</span>
                                    <span class="text-end col-2"><small><strong>276</strong></small> </span>
                                </div>
                                <div class="mt-1 row justify-content-between">
                                    <span class="col-10"><i class="bi bi-reply-all-fill px-2"></i>Temps de réponse
                                        moy.</span>
                                    <span class="text-end col-2"><small><strong>2h</strong></small> </span>
                                </div>
                                <div class="mt-1 row justify-content-between">
                                    <span class="col-8"><i class="bi bi-file-person-fill px-2"></i>Prestataire
                                        depuis</span>
                                    <span class="text-end col-4"><small><strong><?php 
                                            $datefonction = $fixer['date_fonction'];
                                            for ($n=0; $n < strlen($datefonction)-9; $n++) { 
                                                # code...
                                                echo $datefonction[$n];
                                            }
                                        ?></strong></small> </span>
                                </div>
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                <div class="row d-flex ">
                    <div class="content section-title mt-4">
                        <h2>Ses réalisations</h2>

                    </div>
                    <?php
                            //Récupération des réalisations depuis la base de données
                        $select = $pdo->prepare("SELECT * FROM realisations WHERE id_personne = $idpersonne  ORDER BY id_photo DESC");
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
                                <div class="col-md-4 col-lg-4 mt-4">
                                    <div class="card card-blog p-2">
                                    <a href="realisation.php?realisation='.$donnees['id_photo'].'&personne='. $donnee['id_personne'].'&metier='.$idmetier.'">
                                        <div class="card-img text-center">
                                            <img src="mon_compte/'.$image.'" alt="" class="img-fluid image-realisation">
                                        </div>
                                        <p class="card-description"><small>');
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
                                            <a href="profil_prestataire.php?personne='. $donnee['id_personne'].'&metier='.$idmetier.'">
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
                            echo "<i class = 'small'> (Ce pretataire n'a ajouté aucune réalisation)</i>";
                        }
                    ?>
                </div>
            </div>

                </div>
            </div>
        </section>

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