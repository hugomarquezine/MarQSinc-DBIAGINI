// js/main.js (VERSÃO REFATORADA COM WEBHOOK)

async function handleEndSession() {
    const confirmation = confirm('Deseja realmente encerrar a sessão deste paciente?');

    if (confirmation) {
        const patientId = localStorage.getItem('currentPatientId') || localStorage.getItem('patientId');

        if (patientId) {
            try {
                const clinicInfo = JSON.parse(localStorage.getItem('clinicInfo') || '{}');
                const clinicId = clinicInfo?.id || null;

                // Prepara dados do endSession
                const endSessionData = {
                    patientId: patientId,
                    clinicId: clinicId,
                    eventType: 'session_ended',
                    timestamp: new Date().toISOString(),
                    sessionData: {
                        patientName: localStorage.getItem('currentPatientName'),
                        patientGender: localStorage.getItem('currentPatientGender'),
                        wishlist: localStorage.getItem(`wishlist_${patientId}`)
                    }
                };

                // Tenta enviar para webhook
                let webhookSent = false;
                
                // Primeira tentativa
                if (window.dataService) {
                    try {
                        await window.dataService.sendData('endSession', endSessionData);
                        webhookSent = true;
                    } catch (error) {
                        // Silencioso
                    }
                }
                
                // Segunda tentativa se a primeira falhou
                if (!webhookSent) {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    
                    if (window.dataService) {
                        try {
                            await window.dataService.sendData('endSession', endSessionData);
                            webhookSent = true;
                        } catch (error) {
                            // Silencioso
                        }
                    }
                }
                
                // Terceira tentativa - fallback direto
                if (!webhookSent) {
                    try {
                        const webhookURL = window.appConfig?.getWebhookURL('endSession') || 
                                         'https://marqai-n8n-webhook.5ummqx.easypanel.host/webhook/end-session';
                        
                        const response = await fetch(webhookURL, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(endSessionData)
                        });
                        
                        if (response.ok) {
                            webhookSent = true;
                        }
                    } catch (error) {
                        // Silencioso
                    }
                }

            } catch (error) {
                // Silencioso
            }
        }

        // Limpeza seletiva dos dados do paciente
        const wishlistKey = `wishlist_${patientId}`;
        localStorage.removeItem('currentPatientId');
        localStorage.removeItem('currentPatientName');
        localStorage.removeItem('currentPatientGender');
        localStorage.removeItem(wishlistKey);

        // Redireciona para a tela de seleção
        window.location.href = 'dashboard.html';
    }
}

function setupEndSessionButton() {
    const endSessionButton = document.getElementById('end-session-button');
    if (endSessionButton) {
        // Remove listeners existentes
        endSessionButton.removeEventListener('click', handleEndSession); 
        
        // Adiciona novo listener
        endSessionButton.addEventListener('click', function(e) {
            e.preventDefault(); // Previne comportamento padrão do link
            handleEndSession();
        });
    } else {
        // Tenta novamente após 1 segundo
        setTimeout(() => {
            setupEndSessionButton();
        }, 1000);
    }
}

function carregarConfiguracoesDaClinica() {
    try {
        // Aplica cor primária padrão
        document.documentElement.style.setProperty('--cor-primaria', '#DCB747');
        
        // Mostra o logo imediatamente
        const logoElements = document.querySelectorAll('.logo');
        logoElements.forEach(logo => {
            logo.classList.add('loaded');
        });
        
    } catch (error) {
        document.documentElement.style.setProperty('--cor-primaria', '#DCB747');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Aguarda um pouco para garantir que tudo esteja carregado
    setTimeout(() => {
        setupEndSessionButton();
    }, 500);
    
    carregarConfiguracoesDaClinica();
});