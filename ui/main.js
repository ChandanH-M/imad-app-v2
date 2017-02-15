
var button = document.getElementById('counter');
button.onclick = function() {
    alert('hi');
  count = count + 1;
  var aaa = document.getElementById('counter');
  aaa.innerHTML = count.toString();
};