import { getNode } from '../dom/getNode.js';
import {insertLast} from '../dom/insert.js';
import {xhrPromise} from './xhr.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

//# Promise를 사용하지 않으면 콜백지옥처럼 코드가 되어버린다.
// delay(()=>{
//   console.log(1);
//   first.style.top = '-100px';
//   delay(()=>{
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       console.log(3);
//       first.style.top = '0';
//       second.style.top = '0';
//     })
//     second.style.top = '100px';
//     console.log('b');
//   })
// });

// delayP 함수를 실행하면 리턴되는 값이 promise 객체입니다.

// 객체 합성(mixin) - 기본값이랑 설정한 값이랑 같이 사용.
// 기본데이터값을 덮어씌워 수정하고 싶은 데이터만 수정되어 적용된다.

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공!',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

function delayP(options) {
  let config = { ...defaultOptions };

  if (typeof options === 'number') {
    config.timeout = options;
  }

  if (typeof options === 'object') {
    config = { ...defaultOptions, ...options };
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    // 프로미스의 파라미터 이름은 상관없지만, 순서는 바꾸면 안된다. 객체를 반환한다.
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP({shouldReject: false}) // 윗 함수(delayP)에서 나온 Promise Object가 들어 있다.
  .then((result) => {
    // console.log(result);
  })
  .catch(({message}) => {
    console.log(message);
  })
  .finally(() => {
    // console.log('어쨋든 실행합니다.');
  })



async function delayA() {
  return '성공!'
}

const data = await delayA();

// console.log(data);

// async - 함수가 promise 객체를 반환 하도록, 
//       - await사용
// await - 코드의 실행 흐름 제어 (멈춰)
//       - result값 가져오기

async function 라면끓이기() {


  /* //@ 수정 전 코드
  console.log('물넣기');
  await delayP()
  console.log('스프넣기');
  await delayP()
  console.log('면넣기');
  await delayP()
  console.log('계란넣기');
  await delayP()
  console.log('접시');
   */


  //@ 수정 후 코드
  delayP({data:'물넣기'}).then((res)=>{
    console.log( res );
  })

  const 스프 = await delayP({data:'스프넣기'})
  console.log(스프);

  const 면 = await delayP({data:'면넣기'})
  console.log(면);

  const 계란 = await delayP({data:'계란넣기'})
  console.log(계란);

  const 접시 = await delayP({data:'접시'})
  console.log(접시);

}
// 라면끓이기()




/* //& then과 await
async function getUserData() {
  
  const data = xhrPromise.get('https://jsonplaceholder.typicode.com/users')

  //# then 결과 가져오기
  // data.then((res) => {
  //   console.log(res);
  // })
  
  //# await 결과 가져오기
  const result = await data;

  console.log(result);
}
 */


/* //& 포켓몬 가져오는 api
async function getUserData(){

  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/')

  // data.then((res)=>{
  //   console.log( res );
  // })
  
  const pokemon = await data;

  console.log( pokemon.sprites['front_default'] );

  insertLast(document.body,`<img src="${pokemon.sprites['front_default']}" alt="" />`)

}

getUserData()
 */





















//% Promise 체이닝 미리보기
// function delay_P() {
//   return new Promise((성공, 실패) => {
//     setTimeout(() => {
//       성공('통신 성공');
//       // 실패('통신 실패!!');
//     }, 1000);
//   });
// }

// delay_P()
// .then((결과) => {
//   console.log('로직 실행');

//   return delay_P()
//   /* return new Promise((성공, 실패) => {

//   }) */
// })
// .then((결과) => {
//   console.log('로직 실행');

//   return delay_P()
// })
// .then((결과) => {
//   console.log('로직 실행');
// });

