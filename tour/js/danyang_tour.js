// 단양관광 js

// 메인 gnb 배경 색 변경
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
    slidesPerView: 2,
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

// 충북관광 API

const proxyURL = 'https://api.allorigins.win/get?url=';
        const apiURL = encodeURIComponent('https://tour.chungbuk.go.kr/openapi/tourInfo/attr.do?searchCnd=tourNm&searchKrwd=%EB%8B%A8%EC%96%91&PageUnit=15');

        async function fetchData() {
            try {
                const response = await fetch(proxyURL + apiURL);

                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }

                const data = await response.json();

                const actualData = JSON.parse(data.contents);
                // console.log(actualData);

                const tourNames = actualData.result.map(item => item.tourNm);
                // ✅ map 메서드를 이용해서 배열에서 각 요소의 특정 값을 모두 가져오게 할 수 있다.
                // map 메서드의 item은 actualData.result 배열의 각 요소를 뜻한다.
                // 배열의 각 요소를 순회하며, 그 요소를 함수의 인자로 전달한다.

                console.log(tourNames);
                // content.textContent = tourNames;
                // content.innerContent = actualData.
                // document.getElementById('content').innerText = JSON.stringify(actualData, null, 2);
                // console.log(actualData.result[0].thumbImg);

                // const imageUrl = actualData.result[7].thumbImg;
                // document.getElementById('image').src = imageUrl;

                // const imageUrl2 = actualData.result[3].thumbImg;
                // document.getElementById('image2').src = imageUrl2;

                // document.getElementById('content').style.backgroundImage = `url(${imageUrl})`;
                // document.getElementById('content').style.backgroundSize = 'cover';

                // const location01 = actualData.result[5].intrcn
                // document.getElementById('location').innerText = location01;
            } catch (error) {
                console.error('Fetch operation failed: ', error);
            }
        }

        fetchData();
