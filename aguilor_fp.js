document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.menu');

    navToggle.addEventListener('click', () => {
        menu.classList.toggle('menu-visible');
    });
});
