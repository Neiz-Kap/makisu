$(document).ready(function () {
    let $slider = $(".slider");
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true,
        initialSlide: 3,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 668,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    });
    $("#link-to-app").on("click", (event) => {
        event.preventDefault();
        let top = $("#app").offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 2500);
    });
    $(".slick-arrow").click(function () {
        $(this).prev("ul").toggleClass('short-list');
        $slider.slick('slickSetOption', 'slidesToShow', 3, true);
    })
});