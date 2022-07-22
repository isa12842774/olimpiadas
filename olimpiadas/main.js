
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 2;
ctx.arc(245, 250, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Black";
ctx.lineWidth = 2;
ctx.arc(290, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 2;
ctx.arc(335, 250, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Red";
ctx.lineWidth = 2;
ctx.arc(380, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	
