// only for develop
// need for twig watcher:
if (process.env.NODE_ENV == 'development') {
  require('../index.twig');
}

// scrips to prod
// global style file
import '../sass/style.sass'

// other scripts
//import './test/test'
