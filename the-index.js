$(document).ready(function() {

  $('#tabs li').on('click', function() {
    var tab = $(this).data('tab')
    $('#tabs li').removeClass('is-active')
    $(this).addClass('is-active')
    $('#tab-content div').removeClass('is-active')
    $('#tab-content div').removeClass('is-flex')
    $('div[data-content="' + tab + '"]').addClass('is-active')
  });

  $('nav .level-item').on('click', function() {
    var navId = $(this).attr('id')
    var navIdString = `#${navId}b`
    $('nav .level-item').removeClass('is-active-nav')
    $(this).addClass('is-active-nav')
    $(navIdString).addClass('is-active-nav')
  })

  $.scrollify({
    section: ".view",
    scrollSpeed: 1100,
    after: function(i) {
      // want the nav to light up according to where you are the page too. 
      // var scrollNavId = $(this).attr('id')
      // var scrollNavIdString = `#${scrollNavId}`
      // var scrollNavIdStringB = `#${scrollNavId}b`
      // $('nav .level-item').removeClass('is-active-nav')
      // $(scrollNavIdString).addClass('is-active-nav')
      // $(scrollNavIdStringB).addClass('is-active-nav')
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
