window.onload = init; 

function init ()
{
	var button = document.getElementById("Click Me"); 
    button.onclick = handleButtonClick; 
}

function handleButtonClick() {
	alert("Button was clicked"); 
}
