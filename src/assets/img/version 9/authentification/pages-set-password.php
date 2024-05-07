<?php

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    require 'backRegister/dbConnexion.php';

    $numero = securite($_POST['numero']);

    if (empty($numero)) {
        $error_message = 'Veuillez saisir votre numéro de téléphone.';
    } else {
      $verifie = $pdo->prepare("SELECT * FROM prestataire WHERE contact = :numero");
        $verifie->execute([':numero' => $numero]);
        $user = $verifie->fetch();
    }
}

?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">

        <title>set-password</title>
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
                                            href="index.php">PRESTA<span style="color: #2eca6a;"
                                                class="color-b">Bénin</span></a>
                                    </a>
                                </div><!-- End Logo -->

                                <div class="card mb-3">

                                    <div class="card-body">

                                        <div class="pt-4 pb-2">
                                            <h5 class="card-title text-center pb-0 fs-4">Modifier mot de passe</h5>
                                            <p class="text-center small">Un SMS vous sera envoyé pour confirmer votre
                                                modification</p>
                                        </div>

                                        <form class="row g-3 needs-validation" action="" method="post">

                                            <div class="col-12">
                                                <label for="numero" class="form-label">Numéro de téléphone</label>
                                                <input type="text" name="numero" class="form-control" id="numero"
                                                    required>
                                                <div class="invalid-feedback">Entrez votre adresse email !</div>
                                            </div>

                                            <div class="col-12 collapse" id="codeDiv">
                                                <label for="code" class="form-label">Code à 6 chiffres</label>
                                                <input type="number" name="code" class="form-control" id="code">
                                                <div class="invalid-feedback">Entrez votre code reçu par sms !</div>
                                            </div>

                                            <div class="col-12">
                                                <button class="btn btn-success w-100 collapsed"
                                                    style="background-color: #2eca6a; color: white;" type="submit"
                                                    data-bs-toggle="collapse" data-bs-target="#codeDiv">Suivant</button>
                                            </div>
                                            <div class="col-12">
                                                <div class="small mb-0">Réessayer le mot de passe ? <a
                                                        href="pages-login.php">Se connecter</a></div>
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

        <!-- Vendor JS Files -->
        <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <!-- Template Main JS File -->
        <script src="js/main.js"></script>

    </body>

</html>