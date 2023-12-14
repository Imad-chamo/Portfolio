<?php

$name = $_POST['name'];
$email = $_POST['email'];
$objet = $_POST['objet'];
$message = $_POST['message'];

$mailheader = "From: ".$name."<".$email.">\r\n";

$recipient  = "chamkhiimad5@gmail.com";
mail($recipient, $objet, $message, $mailheader)
or die("error");

echo '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <link rel="stylesheet" href="Contact.css">
    <title>Contact</title>
</head>
<body>
    <div class="banner">
        <section id="profile">
            <div class="section__text">
              <p><strong>
               Merci ! J\'ai bien reçu votre message. Je m\'engage à vous répondre dans les plus brefs délais. n\'hésitez pas à me contacter. À très bientôt !"</strong> </p>
             </div> 
             <div class="retour">
                <button><a href="index.html"> Retour</a> </button>      
             </div>   
        </section>
      </div>
</body>
</html>
';
?>