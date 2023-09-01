const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const small = document.querySelector("small");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
})

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, "Username cannot be blank");
        small.style.visibility = "visible";
    }
    else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
        small.style.visibility = "visible";
    }
    else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, "Password cannot be blank");
        small.style.visibility = "visible";
    }
    else{
        setSuccessFor(password);
    }

    if(password2Value === ''){
        setErrorFor(password2, "Confirm password cannot be blank");
        small.style.visibility = "visible";
    }
    else if(password2Value === passwordValue){
        setSuccessFor(password2)
    }
    else{
        setErrorFor(password2, "Password doesn't match");
        small.style.visibility = "visible";
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.style.visibility = "visible";
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.style.visibility = "hidden";
}

