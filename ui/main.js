var button = document.getElementById('counter');

button.onclick = function () {
    
var request = new XMLHttpRequest();

request.onreadystatechange = function () {
    
    if(request.readyState === XMLHttpRequest.DONE) {
        
        if(request.status === 200) {
            
            var counter = request.responseText;
            
            var span = document.getElementById('count');
            
            span.innerHTML = counter;
            
                }
            }
        };
    request.open('GET','http://chandanh-m.imad.hasura-app.io/counter',true);
    request.send(null);
    };
    
    
   
   
    var submit = document.getElementById('submit');
    
    submit.onclick = function ()
        {
            var request = new XMLHttpRequest();

request.onreadystatechange = function () {
    
    if(request.readyState === XMLHttpRequest.DONE) {
        
        if(request.status === 200) {
              var names = request.responseText;
              names = JSON.parse(names);
               
                    var list = '';
                             for (var i = 0; i < names.length; i++)
                             {
                                 list += '<li>' + names[i] + '</li>';
                             }
                            var ul = document.getElementById('ordered');
                            ul.innerHTML = list;
            
           
            
                }
            }
        };
    var nameInput = document.getElementById('text');
    var value = nameInput.value;
    request.open('GET','http://chandanh-m.imad.hasura-app.io/submit-name?name=' + value,true);
    request.send(null);
    };
                  
