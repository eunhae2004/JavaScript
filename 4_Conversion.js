// 타입 변환

console.log(10 + 20); //30
console.log(10 + "20"); // 1020 숫자와 문자가 합쳐지면 전부 문자열이 된다.
console.log("3" * "5"); // 15 문자 * 문자 -> 자동 형변환 (문자 -> 숫자)
console.log(1 - "일"); // NaN (숫자가 아님을 의미)

const num1 = "10";
const num2 = "3.5";
const num3 = 5;

console.log(`현재 num1의 타입 ${typeof num1}`); //현재 num1의 타입 string

console.log(`Number(num1)의 타입: ${typeof Number(num1)}`); // number. num1이 Number에 의해 타입이 변화하고, 이후 typeof가 값을 읽는다.

console.log(`현재 num3의 타입: ${typeof num3}`); // number

console.log(`Stirng(num3)의 타입: ${typeof String(num3)}`); // String

console.log(`Boolean(num1)의 타입: ${typeof Boolean(num1)}, ${Boolean(num1)}`); // 10-> Boolean -> true (0 제외하곤 전부 true가 된다 )

console.log(`Object(num1)의 타입: ${typeof Object(num1)}, ${num1}`); // Object, 10

console.log(`parseInt(num2)의 타입: ${typeof parseInt(num2)}, ${num2}`); // 3, parseInt -> "3.5" -> 숫자 -> 정수로 변환

console.log(`parseFloat(num1)의 타입: ${typeof parseFloat(num2)}, ${num2}`); // "10" -> 정수 -> 실수
