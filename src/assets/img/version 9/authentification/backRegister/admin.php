<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
    </head>

    <body>

        <button class="btn btn-primary collapsed" data-bs-toggle="collapse" data-bs-target="#newUser">
            <h4 class="card-title">Notification</h4>
        </button>

        <div class="mx-4 mt-3 collapse" id="newUser">
            <?php
            require 'dbConnexion.php';
    
            echo '<p>Nouvel utilisateur :</p>';
                $select = $pdo->prepare('SELECT * FROM prestataire ORDER BY id_personne DESC LIMIT 1');
                $select->execute() ;
    
                while ($data = $select->fetch()) {
                
                    $id = $data['id_personne'] ;
                    $nom = $data['nom'];
                    $prenom = $data['prenom'];
                    $typepiece = $data['typepiece'];
                    $piece = $data['piece_url'];
                
                }
            
                echo '<div>';
                    echo '<u>Prestataire n°</u> : ' .$id. '<br><br>' ;
                    echo '<u>Nom</u> : ' . $nom . '<br><br>';
                    echo '<u>Prénom</u> : ' . $prenom . '<br><br>';
                    echo '<u>Type de pièce</u> : ' . $typepiece . '<br><br>';
                    echo '<u>Pièce</u> : ' . '<a href="' . $piece . '">Télécharger</a> </br>';
                echo '</div> <br>';
            
            ?>

            <button class="btn btn-primary" onclick="approuver()">
                <h4 class="card-title">Approuver</h4>
            </button>

            <button class="btn btn-primary" id="deleteButton" data-id=$id>
                <h4 class="card-title">Rejeter</h4>
            </button>

            <script>
            function approuver() {
                alert('Inscription du compte approuvée avec succès');
            };

            document.getElementById('deleteButton').addEventListener('click', function() {
                var id = this.getAttribute('data-id');
                var post = new XMLHttpRequest();
                post.open('POST', 'rejeter.php', true);
                post.setRequestHeader('content-type', 'application/x--www-form-urlencoded');
                post.onreadystatechange = function() {
                    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                        alert('Suppression dans la base de données avec succès');
                    }
                };
                post.send('id=' + id);
            });
            </script>

        </div>

        <?php
        echo '<h3>Tous les prestataires inscrits</h3>';
            $selectAll = $pdo->prepare('SELECT * FROM prestataire');
            $selectAll->execute() ;

        echo '
            <table style="border-collapse:collapse;" border="2">
                <tr>
                    <th>N°</th>
                    <th>Nom</th>
                    <th>Prénoms</th>
                    <th>Contact</th>
                    <th>Profession</th>
                    <th>Résidence</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>';
                while ($data = $selectAll->fetch()) {
                    echo '<tr>';
                        echo '<td>'. $data['id_personne']. '</td>';
                        echo '<td>'. $data['nom']. '</td>';
                        echo '<td>'. $data['prenom']. '</td>';
                        echo '<td>'. $data['contact']. '</td>';
                        echo '<td>'. $data['metier']. '</td>';
                        echo '<td>'. $data['commune']. '</td>';

                        echo '<td><button class="btn btn-primary" id="deleteButton"   data-id=$id>
                            <h4 class="card-title">Bloquer</h4>
                        </button></td>';
                        echo '<td><button class="btn btn-primary" id="deblockButton" data-id=$id>
                            <h4 class="card-title">Prévenir</h4>
                        </button></td>';
                    echo '</tr>';
                }
            echo '</table>';
        ?>
        <script src="js/jquery-3.3.1.slim.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/fontawesome-all.min.js"></script>
    </body>

</html>