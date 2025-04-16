const rotto = [0, 0, 0, 0, 0, 0];

let randomNumber = 0;
function LUK() {
  return Math.floor(Math.random() * 45) + 1;
}

//

rotto[0] = LUK();
let count = 1;

//

while (count == 6) {
  randomNumber = LUK();
  if (randomNumber != rotto[count - 1]) {
    rotto[count] = randomNumber;
    count++;
  }
}

console.log(rotto);
