class Person {
  constructor(name, age) {
    //객체가 메모리에 올라가는 순간 내가 호출하지 않아도 자동으로 실행된다.
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  }
}

const p1 = new Person("김사과", 20);
p1.greet();
const p2 = new Person("반하나", 25);
p2.greet();
