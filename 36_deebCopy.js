function deepCopy(value) {
  //원시값은 그대로 반환
  if (typeof value !== "object" || value === null) {
    return value;
  }
  // 배열일경우
  if (Array.isArray(value)) {
    const result = [];
    for (let i = 0; i < value.length; i++) {
      result[i] = deepCopy(value[i]); //재귀함수 (자신이 자신을 부르는 함수
    }
    return result;
  }

  // 객체일 경우
  const result = {};
  for (let key in value) {
    result[key] = deepCopy(value[key]);
  }
  return result;
}

//
const original = {
  name: "오렌지",
  scroes: [90, 80, 100],
  address: {
    city: "서울",
    zip: "12345",
  },
};

const copy = deepCopy(original);
console.name = "김사과";
copy.scroes[0] = 70;
copy.adress.city = "부산";

console.log(original.name);
console.log(original.scroesp[0]);
console.log(original.address.city);
