console.log('Loaded!');
var element = document.getElementById('text');
element.innerHTML = "new value";
var img = document.getElementById('madi');
img.onclick = function()
{
    img.style.marginRight = '100px';
};
var leftmargin = 0;
function moveRight()
{
    leftmargin = leftmargin + 5;
    img.style.marginLeft = leftmargin + "px";
    
    
}
var interval = setInterval(moveRight, 60);