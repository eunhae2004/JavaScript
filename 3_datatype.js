/* 
    기본형(Primitive Type)
*/
let num = 20;
let str = "Hello, JS!";
let isReady = true;
let nothing = null;
let notDefined;
let bigNumber = 12345678901234567890n;
let unique = Symbol("id");

console.log("기본형 타입 출력");
console.log("num: ", num);
console.log("str: ", str);
console.log("isReady: ", isReady);
console.log("nothing: ", nothing);
console.log("noDefind: ", notDefined);
console.log("bigNumber: ", bigNumber);
console.log("unique: ", unique);

let obj1 = { name: "apple" };
console.log(obj1.name);
let obj2 = obj1;
obj2.name = "banana";
console.log(obj1.name); // banana
console.log(obj2.name); // banana

/* 
    참조형 (Reference Type) 
*/
let person = { name: "apple", age: 20 };
let numbers = [1, 2, 3, 4, 5];
let greet = function () {
  return "안녕하세요~";
};
let now = new Date(); // JS 내장 객체. new로 Heap 영역에 새로 올릴 수 있다.

console.log("참조형 타입 출력");
console.log("person: ", person);
console.log("numbers: ", numbers);
console.log("greet(): ", greet()); //+() -> 함수를 실행해줘
console.log("now", now);
