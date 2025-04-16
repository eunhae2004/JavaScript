/*
console.log("물 끓이기 시작");
setTimeout(function () {
  console.log("면 넣기"); //가리키는 포인터가 없기 때문에 실행할 때만 잠시 메모리에 올라왔다 사라진다.
}, 3000);
console.log("계란 준비하기");
0;
*/

// const { count } = require("console");

/*
function greet(name, callback) {
  console.log("안녕, " + name + "!");
  callback();//받은 함수의 주소를 가지고 실행
}

function sayBye() {
  console.log("잘 가~");
}

greet("김사과", sayBye);
*/

/*
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2); //map 함수: 배열의 각 요소에 주어진 콜백 함수 호출, 그 결과 모아 새로운 배열 생성.
console.log(doubled); //[2, 4, 6, 8]

function doSomething(callback) {
  console.log("작업 시작!");
  callback();
}

doSomething(() => {
  console.log("작업 완료!");
});

const calc_add = (a, b) => a + b;
const calc_multiply = (a, b) => a * b;

function calculater(num1, num2, action) {
  if (num1 < 0 || num2 < 0) return;
  const result = action(num1, num2);
  return result;
}

console.log(calculater(10, 3, calc_add));
console.log(calculater(10, 3, calc_multiply));

*/

/* 
    재귀함수를 통해 회문을 체크하는 프로그램을 만들어보자.

    isPalindrome(str)
*/

/*

const str = "역삼역";
const splitStr = [...str];
const count = 0;

function isPalindrome(splitStr) {
  if (count >= splitStr.length / 2 - 1) return true;

  if (splitStr[count] == splitStr[splitStr.length - count - 1]) {
    count++;
    return isPalindrome(splitStr);
  } else {
    return false;
  }
}

console.log(isPalindrome(splitStr));

*/

const input = "racecar";

function isPalindrome(str, left = 0, right = null) {
  if (right === null) {
    right = str.length - 1;
  }

  if (left >= right) return true;
  if (str[left] !== str[right]) return false;

  return isPalindrome(str, left + 1, right - 1);
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("역삼역"));
