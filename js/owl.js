$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        900: {
            items: 3,
            center: false,
        },

        1200: {
            items: 4
        },

        1500: {
            items: 5
        },
    }
})

/*************** */

$(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
        $('.header-browser').addClass('bg');

    } else {
        $('.header-browser').removeClass('bg');
    }
});