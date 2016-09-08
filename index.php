<?php include 'header.php'; ?>

    <!-- Sidebar -->
    <aside class="menu-side" >
      Sidebar
    </aside>

    
    <main id="main">

      <!-- Draggable menu -->
<?php include 'menu.php'; ?>

      <section class="content" id="content">

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

<?php include 'footer.php'; ?>
