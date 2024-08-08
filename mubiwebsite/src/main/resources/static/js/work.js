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

    // Массив с именами файлов изображений
    const images = [
        'image7.jpg',
        'image8.jpg',
        'image9.jpg',
        'image10.jpg',
        'image11.jpg',
        'image12.jpg',
        'image13.jpg',
        'image14.jpg',
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
            newItem.innerHTML = `<img src="/images/${image}" alt="${image}">`;
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