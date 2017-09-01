$(document).ready(function() {
  $.scrollify({
    section: ".view",
    //sectionName:false,
    scrollSpeed: 1100,
    after: function(i) {
      if (i === 2) {
        $.scrollify.setOptions({
          easing: "easeOutExpo"
        });
      }
    }
  });

  $(".home-a").on('click', function() {
    $('html, body').animate({
      scrollTop: $("#home-view").offset().top
    }, 1000)
  })
  $(".about-a").on('click', function() {
    $('html, body').animate({
      scrollTop: $("#about-view").offset().top
    }, 1000)
  })
  $(".projects-a").on('click', function() {
    $('html, body').animate({
      scrollTop: $("#projects-view").offset().top
    }, 1000)
  })
  $(".contact-a").on('click', function() {
    $('html, body').animate({
      scrollTop: $("#contact-view").offset().top
    }, 1000)
  })


  var stickyHeaderTop = $('#topheader').offset().top;

  $(window).scroll(function() {
    if ($(window).scrollTop() > stickyHeaderTop) {
      $('#topheader').hide()
      $('#stickyheader').css({
        position: 'fixed',
        top: '0px',
        width: '100%',
        left: '0'
      });
    } else {
      $('#topheader').show()
      $('#stickyheader').css({
        position: 'static',
        top: '0px'
      });
    }
  });
})
