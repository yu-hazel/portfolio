// 단양관광 js

document.getElementById("header").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#fff"; // 호버 시 배경색 변경

    var links = this.querySelectorAll('.headerGroup01 a, .headerGroup02 a, .langSelect, .logo, .gnb > li > a, .searchIcon'); // .headerGroup01 클래스 하위의 모든 a 태그 선택
    links.forEach(function(link) {
        link.style.color = "#000"; // 링크 텍스트 색상 변경
    });

    document.querySelector('.searchIcon').style.backgroundImage = 'url("/portfolio/tour/img/search_black.png")';
    
});

document.getElementById("header").addEventListener("mouseout", function() {
    this.style.backgroundColor = "rgba(0, 0, 0, 0)"; // 마우스가 벗어날 때 다시 원래의 배경색으로 변경

    var links = this.querySelectorAll('.headerGroup01 a, .headerGroup02 a, .langSelect, .logo, .gnb > li > a, .searchIcon'); // .headerGroup01 클래스 하위의 모든 a 태그 선택
    links.forEach(function(link) {
        link.style.color = "#fff"; // 링크 텍스트 색상 변경
    });

    document.querySelector('.searchIcon').style.backgroundImage = 'url("/portfolio/tour/img/search.png")';
});

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

var swiper = new Swiper(".main", {
    loop: true,
    spaceBetween: 0,
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

var swiper = new Swiper(".theme", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".camping", {
    loop: true,
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

document.getElementById('facebook').addEventListener('change', function() {
    if(this.checked) {
        document.getElementById('targetImg').src = '/portfolio/tour/img/facebook_active.png';
    }
});