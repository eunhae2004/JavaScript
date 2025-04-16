class MathToll {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  static add(a, b) {
    //static --> 객체를 지정하지 않고 class 이름만으로 접근할 수 있도록 함.
    //자바스크립트 호이스팅 시 static이 붙은 것들은 무조건 Heap메모리에 올린다.
    return a + b;
    //여기에는 constructor에서 생성한 num1, num2를 쓰지 못한다. constructor는 Mathtool의 객체가 생성되는 시점에 선언되기 때문에, 무조건 먼저 Heap메모리에 올라가는 static의 특성상 적용할 수 없다.
  }
  subtract() {
    // static add와는 별도
    return this.num1 - this.num2;
  }
}

// tool = new MathToll();
// console.log(tool.add(1, 3));

console.log(MathToll.add(10, 3));
tool = new MathToll();

// static은 객체를 만드는 과정을 거칠 필요가 없어 이름이 직관적이고 편하지만, 프로그램을 시작함과 동시에 heap에 올라가는 static의 특성상 프로그램 실행 시의 부팅 시간이 늘어난다.
//  또한 변수명이 없으므로 메모리에서 사라지지 않는다. 따라서 메모리 공간을 많이 사용한다.
