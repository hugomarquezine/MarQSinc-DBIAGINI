// js/skincare.js (Versão com Filtros)

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('skincare-container');
    const patientId = localStorage.getItem('patientId');
    const wishlistKey = `wishlist_${patientId}`;
    let wishlist = [];

    // Carrega a wishlist salva localmente
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

    // Estado inicial dos filtros
    const activeFilters = {
        target: 'rosto',
        area: 'geral'
    };

    // --- FUNÇÕES ---

    // Função para enviar interesse para o n8n (sem alterações)
    async function sendInterestToN8N(productName) {
        const webhookWishlistURL = 'https://marqai-n8n-webhook.5ummqx.easypanel.host/webhook/skincaredemov1';
        const payload = {
            patientId: patientId,
            treatmentName: productName,
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
            console.error('Falha ao enviar o interesse de skincare:', error);
            return false;
        }
    }

    // Função para renderizar os produtos na tela
    function renderProducts() {
        // 1. Limpa o container
        container.innerHTML = '';

        // 2. Filtra os produtos com base nos filtros ativos
        const filteredProducts = dadosSkincare.products.filter(produto => {
            const targetMatch = produto.target === activeFilters.target;
            const areaMatch = activeFilters.area === 'geral' || produto.area === activeFilters.area;
            return targetMatch && areaMatch;
        });
        
        // Se não houver produtos, mostra uma mensagem
        if (filteredProducts.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #888;">Nenhum produto encontrado para esta seleção.</p>';
            return;
        }

        // 3. Cria e adiciona os cards dos produtos filtrados
        filteredProducts.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'treatment-card';

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

            if (wishlist.includes(productName)) {
                interestButton.innerHTML = '❤️';
                interestButton.classList.add('clicked');
                interestButton.disabled = true;
            }

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

    // --- EVENT LISTENERS PARA OS FILTROS ---
    const allFilterBtns = document.querySelectorAll('.filter-btn');
    const areaFilterRosto = document.getElementById('area-filter-rosto');
    const areaFilterCorpo = document.getElementById('area-filter-corpo');

    allFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const group = btn.dataset.filterGroup; // 'target' ou 'area'
            const value = btn.dataset.filterValue; // 'rosto', 'corpo', 'geral', 'olhos'...

            // Atualiza o objeto de filtros ativos
            activeFilters[group] = value;
            
            // Lógica para alternar os sub-filtros de área
            if (group === 'target') {
                if (value === 'rosto') {
                    areaFilterRosto.classList.remove('hidden');
                    areaFilterCorpo.classList.add('hidden');
                } else {
                    areaFilterRosto.classList.add('hidden');
                    areaFilterCorpo.classList.remove('hidden');
                }
                // Reseta o filtro de área para 'geral' ao trocar de alvo
                activeFilters.area = 'geral';
            }

            // Atualiza a classe 'active' em TODOS os botões
            allFilterBtns.forEach(b => {
                // Remove 'active' se o botão não corresponder aos filtros ativos
                if (b.dataset.filterGroup === 'target' && b.dataset.filterValue !== activeFilters.target) {
                    b.classList.remove('active');
                }
                if (b.dataset.filterGroup === 'area' && b.dataset.filterValue !== activeFilters.area) {
                    b.classList.remove('active');
                }
                // Adiciona 'active' se o botão corresponder
                if ((b.dataset.filterGroup === 'target' && b.dataset.filterValue === activeFilters.target) || 
                    (b.dataset.filterGroup === 'area' && b.dataset.filterValue === activeFilters.area)) {
                    b.classList.add('active');
                }
            });

            // Re-renderiza os produtos com os novos filtros
            renderProducts();
        });
    });

    // --- INICIALIZAÇÃO ---
    // Renderiza os produtos com o filtro inicial ('rosto', 'geral')
    renderProducts();
});