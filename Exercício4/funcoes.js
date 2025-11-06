const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variáveis para controle do desenho com mouse
let isDrawing = false;
let currentX = 0;
let currentY = 0;

function drawScene() {
    // Limpa a tela
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Se estiver desenhando, desenha a linha e o retângulo
    if (isDrawing) {
        // Desenha a linha do centro até o mouse
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
        
        // Desenha o retângulo com canto no mouse
        ctx.beginPath();
        ctx.rect(currentX, currentY, 50, 30);
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
    }
}

// Eventos para o desenho com arraste do mouse
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    updateMousePosition(event);
    drawScene(); // Redesenha imediatamente
});

canvas.addEventListener('mousemove', (event) => {
    updateMousePosition(event);
    if (isDrawing) {
        drawScene(); // Redesenha apenas se estiver desenhando
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    drawScene(); // Redesenha para limpar (não desenha nada quando isDrawing é false)
});

canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
    drawScene(); // Redesenha para limpar
});

function updateMousePosition(event) {
    const rect = canvas.getBoundingClientRect();
    currentX = event.clientX - rect.left;
    currentY = event.clientY - rect.top;
}

// Desenha a cena inicial (vazia)
drawScene();