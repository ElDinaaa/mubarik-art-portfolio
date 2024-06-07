document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden' ;
        } else {
            document.body.style.overflow = 'auto' ;
        }
    });

    const header = document.querySelector('.overlay h1');
    const navItems = document.querySelectorAll('.navigation a');

    header.style.opacity = 0;
    navItems.forEach(link => link.style.opacity = 0);

    setTimeout(() => {
        header.style.transition = 'opacity 1s';
        header.style.opacity = 1;
        navItems.forEach((link, index) => {
            link.style.transition = 'opasity 1s ${index * 0.2}s';
            link.style.opacity = 1;
        });
    }, 100);

});