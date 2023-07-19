/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 
--------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])
//@ 3번이 가장 베스트한 방식으로 이벤트를 걸고 있다. 3번을 가장 많이 쓴다
//@ 2번 방식은 이벤트를 여러개 걸지 못한다. 함수를 하나만 실행시킬수 있다.(복수의 핸들러를 할당할 수 x)


/* 이벤트 추가/제거 
--------------------------------------------------------- */

// 디바운스 : 사용자가 막~~ 하다가 마우스를 멈추면 함수를 실행시킨다 (의미없는 행동 자제)
function debounce(callback, limit = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

// 쓰로틀 : 특정시간마다 함수를 실행할수 있도록 한다
function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}



// - addEventListener
// - removeEventListener

const first = getNode('.first');

function handler() {
	// console.log('HTML 속성에서 이벤트를 실행합니다.');
	console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
}
// first.onclick = handler;

function handleClick() {
	console.log('이벤트 메서드를 호출합니다.');
}

// click, mousemove, mouseover, mouseout, mousedown, mouseup
// first.addEventListener('click', handleClick);


// const remove = bindEvent('.first', 'click', handler);


// setTimeout(() => {
// 	remove()
// }, 3000);



// 이벤트 객체(event object)
// 이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만듭니다.
// 객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 전달한다.

const ground = getNode('.ground');
const ball = getNode('#ball');


function handleClick(e) {

	let x = e.offsetX;
	let y = e.offsetY;

	// ball.style.transform = `translate(${x}px,${y}px)`;

	ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,
																	${ y - ball.offsetHeight / 2 }px)`;

}




ground.addEventListener('click', handleClick);

// 이벤트 객체