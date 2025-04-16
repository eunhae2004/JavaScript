/*

const fruits = ["사과", "바나나"];
const newFruits = [...fruits, "포도"]; //복사도 하고, 코드도 추가한다(새로운 배열이 생김)

console.log(newFruits);
* */
/**
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
 */
/*
const a = [1, 2];
const b = [3, 4];
const result = [...a, ...b];
console.log(result);
*/

/*
function add(x, y, z) {
  return x + y + z;
}

const nums = [1, 2, 3];
console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums));
*/

/*
const person = { name: "김사과", age: 20 };
const copy = { ...person };
console.log(copy);
*/

const a = { name: "김사과" };
const b = { age: 20 };
const merged = { ...a, ...b };
console.log(merged);
