const canvas = document.getElementById("gameArea"); //grabs the canvas
const ctx = canvas.getContext("2d"); //tells the program what kind of figures you'll be placing

//  creating the size and color for the canvas.
ctx.fillStyle = "black";
ctx.fillRect(0,0, canvas.clientWidth, canvas.height);