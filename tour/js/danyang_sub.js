var swiper = new Swiper(".tourCards", {
    slidesPerView: 5,
    spaceBetween: 50,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// 한국관광공사 api 활용

const slides = document.querySelectorAll('.swiper-slide > img');
const tourLo = document.querySelector('.tourLocat p')

async function fetchData8() {
    const url = '../js/korea_tour_danyang.json';
    // html 파일 기준으로 경로 작성
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.danyang);

        for (let i = 0; i < slides.length; i++) {
            slides[i].src = `${data.danyang[30 + i].firstimage}`;
            slides[i].addEventListener('click', () => {
                tourName.textContent = `${data.danyang[30 + i].title}`;
                tourLo.textContent = `${data.danyang[30 + i].addr1}`;
                tourDetail.textContent = `${data.danyang[30 + i].detail}`;
                tourImg.src = `${data.danyang[30 + i].firstimage}`;
            })
        }
    } catch (error) {
        console.log('한국관광공사 api 패치 에러 : ', error);
    }
}
// fetchData8();

async function fetchDataH() {
    const url = '../js/danyang_healing.json';
    // html 파일 기준으로 경로 작성
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.danyang);

        for (let i = 0; i < slides.length; i++) {
            slides[i].src = `${data.danyang[i].firstimage}`;
            slides[i].addEventListener('click', () => {
                tourName.textContent = `${data.danyang[i].title}`;
                tourLo.textContent = `${data.danyang[i].addr1}`;
                tourDetail.textContent = `${data.danyang[i].detail}`;
                tourImg.src = `${data.danyang[i].firstimage}`;
            })
        }
        tourName.textContent = `${data.danyang[0].title}`
        tourLo.textContent = `${data.danyang[0].addr1}`
        tourDetail.textContent = `${data.danyang[0].detail}`
        tourImg.src = `${data.danyang[0].firstimage}`

    } catch (error) {
        console.log('한국관광공사 api 패치 에러 : ', error);
    }
}
// fetchDataH();

async function fetchDataA() {
    const url = '../js/danyang_activity.json';
    // html 파일 기준으로 경로 작성
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.danyang);

        for (let i = 0; i < slides.length; i++) {
            slides[i].src = `${data.danyang[i].firstimage}`;
            slides[i].addEventListener('click', () => {
                tourName.textContent = `${data.danyang[i].title}`;
                tourLo.textContent = `${data.danyang[i].addr1}`;
                tourDetail.textContent = `${data.danyang[i].detail}`;
                tourImg.src = `${data.danyang[i].firstimage}`;
            })
        }
        tourName.textContent = `${data.danyang[0].title}`
        tourLo.textContent = `${data.danyang[0].addr1}`
        tourDetail.textContent = `${data.danyang[0].detail}`
        tourImg.src = `${data.danyang[0].firstimage}`

    } catch (error) {
        console.log('단양체험 api 에러 : ', error);
    }
}
// fetchDataA();

async function fetchDataHe() {
    const url = '../js/danyang_heritage.json';
    // html 파일 기준으로 경로 작성
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.danyang);

        for (let i = 0; i < slides.length; i++) {
            slides[i].src = `${data.danyang[i].firstimage}`;
            slides[i].addEventListener('click', () => {
                tourName.textContent = `${data.danyang[i].title}`;
                tourLo.textContent = `${data.danyang[i].addr1}`;
                tourDetail.textContent = `${data.danyang[i].detail}`;
                tourImg.src = `${data.danyang[i].firstimage}`;
            })
        }
        tourName.textContent = `${data.danyang[0].title}`
        tourLo.textContent = `${data.danyang[0].addr1}`
        tourDetail.textContent = `${data.danyang[0].detail}`
        tourImg.src = `${data.danyang[0].firstimage}`

    } catch (error) {
        console.log('문화재 api 에러 : ', error);
    }
}
// fetchDataHe();

// sec02에서 각 카드 눌렀을 때 해당하는 sub.html로 이동 + 브래드스크럼 조절
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const fetchType = urlParams.get('fetch');
    const bread = document.getElementById('bread3depth')

    if (fetchType === '8') {
        fetchData8();
    } else if (fetchType === 'h') {
        fetchDataH();
        bread.textContent = "> 단양힐링";
    } else if (fetchType === 'a') {
        fetchDataA();
        bread.textContent = "> 단양체험";
    } else {
        fetchDataHe();
        bread.textContent = "> 문화재";
    }
});

// 브래드스크럼에서 홈 누르면 tour.html로 이동
document.getElementById('home').addEventListener('click', function(){
    window.location.href = 'danyang_tour.html';
});

// detail 더보기 클릭시 전부 노출
document.getElementById('learnMore').addEventListener('click', function() {
    const detail = document.getElementById('tourDetail');
    detail.classList.toggle('expanded');
});
