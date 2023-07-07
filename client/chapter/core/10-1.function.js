/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// 함수 선언
function calcPrice(priceA, priceB, priceC = 0, priceD = 0) {
  // priceC의 파라미터값이 들어오지 않았을 경우
  // validation 처리 하는방법
  //#1 priceC ??= 0;

  //#2 priceC ||= 0;

  //#3 if (!priceC) priceC = 0;

  //#4 if (typeof priceC === 'undefined') {
  // 	priceC = 0;
  // }

	// 첫번째값으로 전달된 파라미터값이 없으면 에러 메세지 표출
	//* validation이라고 합니다.
	if (!priceA || !priceB) {
		throw new Error('calcprice 함수의 첫번째와 두번째 매개변수는 필수 입력 값입니다.')
	}

  return priceA + priceB + priceC + priceD;
}

// 함수 호출
const result = calcPrice(10,30);

console.log(result);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

/* 함수 만드는 방법
	1. function name
	2. validation
	3. return value
	4. parameter, argument
	5. test [Test Driven Development]
*/



// rem(pxValue: number|string, base: number):string;
let rem = function (pxValue, base = 16) {

	//에러표시
	if(!pxValue) throw new Error('rem 함수의 첫번째 인수는 필수 입력값 입니다.')

	// if (typeof pxValue === 'string') {
	// 	pxValue = parseInt(pxValue, 10);
	// }

	// 단축평가
	typeof pxValue === 'string' && (pxValue = parseInt(pxValue, 10));


	// return (pxValue / base) + 'rem';
	return `${pxValue / base}rem`
}



// 콘솔에서 간단하게 테스트 하는 코드
console.assert(rem(20) === '1.25rem')
console.assert(rem('30px', 16) === '1.875rem')
console.assert(rem('56px', 10) === '5.6rem')





// css(node: string, prop: string, value: number|strung) : string;
let css;

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
