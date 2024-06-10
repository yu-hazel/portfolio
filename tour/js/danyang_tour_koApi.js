// 단양관광 공홈 리디자인 한국관광공사 api js



async function fetchData() {
    const url = '../js/korea_tour_danyang.json';
    // html 파일 기준이라서!

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('한국관광공사 api 패치 에러 : ', error);
    }
}

(async () => {
    const result = await fetchData();
    console.log(result.danyang);
    themeVillage01.innerHTML = `
        <img src=${result.danyang[1].firstimage} alt>
        <div class="themeText">
            <p>${result.danyang[1].context}</p>
            <p>${result.danyang[1].title}</p>
        </div>
    `
    themeVillage02.innerHTML = `
    <img src=${result.danyang[6].firstimage} alt>
    <div class="themeText">
        <p>${result.danyang[6].context}</p>
        <p>${result.danyang[6].title}</p>
    </div>
`
    themeVillage03.innerHTML = `
    <img src=${result.danyang[7].firstimage} alt>
    <div class="themeText">
        <p>${result.danyang[7].context}</p>
        <p>${result.danyang[7].title}</p>
    </div>
`
    themeVillage04.innerHTML = `
    <img src=${result.danyang[10].firstimage} alt>
    <div class="themeText">
        <p>${result.danyang[10].context}</p>
        <p>${result.danyang[10].title}</p>
    </div>
`
})();