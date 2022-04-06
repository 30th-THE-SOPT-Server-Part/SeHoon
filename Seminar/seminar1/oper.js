/**
 * @연산자
 */

// ++ 은 +1
let a = 2;
let b = 3;
let x = 5;
let y = "5";
// 사칙연산
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

if (a + b === x) console.log("5와 5는 타입과 값이 모두 같다.");
if (a + b === y) console.log("5와 '5'는 타입과 값이 모두 같다.");
if ((a * b) % a === 0) console.log("6 % 2 는 0 ");

// AND, OR

// AND 연산자 (&&)는 두 조건이 모두 만족해야 한다.
if (a === 2 && b === 3) console.log("a는 2, b는 3이다.");

// OR 연산자는 (||) 두 조건 중 하나만 만족해도 된다.
if (a === 2 || b === 0) console.log("!");

if (0 === false) console.log("?!?!?!?");

console.log(typeof a);
