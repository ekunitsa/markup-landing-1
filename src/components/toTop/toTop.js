$(document).ready(function() {
  let arrow = $('.js-toTop');

  $(window).scroll(function() {
    $(this).scrollTop() > 200 ? arrow.fadeIn() : arrow.fadeOut();
  });

  arrow.click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});