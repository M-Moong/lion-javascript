

import {
	diceAnimation,
	getNode,
	getNodes,
	attr,
	insertLast,
	endScroll,
	clearContents,
	memo
} from "./lib/index.js";


//# [phase-1] 주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록
// 					- 주사위 굴리기 버튼을 가져온다.
// 					- 이벤트 핸들러를 연결한다.
// 					- 애니메이션 코드를 작성한다.
// 3. 애니메이션 토글 제어 
// 4. 클로저 + IIFE 를 사용한 변수 보호


//# [phase-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// 2. hidden 속성 제어하기
// 				- 기록 버튼 이벤트 바인딩
// 				- hidden 속성 false 만들기
// 				- 기록 버튼 이벤트 바인딩
// 				- hidden 속성 false 만들기
// 3. 주사위 값을 가져와서 랜더링
// 4. 스크롤 위치 내리기
// 5. 함수 분리

//# [phase-3] 초기화 시키기
// 1. 아이템 지우기




//&& 진짜 진짜 쉬운 과제(노검사) - 완료.
// 두가지 함수를 만들어라 - disabled 값을 조절 할수 있게
// disableElement(node)
// enableElement(node)
//@ isDisableState(node)  => true / false - 미완료

// visibleElement(node)
// invisibleElement(node)
//@ isVisibleState(node) => true / false - 미완료



// 배열 구조 분해 할당
const [startButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');
// const tbody = getNode('.recordList > tbody');
memo('@tbody', () => getNode('.recordList tbody'))	// setter

memo('@tbody')	// getter

function disabledElement(node) {
	return node.disabled = true;
}

function enalbeElement(node) {
	return node.disabled = false;
}

const handleRollingDice = ((e)=>{
	
	let isClicked = false; // 주사위 토글을 위한 클릭상태변수 
	let stopAnimation;	// 주사위 애니메이션(인터벌) 상태변수

	return () => {		// 클로저

		if (!isClicked) {		// 주사위 play
			stopAnimation = setInterval(diceAnimation, 100);	// 애니메이션 start
			disabledElement(recordButton);
			disabledElement(resetButton);
		
		} else {		// 주사위 stop
			clearInterval(stopAnimation);		// 애니메이션 stop
			enalbeElement(recordButton)
			enalbeElement(resetButton)
		}

		isClicked = !isClicked;
	}
})()

function visibleElement(node) {
	return node.hidden = false;
}

function invisibleElement(node) {
	return node.hidden = true;
}


let count = 0;
let total = 0;	

function createItem(value) {

	// 뿌려줄 템플릿 만들기
	return /* html */`
		<tr>
			<td>${++count}</td>
			<td>${value}</td>
			<td>${total += value}</td>
		</tr>
	`;
}

function renderRecordItem() {

	// 주사위가 내뱉는 data-dice의 값을 
	// Record에 나타내어라
	const diceValue = +attr('#cube', 'data-dice');	

	insertLast(memo('@tbody'), createItem(diceValue));	// 템플릿을 tbody에 삽입하는 함수

	endScroll(recordListWrapper);		// 스크롤을 끝까지 내리는 함수
}


function handleRecord() {
	visibleElement(recordListWrapper);

	renderRecordItem();
}

function handleReset() {
	invisibleElement(recordListWrapper)
	disabledElement(recordButton);
	disabledElement(resetButton);

	clearContents(memo('@tbody'));

	count = 0;
	total = 0;
}

startButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);



