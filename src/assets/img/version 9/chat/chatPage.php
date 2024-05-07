<?php
    require '../authentification/backRegister/dbConnexion.php';
    session_start() ;

    
    if (isset($_SESSION['user_id'])) {
        # code...
        }else {
            header('Location:../authentification/pages-login.php');
    }

	$id = $_SESSION['user_id'];

	//verifier que l'id du destinataire est passé en paramètre
	if (isset($_GET['id']) AND !empty($_GET['id']) AND $_GET['id'] != $id ) {
		$getid = $_GET['id'];
		$recupUser = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = '$getid'");
		$recupUser->execute();
        $data = $recupUser->fetch();
		
		if (!empty($data) ) {
				if (isset($_POST['envoyer'])) {

					$message = htmlspecialchars($_POST['message']);

					if (!empty($message)) {
						$date=date('Y/m/d');
						$heure=date("H:i:s");
					}
					//inserer les données dans la base
					$insertMessage = $pdo->prepare('INSERT INTO messages(message_envoye, id_destinateur , id_destinataire, date_message , heure_message)            
					VALUES(:message_envoye, :id_destinateur , :id_destinataire, :date_message , :heure_message)');
					
					$insertMessage->bindParam(':message_envoye', $message);
					$insertMessage->bindParam(':id_destinateur', $id);
					$insertMessage->bindParam(':id_destinataire', $getid);
					$insertMessage->bindParam(':date_message', $date);
					$insertMessage->bindParam(':heure_message', $heure);
					$insertMessage->execute();
			}
		}else{
			echo "Aucun destinataire trouvé...";

		}
		
	}else{
		echo "Aucun identifiant trouvé...";
	}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Discussion</title>
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
  <link href="../assets/css/style.css" rel="stylesheet">
  <link href="../assets/css/metier.css" rel="stylesheet">
  <link href="../assets/css/realisation.css" rel="stylesheet">
  <link href="chatPage.css" rel="stylesheet">


  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page de discussion</title>
    <link rel="stylesheet" href="chatPage.css">
  </head>
  <div class="guide ok aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
    <div class="commentaire-title px-5 py-2">
      <div class="mt-1 row justify-content-between">
        <span class="row col-9"><a href="../mon_compte/messages.php">
			<div class="col-auto" >
				<i class=" text-white bi bi-arrow-left pl-5 mx-3"></i></a>  
				<img width="40" src="../mon_compte/<?php echo $data['profil']; ?>" alt=""
				class="rounded-circle">
			</div>
			<div class= "col mt-1">
				<strong >
				<?php echo ucfirst(strtolower($data['prenom'])).' '.strtoupper($data['nom']) ?></strong>
			</div>

		
		 </span>
        <span class="text-end col-2 "><i class="bi bi-telephone-fill pl-5"></i> <i class="bi bi-gear-fill pl-5"></i>
        </span>
      </div>
    </div>
    <div class="chat-inbox mx-lg-5" id="chat-inbox">
      <div class="content px-1 pb-4" id="content">
	  		<?php 
				    $selectMessage = $pdo->prepare("SELECT * FROM messages WHERE ( id_destinateur = '$id' AND id_destinataire = '$getid') OR  ( id_destinataire = '$id' AND id_destinateur = '$getid')");
					$selectMessage->execute(); 

					while ($data1 = $selectMessage->fetch()) {

						if ($data1['id_destinateur'] == $id) {
							
							echo '<div class="row justify-content-end mt-2 message-send">
							<div class="col-auto p-2 px-3 mx-3 ">'.$data1['message_envoye'].'
							</div>
						</div>';
							
						}elseif ($data1['id_destinateur'] == $getid) {
							echo '<div class="row mt-2 message-receive">
							<div class="col-auto p-2 px-3 mx-3 ">'.$data1['message_envoye'].'
							</div>
							</div>';
						}	
					}
			 ?>
		
	  </div>
    </div>
	<script>
		var div = document.getElementById("content");
		div.scrollTop = div.scrollHeight;

	</script>


	<div class="footer mx-md-5 row">
		<form action="" method="POST">
			<div class="input-group">
				<input type="text" class=" col-8 form-control" name="message" id="message" placeholder="Entrer votre message ici" id="msgInput">
				<div class = "input-group-append">
					<button id="envoyer" name="envoyer" type="submit" class="btn p-2 px-3 " style="background-color: #2eca6a;"><i class="bi bi-telegram text-white h4"></i></button>
				</div>
			</div>
			
		</form>
	</div>
  </div>

  <!-- Vendor JS Files -->
  <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


  </body>

</html>