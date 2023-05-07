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
  
    /* Dark Mode */
    var isLightMode = false; // check if dark mode is enabled by default
  
    // check if user has previously selected dark mode
    if (localStorage.getItem('isLightMode') === 'true') {
      $('body').addClass('dark-mode'); // add 'dark-mode' class to body
      $('.fa-sun').removeClass('fa-sun').addClass('fa-moon'); // change icon class
      isLightMode = true; // set isLightMode to true
    }
  
    // toggle dark mode when theme selector is clicked
    $('.theme-selector').click(function () {
      isLightMode = !isLightMode; // toggle isLightMode value
  
      // update icon class and body class based on isLightMode value
      if (isLightMode) {
        $('.fa-sun').removeClass('fa-sun').addClass('fa-moon');
        $('body').addClass('dark-mode');
      } else {
        $('.fa-moon').removeClass('fa-moon').addClass('fa-sun');
        $('body').removeClass('dark-mode');
      }
  
      // save isLightMode preference in LocalStorage
      localStorage.setItem('isLightMode', isLightMode);
      let lSisLightMode = localStorage.getItem('isLightMode');
      // update CSS variables to invert colors
      if (isLightMode) {
        $(':root').css('--yellow', '#f9ca24');
        $(':root').css('--white', '#333');
        $(':root').css('--white2', '#222');
        $(':root').css('--dark', '#e1e1e1');
        $(':root').css('--dark2', '#fff');
        $(':root').css('--black', '#fff');
        $(':root').css('--header-bg', '#eee');
      } else {
        $(':root').css('--yellow', '#f9ca24');
        $(':root').css('--white', '#fff');
        $(':root').css('--white2', '#eee');
        $(':root').css('--dark', '#333');
        $(':root').css('--dark2', '#222');
        $(':root').css('--black', '#212427');
        $(':root').css('--header-bg', '#1a1a1a');
      }
    });
  });