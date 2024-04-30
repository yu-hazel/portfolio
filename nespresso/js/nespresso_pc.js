// 네스프레소 pc script
// DOMContentLoaded 이벤트를 이용하여 HTML 문서가 모두 로드된 후에 실행될 코드
document.addEventListener('DOMContentLoaded', function () {
    // Swiper 초기화 코드
    var swiper = new Swiper(".main", {
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

    var swiper = new Swiper(".bestItem", {
        slidesPerView: 4,
        spaceBetween: 50,
        freeMode: true,
        // 내 css가 먹히기 위해  .. ...
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            360: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },          
            470: {
                slidesPerView: 2,
                spaceBetween: 20,
            },          
            710: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            910: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1130: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
});
});

// 햄버거 버튼을 클릭했을 때 메뉴를 토글하는 함수
function toggleMenu() {
    var menu = document.querySelector(".accordion");
    menu.classList.toggle("show");
}

// 닫기 버튼을 클릭했을 때 메뉴를 숨기는 함수
function closeMenu() {
    var menu = document.querySelector(".accordion");
    menu.classList.remove("show");
}

var swiper = new Swiper(".collabo", {
    slidesPerView: 2.5,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        775: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1300: {
            slidesPerView: 2.5,
            spaceBetween: 50,
        },
    },
});

// 페이지 최상단으로 스크롤 이동하는 함수
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드러운 스크롤
    });
}

// 페이지 최상단으로 이동하는 버튼에 클릭 이벤트를 추가
document.querySelector('.pageTop').addEventListener('click', scrollToTop);
