// js/mapa.js ou js/rosto.js (VERSÃO FINAL E CORRIGIDA)

document.addEventListener('DOMContentLoaded', () => {
    
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
    const patientGender = localStorage.getItem('patientGender');
    const faceImage = document.getElementById('face-map-image');
    const faceContainer = document.querySelector('#face-map-content .face-map-container'); 
    
    if (faceImage && faceContainer) {
        if (patientGender === 'masculino') {
            faceImage.src = 'images/rosto-principal-masculino.jpg';
            faceContainer.classList.add('gender-male');
        } else {
            faceImage.src = 'images/rosto-principal-feminino.jpg';
            faceContainer.classList.add('gender-female');
        }
    }
    
    // --- LÓGICA DO MODAL INTELIGENTE E DOS PONTOS (ATUALIZADA) ---
    const modal = document.getElementById('custom-modal');
    if (modal) {
        const modalTitle = document.getElementById('modal-title');
        const annoyanceButton = document.getElementById('modal-annoyance-btn');
        const curiosityButton = document.getElementById('modal-curiosity-btn');
        const closeButton = document.getElementById('modal-close-btn');

        // Função para o webhook de "áreas de incômodo"
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
        
        // Função para o webhook de "áreas visualizadas"
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

            // clona botões para evitar múltiplos listeners
            const newAnnoyanceBtn = annoyanceButton.cloneNode(true);
            const newCuriosityBtn = curiosityButton.cloneNode(true);
            annoyanceButton.parentNode.replaceChild(newAnnoyanceBtn, annoyanceButton);
            curiosityButton.parentNode.replaceChild(newCuriosityBtn, curiosityButton);

            // “Sim, me incomoda”
            newAnnoyanceBtn.addEventListener('click', () => {
                sendAnnoyanceWebhook(fileName);
                window.location.href = `tratamento.html?area=${fileName}&origin=${originPage}`;
                hideModal();
            });

            // “Apenas curiosidade”
            newCuriosityBtn.addEventListener('click', () => {
                window.location.href = `tratamento.html?area=${fileName}&origin=${originPage}`;
                hideModal();
            });
        }

        // fecha modal ao clicar no X ou fora do conteúdo
        closeButton.addEventListener('click', hideModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) hideModal();
        });

        // --- CAPTURA DE ACESSO NO CLIQUE DO PONTO ---
        const allDots = document.querySelectorAll('.interactive-dot');
        allDots.forEach(dot => {
            dot.addEventListener('click', async (event) => {
                const areaName = event.currentTarget.getAttribute('data-area');
                const fileName = event.currentTarget.getAttribute('data-filename');
                
                // envia o webhook de visualização assim que clica no ponto
                await sendAreaViewed(fileName);
                
                // abre o modal em seguida
                showModal(areaName, fileName, 'rosto');
            });
        });
    }
});
