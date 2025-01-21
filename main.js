$(document).ready(function () {
      // Обработка клика на элемент с классом .dropdown-hover
      $('.dropdown-hover').on('click', function (e) {
  e.stopPropagation(); // Остановить всплытие события
  
  // Закрыть все остальные dropdown-меню
  $('.dropdown-menu').not($(this).find('.dropdown-menu')).removeClass('show');
  
  // Переключить класс "show" только для текущего элемента
  $(this).find('.dropdown-menu').toggleClass('show');
});

// Закрытие меню при клике вне dropdown
$(document).on('click', function () {
  $('.dropdown-menu').removeClass('show'); // Удалить класс "show"
});

    });