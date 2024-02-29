// var namePattern = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
// var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
// var mobilePattern = /^[0-9]{10}$/;
// var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;

// function seterror(id, error) {
//     element = document.getElementById(id);
//     element.getElementsByClassName('formerror')[0].innerHTML = error;
// }


function verifyPass() {
    var passInput = document.getElementById('password').value;
    var passInput2 = document.getElementById('Cpass').value;
    var span = document.getElementById("span-Cpass");
    if (passInput === passInput2) {
        span.innerHTML = "";
    } else {
        span.innerHTML = "<p>Passwords do not match</p>";
    }
}

function validateEmail() {
    var emailInput = document.getElementById('emailInput');
    var email = emailInput.value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;
    var emailSpan = document.getElementById('email-span');

    if (!email) {
        emailSpan.innerHTML = "<p>Please enter an email address.</p>";
    } else if (!emailRegex.test(email)) {
        emailSpan.innerHTML = "<p>Please enter a valid email address.</p>";
    } else {
        emailSpan.innerHTML = '';
    }
}

function validatePass() {
    var passInput = document.getElementById('password');
    var pass = passInput.value;
    var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    var passSpan = document.getElementById('pass-span');
    
    if (!pass) {
        passSpan.innerHTML = "<p>Please enter a password.</p>";
    } else if (!passRegex.test(pass)) {
        passSpan.innerHTML = "<p>Please enter a valid password. It must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.</p>";
    } else {
        passSpan.innerHTML = "";
    } 
}
function validateName() {
    var nameInput = document.getElementById('fname');
    var name = nameInput.value;
    var nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/; 
    var nameSpan = document.getElementById('name-span');

    if (!name.trim()) {
        nameSpan.innerHTML = "<p>Please enter a name.</p>";
    } else if (!nameRegex.test(name)) {
        nameSpan.innerHTML = "<p>Please enter a valid name.</p>";
    } else {
        nameSpan.innerHTML = " "; 
    }
}

function validatePhone() {
    var phoneInput = document.getElementById('phoneInput');
    var phone = phoneInput.value;
    var phoneRegex = /^[0-9]{10}$/; 
    var phoneSpan = document.getElementById('phone-span');

    if (!phone) {
        phoneSpan.innerHTML = "<p>Please enter a phone number.</p>";
        phoneSpan.style.color = 'red';
    } else if (phone.length !== 10 || isNaN(phone)) {
        phoneSpan.innerHTML = "<p>Please enter a valid 10-digit phone number.</p>";
        phoneSpan.style.color = 'red';
    } else {
        phoneSpan.innerHTML = "<p >Valid phone No.</p>"; 
        phoneSpan.style.color = 'green';
    }
}

function submit() 
{
    validateEmail();
    validatePass();
    verifyPass();
    validatePhone();
    validateName();
}

// function validateForm() {
//     var returnval = true;
//     clearErrors();

//     var name = document.forms['myForm']["fname"].value;
//     if (name.length < 5) {
//         seterror("name", "*Length of name is too short");
//         returnval = false;
//     }

//     if (name.length == 0) {
//         seterror("name", "*Length of name cannot be zero!");
//         returnval = false;
//     }

//     var email = document.forms['myForm']["femail"].value;
//     if (email.length > 32) {
//         seterror("email", "*Email length is too long");
//         returnval = false;
//     }

//     if (!emailPattern.test(email)) {
//         seterror("email", "*Email must have a valid format (e.g., example@example.com)");
//         returnval = false;
//     }

//     var phone = document.forms['myForm']["fphone"].value;
//     if (phone.length != 10) {
//         seterror("phone", "*Phone number should be of 10 digits!");
//         returnval = false;
//     }

//     var password = document.forms['myForm']["fpass"].value;
//     if (password.length < 6) {
//         seterror("pass", "*Password should be at least 6 characters long!");
//         returnval = false;
//     }

//     var cpassword = document.forms['myForm']["fcpass"].value;
//     if (cpassword != password) {
//         seterror("cpass", "*Password and Confirm password should match!");
//         returnval = false;
//     }

//     return returnval;
// }
