const btn = document.querySelector('.btn');
const firstName =document.querySelector('.first-name');
const nameErrImg = document.querySelector('.error-img-name')
const nameErrMsg = document.querySelector('.error-msg-name')

const lastName =document.querySelector('.last-name');
const lastErrImg = document.querySelector('.error-img-last')
const lastErrMsg = document.querySelector('.error-msg-last')

const email =document.querySelector('.email');
const emailErrImg = document.querySelector('.error-img-email')
const emailErrMsg = document.querySelector('.error-msg-email')

const password =document.querySelector('.password');
const passwordErrImg = document.querySelector('.error-img-password')
const passwordErrMsg = document.querySelector('.error-msg-password')

function validation(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    if(firstName.value == '' ){
        nameErrImg.style.display = "block";
        nameErrMsg.style.display = "block";
        firstName.style.border = "1px solid #FF7979";
        firstName.placeholder= "";
    }else{
        firstName.style.border = "1px solid #5E54A4";
        nameErrImg.style.display = "none";
        nameErrMsg.style.display = "none";
    }
    if(lastName.value == '' ){
        lastName.placeholder = "";
        lastErrMsg.style.display = "block";
        lastErrImg.style.display = "block";
        lastName.style.border = "1px solid #FF7979";
        
    }else{
        lastName.style.border = "1px solid #5E54A4";
        lastErrMsg.style.display = "none";
        lastErrImg.style.display = "none";
    }
    if (!validation(email.value)) {
        emailErrImg.style.display = "block";
       emailErrMsg.style.display = "block";
        email.style.border = "1px solid #FF7979";
        email.placeholder ='email@example/com';
    }else{
        email.style.border = "1px solid #5E54A4";
        emailErrImg.style.display = "none";
       emailErrMsg.style.display = "none";
    }
    if (password.value == '') {
        password.style.border = "1px solid 1px solid #FF7979";
        passwordErrImg.style.display = 'block';
        passwordErrMsg.style.display = 'block';
    } else {
        password.style.border = "1px solid #5E54A4";
        passwordErrImg.style.display = 'none';
        passwordErrMsg.style.display = 'none';
    }
})