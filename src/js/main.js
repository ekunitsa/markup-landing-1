// only for develop
// need for twig watcher:
if (process.env.NODE_ENV == 'development') {
  require('../index.twig');
}

// scrips to prod
// global style file
import '../sass/style.sass'

// js
import '../components/stickMenu/stickMenu'
import '../components/modal/modal'
import '../components/toTop/toTop'
import '../components/header/header'
import '../components/mobileMenu/mobileMenu'
import '../components/reviews/reviews'
import '../components/connect/connect'

// global js
import 'jquery-mask-plugin'

// js for many places
$('.js-phoneMask').mask('+7 (000) 000-00-00');

$('.js-menuItem').on('click', function(e) {
  e.preventDefault();

  let padding = 20;
  let nativePadding = 0;
  let target = $('[data-scroll="'+$(this).attr('href').substring(1)+'"]')

  if(window.innerWidth <= 991 && window.innerWidth > 768) {
    padding = 50
    if (target.css('padding-top') === '0px') {
      nativePadding = 45
    }
  } else if (window.innerWidth >= 768) {
    padding = 80
    if (target.css('padding-top') === '0px') {
      nativePadding = 60
    }
  }

  $('html,body').animate({
    scrollTop: target.offset().top - padding - nativePadding
  }, 1000);
})