// 랜덤 가위바위보 게임 만들기
// 사용자용 변수에 "가위", "바위", "보" 중 하나를 입력하면
// 컴퓨터는 Math.random()을 이용해 하나를 랜덤 선택
// 둘을 비교해 승/패/무 결과를 출력

const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs.readFileSync("input.txt").toString().split(" ");

const RCP = ["가위", "바위", "보"];
RDresult = RCP[Math.floor(Math.random() * RCP.length)];

// console.log(RDresult);

let result = "가위, 바위, 보 중 하나를 입력해 주세요!";

console.log(`YOU: ${input}`);
console.log(`COM: ${RDresult}`);

if (input == "가위") {
  if (RDresult == "보") result = "승";
  else if (RDresult == "바위") result = "패";
  else result = "무";
} else if (input == "바위") {
  if (RDresult == "가위") result = "승";
  else if (RDresult == "보") result = "패";
  else result = "무";
} else if (input == "보") {
  if (RDresult == "바위") result = "승";
  else if (RDresult == "가위") result = "패";
  else result = "무";
}

console.log(result);
