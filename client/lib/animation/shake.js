



 /* global gsap */

 export const shake = gsap.to('form',{
	duration:0.1,
	x:-10,
	repeat:5,
	yoyo:true,
	clearProp:'x',
	paused:true		// 이게 없으면 새로고침시에도 실행된다.
})