// js/mapa.js ou js/rosto.js (VERSÃO FINAL E CORRIGIDA)


document.addEventListener('DOMContentLoaded', () => {
    if (!window.appConfig) {
        setTimeout(() => {
            // Silencioso
        }, 1000);
    }

    // --- LÓGICA PARA FOCAR APENAS NAS ÁREAS SELECIONADAS ---
    function updateMapWithSelectedAreas() {
        const allSelectedAreas = JSON.parse(localStorage.getItem('allSelectedAreas') || '[]');
        const faceSelectedAreas = allSelectedAreas.filter(area => area.type === 'face');
        
        // Se há áreas selecionadas, mostra todas mas destaca apenas as selecionadas
        if (faceSelectedAreas.length > 0) {
            const allDots = document.querySelectorAll('.interactive-dot');
            allDots.forEach(dot => {
                const fileName = dot.getAttribute('data-filename');
                const isSelected = faceSelectedAreas.some(area => area.filename === fileName);
                
                if (!isSelected) {
                    // Mantém o ponto visível mas cinza (não selecionado)
                    dot.classList.remove('selected-highlight');
                    dot.classList.add('not-selected');
                } else {
                    // Destaca as áreas selecionadas
                    dot.classList.add('selected-highlight');
                    dot.classList.remove('not-selected');
                }
            });
            
            // Atualiza o título para indicar foco nas áreas selecionadas
            const title = document.querySelector('.title');
            if (title) {
                title.textContent = 'Explore as áreas que você selecionou';
            }
        }
    }

    // Executa a atualização inicial
    updateMapWithSelectedAreas();

    // Listener para detectar mudanças no localStorage
    window.addEventListener('storage', (e) => {
        if (e.key === 'allSelectedAreas') {
            // Recarrega a página para aplicar as mudanças
            window.location.reload();
        }
    });

    // Listener para detectar mudanças quando a página ganha foco
    window.addEventListener('focus', () => {
        updateMapWithSelectedAreas();
    });

    // Listener para evento customizado de atualização
    window.addEventListener('areasUpdated', () => {
        updateMapWithSelectedAreas();
    });
    
    // --- LÓGICA DE ALTERNÂNCIA DE VISUALIZAÇÃO (ROSTO/CORPO) ---
    const showFaceBtn = document.getElementById('show-face-btn');
    const showBodyBtn = document.getElementById('show-body-btn');
    const faceContent = document.getElementById('face-map-content');
    const bodyContent = document.getElementById('body-zones-content');

    if (showFaceBtn && showBodyBtn) { 
        showFaceBtn.addEventListener('click', () => {
            showFaceBtn.classList.add('active');
            showBodyBtn.classList.remove('active');
            faceContent.classList.add('active');
            bodyContent.classList.remove('active');
        });

        showBodyBtn.addEventListener('click', () => {
            showBodyBtn.classList.add('active');
            showFaceBtn.classList.remove('active');
            bodyContent.classList.add('active');
            faceContent.classList.remove('active');
        });
    }

    // --- LÓGICA DO MAPA FACIAL (EXISTENTE E FUNCIONAL) ---
    const patientGender = (localStorage.getItem('currentPatientGender') || localStorage.getItem('patientGender') || '').toLowerCase();
    const faceImage = document.getElementById('face-map-image');
    const faceContainer = document.querySelector('#face-map-content .face-map-container'); 
    
    if (faceImage && faceContainer) {
        if (patientGender === 'masculino') {
            faceImage.src = 'images/rosto/rosto-principal-masculino.webp';
            faceContainer.classList.add('gender-male');
        } else {
            faceImage.src = 'images/rosto/rosto-principal-feminino.webp';
            faceContainer.classList.add('gender-female');
        }
    }
    
    // --- LÓGICA DOS PONTOS (SEM MODAL) ---

    // --- CAPTURA DE ACESSO NO CLIQUE DO PONTO ---
    const allDots = document.querySelectorAll('.interactive-dot');
    allDots.forEach(dot => {
        dot.addEventListener('click', async (event) => {
            const areaName = event.currentTarget.getAttribute('data-area');
            const fileName = event.currentTarget.getAttribute('data-filename');
            
            // redireciona diretamente para o tratamento
            window.location.href = `tratamento.html?area=${fileName}&origin=rosto`;
        });
    });
});
