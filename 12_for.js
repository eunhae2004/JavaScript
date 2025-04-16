for (let i = 1; i <= 5; i++) {
  console.log(`현재 숫자: ${i}`);
}

for (let i = 1; i <= 10; i = i + 2) {
  console.log(`현재 숫자: ${i}`);
} //9 -> 11로 바로 건너가기 때문에 9에서 끝난다

// 썰에 의하면: 프로그래밍 초창기 때 관련 저서 쓴 사람이 반복문 변수를 i로 사용함

// for (let dan = 2; dan <= 9; dan++) {
//   console.log(`-----------\n`);
//   for (let i = 1; i <= 9; i++) {
//     console.log(`${dan} * ${i} = ${dan * i}`);
//   }
//   console.log(`-----------\n`);
// }

let dan = 2;
let i = 1;
while (dan <= 9) {
  console.log(`--------${dan}단--------`);
  i = 1;//i 초기화
  while (i <= 9) {
    console.log(`${dan} * ${i} = ${dan * i}`);
    i++;
  }
  dan++;
}
