import {getNode} from "../dom/index.js";






export const memo = (() => {
	
	const cache = {

	}	

	return (key, callback) => {
		if (!callback) return cache[key];
	
		if (cache[key]) {
			console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
			return cache[key];
		}

		cache[key] = callback();

	};
})();


//# setter
// memo('cube', () => getNode('#cube'));


//# getter
// console.log(memo('cube'));



// 객체를 만들어서 key:value 쌍으로 저장