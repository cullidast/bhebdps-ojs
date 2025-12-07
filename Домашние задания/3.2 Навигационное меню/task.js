// Находим все ссылки меню
const menuLinks = document.querySelectorAll('.menu__link');

// Преобразуем NodeList в массив и навешиваем обработчик клика
Array.from(menuLinks).forEach(link => {
    link.onclick = function(event) {
        // Находим ближайший родитель li
        const parentItem = link.closest('.menu__item');
        // Ищем вложенное меню внутри li
        const subMenu = parentItem.querySelector('.menu_sub');

        if (subMenu) {
            // Переключаем класс menu_active для подменю
            subMenu.classList.toggle('menu_active');
            // Предотвращаем переход по ссылке
            event.preventDefault();
        }
        // Для ссылок без подменю переход будет работать как обычно
    };
});