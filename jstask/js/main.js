function register() {
    // select inputs
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let age = document.getElementById('age').value;
    let message = document.getElementById('message').value;
    let cvFile = document.getElementById('cv').value;

    if (!firstName || !lastName || !email || !password || !age) {
        return alert('All fields required');
    }

    // validate on inputs
    validateFirstName(firstName);
    validateLastName(lastName);
    validateEmail(email);
    validatePassword(password);
    validateAge(age);
    if (message) {
        validateMessage(message);
    }
    if (cvFile) {
        validateUploadedFile(cvFile);
    }

}

function validateFirstName(name) {
    if (name.length < 3) {
        return showMsg('First Name have min 2 characters')
    }
    return 'valid';
}

function validateLastName(name) {
    if (name.length < 3) {
        return showMsg('Last Name have min 2 characters')
    }
    return 'valid';

}

function validateEmail(email) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        return showMsg('Invalid Email')
    }
    return 'valid';
}

function validatePassword(password) {
    if (password.length >= 10) {
        showMsg('Strong Password');
    } else if (password.length >= 6) {
        showMsg('Medium Password');
    } else if (password.length > 0) {
        showMsg('Weak Password');
    } else {
        showMsg('Invalid Password')
    }
}

function validateAge(age) {
    if (age <= 18) {
        return showMsg('Age must be greater than 18 years')
    }
    return 'valid';
}

function validateMessage(message) {
    if (message.length < 20) {
        return showMsg('Message must be min 20 characters')
    }
    return 'valid';
}

function validateUploadedFile(file) {
    let allowedExt = /(\.pdf)$/;
    if (!allowedExt.test(file)) {
        return showMsg('CV must be have pdf extension')
    }
}

function showMsg(msg) {
    return alert(msg);
} 

let showPassword = document.getElementById('show');
showPassword.addEventListener('click', function () {
    let passwordInput = document.getElementById('password');
    if (passwordInput.getAttribute('type') == 'password') {
        document.getElementById('show').innerHTML = "Hide";
        document.getElementById('password').setAttribute('type', 'text');
    } else {
        document.getElementById('show').innerHTML = "Show";
        document.getElementById('password').setAttribute('type', 'password');
    }
});