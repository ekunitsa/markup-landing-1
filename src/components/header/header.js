import { disableBodyScroll } from 'body-scroll-lock';

$(function(){
  const targetElement = document.querySelector('.lan-mobileMenu_list');

  $('.js-burger').on('click', function() {
    $('.lan-base_shadow').fadeIn(200)
    $('.js-mobileMenu').addClass('is-active')
    $('body').addClass('is-mobileMenuActive')
    disableBodyScroll(targetElement, {
      reserveScrollBarGap: true,
    })
  })
})