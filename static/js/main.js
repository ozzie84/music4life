"use strict";

(function ($) {
  $(document).ready(function () {
    svg4everybody({});
  }); // Nav pages global
  // $('.menu_click').on('click', function () {
  //   $('.menu_wrap').toggleClass('menu_wrap_active');
  // });
  // Main Tab

  $(document).on('click', '.tools_btn__this', function (event) {
    event.preventDefault();
    var self = $(this);
    var id = $(this).attr('name');
    self.parents().find('.tools_active').removeClass('tools_active');
    $('.tools_content .tools_box').fadeOut(0);
    self.addClass('tools_active');
    $('.tools_content').find('#' + id).fadeIn(200);
  }); // Main Swiper

  var myReviews = new Swiper('.testimonials_wrap .swiper-container', {
    speed: 900,
    loop: true,
    spaceBetween: 40,
    grabCursor: true,
    navigation: {
      nextEl: '.btn_next',
      prevEl: '.btn_prev'
    }
  });
  var myTestimonials = new Swiper('.partners_wrap .swiper-container', {
    speed: 900,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 6,
    loopedSlides: 6,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    breakpoints: {
      991: {
        slidesPerView: 2.5,
        spaceBetween: 20
      }
    }
  });
  $(document).on('click', '.header_burger__this', function (event) {
    event.preventDefault();
    $('.header_menu').toggleClass('menu_active');
  });
})(jQuery);