let nameError=document.getElementById("name-error");
let phoneError=document.getElementById("phone-error");
let emailError=document.getElementById("email-error");
let msgError=document.getElementById("msg-error");
let submitError=document.getElementById("submit-error");

function validateName(){
    let name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z\u0600-\u06FF]{2,}(?:\s[A-Za-z\u0600-\u06FF]{2,})+$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    let phone = document.getElementById("contact-phone").value;
    if(phone.length == 0){
        phoneError.innerHTML = "phone no. is required";
        return false;
    }
    if(phone.length !==11){
        phoneError.innerHTML="phone no. should be 11 degits"
        return false;

    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML="only degit plz"
        return false;

    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById("contact-email").value;
    if(email.length == 0){
        emailError.innerHTML = "email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Invalid Email";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateMessage() {
    let msg = document.getElementById("contact-msg").value;
    let required = 30;
    let left = required - msg.length;

    if (left > 0) {
        msgError.innerHTML = left + " more characters required";
        return false;
    }

    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm() {
    let submitError = document.getElementById("submit-error");
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){ submitError.style.display = 'none'; }, 3000);
        
        return false;
    }
    
    
    return true;
}