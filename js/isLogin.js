
document.addEventListener('DOMContentLoaded',e=>{
   let loader = document.querySelector('.overlay-loader ');
   let login = sessionStorage.getItem('userAtaa');

   if(!login) {
   location.href = '../HTML/Login.html';
   console.log('no')
   } else {
      console.log('yes')
      loader.classList.add('close');
   }
});
