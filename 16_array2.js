/* 

let fruits = ["사과", "바나나", "오렌지"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// 우선 fruits의 첫 번째 인덱스를 꺼내 fruit에 넣는다.
// 그리고 한 바퀴를 돌면 두 번째 인덱스를 꺼내 다시 fruit에 넣는다.
// 인덱스가 끝날 때까지 반복. 단순히 값을 꺼내 나열할 뿐이므로, 인덱스 번호는 알 수 없다.
for (let fruit of fruits) {
  console.log(fruit);
}


// 익명함수
// 본래 함수를 정의하는 형식은 funtion 함수이름()이나, 이름을 붙이지 않아도 함수를 만들수는 있다. 이를 익명함수라고 부른다.
fruits.forEach(function (fruit, index) {
  console.log(`${index}번째 과일: ${fruit}`);
});
// forEach는 배열의 인덱스 갯수만큼 반복한다. X1(fruit)에 인덱스 내부 값을, X2(index)에 해당 인덱스의 번호를 집어넣는다.

*/

const user = [1, "apple", "김사과", 20, "서울 서초구"];

// for문
for (let i = 0; i < user.length; i++) {
  console.log(user[i]);
}
console.log("----------");

// for..of
for (let users of user) {
  console.log(users);
}
console.log("----------");

// forEach
user.forEach(function (user, idx, arr) {
  console.log(user, idx, arr);
});
