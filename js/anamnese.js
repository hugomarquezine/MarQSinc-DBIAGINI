// js/anamnese.js (VERSÃO FINAL QUE ESPERA A RESPOSTA DO N8N)

document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const progressBarFill = document.querySelector('.progress-bar-fill');
    let currentStep = 1;
    const totalSteps = steps.length;

    // Objeto de dados com chaves padronizadas e limpas
    const anamnesisData = {
        nome_completo: "",
        cpf: "",
        email: "",
        telefone: "",
        data_nascimento: "",
        genero: "",
        formalidade: "",
        procedimentos_anteriores: "",
        quais_procedimentos: ""
    };

    function showStep(stepNumber) {
        steps.forEach(step => step.classList.remove('active'));
        const activeStep = document.querySelector(`.step[data-step="${stepNumber}"]`);
        if (activeStep) {
            activeStep.classList.add('active');
            updateProgressBar();
        }
    }

    function updateProgressBar() {
        const progress = ((currentStep - 1) / totalSteps) * 100;
        progressBarFill.style.width = `${progress}%`;
    }

    function nextStep() {
        if (currentStep < totalSteps) {
            currentStep++;
            showStep(currentStep);
        }
    }

    // --- LÓGICA PARA CADA ETAPA (COLETA DOS DADOS) ---

    // Passo 1: Nome
    document.getElementById('form-step-1').addEventListener('submit', (e) => {
        e.preventDefault();
        anamnesisData.nome_completo = document.getElementById('input-nome').value;
        nextStep();
    });
    
    // Passo 2: Forma de Tratamento
    document.querySelectorAll('.step[data-step="2"] .option-button').forEach(button => {
        button.addEventListener('click', () => {
            anamnesisData.formalidade = button.dataset.value;
            nextStep();
        });
    });

    // Passo 3: Nascimento e Sexo
    const genderButtons = document.querySelectorAll('#gender-selection .option-button');
    genderButtons.forEach(button => {
        button.addEventListener('click', () => {
            genderButtons.forEach(btn => btn.style.borderColor = '#ddd');
            button.style.borderColor = '#008080';
            anamnesisData.genero = button.dataset.value;
        });
    });
    document.getElementById('form-step-3').addEventListener('submit', (e) => {
        e.preventDefault();
        if (!anamnesisData.genero) {
            alert('Por favor, selecione o sexo.');
            return;
        }
        anamnesisData.data_nascimento = document.getElementById('input-nascimento').value;
        nextStep();
    });

    // Passo 4: Procedimentos Anteriores
    const extraProcedureDiv = document.getElementById('procedimentos-anteriores-texto');
    document.querySelectorAll('.step[data-step="4"] .option-button').forEach(button => {
        button.addEventListener('click', () => {
            anamnesisData.procedimentos_anteriores = button.dataset.value;
            if (button.dataset.value === 'Sim') {
                extraProcedureDiv.classList.remove('hidden');
            } else {
                anamnesisData.quais_procedimentos = "Nenhum";
                nextStep();
            }
        });
    });
    document.getElementById('form-step-4-extra').addEventListener('submit', (e) => {
        e.preventDefault();
        anamnesisData.quais_procedimentos = document.getElementById('input-procedimentos').value || "Não especificado";
        nextStep();
    });

    // --- LÓGICA FINAL: VERIFICAR/CRIAR O PACIENTE E INICIAR A SESSÃO ---
    document.getElementById('form-step-5').addEventListener('submit', async (e) => {
        e.preventDefault();
        const finishButton = document.getElementById('finish-anamnese');
        finishButton.textContent = 'Verificando Cadastro...';
        finishButton.disabled = true;

        anamnesisData.cpf = document.getElementById('input-cpf').value;
        anamnesisData.email = document.getElementById('input-email').value;
        anamnesisData.telefone = document.getElementById('input-telefone').value;

        if (!anamnesisData.cpf) {
            alert('Por favor, preencha o CPF.');
            finishButton.textContent = 'Concluir e Começar a Explorar';
            finishButton.disabled = false;
            return;
        }

        const anamneseWebhookURL = 'https://marqai-n8n-webhook.5ummqx.easypanel.host/webhook/anamnesedemov1';

        try {
            // Envia os dados e AGUARDA a resposta
            const response = await fetch(anamneseWebhookURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(anamnesisData)
            });

            const result = await response.json();

            // Verifica se o n8n respondeu com sucesso e nos deu um ID
            if (result.success && result.newPatientId) {
                console.log("Sessão iniciada com sucesso! ID do Paciente:", result.newPatientId);

                // SALVA O ID OFICIAL VINDO DO SUPABASE
                localStorage.setItem('patientId', result.newPatientId);
                localStorage.setItem('patientName', anamnesisData.nome_completo);
                localStorage.setItem('patientGender', anamnesisData.genero);
                
                // SÓ DEPOIS DE TUDO DAR CERTO, REDIRECIONA
                window.location.href = 'mapa.html'; // Corrigido para 'rosto.html' que é o seu mapa facial

            } else {
                // Se o n8n respondeu com um erro (ex: CPF já existe, mas sem ID)
                throw new Error(result.message || 'Falha ao processar o cadastro no servidor.');
            }
        } catch (error) {
            console.error("Erro no processo de finalização da anamnese:", error);
            alert(error.message); // Mostra o erro exato para o usuário
            
            // Reativa o botão para o usuário poder corrigir
            finishButton.textContent = 'Concluir e Começar a Explorar';
            finishButton.disabled = false;
        }
    });
    
    // Inicia na primeira etapa
    showStep(currentStep);
});