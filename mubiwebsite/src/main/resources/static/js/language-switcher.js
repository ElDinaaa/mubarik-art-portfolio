document.addEventListener('DOMContentLoaded', () => {
    const langEnLinks = document.querySelectorAll('#lang-en, #lang-en-mobile');
    const langRuLinks = document.querySelectorAll('#lang-ru, #lang-ru-mobile, #lang-ru-panel');

     // Добавляем обработчики событий для всех элементов с переключением языка на английский
    langEnLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Предотвращает переход по ссылке
            changeLanguage('en');
        });
    });

    // Добавляем обработчики событий для всех элементов с переключением языка на русский
    langRuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Предотвращает переход по ссылке
            changeLanguage('ru');
        });
    });

    function changeLanguage(lang) {
        let currentUrl = window.location.href;
        let pathname = window.location.pathname;

        if (pathname === "/") {  // Если на главной странице
            window.location.href = `/${lang}/index`;
            return;
        }

        if (lang === 'en') {
            if (currentUrl.includes('/ru/')) {
                window.location.href = currentUrl.replace('/ru/', '/en/');
            } else if (!currentUrl.includes('/en/')) {
                window.location.href = currentUrl.replace(window.location.pathname, `/en${window.location.pathname}`);
            }
        } else if (lang === 'ru') {
            if (currentUrl.includes('/en/')) {
                window.location.href = currentUrl.replace('/en/', '/ru/');
            } else if (!currentUrl.includes('/ru/')) {
                window.location.href = currentUrl.replace(window.location.pathname, `/ru${window.location.pathname}`);
            }
        }
    }
});