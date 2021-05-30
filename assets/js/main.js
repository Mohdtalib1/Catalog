$(document).ready(function () {

    "use strict";

    // Preloader

    $(window).load(function () { // makes sure the whole site is loaded
        $('.page-preloader spinner').fadeOut(); // will first fade out the loading animation
        $('.page-preloader').delay(950).fadeOut('slow');
        // will fade out the white DIV that covers the website.
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    })

    // Animated typing text

    $(".animated-text").typed({
        strings: [
            "Hire him and get all works done with ease!",

        ],
        typeSpeed: 40,
        loop: true,
    });

    // PopUp Effect




    // Owl Clients

    $("#owl-clients").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

    // Owl Testimonils

    $("#owl-testimonials").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 600,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "goDown",
        autoPlay: true
    });

    // Snazzy Maps


});
