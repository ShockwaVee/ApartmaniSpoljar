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
