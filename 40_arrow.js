// 일반 함수
function add1(a, b) {
  return a + b;
}

// 화살표 함수
const add2 = (a, b) => a + b; // 화살표 함수는 무조건 return 형식

// 매개변수가 1개일 때 괄호 생략 가능
const square = (x) => x * x;

// 코드 블록이 있을 경우 return을 명시해야 함
const add3 = (a, b) => {
  return a + b;
};

const obj = {
  name: "김사과",
  sayHello: function () {
    setTimeout(() => {
      console.log("안녕! 나는" + this.name);
    }, 1000);
  },
};

obj.sayHello();

// 콜백 함수: 직접 실행하지 않고, 내가 실행한 함수가 대신 실행해 주는 함수0
