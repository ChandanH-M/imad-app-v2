
var button = document.getElementById('button1');
var count = 0;
button.onclick = function() {
  count = count + 1;
  var span = document.getElementById('counter');
  span.innerHTML = count.toString();
};