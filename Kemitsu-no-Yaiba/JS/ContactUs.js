var email = document.getElementById('email');
var Mess = document.getElementById('Mess');
var submit = document.getElementById('submit');
var Result = document.getElementById('Result');
var form_con = document.getElementById('form-con');

form_con.addEventListener('submit', function(event){
    if(!email.value || !Mess.value){
        alert('Empty conetent');
    }else{
        Result.innerText = Mess.value + ' is sent by  ' + email.value;
        event.preventDefault();
       
    }
    
});