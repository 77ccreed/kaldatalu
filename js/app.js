// A custom script is used to activate tooltips:

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  }
});

// Hide btn-up on top
var offsetAmount = 500;
$(document).scroll(function () {
  if ($(document).scrollTop() >= offsetAmount) {
    $('.scroll-hide').removeClass("d-none");
  } else {
    $('.scroll-hide').addClass("d-none");
  }
});