$(document).ready(function(){
    var paddingtop = 0; // отступ сверху при прокрутке
    var scrollspeed = 650; // время прокрутки
    
    jQuery('#scroll-bt').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#nav-bar').offset().top - paddingtop}, scrollspeed);
    });

    jQuery('#scroll-bt-1').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-1').outerHeight() + jQuery('#block-1').offset().top - 50 }, scrollspeed);
    });

    jQuery('#scroll-bt-2').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-2').outerHeight() + jQuery('#block-2').offset().top - 50 }, scrollspeed);
    });

    jQuery('#scroll-bt-3').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-3').outerHeight() + jQuery('#block-3').offset().top - 50 }, scrollspeed);
    });

    jQuery('#scroll-bt-4').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-4').outerHeight() + jQuery('#block-4').offset().top - 50 }, scrollspeed);
    });

    jQuery('#scroll-bt-5').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-5').outerHeight() + jQuery('#block-5').offset().top - 50 }, scrollspeed);
    });

    jQuery('#scroll-bt-6').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-6').outerHeight() + jQuery('#block-6').offset().top - 50 }, scrollspeed);
    });

    
    $('#block-5').magnificPopup({
        delegate: '.pop-up-img', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled:true
        }
        // other options
      });


    $('a.animated').hover( 
    function() {
        $(this).addClass('pulse'); // Добавляем класс анимации
    },
    function() {
        $(this).removeClass('pulse'); // Убираем класс
    });

    //initialize swiper when document ready
    // var hdrSwiper = new Swiper ('.swiper-container', {
    //   // Optional parameters
    //   spaceBetween: 20,
    //   grabCursor: true,
    //   centredSlides: true,
    //   slidesPerView: 'auto',
    //   direction: 'horizontal',
    //   loop: true,
    //   autoplay: {
    //     delay: 3500,
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true,
    //   },
    // })

    //initialize swiper when document ready
    var hdrSwiper = new Swiper ('.swiper-container-hdr', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      effect:'coverflow',
      spaceBetween: 0,
      grabCursor: true,
      centredSlides: true,
      slidesPerView: 5,
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 3500,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletClass: 'swiper-pagination-bullet-hdr',
      }, 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    //initialize swiper when document ready
    var emplSwiper = new Swiper ('.swiper-container-empl', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      spaceBetween: 0,
      grabCursor: true,
      centredSlides: true,
      slidesPerView: 'auto',
      effect:'coverflow',
      coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 3500,
      },
      pagination: {
        el: '#swiper-pagination-empl',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet-empl',
        bulletActiveClass: 'swiper-pagination-bullet-active-empl',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    //initialize swiper when document ready
    var emplSwiper = new Swiper ('.swiper-container-empl-mobile', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      spaceBetween: 0,
      grabCursor: true,
      effect:'fade',     
      autoplay: {
        delay: 3500,
      },
      pagination: {
        el: '#swiper-pagination-empl-mobile',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet-empl',
        bulletActiveClass: 'swiper-pagination-bullet-active-empl',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    })

});




