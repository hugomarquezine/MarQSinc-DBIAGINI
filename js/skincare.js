// js/skincare.js (Versão Sincronizada e Corrigida)

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('skincare-container');
    const patientId = localStorage.getItem('patientId');
    const wishlistKey = `wishlist_${patientId}`;
    let wishlist = [];

    // Bloco de segurança para carregar a lista de desejos
    const storedWishlist = localStorage.getItem(wishlistKey);
    if (storedWishlist) {
        try {
            const parsedData = JSON.parse(storedWishlist);
            if (Array.isArray(parsedData)) {
                wishlist = parsedData;
            }
        } catch (e) {
            console.error("Erro ao ler a lista de interesses do localStorage:", e);
        }
    }

    // Função para enviar o interesse para o n8n
    async function sendInterestToN8N(productName) {
        const webhookWishlistURL = 'https://marqai-n8n-webhook.5ummqx.easypanel.host/webhook/skincaredemov1';
        const payload = {
            patientId: patientId,
            treatmentName: productName, // Enviamos como 'treatmentName' para o n8n tratar tudo igual
            timestamp: new Date().toISOString()
        };

        console.log("Enviando interesse de SKINCARE para o n8n:", payload); // Log para depuração

        try {
            const response = await fetch(webhookWishlistURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            return response.ok;
        } catch (error) {
            console.error('Falha ao enviar o interesse de skincare:', error);
            return false;
        }
    }

    // Itera e cria os cards de produtos
    for (const categoryKey in dadosSkincare) {
        const category = dadosSkincare[categoryKey];
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'treatment-header';
        categoryTitle.textContent = category.titulo;
        container.appendChild(categoryTitle);

        category.produtos.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'treatment-card';

            // Preenche o card com as informações do produto
            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}" class="treatment-image">
                <div class="treatment-info">
                    <h3 class="treatment-title">${produto.nome}</h3>
                    <p class="treatment-description">${produto.descricao}</p>
                    <h4>Benefícios:</h4>
                    <ul class="treatment-benefits">
                        ${produto.beneficios.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                    <button class="interest-button">Amei ❤️</button>
                </div>
            `;
            
            const interestButton = card.querySelector('.interest-button');
            const productName = produto.nome;

            // Verifica se o item já está na wishlist para estilizar o botão
            if (wishlist.includes(productName)) {
                interestButton.innerHTML = '❤️';
                interestButton.classList.add('clicked');
                interestButton.disabled = true;
            }

            // Adiciona o evento de clique que envia os dados
            if (patientId) {
                interestButton.addEventListener('click', async () => {
                    interestButton.textContent = '...';
                    interestButton.classList.add('sending');
                    interestButton.disabled = true;

                    const success = await sendInterestToN8N(productName);

                    if (success) {
                        if (!wishlist.includes(productName)) {
                            wishlist.push(productName);
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

            container.appendChild(card);
        });
    }
});