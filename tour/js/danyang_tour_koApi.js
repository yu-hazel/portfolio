// 단양관광 공홈 리디자인 한국관광공사 api js

async function fetchData() {
    const url = '../js/korea_tour_danyang.json';
    // html 파일 기준이으로 경로 작성
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('한국관광공사 api 패치 에러 : ', error);
    }
}

// sec02 캐러셀 채우기
function apiTheme(element, data) {
    element.innerHTML = `
    <img src=${data.firstimage} alt>
    <div class="themeText">
        <p>${data.context}</p>
        <p>${data.title}</p>
    </div>
`
}

async function setData() {
    const result = await fetchData();
    console.log(result.danyang);

    // ✅ 각 탭을 누를 때마다 호출하기로 리팩토링! <a>도 넣어서 서브페이지로 이동하는 것도 해야 함

    // 단양체험
    apiTheme(themeAct01, result.danyang[1]);
    apiTheme(themeAct02, result.danyang[6]);
    apiTheme(themeAct03, result.danyang[7]);
    apiTheme(themeAct04, result.danyang[10]);
    
    // 단양힐링
    apiTheme(themeHealing01, result.danyang[20]);
    apiTheme(themeHealing02, result.danyang[24]);
    apiTheme(themeHealing03, result.danyang[26]);
    apiTheme(themeHealing04, result.danyang[28]);
    
    // 문화재
    apiTheme(themeHeritage01, result.danyang[0]);
    apiTheme(themeHeritage02, result.danyang[4]);
    apiTheme(themeHeritage03, result.danyang[13]);
    apiTheme(themeHeritage04, result.danyang[18]);
};
setData();







