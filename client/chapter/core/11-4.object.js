/* --------------------------- */
/* Object Methods and This     */
/* --------------------------- */

// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
	total:0,
  date: '2023. 7. 11',
  tableIndex: 5,
  menu: [
    { name: '통 새우 돈까스', price: 13000, count: 2 },
    { name: '치즈 돈까스', price: 10000, count: 1 },
    { name: '곰곰 삼계탕', price: 20000, count: 5 },
    { name: '곰곰 해장국', price: 8000, count: 10 },
  ],
  //^ forEach를 이용한 함수
	// totalPrice() {
  //   this.menu.forEach((item) => {
  //     this.total += item.price * item.count;
	// 	});
	// 	return this.total;
  // },

  //^ reduce를 이용한 함수
  // totalPrice() {
  //   const result = this.menu.reduce((acc, item) => {
  //     return acc + (item.price * item.count)
  // 	}, 0)
  // 	return result;
  // },

	//^ reduce를 한줄로 리팩토링 
	// totalPrice() {
	// 	return this.menu.reduce((acc, item) => acc + item.price * item.count, 0);
	// }
};


//# (반복문을 돌리지않고) 돈까스 총 가격
// (shopOrder.menu[0].price * shopOrder.menu[0].count) +
//   (shopOrder.menu[1].price * shopOrder.menu[1].count);

//# (반복문을 이용해서) 돈까스 총 가격
// let total = 0;
// shopOrder.menu.forEach((item) => {
// 	total += item.price * item.count;
// })
// console.log(total);

// 메서드와 this
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만,
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.

// 메서드 단축 구문

// 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this

const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  getItem(index) {
    return this.items[index];
  },

  // 원래는 이렇게 선언이 되어있었다.
  // 하지만 화살표 함수로 선언이 되어 있으면
  // this가 window를 가리키기 때문에 아래처럼 수정한다.
  // addItem: (newItem) => {
  //   this.items.push(newItem);
  // }

  //# 수정한 addItem - Consise방식으로 선언한다.
  addItem(newItem) {
    this.items.push(newItem);
	},
};


navigationMenu.addItem({
	id: 'link-l',
	text: 'Lycos',
	link: 'https://lycos.co.kr'
});




