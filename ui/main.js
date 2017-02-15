var counter = 0;
var button = document.getElementById('counter');
counter.onclick = function() {
  counter = counter + 1;
  var span = document.getElementById('count')
  button.innerHTML = counter.toString();
};