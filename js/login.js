

const form = document.querySelector('#form-login');
const notificationl = document.querySelector('.notification');
const closeNotl = document.querySelector('.close-not');
const formGroupl = Array.from(document.querySelectorAll(".signup-input-container input"));



// شرط التحقق واظهار رسالة خطا وتفريغ الادخال بعد الارسال  
function validation(e) {
   console.log(e.target)
   let validObj = e.target.validity;
   if (!validObj.valid) {
     if (e.target.nextElementSibling) {
       e.target.nextElementSibling.firstElementChild.innerHTML = e.target.validationMessage;
       console.log()
     } else {
       e.target.parentElement.innerHTML += `
       <div class="error">
         <span>${e.target.validationMessage}</span>
       </div>
       `;
     }
   } else {
     if (e.target.nextElementSibling) {
       e.target.nextElementSibling.remove();
     }
   }
 }
 
 
 document.addEventListener('blur', e => {
   validation(e);
 }, true);


// شرط اضافة بيانات للقاعدة
form.addEventListener('submit', e=>{
   e.preventDefault();
   // validation(e);
   const formData = new FormData(e.target);
   const data = new URLSearchParams(formData);
 console.log("dsfkd")
   let respones = fetch('http://localhost:8000',{
     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
     method: "POST",
     body: data,
   }
   ).then(data=>{
     return data.json();
   }).then ((results)=>{
      if(results.length > 0) {
         if(results[0].password == formData.get("password")) {
            correcrt(results[0]); 
         } else {
            notificationl.firstElementChild.textContent = "incorrect password";
            notificationl.classList.add('error-m');
         }
       } else {
         notificationl.firstElementChild.textContent = "incorrect Email";
         notificationl.classList.add('error-m');
       }
   }).catch((erroe)=>{
     notificationl.firstElementChild.textContent = data;
     notificationl.classList.add('error-m');
   });
 });
 
 closeNotl.addEventListener('click', e=> {
   notificationl.classList.remove('success','error-m');
 })

function correcrt(user) {
   user = JSON.stringify(user);
   sessionStorage.setItem('userAtaa',user);
   location.href = '../Index.html';
}