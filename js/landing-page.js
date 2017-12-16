(function($) {
  "use strict"; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })


})(jQuery); // End of use strict

  document.getElementById("findField")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          document.getElementById("searchbtn").click();
      }
  });

function FindNext () {
      var str = document.getElementById ("findField").value;
      if (str == "") {
          alert ("Please enter some text to search!");
          return;
      }

      var supported = false;
      var found = false;
      if (window.find) {        // Firefox, Google Chrome, Safari
          supported = true;
              // if some content is selected, the start position of the search
              // will be the end position of the selection
          found = window.find (str);
      }
      else {
          if (document.selection && document.selection.createRange) { // Internet Explorer, Opera before version 10.5
              var textRange = document.selection.createRange ();
              if (textRange.findText) {   // Internet Explorer
                  supported = true;
                      // if some content is selected, the start position of the search
                      // will be the position after the start position of the selection
                  if (textRange.text.length > 0) {
                      textRange.collapse (true);
                      textRange.move ("character", 1);
                  }

                  found = textRange.findText (str);
                  if (found) {
                      textRange.select ();
                  }
              }
          }
      }

      if (supported) {
          if (!found) {
              alert ("The following text was not found:\n" + str);
          }
      }
      else {
          alert ("Your browser does not support this example!");
      }
  }
