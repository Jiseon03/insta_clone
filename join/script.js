let darkMode = document.getElementById('mode-toggle');

function darkModeToggle(e){
    e.preventDefault();
    document.body.classList.toggle('dark');
}
darkMode.addEventListener('click', darkModeToggle);


let submitBtn = document.getElementById('submit-btn');
let animateInput = document.querySelectorAll('.animate-input');

let emailAct = nameAct = idAct = pwAct = false;

let userEmail = document.getElementById('user-email')
let userName = document.getElementById('user-name')
let userId = document.getElementById('user-id')
let userPw = document.getElementById('user-pw')

let pwBtn = document.getElementById('pw-visible');

function updateInputState(val,activeVar){
    if(val.value.trim().length > 0){
        val.parentElement.classList.add('active');
        activeVar = true;
    }else{
        val.parentElement.classList.remove('active');
    }

    return activeVar;
}

animateInput.forEach((item) => {
    let input = item.querySelector('input');
    
    input.addEventListener('keyup', () => {
      if(input == userEmail) {
        emailAct = updateInputState(input, emailAct);
      } else if(input == userName) {
        nameAct = updateInputState(input, nameAct);
      } else if(input == userId) {
        idAct = updateInputState(input, idAct); 
      } else if(input == userPw) {
        pwAct = updateInputState(input, pwAct);
      }
  
      let allTrue = emailAct && nameAct && idAct && pwAct;
      if(allTrue) {
        submitBtn.removeAttribute('disabled');
      } else {
        submitBtn.setAttribute('disabled', true);
      }
    })
  })

  function modeToggle() {
    let pwType = userPw.getAttribute('type') == 'password';
    userPw.setAttribute('type', pwType ? 'text' : 'password');
    pwBtn.innerHTML = pwType ? '비밀번호 표시': '비밀번호 숨기기';
  }

  pwBtn.addEventListener('click',modeToggle);