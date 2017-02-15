var count = 0;
var button = document.getElementById('button1');
button.onclick = function() {
  count = count + 1;
  var span = document.getElementById('counter');
  span.innerHTML = count.toString();
};