let darkMode = document.getElementById('mode-toggle');

function darkModeToggle(e){
    e.preventDefault();
    document.body.classList.toggle('dark');
}
darkMode.addEventListener('click', darkModeToggle);