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

    //Animation when user see
    //window and animation items
    let animation_elements = $.find('.animation-element');

    //check to see if any animation containers are currently in view
    function check_if_in_view() {
        //get current window information
        let window_top_position = $(window).scrollTop();
        let window_bottom_position = (window_top_position + $(window).height());

        //iterate through elements to see if its in view
        $.each(animation_elements, function() {

            //get the element sinformation
            let element = $(this);
            let element_height = $(element).outerHeight();
            let element_top_position = $(element).offset().top;
            let element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                element.addClass('in-view');
            } else {
                element.removeClass('in-view');
            }
        });
    }

    //on or scroll, detect elements in view
    $(window).on('scroll resize', function() {
            check_if_in_view()
        })
        //trigger our scroll event on initial load
    $(window).trigger('scroll');


    // Anmaton scroll button in header
    $("#link-to-app").on("click", (event) => {
        event.preventDefault();
        let top = $("#app").offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 2500);
    });
});

$(document).ready(function() {


});
i