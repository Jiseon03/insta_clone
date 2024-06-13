function updateInputState(input, activeVar) {
    //trim() 공백값을 인정하지 않음
    //공백을 제거한 value 값의 길이가 0보다 클때
    if(input.value.trim().length > 0) {
        input.parentElement.classList.add('active');
        activeVar = true;
    }else {
        input.parentElement.classList.remove('active');
        activeVar = false;
    }

    return activeVar;
}

let userId = document.getElementById('userid');
let userPw = document.getElementById('userpw');

let idActive = pwActive = false;
let submitBtn = document.getElementById('submit-btn');

function handleInput(e) {
    //e.target -> 이벤트가 일어나는 대상
 
    let input = e.target;
    let type = input.getAttribute("type")

    if(type == "text"){
        idActive = updateInputState(input, idActive);
    }else{
        pwActive = updateInputState(input,pwActive);
    }

    if(idActive && pwActive) {
        submitBtn.removeAttribute('disabled');
    }else {
        submitBtn.setAttribute('disabled',true);
    }
    
}

userId.addEventListener('keyup',handleInput);
userPw.addEventListener('keyup',handleInput);

let userIdBox = document.querySelector('.userid-box')
let idWarnTxt = document.querySelector('id-warn');
userId.addEventListener('keyup',function(e){
    console.log(userId.value.length);
    if(userId.value.length < 8 && userId.value.length > 0){
       userIdBox.style.border = '1px solid indianred';
        e.preventDefault();
    }
    else if(userId.value.length == 0){
        userIdBox.style.border = '1px solid var(--box-border-color)';
    }
    else{
        userIdBox.style.border = '1px solid var(--box-border-color)';
    }
    
})

let pwVisible = document.getElementById('pw-visible');
function pwMode(){
    
    if(userPw.getAttribute('type') == 'password'){
         userPw.setAttribute('type','text');
         pwVisible.innerHTML = '숨기기';
    }else{
        userPw.setAttribute('type','password');
         pwVisible.innerHTML = '비밀번호 표시';
        }
    }
   
pwVisible.addEventListener('click',pwMode);


// Darkmode / Lightmode
let modeBtn = document.getElementById('mode-toggle');

function modeToggle(e) {
  e.preventDefault();
  // 1. body 태그에 dark 라는 class toggle
  // dark 라는 class가 있으면 remove, 없으면 add
  let body = document.querySelector('body');
  body.classList.toggle('dark');

  // body에 dark라는 클래스가 있을 때
  // modeBtn.innerHTML = 'Lightmode'
  // classList.contans()


  if(body.classList.contains('dark')) {
    modeBtn.innerHTML = 'Lightmode';
    } else {
        modeBtn.innerHTML = 'Darkmode';
    }

  // 삼항연산자
  // 조건 ? 참일 때 : 거짓일 때
  // modeBtn.innerHTML = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode';
}

modeBtn.addEventListener('click', modeToggle);

