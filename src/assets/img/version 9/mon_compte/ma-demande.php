<?php 
  require '../authentification/backRegister/dbConnexion.php';
  session_start();
  if (isset($_SESSION['user_id'])) {
    # code...
  }else {
      header('Location:../authentification/pages-login.php');
  }
if (isset($_GET['id_demande']) && isset($_GET['id_personne'])) {

    $id_demande = $_GET['id_demande'];
    $id_personne = $_GET['id_personne'];
    $metier = $_GET['metier'];

    $selectDemande = $pdo->prepare("SELECT * FROM demande WHERE id_demande = '$id_demande'");
    $selectDemande->execute();
    $data1 = $selectDemande->fetch();


    $selectPersonne = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = '$id_personne'");
    $selectPersonne->execute();
    $data2 = $selectPersonne->fetch();

}
  
  ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Demande</title>
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
    <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="../assets/css/realisation.css" rel="stylesheet">
    <link href="../assets/css/style.css" rel="stylesheet">

</head>

<body>

    <main class="main">
        <div class="guide aos-init aos-animate pb-5" data-aos="fade-up" data-aos-delay="200">
            <div class="commentaire-title p-3 text-center">
                <a href="historique.php" class="text-white"><i class="bi bi-arrow-left pl-5 p-5"></i></a>
                <span class="h7">Détail de la demande</span>
            </div>
            <?php 
            if ($data1['statut_demande'] == 'EN ATTENTE' ) {
                $statut ='<span class="badge bg-warning">En attente</span>';
                $btn = '<div class="text-center mx-3 mt-3 px-lg-5">
                <button data-bs-toggle="modal" class="btn btn-b-n my-2 text-dark px-4 mx-4 shadow-sm p-2 align-middle"
                            data-bs-target="#Débloquer">ANNULER A LA DEMANDE</button>
                        <div class="modal fade border-danger" id="Débloquer" tabindex="-1">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-danger">Annuler la demande !!</h5>
                                        <span data-bs-dismiss="modal" class="right-boxed bi bi-x ml-5 croix"></span>
                                    </div>
                                    <div class="modal-body">
                                        <p class="text-start bg-white">Vous voulez vraiment annuler cette demander ?</p>
                                        <div class="text-end">
                                        <a href="" data-bs-dismiss="modal" class="btn btn-b-n text-dark px-4 mr-4">NON</a>
                                        <a href="repondre-demande.php?demande='.$id_demande.'&id='.$id_personne.'&motif=annule&metier='.$metier.'" class="btn btn-b-n text-dark border-danger px-4 ml-4">OUI</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                </div>';

            }else {
                $statut ='<span class="badge bg-danger">annulée</span>';
                $btn = '<div class="text-center mx-3 mt-3 px-lg-5">
                <button data-bs-toggle="modal" class="btn btn-b-n my-2 text-dark px-4 mx-4 shadow-sm p-2 align-middle"
                            data-bs-target="#Débloquer">RELANCER A LA DEMANDE</button>
                        <div class="modal fade border-danger" id="Débloquer" tabindex="-1">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-success">Relancer la demande !!</h5>
                                        <span data-bs-dismiss="modal" class="right-boxed bi bi-x ml-5 croix"></span>
                                    </div>
                                    <div class="modal-body">
                                        <p class="text-start bg-white">Vous relancer cette demander ?</p>
                                        <div class="text-end">
                                            <a href="" data-bs-dismiss="modal" class="border-danger btn btn-b-n text-dark px-4 mr-4">NON</a>
                                            <a href="repondre-demande.php?demande='.$id_demande.'&id='.$id_personne.'&motif=relance&metier='.$metier.'" class="btn btn-b-n text-dark px-4 ml-4">OUI</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                </div>';
                if ($data1['statut_demande'] == 'REGLEE') {
                    $statut ='<span class="badge bg-success">réglée</span>';
                }
            }

                echo'
                <div class="text-center mt-3">
                    <h6 class="text-center"><b> Demande '.$statut.' </b> </h6>
                </div>
                <div class="row mt-3 justify-content-center">
                    <div class="col-lg-6 mt-3">
                        <h6 class="text-center"><b>'.$metier.'</b> </h6>
                            <div class=" m-3">
                               <p>'.$data1['descriptio'].'</p>
                             </div>
    
                    </div>
                    <div class="col-lg-4">
                        <div class="m-3">
                            <div class="text-center">
                                <h6><b> Adresse </b></h6>
                            </div>
                            <div class=" row justify-content-between p-3">
                                <div class="mt-1 row justify-content-between">
                                    <span class="col-auto">Arrondissement</span>
                                    <span class="text-end col"><small><strong>'.$data1['arrondissement'].'</strong></small> </span>
                                </div>
                                <div class="mt-1 row justify-content-between">
                                    <span class="col-auto">Commune</span>
                                    <span class="text-end col"><small><strong>'.$data1['commune'].'</strong></small> </span>
                                </div>
                                <div class="mt-1 row justify-content-between">
                                    <span class="col-auto">Département</span>
                                    <span class="text-end col"><small><strong> '.$data1['departement'].'</strong></small></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>';
                echo $btn;

                if ($data1['id_recepteur'] != NULL ) {

                    $id = $data1['id_recepteur'];

                    $selection = $pdo->prepare("SELECT id_personne,id_metier FROM prestataire WHERE id_prestataire = $id");
                    $selection->execute();
                    $donne = $selection->fetch();

                    $idpersonne= $donne['id_personne'];
            
                    $check = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $idpersonne");
                    $check->execute();
                    $personne = $check->fetch();

                    echo '<hr class="mx-5">
                    <h6 class="text-center"><b> Prestataire relié à la demande </b> </h6>

                    <div class="text-center mt-3">
                    <a href=""><img width="90" src="'.$data2['profil'].'" alt="Profile"
                            class="rounded-circle"></a>
                    <h5><strong>'.strtoupper($personne['nom']).' '.ucfirst(strtolower($personne['prenom'])).'</strong> </h5>
                    
                    <a href="../profil_prestataire.php?personne='.$personne['id_personne'].'&metier='.$donne['id_metier'].'" class="btn btn-b-n text-dark px-4 mr-4 mt-4">VOIR LE PROFIL</a>
                    <a href="../chat/chatPage.php?id='.$personne['id_personne'].'" class="btn btn-b-n text-dark px-4 mr-4 mt-4">CONTACTER</a>

                    </div>
                    ';
                }
                
                

            ?>

           

        </div>
    </main>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="../assets/vendor/apexcharts/apexcharts.min.js"></script>
    <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../assets/vendor/chart.js/chart.min.js"></script>
    <script src="../assets/vendor/echarts/echarts.min.js"></script>
    <script src="../assets/vendor/quill/quill.min.js"></script>
    <script src="../assets/vendor/simple-datatables/simple-datatables.js"></script>
    <script src="../assets/vendor/tinymce/tinymce.min.js"></script>
    <script src="../assets/vendor/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="../mon_compte/js/main.js"></script>

</body>

</html>