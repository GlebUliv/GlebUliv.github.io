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
        speed: 400,
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
        speed: 400,
        cssEase: 'ease-out',
        useTransform: true,
        waitForAnimate: false,
    });



    // Основные события слайдера
    // $('.sliderbig').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //     console.log(currentSlide)
    // })
    // $('.sliderbig').on('afterChange', function(event, slick, currentSlide, nextSlide){
    //     console.log(currentSlide)
    // })

    // Основные методы слайдера
    // $('.slider').slick('setPosition'); //"сброс" карусели
    // $('.slider').slick('goTo', 4);
    // $('.slider').slick('slickPrev'); // переназначение элементов управления
    // $('.slider').slick('slickNext'); // переназначение элементов управления
    // $("body").css("display", "none");
    
    // $("body").fadeIn(1000);
    
    // $("a.transition").click(function(event){
    //     event.preventDefault();
    //     linkLocation = this.href;
    //     $("body").fadeOut(1000, redirectPage);
    // });
    
    // function redirectPage() {
    //     window.location = linkLocation;
    // }
        // var body = $("body");
        // body.fadeIn(600);
        // $(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto'])", function(e) {
        //     e.preventDefault();
        //     $("body").fadeOut(400);
        //     var self = this;
        //     setTimeout(function () {
        //     window.location.href = $(self).attr("href");
        //     }, 400);
        // });
});

