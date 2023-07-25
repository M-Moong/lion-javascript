import { getNode } from "../dom/getNode.js";


function delay(callback,timeout=1000){
  setTimeout(callback,timeout);
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

function delayP(){

  return new Promise((resolve, reject) => {
    resolve('성공입니다!!')
    // reject('실패입니다!!')
  })

}


delayP()
.then((result)=>{
  console.log( result );
})



//$ Promise 체이닝 미리보기
function delay_P() {
  return new Promise((성공, 실패) => {
    setTimeout(() => {
      성공('통신 성공');
      // 실패('통신 실패!!');
    }, 1000);
  });
}

delay_P()
.then((결과) => {
  console.log('로직 실행');

  return delay_P()
  /* return new Promise((성공, 실패) => {
    
  }) */
})
.then((결과) => {
  console.log('로직 실행');

  return delay_P()
})
.then((결과) => {
  console.log('로직 실행');
})