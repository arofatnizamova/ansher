$(document).ready(function () {
  //slider
  $('.slick-slider').each(function () {
    let slider = $(this);
    let options = {
      prevArrow: slider.parent().find('.slider-prev'),
      nextArrow: slider.parent().find('.slider-next'),
      infinite: true,
    }
    let extraOptions = {}
    if (slider.hasClass('advantages')) {
      extraOptions = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      }
    }
    slider.slick($.extend({}, extraOptions, options ));
  })
  $('.dropdown-hover').on('click', function (e) {
    e.stopPropagation(); 
    $('.dropdown-menu').not($(this).find('.dropdown-menu')).slideUp(200).removeClass('show');

    const dropdownMenu = $(this).find('.dropdown-menu');
    if (dropdownMenu.hasClass('show')) {
      dropdownMenu.slideUp(200).removeClass('show');
    } else {
      dropdownMenu.slideDown(200).addClass('show');
    }
  });

  $(document).on('click', function () {
    $('.dropdown-menu').slideUp(200).removeClass('show'); 
  });
});
