/*document.addEventListener('DOMContentLoaded', (event) => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then((registration) => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    }, (err) => {
      console.log('ServiceWorker registration failed: ', err)
    })
  }
});*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
var offsetAmount = 500;
$(document).scroll(function () {
  if ($(document).scrollTop() >= offsetAmount) {
    $('.scroll-hide').removeClass("d-none")
  } else {
    $('.scroll-hide').addClass("d-none")
  }
});
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
  })
})


