

$(document).ready(function(){
    var paddingtop = 0; // отступ сверху при прокрутке
    var scrollspeed = 650; // время прокрутки
    
    jQuery('#scroll-bt').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-0').offset().top - paddingtop}, scrollspeed);
    });

    jQuery('#scroll-bt-0').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-0').outerHeight() + jQuery('#block-0').offset().top - get_scroll_rem() }, scrollspeed);
    });

    jQuery('#scroll-bt-1').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-1').outerHeight() + jQuery('#block-1').offset().top }, scrollspeed);
    });

    jQuery('#scroll-bt-2').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-2').outerHeight() + jQuery('#block-2').offset().top - get_scroll_rem()}, scrollspeed);
    });

    jQuery('#scroll-bt-3').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-3').outerHeight() + jQuery('#block-3').offset().top }, scrollspeed);
    });

    jQuery('#scroll-bt-4').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-4').outerHeight() + jQuery('#block-4').offset().top - get_scroll_rem() }, scrollspeed);
    });

    function get_scroll_rem(){
        return ($(window).width() >= 768)? 85 : 50;
    }

    $('#block-4').magnificPopup({
        delegate: '.pop-up-img', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled:true
        }
        // other options
      });

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

    $('.hdr-img').click(function(){
        var list = this.classList;
        if(!list.contains('hdr-img-animate')){
            list.add('hdr-img-animate');
            setTimeout(function () {   
                list.remove('hdr-img-animate');
            }, 1500);
        }
    })

    var list = document.getElementsByClassName("hdr-img");
    if(list.length > 0)
    {
        var hdr_img = list[0].classList;
        setTimeout(function () {   
            hdr_img.remove('hdr-img-animate');
        }, 1500);

        
        var nav_bg = document.getElementById("nav-bg").classList,
        nav = document.getElementsByClassName("nav-menu")[0];       
        //var bg_list = document.getElementsByClassName("color-bg");
        $('.menu-bt').click(function(){
            if(nav_bg.contains('nav-anim')){ 
                nav.classList.remove('nav-menu-anim');
                nav.classList.add('nav-menu-anim-revers');      
                nav_bg.remove('nav-anim');
                nav_bg.add('nav-anim-revers');             
                setTimeout(function () {   
                    nav.style.display="none";
                }, 1000);

                //highlight-color change      
                // for(let i = 0; i < bg_list.length; i++){
                //     bg_list[i].classList.remove('white-bg');
                // }
            }
            else{
                nav.style.display="block";
                nav.classList.remove('nav-menu-anim-revers');
                nav.classList.add('nav-menu-anim');
                nav_bg.remove('nav-anim-revers');
                nav_bg.add('nav-anim');   

                //highlight-color change         
                // for(let i = 0; i < bg_list.length; i++){
                //     bg_list[i].classList.add('white-bg');
                // }
            }
        })

        $('.home-bt').click(function(){
            nav_close();
        })
        $('.theme-bt').click(function(){
            nav_close();
        })
        $('.mail-bt').click(function(){
            nav_close();
        })
        $('.nav-btn').click(function(){
            nav_close();
        })
        $('.nav-menu').click(function(){
            nav_close();
        })

        function nav_close(){
            if(nav_bg.contains('nav-anim')){ 
                nav.classList.remove('nav-menu-anim');
                nav.classList.add('nav-menu-anim-revers');      
                nav_bg.remove('nav-anim');
                nav_bg.add('nav-anim-revers');             
                setTimeout(function () {   
                    nav.style.display="none";
                }, 1000);

                //highlight-color change      
                // for(let i = 0; i < bg_list.length; i++){
                //     bg_list[i].classList.remove('white-bg');
                // }
            }
        }
    }

    
});