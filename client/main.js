/* global gsap */

import {
  getNode as $,
  changeColor,
  delayP,
  renderEmptyCard,
  renderSpinner,
  renderUserCard,
  tiger,
} from './lib/index.js';

// [phase-1]
// 1. tiger 함수를 사용해서 user를 가져와 주세요.
// 2. 함수 안으로 넣기
// 3. 유저 데이터 랜더링
//      - html template을 만든다.
//      - 유저 data를 넘겨주기.
//      - inserLast 사용하기.
// 4. 함수 분리 하기

// 에러가 발생 했을 때
// empty svg를 생성하고 렌더링 해주세요.


// 전역변수 ZONE {2,1}
const userCardInner = $('.user-card-inner');

async function renderUserList() {

	renderSpinner(userCardInner)

	try {
		
		await delayP({timeout:1000});	// 실제 코드에선 전혀 필요가 없다. (한번 지연시키고 렌더링하는거 보기 위해서)
		
		gsap.to('.loadingSpinner', {	// 로딩창 자연스럽게 없애기 , 투명도 0으로 줄여고, 투명도 0되면 삭제해라.
			opacity: 0,
			onComplete() {
				$('.loadingSpinner').remove()
			}
		})

		// $('.loadingSpinner').remove();

    const response = await tiger.get('https://jsonplaceholder.typicode.com/user');

    const userData = response.data;
    // console.log(userData);	// 우리가 찾던 데이터

    userData.forEach((item) => renderUserCard(userCardInner, item)); //^ 1. 어디에 랜더링 할껀데? // 2. 어떤 데이터를 랜더링 할껀데 ?

    changeColor('.user-card');

    gsap.to('.user-card', {
      x: 0,
      opacity: 1,
      stagger: 0.1,
    });
	} catch(err) {
		console.log(err);
		renderEmptyCard(userCardInner)
	}
}

renderUserList();
