"use strict";

(function ($) {
  $(document).ready(function () {
    svg4everybody({});
  }); // Nav pages global

  $('.menu_click').on('click', function () {
    $('.menu_wrap').toggleClass('menu_wrap_active');
  }); // Main Tab

  $(document).on('click', '.testimonials_tags_wrap .tools_btn .btn_global', function (event) {
    event.preventDefault();
    var self = $(this);
    var id = $(this).attr('name');
    self.parents().find('.tools_active').removeClass('tools_active');
    $('.tools_content .tools_box').fadeOut(0);
    self.addClass('tools_active');
    $('.tools_content').find('#' + id).fadeIn(200);
  }); // Main Tab index

  $(document).on('click', '.tools_btn__this', function (event) {
    event.preventDefault();
    var id = $(this).attr('name');
    $('.tools_content .tools_box').fadeOut(0);
    $('.tools_content').find('#' + id).fadeIn(200);
  });
  $(document).on('click', 'button[name=tools]', function (event) {
    event.preventDefault();
    var self = $(this);
    self.parents().find('.tools_active_right').removeClass('tools_active_right');
    self.parents().find('.tools_active').addClass('tools_active_left');
    $(this).next().addClass('color_fix');
  });
  $(document).on('click', 'button[name=services]', function (event) {
    event.preventDefault();
    var self = $(this);
    self.parents().find('.tools_active_left').removeClass('tools_active_left');
    self.parents().find('.tools_active').addClass('tools_active_right');
    $(this).removeClass('color_fix');
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
  var myBenefits = new Swiper('.benefits_wrap .swiper-container', {
    speed: 900,
    loop: true,
    spaceBetween: 40,
    grabCursor: false,
    pagination: {
      clickable: true,
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.btn_nexting',
      prevEl: '.btn_preving'
    }
  }); // Header Menu Click

  $(document).on('click', '.header_burger__this', function (event) {
    event.preventDefault();
    $('.header_menu').toggleClass('menu_active');
  }); // Modal video

  $(document).on('click', '.video_img__link, .tools_box_video', function (event) {
    event.preventDefault();
    var dataVideo = $(this).attr('data-video');
    var dataTitle = $(this).attr('data-title');
    $('#modal_video').iziModal({
      headerColor: '#9A6CA6',
      background: '#9A6CA6',
      iframe: true,
      iframeURL: dataVideo,
      iframeHeight: 600,
      width: 800,
      title: dataTitle,
      fullscreen: true,
      closeOnEscape: true,
      closeButton: true,
      overlayColor: 'rgba(0, 0, 0, 0.9)',
      onClosed: function onClosed() {
        $('#modal_video').iziModal('destroy');
      }
    });
  });
})(jQuery);