document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('view-more-btn');
    const galleryContainer = document.querySelector('.gallery-container');
    const gallery = document.getElementById('gallery');
    let page = 1; // Номер текущей страницы
    const itemsPerPage = 6; // Количество элементов на странице
    const heightIncrement = 1854; 

    // Массив с именами файлов изображений и названиями картин
    const images = [
       
        { 
            src: 'image7.jpg', 
            title: '«Название картины7»', 
            material: 'Watercolor7', 
            description: 'Описание картины 7' ,
            secondDescription: 'Второе описание картины7' },
        { 
            src: 'image8.jpg', 
            title: '«Название картины»8', 
            material: 'Oil8',
            description: 'Описание картины 8' ,
            secondDescription: 'Второе описание картины8' },
        { 
            src: 'image9.jpg', 
            title: '«Название картины9»', 
            material: 'чем написана9',
            description: 'Описание картины 9' ,
            secondDescription: 'Второе описание картины9' },
        { 
            src: 'image10.jpg', 
            title: '«Название картины10»', 
            material: 'чем написана10',
            description: 'Описание картины 10' ,
            secondDescription: 'Второе описание картины10' },
        { 
            src: 'image11.jpg', 
            title: '«Название картины11»', 
            material: 'чем написана11',
            description: 'Описание картины 11' ,
            secondDescription: 'Второе описание картины11' },  
        { 
            src: 'image12.jpg', 
            title: '«Название картины12»', 
            material: 'чем написана12',
            description: 'Описание картины 12' ,
            secondDescription: 'Второе описание картины12' },  
        { 
            src: 'image13.jpg', 
            title: '«Название картины13»', 
            material: 'чем написана13',
            description: 'Описание картины 13' ,
            secondDescription: 'Второе описание картины13' },          
        { 
            src: 'image14.jpg', 
            title: '«Название картины14»', 
            material: 'чем написана14',
            description: 'Описание картины 14' ,
            secondDescription: 'Второе описание картины14' },
        { 
            src: 'image15.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 15' ,
            secondDescription: 'Второе описание картины' },
        { 
            src: 'image16.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 16' ,
            secondDescription: 'Второе описание картины' },
        { 
            src: 'image17.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 17' ,
            secondDescription: 'Второе описание картины' },
        { 
            src: 'image18.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 18' ,
            secondDescription: 'Второе описание картины' },
        { 
            src: 'image19.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 19' ,
            secondDescription: 'Второе описание картины' },
        { 
            src: 'image20.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 20' ,
            secondDescription: 'Второе описание картины' },
        { 
            src: 'image21.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 21' ,
            secondDescription: 'Второе описание картины' },
        { 
            src: 'image22.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 22' ,
            secondDescription: 'Второе описание картины' },
        { 
            src: 'image23.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины ' ,
            secondDescription: 'Второе описание картины' },
    ];

    loadMoreBtn.addEventListener('click', () => {
        loadMoreContent(page);
        page++;
        increaseGalleryContainerHeight();
    });

    function loadMoreContent(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToLoad = images.slice(startIndex, endIndex);

        itemsToLoad.forEach((image, index) => {
            const newItem = document.createElement('li');
            const itemIndex = startIndex + index + 7; 
            newItem.className = `gallery-item item-${itemIndex}`;
            newItem.innerHTML = `
                <img src="/images/${image.src}" alt="${image.title}" data-description="${image.description}" data-second-description="${image.secondDescription}" data-title="${image.title}" data-material="${image.material}">
                <h3 class="image-title">${image.title}</h3>
                <p class="image-material">${image.material}</p>`;
            gallery.appendChild(newItem);
        });

        // Перемещаем кнопку вниз после добавления новых элементов
        const lastItem = gallery.querySelector(`.item-${startIndex + itemsPerPage}`);
        const lastItemOffsetTop = lastItem.offsetTop + lastItem.offsetHeight;
        loadMoreBtn.style.marginTop = `${lastItemOffsetTop + 20}px`;

        // Если все изображения загружены, скрыть кнопку
        if (endIndex >= images.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    function increaseGalleryContainerHeight() {
        let currentHeight = galleryContainer.offsetHeight;
        let newHeight = currentHeight + heightIncrement;
        galleryContainer.style.height = `${newHeight - 40}px`;
    }

    // Устанавливаем начальную высоту для galleryContainer
    galleryContainer.style.height = `${heightIncrement}px`;

    // Создаем и добавляем модальное окно в DOM
    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');
    document.body.appendChild(overlay);

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'none';  // Изначально скрываем модальное окно
    modal.innerHTML = `
        <div class="modal-content">
            <div class="rectangle">
                <img src="" alt="">
                <div class="text-container">
                    <h3 class="modal-title"></h3>
                    <br>
                    <p class="modal-description"></p>
                </div>
                <div class="rectangle-material">
                    <p class="modal-material"></p> 
                </div>
                <div class="line-element"></div> <!-- Новая линия -->
                    <div class="vertical-line-element"></div> <!-- Новая вертикальная линия -->
                    <div class="new-rectangle">
                    <p class="second-description"></p> <!-- Второе описание картины -->
                    <button class="order-now-btn">
                        <span class="star-icon"></span>
                        Order now
                        <span class="star-icon"></span>
                    </button>
                </div> 
            </div>
        </div>`;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('.modal-content img');
    const modalTitle = modal.querySelector('.modal-title');
    const modalMedium = modal.querySelector('.modal-material');
    const modalDescription = modal.querySelector('.modal-description');
    const modalSecondDescription = modal.querySelector('.second-description');

    // Показ модального окна по клику на изображение
    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            e.stopPropagation();

            const imgElement = e.target;
            // const galleryItem = imgElement.closest('.gallery-item');
            // const index = Array.from(gallery.children).indexOf(galleryItem);

            // Установка координат для модального окна
            const rect = imgElement.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            modal.style.top = `${rect.top + scrollTop - 150}px`;

            modal.style.display = 'flex'; // Показываем модальное окно
            overlay.style.display = 'block'; // Показываем затемнение

           // Извлечение данных из атрибутов data-*
           modalImg.src = imgElement.src;
           modalTitle.textContent = imgElement.dataset.title;
           modalMedium.textContent = imgElement.dataset.material;
           modalDescription.textContent = imgElement.dataset.description;
           modalSecondDescription.textContent = imgElement.dataset.secondDescription;
        }
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (e) => {
        if (modal.style.display === 'flex' && !modal.querySelector('.modal-content').contains(e.target)) {
            modal.style.display = 'none';
            overlay.style.display = 'none'; 
        }
    });

    // Обработчик для кнопки "ORDER NOW"
    const orderNowBtn = modal.querySelector('.order-now-btn');
    orderNowBtn.addEventListener('click', () => {
        window.location.href = '/en/contact'; // Переход на страницу "CONTACT"
    });
});