// 단양관광 공홈 리디자인 충북관광 api js

const proxyURL = 'https://api.allorigins.win/get?url=';
const apiURL = encodeURIComponent('https://tour.chungbuk.go.kr/openapi/tourInfo/attr.do?searchCnd=tourNm&searchKrwd=%EB%8B%A8%EC%96%91&PageUnit=15');

    async function fetchDataC() {
        try {
            const response = await fetch(proxyURL + apiURL);

            if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.json();

            const actualData = JSON.parse(data.contents);
            console.log(actualData);

            const tourNames = actualData.result.map(item => item.tourNm);
            // ✅ map 메서드를 이용해서 배열에서 각 요소의 특정 값을 모두 가져오게 할 수 있다.
            // map 메서드의 item은 actualData.result 배열의 각 요소를 뜻한다.
            // 배열의 각 요소를 순회하며, 그 요소를 함수의 인자로 전달한다.

            console.log(tourNames);
            } catch (error) {
                console.error('충북관광 api 패치 에러 : ', error);
            }
        }

    fetchDataC();
