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
            $idrealisation = $_GET['realisation'];
            $idpersonne = $_GET['personne'];
            $idmetier = $_GET['metier'];
           
            

            $realisation = $pdo->prepare("SELECT * FROM realisations WHERE id_photo = $idrealisation");
            $realisation->execute();
            $donnees = $realisation->fetch();

            #Récupererer les données du prestataire qui a effectué la réalisation
            
            $personne = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $idpersonne");
            $personne->execute();
            $data = $personne->fetch();
            $nom = $data['nom'];
            $prenom = $data['prenom'];
            $departement = $data['departement'];
            $commune = $data['commune'];
            $arrondissement = $data['arrondissement'];

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
                    
                    $insertComment->bindParam(':id_photo', $idrealisation);
                    $insertComment->bindParam(':id_personne', $idession);
                    $insertComment->bindParam(':commentaire', $commentaire);
                    $insertComment->bindParam(':date_commentaire', $date);
                    $insertComment->bindParam(':heure_commentaire', $heure);
                    $insertComment->execute();

                    if ($_SESSION['user_id'] !=  $donnees['id_personne']) {
                                //Envoyer une notification
        
                            $detail = 'a commenter votre réalisation : "'.$donnees['descriptio'].'"';
                            $objet= ucfirst(strtolower($_SESSION['prenom'])).' '.strtoupper($_SESSION['nom']) ;
                            $lien = '../realisation.php?realisation='.$donnees['id_photo'].'&personne='. $donnees['id_personne'].'&metier='.$donnees['id_metier'];
                            $image = $_SESSION['profil'];
                            $id_envoi = $donnees['id_personne'];
                        
                            $date=date('Y/m/d');
                            $heure=date("H:i:s");
                        
                            //inserer les données dans la base
                            $insertNotification = $pdo->prepare('INSERT INTO notifications(id_personne , objet, detail, lien_notification,image_notifiction , date_notification , heure_notification)            
                            VALUES(:id_personne, :objet, :detail, :lien_notification, :image_notifiction, :date_notification, :heure_notification )');
                            
                            $insertNotification->bindParam(':id_personne', $id_envoi);
                            $insertNotification->bindParam(':objet', $objet);
                            $insertNotification->bindParam(':detail', $detail);
                            $insertNotification->bindParam(':lien_notification', $lien);
                            $insertNotification->bindParam(':image_notifiction', $image);
                            $insertNotification->bindParam(':date_notification', $date);
                            $insertNotification->bindParam(':heure_notification', $heure);
                            $insertNotification->execute();
                    }
    
                }
                }

        }



            $presta =  $pdo->prepare("SELECT * FROM prestataire WHERE id_personne = $idpersonne");
            $presta->execute(); 
            $fixer = $presta->fetch();
            $datefonction = $fixer['date_fonction'];
        


            #Récupererer les données du metier
           
            $metier = $pdo->prepare("SELECT * FROM metiers WHERE id_metier = $idmetier");
            $metier->execute();
            $donnee = $metier->fetch();
            $metier = $donnee['nom_metier'];
        ?>

        <section class="section section-bg px-4 pt-4 mt-4">
            <div class="row mt-5">
                <div class="col-lg-8">
                    <nav class="">
                        <?php 
                                echo '<ol class="breadcrumb mt-2">
                                <li class="breadcrumb-item">'.$departement.'</li>
                                <li class="breadcrumb-item">'.$commune.'</li>
                                <li class="breadcrumb-item active">'.$arrondissement.'</li>
                            </ol>' ;
                        ?>
                        
                    </nav>
                    <div class="detail-realisation p-4">
                        <h5><strong><?php 
                                echo $metier;
                        ?></strong></h5>
                        <p class="description ">
                        <?php 
                               echo $donnees['descriptio'];
                            ?>
    
                        <div>
                            <span class="avis"><strong>Avis :</strong> </span>
                            <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;" class="bi bi-star-fill"></i>
                            <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;" class="bi bi-star-fill"></i>
                            <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;" class="bi bi-star-fill"></i>
                            <span style="font-size:small;">(10)</span>
                        </div>
                        </p>
                        <div class="image ">
                            <?php 
                                echo '<img width=600 src="mon_compte/'.$donnees['photo'].'" alt="" class="img-fluid">';
                                ?>    
                        </div>
                        <div class = "mt-2">
                        <i class="small">
                            Ajoutée le 
                        <?php 
                        $date = $donnees['date_realisation'];
                        for ($n=0; $n < strlen($date)-9; $n++) { 
                            # code...
                            echo $date[$n];
                        }
                        echo ' à ';
                        for ($i=10; $i < strlen($date); $i++) { 
                            # code...
                            echo $date[$i];
                        }

                        ?> 
                        </i>
                        <div class="text-end">
                            <?php 
                                if (isset($_SESSION['user_id'])) {
                                    if ($idpersonne == $_SESSION['user_id']) {
            
                                    }else {
                                        echo '
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#demander2"  href="" class="btn btn-b-n text-dark px-4">DEMANDER UN SERVICE</button>
                                   ' ;
                                    }
                                }else {
                                    echo '
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#demander2"  href="" class="btn btn-b-n text-dark px-4">DEMANDER UN SERVICE</button>
                                ' ;
                                }
                            ?>
                        </div>
                        <div class="modal fade" id="demander2" tabindex="-1">
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
                    </div>
                    <div class="guide p-5 mt-4 aos-init aos-animate bg-white" data-aos="fade-up" data-aos-delay="200">
                        <div class="mt-3 row">
                            <i class="bi bi-clipboard-plus p-1 col-auto " style = "color: #2eca6a;"></i>
                            <span class="col">Commander le service de votre choix à l'un de nos
                                prestataires</span>
                        </div>
                        <div class="mt-3 row"><i class="bi bi-chat-dots-fill p-1 col-auto" style = "color: #2eca6a;"></i>
                        <span class="col">Echanger par chat sur le
                                site pour avoir
                                une satisfation
                                complète en toute sécurité</span>
                        </div>
                        <div class="mt-3 row"><i class="bi bi-clipboard-check p-1 col-auto" style = "color: #2eca6a;"></i>
                        <span class="col">Avec Presta échanger
                                plus
                                facilement avec les
                                prestataires de services du Bénin</span>
                        </div>
                    </div>
                    <div class="guide mt-4 aos-init aos-animate bg-white" data-aos="fade-up" data-aos-delay="200">
                        <div class="commentaire-title p-3">
                            <h5 class="text-white">Avis des clients</h5>
                        </div>
                        <div class="p-3 row justify-content-between mx-3">
                            <div>
                            </div>
                            <div>
                                <div class="mt-3">
                                    
                                        <?php 
                                            $selectComment = $pdo->prepare("SELECT * FROM commentaires WHERE id_photo = '$idrealisation' ORDER BY id_commentaire");
                                            $selectComment->execute(); 
                                            
                                            $nbr_commentaire=0;

                                            while ($data1 = $selectComment->fetch()) {

                                                $idclient = $data1['id_personne'];
                                                $client = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $idclient");
                                                $client->execute();
                                                $data2 = $client->fetch();

                                                    echo '<div class="commentaire mt-2 row">
                                                    <div class="col-auto">
                                                        <img width="40" src="mon_compte/'.$data2['profil'].'" alt=""
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
                <div class="col-lg-4 mt-4">

                    <div class="card">
                        <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                        <?php 
                            echo '<img width="70" src="mon_compte/'.$data['profil'].'" alt="Profile" class="rounded-circle">
                            <h5><strong>'.ucfirst(strtolower($prenom)).' '.strtoupper($nom);
                        ?></strong> </h5>
                            <h6>"<?php 
                                echo $metier ;
                        ?>"</h6>
                            <div style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"><i
                                    class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                    class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i
                                    class="bi bi-star"></i></div>
                            <div>
                                <div class="mt-3">
                                    <span>Nombre de réalisations</span>
                                    <span class="text-end"><strong>199</strong></span>
                                </div>
                                <div class="mt-1">
                                    <span class="text-start">Nombre d'avis positifs</span>
                                    <span class="text-end ml-5"><strong>300</strong></span>
                                </div>
                                <div class="mt-1">
                                    <span class="text-start">Nombre d'avis négatifs</span>
                                    <span class="text-end ml-5"><strong>0</strong></span>
                                </div>
                                <div class="mt-1">
                                    <span class="text-start">Prestataire depuis</span>
                                    <span class="text-end ml-5"><strong><?php 
                                    
                                        for ($n=0; $n < strlen($datefonction)-9; $n++) { 
                                            # code...
                                            echo $datefonction[$n];
                                        }
                                    ?> </strong></span>
                                </div>
                            </div>
                            <div class="social-links mt-4">
                    
                                <?php 
                                if (isset($_SESSION['user_id'])) {
                                    if ($idpersonne == $_SESSION['user_id']) {
            
                                    }else {
                                        echo '
                                        <a href="chat/chatPage.php?id='.$data['id_personne'].'" class="btn btn-b-n text-dark px-4 mr-4 mt-4">CONTACTER</a>
                                        
                                        <a href="profil_prestataire.php?personne='.$data['id_personne'].'&metier='.$idmetier.'" class="btn btn-b-n text-dark px-4 mr-4 mt-4">VOIR LE PROFIL</a>

                                        ';
                                    }
                                }else {
                                    echo '
                                        <a href="chat/chatPage.php?id='.$data['id_personne'].'" class="btn btn-b-n text-dark px-4 mr-4 mt-4">CONTACTER</a>
                                        
                                        <a href="profil_prestataire.php?personne='.$data['id_personne'].'&metier='.$idmetier.'" class="btn btn-b-n text-dark px-4 mr-4 mt-4">VOIR LE PROFIL</a>

                                        ';
                                }
                                       
                                ?>
                                </div>
                        </div>
                    </div>
                    <div class="guide mt-4 aos-init aos-animate bg-white" data-aos="fade-up" data-aos-delay="200">
                        <div class="commentaire-title p-3">
                            <img src="assets/img/logo-presta1.png" alt="">
                        </div>
                        <div class=" row justify-content-between p-3">
                            <h5><strong>Presta s'engage auprès de ses membres</strong> </h5>
                            <div class="row mt-2">
                                <i class="bi bi-node-plus p-2 col-auto" style = "color: #2eca6a;"></i> 
                               <span class="col">Les prestataires mettent gratuitement leurs talents
                                à la dispositions
                                d'une large clientèle</span> 
                            </div>
                            <div class="row mt-2">
                                <i class="bi bi-node-plus p-2 col-auto" style = "color: #2eca6a;"></i> <span class="col">La plateforme la plus idéale pour communiquer avec
                                les professionnels du
                                Bénin</span>
                                
                            </div>
                            <div class="row mt-2">
                                <i class="bi bi-node-plus p-2 col-auto" style = "color: #2eca6a;"></i> 
                                <span class="col">Retrouver n'importe quelles prestations facilement</span>
                            
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row d-flex">
                    <div class="content section-title mt-4">
                        <h2>réalisations relatives</h2>

                    </div>
                    <?php
                            //Récupération des réalisations depuis la base de données
                        $select = $pdo->prepare("SELECT * FROM realisations WHERE id_metier = $idmetier AND id_photo != $idrealisation ORDER BY id_photo DESC LIMIT 4");
                        $select->execute();
                        $nbr_realisations = 0;
                        while ($real = $select->fetch()) {
                            
                            $image = $real['photo'];


                            $description = $real['descriptio'];

                            $id = $real['id_personne'];

                            $selectAuthor = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $id");
                            $selectAuthor->execute();
                            $donnee = $selectAuthor->fetch();
                            $author = $donnee['prenom'];
                            $author_nom = $donnee['nom'];

                                print('
                                <div class="col-md-6 col-lg-3 mt-4">
                                    <div class="card card-blog">
                                    <a href="realisation.php?realisation='.$real['id_photo'].'&personne='. $donnee['id_personne'].'&metier='.$idmetier.'">
                                        <div class="card-img text-center">
                                            <img src="mon_compte/'.$image.'" alt="" class="p-2 img-fluid image-realisation">
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
                            echo "<i class = 'small'> (La réalisation ci-dessus est la seule qui a été ajouté dans ce domaine)</i>";
                        }
                        
                    ?>
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