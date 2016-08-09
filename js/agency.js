/*!
 * Agency v1.0.x (http://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/* Highlight the top nav as scrolling occurs 
$('body').scrollspy({
    target: '.navbar-fixed-top'
}) */

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});
//Code for back to top button
$(document).ready(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      //if you want to scroll to top button to remain in its position,remove the dollar sign else if you want it
      //to disappear, leave the dollar sign below
      $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function() {
    $('html, body').animate({scrollTop: 0}, 600);
    return false;
  });
}); 
