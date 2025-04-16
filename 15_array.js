const user = [1, "apple", "김사과", 20, "서울 서초구"];
console.log(user);
console.log(user[0]);
console.log(user[1]);

user[7] = "여자";
console.log(user);

user[4] = "서울 강남구";
console.log(user);
console.log(user.length);

// user = 100;  >> error!

// !!const로 선언했는데 user[4]의 값이 변화한 이유!!
// const는 메모리 재할당 (가리키는 값의 주소를 갱신)이 불가한 유형. 그러나 배열의 값을 변경하는 것은 연결된 주소를 변경하는 것이 아닌, 연결된 힙메모리 내의 값을 변경하는 것이기 때문에 문제 없이 갱신된다.

for (let i = 0; i < user.length; i++) {
  console.log(user[i]);
}

// push(): 배열의 요소를 추가
// (주체).(함수)를 메소드라고 한다. 해당 주체에게만 사용할 수 있는 함수를 말한다.
user.push("ISTJ");
console.log(user);

// pop(): 배열의 마지막 인덱스 번호에 있는 값을 제거
let temp = user.pop(); //user의 마지막 인덱스 값을 제거한 후, 해당 값을 왼쪽의 'temp'로 이동시킨다. (여기서는 "ISTJ")
console.log(user); // "ISTJ"

// shift(): 배열의 첫번째 인덱스 번호에 있는 값을 제거
temp = user.shift();
console.log(user); // user의 첫번째 인덱스 값을 제거한 후, 해당 값을 왼쪽의 'temp'로 이동시킨다. (여기서는 1)
console.log(temp); // 1

// concat(): 두 배열의 요소를 합침
const profile = ["A형", "ISTJ"];
result = user.concat(profile);
console.log(result); // [ 'apple', '김사과', 20, '서울 강남구', <2 empty items>, '여자', 'A형', 'ISTJ' ]

// 배열 요소 사이에 원하는 문자를 삽입: 배열 -> 문자열
result = user.join("👽");
console.log(result); // apple👽김사과👽20👽서울 강남구👽👽👽여자
console.log(typeof result); // string

// sort(): 배열의 요소를 오름차순
// 아스키코드 표를 참조한다.
const arr = ["apple", "banana", "Apple", "orange", "melon"];
arr.sort();
console.log(arr); // [ 'Apple', 'apple', 'banana', 'melon', 'orange' ]

// reverse(): 배열을 역순으로 재배치
arr.reverse();
console.log(arr); //[ 'orange', 'melon', 'banana', 'apple', 'Apple' ]
