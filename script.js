// 1. Lluvia de corazones
setInterval(() => {
    const contenedor = document.getElementById('corazones-box');
    const c = document.createElement('div');
    c.classList.add('corazon-pixel');
    c.innerText = ['❤️', '💖', '💗', '✨'][Math.floor(Math.random() * 4)];
    c.style.left = Math.random() * 100 + "vw";
    c.style.fontSize = Math.random() * 30 + 20 + "px";
    c.style.animationDuration = Math.random() * 3 + 4 + "s";
    contenedor.appendChild(c);
    setTimeout(() => c.remove(), 7000);
}, 300);

// 2. La Gran Explosión a los 10 segundos
setTimeout(() => {
    const container = document.getElementById('explosion-container');
    const gigante = document.createElement('div');
    gigante.className = 'corazon-gigante';
    gigante.innerText = '❤️';
    container.appendChild(gigante);

    setTimeout(() => {
        gigante.remove();
        // Shake screen
        document.body.style.animation = "shake 0.5s";
        
        for (let i = 0; i < 120; i++) {
            const p = document.createElement('div');
            p.className = 'particula';
            p.innerText = ['❤️', '💖', '✨', '🌸', '💕'][Math.floor(Math.random() * 5)];
            const angulo = Math.random() * Math.PI * 2;
            const dist = Math.random() * 800 + 200;
            p.style.setProperty('--x', Math.cos(angulo) * dist + 'px');
            p.style.setProperty('--y', Math.sin(angulo) * dist + 'px');
            p.style.fontSize = Math.random() * 30 + 20 + "px";
            container.appendChild(p);
            setTimeout(() => p.remove(), 2000);
        }
    }, 2200);
}, 10000);