//다크모드 기능 구현하기
let darkMode = document.getElementById("darkmode");
let logo = document.getElementById("logo");
let loginBtn = document.querySelector(".login-btn");
let clickCount = 0;

darkMode.addEventListener("click", function (e) {
  clickCount++;
  e.preventDefault();

  if (clickCount % 2 != 0) {
    document.body.classList.add("dark");
    loginBtn.classList.add("dark");
    logo.src = "../assets/images/logo-dark.png";
  } else {
    document.body.classList.remove("dark");
    loginBtn.classList.remove("dark");
    logo.src = "../assets/images/logo-light.png";
  }
})


//input 박스 눌렀을때 글자 보이게
let id = document.getElementById("id");
let pw = document.getElementById("pw");
let idTxt = document.querySelector(".id-txt");
let pwTxt = document.querySelector(".pw-txt");

id.addEventListener("keydown", function () {
    console.log(id.value)
    console.log(id.value.length)

  if (id.value.length == 0) {
    idTxt.classList.remove("is-active");
  } else {
    idTxt.classList.add("is-active");
  }
 
});

pw.addEventListener("keydown", function () {
  if (pw.value.length == 0) {
    pwTxt.classList.remove("is-active");
  } else {
    pwTxt.classList.add("is-active");
  }
});


//비밀번호 표시&숨기기 기능
let showPw = document.querySelector(".show-pw");
let PwClick = 0;
showPw.addEventListener("click", function () {
  PwClick++;

  if (PwClick % 2 != 0) {
    pw.type = "text";
    showPw.innerHTML = "비밀번호 숨기기";
  } else {
    pw.type = "password";
    showPw.innerHTML = "비밀번호 표시";
  }
});


//아이디, 비번 입력 안했을 때 제출 버튼 비활성화 시키는 기능
loginBtn.addEventListener("click", function (e) {
  if (id.value == 0 || pw.value == 0) {
   
    e.preventDefault();
    loginBtn.style.opacity = 0.5;
  }
  else {
    loginBtn.style.opacity = 1;
  }
});
