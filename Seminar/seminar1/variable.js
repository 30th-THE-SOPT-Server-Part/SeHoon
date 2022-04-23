/**
 * @변수
 */

// var는 재선언, 재할당이 자유롭다.
var name = "가";
var name = "나";

console.log(name);

// SyntaxError
// let은 재선언이 불가능. 재할당만 가능하다.
// let name2 = "다";
// let name2 = "라";

// console.log(name2);

// SyntaxError
// const는 재선언, 재할당이 불가능하다.
// const name3 = "어쩌구";
// name3 = "저쩌구";

// console.log(name3);

/**
 * @스코프
 */

// var 는 선언된 블록 밖에서도 생존
if (true) {
  var x = "ㅎㅇ요";
}
console.log(x);

// ReferenceError: y is not defined
// let, const 는 선언된 블록 안에서만 생존
// if (true) {
//   let y = "ㅎㅇㅋㅋ";
// }
// console.log(y);

const foo = () => {
  if (true) {
    var z = "허니콤보";
    console.log("if 블록 -> ", z);
  }
  console.log("foo 블록 -> ", z);
};
console.log("global -> ", z); // ReferenceError: z is not defined
// -> var는 function scope를 가지므로 함수 밖에서 호출 실패!

// 호이스팅, 재선언, 재할당의 문제로 ES6부터 var 보다는 let, const 를 권장합니다.
