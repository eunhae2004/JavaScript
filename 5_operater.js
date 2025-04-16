let num = 10;
num++;
console.log(num);
//11

++num;
console.log(num);
//12

let result = 0;
result = ++num;
console.log(result);
//13

result = num++;
console.log(result);
//13

//WHY?: 증감연산자가 변수의 앞에 붙으면 = 보다 먼저 계산.
//      증감연산자가 변수의 뒤에 붙으면 = 보다 늦게 계산.

// ~> 따라서….
console.log(num);
//14

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

let a = 23;
let b = 14;
console.log(a & b); // 6
console.log(a | b); // 31
console.log(a ^ b); // 25

console.log(~a); // -24   ->  JS는 32비트 연산을 하므로
// ex) 5 -> '000(...전체 32개...)000101'으로 변환할 수 있다.
// 이 상태에서 ~ 연산자를 붙이면 0과 1이 역전되어 111(...전체 32개...)111010이 된다.
// 전체 데이터를 저장할 때 가장 앞에 붙는 비트는 양수/음수 비트다.
// 1: 음수, 0: 양수이므로 음수.
//

console.log(1.5 + 1.2 == 2.7); //true
console.log(1.2 + 1.1 == 2.3); //true
console.log(1.1 + 0.1 == 1.2); //false
//WHY? : 오늘 숙제

console.log(a << 1); //비트를 왼쪽으로 한 칸 밀어줘. ex)  101 -> 1010
console.log(a >> 1); //비트를 오른쪽으로 한 칸 밀어줘. ex) 101 -> 10
