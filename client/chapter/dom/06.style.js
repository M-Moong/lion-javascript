/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 
------------------------------------ */

const first = getNode('.first');

console.log(first.className);					// getter
// console.log(first.className = 'box'); // setter


// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// add
// remove
// toggle
// contains

first.classList.add('hello')
first.classList.remove('hello')
first.classList.toggle('is-active')			// 추가되면 true - 지워지면 false  반환한다.(boolean)

// contains는 반환값이 있기때문에 콘솔로 출력해본것이다.
console.log(first.classList.contains('hello'));			

addClass('.first', 'hello');










/* 스타일 변경 방법 
--------------------------------------------------------- */

first.style.backgroundColor = 'orange'; // setter
first.style.backgroundColor;  // getter는 사실 계산이 되기전 값은 들고오지 못한다. (빈문자열을 반환한다.)
															// css에서 지정한 요소는 가지고 오지 못하는것.
															// 하지만 개발자 도구를 열었을때 태그의 속성으로 들어가있는값은 들고 올수있다.

console.log(first.style.fontSize);




// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 
------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`


// 아래 2개는 같은 구문이다.
console.log(getComputedStyle(first).fontSize);				// 직접접근?
console.log(getComputedStyle(first).getPropertyValue('font-size')); // 프로퍼티의 힘을 빌린다? 느낌



// 객체의 속성에 접근할 때 .표기법은 사용할 수 없다.
// computed property [ ]



// 유틸함수 호출해보는 부분

console.log(css('.first', 'background-color'));

// css(first,'color')

// setCss('.first', 'color', '#fff');

// console.log(getCss('.first', 'font-size'));
getCss(first, 'font-size')

