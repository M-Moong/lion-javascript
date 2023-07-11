/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조

let htmlCode = /* html */ `
  <ul>
    <li class= "box"></li>
    <li></li>
    <li></li>
  </ul>
`


let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: "800px",
  height: "40vh",
  minHeight: "280px",
  transform: "translate(-50%, -50%)"
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

// authorization : 권한
// authentication : 인증

authUser = {
  uid: 'user-id-zWEF@#$',
  name: 'beom',
  email: 'tmfdfldjfil@naver.com',
  isSignIn: true,
  permission: 'paid'  // free | paid
}


// console.log(authUser);


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log(authUser.uid);
// console.log(authUser.permission);
// console.log(authUser.email);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log(authUser['uid']);
// console.log(authUser['email']);
// console.log(authUser['name']);

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel


//# 원래의 객체 생성방식 
// 일일이  하나하나 해주어야한다 - 귀찮다.
// const user1 = {
//   name: 'sdf',
//   age: 23
// }

// const user2 = {
//   name: 'sdkfjds',
//   age: 44
// }



//# 함수지향!
// 그래서 위의 객체 생성방식 대신 함수로 한다.
// 객체를 생성할수 있는 함수
// 함수로 객체 만들기
function createUser(
  
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
  ) {

  
  return {
    //원래의 방식 이었는데
    // name: name,

    //@ shorthand property(단축 프로퍼티)
    name,
    email: email,
    [computedProp] : number
  }
}

const user1 = createUser('진승', 'xkuebr@gmail.com', 'tel', '0220-323-32');
const user2 = createUser('희소', 'dlfaije@naver.com');



//# 객체 지향!
// class로 객체 - 생성하는 방법
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email
//   }
// }


// 프로퍼티 포함 여부 확인

// key in user1

Object.prototype.SIGN = true;

// 자신(own)의 속성(property)을 가지고(has)있는지

for (const key in user1) {
  if (Object.prototype.hasOwnProperty.call(user1,key)) {
    console.log(key);
    
  }
}

//% 프로퍼티 나열

// key만 모아놓은 배열 만들어주세요 Object.keys()
let keyArray = Object.keys(authUser);
// console.log(keyArray);

// value만 모아놓은 배열 만들어주세요 Object.values()
let valueArray = Object.values(authUser);
// console.log(valueArray);


// getProp(object)함수 만들기
function getProp(object) {
  if (typeof object !== 'object') {
    throw new Error ('getProp함수의 매개변수는 객체 타입이어야 합니다.')
  }
  return Object.keys(object);
}

// console.log(getProp(authUser));    // ['uid', 'name', 'email', 'isSignIn', 'permission']


//% object.keys라는 메서드가 없었을때 !
// 함수로 처리하는 방법
function getP(object) {
  let result = [];

  for (const key in object) {
    if (({}).hasOwnProperty.call(object,key)) {
      result.push(key);
    }
  }
  return result;
}


//         null              없앰.
// 프로퍼티 제거(remove) or 삭제(delete)

// authUser.name = null;
// delete authUser.uid;
// console.log(authUser);


// removeProperty(authUser, name);
//# 실제로 name이 비워지는 함수를 만들어라. 
// function removeProperty(object, key) {

//   if (typeof object !== 'object') {
//     throw new Error('getProp함수의 매개변수는 객체 타입이어야 합니다.');
//   }

//   if (typeof key !== 'string') {
//     throw new Error('...');
//   }
  
//   // all이 입력되면 전체가 null 처리되는 로직
//   if (key === 'all') {
//     for (const key of object.keys(object)) {
//       object[key] = null;
//     }

//     return object;
//   }

//   object[key] = null;

//   return object;
// }
// removeProperty(authUser, "name");

/* -------------------------------------------------------------------------- */

//# delete를 해주는 함수
// function deleteProperty(object, keys) {
//   delete object[keys];

//   return object;
// }

// deleteProperty(authUser, "name");


//% 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// const student = {
//   name: name,
//   email: email,
//   authorization: authorization,
//   isLogin: isLogin
// }

//# 이게 단축 프로퍼티다
// const student = { name, email, authorization, isLogin }

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {

  Object.keys(object).length


  // return Object.keys(Object).length === 0 ? true : false;

  return (getProp(object).length) === 0;
}

isEmptyObject(authUser) // false 



/*------------------------------- 
//* 배열 구조 분해 할당  destructuring assignments
//* 순서가 정해져 있다. 변수 이름을 바꿀 수 있다.
------------------------------ */
let color = ['#ff0000', '#2b00ff', '#00ff2f'];

let [, , green] = color;

for (const [key, value] of Object.entries(authUser)) {
  // let key = keyValue[0];
  // let value = keyValue[1];
    
  console.log(key);
}

// let red = color[0];
// let blue = color[1];
// let green = color[2];

console.log(green);



/* ------------------------------- 
//* 객체 구조 분해 할당 destructuring assignments
//* 순서가 정해져있지 않다. 변수의 이름을 바꿀수 있을까? yes
//* 기본값도 설정해줄수 있다.
------------------------------ */

const salaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700,
}

//@ 구조 분해할당하면 아래 4줄이 한줄로 완료!
const { 권혜미, 이수연, 강예나, 김태일 } = salaries;


//* 원래 할당 해줘야 하는 방식
// const 권혜미 = salaries.권혜미;
// const 이수연 = salaries.이수연;
// const 강예나 = salaries.강예나;
// const 김태일 = salaries.김태일;


console.log(권혜미);


function setElementCss(options) {

  const {
    width:w = 100,
    height:h = 10,
    overflow = ' ',
    color:c = '#fff'
  } = options;

  console.log(w, c);
}


const defaults = {
  overflow: false,
  height: 200,
  width: 100,
  color: 'orange',
}


setElementCss({
  width: 50,
  height: 100,
  color: 'red',
  overflow: true
});

