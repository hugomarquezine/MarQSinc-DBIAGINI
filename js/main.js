// js/main.js

async function handleEndSession() {
    const confirmation = confirm('Deseja realmente encerrar a sessão deste paciente?');

    if (confirmation) {
        const patientId = localStorage.getItem('currentPatientId') || localStorage.getItem('patientId');

        if (patientId) {
            // Limpeza dos dados do paciente
            const wishlistKey = `wishlist_${patientId}`;
            localStorage.removeItem('currentPatientId');
            localStorage.removeItem('currentPatientName');
            localStorage.removeItem('currentPatientGender');
            localStorage.removeItem(wishlistKey);
        }

        // Redireciona para a tela de seleção
        window.location.href = 'index.html';
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