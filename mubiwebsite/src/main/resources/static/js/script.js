// Ждем полной загрузки DOM, прежде чем выполнять функции
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const closeMenu = document.getElementById('close-menu');
    const navLinks = document.getElementById('nav-links');

// Функция для переключения видимости меню
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('is-active');
        closeMenu.classList.toggle('is-active');

         // Добавляет/удаляет класс 'no-scroll' на body в зависимости от состояния меню
        if(navLinks.classList.contains('active')) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    // Добавляем обработчик события "click" к элементу с идентификатором "hamburger"
    hamburger.addEventListener('click', (event) => {
        // Останавливаем дальнейшее распространение события по DOM-дереву
        event.stopPropagation();
        // Вызываем функцию toggleMenu(), которая открывает меню
        toggleMenu();
    });

    // Добавляем обработчик события "click" к элементу с идентификатором "closeMenu"
    closeMenu.addEventListener('click', (event) => {
        // Останавливаем дальнейшее распространение события по DOM-дереву
        event.stopPropagation();
        // Вызываем функцию toggleMenu(), которая закрывает меню
        toggleMenu();
    });

// Animation for header and navigation on page load

    const header = document.querySelector('.overlay h1');
    const navItems = document.querySelectorAll('.navigation a, nav ul#nav-links li a');

    // Если элемент заголовка существует, устанавливаем его начальную непрозрачность в 0
    if(header) {
        header.style.opacity = 0;
    }
    // Устанавливаем начальную непрозрачность в 0 для всех элементов навигации
    navItems.forEach(link => link.style.opacity = 0);

    // Устанавливаем таймер на 100 миллисекунд, чтобы начать анимацию после загрузки страницы
    setTimeout(() => {
        if(header){
            header.style.transition = 'opacity 1s'; // Задаем длительность перехода 1 секунда
            header.style.opacity = 1; // Устанавливаем непрозрачность в 1 (делаем видимым)
        }    
        navItems.forEach((link, index) => {
            link.style.transition = 'opasity 1s ${index * 0.2}s'; // Задаем длительность перехода 1 секунда и задержку в зависимости от индекса
            link.style.opacity = 1; // Устанавливаем непрозрачность в 1 (делаем видимым)
        });
    }, 100);

// Smooth scroll for navigation links

    // Находим все элементы ссылок внутри '.navigation' и внутри 'nav ul#nav-links'
    document.querySelectorAll('.navigation a, nav ul#nav-links li a').forEach(anchor => {
        // Для каждой найденной ссылки добавляем обработчик события 'click'
        anchor.addEventListener('click', function(e) {
            // Получаем значение атрибута 'href' у текущей ссылки
            const href = this.getAttribute('href');

            // Проверяем, начинается ли значение 'href' с символа '#', что означает якорную ссылку
            if(href.startsWith('#')){
                // Отменяем стандартное поведение браузера при клике по ссылке
                e.preventDefault();
                // Извлекаем идентификатор целевого элемента, убирая символ '#'
                const targetId = this.getAttribute('href').substring(1);
                // Находим элемент с данным идентификатором
                const targetElement = document.getElementById(targetId);

                // Если элемент с данным идентификатором найден
                if(targetElement) {
                    // Скроллим страницу к целевому элементу с плавной анимацией
                    window.scrollTo({
                        top: targetElement.offsetTop, // Позиция элемента от верхней границы страницы
                        behavior: 'smooth' // Плавное перемещение      
                    });
                }
            }        
        });
    });

// Modal window for images

    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeModal = document.getElementById("closeModal");

    // Для каждого изображения на странице добавляем обработчик события 'click'
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            // При клике на изображение отображаем модальное окно
            modal.style.display = "block";
            // Устанавливаем источник изображения в модальном окне равным источнику нажатого изображения
            modalImg.src = img.src;
            // Проверяем, есть ли следующий элемент-сосед с тегом 'h2'
            const nextSiblingH2 = img.nextElementSibling?.querySelector('h2');
            // Если элемент 'h2' существует, устанавливаем его содержимое как текст подписи
            if(nextSiblingH2) {
                captionText.innerHTML = nextSiblingH2.innerHTML;
            } else {
                // Если элемента 'h2' нет, устанавливаем текст подписи равным атрибуту 'alt' изображения
                captionText.innerHTML = img.alt;
            }
            // Добавляем класс 'no-scroll' к элементу body, чтобы предотвратить прокрутку страницы
            document.body.classList.add('no-scroll');
        });
    });
    // Добавляем обработчик события 'click' для кнопки закрытия модального окна
    closeModal.addEventListener('click', () => {
        // При клике на кнопку скрываем модальное окно
        modal.style.display = "none";
        // Убираем класс 'no-scroll' у элемента body, чтобы восстановить прокрутку страницы
        document.body.classList.remove('no-scroll');
    });

    // Добавляем обработчик события 'click' для окна браузера
    window.addEventListener('click', (event) => {
        // Проверяем, если клик был сделан вне модального окна (по фону)
        if(event.target == modal) {
            // Скрываем модальное окно
            modal.style.display = "none";
            // Убираем класс 'no-scroll' у элемента body, чтобы восстановить прокрутку страницы
            document.body.classList.remove('no-scroll');
        }
    });

// Adding share button 
    const shareText = document.getElementById('share-text');
    const shareMenu = document.querySelector('.share-menu');

    if (shareText && shareMenu) {
        console.log("Share elements found in DOM.");

    // Добавляем обработчик события 'click' на элемент 'shareText'    
    shareText.addEventListener('click', (event) => {
        // Останавливаем распространение события
        event.stopPropagation();
        // Переключаем класс 'active' для элемента 'shareMenu'
        shareMenu.classList.toggle('active');
        console.log("Share button clicked, menu toggled.");
    });

    // Добавляем обработчик события 'click' на весь документ
    document.addEventListener('click', (event) => {
        // Проверяем, был ли клик вне элемента 'shareMenu' и элемента 'shareText'
        if (!shareMenu.contains(event.target) && event.target !== shareText) {
            // Убираем класс 'active' у элемента 'shareMenu'
            shareMenu.classList.remove('active');
            console.log("Clicked outside the share menu, menu hidden.");
        }
    });
    } else {
    console.log("Share elements not found in DOM.");
    }

    function shareToFacebook() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL), 'Share to Facebook', 'width=600,height=400');
    }

    function shareToInstagram() {
        window.open('https://www.instagram.com', 'Share to Instagram', 'width=600,height=400');
    }

    function shareToTwitter() {
        window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(document.URL) + '&text=' + encodeURIComponent(document.title), 'Share to Twitter', 'width=600,height=400');
    }

    function shareToPinterest() {
        window.open('https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(document.URL), 'Share to Pinterest', 'width=600,height=400');
    }
    
    // Делаем функции шаринга доступными в глобальной области видимости
    window.shareToFacebook = shareToFacebook;
    window.shareToInstagram = shareToInstagram;
    window.shareToTwitter = shareToTwitter;
    window.shareToPinterest = shareToPinterest;

});