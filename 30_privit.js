class User {
  #password = "";
  constructor(userid, password) {
    this.userid = userid;
    this.#password = password;
  }

  checkPassword(input) {
    return this.#password === input; //true or false
  }
}

const user = new User("apple", "1111");
console.log(user.userid);
console.log(user.checkPassword("1111")); //true
console.log(user.checkPassword("abcd")); //false
console.log(user.#password); // error
