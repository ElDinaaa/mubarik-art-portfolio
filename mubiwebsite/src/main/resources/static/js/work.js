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
        { src: 'image7.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image8.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image9.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image10.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image11.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image12.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image13.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image14.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image15.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image16.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image17.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image18.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image19.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image20.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image21.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image22.jpg', title: '«Название картины»', description: 'чем написана' },
        { src: 'image23.jpg', title: '«Название картины»', description: 'чем написана' },
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
                <p class="image-description">${image.description}</p>`;
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
});