// script.js

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('header-transparent');
        } else {
            header.classList.remove('header-transparent');
        }
    });
});
