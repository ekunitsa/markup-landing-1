import 'magnific-popup'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

$(document).ready(function() {
  const targetElement = document.querySelector(".lan-modal_wrapper");

  $('.js-modal').magnificPopup({
    //showCloseBtn: false,
    callbacks: {
      open: function () {
        if(!window.matchMedia("(pointer: coarse)").matches && window.innerWidth >= 768) {
          $('body > header').css('padding-right', 15);
          $('.js-stickMenu').css('padding-right', 15);
        }
        disableBodyScroll(targetElement, {
          reserveScrollBarGap: true,
        });
      },
      close: function () {
        $('body > header').css('padding-right', 0);
        $('.js-stickMenu').css('padding-right', 0);
        enableBodyScroll(targetElement);
      }
    }
  });
});