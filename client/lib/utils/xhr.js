

import { refError } from "../error/refError.js";




//! AJAX란
//? AJAX(Asynchronous JavaScript and XML)는 웹 페이지에서 비동기적으로 서버와 데이터를 주고받는 기술을 의미한다.

//? JSON은 요즘에 많이 사용되는 데이터 교환 형식으로, AJAX에서 메타인 통신 도구로 사용됩니다. JSON은 JavaScript Object Notation의 약자로, 데이터를 효과적으로 표현하기 위해 사용됩니다.

//? XML은 AJAX 탄생 당시에 주로 사용되던 메타 통신 도구이지만, 요즘은 JSON이 더 많이 사용됩니다.

//? 동기적(Synchronous)은 모든 웹이 동기적으로 동작하는 것을 의미합니다. 사용자 인터페이스와 서버 간의 요청과 응답은 왔다갔다하여 사용자에게 꿈뻑거림(새로고침)을 유발합니다.

//? 비동기적(Asynchronous)은 내용물의 일부만 바꿔치기하여 웹 페이지를 업데이트하는 방식을 말합니다. AJAX를 이용하면 브라우저에서 필요한 데이터만 요청하고 서버는 그에 대한 일부 데이터만 응답하게 됩니다. 
//? 이로 인해 화면이 새로고침 없이 부드럽게 애니메이션을 보여주는 싱글 페이지 어플리케이션(SPA) 등의 기법이 가능하며, 사용자 경험이 개선됩니다.

//? 브라우저는 내장된 AJAX 엔진을 사용하여 필요한 데이터를 요청하고, 서버는 해당 데이터의 일부만을 응답합니다. 서버에서 받은 정보는 주로 JSON 또는 XML 형식으로 `문자화`하여 브라우저에 전달되며, 
//? 브라우저에서는 이를 다시 해석하여 웹 페이지에 업데이트합니다.

//? 서버는 AJAX에게 응답하며, 데이터를 주로 JSON 또는 XML 형식으로 문자화하여 전달합니다. 브라우저에서는 받은 정보를 해석기로 다시 해석하여 웹 페이지에 표시합니다.

//! XHR & Fetch
//? AJAX 엔진의 종류로는 XMLHttpRequest(XHR)과 Fetch API가 있다.

//? XMLHttpRequest (XHR):

//? XMLHttpRequest는 웹 브라우저에서 비동기적으로 서버와 데이터를 주고받기 위해 사용되는 JavaScript 객체입니다.
//? 오래된 방식의 AJAX 엔진으로, 오래된 브라우저를 지원하는 데 유용합니다.
//? 비동기적으로 데이터를 요청하고 응답을 처리할 수 있으며, 웹 페이지를 새로고침하지 않고도 데이터를 업데이트할 수 있습니다.
//? 사용법이 복잡하고 코드가 장황할 수 있어서 가독성이 떨어지는 '단점'이 있습니다.

//? Fetch API:

//? Fetch API는 최신 웹 표준으로, 간편하고 사용하기 쉬운 방식으로 비동기적으로 데이터를 주고받을 수 있습니다.
//? Promise 기반의 구조를 갖고 있어서 비동기적으로 데이터를 처리할 때 더 편리하고 가독성이 좋습니다.

//! xhr을 사용하는 필수요소
//! xhr.open
//! xhr.addEventListener(event, callback)
//! xhr.send

//* XMLHttpRequest 객체는 웹 브라우저에서 서버와 비동기적으로 데이터를 주고받기 위해 사용되는 JavaScript 객체
//const xhr = new XMLHttpRequest();
//console.log(xhr.readyState); //* readyState: 0

//? xhr.open(method, url)
//xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
//console.log(xhr.readyState); //* readyState: 1

//* XMLHttpRequest라는 객체가 받아짐!
//console.log(xhr);

//? onreadystatechange:
//* onreadystatechange는 XHR 객체의 상태가 변할 때마다 호출되는 이벤트 핸들러입니다.
//* XHR 객체의 상태가 변경되면 해당 이벤트 핸들러가 호출되어 추가적인 처리를 할 수 있습니다.
//* 이벤트 핸들러를 등록할 때는 xhr.onreadystatechange 형태로 사용하며, 콜백 함수를 설정하여 상태 변화에 따른 동작을 정의할 수 있습니다.

//? readyState:
//* readyState는 XHR 객체의 상태를 나타내는 속성입니다.
//* readyState는 0부터 4까지의 값으로 표현됩니다.
//* 0: uninitalized(초기화되지 않은 상태) => xhr 객체를 생성하고 open되기 전 상태
//* 1: loading(로드되지 않은 상태 (open 메서드 호출 후)) => open이후 event가 추가되기 전 상태
//* 2: loaded(로드된 상태 (send 메서드 호출 후))
//* 3: inertactive(데이터 수신 중인 상태 (서버에서 응답을 받는 중))
//* 4: complete(데이터 수신 완료 상태 (서버 응답을 모두 받은 상태))

//xhr.addEventListener('readystatechange', () => {
//  console.log(xhr.readyState); //* 데이터가 불러와짐에 따라 readyState: 2=>3=>4

//  if (xhr.status >= 200 && xhr.status < 400) {
//    if (xhr.readyState === 4) {
//      console.log(xhr.response);
//    }
//  } else {
//    console.log('실패');
//  }
//});

//? status:
//* status는 서버로부터 받은 HTTP 상태 코드를 나타내는 속성입니다.
//* HTTP 상태 코드는 서버 응답의 성공 여부를 나타내는 숫자로서, 주요 상태 코드에는 200(성공), 404(찾을 수 없음), 500(서버 오류) 등이 있습니다.
//* status 속성을 통해 서버 응답의 상태를 확인하고 이에 따른 처리를 할 수 있습니다.

//? xhr.send(null | body): send를 호출해야 비동기가 실행됨!
//xhr.send();


/* //# xhr의 [readystate]

	[readystate]

	0: uninitialized
	1: loading
	2: loaded
	3: interactive
	4: complete

*/

/* //# xhr의 기본 구조
//@ 1. 객체 선언
const xhr = new XMLHttpRequest();

//% console.log('readyState : ' + xhr.readyState);  // readyState - 0번 (uninitialized)

//@ 2. open
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

//% console.log('readyState : ' + xhr.readyState);  // readyState - 1번 (loading)

//@ 3. 이벤트 추가
xhr.addEventListener('readystatechange', () => {
	const {status, readyState, response} = xhr

	if (status >= 200 && status < 400) {
		if (readyState === 4) {
			console.log(JSON.parse(response));
		}
	} else {
		console.log('실패');
	}

	//^ console.log('status : ' + xhr.status);	// status : http 상태코드 - 200번

	//% console.log('readyState : ' + xhr.readyState); // readyState - 2,3,4번
	// ReadyState - 2,3,4번 동시 (loaded, interactive, complete) 
	// 이벤트 안에 있으면 2,3,4가 다 공존한다.
})

//% console.log('readyState : ' + xhr.readyState);	// readyState - 1번 (loading)

//@ 4. send
xhr.send();

 */


/* callback------------------------
------------------------- */

// 객체 구조 분해 할당

export function xhr({ 
  method = 'GET', 
  url = '', 
  onSuccess = null, 
  onFail = null, 
  body = null, 
  headers = {
  'Content-Type':'application.json',
  'Access-Control-Allow-Origin':'*'
  } 
} = {}) {	// 매개변수를 구조 분해 할당으로 바로 받아준다. ={}의 의미는 자료형을 명시 (객체)
	
	const xhr = new XMLHttpRequest();		// XMLHttpRequest 생성

	xhr.open(method, url);		// 통신방법과 url로 open

	Object.entries(headers).forEach(([key, value]) => {		// headers에 있는 값들을 xhr에 설정해준다.
		xhr.setRequestHeader(key, value);
	})
	
	xhr.addEventListener('readystatechange', () => {		// 이벤트 시작
		const {status, readyState, response} = xhr;		// xhr의 객체에서 status, readyState, response 구조 분해 할당

		if (readyState === 4) {		// readState 4번은 complete 된 상태 
			if (status >= 200 && status < 400) {	// http 상태코드가 에러가 없을시 실행
				onSuccess(JSON.parse(response));		// 성공시 받은 데이터들을 파싱한다.
			} else {
				onFail('실패');
			}
		}
	});

	xhr.send(JSON.stringify(body));		// post나 put 과 같이 값을 수정하거나 생성할떄 send
}


/* //# xhr함수 호출 부분.
xhr({
	method: 'GET',
	url:'https://jsonplaceholder.typicode.com/users',
	onSuccess:()=> {},
	onFail: () => { },
	body: {
		name: 'tiger'
	},
	headers: {
		'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
	}
});
 */


//! Callback 동작 원리(onSuccess, result 부분)
//! 실행부의 3번째 인수로 함수를 전달한다
//! 선언부의 3번째 인자로 받은 함수는 const onSuccess = () => {}처럼 쓰일 수 있다.
//! onSuccess(JSON.parse(response))는 인수는 다시 실행부의 인자로 전달되어 사용할 수 있다.
//! 따라서, result값에 JSON.parse(reponse)가 들어가게 됨



//# ###########
// 1. 자바스크립트의 함수는 객체다.
// 2. 사용자(협업개발자) 입장 : 쉽게 쓰자
// 3. 설계자 -> 함수 안에 메서드(객체)를 넣어버리자 !!

// xhr.get()
// xhr.post()
// xhr.put()
// xhr.delete()


//& get과 delete는 body를 포함하지 않는다.
xhr.get = (url, onSuccess, onFail) => {
	xhr({
		url,
		onSuccess,
		onFail,
	})
}

xhr.delete = (url, onSuccess, onFail) => {
	xhr({
		method:'DELETE',
		url,
		onSuccess,
		onFail,
	})
}

//& post와 put은 값을 직접 접근하기에 body이 필요하다.
xhr.post = (url, onSuccess, onFail, body) => {
	xhr({
		method:'POST',
		url,
		body,
		onSuccess,
		onFail,
	})
}

xhr.put = (body, url, onSuccess, onFail) => {
	xhr({
		method:'PUT',
		url,
		body,
		onSuccess,
		onFail,
	})
}




/* Promise로 xhr 재구성하기 --------------------
------------------------------------- */

const defaultOptions = {
	method: 'GET',
	url: '',
	body: '',
	errorMessage: '서버와의 통신이 원할하지 않습니다.',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin':'*',
	}
}

export function xhrPromise(options) {

	//* mixin
	const {method, url, body, errorMessage, headers} = {...defaultOptions, ...options}
	// const config = Object.assign({},defaultOptions,options) 얉은복사를 하는 또다른 방법 (assign메서드)

	if(!url) refError('서버와 통신할 url은 필수값입니다.')

	const xhr = new XMLHttpRequest();
	
	xhr.open(method, url);
	
	Object.entries(headers).forEach(([key, value]) => {
		xhr.setRequestHeader(key, value);		// 헤더 설정
	})

	xhr.send(JSON.stringify(body));	// send는 단순히 보내는 것이기 때문에 순서가 상관없기 때문에 
																	// 이벤트 보다 위에 있어도 괜찮다. 

	return new Promise((resolve, reject) => {

		xhr.addEventListener('readystatechange', () => {
			if(xhr.readyState === 4) {
				if(xhr.status >= 200 && xhr.status < 400) {
					resolve(JSON.parse(xhr.response))
				} else {
					reject({message: '서버와의 통신이 원활하지 않습니다'})
				}
			} 
		})
	})
}


/* 
xhrPromise({
	url: 'https://jsonplaceholder.typicode.com/users'
})
	.then((res) => {
		res.forEach((item) => {
			console.log(item);
		})
	})
 */


xhrPromise.get = (url) => {
	return xhrPromise({url})
}

xhrPromise.post = (url, body) => {
	return xhrPromise({
		url,
		body,
		method:'POST'
	})
}

xhrPromise.delete = (url) => {
	return xhrPromise({
		url,
		method:'DELETE'
	})
}

xhrPromise.put = (url, body) => {
	return Promise({
		url,
		body,
		method: 'PUT'
	})
}



// console.log(xhrPromise.get('https://jsonplaceholder.typicode.com/users'));














