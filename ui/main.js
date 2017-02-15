var count = 0;
var button = document.getElementById('button');
button.onclick = function() {
  count = count + 1;
  var span = document.getElementById('counter');
  span.innerHTML = counter.toString();
};