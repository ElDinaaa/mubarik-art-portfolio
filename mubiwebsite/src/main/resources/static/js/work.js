// document.addEventListener('DOMContentLoaded', () => {
//     const categoryFilter = document.getElementById('categoryFilter');
//     const artworkItems = Array.from(document.querySelectorAll('.artwork-item'));

//     // Добавляем обработчик события 'change' к элементу фильтра категорий
//     categoryFilter.addEventListener('change', filterAndSort);
    
//     // Функция фильтрации и сортировки
//     function filterAndSort() {
//         // Получаем выбранную категорию
//         const category = categoryFilter.value;
//         let filteredItems = artworkItems;

//         // Если выбранная категория не 'all', фильтруем элементы по категории
//         if(category !== 'all') {
//             filteredItems = artworkItems.filter(item => item.dataset.category.split(' ').includes(category));
//         }
//         // Находим контейнер для отображения элементов искусства
//         const artworkContainer = document.querySelector('.artwork');
//         // Очищаем содержимое контейнера
//         artworkContainer.innerHTML = '';

//         // Если после фильтрации нет элементов, показываем сообщение об отсутствии результатов
//         if(filteredItems.length === 0){
//             document.getElementById('no-results-message').classList.remove('hidden');
//         } else {
//             // Иначе скрываем сообщение об отсутствии результатов и добавляем отфильтрованные элементы в контейнер
//             document.getElementById('no-results-message').classList.add('hidden');
//             filteredItems.forEach(item => {
//                 artworkContainer.appendChild(item);
//             });
//         }
//     }    
//     // Выполняем фильтрацию и сортировку при загрузке страницы
//     filterAndSort();
// });

document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('view-more-btn');
    const gallery = document.getElementById('gallery');
    let page = 1; // Номер текущей страницы
    const itemsPerPage = 6; // Количество элементов на странице

    // Массив с именами файлов изображений и названиями картин
    const images = [
        { 
            src: 'image7.jpg', 
            title: '«Название картины»', 
            material: 'Watercolor', // чем написано
            description: 'Описание картины 7' // описание картины
        },
        { 
            src: 'image8.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 8' },
        { 
            src: 'image9.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 9' },
        { 
            src: 'image10.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 10' },
        { 
            src: 'image11.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 11' },  
        { 
            src: 'image12.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 12' },  
        { 
            src: 'image13.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 13' },          
        { 
            src: 'image14.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 14' },
        { 
            src: 'image15.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 15' },
        { 
            src: 'image16.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 16' },
        { 
            src: 'image17.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 17' },
        { 
            src: 'image18.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 18' },
        { 
            src: 'image19.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 19' },
        { 
            src: 'image20.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 20' },
        { 
            src: 'image21.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 21' },
        { 
            src: 'image22.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины 22' },
        { 
            src: 'image23.jpg', 
            title: '«Название картины»', 
            material: 'чем написана',
            description: 'Описание картины ' },
    ];

    loadMoreBtn.addEventListener('click', () => {
        loadMoreContent(page);
        page++;
    });

    function loadMoreContent(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToLoad = images.slice(startIndex, endIndex);

        itemsToLoad.forEach((image, index) => {
            const newItem = document.createElement('li');
            const itemIndex = startIndex + index + 7; // Смещение на 7 для корректного нумерации 
            newItem.className = `gallery-item item-${itemIndex}`;
            newItem.innerHTML = `
                <img src="/images/${image.src}" alt="${image.title}">
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

    // Создаем и добавляем модальное окно в DOM
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'none';  // Изначально скрываем модальное окно
    modal.innerHTML = `
        <span class="close-btn">&times;</span>
        <div class="modal-content">
            <img src="" alt="">
            <div class="text-container">
                <h3 class="modal-title"></h3>
                <p class="modal-material"></p>
                <p class="modal-description"></p>
            </div>
        </div>`;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('.modal-content img');
    const modalTitle = modal.querySelector('.modal-title');
    const modalMedium = modal.querySelector('.modal-material');
    const modalDescription = modal.querySelector('.modal-description');
    const closeBtn = modal.querySelector('.close-btn');

    // Показ модального окна по клику на изображение
    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const imgElement = e.target;
            const galleryItem = imgElement.closest('.gallery-item');
            const index = Array.from(gallery.children).indexOf(galleryItem);

            modal.style.display = 'flex'; // Показываем модальное окно
            modalImg.src = imgElement.src;
            modalTitle.textContent = images[index].title;
            modalMedium.textContent = images[index].material; // Здесь выводим "чем написана"
            modalDescription.textContent = images[index].description; // Здесь описание картины
        }
    });

    // Закрытие модального окна по клику на крестик
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'; // Скрываем модальное окно
    });

    // Закрытие модального окна по клику вне содержимого
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});