const person = new Object();
//new : 힙메모리에 뒤에 오는 객체를 올려 달라.
// Object() : 모든 객체의 최상위 부모 객체
person.name = "반하나";
// 이 경우 Object 밑에 "name"이라는 방을 만들어 반하나를 저장한다.
person.age = 25;
person.greet = function () {
  console.log(`안녕하세요, 저는 ${this.name}입니다.`);
};

person.greet();
