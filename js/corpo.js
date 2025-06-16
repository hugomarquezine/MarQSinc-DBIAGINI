// js/corpo.js ou js/corpo-superior.js (VERSÃO FINAL E CORRIGIDA)

document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE TROCA DE IMAGEM POR GÊNERO ---
    const patientGender = localStorage.getItem('patientGender');
    const frontImage = document.getElementById('body-front-image');
    const backImage = document.getElementById('body-back-image');
    const bodyContainers = document.querySelectorAll('.body-part-container');

    if (frontImage && backImage && bodyContainers.length > 0) {
        if (patientGender === 'masculino') {
            frontImage.src = 'images/corpo-frente-masculino.jpg';
            backImage.src = 'images/corpo-costas-masculino.jpg';
            bodyContainers.forEach(container => container.classList.add('gender-male'));
        } else {
            frontImage.src = 'images/corpo-frente-feminino.jpg';
            backImage.src = 'images/corpo-costas-feminino.jpg';
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
    }
    
    // --- LÓGICA DO MODAL INTELIGENTE E DOS PONTOS ---
    const modal = document.getElementById('custom-modal');
    if (modal) {
        const modalTitle        = document.getElementById('modal-title');
        const annoyanceButton   = document.getElementById('modal-annoyance-btn');
        const curiosityButton   = document.getElementById('modal-curiosity-btn');
        const closeButton       = document.getElementById('modal-close-btn');

        // Função para o webhook de ÁREAS DE INCÔMODO
        async function sendAnnoyanceWebhook(areaKey) {
            const patientId = localStorage.getItem('patientId');
            const webhookURL = 'https://marqai-n8n-webhook.5ummqx.easypanel.host/webhook/areasdeincomodo';
            if (!patientId || !areaKey) return;
            try {
                await fetch(webhookURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ patientId, annoyanceArea: areaKey })
                });
            } catch (error) {
                console.error('Falha ao enviar webhook de incômodo:', error);
            }
        }

        // Função para o webhook de ÁREAS VISUALIZADAS
        async function sendAreaViewed(areaKey) {
            const patientId = localStorage.getItem('patientId');
            const webhookURL = 'https://marqai-n8n-editor.5ummqx.easypanel.host/webhook/areasdeinteresse';
            if (!patientId || !areaKey) return;
            try {
                await fetch(webhookURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ patientId, viewedArea: areaKey })
                });
            } catch (error) {
                console.error('Falha ao enviar webhook de visualização:', error);
            }
        }
        
        function hideModal() {
            modal.classList.add('hidden');
        }

        function showModal(areaName, fileName, originPage) {
            modalTitle.textContent = `Região: ${areaName}`;
            modal.classList.remove('hidden');

            // Clona botões para evitar listeners duplicados
            const newAnnoyanceBtn = annoyanceButton.cloneNode(true);
            const newCuriosityBtn = curiosityButton.cloneNode(true);
            annoyanceButton.parentNode.replaceChild(newAnnoyanceBtn, annoyanceButton);
            curiosityButton.parentNode.replaceChild(newCuriosityBtn, curiosityButton);

            // “Sim, me incomoda”
            newAnnoyanceBtn.addEventListener('click', async () => {
                await sendAnnoyanceWebhook(fileName);
                window.location.href = `tratamento.html?area=${fileName}&origin=${originPage}`;
                hideModal();
            });

            // “Apenas curiosidade”
            newCuriosityBtn.addEventListener('click', () => {
                window.location.href = `tratamento.html?area=${fileName}&origin=${originPage}`;
                hideModal();
            });
        }

        // Fecha modal ao clicar no X ou fora do conteúdo
        closeButton.addEventListener('click', hideModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) hideModal();
        });

        // --- CAPTURA DE ACESSO NO CLIQUE DO PONTO ---
        const allDots = document.querySelectorAll('.interactive-dot');
        allDots.forEach(dot => {
            dot.addEventListener('click', async (event) => {
                const areaName = dot.dataset.area;
                const fileName = dot.dataset.filename;
                
                // envia webhook de visualização assim que clica
                await sendAreaViewed(fileName);
                
                // depois abre o modal indicando origem 'corpo'
                showModal(areaName, fileName, 'corpo');
            });
        });
    }
});
