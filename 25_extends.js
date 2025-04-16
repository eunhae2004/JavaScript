class Animal {
  speak() {
    console.log("동물이 소리를 냅니다");
  }
}

class Dog extends Animal {
  eat() {
    console.log("강아지가 먹습니다");
  }
  speak() {
    console.log("강아지가 소리를 냅니다.");
  }
  //   부모의 메서드에 자식의 메서드를 덮어 쓰는 것
  // Overrining (오버라이딩)
}

const animal = new Animal();
animal.speak();
// animal.eat();    -->   error
// 자식 클래스는 부모 클래스의 메서드를 사용할 수 있지만, 부모 클래스는 자식 클래스의 메서드를 사용할 수 없다.

const dog = new Dog();
dog.speak();
dog.eat();
