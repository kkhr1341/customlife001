var player;
$(function($) {
    $(window).load(function() {
        animation();
        animation2();

    });

    function animation() {
        var title1 = new TimelineMax();
        title1.fromTo(".inview01", 0.8, {
            ease: Power3.easeOut,
            scale: 1,
            opacity: 0,
            y: 20,
        }, {
            ease: Power3.easeOut,
            scale: 1,
            opacity: 1,
            y: 0,
        }, .15);
        title1.staggerFromTo(".inview04", 1.2, {
            ease: Power3.easeOut,
            scale: 1,
            opacity: 0,
            y: 30,
            delay: 0.1,
        }, {
            ease: Power3.easeOut,
            scale: 1,
            opacity: 1,
            y: 0,
        }, .1);
        title1.fromTo(".inview02", 0.7, {
            ease: Power3.easeOut,
            scale: 1,
            opacity: 0,
            y: 20,
        }, {
            ease: Power3.easeOut,
            scale: 1,
            opacity: 1,
            y: 0,
        }, .25);

        title1.fromTo(".inview03", 0.6, {
            ease: Power3.easeOut,
            scale: 1,
            opacity: 0,
            y: 20,
        }, {
            ease: Power3.easeOut,
            scale: 1,
            opacity: 1,
            y: 0,
        }, .5);

    }

    function animation2() {
        var title2 = new TimelineMax();
        title2.fromTo(".slide0", 0.3, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            right: '-10%',
            bottom: '20%',
            rotationZ: 15,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            right: 0,
            bottom: 0,
            rotationZ: 0,
            opacity: 1,
        }, .4);
        title2.fromTo(".slide1", 0.35, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            right: '-20%',
            bottom: '39%',
            rotationZ: 28,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            right: '-10%',
            bottom: '19%',
            rotationZ: 13,
            opacity: 1,
        }, .5);
        title2.fromTo(".slide2", 0.4, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            right: '-27%',
            bottom: '48%',
            rotationZ: 37,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            right: '-17%',
            bottom: '28%',
            rotationZ: 22,
            opacity: 1,
        }, .6);
        title2.fromTo(".slide3", 0.45, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            right: '-36%',
            bottom: '50%',
            rotationZ: 47,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            right: '-26%',
            bottom: '30%',
            rotationZ: 32,
            opacity: 1,
        }, .7);

        title2.fromTo(".slidesp0", 0.3, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            right: '-15%',
            bottom: '27%',
            rotationZ: 31,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            right: '-10%',
            bottom: '17%',
            rotationZ: 16,
            opacity: 1,
        }, .4);
        title2.fromTo(".slidesp1", 0.3, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            // right: '-3%',
            // bottom: '4%',
            // rotationZ: 15,
            // opacity: 0,
            right: '-15%',
            bottom: '27%',
            rotationZ: 31,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            right: '2%',
            bottom: '-6%',
            rotationZ: 0,
            opacity: 1,
        }, .4);
        title2.fromTo(".slidesp2", 0.5, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            // right: '-10%',
            // bottom: '-21%',
            // rotationZ: -1,
            // opacity: 0,
            right: '-15%',
            bottom: '27%',
            rotationZ: 31,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            right: '-5%',
            bottom: '-31%',
            rotationZ: -16,
            opacity: 1,
        }, .4);
        title2.fromTo(".slidesp3", 0.7, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            // right: '-22%',
            // bottom: '-32%',
            // rotationZ: -13,
            // opacity: 0,
            right: '-15%',
            bottom: '27%',
            rotationZ: 31,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            right: '-17%',
            bottom: '-42%',
            rotationZ: -28,
            opacity: 1,
        }, .4);
        title2.fromTo(".home-brain", 0.7, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            x: 10,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            x: 0,
            opacity: 1,
        }, .3);
        title2.fromTo(".top-h1", 0.7, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            x: -20,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            x: 0,
            opacity: 1,
        }, .0);
        title2.fromTo(".top-p", 0.7, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            x: -20,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            x: 0,
            opacity: 1,
        }, .05);
        title2.fromTo(".top-btn", 0.7, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            x: -20,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            x: 0,
            opacity: 1,
        }, .1);

        title2.fromTo(".about-wrapper", 0.7, {
            ease: Back.easeOut.config(1.9),
            // ease: Power3.easeOut,
            x: -120,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            x: 0,
            opacity: 1,
        }, .9);
        title2.fromTo(".about-textarea", 0.7, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            x: -20,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            x: 0,
            opacity: 1,
        }, 1.4);
        title2.fromTo(".about-slider", 0.7, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            y: -20,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            y: 0,
            opacity: 1,
        }, 1.4);
        title2.fromTo(".about-footer", 0.7, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            x: 20,
            opacity: 0,
        }, {
            // ease: Back.easeOut.config(1.9),
            ease: Power3.easeOut,
            x: 0,
            opacity: 1,
        }, 1.5);
    }










    $(".twitter-share-button").addClass("twitter-share-buttoon")
        .removeClass("twitter-share-button");
    widgetoon_main();




    $(document).on("click", function(e) {
        if (!$(event.target).closest('#share-pc').length) {
            $('.header-share').fadeOut();
        } else {
            $('.header-share').fadeIn();
        }
    });

    // $(document).on("click",function(e){
    //   if(!$(event.target).closest('.header-hamburger').length) {
    //     $('.header-share').fadeOut();
    //   } else {
    //     console.log('a');
    //      TweenMax.to("header" , 1 , {paddingBottom: 50vh});
    //   }
    // });

    var spMenu = false;

    $(".header-hamburger").on("click", function(e) {
        if (!spMenu) {
            // TweenMax.to(".header" , 1 , {paddingBottom: 50vh});
            $("header").css('padding-bottom', 'calc(123vw - 60px)');
            $('.menu-sp').show();
            // animationOpen();

            $("header").css('background-color', 'rgba(255, 255, 255, 1)');
            $(".header-hamburger").children('img').attr('src', 'assets/image/header/cross.png');
            $('.menu-sp').css('display', 'flex');
            spMenu = true;
        } else {
            $(".header-hamburger").children('img').attr('src', 'assets/image/header/hamburger.png');
            $('.menu-sp').hide();
            $("header").css('padding-bottom', 'inherit');
            $("header").css('background-color', '#233B6C');
            spMenu = false;
        }
    });

    // function animationOpen() {
    //   var title1 = new TimelineMax();
    //   title1.to('header', 1, {
    //     paddingBottom: 'calc(123vw - 60px)',
    //
    //   }, .0);
    //   title1.to('.menu-sp', 0.5, {
    //
    //   }, .0);
    // }

    var $win = $(window);

    $win.on('load resize', function() {
        $(".header-hamburger").children('img').attr('src', 'assets/image/header/hamburger.png');
        $('.menu-sp').hide();
        $("header").css('padding-bottom', 'inherit');
        $("header").css('background-color', '#233B6C');
        spMenu = false;
    });






    $(".trigger").on("click", function(e) {
        showModalWindow($(this).data("target"));
        e.preventDefault();
    });

    $(".trigger2").on("click", function(e) {
        showModalWindow2($(this).data("target"));
        e.preventDefault();
    });

    $(".overlay, .close, .back a").on("click", function(e) {
        hideModalWindow();
        e.preventDefault();
    });









});


var position = 0;

function showModalWindow(mode) {
    if ($(".overlay").css("display") != "block") {
        // $(".modal-loading").show();
        $(".overlay").fadeIn();
        position = $(window).scrollTop();
        $('.wrapper').css({
            position: 'fixed',
            width: '100%',
            top: (-1 * position)
        });
    }
    $('html, body').prop({ scrollTop: 0 });
    // $(".modal-loading").hide();

    $("#" + mode).show();
    $("#contact-view").show();
}

function hideModalWindow() {
    $('.wrapper').attr({ style: '' });
    $('html, body').prop({ scrollTop: position });
    $(".overlay").fadeOut();
    $(".modal-window").hide();
}

function showModalWindow2(mode) {
    if ($(".overlay").css("display") != "block") {
        // $(".modal-loading").show();
        $(".overlay").fadeIn(4000);
        position = $(window).scrollTop();
        $('.wrapper').css({
            position: 'fixed',
            width: '100%',
            top: (-1 * position)
        });
    }
    $('html, body').prop({ scrollTop: 0 });
    // $(".modal-loading").hide();
    $("#" + mode).fadeIn(4000);
}

function videoControl(action) {
    var $playerWindow = $('#popup-movie')[0].contentWindow;
    $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
}