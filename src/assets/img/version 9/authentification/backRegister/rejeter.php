<?php 
    require 'dbConnexion.php';

$delete = $pdo->prepare('DELETE FROM prestataire ORDER BY id_personne DESC LIMIT 1');
$delete->execute();
?>.