(function ($) {
  "use strict";

  /*--------------------------------------------
                Scroll class jquery
  ---------------------------------------------*/

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').on("click", function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  /*--------------------------------------------
                Menu toggle class jquery
  ---------------------------------------------*/
  $(".menu_toggle").on("click", function () {
    $(this).toggleClass("active");
    $('.navbar').toggleClass("active");
    return false;
  });

  /*--------------------------------------------
             Sticky Menu Jquery
  ---------------------------------------------*/
  var fixed_top = $("header");
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 80) {
      fixed_top.addClass("menu-fixed fade_in_down");
    } else {
      fixed_top.removeClass("menu-fixed fade_in_down");
    }

  });

  /*--------------------------------------------
             Swiper Slider Jquery
  ---------------------------------------------*/
  var swiper = new Swiper('.banner-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
  var swiper = new Swiper('.review-container', {
    loop: true,
    pagination: {
      el: '.review-pagination',
      clickable: true
    },
  });
  var swiper = new Swiper('.favorite-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.fav-pagination',
      clickable: true
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 3,
        spaceBetween: 20
      },
    },
  });

})(jQuery);

