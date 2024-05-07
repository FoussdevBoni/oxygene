<?php

    require '../authentification/backRegister/dbConnexion.php';
    session_start() ;


    if (isset($_SESSION['user_id'])) {
        # code...
    }else {
        header('Location:../authentification/pages-login.php');
    }
    
    $id = $_SESSION['user_id'];
    

    if ($_SERVER['REQUEST_METHOD'] === 'POST'){

        $about = securite($_POST['about']) ;
        $nom = securite($_POST['nom']) ;
        $prenom = securite($_POST['prenom']) ;
        $depart = securite($_POST['first-list']) ;
        $commune = securite($_POST['second-list']) ;
        $arrondissement = securite($_POST['third-list']) ;

        $contact = securite($_POST['phone']) ;

        $update = $pdo->prepare("UPDATE utilisateurs SET  nom = :nom,prenom = :prenom , contact = :phone , departement = :departement, commune = :commune, arrondissement = :arrondissement, biographie = :biographie WHERE id_personne = $id");
        $update->bindParam(':nom', $nom);
        $update->bindParam(':prenom', $prenom);
        $update->bindParam(':phone', $contact);
        $update->bindParam(':departement', $depart);
        $update->bindParam(':commune', $commune);
        $update->bindParam(':arrondissement', $arrondissement);
        $update->bindParam(':biographie', $about);
        $update->execute();

        $_SESSION['nom'] = $nom;
        $_SESSION['prenom'] = $prenom;
        $_SESSION['contact'] = $contact;
        $_SESSION['departement'] = $depart;
        $_SESSION['commune'] = $commune;
        $_SESSION['arrondissement'] = $arrondissement;
        $_SESSION['biographie'] = $about;
        
    }

    $select = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $id ");
    $select->execute();

    $data = $select->fetch();
                
    $is_presta = $data['is_presta'];

    if ($is_presta == 1) {
        $selection = $pdo->prepare("SELECT * FROM prestataire WHERE id_personne = $id");
        $selection->execute();
        $donne = $selection->fetch();
        $_SESSION['id_prestataire'] =  $donne['id_prestataire'];
        $_SESSION['id_metier'] =  $donne['id_metier'];
        $idmetier= $_SESSION['id_metier'];

        $check = $pdo->prepare("SELECT * FROM metiers WHERE id_metier = $idmetier");
        $check->execute();
        $met = $check->fetch();
        $_SESSION['nom_metier'] =  $met['nom_metier'];
    }
    
?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">

        <title>Mon Profil</title>
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
              <!-- Vendor CSS Files -->
              <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
              <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


        <!-- Template Main CSS File -->
        <link href="../assets/css/style.css" rel="stylesheet">
        <link href="../assets/css/categorie.css" rel="stylesheet">
        <link href="css/profil.css" rel="stylesheet">

        <link href="../assets/css/realisation.css" rel="stylesheet">

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

            <section class="section section-bg mx-5">
                    <!-- ======= Intro Single ======= -->
                <div class="intro-single">
                    <div class="container">
                        <div class="row">
                        <div class="col-10">
                            <div class="title-single-box">
                            <h1 class="title-single">
                            Profil
                            </h1>
                            </div>
                        </div>
                        <div class="col-2">
                            <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                                    <a class="nav-link nav-icon mx-2" href="#" data-bs-toggle="dropdown">
                                        <i class="bi bi-search" style="color: #2eca6a;"></i>
                                </a><!-- End Messages Icon -->
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages px-2" >
                                            <form class="form-inline " method="GET" action="../recherche.php">
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

            <section class="section profile">
                <div class="row">
                    <div class="col-xl-4  mt-2">

                        <div class="card">
                            <div class="card-body profile-card text-center pt-4 d-flex flex-column align-items-center">

                                <img src="<?php echo $_SESSION['profil'] ?>" alt="Profil" class="rounded-circle">
                                <h2><?php echo strtoupper($_SESSION['nom']). ' ' . $_SESSION['prenom'] ?></h2>
                                <h5><?php 
                                if ($is_presta==1) {
                                    # Vérifier si l'utilisateur est un prestataire et afficher sa profession
                                      echo $_SESSION['nom_metier'];
                                }
                                 ?></h5>
                            </div>
                        </div>
                        <?php 
                                if ($is_presta ==1) {
                                    # Vérifier si l'utilisateur est un prestataire et afficher sa profession
                                      echo '<div class="guide mt-4 bg-white aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                      <div class="commentaire-title p-3 text-center">
                                          <h7 class="">Statistiques prestataire</h7>
                                      </div>
                                      <div class=" row justify-content-between p-3">
                                          <small>
                                              <div>
                                                  <i class="bi bi-briefcase-fill px-2"></i> Service de '. $_SESSION['nom_metier'].'
                                              </div>
                                              <div class="mt-1">
                                                  <span> <i class="bi bi-chat-left-text px-2"></i>Disponible sur
                                                      PrestaBénin</span>
                                              </div>
                                              <div class="mt-1 row justify-content-between">
                                                  <span class="col-10"><i class="bi bi-reply-all-fill px-2"></i>Nombre de
                                                      réalisation</span>
                                                  <span class="text-end col-2"><small><strong>214</strong></small> </span>
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
                                                  <span class="text-end col-4"><small><strong>Mars 2023</strong></small> </span>
                                              </div>
                                          </small>
                                      </div>
                                  </div>';
                                }
                        ?>

                    </div>
                    
                    <div class="col-xl-8 mt-2">

                        <div class="card px-4">
                            <div class="card-body pt-3">
                                <!-- Bordered Tabs -->
                                <ul class="nav nav-tabs nav-tabs-bordered">

                                    <li class="nav-item">
                                        <button class="nav-link active" data-bs-toggle="tab"
                                            data-bs-target="#profile-overview">Apperçu</button>
                                    </li>

                                    <li class="nav-item">
                                        <button class="nav-link" data-bs-toggle="tab"
                                            data-bs-target="#profile-edit">Mettre à jour </button>
                                    </li>

                                    <li class="nav-item">
                                        <button class="nav-link" data-bs-toggle="tab"
                                            data-bs-target="#profile-settings">Paramètres</button>
                                    </li>

                                    <li class="nav-item">
                                        <button class="nav-link" data-bs-toggle="tab"
                                            data-bs-target="#profile-change-password">Sécurité</button>
                                    </li>

                                </ul>
                                <div class="tab-content pt-2">

                                    <div class="tab-pane fade show active profile-overview" id="profile-overview">
                                        <h5 class="card-title">Biographie</h5>
                                        <p class="small fst-italic"><?php echo $_SESSION['biographie']; ?></p>
                                        <hr>
                                        <h5 class="card-title">Détails du profil</h5>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label ">Nom</div>
                                            <div class="col-lg-9 col-md-8"><?php 
                                            echo strtoupper($_SESSION['nom']); ?></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label ">Prénoms</div>
                                            <div class="col-lg-9 col-md-8"><?php echo $_SESSION['prenom']; ?></div>
                                        </div>
                                        
                                        <?php 

                                        # Vérifier si l'utilisateur est un prestataire et afficher sa profession
                                        if ($is_presta == 1) {
                                            echo '<div class="row">
                                            <div class="col-lg-3 col-md-4 label">Fonction</div>
                                            <div class="col-lg-9 col-md-8">'.''.$_SESSION['nom_metier'] .'</div>
                                            </div>';
                                        }?>
                                        
                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Adresse</div>
                                            <div class="col-lg-9 col-md-8">
                                                <?php echo $_SESSION['departement'] . ', ' . $_SESSION['commune'] . ', ' . $_SESSION['arrondissement']; ?></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Téléphone</div>
                                            <div class="col-lg-9 col-md-8"> +229 <?php echo $_SESSION['contact']; ?></div>
                                        </div>

                                    </div>

                                    <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

                                        <!-- Profile Edit Form -->
                                        <form action="" method="post">
                                            <div class="row mb-3">
                                                <label for="profil" class="col-md-4 col-lg-3 col-form-label">Modifier
                                                    de profil</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <div class="pt-2">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="nom" class="col-md-4 col-lg-3 col-form-label">Nom</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="nom" type="text" class="form-control" id="nom"
                                                        value="<?php echo strtoupper($_SESSION['nom'])?>">
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="prenom"
                                                    class="col-md-4 col-lg-3 col-form-label">Prénoms</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="prenom" type="text" class="form-control" id="_SESSION['prenom']"
                                                        value="<?php echo $_SESSION['prenom']; ?>">
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="about"
                                                    class="col-md-4 col-lg-3 col-form-label">Biographie</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <textarea name="about" class="form-control" id="about"
                                                        style="height: 100px"><?php echo $_SESSION['biographie']; ?></textarea>
                                                </div>
                                            </div>
                     
                                            <div class="row mb-3">
                                                <label for="departement"
                                                    class="col-md-4 col-lg-3 col-form-label">Département</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <select class="form-select" name="first-list" id="first-list"
                                                        required>
                                                        <option value="<?php echo strtoupper($_SESSION['departement']); ?>">
                                                            <?php echo strtoupper($_SESSION['departement']); ?></option>
                                                       
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="departement"
                                                    class="col-md-4 col-lg-3 col-form-label">Commune</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <select class="form-select" name="second-list" id="second-list"
                                                        required>
                                                        <option value="<?php echo strtoupper($_SESSION['commune'])?>">
                                                            <?php echo strtoupper($_SESSION['commune'])?></option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="departement"
                                                    class="col-md-4 col-lg-3 col-form-label">Arrondissement</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <select class="form-select" name="third-list" id="third-list">
                                                        <option value="<?php echo strtoupper($_SESSION['arrondissement'])?>">
                                                            <?php echo strtoupper($_SESSION['arrondissement'])?></option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="Phone"
                                                    class="col-md-4 col-lg-3 col-form-label">Téléphone</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="phone" type="text" class="form-control" id="phone"
                                                        value="<?php echo $_SESSION['contact']; ?>">
                                                </div>
                                            </div>

                                            <div class="text-end">
                                                <button type="submit" class="btn btn-secondary">
                                                    Mettre à jour
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="tab-pane fade pt-3" id="profile-settings">

                                        <!-- Settings Form -->
                                        <form>

                                            <div class="row mb-3">
                                                <label for="fullName"
                                                    class="col-md-4 col-lg-3 col-form-label"><strong>Notifications</strong>
                                                </label>
                                                <div class="col-md-8 col-lg-9">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="changesMade"
                                                            checked>
                                                        <label class="form-check-label" for="changesMade">
                                                            M'avertir quand il y a de nouvelles réalisations des
                                                            prestataires de même Profession que moi
                                                        </label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox" id="newProducts"
                                                            checked>
                                                        <label class="form-check-label" for="newProducts">
                                                            Réactions sur mes réalisations
                                                        </label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox" id="proOffers">
                                                        <label class="form-check-label" for="proOffers">
                                                            Être informer des rélalisations des prestataires de même
                                                            localité que moi
                                                        </label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="securityNotify" checked disabled>
                                                        <label class="form-check-label" for="securityNotify">
                                                            Alerte de securité
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="text-center">
                                                <button type="submit" class="btn btn-secondary">Enregistrer les
                                                    changements</button>
                                            </div>

                                        </form><!-- End settings Form -->

                                    </div>

                                    <div class="tab-pane fade pt-3" id="profile-change-password">
                                        <!-- Change Password Form -->
                                        <form>
                                            <h5 class="text-center mb-3">Modifier votre mot de passe</h5>

                                            <div class="row mb-3">
                                                <label for="currentPassword"
                                                    class="col-md-4 col-lg-3 col-form-label"><strong>Mot de passe
                                                        actuel</strong> </label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="password" type="password" class="form-control"
                                                        id="currentPassword">
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="newPassword"
                                                    class="col-md-4 col-lg-3 col-form-label"><strong>Nouveau mot de
                                                        passe</strong> </label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="newpassword" type="password" class="form-control"
                                                        id="newPassword">
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="renewPassword"
                                                    class="col-md-4 col-lg-3 col-form-label"><strong>Confirmer le
                                                        nouveau mot de passe</strong></label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="renewpassword" type="password" class="form-control"
                                                        id="renewPassword">
                                                </div>
                                            </div>

                                            <div class="text-center">
                                                <button type="submit" class="btn btn-secondary">Changer mot de
                                                    passe</button>
                                            </div>
                                        </form><!-- End Change Password Form -->

                                    </div>

                                </div><!-- End Bordered Tabs -->

                            </div>
                        </div>

                    </div>
            </section>

            </section>

        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>

                <!-- Vendor JS Files -->
        <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                

        <!-- Template Main JS File -->
        <script src="../authentification/js/register.js"></script>
        <script src="../authentification/js/adresse.js"></script>

    </body>

</html>