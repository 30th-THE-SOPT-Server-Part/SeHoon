/**
 * @함수
 */
// 일급 객체이기 때문에 특정 변수에 함수를 담을 수 있다.

// 함수 선언식
function sum1(a: number, b: number) {
  return a + b;
}

// 함수 표현식
const sub1 = (a: number, b: number): number => {
  return a > b ? a - b : b - a;
};

// 함수의 파라미터로 함수를 보낼 수 있다.
const func1 = (num: number): number => {
  return num * num;
};

const muiltiple1 = (func: Function, num: number): void => {
  console.log(func(num));
};

const tsFunction = {
  sum1,
  sub1,
  func1,
  muiltiple1,
};

export default tsFunction;
