const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

// Configuração do círculo
let circle = {
    x: 250,
    y: 250,
    radius: 25,
    color: "blue",
    speed: 10 // Velocidade do movimento
};

function drawCircle() {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    ctx.fillStyle = circle.color;
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2); // Desenha o círculo
    ctx.fill();
    ctx.closePath();
}

function moveCircle(event) {
    const key = event.key;

    if (key === "ArrowUp" && circle.y - circle.radius > 0) {
        circle.y -= circle.speed; // Move para cima
    } else if (key === "ArrowDown" && circle.y + circle.radius < canvas.height) {
        circle.y += circle.speed; // Move para baixo
    } else if (key === "ArrowLeft" && circle.x - circle.radius > 0) {
        circle.x -= circle.speed; // Move para a esquerda
    } else if (key === "ArrowRight" && circle.x + circle.radius < canvas.width) {
        circle.x += circle.speed; // Move para a direita
    }

    drawCircle(); // Atualiza o desenho
}

window.addEventListener('keydown', moveCircle);
drawCircle();