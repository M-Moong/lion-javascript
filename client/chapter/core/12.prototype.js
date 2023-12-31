/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


const animal = {
  legs: 4,
  tao: true,
  stomach: [],

  //# 앞에 set을 붙이면 Enumerable도 없고 / setter 역할 부여
  set eat(food) {
    this.stomach.push(food);
  },

  //# 앞dp get을 붙이면 Enumerable도 없고 getter 역할 부여
  get eat() {
    return this.stomach;
  },
};


const tiger = {
  pattern: '호랑이무늬',
  prey: '',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
};

const fox = {
  prey: '',

}

tiger.__proto__ = animal;
fox.__proto__ = animal;



// 생성자 함수




// new Object(), 생성자 함수, {}, 일반함수

// 함수는 두가지 일을 할 수 있다. (양면의 얼굴을 가지고 있다)

// 함수 이름 앞에 대문자로 시작하면 암묵적으로 
//@ 생성자 함수 
// 라고 칭한다. 

function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

function Button(name) {
  this.name = name;
}

function button() {
  
}

const a = button()             //& 일반함수
const b = new Button('버튼')    //& 생성자 함수


const person1 = new User('dkj', 23, 'esjflis@anver.cion')
const person2 = new User('이름', 22, '이메일');


/* -------------------------------------------------------------------------- */


// class Mama {
//   stomach = [];
//   legs = 4;
//   tail = true;

//   constructor(food) {
//     this.stomach.push(food);
//   }

//   printEat (food) {
//   return this.stomach;
//   } 
// }

// const ccc = new Mama();
// const ddd = new Mama('상어');


// function Animal() {
//   this.stomach = [];
//   this.legs = 4;
//   this.tail = true,
//   this.eat = function (food) {
//     this.stomach.push(food);
//   };
//   this.printEat = function (food) {
//     return this.stomach;
//   };
// }


// const tiger = new Animal();


// tiger.pattern = '호랑이 무늬';

// tiger.hunt = function (target) {
//   (this.prey = target), console.log(`${target}에게 슬금슬금 접근합니다.`);
// };


// const cat = new Animal();

// cat.say = () => '니야아이옹';

// const fox = new Animal();
// const wolf = new Animal();
// const dog = new Animal();





// const aaa = new Mama();
// const bba = new Mama('JJJJot',22);


// aaa.siej = () => 'sdkjflse';


/* -------------------------------------------------------------------------- */

