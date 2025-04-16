let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][1]); //5
console.log(matrix[2][0]); //7
console.log(matrix[2][2]); //9

console.log("------------");

// matrix.length --> 행 (세로)의 갯수를 카운트한다.
// length는 대괄호 안 요소의 갯수를 센다.
// matrix = [] 안에 들어있는 요소의 갯수는 3개 (  [1, 2, 3] | [4, 5, 6] | [7, 8, 9])
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    // matrix의 i번째 행의 요소의 갯수를 센다. -> 해당 예제에서는 전부 3개
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}

console.log("------------");

let menuBoard = [
  ["🍔 불고기버거", "🍟 감자튀김", "🥤 콜라"],
  ["🍔 치즈버거", "🌭 핫도그", "🍹 사이다"],
  ["🍔 새우버거", "🍗 치킨너겟", "🍵 녹차"],
];

for (let row = 0; row < menuBoard.length; row++) {
  let line = ""; //이전 row에서 line에 저장되었던 값을 초기화
  for (let col = 0; col < menuBoard[row].length; col++) {
    line += menuBoard[row][col] + "\t"; // \t --> tab키 (tab키 한 번 만큼 띄운다)
  }
  console.log(line); //for(let col...)에서 line에 저장되었던 만큼의 값을 출력한 후 for(let row...)로 돌아간다.
}

// result

/*
🍔 불고기버거   🍟 감자튀김     🥤 콜라
🍔 치즈버거     🌭 핫도그       🍹 사이다
🍔 새우버거     🍗 치킨너겟     🍵 녹차
*/
