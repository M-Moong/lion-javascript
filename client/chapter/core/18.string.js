/* --------------------- */
/* String Type           */
/* --------------------- */

let message = 'less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength',stringTotalLength)

// 특정 인덱스의 글자 추출
let extractCharacter = message[10];
console.log('extractCharacter',extractCharacter)

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = message.replace('s', 'l');
console.log('immutableChangeCharacter',immutableChangeCharacter)


/* -------------------------------------------------------------------------- */
//% 아래의 요소들은 다 값을 반환하는 메서드 이다.

// 부분 문자열 추출 - 숫자를 하나만 적으면 그 숫자부터 끝까지를 의미한다.
let slice = message.slice(1, 3);
console.log('slice',slice)

let subString = message.substring(8, -1);
console.log('subString',subString)

let subStr = message.substr(1, 3);
console.log('subStr',subStr)

// 문자열 포함 여부 확인 - 포함되어 있다면 그 문자에 해당하는 인덱스를 / 없다면 -1
let indexOf = message.indexOf('i');
console.log('indexOf', indexOf)
// validation 주는법
// if(message.indexOf('i') > 0)


//& 뒤쪽부터 탐색해서 온다 (때문에 같은 문자값중 맨 뒤의 값이 가지고 있는 인덱스를 가져온다.)
let lastIndexOf = message.lastIndexOf('m');
console.log('lastIndexOf',lastIndexOf)

let includes = message.includes('less');
console.log('includes',includes)


//& 해당 문자열이 어떤것으로 시작하는지 체크한다 - true / false
let startsWith = message.startsWith('Less');
console.log('startsWith',startsWith)

//& 해당 문자열이 어떤것으로 끝나는지 체크한다 - true / false
let endsWith = message.endsWith('more.');
console.log('endsWith',endsWith)

// 공백 잘라내기
let trimLeft = message.trimLeft();			// 이제 안씀
let trimRight = message.trimRight();		// 이제 안씀

let str = '            startEnd             '
let trim = str.trim();
console.log('trim',trim)


//& 중간 공백을 없애주는 식 (반복문 x)
let dum = ' f nsdf e f s d f s euf nf   '
console.log(dum.replace(/\s*/g, ''));

// 함수 버전
function normalText(string) {
	return string.replace(/\s*/g,'')
}

// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat',repeat)

// 소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase',toLowerCase)

// 대문자 변환
let toUpperCase = message.toUpperCase();
console.log('toUpperCase',toUpperCase)

// 텍스트 이름 변환 유틸리티 함수
//& 카멜케이스
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

console.log(toCamelCase(message));

//& 파스칼케이스 
function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

console.log(toPascalCase(message));
