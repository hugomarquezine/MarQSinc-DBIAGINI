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
    
    // --- LÓGICA DE TROCA DE IMAGEM POR GÊNERO ---
    const patientGender = (localStorage.getItem('currentPatientGender') || localStorage.getItem('patientGender') || '').toLowerCase();
    const frontImage = document.getElementById('body-front-image');
    const backImage = document.getElementById('body-back-image');
    const bodyContainers = document.querySelectorAll('.body-part-container');

    if (frontImage && backImage && bodyContainers.length > 0) {
        if (patientGender === 'masculino') {
            frontImage.src = 'images/corpo/corpo-frente-masculino.webp';
            backImage.src = 'images/corpo/corpo-costas-masculino.webp';
            bodyContainers.forEach(container => container.classList.add('gender-male'));
        } else {
            frontImage.src = 'images/corpo/corpo-frente-feminino.webp';
            backImage.src = 'images/corpo/corpo-costas-feminino.webp';
            bodyContainers.forEach(container => container.classList.add('gender-female'));
        }
    }

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
