var counter = 0;
var counter = document.getElementById('counter');
counter.onclick = function() {
  counter = counter + 1;
  counter.innerHTML = counter.toString();
};