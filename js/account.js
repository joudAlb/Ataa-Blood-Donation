
const myform = document.querySelector('#signup-form');
const notification = document.querySelector('.notification');
const closeNot = document.querySelector('.close-not');
const formGroup = Array.from(document.querySelectorAll(".signup-input-container input"));
const formGroupSelect = Array.from(document.querySelectorAll(".signup-input-container select"));
const formGroupTextArea = Array.from(document.querySelectorAll(".signup-input-container texterea"));

formGroup.push(...formGroupSelect,...formGroupTextArea);


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
 myform.addEventListener('submit', e=>{
   e.preventDefault();
   
   // validation(e);
   const formData = new FormData(e.target);
   const data = new URLSearchParams(formData);
 
   let respones = fetch('http://localhost:8000',{
     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
     method: "POST",
     body: data,
   }
   ).then(data=>{
     return data.text();
   }).then ((data)=>{
     console.log(data);
     notification.firstElementChild.textContent = data;
     notification.classList.add('success');
     formGroup.forEach(ele=>{
       ele.value = '';
     })
   }).catch((erroe)=>{
     notification.firstElementChild.textContent = data;
     notification.classList.add('error-m');
   });
 });
 
 closeNot.addEventListener('click', e=> {
   notification.classList.remove('success','error-m');
 })