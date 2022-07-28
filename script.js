const form = document.querySelector('form');
const password = document.querySelector('#password');
const confirmpw = document.querySelector('#confirmpw');
const message = document.querySelector('#pwMessage');

confirmpw.addEventListener('keyup', ()=> {
    const passwordVal = document.querySelector('#password').value;
    const confirmpwVal = document.querySelector('#confirmpw').value;
    if(passwordVal === confirmpwVal){
        message.style.color = 'green';
        message.innerHTML = "Passwords match";
        confirmpw.setCustomValidity("");
    } else {
        message.style.color = 'red';
        message.innerHTML = "Passwords do not match";
        confirmpw.setCustomValidity("Passwords do not match");
    }
})

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log('created');
})