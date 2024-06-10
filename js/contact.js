document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.createElement('div');
    nameError.id = 'error';
    nameInput.parentNode.insertBefore(nameError, nameInput.nextSibling);

    const emailError = document.createElement('div');
    emailError.id = 'error';
    emailInput.parentNode.insertBefore(emailError, emailInput.nextSibling);

    const messageError = document.createElement('div');
    messageError.id = 'error';
    messageInput.parentNode.insertBefore(messageError, messageInput.nextSibling);

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

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        let isValid = true;

        if (!validateName(name)) {
            nameError.textContent = 'Please enter a valid name.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        if (!validateEmail(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (message === '') {
            messageError.textContent = 'Please enter a message.';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        formMessage.innerHTML = 'Sending...';
        formMessage.style.color = 'blue';

        setTimeout(() => {
            formMessage.innerHTML = 'Message sent successfully!';
            formMessage.style.color = 'green';
            form.reset();
        }, 1000);
    });

    function validateName(name) {
        const re = /^[A-Za-z\s]+$/;
        return re.test(String(name));
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});