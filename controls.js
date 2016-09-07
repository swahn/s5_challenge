$("#user-input").keydown(function(event) {
     // Check for return key
     if(event.which == 13) {
        event.preventDefault();
       
        var input_value = $("#user-input").val();
        var command_prompt = '<span class="prior-prompt">Sensory_5@Coding-Challenge: ~ $ </span>';
        var prefix = command_prompt + input_value; 
        var trimmed_value = jQuery.trim($(input_value));

      //TODO: Data storage/retrieval
      // Ran out of time on this one.
      /*
        // Command pattern: save | string
        var submission = $("#user-input").val();
        var analyze = submission.split(" | ");
        var save = analyze[0];
        var data = analyze[1];

        // Save data
        if(trimmed_value.length > 0) {
            if(analyze[0] == "save" && input_value = save + " | " + data) {
                // Check browser compatibility
                if (typeof(Storage) !== "undefined") {

                    sessionStorage.setItem("save", data);
                    $("#output").append(prefix + '<p class="output">Data saved.</p>');

                } else {      
                    $("#output").append(prefix + '<p class="output">Sorry. Your browser does not support Web Storage.</p>');
                }
            }
        } 
      */

 
        // Check for actual value
        if(trimmed_value.length > 0) {
            switch(input_value) {
                case 'clear':
                    $("#output").empty();
                break;
                case 'close':
                    $("#output").append(prefix + '<p class="output">Sidebar closed.</p>');
                    $("body").removeClass("menu-open");
                break;
                case 'detach':
                    $("#output").append(prefix + '<div class="output"><p>Disengaging menu&hellip;</p><p class="alert">Menu <i>draggable</i>.</p></div>');
                    $("#navigation").css("border", "1px solid white");
                    var $drag = null;
                    $(document.body).mousemove(function(e) {
                        if($drag) {
                            $drag.offset({
                                top: e.pageY,
                                left: e.pageX
                            });
                        }
                    });

                    $("#navigation").mousedown(function(e) {
                        $drag = $(e.target);
                    });

                    $("#navigation").mouseup(function(e) {
                        $drag = null;
                    });
           
                break;
                case 'help':
                    $("#output").append(prefix + '<br><div class="output"><p>The following commands are defined internally:</p><br><p>clear \t Clear the terminal screen.</p><p>close \t Close sidebar.</p><p>detach \t Disengage menu.</p><p>help \t List available commands.</p><p>hm \t Hide menu.</p><p>lb \t Open lightbox.</p><p>ls \t List directory contents.</p><p>open \t Open sidebar.</p><p>sm \t Show menu.</p></div>');
                break;
                case 'hm':
                    $("#output").append(prefix + '<p class="output">Menu hidden.</p>');
                    $("#navigation").hide();
                break;
                case 'lb':
                    $("#output").append(prefix + '<div class="output"><p>Opening lightbox&hellip;</p><p class="alert">Press <i>esc</i> to close.</p></div>');
                    $("#lightbox").show("slow");
                break;
              //TODO: Waiting on save logic
              /*  
                case 'load':
                    $("#output").append(prefix + '<p class="output">Saved data:</p><br>' + data);
                break;
              */
                case 'ls':
                    $("#output").append(prefix + '<p class="output">menu.sh &nbsp; lbox.sh &nbsp; sidebar.sh</p>');
                break;
                case 'open':
                    $("#output").append(prefix + '<p class="output">Sidebar open.</p>');
                    $("body").addClass("menu-open");
                break;
                case 'sm':
                    $("#output").append(prefix + '<p class="output">Menu revealed.</p>');
                    $("#navigation").show();
                break;
                default:
                    $("#output").append(prefix + '<br><p class="output">Command not found. For a list of commands type <i>help</i>.</p>');
                break;
            }            
        } 
          
      //TODO: Carriage return when no input value
      /*
        else if(trimmed_value.length == 0) {
            $("#output").append(prefix);
        }
      */
        

        // Clear input field
        $("#user-input").val("");
    }


    // Close lightbox
    if(event.which == 27) {
        $("#lightbox").hide("slow");
    }

});


// Regain field focus
$(document).keyup(function(e){
    if(e.which == 13 && $(document.activeElement).not("#user-input")) {
        $("#user-input").focus();
    }
})



