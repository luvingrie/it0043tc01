document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.menu');

    navToggle.addEventListener('click', () => {
        menu.classList.toggle('menu-visible');
    });
});

const typed = new Typed('.multiple-text', {
    strings: ['Phone Number', 'Email', 'Facebook', 'Instagram', 'Twitter'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});
