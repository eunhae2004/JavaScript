const person = {
  name: "김사과", //명사 (Property)
  age: 20,
  greet: function () {
    console.log(`안녕하세요, 저는 ${this.name} 입니다.`);
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.greet());
