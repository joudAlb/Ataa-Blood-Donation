let user;
let nameP = document.querySelector('#fullname');
let phoneP = document.querySelector('#phone');
let Blood  = document.querySelector('#blood');
let Region  = document.querySelector('#region');
let City  = document.querySelector('#city');
let Email  = document.querySelector('#email');
let birthday  = document.querySelector('#birthday');
document.addEventListener('DOMContentLoaded',e=> {
   user = JSON.parse(sessionStorage.getItem('userAtaa'));
   nameP.value = user.firstname;
   phoneP.value = user.phone;
   Blood.value = user.blood;
   Region.value = user.region;
   City.value = user.city;
   Email.value = user.email;
});





const mform = document.querySelector('.form');
const notificationp = document.querySelector('.notification');
const closeNotp = document.querySelector('.close-not');


// شرط اضافة بيانات للقاعدة
 mform.addEventListener('submit', e=>{
   e.preventDefault();

   // validation(e);
   const formData = new FormData(e.target);
   formData.append('id',user.id);
   formData.append('psw',user.password);
   formData.append('confpsw',user.confPassword);
   formData.append('lang',user.language);
   formData.append('gender',user.gender);
   formData.append('lname',user.lastname);

   let key = formData.keys();
   // formData.values()
   let us = {};
   for (const ke of key) {
      const element = formData.get(ke);
      us[ke] = element;
   }
   console.log(us);

   const data = new URLSearchParams(formData);
 
   let respones = fetch('http://localhost:8000',{
     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
     method: "POST",
     body: data,
   }
   ).then(data=>{
     return data.text();
   }).then ((data)=>{
     notificationp.firstElementChild.textContent = data;
     notificationp.classList.add('success');
     correcrt(us);
   }).catch((erroe)=>{
     notificationp.firstElementChild.textContent = data;
     notificationp.classList.add('error-m');
     console.log(erroe);
   });
 });
 
 closeNotp.addEventListener('click', e=> {
   notificationp.classList.remove('success','error-m');
 })

 function correcrt(user) {
   user['firstname'] = user.fullname;
   user = JSON.stringify(user);
   sessionStorage.setItem('userAtaa',user);
}