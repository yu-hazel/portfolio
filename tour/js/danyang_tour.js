// 단양관광 js

document.getElementById('lang').addEventListener('click', function() {
    const langMenu = document.querySelector('.langMenu');
    if (langMenu) {
        if (langMenu.style.display === 'none' || langMenu.style.display === '') {
            langMenu.style.display = 'flex';
        } else {
            langMenu.style.display = 'none';
        }
    }
})

var swiper = new Swiper(".camping", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});