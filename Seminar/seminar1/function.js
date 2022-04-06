/**
 * @함수
 */
// 일급 객체이기 때문에 특정 변수에 함수를 담을 수 있다.

// 함수 선언식
function sum(a, b) {
  return a + b;
}

// 함수 표현식
const sub = (a, b) => {
  return a > b ? a - b : b - a;
};
console.log(sub(10, 5));

// 함수의 파라미터로 함수를 보낼 수 있다.
const func = (num) => {
  return num * num;
};

const muiltiple = (func, num) => {
  console.log(func(num));
};

muiltiple(func, 3);
