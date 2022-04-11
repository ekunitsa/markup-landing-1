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

// global js
import 'jquery-mask-plugin'

// js for many places
$('.js-phoneMask').mask('+7 (000) 000-00-00');