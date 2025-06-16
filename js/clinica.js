document.addEventListener('DOMContentLoaded', function () {
    const videoFrame = document.getElementById('featured-video');
    const videoLinks = document.querySelectorAll('.video-link');

    if (videoFrame && videoLinks.length > 0) {
        videoLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();

                // Troca visual
                videoLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                // ID do vídeo e URL final
                const videoId = this.dataset.videoId;
                const newSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;

                // Força recarregamento do iframe mesmo se for o mesmo ID
                if (videoFrame.src !== newSrc) {
                    videoFrame.src = newSrc;
                } else {
                    videoFrame.src = ''; // truque para "resetar"
                    setTimeout(() => videoFrame.src = newSrc, 100);
                }
            });
        });
    }
});
