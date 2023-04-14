$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle')
    })

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 20) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    })

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        )
    })

    $('.hiddenMail').on('click', function (event) {
        event.preventDefault();
        $(this).off("click");
        var email = $(this).attr("data-email").replace(/AT/, '@').replace(/DOT/, '.');
        $(this).removeClass("hiddenMail");
        $(this).html(email);
        $(this).attr("href", "mailto:" + email);
    });
})


