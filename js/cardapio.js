// js/cardapio.js

document.addEventListener('DOMContentLoaded', () => {
    // --- REFERÊNCIAS DO DOM ---
    const cardapioContainer = document.getElementById('cardapio-container');
    const filtrosContainer = document.getElementById('cardapio-filtros');
    // ... (resto das referências do DOM continua igual)
    const modal = document.getElementById('optionsModal');
    const modalTitle = document.getElementById('modal-item-name');
    const modalOptions = document.getElementById('modal-options-container');
    const confirmButton = document.getElementById('confirmSelectionButton');
    const closeButton = document.getElementById('modal-close-btn');
    const pedidoContainer = document.getElementById('pedido-container');
    const pedidoLista = document.getElementById('pedido-lista');
    const enviarPedidoBtn = document.getElementById('enviar-pedido-btn');


    // --- ESTADO DA APLICAÇÃO ---
    const patientId = localStorage.getItem('patientId');
    let currentItem = null;
    let pedidoAtual = [];
    let categoriaAtiva = dadosCardapio.categorias[0]?.id; // Começa com a primeira categoria

    // --- WEBHOOK ---
    const webhookURL = 'https://marqai-n8n-webhook.5ummqx.easypanel.host/webhook/skincaredemov1';

    // --- FUNÇÃO PARA RENDERIZAR OS FILTROS DE CATEGORIA ---
    function renderFiltros() {
        if (!filtrosContainer) return;
        filtrosContainer.innerHTML = '';

        dadosCardapio.categorias.forEach(categoria => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.textContent = categoria.nome;
            button.dataset.categoriaId = categoria.id;
            
            if (categoria.id === categoriaAtiva) {
                button.classList.add('active');
            }

            button.addEventListener('click', () => {
                categoriaAtiva = categoria.id;
                renderFiltros(); // Re-renderiza para atualizar o botão ativo
                renderCardapio(); // Re-renderiza os cards com a nova categoria
            });

            filtrosContainer.appendChild(button);
        });
    }

    // --- FUNÇÃO PARA RENDERIZAR OS CARDS (AGORA FILTRADOS) ---
    function renderCardapio() {
        if (!cardapioContainer) return;
        cardapioContainer.innerHTML = '';

        const itensFiltrados = dadosCardapio.itens.filter(item => item.categoriaId === categoriaAtiva);

        itensFiltrados.forEach(item => {
            const card = document.createElement('div');
            card.className = 'cardapio-card';
            card.innerHTML = `
                <div class="cardapio-image-container"><img src="${item.imagem}" alt="${item.nome}" class="cardapio-image"></div>
                <div class="cardapio-info">
                    <h3 class="cardapio-title">${item.nome}</h3>
                    <p class="cardapio-description">${item.descricao}</p>
                    <button class="cardapio-select-button" data-item-id="${item.id}">SELECIONAR</button>
                </div>
            `;
            cardapioContainer.appendChild(card);
        });

        document.querySelectorAll('.cardapio-select-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.currentTarget.dataset.itemId;
                currentItem = dadosCardapio.itens.find(i => i.id === itemId);
                if (currentItem) showModal(currentItem);
            });
        });
    }
    
    // O restante do seu código (renderPedido, adicionarItemAoPedido, etc.) permanece exatamente o mesmo.
    // ... (COLE AQUI TODO O RESTANTE DO CÓDIGO de js/cardapio.js da etapa anterior)
    // --- FUNÇÃO PARA RENDERIZAR A LISTA DE PEDIDOS ---
    function renderPedido() {
        if (pedidoAtual.length === 0) {
            pedidoContainer.classList.add('hidden');
            return;
        }

        pedidoContainer.classList.remove('hidden');
        pedidoLista.innerHTML = '';

        pedidoAtual.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'pedido-item';
            
            let optionsText = Object.values(item.options).join(' / ');
            
            li.innerHTML = `
                <div class="pedido-item-info">
                    <span class="pedido-item-name">${item.itemName}</span>
                    <span class="pedido-item-options">${optionsText}</span>
                </div>
                <button class="remover-item-btn" data-index="${index}">&times;</button>
            `;
            pedidoLista.appendChild(li);
        });

        document.querySelectorAll('.remover-item-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index, 10);
                removerItemDoPedido(index);
            });
        });
    }

    // --- FUNÇÕES DE LÓGICA DO PEDIDO ---
    function adicionarItemAoPedido() {
        if (!currentItem) return;

        const selection = { itemName: currentItem.nome, options: {} };
        let allOptionsSelected = true;

        currentItem.opcoes.forEach(opcao => {
            const selectedRadio = modalOptions.querySelector(`input[name="${currentItem.id}-${opcao.tipo}"]:checked`);
            if (selectedRadio) {
                selection.options[opcao.label] = selectedRadio.value;
            } else {
                allOptionsSelected = false;
            }
        });

        if (!allOptionsSelected) {
            alert('Por favor, selecione uma opção para cada item.');
            return;
        }

        pedidoAtual.push(selection);
        renderPedido();
        hideModal();
    }
    
    function removerItemDoPedido(index) {
        pedidoAtual.splice(index, 1);
        renderPedido();
    }
    
    async function enviarPedidoFinal() {
        if (pedidoAtual.length === 0) {
            alert("Seu pedido está vazio.");
            return;
        }
        
        enviarPedidoBtn.disabled = true;
        enviarPedidoBtn.textContent = 'Enviando...';

        const payload = {
            patientId: patientId || 'Não identificado',
            pedidoCompleto: pedidoAtual,
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch(webhookURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert('Seu pedido foi enviado com sucesso para a recepção!');
                pedidoAtual = []; // Limpa o pedido
                renderPedido(); // Atualiza a tela, escondendo a seção
            } else {
                throw new Error('Falha na resposta do servidor.');
            }
        } catch (error) {
            console.error('Falha ao enviar pedido:', error);
            alert('Não foi possível enviar seu pedido. Por favor, tente novamente.');
        } finally {
            enviarPedidoBtn.disabled = false;
            enviarPedidoBtn.textContent = 'Enviar Pedido para a Recepção';
        }
    }

    // --- FUNÇÕES DO MODAL ---
    function showModal(item) {
        modalTitle.textContent = item.nome;
        modalOptions.innerHTML = '';

        item.opcoes.forEach(opcao => {
            const group = document.createElement('div');
            group.className = 'option-group';
            let radiosHTML = `<label class="option-label">${opcao.label}</label>`;
            opcao.valores.forEach((valor, index) => {
                radiosHTML += `
                    <div class="radio-option">
                        <input type="radio" id="${item.id}-${opcao.tipo}-${index}" name="${item.id}-${opcao.tipo}" value="${valor}" required>
                        <label for="${item.id}-${opcao.tipo}-${index}">${valor}</label>
                    </div>
                `;
            });
            group.innerHTML = radiosHTML;
            modalOptions.appendChild(group);
        });

        modal.classList.remove('hidden');
    }

    function hideModal() {
        modal.classList.add('hidden');
        currentItem = null;
    }

    // --- EVENT LISTENERS ---
    closeButton.addEventListener('click', hideModal);
    confirmButton.addEventListener('click', adicionarItemAoPedido);
    enviarPedidoBtn.addEventListener('click', enviarPedidoFinal);
    modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });


    // --- INICIALIZAÇÃO ---
    renderFiltros(); // Primeiro renderiza os botões de filtro
    renderCardapio(); // Depois renderiza os cards da categoria ativa
});