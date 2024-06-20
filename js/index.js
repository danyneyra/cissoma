// script.js
AOS.init()

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('navbar');

    //Deslizamiento de Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('header-transparent');
        } else {
            header.classList.remove('header-transparent');
        }
    });

});
