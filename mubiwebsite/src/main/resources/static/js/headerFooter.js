class SpecialHeader extends HTMLElement {
    connectedCallback() { 
        this.innerHTML = `
        <div class="header-container">
            <div class="logo">
                <a href="/en/index">Mubarik Elmurzaeva</a>
            </div>
            <nav class="navigation">
                <ul>
                    <li><a href="/en/work">Portfolio</a></li>
                    <li><a href="/en/about">About me</a></li>
                    <li><a href="/en/contact">Contact</a></li>
                    <li class="language-switcher">
                        <a href="/en/index" id="lang-en">En</a> | <a href="/ru/index" id="lang-ru">Рус</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="header-line"></div>`;
    }
}

customElements.define('special-header', SpecialHeader);

class SpecialHeaderRU extends HTMLElement {
    connectedCallback() { 
        this.innerHTML = `
        <div class="header-container">
            <div class="logo">
                <a href="/ru/index">Мубарик Эльмурзаева</a>
            </div>
            <nav class="navigation">
                <ul>
                    <li><a href="/ru/work">Портфолио</a></li>
                    <li><a href="/ru/about">Обо мне</a></li>
                    <li><a href="/ru/contact">Контакты</a></li>
                    <li class="language-switcher">
                        <a href="/en/index" id="lang-en">En</a> | <a href="/ru/index" id="lang-ru">Рус</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="header-line"></div>`;
    }
}

customElements.define('special-header-ru', SpecialHeaderRU);