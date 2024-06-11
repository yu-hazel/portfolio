// 단양관광 js

// 메인 gnb 배경 색 변경
document.getElementById("header").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#fff"; // 호버 시 배경색 변경

    let links = this.querySelectorAll('.headerGroup01 a, .headerGroup02 a, .langSelect, .logo, .gnb > li > a, .searchIcon'); // .headerGroup01 클래스 하위의 모든 a 태그 선택
    links.forEach(function(link) {
        link.style.color = "#000"; // 링크 텍스트 색상 변경
    });

    document.querySelector('.searchIcon').style.backgroundImage = 'url("/portfolio/tour/img/search_black.png")';
    
});

document.getElementById("header").addEventListener("mouseout", function() {
    this.style.backgroundColor = "rgba(0, 0, 0, 0)";
    let links = this.querySelectorAll('.headerGroup01 a, .headerGroup02 a, .langSelect, .logo, .gnb > li > a, .searchIcon');
    links.forEach(function(link) {
        link.style.color = "#fff";
    });
    document.querySelector('.searchIcon').style.backgroundImage = 'url("/portfolio/tour/img/search.png")';
});


// language 드롭다운
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

// swiper js 모음
var swiper = new Swiper(".main", {
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
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
    slidesPerView: 2.1,
    spaceBetween: 10,
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
        delay: 3500,
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

// 퀵메뉴 sec02~sec04 고정
window.addEventListener('scroll', function() {
    let quickMenu = document.getElementById('quickMenu');
    let secondSection = document.querySelector('.sec02');
    let fourthSection = document.querySelector('.sec04');
    let secondRect = secondSection.getBoundingClientRect();
    let fourthRect = fourthSection.getBoundingClientRect();

    if (secondRect.top <= 0 && fourthRect.bottom > 10) {
        quickMenu.classList.add('fixed');
    } else {
        quickMenu.classList.remove('fixed');
    }
});


// sec02 테마여행 탭구조
let themeBt = document.querySelectorAll(".themeSelect span");
let themeContent = document.querySelectorAll(".themeContent .swiper.theme");

themeBt.forEach((eachBt, index) => {
    eachBt.addEventListener('click', function() {
        for (const bt of themeBt) bt.classList.remove("on");
        for (const content of themeContent) content.classList.remove("on");

        themeContent[index].classList.add("on");
        this.classList.add("on");
    });
});
themeBt[0].click();


// sec03 캠핑장 예약 버튼 클릭시 링크 이동
const cheondongUrl = 'https://mirihae.com/dytc/camping/V39628874';
const daegangUrl = 'https://mirihae.com/dytc/camping/Y88593737';
const darianUrl = 'https://mirihae.com/dytc/camping/G24526799';
const soseonamUrl = 'https://mirihae.com/dytc/camping/Q49993865';

const campingBtUrls = {
    cheondongBt: cheondongUrl,
    daegangBt: daegangUrl,
    darianBt: darianUrl,
    soseonamBt: soseonamUrl,
};

Object.keys(campingBtUrls).forEach(id => {
    document.getElementById(id).addEventListener('click', () => {
        window.location.href = campingBtUrls[id];
    });
});


// SNS 탭구조
let snsBt = document.querySelectorAll(".snsSelect div");
let snsContent = document.querySelectorAll(".snsContents .con");

snsBt.forEach((eachBt, index) => {
    eachBt.addEventListener('click', function() {
        for (const bt of snsBt) bt.classList.remove("on");
        for (const content of snsContent) content.classList.remove("on");

        snsContent[index].classList.add("on");
        this.classList.add("on");
    })
})
snsBt[0].click();

// footer 드롭다운
let serviceBt = document.querySelectorAll(".serviceBox div");
let serviceDrop = document.querySelectorAll(".serviceDropdown");

serviceBt.forEach((eachBt, index) => {
    eachBt.addEventListener('click', function() {
        serviceDrop[index].classList.toggle("on");
    })
})
