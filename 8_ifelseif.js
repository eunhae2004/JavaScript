/*

let age = 20;

if (age >= 18) {
  console.log("성인");
} else if (age >= 13) {
  console.log("청소년입니다.");
} else {
  console.log("유아입니다.");
}

*/

let kor = 100;
let eng = 76;
let math = 95;
let total = kor + eng + math;
let avg = total / 3;
let grd;
// 평균을 기준으로 90점 이상은 A, 80 이상 B, 80이상 C, 60이상 D, 나머지 F

/* 실행결과
    
    총점: XX점
    평균: XX점
    학점: X

*/

console.log("----------------------------------\n");
// 총점
console.log(`총점: ${total}점`);
// 평균
console.log(`평균: ${parseInt(avg)}점`);
// 학점

if (avg >= 90) {
  grd = "A";
} else if (avg >= 80) {
  grd = "B";
} else if (avg >= 70) {
  grd = "C";
} else if (avg >= 60) {
  grd = "D";
} else {
  grd = "F";
}

console.log(`학점: ${grd}\n`);

console.log("----------------------------------");
