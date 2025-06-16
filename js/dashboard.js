document.addEventListener('DOMContentLoaded', function () {
    // --- LÓGICA DE VÍDEO ---
    const videoFrame = document.getElementById('featured-video');
    const videoLinks = document.querySelectorAll('.video-link');
  
    if (videoFrame && videoLinks.length > 0) {
      videoLinks.forEach(link => {
        link.addEventListener('click', function (event) {
          event.preventDefault();
  
          // Toggle de classe ativa
          videoLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
  
          // Pega o ID e monta a URL
          const videoId = this.dataset.videoId;
          const newSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;
  
          // Atualiza o iframe
          videoFrame.src = newSrc;
        });
      });
    }
  
    // --- LÓGICA DE PERSONALIZAÇÃO (Isolada) ---
    try {
      const patientName = localStorage.getItem('patientName');
      const patientId   = localStorage.getItem('patientId');
      const namePlaceholder = document.getElementById('patient-name-placeholder');
  
      if (namePlaceholder && patientName && patientName !== 'Paciente') {
        namePlaceholder.textContent = patientName.split(' ')[0];
      }
  
      const interestSection = document.getElementById('interest-section');
      const interestList    = document.getElementById('interest-list');
  
      if (interestSection && patientId) {
        const wishlistKey = `wishlist_${patientId}`;
        const wishlist    = JSON.parse(localStorage.getItem(wishlistKey));
  
        if (wishlist && wishlist.length > 0) {
          interestSection.classList.remove('hidden');
          interestList.innerHTML = '';
          wishlist.forEach(treatment => {
            const li = document.createElement('li');
            li.textContent = `✓ ${treatment}`;
            interestList.appendChild(li);
          });
        }
      }
    } catch (error) {
      console.error("Erro ao carregar dados do paciente:", error);
    }
  });
  