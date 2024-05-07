<?php
    require '../authentification/backRegister/dbConnexion.php';
    session_start() ;

    
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

        <title>Notification</title>
        <meta content="" name="description">
        <meta content="" name="keywords">

        <!-- Favicons -->
        <link href="../assets/img/logo-presta3.png" rel="icon">
        <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon">

        <!-- Google Fonts -->
        <link href="https://fonts.gstatic.com" rel="preconnect">
        <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet">

            <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
              <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">

        <!-- Template Main CSS File -->
        <link href="../assets/css/style.css" rel="stylesheet">
        <link href="../assets/css/categorie.css" rel="stylesheet">
        <link href="css/message.css" rel="stylesheet">

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
                    <a class="nav-link active" href="notifications.php">
                     <i class="bi bi-bell-fill h5"></i>
                    <span class="badge bg-danger badge-number"></span>
                    <span class="d-none d-lg-block">Notifications</span>
                    </a> </span>

                    <span class="nav-item text-center">
                    <a class="nav-link" href="../recherche.php">
                     <i class="bi bi-gift h5"></i>
                    <span class="badge bg-danger badge-number">6</span>
                    <span class="d-none d-lg-block">Rélalisations</span>
                    </a> </span>
                    


                        <span class="nav-item dropdown text-center">
                            <a class="nav-link nav-profile" href="#"
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
        <section class="section section-bg">
                <!-- ======= Intro Single ======= -->
            <div class="intro-single">
                <div class="container">
                    <div class="row">
                    <div class="col-10">
                        <div class="title-single-box">
                        <h1 class="title-single">
                        Notifications
                        </h1>
                        </div>
                    </div>
                    <div class="col-2">
                        <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                                <a class="nav-link nav-icon mx-2" href="#" data-bs-toggle="dropdown">
                                    <i class="bi bi-search" style="color: #2eca6a;"></i>
                            </a><!-- End Messages Icon -->
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages px-2" >
                                        <form class="form-inline " method="GET" action="">
                                                <div class="input-group ">
                                                        <input type="text" class="form-control bg-light border-0 small "
                                                            placeholder="Rechercher" aria-label="Search"
                                                            aria-describedby="basic-addon2" name="q" id="q" style="color: black;">
                                                        <div class="input-group-append">
                                                            <button class="btn trouver p-2 px-3" type="submit" style="background-color: #2eca6a;">
                                                                <i class="bi bi-search"></i>                   
                                                            </button>
                                                    </div>
                                                </div>
                                            </form>                               

                                    </ul><!-- End Messages Dropdown Items -->
                        </nav>
                    </div>
                    </div>
                </div>
            </div><!-- End Intro Single-->

            <div class=" dashboard">
                            <!-- News & Updates Traffic -->
                        <div class="news messagesList row mx-1 mx-md-2">
                                    <?php
                                        //Récupérer toutes les demandes éffectué par l'utilisateur
                                        $id = $_SESSION['user_id'];
                                        $selectNotification = $pdo->prepare("SELECT * FROM notifications WHERE id_personne = $id  ORDER BY id_notification DESC");
                                        $selectNotification->execute();
                                        $nbr_demande = 0;
                                        
                                        while ($donnees = $selectNotification->fetch()) {
                                            

                                            $temps=$donnees['date_notification'];

                                            echo '<div class="message-item px-4 col-md-6  " role="alert" >

                                                <a href="'.$donnees['lien_notification'].'" style="color = black;" class="row bg-white pt-3 border-1 my-2">
                                                <div class="col-auto ">
                                                <img src="'.$donnees['image_notifiction'].'" alt="" width=60 class="rounded-circle">
                                                </div>
                                                <div class="col" style="margin-right: 40px;">
                                                <small><b>'.$donnees['objet'].'</b></small>
                                                    <small>'
                                                    ;
                                                    $description = $donnees['detail'];

                                                        for ($n=0; $n < strlen( $description); $n++) { 
                                                            # code...
                                                            echo $description[$n];
                                                            if ($n==130) {
                                                                echo '...';
                                                            $n=strlen( $description);
                                                            }
                                                        }
                                                        echo '</small><br>
                                                    <p style="text-align: end;"><i><small>'.$temps.'</small></i></p>
                                                </div>
                                                
                                                </a>
                                
                                        </div>';
                                        $nbr_demande += 1;
                                        }

                                        if ($nbr_demande == 0 ) {
                                            echo "<i class = 'small'> (Aucune notification)</i>";
                                        }
                                        
                                        ?>
                                        
                                    </div>

        </section>


        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>
        <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>



        <!-- Template Main JS File -->
        <script src="js/main.js"></script>

    </body>

</html>