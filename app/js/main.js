$(window).on('load', function() {

  $('.banner__slider').slick({
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows:false
        }
      }
    ]
  });

  $('.comments-slider').slick({
    dots: true,
    arrows: false
  });

  (function responsiveMenuTriggerButton() {
    let $link = $('.menu-link');
    let $link_active = $('.menu-link_active');
    let $menu = $('.menu');
    let $nav_link = $('.menu a');

    $link.on('click', function () {
      $(this).toggleClass('menu-link_active');
      $menu.toggleClass('menu_active');
      $('body, html').toggleClass('no-scroll');
    });

    $nav_link.on('click', function() {
      $link.toggleClass('menu-link_active');
      $menu.toggleClass('menu_active');
      $('body, html').toggleClass('no-scroll');
    });

  })();

  (function removeModals() {
    let $overlay = $('.menu');
    let $link = $('.menu-link');

    $overlay.on('click', function() {
      $overlay.removeClass('menu_active');
      $link.removeClass('menu-link_active');
    });
  })();

});