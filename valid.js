const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const date = document.getElementById('date');
const mobile = document.getElementById('mobile');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

console.log(fname.value);

function showError(input, message) {
    const mainContainer = input.parentElement;
    mainContainer.className = 'mainContainer error';
    const small = mainContainer.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const mainContainer = input.parentElement;
    mainContainer.className = 'mainContainer success';
}

const checkName = (inputArr) => {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input,'Name is required');
        }
        else if (input.value.length < 3 || input.value.length > 20) {
            showError(input,'Name length should be between 3 & 20');
        }      
        else {
            showSuccess(input);
        }
    });
}

const checkEmail = (email) => {
    var regx = /^([A-Za-z0-9._]+)(@)([\w]+)(.)([\w]{3})(.)?([\w]){2,3}?$/;
    if (email.value.trim() === '') {
        showError(email,'Email is required');
    }
    else {
        if (regx.test(email.value) == false) {
            showError(email,'Email invalid');
        }      
        else {
            showSuccess(email);
        }
    }
}

const checkDate = (date) => {
    if (date.value.trim() === '') {
        showError(date,'Date is required');
    }
    else {
        showSuccess(date);
    }
}

const checkMobile = (mobile) => {
    var regx = /^[6789][\d]{9}$/;
    if (mobile.value.trim() === '') {
        showError(mobile,'Mobile no. is required');
    }
    else {
        if (regx.test(mobile.value) == false) {
            showError(mobile,'Mobile number invalid');
        }      
        else {
            showSuccess(mobile);
        }
    }
}

const checkPassword = (password, password2) => {
    var regx = /^[A-Z]?[\d]?([!@#$%^&*])?([a-zA-Z0-9]{7})([\w]+)?$/;
    if (password2.value.trim() === '') {
        showError(password2,'Password is required');
    }
    if (password.value.trim() === '') {
        showError(password,'Password is required');
    }
    else {
        if (regx.test(password.value) == false) {
            showError(password,'Use proper password');
        }      
        else {
            showSuccess(password);
        }
    }
}

const checkPasswdmatch = (password, password2) => {
    if( password.value.trim() != '' ) {
        if ( password.value != password2.value ) {
            showError(password2,'Password does not match');
        }      
        else {
            showSuccess(password);
            showSuccess(password2);
        }
    }
}

const validate = () => {
    event.preventDefault();
    checkName([fname, lname]); 
    checkEmail(email); 
    checkDate(date);
    checkMobile(mobile);
    checkPassword(password, password2); 
    checkPasswdmatch(password, password2);
}