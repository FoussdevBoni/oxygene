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

        <title>Devenir presta</title>
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
        <link href="css/style.css" rel="stylesheet">

        <!-- Template Main CSS File -->
        <link href="../assets/css/style.css" rel="stylesheet">
        <link href="../assets/css/metier.css" rel="stylesheet">
        <link href="../assets/css/realisation.css" rel="stylesheet">
        <script src="index.js"></script>
        <!-- =======================================================
  * site PRESTA pour toute les  prestations de services au Bénin
  * Réaliser par DARSAF-TECH
  ======================================================== -->
    </head>

    <body>

        <!-- ======= Header ======= -->
        <header id="header" class=" fixed-top mb-3">

            <div class="d-flex header align-items-center">
                <div class="d-flex align-items-center justify-content-between">
                    <a href="../index.php" class="logo d-flex align-items-center">
                        <a href="../index.php" class="d-none d-lg-block text-brand">Presta</a>

                    </a>
                    <i class="bi bi-list toggle-sidebar-btn"></i>
                </div><!-- End Logo -->

                <nav class="header-nav ms-auto">
                    <ul class="d-flex align-items-center">
                        <li class="nav-item dropdown">
                            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i class="bi bi-bell"></i>
                                <span class="badge bg-danger badge-number">4</span>
                            </a><!-- End Notification Icon -->

                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li class="dropdown-header">
                                    Vous avez 4 nouveaux messages
                                    <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-exclamation-circle text-warning"></i>
                                    <div>
                                        <h4>Nouvelle demande de prestation</h4>
                                        <p>Vous pouvez fournir une prestation dans les 30 minutes qui suivent ??</p>
                                        <p>Il y a 30 min</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider">
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-x-circle text-danger"></i>
                                    <div>
                                        <h4>Commentaires sur vos services</h4>
                                        <p>Trois nouveaux commentaires sur vs services</p>
                                        <p>1 hr. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider">
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-check-circle text-success"></i>
                                    <div>
                                        <h4>Nouveau ami</h4>
                                        <p>Vous avez une sugestion d'amis</p>
                                        <p>Il y a 2h</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider">
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-info-circle text-primary"></i>
                                    <div>
                                        <h4>Alerte de sécurité</h4>
                                        <p>Veuillez changer votre mot de passe svp</p>
                                        <p>Il y a 30 minutes</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li class="dropdown-footer">
                                    <a href="#">Voir toutes les notifications</a>
                                </li>

                            </ul><!-- End Notification Dropdown Items -->

                        </li><!-- End Notification Nav -->

                        <li class="nav-item dropdown">

                            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i class="bi bi-chat-left-text"></i>
                                <span class="badge bg-success badge-number">3</span>
                            </a><!-- End Messages Icon -->

                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                                <li class="dropdown-header">
                                    Vous avez 3 nouveau messages
                                    <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>

                                <li class="message-item">
                                    <a href="#">
                                        <img src="img/messages-1.jpg" alt="" class="rounded-circle">
                                        <div>
                                            <h4>BONI Fousséni </h4>
                                            <p>L'écran de mon PC est bousillé bro</p>
                                            <p>4 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>

                                <li class="message-item">
                                    <a href="#">
                                        <img src="img/messages-2.jpg" alt="" class="rounded-circle">
                                        <div>
                                            <h4>AVOSSE Simon</h4>
                                            <p>J'ai perdu le chargeur de mon PC. Je peux l'avoir chez toi...</p>
                                            <p>6 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>

                                <li class="message-item">
                                    <a href="#">
                                        <img src="img/messages-3.jpg" alt="" class="rounded-circle">
                                        <div>
                                            <h4>SOULE Soumaila</h4>
                                            <p>Mon PC a un souci de batterie. Pouvez-vous m'aidez??</p>
                                            <p>8 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>

                                <li class="dropdown-footer">
                                    <a href="#">Voir tous les messages</a>
                                </li>

                            </ul><!-- End Messages Dropdown Items -->

                        </li><!-- End Messages Nav -->

                        <li class="nav-item dropdown pe-3">

                            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#"
                                data-bs-toggle="dropdown">
                                <img src="img/profile-img.jpg" alt="Profile" class="rounded-circle">
                                <span class="d-none d-md-block dropdown-toggle ps-2"></span>
                            </a><!-- End Profile Iamge Icon -->

                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li class="dropdown-header">
                                    <h6>SESSOU Richard</h6>
                                    <span>Maintenancier</span>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>

                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="users-profile.php">
                                        <i class="bi bi-person"></i>
                                        <span>Mon profil</span>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>

                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="users-profile.php">
                                        <i class="bi bi-gear"></i>
                                        <span>Paramètres du compte</span>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>

                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                        <i class="bi bi-question-circle"></i>
                                        <span>A propos de moi</span>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>

                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <i class="bi bi-box-arrow-right"></i>
                                        <span>Se déconnecter</span>
                                    </a>
                                </li>

                            </ul><!-- End Profile Dropdown Items -->
                        </li><!-- End Profile Nav -->

                    </ul>
                </nav><!-- End Icons Navigation -->

            </div>


        </header><!-- End Header -->

        <!-- ======= Sidebar ======= -->
        <aside id="sidebar" class="sidebar mt-4">

            <ul class="sidebar-nav" id="sidebar-nav">

                <li class="nav-item ">
                    <a class="nav-link collapsed " href="../index.php">
                        <i class="bi bi-bank2"></i>
                        <span>Acceuil</span>
                    </a>
                </li><!-- End Dashboard Nav -->

                <li class="nav-item ">
                    <a class="nav-link collapsed" href="réalisations.php">
                        <i class="bi bi-grid"></i>
                        <span>Mes réalisations</span>
                    </a>
                </li><!-- End Profile Page Nav -->

                <li class="nav-item">
                    <a class="nav-link collapsed" href="demandes.php">
                        <i class="bi bi-clipboard-plus"></i>
                        <span>Mes demandes</span>
                    </a>
                </li><!-- End Profile Page Nav -->

                <li class="nav-item">
                    <a class="nav-link collapsed" href="messages.php">
                        <i class="bi bi-chat-left-text"></i>
                        <span>Messages</span>
                    </a>
                </li><!-- End Profile Page Nav -->

                <li class="nav-item">
                    <a class="nav-link collapsed" href="notifications.php">
                        <i class="bi bi-bell"></i>
                        <span>Notifications</span>
                    </a>
                </li><!-- End Profile Page Nav -->

                <li class="nav-item">
                    <a class="nav-link collapsed" href="users-profile.php">
                        <i class="bi bi-person"></i>
                        <span>Profile</span>
                    </a>
                </li><!-- End Profile Page Nav -->

                <li class="nav-item" onclick="logOut()">
                    <a class="nav-link collapsed">
                        <i class="bi bi-box-arrow-in-right"></i>
                        <span>Déconnexion</span>
                    </a>
                </li><!-- End Login Page Nav -->
            </ul>

        </aside><!-- End Sidebar-->

        <main id="main" class="main">

            <section class="section section-bg px-4 pt-4">
                <div class="guide px-2 bg-white">
                    <div class="commentaire-title p-3 text-center">
                        <img src="img/logo-presta.png" width="38" alt=""> <span class="h6">Devenir prestataire</span>
                    </div>
                    <form class="row g-3 pb-3" action="../authentification/backRegister/devenir.php" method="POST"
                        enctype="multipart/form-data">
                        <div class="p-3">
                            <small class="small">Pour devenir prestataires et avoir de nouveaux clients, il vous suffit
                                de complèter
                                toutes les conditions réquises et faire valider votre identité par Presta.
                                <strong><a href="" style="text-decoration: underline #2eca6a ;">Plus
                                        d'informations</a></strong>
                            </small><br><br>
                            <h6><strong>Conditions réquises</strong> </h6>
                            <div class="row mt-4 mx-2" id="maProfession">
                                <label for="profession" class="form-label col-2 d-none d-lg-block"><b
                                        style="color: rgba(0, 0, 0, 0.558) ;">Profession </b></label>

                                <div class="col-lg-10">
                                    <select name="profession" id="profession" name="profession" class="form-select ">
                                        <option value="" selected>Spécifier votre professsion</option>
                                        <option value="Agriculteurs">Agriculteurs</option>
                                        <option value="Jardiniers">Jardiniers</option>
                                        <option value="Cuisiniers">Cuisiniers</option>
                                    </select>
                                </div>

                            </div>
                            <div class="row mt-3 mx-2 ">
                                <label for="typepiece" class="form-label col-2  d-none d-lg-block"><b
                                        style="color: rgba(0, 0, 0, 0.558) ;">Type de pièce </b></label>
                                <div class="col-lg-10">
                                    <select class="form-select " name="typepiece" id="typepiece">
                                        <option value="">Pièce d'Identité</option>
                                        <option value="CNI">Carte d'identité National</option>
                                        <option value="passeport">Passeport</option>
                                        <option value="biometrique">Carte Biométrique</option>
                                        <option value="cip">Certificat d'Identité Personnelle (CIP)</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mt-3 mx-2 ">
                                <label for="piece" class="form-label col-2  d-none d-lg-block"><b
                                        style="color: rgba(0, 0, 0, 0.558) ;">Image de la piece </b></label>
                                <div class="col-lg-10">
                                    <input type="file" name="piece" class="form-control" id="piece">
                                </div>

                            </div>

                        </div>
                        <div>
                            <div class="text-center">
                                <button class="btn btn-success w-50" style="background-color: #2eca6a; color: white;"
                                    type="submit">Soumettre</button>
                            </div>

                        </div>
                    </form>
                </div>

            </section>
            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                    class="bi bi-arrow-up-short"></i></a>
        </main>
        <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <!-- Template Main JS File -->
        <script src="js/main.js"></script>

        <script src="index.js"></script>
    </body>

</html>