// Inicializar o Swiper (carrossel)
const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 3000,
    },
});

// Reproduzir música ao clicar no ícone
const playMusic = document.getElementById('playMusic');
const audio = document.getElementById('audio');
const restartMusic = document.getElementById('restartMusic');
restartMusic.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
});

// data de início do relacionamento
const dataInicio = new Date(2020, 2, 29); // 

function atualizarTimer() {
    const agora = new Date();
    const diferenca = agora - dataInicio; // Diferença em milissegundos

    // Converter a diferença para dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualizar o texto do timer
    document.getElementById('tempoJuntos').textContent =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

playMusic.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playMusic.classList.remove('fa-music');
        playMusic.classList.add('fa-pause');
    } else {
        audio.pause();
        playMusic.classList.remove('fa-pause');
        playMusic.classList.add('fa-music');
    }
});