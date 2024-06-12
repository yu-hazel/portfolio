// 메인 gnb
document.getElementById("header").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#fff";
    let links = this.querySelectorAll('.headerGroup01 a, .headerGroup02 a, .langSelect, .logo, .gnb > li > a, .searchIcon');
    links.forEach(function(link) {
        link.style.color = "#000";
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

// 하단 캐러셀
var swiper = new Swiper(".tourCards", {
    slidesPerView: 5,
    spaceBetween: 50,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// 한국관광공사 api 활용
const slides = document.querySelectorAll('.swiper-slide > img');
const tourLo = document.querySelector('.tourLocat p')

async function fetchData8(index=0) {
    const url = '../js/danyang_8.json';
    // html 파일 기준으로 경로 작성
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.danyang);

        for (let i = 0; i < slides.length; i++) {
            slides[i].src = `${data.danyang[i].firstimage}`;
            slides[i].addEventListener('click', () => {
                tourName.textContent = `${data.danyang[i].title}`;
                tourLo.textContent = `${data.danyang[i].addr1}`;
                tourDetail.textContent = `${data.danyang[i].detail}`;
                tourImg.src = `${data.danyang[i].firstimage}`;
            })
        }
        tourName.textContent = `${data.danyang[index].title}`
        tourLo.textContent = `${data.danyang[index].addr1}`
        tourDetail.textContent = `${data.danyang[index].detail}`
        tourImg.src = `${data.danyang[index].firstimage}`
    } catch (error) {
        console.log('한국관광공사 api 패치 에러 : ', error);
    }
}
// fetchData8();

async function fetchDataH(index=0) {
    const url = '../js/danyang_healing.json';
    // html 파일 기준으로 경로 작성
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.danyang);

        for (let i = 0; i < slides.length; i++) {
            slides[i].src = `${data.danyang[i].firstimage}`;
            slides[i].addEventListener('click', () => {
                tourName.textContent = `${data.danyang[i].title}`;
                tourLo.textContent = `${data.danyang[i].addr1}`;
                tourDetail.textContent = `${data.danyang[i].detail}`;
                tourImg.src = `${data.danyang[i].firstimage}`;
            })
        }
        tourName.textContent = `${data.danyang[index].title}`
        tourLo.textContent = `${data.danyang[index].addr1}`
        tourDetail.textContent = `${data.danyang[index].detail}`
        tourImg.src = `${data.danyang[index].firstimage}`
        subTitle.textContent = "단양힐링";
        bread2depth.textContent = "> 볼거리";
        bread3depth.textContent = "> 관광지"
        bottomTitle.textContent = "단양에서 힐링하는 또다른 방법은?";

    } catch (error) {
        console.log('한국관광공사 api 패치 에러 : ', error);
    }
}
// fetchDataH();

async function fetchDataA(index=0) {
    const url = '../js/danyang_activity.json';
    // html 파일 기준으로 경로 작성
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.danyang);

        for (let i = 0; i < slides.length; i++) {
            slides[i].src = `${data.danyang[i].firstimage}`;
            slides[i].addEventListener('click', () => {
                tourName.textContent = `${data.danyang[i].title}`;
                tourLo.textContent = `${data.danyang[i].addr1}`;
                tourDetail.textContent = `${data.danyang[i].detail}`;
                tourImg.src = `${data.danyang[i].firstimage}`;
            })
        }
        tourName.textContent = `${data.danyang[index].title}`
        tourLo.textContent = `${data.danyang[index].addr1}`
        tourDetail.textContent = `${data.danyang[index].detail}`
        tourImg.src = `${data.danyang[index].firstimage}`
        subTitle.textContent = "단양체험";
        bread2depth.textContent = "> 즐길거리";
        bread3depth.textContent = "> 체험마을"
        bottomTitle.textContent = "단양 체험 장소 더 알아보기";
    } catch (error) {
        console.log('단양체험 api 에러 : ', error);
    }
}
// fetchDataA();

async function fetchDataHe(index=0) {
    const url = '../js/danyang_heritage.json';
    // html 파일 기준으로 경로 작성
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.danyang);

        for (let i = 0; i < slides.length; i++) {
            slides[i].src = `${data.danyang[i].firstimage}`;
            slides[i].addEventListener('click', () => {
                tourName.textContent = `${data.danyang[i].title}`;
                tourLo.textContent = `${data.danyang[i].addr1}`;
                tourDetail.textContent = `${data.danyang[i].detail}`;
                tourImg.src = `${data.danyang[i].firstimage}`;
            })
        }
        tourName.textContent = `${data.danyang[index].title}`
        tourLo.textContent = `${data.danyang[index].addr1}`
        tourDetail.textContent = `${data.danyang[index].detail}`
        tourImg.src = `${data.danyang[index].firstimage}`
        subTitle.textContent = "문화재";
        bread2depth.textContent = "> 볼거리";
        bread3depth.textContent = "> 문화재"
        bottomTitle.textContent = "단양 문화재 더 알아보기";
    } catch (error) {
        console.log('문화재 api 에러 : ', error);
    }
}
// fetchDataHe();

// tour.html sec02에서 각 카드 눌렀을 때 해당하는 함수 호출 + 브래드스크럼 조절
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const fetchType = urlParams.get('fetch');

    const fetchActions = {
        '81': () => fetchData8(0),
        '82': () => fetchData8(1),
        '83': () => fetchData8(3),
        '84': () => fetchData8(2),
        'h1': () => {fetchDataH(4);},
        'h2': () => {fetchDataH(2);},
        'h3': () => {fetchDataH(0);},
        'h4': () => {fetchDataH(1);},
        'a1': () => {fetchDataA(0);},
        'a2': () => {fetchDataA(3);},
        'a3': () => {fetchDataA(4);},
        'a4': () => {fetchDataA(5);},
        'he1': () => {fetchDataHe(0);},
        'he2': () => {fetchDataHe(2);},
        'he3': () => {fetchDataHe(4);},
        'he4': () => {fetchDataHe(1);}
    };
    (fetchActions[fetchType] || fetchActions['81'])();
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

// 푸터 드롭다운
let serviceBt = document.querySelectorAll(".serviceBox div");
let serviceDrop = document.querySelectorAll(".serviceDropdown");

serviceBt.forEach((eachBt, index) => {
    eachBt.addEventListener('click', function() {
        serviceDrop[index].classList.toggle("on");
    })
})
