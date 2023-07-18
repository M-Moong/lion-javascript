/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

const first = getNode('.first');

// first에 대한 확인
// console.log(first);
// console.dir(first);

// first는 id를 가지고 있고 id는 표준 속성이기 떄문에 
// 아래처럼 볼러올수있다. (표준 속성만 가능.)
// console.log(first.id);
// console.log(first.className);		// 그냥 class라고 쓰면 안댐.
//! console.log(first.size);	// 이건 표준이 아니기때문에 불러도 undefined가 뜹니다.


/* DOM 프로퍼티 
----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 
------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함


// 표준인지 비표준인지는 따지지 않는다.
// 가지고 있는지 없는지만 판변한다. 
console.log(first.hasAttribute('class'));	//true

console.log(first.getAttribute('class'));	// first

console.log(first.getAttribute('id'));	// message

console.log(first.getAttribute('size'));	// 10			//^ 표준 속성이 아니여도 가져온다.

/* -------------------------------------------------------------------------- */

first.setAttribute('title', '메세지')	// title="메세지"


// first.setAttribute('class', 'second')	// class에 접근은 가능하나 기존값을 지우기 때문에 classList에서 변경하는걸 더 권장한다.

/* -------------------------------------------------------------------------- */

first.removeAttribute('title');

// console.log(first.attributes);

// iterator를 가지고 있기 때문에 for..of문을 돌릴수 있다.
// for (const item of first.attributes) {
// 	console.log(item);
// }


first.getAttribute('id');	//	message



/* 비표준 속성, 프로퍼티 설정 
------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.
//@ data- 을 붙이면 표준속성처럼 만들어준다.

//% dataset이라는 프로퍼티 안에 객체로 다 저장시켜준다.
// - elementNode.dataset

// 케밥케이스가 다 해제되고 카멜케이스로 들어가게된다.
console.log(first.dataset);		// DOMStringMap {size: '10', tabIndex: '1'}
console.log(first.dataset.size);
console.log(first.dataset.tabIndex);		// getter

console.log(first.dataset.animation = 'paused'); // setter







