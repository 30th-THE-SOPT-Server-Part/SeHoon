const str = 'ㅇㅋ';
console.log(typeof str);

const num = 1;
console.log(typeof num);

const bool = true;
console.log(typeof bool);

const message = `아 ${str}, ${num}은 ${bool}`;
console.log(message);
console.log(typeof message);

// array
const objectArray: Object[] = [
	{
		name: '캐치미',
		sopt: 28,
	},
	{
		name: '필린',
		sopt: 29,
	},
	{
		name: '헤커',
		sopt: 30,
	},
];

const nums: number[] = [1, 2, 3, 4];

// Object
// const obj1: object = {
//   name: "ㅎㅇ",
//   nums: [1, 2, 3],
//   test: function () {
//     this.nums.map((item) => console.log(item));
//   },
// };

// const obj2: Object = {
//   name: "ㅎㅇ",
//   nums: [1, 2, 3],
//   test: function () {
//     this.nums.map((item) => console.log(item));
//   },
// };

// => object, Object의 차이
// => object를 권장
const f1 = (ob1: object): void => {
	// 원시타입을 제외한 나머지 전체
	console.log(ob1);
};

const f2 = (ob2: Object): void => {
	// 모든 타입 상관 없이
	console.log(ob2);
};

f1([1, 2, 3, 4]);
f2('hi');

/**
 * @타입단언
 */
const name4: any = '세훈';
const name4Length: number = (<string>name4).length; // 타입 단언
console.log(name4Length);

const name5: any = '세훈';
const name5Length: number = (name5 as string).length; // 타입 단언
console.log(name5Length);

/**
 * @any
 */
