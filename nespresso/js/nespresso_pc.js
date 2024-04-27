// 네스프레소 pc script
// DOMContentLoaded 이벤트를 이용하여 HTML 문서가 모두 로드된 후에 실행될 코드를 작성합니다.
document.addEventListener('DOMContentLoaded', function () {
    // Swiper 초기화 코드를 작성합니다.
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
});
});

var swiper = new Swiper(".collabo", {
    slidesPerView: 2.5,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // 640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        // },
        // 768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        // },
        // 1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        // },
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
