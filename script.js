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