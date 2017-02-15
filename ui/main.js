
var button = document.getElementById('button1');
var count = 0;
button.onclick = function() {
  count = count + 1;
  var aaa = document.getElementById('counter');
  aaa.innerHTML = count.toString();
};