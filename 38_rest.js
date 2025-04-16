/*
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers; //rest는 변수명이므로 마음대로 적어도 된다
// first에 1, second에 2, rest에 3, 4, 5가 담긴 배열이 저장된다.
console.log(first); // 1
console.log(second); //2
console.log(rest); //[3, 4 ,5]
*/

/*
function sum(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2, 3)); //6
console.log(sum(10, 20, 30, 40, 50, 60)); //210
*/

const user = {
  name: "김사과",
  age: 20,
  city: "서울",
};

const { name, ...rest } = user;
console.log(name); //김사과
console.log(rest); //{ age: 20, city: '서울' }
