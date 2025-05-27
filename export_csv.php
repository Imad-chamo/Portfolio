<?php
session_start();

// Vérifie si l'admin est connecté
if (!isset($_SESSION['admin_connecte'])) {
    header("Location: connexion.php");
    exit();
}

// Connexion à la base
$hote = 'localhost';
$base = 'portfolio_admin';
$utilisateur = 'root';
$mot_de_passe = 'root';

try {
    $connexion = new PDO("mysql:host=$hote;dbname=$base;charset=utf8", $utilisateur, $mot_de_passe);
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupère toutes les candidatures
    $requete = $connexion->query("SELECT * FROM candidatures");
    $candidatures = $requete->fetchAll(PDO::FETCH_ASSOC);

    // Prépare l’export CSV
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=candidatures.csv');

    $fichier = fopen('php://output', 'w');

    // Écrit l’en-tête
    fputcsv($fichier, ['Entreprise', 'Poste', 'Statut', 'Date', 'Remarques']);

    // Écrit les lignes
    foreach ($candidatures as $ligne) {
        fputcsv($fichier, [
            $ligne['nom_entreprise'],
            $ligne['poste'],
            $ligne['statut'],
            $ligne['date_candidature'],
            $ligne['remarques']
        ]);
    }

    fclose($fichier);
    exit();

} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>
