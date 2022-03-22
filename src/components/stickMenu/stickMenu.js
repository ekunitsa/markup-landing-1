$(window).scroll(function() {
  let scroll = $(window).scrollTop();

  scroll >= 250 ? $(".js-stickMenu").addClass('lan-stickMenu_stick') : $(".js-stickMenu").removeClass('lan-stickMenu_stick');
});