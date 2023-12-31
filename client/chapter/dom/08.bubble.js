/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 
----------------------------------------------------------------- */

// e.stopPropagation() - 버블링을 막아준다. (여러개 눌리는거 막기)


const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', () => {
  console.log('%c section', 'color:orange');
},true);

article.addEventListener('click', (e) => {
	// e.stopPropagation()
  console.log('%c article', 'color:dodgerblue');
},true);

p.addEventListener('click', (e) => {
	// e.stopPropagation()
  console.log('%c p', 'color:hotpink');
},true);



//% true의 옵션을 주어서 부모부터 콘솔이 발생하게 만들었다.(캡처링) 부모->자식

/* 캡처링 
----------------------------------------------------------------- */
