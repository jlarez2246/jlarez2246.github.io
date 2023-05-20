(function ($) {
    'use strict';

    // efecto de scroll
    var wow = new WOW(
      {
        boxClass:     'wowload',
        animateClass: 'animated',
        offset:       0,
        mobile:       true,
        live:         true
      }
    );
    wow.init();

    var $window = $(window);

    // menu de navegacion
	$('.btn-menu').on('click', function () {
        $('.btn-menu').toggleClass('close')
        $('.nav-ul').toggleClass('nav-ul-open')
        $('.menu').toggleClass('menu-v');
        $('.menu-ul').toggleClass('menu-v');
        $('.menu-h3').toggleClass('menu-v');
    })

    // precarga
    $window.on('load', function () {
        $('.preloader').fadeOut('slow', function(){
            $(this).remove();
        });
    });

    // mandar correo
    $('.correo').on({ 'click' : function(e){
        e.preventDefault()
        $('.container-form').addClass('container-form-visible')
        $('.nav').addClass('navbar-correo')
        setTimeout(function(){
            $('.formulario').css({'transform' : 'scaleX(1)'})
            setTimeout(function(){
                $('.ocul').css({'opacity' : '1'})
            },500)
        },500)
    }})
    $('.btn-correo').on({ 'click' : function(){
        $('.nav').removeClass('navbar-correo')
        $('.ocul').css({'opacity' : '0'})
        $('.formulario').css({'transform' : 'scaleY(0)'})
        setTimeout(function(){
            $('.container-form').removeClass('container-form-visible')
            $('.formulario').css({'transform' : 'scaleX(0)'})
        },500)
    }})

})(jQuery);