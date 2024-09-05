class SpecialHeader extends HTMLElement {
    connectedCallback() { 
        this.innerHTML = `
        <div class="header-container">
            <div class="logo">
                <a href="/en/index">Mubarik Elmurzaeva</a>
            </div>
            <div class="language-switcher">
                <!-- Десктопная версия переключателя языка -->
                <div class="desktop-lang-switcher">
                    <a href="/en/index" id="lang-en">EN</a>
                    <span>|</span>
                    <a href="/ru/index" id="lang-ru">RU</a>
                </div>

                <!-- Мобильная версия переключателя языка -->
                <div class="mobile-lang-switcher">
                    <button class="lang-btn">
                        EN 
                        <svg class="lang-icon" viewBox="0 0 7 7">
                        <polygon points="0,0 7,0 3.5,7" />
                        </svg>
                    </button>
                    <div class="lang-dropdown">
                        <a href="/ru/index" id="lang-ru">RU</a>
                    </div>
                </div>
            </div>
            <div class="menu-icon">
                <img src="/images/Hamburger.svg" alt="Menu" />
            </div>
        </div>
        <div class="header-line"></div>
        <nav class="navigation">
             <ul>
                 <li><a href="/en/work">Portfolio</a></li>
                 <li><a href="/en/about">About me</a></li>
                 <li><a href="/en/contact">Contact</a></li>
             </ul>
         </nav>

        <!-- Навигационное меню -->
        <div class="navigation-panel">
            <nav class="mobile-navigation">
                <div class="language-switcher">
                    <button class="lang-btn">
                        EN 
                        <svg class="lang-icon" viewBox="0 0 7 7">
                            <polygon points="0,0 7,0 3.5,7" />
                        </svg>
                    </button>
                    <div class="lang-dropdown">
                        <a href="/ru/index" id="lang-ru">RU</a>
                    </div>
                </div>
                <div class="menu-icon">
                    <img src="/images/Hamburger.svg" alt="Menu" />
                </div>
                <ul>
                    <li><a href="/en/work">Portfolio</a></li>
                    <li><a href="/en/about">About me</a></li>
                    <li><a href="/en/contact">Contact</a></li>
                </ul>
                <div class="social-icons">
                    <a href="#"><img src="/images/facebook.svg" alt="Facebook"></a>
                    <a href="#"><img src="/images/instagram.svg" alt="Instagram"></a>
                    <a href="#"><img src="/images/whatsapp.svg" alt="WhatsApp"></a>
                </div>
            </nav>
        </div>`;
        this.updateLanguageLinks();
        this.addEventListeners();
        this.highlightActiveLink();
    }

    updateLanguageLinks() {
        const langEnLinks = this.querySelectorAll('#lang-en, #lang-en-mobile');
        const langRuLinks = this.querySelectorAll('#lang-ru, #lang-ru-mobile, #lang-ru-panel');

        const currentPath = window.location.pathname;
        
        langEnLinks.forEach(link => {
            link.href = currentPath.replace('/ru/', '/en/');
        });

        langRuLinks.forEach(link => {
            link.href = currentPath.replace('/en/', '/ru/');
        });
    }

    addEventListeners() {
        const menuIcon = document.querySelector('.menu-icon img');
        const navigationPanel = document.querySelector('.navigation-panel');

        const langBtnHeader = this.querySelector('.mobile-lang-switcher .lang-btn');
        const langDropdownHeader = this.querySelector('.mobile-lang-switcher .lang-dropdown');

        const langBtnPanel = this.querySelector('.navigation-panel .lang-btn');
        const langDropdownPanel = this.querySelector('.navigation-panel .lang-dropdown');

        const backdrop = document.querySelector('.backdrop');
        const body = document.querySelector('body');


        // Обработка клика по гамбургер-меню
        menuIcon.addEventListener('click', () => {
            navigationPanel.classList.toggle('open');
            backdrop.classList.toggle('active');
            body.classList.toggle('blur-background');
        });

        // Обработка клика по гамбургер-меню внутри панели для закрытия
        this.querySelector('.navigation-panel .menu-icon img').addEventListener('click', function() {
            navigationPanel.classList.remove('open');
            backdrop.classList.remove('active'); 
            body.classList.remove('blur-background');
        });

        // Закрытие панели при клике вне её
        window.addEventListener('click', (event) => {
            if (!navigationPanel.contains(event.target) && !menuIcon.contains(event.target)) {
                navigationPanel.classList.remove('open');
                backdrop.classList.remove('active');
                body.classList.remove('blur-background');
            }
        });
        
        // Обработка клика по кнопке переключателя языка в хедере
        langBtnHeader.addEventListener('click', () => {
            langDropdownHeader.classList.toggle('show');
        });

        // Обработка клика по кнопке переключателя языка в навигационной панели
        langBtnPanel.addEventListener('click', () => {
            langDropdownPanel.classList.toggle('show');
        });

        // Закрываем меню языка при клике вне его (для хедера)
        window.addEventListener('click', (e) => {
            if (!langBtnHeader.contains(e.target) && !langDropdownHeader.contains(e.target)) {
                langDropdownHeader.classList.remove('show');
            }
        });

        // Закрываем меню языка при клике вне его (для навигационной панели)
        window.addEventListener('click', (e) => {
            if (!langBtnPanel.contains(e.target) && !langDropdownPanel.contains(e.target)) {
                langDropdownPanel.classList.remove('show');
            }
        });
    }

    highlightActiveLink() {
        const links = this.querySelectorAll('.navigation a');
        links.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });
    }
}

customElements.define('special-header', SpecialHeader);

/* ----------------------------------------------------------------------------------------------------- */

class SpecialHeaderRU extends HTMLElement {
    connectedCallback() { 
        this.innerHTML = `
        <div class="header-container">
            <div class="logo">
                <a href="/ru/index">Mubarik Elmurzaeva</a>
            </div>
            <div class="language-switcher">
                <!-- Десктопная версия переключателя языка -->
                <div class="desktop-lang-switcher">
                    <a href="/en/index" id="lang-en">EN</a>
                    <span>|</span>
                    <a href="/ru/index" id="lang-ru">RU</a>
                </div>

                <!-- Мобильная версия переключателя языка -->
                <div class="mobile-lang-switcher">
                    <button class="lang-btn">
                        RU 
                        <svg class="lang-icon" viewBox="0 0 7 7">
                        <polygon points="0,0 7,0 3.5,7" />
                        </svg>
                    </button>
                    <div class="lang-dropdown">
                        <a href="/en/index" id="lang-en">EN</a>
                    </div>
                </div>
            </div>
            <div class="menu-icon">
                <img src="/images/Hamburger.svg" alt="Меню" />
            </div>
        </div>
        <div class="header-line"></div>
        <nav class="navigation">
             <ul>
                 <li><a href="/ru/work">Портфолио</a></li>
                 <li><a href="/ru/about">Обо мне</a></li>
                 <li><a href="/ru/contact">Контакты</a></li>
             </ul>
         </nav>

        <!-- Навигационное меню -->
        <div class="navigation-panel">
            <nav class="mobile-navigation">
                <div class="language-switcher">
                    <button class="lang-btn">
                        RU
                        <svg class="lang-icon" viewBox="0 0 7 7">
                            <polygon points="0,0 7,0 3.5,7" />
                        </svg>
                    </button>
                    <div class="lang-dropdown">
                        <a href="/en/index" id="lang-en">EN</a>
                    </div>
                </div>
                <div class="menu-icon">
                    <img src="/images/Hamburger.svg" alt="Меню" />
                </div>
                <ul>
                    <li><a href="/ru/work">Портфолио</a></li>
                    <li><a href="/ru/about">Обо мне</a></li>
                    <li><a href="/ru/contact">Контакты</a></li>
                </ul>
                <div class="social-icons">
                    <a href="#"><img src="/images/facebook.svg" alt="Facebook"></a>
                    <a href="#"><img src="/images/instagram.svg" alt="Instagram"></a>
                    <a href="#"><img src="/images/whatsapp.svg" alt="WhatsApp"></a>
                </div>
            </nav>
        </div>`;
        this.updateLanguageLinks();
        this.addEventListeners();
        this.highlightActiveLink();
    }

    updateLanguageLinks() {
        const langEnLinks = this.querySelectorAll('#lang-en, #lang-en-mobile, #lang-en-panel');
        const langRuLinks = this.querySelectorAll('#lang-ru, #lang-ru-mobile');

        const currentPath = window.location.pathname;
        
        langEnLinks.forEach(link => {
            link.href = currentPath.replace('/ru/', '/en/');
        });

        langRuLinks.forEach(link => {
            link.href = currentPath.replace('/en/', '/ru/');
        });
    }

    addEventListeners() {
        const menuIcon = document.querySelector('.menu-icon img');
        const navigationPanel = document.querySelector('.navigation-panel');

        const langBtnHeader = this.querySelector('.mobile-lang-switcher .lang-btn');
        const langDropdownHeader = this.querySelector('.mobile-lang-switcher .lang-dropdown');

        const langBtnPanel = this.querySelector('.navigation-panel .lang-btn');
        const langDropdownPanel = this.querySelector('.navigation-panel .lang-dropdown');

        const backdrop = document.querySelector('.backdrop');
        const body = document.querySelector('body');

        // Обработка клика по гамбургер-меню
        menuIcon.addEventListener('click', () => {
            navigationPanel.classList.toggle('open');
            backdrop.classList.toggle('active');
            body.classList.toggle('blur-background');
        });

        // Обработка клика по гамбургер-меню внутри панели для закрытия
        this.querySelector('.navigation-panel .menu-icon img').addEventListener('click', function() {
            navigationPanel.classList.remove('open');
            backdrop.classList.remove('active'); 
            body.classList.remove('blur-background');
        });

        // Закрытие панели при клике вне неё
        window.addEventListener('click', (event) => {
            if (!navigationPanel.contains(event.target) && !menuIcon.contains(event.target)) {
                navigationPanel.classList.remove('open');
                backdrop.classList.remove('active');
                body.classList.remove('blur-background');
            }
        });

        // Обработка клика по кнопке переключателя языка в хедере
        langBtnHeader.addEventListener('click', (e) => {
            langDropdownHeader.classList.toggle('show');
        });

        // Обработка клика по кнопке переключателя языка в навигационной панели
        langBtnPanel.addEventListener('click', () => {
            langDropdownPanel.classList.toggle('show');
        });

        // Закрываем меню языка при клике вне его (для хедера)
        window.addEventListener('click', (e) => {
            if (!langBtnHeader.contains(e.target) && !langDropdownHeader.contains(e.target)) {
                langDropdownHeader.classList.remove('show');
            }
        });

        // Закрываем меню языка при клике вне его (для навигационной панели)
        window.addEventListener('click', (e) => {
            if (!langBtnPanel.contains(e.target) && !langDropdownPanel.contains(e.target)) {
                langDropdownPanel.classList.remove('show');
            }
        });
    }

    highlightActiveLink() {
        const links = this.querySelectorAll('.navigation a');
        links.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });
    }
}

customElements.define('special-header-ru', SpecialHeaderRU);

/* ----------------------------------------------------------------------------------------------------- */

class SpecialFooter extends HTMLElement {
    connectedCallback() { 
        this.innerHTML = `
        <div class="footer-container">
            <div class="footer-line"></div>
            <div class="social-icons">
                <a href="https://www.facebook.com/yourpage" target="_blank">
                    <img src="/images/facebook.svg" alt="Facebook">
                </a>
                <a href="" target="_blank">
                    <img src="/images/instagram.svg" alt="Instagram">
                </a>
                <a href="https://api.whatsapp.com/send?phone=79289087265" target="_blank">
                    <img src="/images/whatsapp.svg" alt="Twitter">
                </a>
            </div>
        </div>`;
    }
}

customElements.define('special-footer', SpecialFooter);