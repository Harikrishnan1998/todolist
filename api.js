function ajax(){
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){
        
        if(this.readyState==4 &&  this.status==200){
            
            var response = JSON.parse( this.responseText);
            var chk = document.getElementById("demo");
            var output = "";
            
            
            for(var i=0;i<response.length;i++){
        
                    output +="<input type='checkbox' id='ch'>"+response[i].title+"</input> <br>" ;
            
                }
                  
            
                
            }
            chk.innerHTML=output;
        }

      
    
    
    
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
