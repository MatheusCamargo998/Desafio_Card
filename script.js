//--------EventListener Estrela-------//
const star = document.getElementsByClassName('fa-star')[0]
let hide = false;

star.addEventListener('click',function(){
hide = !hide;

if (hide) {
    star.classList.replace('fa-regular', 'fa-solid');
  } else {
    star.classList.replace('fa-solid', 'fa-regular');
  }

})