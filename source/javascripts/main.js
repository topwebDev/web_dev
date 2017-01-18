if (typeof jQuery === "undefined") {
  throw new Error("StartKit requires jQuery");
}

$.StartKit = {}

$(function() {
  $.StartKit.activateTooltips = function() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  $.StartKit.activateSliders = function() {
    if($("#logo-slider").length) {
      $('#logo-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }

    // Related projects
    if($("#related-projects-slider").length) {
      $('#related-projects-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }

    // Team slider
    if($("#team-slider").length) {
      $('#team-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [

          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }


    // Office images
    if($("#office-slider").length) {
      $('#office-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
  }

  $.StartKit.activateCounter = function() {
    if($(".animated-counters").length) {
      var employee = new CountUp("employee-count", 0, 25);
      employee.start();

      var product = new CountUp("product-count", 0, 12);
      product.start();

      var experience = new CountUp("experience-count", 0, 672);
      experience.start();

      var customer = new CountUp("customer-count", 10000, 15000);
      customer.start();
    }
  }

  $.StartKit.activateGallery = function() {
    var $container = $("#gallery-container");

    $container
    .on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });
  }

  $.StartKit.activateFiltering = function() {
    if($("#filterable-list").length) {
      var $container = $('#filterable-list');
      $container.isotope({
        filter: '*',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });

      $('#filterable-nav a').click(function(){
        $('#filterable-nav .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });
    }
  }

  $.StartKit.activateScrollAnimations = function() {
    AOS.init();
  }

  // INIT
  $.StartKit.init = function() {
    $.StartKit.activateGallery();
    $.StartKit.activateFiltering();
    $.StartKit.activateTooltips();
    $.StartKit.activateSliders();
    $.StartKit.activateCounter();
    $.StartKit.activateScrollAnimations();
  }


  $.StartKit.init();
})
