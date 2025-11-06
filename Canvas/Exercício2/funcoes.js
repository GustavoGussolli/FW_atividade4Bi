const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

// Configuração do retângulo
let retangulo = {
    x: 50,
    y: 100,
    width: 80,
    height: 40,
    dx: 3, // Velocidade horizontal
    color: "red",
};

// Função para desenhar o retângulo
function desenharRetangulo() {
    ctx.beginPath();
    ctx.rect(retangulo.x, retangulo.y, retangulo.width, retangulo.height);
    ctx.fillStyle = retangulo.color;
    ctx.fill();
    ctx.closePath();
}

// Função para atualizar a posição do retângulo
function atualizarPosicaoRetangulo() {
    // Atualizar a posição do retângulo
    retangulo.x += retangulo.dx;

    // Verificar colisão com as bordas horizontais
    if(retangulo.x + retangulo.width > canvas.width || retangulo.x < 0){
        retangulo.dx = -retangulo.dx; // inverte a direção horizontal
    }
}

// Função principal de animação
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    
    desenharRetangulo(); // Desenhar o retângulo
    atualizarPosicaoRetangulo(); // Atualizar a posição do retângulo
    requestAnimationFrame(animate); // Requisita o próximo frame
}
// Iniciar a animação
animate();