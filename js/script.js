    /*-----------------------------BUTTON ZA RESPONSIVE------------------*/
    function button() {
        document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
        $("nav").toggleClass('responsive');
    }
    $("section, header,footer").click(function() {
        if ($("nav").hasClass('responsive')) {
            document.getElementsByClassName("topnav")[0].classList.remove("responsive");
            $("nav").removeClass('responsive');
        }

    });
    /*---------------------------KRAJ BUTTON ZA RESPONSIVE----------------*/

    $('.pocetakLink').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });
    $('.galerijaLink').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });
    $('.apartmaniLink').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });
    $('#lokacijaLink').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });
    $('#kontaktLink').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });

    $('h2').click(function() {
        $(this).next().toggle('blind');

    });



    /*function bindEvent(element, eventName, eventHandler) {
        var el = $(element)[0];
        if (el.addEventListener) {
            el.addEventListener(eventName, eventHandler, false)
        } else if (el.attachEvent) {
            el.attachEvent('on' + eventName, eventHandler);
        }
    }
    bindEvent('#headapt1', 'click', function() {
        $('#apt1').toggle('blind');


    });*/


    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
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
