//find output and assign to variable outputEl
//create new element and assign to variable new1El
//create new element and assign to variable new2El
var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
var new2El = document.createElement("p");
//change HTML attribute to say 'this is a new element'
//change HTML attribute to say 'this is a new new element'
new1El.innerText = 'this is a new element';
new2El.innerText = 'this is also a new element';
//append both elements
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
//change at least two CSS attributes of the page
new1El.style.color = "purple";
new2El.style.color = "blue";
new1El.style.fontFamily = "serif";
new2El.style.fontFamily = "cursive";
