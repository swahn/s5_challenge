<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Some details on how I approached the Coding challenge for Sensory 5 Junior Full Stack Web Developer position.">
    <meta name="author" content="Stephen Swahn">

    <title>Sensory 5 | Coding Challenge | Details</title>

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

      <!-- Draggable navigation -->
      <nav id="navigation">
        <a href="index.php">Home</a>
        <a href="about.php">About</a>
        <a href="details.php">Details</a>
      </nav>

      <!-- Details -->
      <div class="wrapper">
        <p class="print">How I built this project:</p>
        <p class="print">First I considered the design; colors,</p>
        <p class="print">shapes, and placement. Then I wrote the</p>
        <p class="print">HTML and stylized with CSS to make it look</p>
        <p class="print">how I imagined. Next, I work out how it</p>
        <p class="print">will function, and decide what framework</p>
        <p class="print">for which functionality. Some are better</p>
        <p class="print">than others depending on the objective.</p>
        <p class="print">However, for a small project like this,</p>
        <p class="print">I could use anything. It's been years</p>
        <p class="print">since I have used jQuery, and it was fun</p>
        <p class="print">to get reacquainted with it.</p>
      </div>

      <section class="content" id="content">
         <div id="output"></div>

        <!-- Command prompt -->
        <form autocomplete="off">
          <span class="prompt">Sensory_5@Coding-Challenge: ~ $</span>
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

