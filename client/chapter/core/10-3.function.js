/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
//									 rest parameter
let calcAllMoney = (a,b,...args) => {
	
	console.log(args);

	// let total = 0;
	// args.forEach((item) => {
	// 	total += item;
	// })
	// return total;


	//# 일반 함수로 reduce를 사용했을때
	// return args.reduce(function (acc, item) {
	// 	return acc + item;
	// }, 0)
	

	//# 화살표 함수로 reduce를 사용했을때
	// return args.reduce((acc, item) => acc + item, 0)
};

const result = calcAllMoney(1000, 500, 200, 2000);
// console.log(result);


/* -------------------------------------------------------------------------- */


// 화살표 함수와 this

//@ 함수선언문
function normalFucntion() {
	console.log(this);
}

// this가 window이다. window에 의해 호출된다.
window.normalFucntion();

//@ 함수표현식
const expressionFunction = function () {
	console.log(this);
}
// this가 window이다. window에 의해 호출된다.
window.expressionFunction;

//@ 화살표함수식
// 셋 중에 혼자만 constructor를 가지고 있지 않기때문에
// 성능적으로도 훨씬 가볍다.
// 오로지 함수만을 위한 기능만 가지고 있다.
const arrowFunction = () => {
	console.log(this);
}

// this가 부모함수이다. 부모에 의해 호출된다.
arrowFunction();



/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
