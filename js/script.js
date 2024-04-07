let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

//login/signup toggle
const container   = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn    = document.getElementById('login');
const signupForm  = document.getElementById("signup-form");
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signupForm.addEventListener("submit",function(e){
    e.preventDefault();

    const firstName = document.querySelector("input[name='name']").value;
    const lastName = document.querySelector("input[name='lname']").value;
    const email = document.querySelector("input[name='email']").value;
    const pwd = document.querySelector("input[name='psw']").value;
    const confPwd = document.querySelector("input[name='confpsw']").value;
    const phone = document.querySelector("input[name='pn']").value;
    const blood = document.querySelector("input[name='blood']").value;
    const reg = document.querySelector("input[name='reg']").value;

    if(!firstName || !lastName || !email || !pwd || !confPwd || !phone || !blood || !reg)
        window.alert("Please Fill In All Fields");
    else
    signupForm.submit(); 
});