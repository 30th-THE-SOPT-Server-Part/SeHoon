/**
 * @원시타입
 */
const name = "ㅇㅋ";
console.log(typeof name);

let age = 1;
console.log(typeof age);

const server = true;
console.log(typeof server);

const msg = `아 ${name}, ${age}은 ${server}`;
console.log(msg);
console.log(typeof msg);

// null은 object이다.
console.log(typeof null);
console.log(typeof undefined);

// 배열안에는 여러 타입들의 친구들을 담을 수 있다.
// Array는 객체 타입입니다.
let arr = [1, "ㅎㅇ", true];
console.log(arr);

let arr2 = Array(4, null, { test: 1 });
arr2.map((item) => console.log(item));

let objectArr = [
  {
    name: "캐치미",
    sopt: 28,
  },
  {
    name: "필린",
    sopt: 29,
  },
  {
    name: "헤커",
    sopt: 30,
  },
];
console.log(typeof objectArr);

let numbers = [1, 2, 3, 4];
const newNumbers = numbers.map((item) => item * 2);

// Object
const obj = {
  name: "ㅎㅇ",
  nums: [1, 2, 3],
  test: function () {
    this.nums.map((item) => console.log(item));
  },
};

obj.test();
