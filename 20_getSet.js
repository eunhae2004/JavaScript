class User {
  constructor(name) {
    this._name = name; //관례: 변수명에 언더바_를 붙이면 get, set를 사용한다는 의미.
  }

  //  getter
  get name() {
    return this._name;
  }

  //   setter
  set name(newName) {
    if (newName.length < 2) {
      console.log("이름은 두 글자 이상이어야 합니다.");
    } else {
      this._name = newName;
    }
  }
}

const user = new User("김사과");
console.log(user._name); //김사과
console.log(user.name); //김사과. getter (get name)를 호출한다.
user.name = "반"; //setter
// ->이름은 두 글자 이상이어야 합니다. /값을 대입하면 setter가 호출된다.
user.name = "반하나"; //setter
console.log(user.name); //getter  -> 반하나
