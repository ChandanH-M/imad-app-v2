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
    var nameInput = document.getElementById('text');
    var value = nameInput.value;
    var submit = document.getElementById('submit');
    submit.onclick = function () {
                    var names = ['name1','name2','name3'];
                    var list = '';
                         for (var i = 0; i < names.length; i++) {
                             li += '<li>' + names[i] + '</li>';
                    }
                var ul = document.getElementById('ordered');
                ul.innerHTML = list;
    
                };
