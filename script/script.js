$(document).ready(function() {
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

    $("#cancel").on("click", function(){
        $(".modal-background").removeAttr("style").hide();
        $("#no-scroll").removeAttr("id");
        $(".header-content-img").addClass("animation-rotate");
        $(".logo-title").addClass("animation-translate");
    });
});
