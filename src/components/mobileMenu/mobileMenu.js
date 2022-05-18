import { enableBodyScroll } from 'body-scroll-lock';

$(function(){
  const targetElement = document.querySelector('.lan-mobileMenu_list');

  function closeMenu() {
    $('.js-bodyShadow').fadeOut(200)
    $('.js-mobileMenu').removeClass('is-active')
    $('body').removeClass('is-mobileMenuActive')
    enableBodyScroll(targetElement)
  }

  $('.js-bodyShadow').on('click', function() {
    if ($('body').hasClass('is-mobileMenuActive')) {
      closeMenu();
    }
  });

  $('.js-mobileMenuClose').on('click', function() {
    closeMenu();
  })

  $('.js-menuItemMobile').on('click', function() {
    closeMenu();
  })
})