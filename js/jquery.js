$(document).ready(function () {

    /* import header */
    $("#header").load("assets\\public\\html\\nav.html");
    if ($()) {
      console.log('🚀 jQuery loaded');
    }
    
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
  
    $('.hiddenMail').on('click', function (event) {
      event.preventDefault();
      $(this).off("click");
      var email = $(this).attr("data-email").replace(/AT/, '@').replace(/DOT/, '.');
      $(this).removeClass("hiddenMail");
      $(this).html(email);
      $(this).attr("href", "mailto:" + email);
    });
  
  });