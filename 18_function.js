/*
function sayHello() {
  console.log("안녕하세요~");
}

sayHello();

*/

//  함수의 생성 위치는 호출 가능 위치와 상관 없다.
//   --> '호이스팅'
//         자바스크립트가 코드를 실행하기 전에, 변수와 함수 선언을 위로 끌어올리는 기능.

// let의 경우 호이스팅 되어 미리 메모리에 올라가는 것은 마찬가지이지만, 선언되기 전에는 사용 불가능하도록 한다.

const sayHello = function () {
  console.log("안녕하세요");
};

sayHello();

// 익명 함수를 변수에 저장하는 형식.
// 함수를 선언한 것이 아닌 변수를 선언한 것이므로 let, const 등의 형식으로 선언한 변수에 담을 경우 흐름에 따라 앞서 설명했던 것처럼 호출가능여부가 갈린다.

// 1. 매개변수가 없는 함수
function showMessage() {
  console.log("환영합니다!!");
}
showMessage(); //"환영합니다!!"

// 2. 매개변수가 있는 함수
// let name = "으네"
function greet(name) {
  console.log("안녕하세요," + name + "님!");
}
greet("으네"); //"안녕하세요, 으네님!"
greet(); // "안녕하세요, undefined님!"
greet(false); // "안녕하세요, false님!"
function subtract(num1, num2) {
  result = num1 - num2;
  console.log(`뺄셈 결과: ${result}`);
}
subtract(10, 5); //5
subtract("안뇽안뇽", "빠이빠이"); // NaN

// 3. return이 있는 함수
function add(a, b) {
  return a + b;
}
console.log(add(10, 3)); //13
let result2 = add(10, 3);
console.log(result2); //13

// 4. 기본값이 있는 함수
function greeting(name = "게스트") {
  console.log("안녕하세요", name + "님!");
}
greeting(); //안녕하세요, 게스트님!
greeting("으네"); //안녕하세요, 으네님!

// 5. 가변 매개변수 함수
function sum(...numbers) {
  // numbers = [1, 2, 3]
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(30, 20, 34, 129, 123));

//6. 즉시 실행 함수
(function () {
  console.log("이 함수는 즉시 실행됩니다.");
})();

//7. 함수 안의 함수 (중첩 함수)
function outer() {
  function inner() {
    console.log("안쪽 함수 실행!");
  }
  // 내부 함수는 바깥쪽 함수의 내부에서만 실행할 수 있다.
  inner();
}
outer(); // 따라서 바깥쪽에서는 바깥쪽 함수만을 실행시킬 수 있다.

// 8. 함수에서 함수를 return (고차 함수)
/*
    function (name){
        console.log("안녕하세요" + ", " + name + "님!");
    }
*/
function createGreeting(message) {
  return function (name) {
    console.log(message + ", " + name + "님!");
  };
}

const hello = createGreeting("안녕하세요!");

/* 
    const hello = function (name){
        console.log("안녕하세요" + ", " + name + "님!");
    }
*/
hello("김사과");
