

/* ------------------------ */
/* Optional Chaining        */
/* ------------------------ */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

//@ 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다. - photos라는건 없다. - 그래서 ? 를 붙여준다. (없는것의 하위이기때문에)
//@ js의 객체는 없는 대상에 접근을해도 오류를 내뱉지 않는다. - 그래서 photos에 ?를 붙이지 않는다.
console.log(portableFan.photos?.animate);

if (portableFan.photos === 'undefined') {
  throw new Error('에러!')
}

// json 의 약자
// JavaScript Object Notation



// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.


// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.


// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.


// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.


/* -------------------------------------------------------------------------- */

const button = document.querySelector('button');

console.log(button);

button?.addEventListener('click', function () {
  this.style.backgroundColor = 'orange';
})


/* -------------------------------------------------------------------------- */


// sync 동기        async 비동기

// console.log('첫 번째 실행');

// setTimeout(() => {

//   console.log('두 번째 실행');

// },3000);

// console.log('세 번째 실행');


/* -------------------------------------------------------------------------- */

// let count = 0;
// setInterval(() => {

//   console.log(++count);

// },1000)


// requestAnimationFrame() // 재귀


/* -------------------------------------------------------------------------- */


const timer = setTimeout(() => {
  const button = /* html */ `
    <button type="button">clickMe</button>
  `;

  document.body.insertAdjacentHTML('beforeend', button);
}, 5000);

clearTimeout(timer);









