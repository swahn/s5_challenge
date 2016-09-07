<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Coding challenge for Sensory 5 Junior Full Stack Web Developer position.">
    <meta name="author" content="Stephen Swahn">

    <title>Sensory 5 | Coding Challenge | Home</title>

    <link rel="shortcut icon" href="http://sensory5.com/wp-content/uploads/udf_foundry/images/favicon.png">
    <link rel="stylesheet" type="text/css" href="theme.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  </head>
  <body class="menu">

    <!-- Sidebar -->
    <aside class="menu-side" >
      Sidebar
    </aside>

    
    <main id="main">

      <section class="content" id="content">

        <!-- Draggable menu -->
        <nav id="navigation">
          <a href="index.php">home</a>
          <a href="about.php">about</a>
          <a href="details.php">details</a>
        </nav>

        <div id="output"></div>

        <!-- Command prompt -->
        <form autocomplete="off">
          <span class="prompt">Sensory_5@Coding-Challenge: ~ $ </span>
          <div class="input-container">
            <span class="blinking-cursor"></span>
            <input type="text" id="user-input" autofocus>
          </div>
        </form>

        <!-- Lightbox  -->
        <div class="lightbox" id="lightbox">
          <img src="http://cdn.mspaintadventures.com/advimgs/ps/ps291.gif" alt="lightbox image">
        </div>

      </section>
    </main>


    <script src="controls.js"></script>
  </body>
</html>

