$(document).ready(function(){
    $('.sliderbig').slick({
        infinite: true,
        centerMode: true,
        // variableWidth: true,
        // centerPadding: '60px',
        slidesToShow: 1,
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        slidesToScroll: 1,
        speed: 500,
        cssEase: 'ease-out',
        useTransform: true,
        initialSlide: 0,
        touchThreshold: 10,
        waitForAnimate: false,
        mobileFirst: true,
        // fade: true,
        // appendDots: $('.NameClass'),
        asNavFor: ".slidersmall"
    });

    $('.slidersmall').slick({
        arrows: false,
        // fade: true,
        asNavFor: ".sliderbig",
        centerMode: true,
        centerPadding: '20px',
        slidesToScroll: 1,
        speed: 500,
        cssEase: 'ease-out',
        useTransform: true,
        waitForAnimate: false,
    });

    var scroll = function(e) {
        if (stopScrollX || stopScrollY) {
            e.preventDefault();
            e.stopPropagation();
            window.scroll(scrollToX, scrollToY);
        }
    }
    
    document.addEventListener('mousewheel', scroll, false);
});

