// js/main.js (Versão final com salvamento de novo paciente)

document.addEventListener('DOMContentLoaded', () => {
    const endSessionButton = document.getElementById('end-session-button');

    // Função para enviar os dados de um novo paciente para o n8n
    async function saveNewPatientData(data) {
        // CRIE UM NOVO WEBHOOK NO N8N PARA ESTA AÇÃO
        const savePatientWebhookURL = 'https://marqai-n8n-webhook.5ummqx.easypanel.host/webhook/anamnesedemov1'; 
        
        try {
            console.log("Enviando dados do novo paciente para o n8n...", data);
            await fetch(savePatientWebhookURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
        } catch (error) {
            console.error('Falha ao salvar os dados do novo paciente:', error);
            // Mesmo com falha, a sessão será encerrada.
        }
    }

    // Substitua o bloco if (endSessionButton) ... pelo código abaixo

if (endSessionButton) {
    // Transformamos a função em 'async' para usar 'await'
    endSessionButton.addEventListener('click', async (event) => { 
        event.preventDefault(); 
        
        const confirmation = confirm('Deseja realmente encerrar esta sessão?');

        if (confirmation) {
            const patientId = localStorage.getItem('patientId');

            // Verifica se existe um ID de paciente na sessão antes de enviar
            if (patientId) {
                // CRIE ESTE NOVO WEBHOOK NO SEU N8N
                const endSessionWebhookURL = 'https://marqai-n8n-webhook.5ummqx.easypanel.host/webhook/end-session'; 
                
                console.log(`Enviando evento de fim de sessão para o paciente: ${patientId}`);
                try {
                    // Usamos await para garantir que o envio seja tentado antes de limpar e redirecionar
                    await fetch(endSessionWebhookURL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            patientId: patientId, 
                            event: 'session_ended',
                            timestamp: new Date().toISOString()
                        })
                    });
                } catch (error) {
                    console.error('Falha ao enviar webhook de fim de sessão:', error);
                }
            }
            
            // O resto da lógica continua igual
            console.log('Encerrando sessão e limpando todos os dados locais...');
            localStorage.clear(); 
            window.location.href = 'login.html';
        }
    });
}
});