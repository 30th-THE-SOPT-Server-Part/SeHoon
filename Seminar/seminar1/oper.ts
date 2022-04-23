/**
 * @연산자
 */

// ++ 은 +1
let num1: number = 2;
let num2: number = 3;
let num3: number = 5;
let num4: string = "5";

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

if (num1 + num2 === num3) console.log("5와 5는 타입과 값이 모두 같다.");
// ERR =>  if (num1 + num2 === num4) console.log("5와 '5'는 타입과 값이 모두 같다.");
if ((num1 * num2) % num1 === 0) console.log("6 % 2 는 0 ");

/**
 * @AND_OR
 */
let result1: boolean = num1 === 2 && num2 === 3;
if (result1) console.log("a는 2, num2는 3이다.");

// OR 연산자는 (||) 두 조건 중 하나만 만족해도 된다.
let result2: boolean = num1 === 2 || num2 === 0;
if (result2) console.log("!");

// ERR => let result3: boolean = 0 === false;
// if (result3) console.log("?!?!?!?");

console.log(typeof num1);
