var nameerror = document.getElementById("name-error");
var phoneerror = document.getElementById("phone-error");
var emailerror = document.getElementById("email-error");
var messageerror = document.getElementById("message-error");
var submiterror = document.getElementById("submit-error");

function validatename(){
    var name = document.getElementById("name").value
    if(name.length == 0){
        nameerror.innerHTML = "name is required"
        return false
    }
    else if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML = "write full name"
        return false
    }
    else{
        nameerror.innerHTML = "valid"
        return true
    }
    
   
}

function validatephone(){
     var phone = document.getElementById("phone").value
     if(phone.length == 0){
        phoneerror.innerHTML = "phone is required"
        return false
     }
     else if(phone.length !== 10){
        phoneerror.innerHTML = "should be 10 digits"
        return false
     }
     else if(!phone.match(/^[0-9]{10}$/)){
        phoneerror.innerHTML = "only digits"
        return false
     }
     else{
        phoneerror.innerHTML = "valid"
        return true
     }
}

function validateemail(){
    var email = document.getElementById("email").value
    if(email.length == 0){
       emailerror.innerHTML = "email is required"
       return false
    }
    else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
       emailerror.innerHTML = "email invalid"
       return false
    }
    else{
       emailerror.innerHTML = "valid"
       return true
    }
}

function validatemessage(){
    var message = document.getElementById("message").value
    var required = 30
    var selected = required - message.length
    if(selected>0){
       messageerror.innerHTML = selected + "more character is required"
       return false
    }
    else{
       messageerror.innerHTML = "valid"
       return true
    }
}

function validatesubmit(){
    if(!validatename() || !validatephone() || !validateemail() ||!validatemessage()){
    submiterror.style.display = "block"    
    submiterror.innerHTML = "please fix error"
    setTimeout(()=>{
        submiterror.style.display = "none" 
    },3000)
    return false
}
}