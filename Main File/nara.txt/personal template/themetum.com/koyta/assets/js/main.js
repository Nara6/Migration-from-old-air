/* ===================================================================
    
  Theme Name:  Koyta - Personal Portfolio HTML Template
  Author: themetum
  Description: Koyta is a personal portfolio html template.
  Version: 1.0
    
* ================================================================= */
(function($) {
    "use strict";

    $(document).on('ready', function() {


		/* ==================================================
            # Bootstrap Tooltip Scroll
         =============================================== */
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
			var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		});

		/* ==================================================
			# Smooth Scroll
		 =============================================== */
		
		$('a.smooth-menu').on('click', function(event) {
			var $anchor = $(this);
			var headerH = '85';
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
  
		/* ==================================================
			Preloader Init
		 ===============================================*/
		$(window).on('load', function() {
			// Animate loader off screen
			$(".se-pre-con").fadeOut("slow");
		});

		/* ==================================================
			# Scroll to top
		 =============================================== */
        //Get the button
        var mybutton = document.getElementById("scrtop");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
		//Active Class Function
		
    }); // end document ready function
})(jQuery); // End jQuery

