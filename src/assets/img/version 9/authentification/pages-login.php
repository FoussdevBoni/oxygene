<?php

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    require 'backRegister/dbConnexion.php';

    $contact = securite($_POST['contactLog']);

    $password = $_POST['password'];

    if (empty($contact)) {
        $error_contact = 'Veuillez saisir votre numéro de téléphone.';
    }
    if (empty($password)) {
        $error_password = 'Veuillez saisir votre mot de passe correct.';
    } else {
        // Vérification de la correspondance du contact
        $stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE contact = :contactLog");
        $stmt->execute([':contactLog' => $contact]);
        $user = $stmt->fetch();

        if ($user && password_verify($password, $user['mp'])) {
        
            $_SESSION['user_id'] = $user['id_personne'];
            $id = $_SESSION['user_id'];
            
            $select = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $id ");
            $select->execute();
        
            while ($data = $select->fetch()) {
                        
                $_SESSION['nom'] = $data['nom'];
                $_SESSION['prenom'] = $data['prenom'];
                $_SESSION['departement'] = $data['departement'];
                $_SESSION['commune'] = $data['commune'];
                $_SESSION['arrondissement'] = $data['arrondissement'];
                $_SESSION['contact'] = $data['contact'];
                $_SESSION['profil'] = $data['profil'];
                $_SESSION['biographie'] = $data['biographie'];
        
            }
           
            header("Location: ../mon_compte/users-profile.php");
            exit();
        } else {
            $error_message = 'Contact ou mot de passe incorrect !!';
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">

        <title>login</title>
        <meta content="" name="description">
        <meta content="" name="keywords">

        <!-- Favicons -->
        <link href="assets/img/logo.png" rel="icon">
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

        <!-- Google Fonts -->
        <link href="https://fonts.gstatic.com" rel="preconnect">
        <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet">
        
          <!-- Vendor CSS Files -->
        <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">



        <!-- Template Main CSS File -->
        <link href="css/style.css" rel="stylesheet">

    </head>

    <body>

        <main>
            <div class="container">

                <section
                    class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                <div class="d-flex justify-content-center py-4">
                                    <a href="../index.php" class="logo d-flex align-items-center w-auto">
                                        <img src="assets/img/logo.png" alt="">
                                        <a class="d-none d-lg-block"
                                            style=" color:darkgreen;font-size: 2rem; font-weight: 600;"
                                            href="index.php">PRESTA
                                    </a>
                                </div><!-- End Logo -->

                                <div class="card mb-3">

                                    <div class="card-body">

                                        <div class="pt-4 pb-2">
                                            <h5 class="card-title text-center pb-0 fs-4">Se connecter</h5>
                                            <p class="text-center small">Entrez vos informations pour vous connecter</p>
                                        </div>

                                        <?php if (isset($error_message)) { ?>
                                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                            <i class="bi bi-exclamation-octagon me-1"></i>
                                            <small><?php echo $error_message; ?></small>
                                        </div>
                                        <?php } ?>

                                        <form class="row g-3" action="" method="post">

                                            <div class="col-12">
                                                <label for="phone" class="form-label">Numéro de Téléphone</label>
                                                <div class="input-group has-validation">
                                                    <input type="text" name="contactLog" class="form-control"
                                                        id="phone">
                                                </div>
                                                <p class="text-danger">
                                                    <?php if (isset($error_contact)) { ?>
                                                    <small><i class="bi bi-exclamation-octagon-fill"></i>
                                                        <?php echo $error_contact; ?></small>
                                                    <?php } ?>
                                                </p>
                                            </div>

                                            <div class="col-12">
                                                <label for="yourPassword" class="form-label">Mot de passe</label>
                                                <input type="password" name="password" class="form-control"
                                                    id="yourPassword">
                                                <p class="text-danger">
                                                    <?php if (isset($error_password)) { ?>
                                                    <small> <i class="bi bi-exclamation-octagon-fill"></i>
                                                        <?php echo $error_password; ?></small>
                                                    <?php } ?>
                                                </p>
                                            </div>

                                            <div class="col-12 mt-3">
                                                <div class="col-12 mt-2">
                                                    <button class="btn  w-100"
                                                        style="background-color: #2eca6a; color: white" type="submit">Se
                                                        connecter</button>
                                                </div>
                                                <div class="col-12 row mt-2">
                                                    <div class="col-6  mb-0"><a href="pages-register-last.html"
                                                            style="color: #2eca6a;">Créer un compte</a></div>
                                                    <div class="col-6  mb-0"> <a href="pages-set-password.php"
                                                            style="color: #2eca6a;">
                                                            Mot de passe oublié ?</div>
                                                </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </main><!-- End #main -->

        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>

        <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>



        <!-- Template Main JS File -->
        <script src="js/main.js"></script>
        <script src="auth.js"></script>
        <script src="js/adresse.js"></script>
    </body>

</html>