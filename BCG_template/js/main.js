(function ($) {

    "use strict";

    /* Page Loader */
    $('#preloader').fadeOut();

    /* One Page Navigation */

    $(window).on('load', function () {

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

    $('.navbar-nav .nav-link').click(function () {
        $(this).addClass("active").parent().siblings().children().removeClass("active");

    });

    /* Auto Close Responsive Navbar on Click */
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-inverse a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

}(jQuery));



$(function () {

    /* For Fade In animation */

    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

    /* On Form Submission */

    $('#contactForm').submit(function () {

        $('#submitMessage').show();

        // kick off AJAX
        $.ajax({
            url: this.action,
            type: this.method,
            data: $(this).serialize(),
            success: function () {
                // AJAX request finished, handle the results and hide progress
                $('#submitMessage').hide();
            }
        });
        return false;
    });

    
});
