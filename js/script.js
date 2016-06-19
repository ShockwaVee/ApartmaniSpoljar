    /*-----------------------------BUTTON ZA RESPONSIVE------------------*/
    function button() {
        document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
    }
    /*---------------------------KRAJ BUTTON ZA RESPONSIVE----------------*/

    $('.pocetakLink').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
    $('.galerijaLink').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
    $('.apartmaniLink').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
    $('#lokacijaLink').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
    $('#kontaktLink').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
