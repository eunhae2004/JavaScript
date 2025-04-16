let count = 1;


while (count <= 5) {
  console.log(count); //무한루프(컨트롤 +C로 멈춤)
}


while (count <= 5) {
  // count가 6이 되었을때 여기에서 빠져나간다.
  console.log(count);
  count++; //1씩 증가하다가 ...
}

console.log("-------------------------\n");

let dan = 5;
let i = 1;

while (i <= 9) {
  console.log(`${dan} * ${i} = ${dan * i}`);
  i++;
}

console.log("-------------------------\n");

