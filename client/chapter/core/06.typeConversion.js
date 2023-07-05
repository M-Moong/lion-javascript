/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 
----------------------------------------------------------- */

// number
const YEAR = 2023;
console.log(typeof String(YEAR)); // 명시적 형 변환
console.log(YEAR + ''); // 암시적 형 변환

// undefined, null
let days = null;
console.log(typeof String(null));
console.log(null + '');

let undef = undefined;
console.log(typeof String(undefined));
console.log(undefined + '');

// boolean
let isClicked = true;
console.log(String(isClicked));
console.log(isClicked + '');

/* 데이터 → 숫자 
----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let bankbook = null;
console.log(Number(bankbook));

// boolean
let cuite = true;
console.log(Number(cuite));

// string
let num = '250';
console.log(+num);
console.log(num * 1);
console.log(num / 1);

// numeric string
let width = '105.3px';
console.log(Number(width));

// 정말 105.3이라는 값이 필요할때
let w = window.parseFloat(width, 10); // 문자가 나오는순간 뒤에는 다 날리기 떄문에 뒷에 있는 숫자도 인식하지 x.
console.log(w);

/* 데이터 → 불리언 
---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend)); // undefined
console.log(Boolean(bankbook)); // null
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));

console.log('암시적 형 변환 : ' + !!false);
