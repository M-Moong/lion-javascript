/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// 크롬 개발자 도구 > 요소: 클릭 (span) : $0
// - parentNode : h1
// - childNodes : NodeList [text]
// - firstChild : "hello"
// - lastChild  : "hello"
// - previousSibling : #text
// - nextSibling : #text

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */

// getNode.js 에 있는 util함수 사용하기
getNode('.first')	// <span class="first"></span>

const first = getNode('.first');
const span = getNodes('span');

console.log(span);




// - getElementById : querySelector보다 성능적으론 더 이점이다. 하지만 유물이다.
// const message = document.getElementById('message');
// console.log(message);

// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// const first = document.querySelector('.first');
// console.log(first);

// - querySelectorAll
// const [firstSpan, secondSpan] = document.querySelectorAll('span');
// console.log(secondSpan);

// - closest : 가장 인접한 '부모요소'만 찾아온다.
// console.log(first.closest('h1'));


/* 문서 대상 확인 */
// - matches : 가지고 있는지의 참/거짓 여부를 말해준다.
// console.log(first.matches('.first'));

// - contains : element를 포함하고 있는지 말해준다.
// console.log(first.contains(secondSpan));





// 클래스를 포함하고 있어?
// node.classList.contains()
