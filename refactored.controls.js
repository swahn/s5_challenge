
/**
 * Create 'command' object
 */
var command = new Object();
 
/**
 * clear - clear screen
 */
command.clear = function() { 
    output().innerHTML= ""; 
};

/**
 * close - close sidebar
 */ 
command.close = function() {
    output().innerHTML = output().innerHTML + prefix() + '<br><p class="output">Sidebar closed.</p>';

    document.body.classList.remove("menu-open");
};

/**
 * date - current date
 */ 
command.date = function() {
    var date = new Date();
    output().innerHTML = output().innerHTML + prefix() + '<div class="output">' + date.toDateString() + '</div>';
}

/**
 * detach - draggable menu
 */ 
command.detach = function() {
    output().innerHTML = output().innerHTML + prefix() + '<div class="output"><p>Disengaging menu&hellip;</p><p class="alert">Menu <i>draggable</i>.</p></div>',

    document.getElementById("navigation").style.border = "1px solid white";

    var drag = null;
    document.body.onmousemove = function(e) {
        if(drag) {
            drag.offset({
                top: e.pageY,
                left: e.pageX
                });
        }
    }

    document.getElementById("navigation").onmousedown = function(e) {
        // change this
        drag = $(e.target);
    }

    document.getElementById("navigation").onmouseup = function(e) {
        drag = null;
    }
};

/**
 * help - list commands
 */
command.help = '<div class="output"><p>The following commands are defined internally:</p><br><p>clear \t Clear the terminal screen.</p><p>close \t Close sidebar.</p><p>detach \t Disengage menu.</p><p>help \t List available commands.</p><p>hm \t Hide menu.</p><p>lb \t Open lightbox.</p><p>load \t Load saved string.</p><p>ls \t List directory contents.</p><p>open \t Open sidebar.</p><p>save | string \t Save a string.</p><p>sm \t Show menu.</p></div>';

/**
 * hm - hide menu
 */ 
command.hm = function() {
    output().innerHTML = output().innerHTML + prefix() + '<br><p class="output">Menu hidden.</p>';

    document.getElementById("navigation").style.display = "none";
};

/**
 * lb - show lightbox (w/o animation)
 */
command.lb = function() {
    output().innerHTML = output().innerHTML + prefix() + '<br><div class="output"><p>Opening lightbox&hellip;</p><p class="alert">Press <i>esc</i> to close.</p></div>';

    document.getElementById("lightbox").style.display = "block";
};

/**
 * load - load saved
 */
command.load = function() {
    var data = sessionStorage.getItem("data");

    output().innerHTML = output().innerHTML + prefix() + '<br><div class="output"><p>Saved data:</p>' + data + '</div>';
};

/**
 * ls - list dir
 */ 
command.ls = '<p class="output">menu.sh &nbsp; lbox.sh &nbsp; sidebar.sh</p>';

/**
 * open - open sidebar
 */ 
command.open = function() {
    output().innerHTML = output().innerHTML + prefix() + '<br><p class="output">Sidebar open.</p>';

    document.body.classList.add("menu-open");
};

/* TODO:Save command 

    // Command pattern: save | string
    var analyze = toSave.split(" | ");
    var cmd = analyze[0];
    var str = analyze[1];

// Save command
command.save = function() {

    sessionStorage.setItem("data", str);

    output().innerHTML = output().innerHTML + prefix() + '<br><p class="output">Data saved.</p>';    
};
*/

/**
 * sm - show menu
 */
command.sm = function() {
    output().innerHTML = output().innerHTML + prefix() + '<br><p class="output">Menu revealed.</p>';

    document.getElementById("navigation").style.display = "block";
};



// end object list //



/**
 * Reduces code
 */
function prefix() {
    var prefix = '<span class="prior-prompt">Sensory_5@Coding-Challenge: ~ $ </span>' + input();
    return prefix;
}

/**
 * Get user input
 */
function input() {
    var input = document.getElementById("user-input").value;
    return input;
}

/**
 * Get output <div>
 */
function output() {
    var output = document.getElementById("output");
    return output;
}

/**
 * Return command results
 */
function Control() {

    // Prepare input
    var value = input();

    // Check for input value
    if (value.trim().length > 0) {
          
        // Loop through command object
        for(var key in command) {

            // Match input with object name 
            if(key == value) {

                // Determine property type
                if(typeof command[value] === "function") {

                    var result = command[value]();
                    return result;

                } else {

                    var result = (output().innerHTML = output().innerHTML + prefix() + "<br>" + command[value]);
                    return result;
                }
            } 
        }

        // Command not found
        var cnf = output().innerHTML = output().innerHTML + prefix() + '<br><p class="output">Command not found. For a list of commands type <i>help</i>.</p>';
        return cnf;
    }

    // If enter with no input value return line break
    else if (value.trim().length == 0) {
      output().innerHTML = output().innerHTML + prefix() + "<br>";
    } 
}

/**
 * Process user submission
 */
document.getElementById("user-input").onkeydown = function(event) {

    // Check for Enter key
    if (event.which == 13) {
        event.preventDefault();
        Control();

        // Clear input field
        document.getElementById("user-input").value = "";
    } 

    // Escape from lightbox (w/o animation)
    if (event.which == 27) {
        document.getElementById("lightbox").style.display = "none";
    }
}

/**
 * Regain field focus
 */
document.onkeydown = function(event) {
    var active = document.activeElement;
    var target = document.getElementById("user-input");
    if (event.which == 13 && active != target) {
        event.preventDefault();
        target.focus();
    }
}

