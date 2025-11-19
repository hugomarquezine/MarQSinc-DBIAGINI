// js/tratamento.js (Versão Final Mais Robusta)


document.addEventListener('DOMContentLoaded', () => {
    if (!window.appConfig) {
        setTimeout(() => {
            // Silencioso
        }, 1000);
    }
    if (!window.dataService) {
        setTimeout(() => {
            // Silencioso
        }, 1000);
    }
    // --- LÓGICA DE PERSONALIZAÇÃO E DADOS ---
    const patientId = localStorage.getItem('patientId');
    const wishlistKey = `wishlist_${patientId}`;
    let wishlist = []; // Começa como uma lista vazia, por segurança.

    const storedWishlist = localStorage.getItem(wishlistKey);
    // Verifica se existe algo salvo antes de tentar processar
    if (storedWishlist) {
        try {
            // Tenta transformar o texto salvo em um objeto/lista JavaScript
            const parsedData = JSON.parse(storedWishlist);
            
            // Garante que o resultado seja realmente uma lista (um Array)
            if (Array.isArray(parsedData)) {
                wishlist = parsedData;
            }
        } catch (e) {
            console.error("Erro ao ler a lista de interesses do localStorage. O valor não era um JSON de lista válido:", storedWishlist);
            // Se der erro, a 'wishlist' continua como uma lista vazia, e o app não quebra.
        }
    }

    // Adicione este trecho no início do seu js/tratamento.js

    // --- LÓGICA DO BOTÃO VOLTAR INTELIGENTE ---
    const backButton = document.getElementById('back-to-map-btn');
    const navMapLink = document.getElementById('nav-map-link');
    const navMapLabel = document.getElementById('nav-map-label');

    const urlParams = new URLSearchParams(window.location.search);
    const origin = urlParams.get('origin'); // Lê o parâmetro 'origin' da URL
    const view = urlParams.get('view'); // Lê o parâmetro 'view' da URL (posterior, anterior, etc.)
    const viewParam = view ? `?view=${encodeURIComponent(view)}` : '';

    if (origin === 'corpo') {
        if (backButton) {
            backButton.href = `corpo.html${viewParam}`; // Muda o link para o mapa corporal
            backButton.textContent = '← Voltar para o Mapa Corporal'; // Muda o texto
        }
        if (navMapLink) {
            navMapLink.href = `corpo.html${viewParam}`;
        }
        if (navMapLabel) {
            navMapLabel.textContent = 'Mapa Corporal';
        }
    } else {
        if (backButton) {
            backButton.href = 'rosto.html';
            backButton.textContent = '← Voltar para o Mapa Facial';
        }
        if (navMapLink) {
            navMapLink.href = 'rosto.html';
        }
        if (navMapLabel) {
            navMapLabel.textContent = 'Mapa Facial';
        }
    }

// O resto do seu código do tratamento.js continua abaixo...

    // --- LÓGICA PARA MONTAR A PÁGINA ---
    const areaKey = urlParams.get('area');

    const mainTitle = document.getElementById('treatment-main-title');
    const container = document.getElementById('treatments-container');
    const complaintsList = document.getElementById('complaints-list');
    const cardTemplate = document.getElementById('treatment-card-template');

    
    // Monta os cards de tratamento
    if (areaKey && dadosClinica[areaKey]) {
        const areaData = dadosClinica[areaKey];
        mainTitle.textContent = areaData.titulo;

    // NOVO CÓDIGO para preencher as queixas
    if (complaintsList && areaData.queixas && areaData.queixas.length > 0) {
        complaintsList.innerHTML = ''; // Limpa a lista
        areaData.queixas.forEach(queixa => {
            const li = document.createElement('li');
            li.textContent = queixa;
            complaintsList.appendChild(li);
        });
        document.querySelector('.common-complaints').style.display = 'block';}  
    else {document.querySelector('.common-complaints').style.display = 'none';}

        areaData.tratamentos.forEach(tratamento => {
            const cardClone = cardTemplate.content.cloneNode(true);
            const interestButton = cardClone.querySelector('.interest-button');
            const treatmentName = tratamento.nome;

            cardClone.querySelector('.treatment-image').src = tratamento.imagem;
            cardClone.querySelector('.treatment-image').alt = treatmentName;
            cardClone.querySelector('.treatment-title').textContent = treatmentName;
            cardClone.querySelector('.treatment-description').textContent = tratamento.descricao;
            
            const benefitsList = cardClone.querySelector('.treatment-benefits');
            benefitsList.innerHTML = '';
            tratamento.beneficios.forEach(beneficio => {
                const li = document.createElement('li');
                li.textContent = beneficio;
                benefitsList.appendChild(li);
            });

            // Remove o botão de interesse
            interestButton.style.display = 'none';
                        
            // ==========================================================
            //           INÍCIO DO CÓDIGO "SAIBA MAIS"
            // ==========================================================
                    
            // Pega o container de informações do card que já foi criado
            const treatmentInfo = cardClone.querySelector('.treatment-info');
                    
            // Cria um container para os botões, se ainda não existir
            // Se você já criou um container para o botão "Amei", pode pular esta parte
            let buttonsContainer = treatmentInfo.querySelector('.treatment-buttons');
            if (!buttonsContainer) {
                buttonsContainer = document.createElement('div');
                buttonsContainer.className = 'treatment-buttons';
                // Se o botão Amei já existe, mova-o para dentro deste container
                const existingInterestButton = treatmentInfo.querySelector('.interest-button');
                if (existingInterestButton) {
                    buttonsContainer.appendChild(existingInterestButton);
                }
                treatmentInfo.appendChild(buttonsContainer);
            }
            
            
            // Cria o botão "Saiba Mais", mas SÓ se o tratamento tiver um 'id' e 'detalhes'
            if (tratamento.id && tratamento.detalhes) {
                const saibaMaisButton = document.createElement('a');
                saibaMaisButton.className = 'saiba-mais-button';
                saibaMaisButton.href = `procedimento-detalhe.html?id=${tratamento.id}`;
                saibaMaisButton.textContent = 'Saiba Mais';
                
                // Adiciona o novo botão ao container
                buttonsContainer.appendChild(saibaMaisButton);
            }
            
            // ==========================================================
            //            FIM DO CÓDIGO "SAIBA MAIS"
            // ==========================================================
            
            container.appendChild(cardClone);
        });
    } else {
        mainTitle.textContent = "Área não encontrada";
    }
});
