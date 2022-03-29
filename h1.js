window.onload = init; 

function init()
{
	var button = document.getElementById("Button"); 
    button.onclick = handClick; 
}

function handClick() 
{
	var text = document.getElementById("hello"); 
	text.innerHTML = "Button Clicked"; 
}