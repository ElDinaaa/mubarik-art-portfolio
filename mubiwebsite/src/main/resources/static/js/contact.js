document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Создаем элементы для отображения ошибок и добавляем их после соответствующих полей ввода
    const nameError = document.createElement('div');
    nameError.id = 'error';
    nameInput.parentNode.insertBefore(nameError, nameInput.nextSibling);

    const emailError = document.createElement('div');
    emailError.id = 'error';
    emailInput.parentNode.insertBefore(emailError, emailInput.nextSibling);

    const messageError = document.createElement('div');
    messageError.id = 'error';
    messageInput.parentNode.insertBefore(messageError, messageInput.nextSibling);

    // Добавляем обработчики события 'blur', которык проверяют значение поля ввода при потере фокуса и обновляют сообщение об ошибке в зависимости от результата валидации.
    nameInput.addEventListener('blur', () => {
        const nameValue = nameInput.value.trim();
        if(!validateName(nameValue)) {
            nameError.textContent = 'Please enter a valid name.';
        } else {
            nameError.textContent = '';
        }
    });

    emailInput.addEventListener('blur', () => {
        const emailValue = emailInput.value.trim();
        if (!validateEmail(emailValue)) {
            emailError.textContent = 'Please enter a valid email address.';
        } else {
            emailError.textContent = '';
        }
    });

    messageInput.addEventListener('blur', () => {
        const messageValue = messageInput.value.trim();
        if (messageValue === '') {
            messageError.textContent = 'Please enter a message.';
        } else {
            messageError.textContent = '';
        }
    });

    // Добавляем обработчик события 'submit' для формы
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        const formData = { name, email, message };

        let isValid = true;
        // Проверка валидности имени
        if (!validateName(name)) {
            nameError.textContent = 'Please enter a valid name.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Проверка валидности email
        if (!validateEmail(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Проверка наличия сообщения
        if (message === '') {
            messageError.textContent = 'Please enter a message.';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        // Если все поля валидны, отправляем данные формы на сервер
        if(isValid) {
            formMessage.innerHTML = 'Sending...';
            formMessage.style.color = 'blue';

            fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    formMessage.textContent = 'Message sent successfully!';
                    formMessage.style.color = 'green';
                    form.reset();
                } else {
                    formMessage.textContent = 'There was an error submitting your message.';
                    formMessage.style.color = 'red';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                formMessage.textContent = 'There was an error submitting your message.';
                formMessage.style.color = 'red';
            });
        }
    });

    // Функция для валидации имени
    function validateName(name) {
        const re = /^[A-Za-z\s]+$/;
        return re.test(String(name));
    }

    // Функция для валидации email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});