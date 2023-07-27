/* global gsap */

import {
  getNode as $,
  attr,
  changeColor,
  clearContents,
  renderEmptyCard,
  renderSpinner,
  renderUserCard,
  tiger,
} from './lib/index.js';

//% [phase-1]
// 1. tiger 함수를 사용해서 user를 가져와 주세요.
// 2. 함수 안으로 넣기
// 3. 유저 데이터 랜더링
//      - html template을 만든다.
//      - 유저 data를 넘겨주기.
//      - inserLast 사용하기.
// 4. 함수 분리 하기

//% [phase-2]
// 에러가 발생 했을 때
// empty svg를 생성하고 렌더링 해주세요.
// 함수 분리

//% [phase-3]
// json-server 구성
// data 설계
// get, delete 통신 localhost
// delete => 리랜더링(clear, render)


// 전역 변수 ZONE 
const userCardInner = $('.user-card-inner');

async function renderUserList() {

	renderSpinner(userCardInner)

	try {
		
		// await delayP({timeout:1000});	// 실제 코드에선 전혀 필요가 없다. (한번 지연시키고 렌더링하는거 보기 위해서)
		
		gsap.to('.loadingSpinner', {	// 로딩창 자연스럽게 없애기 , 투명도 0으로 줄여고, 투명도 0되면 삭제해라.
			opacity: 0,
			onComplete() {
				$('.loadingSpinner').remove()
			}
		})

		// $('.loadingSpinner').remove();

    const response = await tiger.get('http://localhost:3000/users');

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







// 버튼을 클릭 했을 떄 해당 article의 id 값을 가져옴.

// - 이벤트 위임 e.target
// - button 선택하기 -> 클릭한 대상의 가장 가까운... method
// - attr(), dataset


function handleDelete(e) {
	e.preventDefault();

	const button = e.target.closest('button');
	const article = e.target.closest('article')

	if(!button || !article) return;

	const id = attr(article, 'data-index').slice(5);

	tiger.delete(`http://localhost:3000/users/${id}`)
		.then(() => {
			// 컨텐츠 항목 지우기
			clearContents(userCardInner);	//	화면 전체를 비운다.
			renderUserList();		// 화면을 다시 뿌려준다.
		})



	console.log(id);
}









userCardInner.addEventListener('click', handleDelete)




