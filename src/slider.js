// Slick slider
$('.slick-slider').slick({
    slidesToShow: 2,
    dots: true,
    autoplay: false,
    arrows: false,
    infinite: false,
    draggable: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.trusted-slider').slick({
    slidesToShow: 1,
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: false,
    draggable: true
});

// FlexSlider
$(window).on('load', function () {
    $('.special-slider').flexslider({
        animation: 'slide',
        controlNav: false,
        directionNav: false,
        slideshow: true,
        slideshowSpeed: 3000
    });

    $('.prev').on('click', function () {
        $('.special-slider').flexslider('prev');
        return false;
    });

    $('.next').on('click', function () {
        $('.special-slider').flexslider('next');
        return false;
    });
});

// owl carousel
$('.owl-carousel').owlCarousel({
    loop: false,
    center: false,
    margin: 30,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});
