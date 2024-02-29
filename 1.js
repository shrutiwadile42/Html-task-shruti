function validation() 
{
    var user = document.getElementById('username').value;
    var password = document.getElementById('Password').value;
    var confirmPassword = document.getElementById('PasswordConfirm').value;
    var mobileNo = document.getElementById('numbermobile').value;
    var email = document.getElementById('emailid').value;
    
    if (user == "")
    {
        document.getElementById("username").innerHTML = "Please Enter Full Name";
        return false;
    }
    if((user.length < 3) || (user.length >20)){
        document.getElementById("username").innerHTML = "Please Enter Full Name between 3 and 20";
        return false;
    }

     if(!isNaN(user)){
        document.getElementById("").innerHTML = "Please Enter characters";
        return false;
     }

    if (password == ""){
        document.getElementById("passwordConfirm").innerHTML = "Please Enter your Password";
        return false;
    }

    if((password.length < 5) || (user.length >20)){
        document.getElementById("passwordConfirm").innerHTML = "Please Enter Password between 3 and 20";
        return false;
    }

    if (confirmPassword == "") {
        document.getElementById("passwordConfirm").innerHTML = "Please Confirm your Password";
        return false;
    }

    if(password!=confirmPassword){
        document.getElementById("passwordConfirm").innerHTML = "Password are not matching";
        return false;
    }

    if (mobileNo == "") {
        document.getElementById("numbermobile").innerHTML = "Please Enter Mobile Number";
        return false;
    }

    if(mobileno.length!=10){
        document.getElementById("numbermobile").innerHTML = "Mobile Number should be 10 digits";
        return false;
    }

    if(isNaN(mobileno)){
        document.getElementById("numbermobile").innerHTML = "Mobile Number should contain only digits";
        return false;

    }

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Please Enter Email-ID";
        return false;
    }
    
    if(email.index0f('@')<= 0){
        document.getElementById("emailError").innerHTML = "Please fill Email-ID in proper format @";
        return false;
    }

    if((email.charAt(email.length-4)!='com') && (email.charAt(email.length-4)!='in'))
    document.getElementById("emailError").innerHTML = "Please fill Email-ID in proper format .";
    return false;
}