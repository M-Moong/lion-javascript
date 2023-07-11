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
	
	// console.log(args);

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

// this를 왜 쓰는지

// const a = document.querySelector('nav li:nth-child(1) button');



// 일반함수의 this : 나를 호출한 대상을 this로 바인딩합니다.
// 화살표함수의 this : this를 바인딩하지 않음. 굳이 찾으면 내 부모꺼를 찾아온다.

// a.addEventListener('click', function() {
// 	// this.classList.add('is-active');
// 	console.log(this);
// })


















//@ 함수선언문
function normalFucntion() {
	// console.log(this);
}

// this가 window이다. window에 의해 호출된다.
window.normalFucntion();

//@ 함수표현식
const expressionFunction = function () {
	// console.log(this);
}
// this가 window이다. window에 의해 호출된다.
window.expressionFunction;

//@ 화살표함수식
// 셋 중에 혼자만 constructor를 가지고 있지 않기때문에
// 성능적으로도 훨씬 가볍다.
// 오로지 함수만을 위한 기능만 가지고 있다.
const arrowFunction = () => {
	// console.log(this);
}

// this가 부모함수이다. 부모에 의해 호출된다.
arrowFunction();




// 객체 안에서 this

// 객체의 메서드를 정의할때는 화살표 함수보다 일반 함수가 더 좋은거 아닌가요? yes
// 객체의 메서드 안에서 함수를 호출할때는 화살표 함수가 더 좋나? yes	 // 메서드 안에서의 화살표 함수는 this를 가지지 않기 때문에 


const user = {
	total: 0,
	name: 'tiger',
	age: 32,
	address: '서울시 중랑구 면목동',
	grades: [80, 90, 100],
	
	//# 화살표 함수 - this가 윈도우로 나옴 
	// totalGrades() {
	// 	console.log(this.grades);
	// }


	//# 원래쓰던 일반 함수 - this는 user임
	// totalGrades: function() {
	// 	console.log(this.grades);
	// }

	//# 컨사이드 메서드? - 요새 트렌드! 일반함수랑 같은거임
	totalGrades() {
    // console.log(this.grades);

    // this.grades.forEach(function (item) {
    // 	this.total += item;
    // })

    //^ 1. (메서드안에서)일반함수의 this
    // function sayHi() {
    // 	console.log(this);
    // }

    //^ 2. (메서드안에서)화살표함수의 this
    // const sayHi = () => {
    //   console.log(this);
    // };

    // sayHi();
  }
}


















/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
