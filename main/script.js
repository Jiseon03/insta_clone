let newPostBtn = document.getElementById('new-post-btn')
let upload = document.querySelector('.upload');
let postCloseBtn = document.querySelector('.post-close-btn')
let optionBtn = document.querySelectorAll('.option-btn');
let moreOption = document.querySelector('.more-option')
let moreOptionClose = document.querySelector('.more-option-close');
let overlay = document.querySelector('.overlay');

function 모달창열기(btn, modal){
    btn.addEventListener('click',function(e){
        e.preventDefault();
        modal.classList.add('is-active');
        overlay.classList.add('is-active');
    })
}

function 모달창닫기(btn, modal){
    btn.addEventListener('click',function(){
        modal.classList.remove('is-active');
        overlay.classList.remove('is-active');
    })
}

//'새 게시물 만들기' 모달창 열고닫기
모달창열기(newPostBtn,upload);
모달창닫기(postCloseBtn,upload);



//'옵션' 모달창 열고닫기
optionBtn.forEach(item => {
    모달창열기(item,moreOption)
});

모달창닫기(moreOptionClose,moreOption);



