// Находим все контейнеры ротаторов на странице
const rotators = document.querySelectorAll('.rotator');

// Функция, которая обрабатывает логику для ОДНОГО контейнера-ротатора
function initializeRotator(rotatorElement) {
    // Получаем все "кейсы" (варианты текста) внутри данного ротатора
    const cases = rotatorElement.querySelectorAll('.rotator__case');
    let currentIndex = 0;
    let timerId;

    function switchCase() {
        // 1. Снимаем активный класс и стили с текущего элемента
        cases[currentIndex].classList.remove('rotator__case_active');
        cases[currentIndex].style.color = ''; // Сбрасываем цвет предыдущего

        // 2. Рассчитываем индекс следующего элемента
        currentIndex = (currentIndex + 1) % cases.length;

        // 3. Получаем следующий элемент и его настройки из data-атрибутов
        const nextCase = cases[currentIndex];
        const speed = nextCase.dataset.speed ? parseInt(nextCase.dataset.speed) : 1000;
        const color = nextCase.dataset.color || 'black';

        // 4. Устанавливаем активный класс и цвет для нового элемента
        nextCase.classList.add('rotator__case_active');
        nextCase.style.color = color;
        
        // 5. Очищаем предыдущий таймер и запускаем новый с НОВОЙ скоростью
        clearInterval(timerId);
        timerId = setInterval(switchCase, speed);
    }

    // Инициализация: запускаем первый слайд и таймер
    // Запускаем через setTimeout, чтобы дать странице прогрузиться, 
    // но можно вызвать switchCase() сразу для мгновенного старта.
    timerId = setInterval(switchCase, 1000); // Стартовая скорость по умолчанию

    // При первом вызове функции мы сразу вызываем switchCase, чтобы 
    // применить первый цвет и установить правильный первый интервал.
    switchCase(); 
}

// Запускаем функцию инициализации для каждого найденного на странице ротатора
rotators.forEach(initializeRotator);