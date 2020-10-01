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

    // Anmaton scroll button in header
    $("#link-to-app").on("click", (event) => {
        event.preventDefault();
        let top = $("#app").offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 2500);
    });

    // let closeModalWindow = $("#cancel");
    // let modalWindow = $(".modal-background");
    // let htmlScroll = $("#no-scroll");
    // let bigLogoMakisu = $(".header-content-img");
    // let titleAfterLogo = $(".logo-title");
    $("#cancel").on("click", function(){
        $(".modal-background").removeAttr("style").hide();
        $("#no-scroll").removeAttr("id");
        $(".header-content-img").addClass("animation-rotate");
        $(".logo-title").addClass("animation-translate");
    });
});
