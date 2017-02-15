
var button1 = document.getElementById('counter');
button1.onclick = function() {
    alert('hi');
  count = count + 1;
  var aaa = document.getElementById('counter');
  aaa.innerHTML = count.toString();
};