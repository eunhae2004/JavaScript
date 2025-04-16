/*
const obj1 = { name: "김사과", age: 20 };
const obj2 = { ...obj1 }; //...-> 복사하겠다는 의미 (얕은 복사)
// const obj2 = Object.assign({}, obj1);

obj2.name = "오렌지";
console.log(obj1.name);
console.log(obj2.name);


obj2.age = 25;
console.log(obj1.age);

*/

const obj1 = {
  name: "김사과",
  address: { city: "서울" }, // 객체 안의 객체
};

const obj2 = { ...obj1 };
obj2.address.city = "부산";

// 얕은 복사 후 adress는 객체이기 때문에, obj1과 2가 같은 주소를 공유
console.log(obj1.address.city);
console.log(obj2.address.city);
