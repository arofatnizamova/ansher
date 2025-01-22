$(document).ready(function () {
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
