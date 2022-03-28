import 'magnific-popup'

$(document).ready(function() {
  $('.js-modal').magnificPopup({
    callbacks: {
      open: function () {
        if(!window.matchMedia("(pointer: coarse)").matches && window.innerWidth >= 768) {
          $('body > header').css('padding-right', 15);
        }
      },
      close: function () {
        $('body > header').css('padding-right', 0);
      }
    }
  });
});