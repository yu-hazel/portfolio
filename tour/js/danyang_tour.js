// 단양관광 js

// 메인 gnb 배경 색 변경
// document.getElementById("header").addEventListener("mouseover", function() {
//     this.style.backgroundColor = "#fff";
//     let links = this.querySelectorAll('.headerGroup01 a, .headerGroup02 a, .langSelect, .logo, .gnb > li > a, .searchIcon');
//     links.forEach(function(link) {
//         link.style.color = "#000";
//     });
//     document.querySelector('.searchIcon').style.backgroundImage = 'url("/portfolio/tour/img/search_black.png")';    
// });

// document.getElementById("header").addEventListener("mouseout", function() {
//     this.style.backgroundColor = "rgba(0, 0, 0, 0)";
//     let links = this.querySelectorAll('.headerGroup01 a, .headerGroup02 a, .langSelect, .logo, .gnb > li > a, .searchIcon');
//     links.forEach(function(link) {
//         link.style.color = "#fff";
//     });
//     document.querySelector('.searchIcon').style.backgroundImage = 'url("/portfolio/tour/img/search.png")';
// });

// AOS 제어
function initializeAOS() {
    if (window.innerWidth < 1240) {
        AOS.init({
            disable: true
        });
    } else {
        AOS.init({
            disable: false
        });
    }
}
// 초기 로드 시 실행
initializeAOS();
// 화면 크기가 변경될 때마다 실행
window.addEventListener('resize', function() {
    // AOS를 재초기화하기 전에 AOS 인스턴스 제거
    AOS.refreshHard();
    initializeAOS();
});


// 메인 gnb 배경 색 변경, (width 1240px~)
function updateHeaderStyles() {
    if (window.innerWidth >= 1240) {
        document.getElementById("header").addEventListener("mouseover", mouseOverHandler);
        document.getElementById("header").addEventListener("mouseout", mouseOutHandler);
    } else {
        document.getElementById("header").removeEventListener("mouseover", mouseOverHandler);
        document.getElementById("header").removeEventListener("mouseout", mouseOutHandler);
    }
}
function mouseOverHandler() {
    this.style.backgroundColor = "#fff";
    let links = this.querySelectorAll('.headerGroup01 a, .headerGroup02 a, .langSelect, .logo, .gnb > li > a, .searchIcon');
    links.forEach(function(link) {
        link.style.color = "#000";
    });
    document.querySelector('.searchIcon').style.backgroundImage = 'url("/portfolio/tour/img/search_black.png")';
}
function mouseOutHandler() {
    this.style.backgroundColor = "rgba(0, 0, 0, 0)";
    let links = this.querySelectorAll('.headerGroup01 a, .headerGroup02 a, .langSelect, .logo, .gnb > li > a, .searchIcon');
    links.forEach(function(link) {
        link.style.color = "#fff";
    });
    document.querySelector('.searchIcon').style.backgroundImage = 'url("/portfolio/tour/img/search.png")';
}
// 초기 로드 시 실행
updateHeaderStyles();
// 윈도우 리사이즈 시 실행
window.addEventListener('resize', updateHeaderStyles);


// tab) searchIcon 클릭시 메뉴 노출, close 클릭시 메뉴 사라짐
document.getElementById('searchIcon').addEventListener('click', function(){
    document.getElementById('gnb').classList.add('on');
})
document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('gnb').classList.remove('on');
})


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
    breakpoints: {
        320: {
            slidesPerView: 1.2,
        },
        458: {
            slidesPerView: 1.5,
        },
        770: {
            slidesPerView: 2.3,
            // spaceBetween: 30,
        },
        920: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1240: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        }
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
let themeBt = document.querySelectorAll(".themeSelect a");
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

// sec02 테마여행 각 카드 클릭시 sub.html로 이동
document.addEventListener("DOMContentLoaded", function() {
    const themeCards = [
        { element: themeCard01, url: 'danyang_sub.html?fetch=81' },
        { element: themeCard02, url: 'danyang_sub.html?fetch=82' },
        { element: themeCard03, url: 'danyang_sub.html?fetch=83' },
        { element: themeCard04, url: 'danyang_sub.html?fetch=84' },
        { element: themeHealing01, url: 'danyang_sub.html?fetch=h1' },
        { element: themeHealing02, url: 'danyang_sub.html?fetch=h2' },
        { element: themeHealing03, url: 'danyang_sub.html?fetch=h3' },
        { element: themeHealing04, url: 'danyang_sub.html?fetch=h4' },
        { element: themeAct01, url: 'danyang_sub.html?fetch=a1' },
        { element: themeAct02, url: 'danyang_sub.html?fetch=a2' },
        { element: themeAct03, url: 'danyang_sub.html?fetch=a3' },
        { element: themeAct04, url: 'danyang_sub.html?fetch=a4' },
        { element: themeHeritage01, url: 'danyang_sub.html?fetch=he1' },
        { element: themeHeritage02, url: 'danyang_sub.html?fetch=he2' },
        { element: themeHeritage03, url: 'danyang_sub.html?fetch=he3' },
        { element: themeHeritage04, url: 'danyang_sub.html?fetch=he4' },
    ];

    themeCards.forEach(card => {
        card.element.addEventListener('click', function() {
            window.location.href = card.url;
        });
    });
});

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
