/* 
    Math.random(): 0이상 1미만의 임의의 소수를 생성하는 함수
*/

console.log(Math.random());

// 0~9까지 정수 중 하나를 랜덤하게 뽑기
// Math.floor --> 소숫값을 버림
// const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

// 음식 자동 판매기
const menu = [
  "치킨",
  "피자",
  "햄버거",
  "김밥",
  "파스타",
  "냉면",
  "마라탕",
  "굶기",
];
const randomIndex = Math.floor(Math.random() * menu.length); // 0 ~ 3만 나올 수 있음
const randomMenu = menu[randomIndex];
console.log("내일의 점심은: ", randomMenu);

// 랜덤 가위바위보 게임 만들기
// 사용자용 변수에 "가위", "바위", "보" 중 하나를 입력하면
// 컴퓨터는 Math.random()을 이용해 하나를 랜덤 선택
// 둘을 비교해 승/패/무 결과를 출력

// 로또번호 생성기
// 1 ~ 45까지 숫자 중 중복없이 6개를 추출
// 작은 수를 앞으로 정렬(오름차순)
//
