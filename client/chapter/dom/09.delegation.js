/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

// 이벤트 위임 : 부모에게 이벤트를 준다음 자식에게 할당해준다?
// e.currentTarget : 이벤트를 발생시킨 애를 찾는다.
// e.target : 마우스가 처음 만나는 애를 찾는다. (마우스가 누른 대상)

/* 클래스를 사용한 위임 
---------------- */

// const buttonA = getNode('.a');

// buttonA.addEventListener('click', () => {
// 	console.log('hit');
// })

const container = getNode('.container');


function handleDelegation(e) {
	
	let target = e.target;
	let className = target.getAttribute('class');
	let dataName = target.dataset.name;
	// let dataName = attr(target, 'data-name');  // 유틸함수 쓰는 방법


	// console.log(target.getAttribute('class'));

	//% 클래스 이름으로 한것.
	// if (className === 'a') {
	// 	console.log('A 버튼 클릭!');
	// }

	// if (className === 'b') {
	// 	console.log('B 버튼 클릭!');
	// }

	// if (className === 'c') {
	// 	console.log('C 버튼 클릭!');
	// }

	// if (className === 'd') {
	// 	console.log('D 버튼 클릭!');
	// }

	// console.log(this);
	// console.log(this === e.currentTarget);
	// console.log(e.currentTarget);
	// console.log(e.target);


	//% data-name으로 찾아서 하기
	if (dataName === 'A') {
		console.log('data로 찾은 A버튼 클릭');
  }

	if (dataName === 'B') {
		console.log('data로 찾은 B버튼 클릭');
  }

	if (dataName === 'C') {
		console.log('data로 찾은 C버튼 클릭');
  }

	if (dataName === 'D') {
		console.log('data로 찾은 D버튼 클릭');
  }

}


container.addEventListener('click', handleDelegation)








/* 속성을 사용한 위임 
------------------ */







/* 노드를 사용한 위임 
------------------ */
