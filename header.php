<?php

$home = <<<HTML
    <meta name="description" content="Coding challenge for Sensory 5 Junior Full Stack Web Developer position.">

    <title>Sensory 5 | Coding Challenge | Home</title>

HTML;

$about = <<<HTML
    <meta name="description" content="A little about why I want to work at Sensory 5.">

    <title>Sensory 5 | Coding Challenge | About</title>

HTML;

$details = <<<HTML
    <meta name="description" content="Some details on how I approached the Coding challenge for Sensory 5 Junior Full Stack Web Developer position.">

    <title>Sensory 5 | Coding Challenge | Details</title>

HTML;

function metaData() {

    global $home, 
           $about, 
           $details;

    $arr = array(
            "index.php" => $home, 
            "about.php" => $about, 
            "details.php" => $details);

    $url = basename($_SERVER['PHP_SELF']);

    foreach($arr as $key => $value){
        if($url == $key) {
            echo $value;
        }
    }
}

?>
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Stephen Swahn">

<?php metaData(); ?>

    <link rel="shortcut icon" href="http://sensory5.com/wp-content/uploads/udf_foundry/images/favicon.png">
    <link rel="stylesheet" type="text/css" href="theme.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  </head>
  <body class="menu">
