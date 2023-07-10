/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
// let calculateTotal = function (priceA, priceB, priceC, priceD) {
// 	return priceA + priceB + priceC + priceD;
// }

let calculateTotal = function () {
  // console.log(arguments);
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지오 있는 이것은 ? : arguments
  // arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구해보자!

  let total = 0;

  //# 1.for문을 사용
  // for (let i = 0; i < arguments.length; i++) {
  // 	total += arguments[i];
  // }
  // return '(for)로 구했습니다~ ' + total;

  //# 2. for of 로 arguments의 합을 구하는 구문.
  // for (const item of arguments) {
  // 	total += item;
  // }
  // return '(for of)로 구했습니다~ ' + total;

  //# 3. ForEach를 사용.
  // arguments는 forEach라는 능력이 없기 때문에
  // Array의 능력에서 빌려와서 사용해야한다.
  // arguments.forEach((item) => {
  // 	console.log(item);
  // })

  //
  // Array.prototype.forEach.call(arguments, function(item) {
  // 	total += item;
  // })
  // return '(ForEach)로 구했습니다~ ' + total;

  //# 4. Array의 능력을 빌려 쓰는게 아니라 그냥 배열로 만들어버린다. (유사 배열 -> 배열)
  // //	arguments를  빌려온 함수slice로 잘라내서 realArray에 담는다.
  // let realArray = Array.prototype.slice.call(arguments);

  // console.log(realArray);			// 진짜 배열이 되어버린 realArray...

  // realArray.forEach(function (item) {
  // 	total += item;
  // })
  // return '개빡쳐서 그냥 Array로 바꿔서 구했습니다~' + total;

  //# 5. Array.from()
  // let realArray = Array.from(arguments);
  // console.log(realArray);
  // realArray.forEach(function (item) {
  // 	total += item;
  // })
  // return 'static메서드 사용해서 구했습니다~ ' + total;

  //# 6. spread syntax
  // let realArray = [...arguments];
  // console.log(realArray);
	// realArray.forEach((item) => {
	// 	total += item;
	// });
	// return 'spread syntax로 복사해서 구했습니다~ ' + total;


	//# 7. Array.reduce
	// let realArray = [...arguments];
	// return realArray.reduce((acc, item) => acc + item, 0);


}

const result = calculateTotal(1000, 500, 200, 6500);
// console.log(result);


/* -------------------------------------------------------------------------- */


//@ 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function (){
	
};

//@ 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){

};

//@ 콜백 함수 (표현)식
// let callbackFunctionExpression = function (isActive, success, fail) {
	
// 	// 내부적으로 처리하는 것
// 	// const callback = function() { console.log('콜백 함수 실행!') }

// 	if (isActive) {
// 		success();
// 		return;
// 	} else {
// 		fail();
// 	}
	
// };

// callbackFunctionExpression(
// 	true,
// 	function () { console.log('성공!~'); },
// 	function () { console.log('실패!~'); }
// )


//# 콜백 함수 예시
// const movePage = function (url, success, fail) {
//   if (url.match(/http.+www/) && typeof url === 'string') {
//     success(url);
//   } else {
//     fail();
//   }
// };

// movePage(
//   'www.naver.com',
//   function (url) {
//     console.log('성공 몇초 뒤 해당 페이지로 이동합니다.');

//     setTimeout(() => {
//       window.location.href = url;
//     }, 3000);
//   },
//   function () {
//     console.log('올바르지 않은 주소입니다.');
//     // ????
//   }
// );




// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식 - Immediately Invoked Function Expression
// - 변수의 보호를 위해서 만들어진 함수이다.
// - 전역으로 사용하는 var를 묶기 위해서.
let IIFE;


// 변수의 보호
// 은닉화 incapsulation(캡슐화)
const MASTER = (function (){

  var x = 10;
  let uid = 'Ajttk753!@';

  return {
    getKey() {
      return uid;
    },
    setKey(value) {
      uid = value;
    }
  };

})()



// // return 값을 받는다.
// console.log(MASTER);

// // key 값을 가져온다.
// console.log(MASTER.getKey());

// // key 값을 세팅한다.
// console.log(MASTER.setKey('새로운 비밀번호로 세팅해버리기~'));












