

const reservation = document.querySelector('.res');
const ovelay = document.querySelector('.ovelay');
const nameN = document.querySelector('#name');
const locationN = document.querySelector('#location');
const closeBtn = document.querySelector('.close-btn');
const formRes = document.querySelector('.form-res');
const notification = document.querySelector('.notification');
const closeNot = document.querySelector('.close-not');
const dialog = document.querySelector('dialog');

  // شرط عرض بيانات من القاعدة // ////////////////////////////////
document.addEventListener('DOMContentLoaded', e => {
   console.log('ox')
   let respones = fetch('http://localhost:8000?getType=reservation').then(data => {
      return data.json();
   }).then((data) => {
      console.log(data);
      setProduct(data)
   }).catch((erroe) => {
      //  notification.firstElementChild.textContent = data;
      //  notification.classList.add('error-m');
      console.log(erroe);
   });
})

  // شرط عرض بيانات من القاعدة
function setProduct(elements) {
    console.log('kjsdfvk')
   elements.forEach(ele => {

      /* Your data image data here */;
      const id = ele.ID;
      const title = ele.Hospital_name;
      const location = ele.location;
      const link = ele.link;

      reservation.innerHTML += `
      <div class="center card-style" id=${id}>
          <div class="UPcard">
              <div class="logo">
                  <i class = "imagge"><img src="../media/bloode.png" alt="blood" width="80"></i>
              </div>    
          </div>
          <div class="bottomCard">
              <div class="info">
                  <h1>${title}</h1>
                  <p>${location}</p>
            </div>
              <button class="btnn">
                  Be a reason to live
              </button>
          </div>
      </div>
      `;
   });

   Array.from(reservation.querySelectorAll('.btnn')).forEach(ele=>{
    ele.addEventListener('click', e=>{
        let nameEle = e.target.previousElementSibling.firstElementChild.textContent;
        let locationEle = e.target.previousElementSibling.lastElementChild.textContent;
        ovelay.classList.add('active');
        nameN.value = nameEle;
        locationN.value = locationEle;
        dialog.showModal();
    })
   })
}

closeBtn.addEventListener('click',(e)=>{
    ovelay.classList.remove('active');
    dialog.close();
})



// شرط اضافة بيانات للقاعدة
formRes.addEventListener('submit', e=>{
    e.preventDefault();
    // validation(e);
    nameN.removeAttribute("disabled");
    locationN.removeAttribute("disabled");

    console.log(nameN)
    console.log(locationN)

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
    }).catch((erroe)=>{
      notification.firstElementChild.textContent = data;
      notification.classList.add('error-m');
    });
  });
  
  closeNot.addEventListener('click', e=> {
    notification.classList.remove('success','error-m');
  })