function Person(name, age) {
  //함수 앞글자가 대문자일 경우: 객체를 만들기 위한 함수 (필수는 아니고 관례.)
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`안녕하세요. 저는 ${this.name}입니다.`);
  };
}

const p1 = new Person("이메론", 30);
console.log(p1.name);
console.log(p1.age);
p1.greet();

const p2 = new Person("배애리", 27);
p2.greet();
