/* --------------- */
/* For Of Loop     */
/* --------------- */


// iterable(반복 가능한) = String, Array, Array-like

const arrayLike = {
	0: 'body',
	1: 'head',
	2: 'div',
	length: 3
}

const str = '유사배열입니다.';

for (const value of str) {
	// console.log(value);
}

// 인덱스 [ ]
// length




const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

for (let value of languages) {
	const name = value.name;

	// if (name == 'Java') continue;

	// name이 'Java' 문자를 포함하고 있다면 break;
	
	
	if (name.includes('Java') && name.length < 5) break;
	
	// console.log(name);
}












// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기

const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: {
      offset: '-4:00',
      description: 'Atlantic Time (Canada), Caracas, La Paz',
    },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환
// - for ~ in 문

// 객체 안의 모든 객체들을 확인하기 위해 쓰는 함수 (객체 in 객체 in 객체)
/* 
for (let key in randomUser) {
	if ({}.hasOwnProperty.call(randomUser, key)) {
		let L1 = randomUser[key];

		if (typeof L1 === 'object') {
			console.log('L1' , L1);
			
			for (let key in L1) {
				if (({}).hasOwnProperty.call(L1,key)) {
					let L2 = L1[key];

					if (typeof L2 === 'object') {
								console.log('L2' , L2);

						for (let key in L2) {
							if (({}).hasOwnProperty.call(L2, key)) {
								let L3 = L2[key];
								console.log("L3" , L3);
							}
						}
					}
				}
			}
		}
  }
} */


// - for ~ of 문

// Object.keys()
// Object.values()
// Object.entries() 객체 자체의 열거가능한 속성 key, value를 가진 쌍의 배열을 반환,,

// console.log( Object.entries(randomUser) );

for (let keyValue of Object.entries(randomUser)) {

	let key = keyValue[0];
	let value = keyValue[1];

	console.log('L1 : ', value);

	if (typeof value === 'object') {
		for (let keyValue of Object.entries(value)) {
			let key = keyValue[0];
			let value = keyValue[1];

			console.log('\tL2 : ', value);

			if (typeof value === 'object') {
				for (let keyValue of Object.entries(value)) {
					let key = keyValue[0];
					let value = keyValue[1];
					
					console.log('\t\tL3 : ', value);
				}
			}
		}
	}
}



// - 성능 비교 진단
