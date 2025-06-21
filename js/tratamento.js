// js/tratamento.js (Versão Final Mais Robusta)

document.addEventListener('DOMContentLoaded', () => {
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
    if (backButton) {
        const params = new URLSearchParams(window.location.search);
        const origin = params.get('origin'); // Lê o parâmetro 'origin' da URL

        if (origin === 'corpo') {
            backButton.href = 'corpo.html'; // Muda o link para o mapa corporal
            backButton.textContent = '← Voltar para o Mapa Corporal'; // Muda o texto
        } else {
            // Se não for 'corpo' ou se não houver 'origin', o padrão é voltar para o rosto
            backButton.href = 'mapa.html';
            backButton.textContent = '← Voltar para o Mapa Facial';
        }
    }

// O resto do seu código do tratamento.js continua abaixo...

    // --- LÓGICA PARA MONTAR A PÁGINA ---
    const params = new URLSearchParams(window.location.search);
    const areaKey = params.get('area');

    const mainTitle = document.getElementById('treatment-main-title');
    const container = document.getElementById('treatments-container');
    const complaintsList = document.getElementById('complaints-list');
    const cardTemplate = document.getElementById('treatment-card-template');

    // Função para enviar o interesse para o n8n
    async function sendInterestToN8N(treatmentName) {
        const webhookWishlistURL = 'https://marqai-n8n-webhook.5ummqx.easypanel.host/webhook/wishlistdemov1';
        const payload = {
            patientId: patientId,
            treatmentName: treatmentName,
            timestamp: new Date().toISOString()
        };
        try {
            const response = await fetch(webhookWishlistURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            return response.ok;
        } catch (error) {
            console.error('Falha ao enviar:', error);
            return false;
        }
    }
    
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

            // Se o tratamento já está na lista de interesses, já deixa o botão no estado "clicado"
            if (wishlist.includes(treatmentName)) {
                interestButton.innerHTML = '❤️';
                interestButton.classList.add('clicked');
                interestButton.disabled = true;
            }

            // Adiciona o evento de clique no botão
            if (patientId) {
                interestButton.addEventListener('click', async () => {
                    interestButton.textContent = '...';
                    interestButton.classList.add('sending');
                    interestButton.disabled = true;

                    const success = await sendInterestToN8N(treatmentName);

                    if (success) {
                        if (!wishlist.includes(treatmentName)) {
                            wishlist.push(treatmentName); // AGORA ISSO VAI FUNCIONAR, POIS 'wishlist' É GARANTIDAMENTE UM ARRAY
                            localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
                        }
                        interestButton.innerHTML = '❤️';
                        interestButton.classList.remove('sending');
                        interestButton.classList.add('clicked');
                    } else {
                        alert('Não foi possível registrar seu interesse. Tente novamente.');
                        interestButton.innerHTML = 'Amei ❤️';
                        interestButton.classList.remove('sending');
                        interestButton.disabled = false;
                    }
                });
            } else {
                interestButton.style.display = 'none';
            }
            
            container.appendChild(cardClone);
        });
    } else {
        mainTitle.textContent = "Área não encontrada";
    }
});