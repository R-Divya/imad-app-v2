//counte code
var button = document.getElementById('counter');


button.onclick = function () {
  var request = new  XMLHttpRequest();
    request.onreadystatechange = function(){
      if(request.readystate === XMLHttpRequest.DONE){
       if(request.state === 200 ){
       var   counter = request.responseText;
        var span = document.getElementById('counter');
    span.innerHTML = counter.toString();
           
           
       }
      }
        
        
        
    };
    
   request.open('GET','htpp://r-divya.imad.hasura-app.io/counter',true);
   request.send(null);
};

  
