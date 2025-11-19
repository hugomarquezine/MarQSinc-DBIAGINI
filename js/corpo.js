// js/corpo.js ou js/corpo-superior.js (VERSÃO FINAL E CORRIGIDA)


document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA PARA FOCAR APENAS NAS ÁREAS SELECIONADAS ---
    function updateMapWithSelectedAreas() {
        const allSelectedAreas = JSON.parse(localStorage.getItem('allSelectedAreas') || '[]');
        const bodySelectedAreas = allSelectedAreas.filter(area => area.type === 'body');
        
        // Se há áreas selecionadas, mostra todas mas destaca apenas as selecionadas
        if (bodySelectedAreas.length > 0) {
            const allDots = document.querySelectorAll('.interactive-dot');
            allDots.forEach(dot => {
                const fileName = dot.getAttribute('data-filename');
                const isSelected = bodySelectedAreas.some(area => area.filename === fileName);
                
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
    
    // --- LÓGICA DE CARREGAMENTO DAS IMAGENS DO CORPO COM LOADING ---
    const patientGender = (localStorage.getItem('currentPatientGender') || localStorage.getItem('patientGender') || '').toLowerCase();
    const frontImage = document.getElementById('body-front-image');
    const backImage = document.getElementById('body-back-image');
    const frontContainer = document.querySelector('#front-view-content .face-map-container');
    const backContainer = document.querySelector('#back-view-content .face-map-container');

    // Função para configurar loading de uma imagem
    const setupImageLoading = (imageElement, containerElement, imageSrc) => {
        if (!imageElement || !containerElement || !imageSrc) return;

        const loadingOverlay = containerElement.querySelector('.image-loading-overlay');
        if (!loadingOverlay) return;

        // Controle de tempo mínimo de loading
        const minLoadingTime = 200; // 800ms mínimo
        const loadingStartTime = Date.now();
        let imageLoaded = false;

        // Função para mostrar loading
        const showLoading = () => {
            loadingOverlay.classList.remove('hidden');
        };

        // Função para esconder loading com delay mínimo
        const hideLoading = () => {
            const elapsedTime = Date.now() - loadingStartTime;
            const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
            
            setTimeout(() => {
                loadingOverlay.classList.add('hidden');
            }, remainingTime);
        };

        // Inicia o loading
        showLoading();

        // Handlers para o carregamento da imagem
        const handleImageLoad = () => {
            imageLoaded = true;
            imageElement.classList.add('loaded');
            hideLoading();
            imageElement.removeEventListener('load', handleImageLoad);
            imageElement.removeEventListener('error', handleImageError);
        };

        const handleImageError = () => {
            imageLoaded = true;
            imageElement.classList.add('loaded');
            hideLoading();
            imageElement.removeEventListener('load', handleImageLoad);
            imageElement.removeEventListener('error', handleImageError);
            // Pode adicionar lógica de erro aqui se necessário
        };

        // Adiciona os event listeners
        imageElement.addEventListener('load', handleImageLoad);
        imageElement.addEventListener('error', handleImageError);

        // Define o src da imagem (isso dispara o carregamento)
        imageElement.src = imageSrc;

        // Verifica se a imagem já estava em cache
        if (imageElement.complete && imageElement.naturalWidth > 0) {
            imageLoaded = true;
            imageElement.classList.add('loaded');
            hideLoading();
            imageElement.removeEventListener('load', handleImageLoad);
            imageElement.removeEventListener('error', handleImageError);
        }
    };

    // Define o gênero dos containers
    const genderClass = patientGender === 'masculino' ? 'gender-male' : 'gender-female';
    if (frontContainer) frontContainer.classList.add(genderClass);
    if (backContainer) backContainer.classList.add(genderClass);

    // Define as imagens baseadas no gênero
    const frontImageSrc = patientGender === 'masculino'
        ? 'images/corpo/corpo-frente-masculino.webp'
        : 'images/corpo/corpo-frente-feminino.webp';

    const backImageSrc = patientGender === 'masculino'
        ? 'images/corpo/corpo-costas-masculino.webp'
        : 'images/corpo/corpo-costas-feminino.webp';

    // Configura o loading para ambas as imagens
    setupImageLoading(frontImage, frontContainer, frontImageSrc);
    setupImageLoading(backImage, backContainer, backImageSrc);

    // --- LÓGICA DE ALTERNÂNCIA FRENTE/COSTAS ---
    const showFrontBtn = document.getElementById('show-front-btn');
    const showBackBtn = document.getElementById('show-back-btn');
    const frontContent = document.getElementById('front-view-content');
    const backContent = document.getElementById('back-view-content');

    if (showFrontBtn && showBackBtn) { 
        showFrontBtn.addEventListener('click', () => {
            showFrontBtn.classList.add('active');
            showBackBtn.classList.remove('active');
            frontContent.classList.add('active');
            backContent.classList.remove('active');
        });

        showBackBtn.addEventListener('click', () => {
            showBackBtn.classList.add('active');
            showFrontBtn.classList.remove('active');
            backContent.classList.add('active');
            frontContent.classList.remove('active');
        });

        // Respeita a URL: se vier com view=posterior, inicia na vista posterior
        const params = new URLSearchParams(window.location.search);
        const view = params.get('view');
        if (view === 'posterior') {
            // espelha a lógica do clique no botão de posterior
            showBackBtn.classList.add('active');
            showFrontBtn.classList.remove('active');
            backContent.classList.add('active');
            frontContent.classList.remove('active');
        }
    }
    
    // --- LÓGICA DOS PONTOS (SEM MODAL) ---

    // --- CAPTURA DE ACESSO NO CLIQUE DO PONTO ---
    const allDots = document.querySelectorAll('.interactive-dot');
    allDots.forEach(dot => {
        dot.addEventListener('click', async (event) => {
            const areaName = dot.dataset.area;
            const fileName = dot.dataset.filename;
            
            // redireciona diretamente para o tratamento
            const isBackView = !!dot.closest('#back-view-content');
            const viewParam = isBackView ? '&view=posterior' : '';
            window.location.href = `tratamento.html?area=${fileName}&origin=corpo${viewParam}`;
        });
    });
});
