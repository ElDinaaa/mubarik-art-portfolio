document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('categoryFilter');
    const artworkItems = Array.from(document.querySelectorAll('.artwork-item'));

    // Добавляем обработчик события 'change' к элементу фильтра категорий
    categoryFilter.addEventListener('change', filterAndSort);
    
    // Функция фильтрации и сортировки
    function filterAndSort() {
        // Получаем выбранную категорию
        const category = categoryFilter.value;
        let filteredItems = artworkItems;

        // Если выбранная категория не 'all', фильтруем элементы по категории
        if(category !== 'all') {
            filteredItems = artworkItems.filter(item => item.dataset.category.split(' ').includes(category));
        }
        // Находим контейнер для отображения элементов искусства
        const artworkContainer = document.querySelector('.artwork');
        // Очищаем содержимое контейнера
        artworkContainer.innerHTML = '';

        // Если после фильтрации нет элементов, показываем сообщение об отсутствии результатов
        if(filteredItems.length === 0){
            document.getElementById('no-results-message').classList.remove('hidden');
        } else {
            // Иначе скрываем сообщение об отсутствии результатов и добавляем отфильтрованные элементы в контейнер
            document.getElementById('no-results-message').classList.add('hidden');
            filteredItems.forEach(item => {
                artworkContainer.appendChild(item);
            });
        }
    }    
    // Выполняем фильтрацию и сортировку при загрузке страницы
    filterAndSort();
});