$(document).ready(function () {
    let $slider = $(".slider");
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 611,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
});