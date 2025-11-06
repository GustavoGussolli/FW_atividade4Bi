const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(150, 100, 30, (Math.PI * 3) / 2, Math.PI / 2, false);
ctx.fillStyle = 'blue';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();

ctx.beginPath();
ctx.rect(50, 200, 200, 100);
ctx.fillStyle = 'green';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(450, 50);
ctx.strokeStyle = 'purple';
ctx.lineWidth = 3;
ctx.stroke();