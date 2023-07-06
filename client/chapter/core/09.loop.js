/* --------------- */
//@ While Loop     
/* --------------- */



let repeat = 0;
while (repeat < 10) {
	
	console.log(repeat);

	repeat++;
}







const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 
---------------------------------------------- */

console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]);
console.log(frontEndDev[6]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 
-------------------- */

// while 문 (순환 : 순방향)
/* 
let i = 0;
while (i < frontEndDev.length) {
	let value = frontEndDev[i];

	console.log(value);
	
	i++;
} 
 */

// while 문 (역순환 : 역방향)
/* 
let l = frontEndDev.length - 1;
while (l >= 0) {
	let value = frontEndDev[l];
	
	console.log(value);
	
	l--;
}
*/




// pop()이란 메서드는 배열의 마지막 값을 추출하여 나타낸다.
// 원본 파괴를 막기위해서
// 배열의 깊은 복사

// let copyArray = frontEndDev.slice(); // old방식
let copyArray = [...frontEndDev]; // new방식

while (copyArray.length) {

  console.log(copyArray.pop());
}






// 성능 진단 : 순환 vs. 역순환

/* 
//@ 성능 검사하는 방법
let z1 = performance.now();
// (원하는 코드)
let z2 = performance.now();
console.log(z2 - z1); 
*/






//************************************************************************ */
//*********************************구분선 입니다***************************** */
//************************************************************************ */