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

    // --- LÓGICA DO MAPA FACIAL COM LOADING ---
    const patientGender = (localStorage.getItem('currentPatientGender') || localStorage.getItem('patientGender') || '').toLowerCase();
    const faceImage = document.getElementById('face-map-image');
    const faceContainer = document.querySelector('#face-map-content .face-map-container');
    const loadingOverlay = faceContainer?.querySelector('.image-loading-overlay');

    if (faceImage && faceContainer && loadingOverlay) {
        // Função para mostrar loading
        const showLoading = () => {
            loadingOverlay.classList.remove('hidden');
        };

        // Função para esconder loading
        const hideLoading = () => {
            loadingOverlay.classList.add('hidden');
        };

        // Inicia o loading
        showLoading();

        // Define o gênero do container
        const genderClass = patientGender === 'masculino' ? 'gender-male' : 'gender-female';
        faceContainer.classList.add(genderClass);

        // Define a imagem baseada no gênero
        const imageSrc = patientGender === 'masculino'
            ? 'images/rosto/rosto-principal-masculino.webp'
            : 'images/rosto/rosto-principal-feminino.webp';

        // Handlers para o carregamento da imagem
        const handleImageLoad = () => {
            hideLoading();
            faceImage.removeEventListener('load', handleImageLoad);
            faceImage.removeEventListener('error', handleImageError);
        };

        const handleImageError = () => {
            hideLoading();
            faceImage.removeEventListener('load', handleImageLoad);
            faceImage.removeEventListener('error', handleImageError);
            // Pode adicionar lógica de erro aqui se necessário
        };

        // Adiciona os event listeners
        faceImage.addEventListener('load', handleImageLoad);
        faceImage.addEventListener('error', handleImageError);

        // Define o src da imagem (isso dispara o carregamento)
        faceImage.src = imageSrc;

        // Verifica se a imagem já estava em cache
        if (faceImage.complete && faceImage.naturalWidth > 0) {
            hideLoading();
            faceImage.removeEventListener('load', handleImageLoad);
            faceImage.removeEventListener('error', handleImageError);
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
