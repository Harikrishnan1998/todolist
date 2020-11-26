var un=document.getElementById("username");
var pw=document.getElementById("password");




function validate(redirect){

    if(un.value=="admin"&& pw.value=="12345"){

        
        alert("success")
        redirect();
        return true;
        
        
    }
    else{
        alert("incorrect input")
        return false;
    }
  
}
function redirect(){

    window.location.href= "testtodo.html";
}


