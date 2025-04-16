let name; // 변수 선언  -> undefined
console.log(name);
name = "김사과"; //name은 예약명으로 쓰이는 경우도 있기 때문에 사용하지 않는 것을 권장한다.
console.log(name);

const age = 20;
// const는 값 재할당이 불가능하다. 따라서 선언 시 변수 내 값을 함께 선언해주지 않으면 undefind로 고정된다.
console.log(age);
