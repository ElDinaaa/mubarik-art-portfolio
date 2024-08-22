document.addEventListener('DOMContentLoaded', () => {
    const langEn = document.getElementById('lang-en');
    const langRu = document.getElementById('lang-ru');

    langEn.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращает переход по ссылке
        changeLanguage('en');
    });

    langRu.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращает переход по ссылке
        changeLanguage('ru');
    });

    function changeLanguage(lang) {
        let currentUrl = window.location.href;
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