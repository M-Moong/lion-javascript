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

  let li = target.closest('li'); // 가장 가까운 부모인 li를 찾아주세요

  if (!li) return; // container를 클릭하게 되면 컨테이너 밖에는 li가 없기때문에 Null이 뜬다.
  // 함수는 위부터 읽다가 return을 만나는 줄부터 밑에는 나머지는 실행하지 않는다.

  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name');

  // target의 클래스 확인
  // console.log(target.getAttribute('class'));

  //% 클래스 이름으로 한것
  /* 
	if (className === 'a') {
		console.log('A 버튼 클릭!');
	}

	if (className === 'b') {
		console.log('B 버튼 클릭!');
	}

	if (className === 'c') {
		console.log('C 버튼 클릭!');
	}

	if (className === 'd') {
		console.log('D 버튼 클릭!');
	}

  console.log(this);
  console.log(this === e.currentTarget);
  console.log(e.currentTarget);
  console.log(e.target);
	*/

  /* 	//% data-name으로 찾아서 하기
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
 */

  //# span이나 button을 누르면 아무것도 안나오기때문에
  //# closest으로 가장 가까운 부모를 찾아 전체적으로 눌리게 끔 만든다.
  // console.log(target.closest('li'));

  //% 이벤트 위임해서 실행하는것 확인
  if (className === 'home') {
    console.log('홈 실행!');
  }
}


container.addEventListener('click', handleDelegation)


/* 속성을 사용한 위임 
------------------ */


/* 노드를 사용한 위임 
------------------ */
