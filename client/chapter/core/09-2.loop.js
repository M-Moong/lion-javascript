/* -------------------- */
/* Do While Loop        */
/* -------------------- */

/* 
let i = 100;

do {
	console.log(i);

	i++;
} while (i < 10);
 */


// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단
/* 
let count = prompt('순환횟수? 몇번쓰?');

do {
	if(+count < 0) {
		console.log('최초 실행된 메세지입니다. 이 메세지는 조건이 거짓이어도 볼 수 있습니다.');
		break;
	}
	count--;
} while (count >= 0) {
	console.log(count);
}
 */
/* 
let repeat = prompt('몇번 반복하시겠습니까?', 0);

do {

	console.log(repeat);

	if (repeat < 0) {
		console.log('최초 실행입니다.');
		break;
	}

	repeat--;
} while(repeat)
 */

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정


let first = document.querySelector('.first');
let second = document.querySelector('.second');
 
// first = first.nextSibling;

// do {
// 	first = first.nextSibling;

// } while (first.nodeType !== document.ELEMENT_NODE);


// // 반복문 멈추는 시점 => 무한루프

// console.log(first);

function next(node) {
	do {
		node = node.nextSibling;
	} while (node.nodeType !== 1)
	
	return node;
}

function prev(node) {
	do {
		node = node.previousSibling;
	} while(node.nodeType !== 1)
	return node;
}


// 다음 태그 요소가 선택되길 원함
const nextTag = next(first);

const preTag = prev(second);

console.log(nextTag);

console.log(preTag);






// 로직 실행