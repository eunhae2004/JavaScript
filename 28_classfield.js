class Product {
  name = "상품명 없음";
  price = 0;

  //   해결
  static productName = "컴퓨터";
  static productPrice = 1000000;

  showInfo() {
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`);
  }

  static showStaticInfo() {
    console.log(`${this.productName}의 가격은 ${this.productPrice}원입니다.`);
  }
}

const p = new Product();
p.showInfo();
// 상품명 없음의 가격은 0원입니다.
Product.showStaticInfo();
// Product의 가격은 undefined원입니다.
// Why? = name과 price에 접근이 불가하기 때문
// 해결 -> class Product에 static 변수를 생성해 값을 지정한다.
