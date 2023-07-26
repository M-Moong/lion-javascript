

const URL = 'https://jsonplaceholder.typicode.com/users';


// async에 속해있지 않더라도 promise 객체를 뒤에 두고 있다면 await을 사용할수 있다.

/* //# fetch 요청은 2개의 await 호출로 구성되어 있다.
// response는 현재 상태 이고, data를 보기위해서 한번더 await을 해야한다.
const response = await fetch('https://pokeapi.co/api/v2/pokemon/30');

console.log(response);		// 통신에 대한 상태? 값이 담겨 있음.

if(response.ok) {
	const data = await response.json();		// response에서 한번더 까주면 원하는 데이터가 나온다.
	console.log(data);
}
 */

/* -------------------------------------------------------------------------- */

const defaultOptions = {
	method: 'GET',
	body: null,
	headres: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin':'*'
	}
}

/* -------------------------------------------------------------------------- */
// async는 프로미스 객체를 반환하기때문에 return에서 굳이 await을 해줄 필요가 없다.
export const tiger = async (options) => {

	const {url, ...restOptions} = {
		...defaultOptions,
		...options,
		headres: {
			...defaultOptions.headres,
			...options.headres
		}
	}

	const response = await fetch(url, restOptions);

	// console.log(response);		//promise 객체 발견.

	if(response.ok) {
		response.data = await response.json();
	}
  
	return response;
}

/* -------------------------------------------------------------------------- */

tiger.get = (url, options) => {
	return tiger({
		url,
		...options
	})
}
// tiger.get();	 //	promise object


tiger.post = (url, body, options) => {
	return tiger({
		method:'POST',
		url,
		body: JSON.stringify(body),
		...options
	})
}


tiger.delete = (url, options) => {
	return tiger({
		method:'DELETE',
		url,
		...options
	})
}


tiger.put = (url, body, options) => {
	return tiger({
		method: 'PUT',
		url,
		body:JSON.stringify(body),
		...options
	})
}
// const data = await tiger.get(URL)

// console.log(await data.data);











/* 
const response = await tiger({
	url:URL,
});

const userData = response.data;

console.log(userData);
 */
// userData.forEach((item) => {
// 	console.log(item);
// });



















// const data = await tiger(URL);

// console.log(await tiger('data'));

// tiger('https://pokeapi.co/api/v2/pokemon/30')




























