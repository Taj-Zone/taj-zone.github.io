jQuery(document).ready(function ($) {

    "use strict";

    var menu = $('.header'),
        pos = menu.offset();

    $(window).scroll(function () {
        if ($(this).scrollTop() > pos.top + menu.height() && menu.hasClass('default')) {
            menu.fadeOut('fast', function () {
                $(this).removeClass('default').addClass('fixedHeader').fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= pos.top && menu.hasClass('fixedHeader')) {
            menu.fadeOut('fast', function () {
                $(this).removeClass('fixedHeader').addClass('default').fadeIn('fast');
            });
        }
    });




    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });



    //===================================================
    // website preloader
    //===================================================

    // $(window).load(function () {
    //     $("#spinner").fadeOut("slow");
    // });

    //===================================================
    // flickr feed plugin
    //===================================================

    $('#basicuse').jflickrfeed({
        limit: 9, //change the limit 
        qstrings: {
            id: '52617155@N08'
        },
        itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
    });

    //===================================================
    // flickr feed plugin
    //===================================================
    var nice = $("html").niceScroll({
        scrollspeed: 60,
        zindex: "999999",
        background: "#fff",
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: .5,
        cursorwidth: 15,
        cursorborder: 0,
        cursorcolor: '#000',
        cursorborderradius: 6,
        autohidemode: false,
        horizrailenabled: false

    });
    //===================================================
    // tooltip initilizer
    //===================================================

    $("a[data-rel]").tooltip();


    //===================================================
    // owl carousel
    //===================================================

    $(".projects-carousel").owlCarousel({
        navigation: true,
        pagination: true,
        slideSpeed: 900,
        autoPlay: false,
        rewindNav: false,
        items: 4,
        itemsDesktop: [1200, 6],
        itemsDesktopSmall: [1024, 4],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    $(".owl-carousel").owlCarousel({
        navigation: true,
        pagination: true,
        slideSpeed: 900,
        autoPlay: false,
        rewindNav: false,
        items: 1,
        itemsDesktop: [1200, 6],
        itemsDesktopSmall: [1024, 4],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
    });
    /*----------------------------------------------------*/
    /*  Change Slider Nav Icons
    /*----------------------------------------------------*/

    $('.touch-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
    $('.touch-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');


    $(".clients-carousel").owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 900,
        autoPlay: false,
        rewindNav: false,
        items: 5,
        itemsDesktop: [1200, 5],
        itemsDesktopSmall: [1024, 4],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });

    $(".testimonial-carousel").owlCarousel({
        navigation: true,
        pagination: false,
        slideSpeed: 900,
        autoPlay: false,
        rewindNav: false,
        singleItem: true
    });
    $('.navigation1').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
    $('.navigation1').find('.owl-next').html('<i class="fa fa-angle-right"></i>');



    //===================================================
    // camera slider
    //===================================================

    if ($('#camera_wrap_3').length > 0) {
        $('#camera_wrap_3').camera({
            height: '40%',
            pagination: false,
            thumbnails: false,
            navigationHover: true,
            overlayer: false,
            loader: 'bar',
            barPosition: 'top',
            loaderColor: '#f0353a',
            loaderBgColor: '#0b1c33',
            loaderOpacity: 1, //0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1
            loaderPadding: 0, //how many empty pixels you want to display between the loader and its background
            loaderStroke: 4,
        });
    }

    //===================================================
    // isotope
    //===================================================
    (function () {
        var $container = $('.portfolio');


        $(window).smartresize(function () {
            $container.isotope({
                filter: '*',
                resizable: true,
                layoutMode: 'sloppyMasonry',
                itemSelector: '.portfolio-item'
            });
        });

        $container.imagesLoaded(function () {
            $(window).smartresize();
        });


        $('.portfolio-nav a').click(function () {
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });

        var $optionSets = $('.portfolio-nav'),
            $optionLinks = $optionSets.find('a');

        $optionLinks.click(function () {
            var $this = $(this);
            if ($this.hasClass('selected')) {
                return false;
            }
            var $optionSet = $this.parents('.portfolio-nav');
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');
        })

    })();

    //===================================================
    // fit vid for responsive videos
    //===================================================
    $(".player").fitVids();

    //===================================================
    // scroll to top
    //===================================================



    mytweecool();


}); //jquery END

function mytweecool() {
    $('#tweecool').tweecool({
        //settings
        username: 'themeforest',
        limit: 3
    });
}