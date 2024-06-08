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

    //animation for header and navigation on page load

    const header = document.querySelector('.overlay h1');
    const navItems = document.querySelectorAll('.navigation a, nav ul#nav-links li a');

    if(header) {
        header.style.opacity = 0;
    }
    navItems.forEach(link => link.style.opacity = 0);

    setTimeout(() => {
        if(header){
            header.style.transition = 'opacity 1s';
            header.style.opacity = 1;
        }    
        navItems.forEach((link, index) => {
            link.style.transition = 'opasity 1s ${index * 0.2}s';
            link.style.opacity = 1;
        });
    }, 100);

    //smooth scroll for navigation links

    document.querySelectorAll('.navigation a, nav ul#nav-links li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if(href.startsWith('#')){
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

               if(targetElement) {
                  window.scrollTo({
                      top: targetElement.offsetTop,
                      behavior: 'smooth'       
                    });
                }
            }        
        });
    });


    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeModal = document.getElementById("closeModal");

    document.querySelectorAll('.artwork-item img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.nextElementSibling.querySelector('h2').innerHTML;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if(event.target == modal) {
            modal.style.display = "none";
        }
    });

});