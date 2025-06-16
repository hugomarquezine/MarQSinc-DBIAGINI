// js/chat.js (Versão Final com Identificação de Paciente)

document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const messagesContainer = document.getElementById('chat-messages');
    const webhookURL = 'https://marqai-n8n-webhook.5ummqx.easypanel.host/webhook/chatdemov1';

    // --- LÓGICA DE IDENTIFICAÇÃO ---
    // Pega os dados do paciente que foram salvos na anamnese
    const patientInfo = {
        name: localStorage.getItem('patientName'),
        id: localStorage.getItem('patientId') // Telefone do paciente
    };

    // Função para adicionar mensagens na tela
    function appendMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        messageDiv.appendChild(paragraph);
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    // Função para mostrar/esconder o indicador "digitando..."
    function showTypingIndicator(show) {
        let indicator = document.getElementById('typing-indicator');
        if (show) {
            if (!indicator) {
                indicator = document.createElement('div');
                indicator.id = 'typing-indicator';
                indicator.classList.add('message', 'ai-message', 'typing-indicator');
                indicator.innerHTML = `<span></span><span></span><span></span>`;
                messagesContainer.appendChild(indicator);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        } else {
            if (indicator) {
                indicator.remove();
            }
        }
    }

    // Função para enviar a mensagem para o n8n e receber a resposta
    async function sendMessageToN8N(userMessage) {
        showTypingIndicator(true);

        // Monta o pacote de dados para o n8n, agora com a identificação
        const payload = {
            question: userMessage,
            patientId: patientInfo.id,      // <-- ID DO PACIENTE
            patientName: patientInfo.name   // <-- NOME DO PACIENTE
        };

        try {
            const response = await fetch(webhookURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            showTypingIndicator(false);
            
            if (response.ok) {
                const data = await response.json();
                console.log('DADOS COMPLETOS RECEBIDOS DO N8N:', data);

                if (data && data.answer) {
                    appendMessage(data.answer, 'ai');
                } else {
                    console.error('ERRO: A resposta do n8n não contém a propriedade "answer". Resposta recebida:', data);
                    appendMessage('Recebi uma resposta, mas não no formato que eu esperava.', 'ai');
                }
            } else {
                console.error('Resposta do servidor não foi OK. Status:', response.status);
                appendMessage('Desculpe, o servidor respondeu com um erro. Tente novamente mais tarde.', 'ai');
            }
        } catch (error) {
            showTypingIndicator(false);
            console.error('Erro de conexão ou ao processar o JSON:', error);
            appendMessage('Houve um erro de conexão. Verifique sua internet e tente novamente.', 'ai');
        }
    }

    // --- INÍCIO DO CHAT ---
    const initialMessageContainer = document.querySelector('.message.ai-message p');
    if (patientInfo.name) {
        // Personaliza a mensagem de boas-vindas se encontrar o nome do paciente
        initialMessageContainer.textContent = `Olá, ${patientInfo.name}! Sou a assistente virtual da clínica. Como posso te ajudar hoje?`;
    }

    // Evento de envio do formulário
    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userMessage = messageInput.value.trim();

        if (userMessage) {
            // Verifica se tem um ID de paciente antes de enviar
            if (!patientInfo.id) {
                alert('Sessão do paciente não encontrada. Por favor, inicie pela recepção.');
                return;
            }
            appendMessage(userMessage, 'user');
            messageInput.value = '';
            sendMessageToN8N(userMessage);
        }
    });
});