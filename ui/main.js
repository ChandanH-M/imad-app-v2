var counter = 0;
var button = document.getElementById('counter');
counter.onclick = function() {
  counter = counter + 1;
  button.innerHTML = counter.toString();
};