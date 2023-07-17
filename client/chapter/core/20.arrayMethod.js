/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

//@ Array.isArray    true | false

// const isArray = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';

// function nomalIsArray(data){
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';
// }


// const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';

// function normalIsNull(data){
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';
// }



const arr = [10, 100, 1000, 10000];

const people = [
	{
		id: 0,
    name: '김다연',
    profession: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'MAksd23',
  },
  {
		id: 1,
    name: '이현주',
    profession: '수영선수',
    age: 40,
    imageSrc: 'afdfakA',
  },
  {
		id: 2,
    name: '김희소',
    profession: '물음표살인마',
    age: 30,
    imageSrc: 'fAKqi321',
  },
  {
		id: 3,
    name: '김규민',
    profession: '래퍼',
    age: 52,
    imageSrc: 'AFGq3d23',
  },
  {
		id: 4,
    name: '전진승',
    profession: '드라마평론가',
    age: 18,
    imageSrc: 'fQa15f3',
  },
];

/* 요소 순환 -------------------------------------------------------------- */

// forEach : 값을 따로 반환하지 않음.

arr.forEach((item, index) => {
	// console.log(item, index);
})


people.forEach((item) => {
	// console.log(item.name);
})


const span = document.querySelectorAll('span');

// 이벤트 처리 할 때 이 방식이 제일 좋은가요 ? no
// 이벤트 위임 

span.forEach((item, index) => {
  item.addEventListener('click', function () {
    // console.log(this, index);
  });
});


/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
//^ reverse
// arr.reverse()

// console.log(arr);

//^ splice : 맥가이버 칼 - 원하는값을 추가제거 다 가능하다.
// 1번부터 0개 제거 후 5, 13 추가
arr.splice(1, 0, 5, 13)
console.log(arr);

// compare function
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환 값 == 0 : a와 b의 순서를 바꾸지 않는다.
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.

//^ sort
arr.sort((a, b) => {
	return a - b;
})

console.log(arr);

/* 새로운 배열 반환 - 기존 array를 훼손하지 않습니다. --------------------------------------------------------- */

const user = ['선범', '효윤', '준석'];

//& concat
// const newArray = arr.concat(user);
const newArray = [...arr, ...user, 'javascript', 'css'];
console.log(newArray);

//& slice
const slice = arr.slice(2, 5);
console.log(slice);

//& toSorted
const toSorted = arr.toSorted((a, b) => {
  return b- a;
})
console.log(toSorted);

//& toReversed
const toReversed = arr.toReversed();
console.log(toReversed); 

//& toSpliced
const toSpliced = arr.toSpliced(2, 0, 'javascript', 'css', 'react');
console.log(toSpliced);

//&&&& map - 매우 중요하다고 강조해주심
// 1.
// const job = people.map((item) => {
//   return `<div>${item.profession}</div>`
// })

// // document.body.insertAdjacentHTML('beforeend', item);

// // , 를 없애기 위해서 아이템들만 넣어주기 위해 forEach를 사용하였다.
// job.forEach((item) => {
//   document.body.insertAdjacentHTML('beforeend', item);
// })

// console.log(job);

// const job = people.map((item, index) => {
//   return /* html */ `
//     <div class="userCard">
//       <div class="imageField">
//         <img src="${item.imageSrc}" alt="" />
//       </div>
//       <span>이름:${item.name}</span>
//       <span>직업:${item.profession}</span>
//       <span>나이:${item.age}</span>
//     </div>
//   `;
// });

// job.forEach((item) => {
//   document.body.insertAdjacentHTML('beforeend', item);
// });


// 2.
// 피플 자료구조에서 나이만 모아놓은 배열이 필요하다. => 가공처리 나이 -1 내보내고 싶다.
const newAge = people.map((item) => item.age - 1)


/* 요소 포함 여부 확인 ------------------------------------------------------ */

//& indexOf - 몇번째 인지 찾는거
// console.log(arr.indexOf(10));

//& lastIndexOf
// console.log(arr.lastIndexOf(10));

//& includes
// console.log(arr.includes(1000));

/* 요소 찾기 -------------------------------------------------------------- */

//& find : 해당 아이템을 반환
const find = people.find((item) => {
  return item.name === '김희소'
})

console.log(find);

//& findIndex
const findIndex = people.findIndex((item) => {
  return item.id === 3
})

console.log(findIndex);

/* 요소 걸러내기 ----------------------------------------------------------- */

//&&&& filter : 배열을 반환
const filter = people.filter((item) => {
  return item.id > 2
})

console.log(filter);


/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

//&&&&& reduce
const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age
},0)

// console.log(totalAge);

const template = people.reduce((htmlCode, cur) => htmlCode + `<div>${cur.name}</div>`, '')

document.body.insertAdjacentHTML('beforeend', template);

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

const str = '봉석 윤진 예나 시연 진만 정아';

//& split : 문자 ➡️ 배열
const stringToArray = str.split(' ');

console.log(stringToArray);


//& join : 배열 ➡️ 문자
const arrayToString = stringToArray.join('/')

console.log(arrayToString);



