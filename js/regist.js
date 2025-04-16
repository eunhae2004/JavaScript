function sendit() {
  const userid = document.getElementById("userid");
  const userpw = document.getElementById("userpw");
  const userpw_re = document.getElementById("userpw_re");
  const name = document.getElementById("name");
  const hp = document.getElementById("hp");

  const exIdText = /^[A-Za-z0-9]{4,20}$/;
  const exPwText =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/; //소괄호(): 전방탐색 *: 대괄호 안의 것을 하나 이상은 써달라는 의미
  const exNameText = /^[가-힣]+/; //+ 한 글자 이상. 뒤의 모든 글자에 적용한다.
  const exHpText = /^\d{3}-\d{3,4}-\d{4}$/;

  if (userid.value === "") {
    alert("아이디를 입력해주세요.");
    userid.focus();
    return false;
  }
  if (!exIdText.test(userid.value)) {
    alert("아이디는 4자이상 20자이하의 영문자 및 숫자로 입력하세요.");
    userid.focus();
    return false;
  }

  if (!exPwText.test(userpw.value)) {
    alert(
      "비밀번호는 8자이상 20자이하의 영문자, 숫자, 특수문자를 한 자 이상 꼭 포함해야합니다."
    );
    userpw.focus();
    return false;
  }

  if (userpw.value != userpw_re.value) {
    alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    userpw_re.focus();
    return false;
  }

  if (!exNameText.test(name.value)) {
    alert("이름은 한글로 입력하세요.");
    name.focus();
    return false;
  }

  if (!exHpText.test(hp.value)) {
    alert("휴대폰 번호 형식이 일치하지 않습니다.\n -하이픈을 꼭 입력해주세요!");
    hp.focus();
    return false;
  }

  return true;
}
