class Animal {
  constructor(name) {
    //자식에게 호출된다.
    this.name = name;
  }
}

const animal = new Animal("코끼리");
console.log(animal.name);

class Dog extends Animal {
  //자식 생성자가 먼저 호출된다.
  constructor(name, color) {
    super(name); // 부모 Animal의 생성자를 호출한다.
    this.color = color;
  }
  showInfo() {
    console.log(`${this.name}는 ${this.color} 강아지입니다.`);
  }
  setColor(color) {
    this.color = color;
  }
}

const dog = new Dog("루시", "흰색");
dog.showInfo();
dog.setColor("검은색");
dog.showInfo();
