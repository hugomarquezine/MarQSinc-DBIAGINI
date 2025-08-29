// js/cardapio.js (VERSÃO FINAL COM BARRA DE PEDIDO FIXA E FILTRO "TODOS")

document.addEventListener('DOMContentLoaded', () => {
    // --- REFERÊNCIAS DO DOM ---
    const cardapioContainer = document.getElementById('cardapio-container');
    const filtrosContainer = document.getElementById('cardapio-filtros');
    const pedidoResumoBar = document.getElementById('pedido-resumo-bar');
    const resumoTexto = document.getElementById('resumo-texto');
    const visualizarPedidoBtn = document.getElementById('visualizar-pedido-btn');
    const enviarPedidoResumoBtn = document.getElementById('enviar-pedido-resumo-btn');
    const pedidoDetalheModal = document.getElementById('pedido-detalhe-modal');
    const pedidoDetalheLista = document.getElementById('pedido-detalhe-lista');
    const fecharModalPedidoBtn = document.getElementById('fechar-modal-pedido-btn');

    // --- ESTADO DA APLICAÇÃO ---
    const patientId = localStorage.getItem('patientId');
    let pedidoAtual = [];
    let categoriaAtiva = dadosCardapio.categorias[0]?.id;
    const webhookURL = 'https://marqai-n8n-webhook.5ummqx.easypanel.host/webhook/pedidocardapio';

    // --- FUNÇÕES DE RENDERIZAÇÃO ---
    function renderFiltros() {
        if (!filtrosContainer) return;
        filtrosContainer.innerHTML = '';
        dadosCardapio.categorias.forEach(categoria => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.textContent = categoria.nome;
            button.dataset.categoriaId = categoria.id;
            if (categoria.id === categoriaAtiva) button.classList.add('active');
            button.addEventListener('click', () => {
                categoriaAtiva = categoria.id;
                renderFiltros();
                renderCardapio();
            });
            filtrosContainer.appendChild(button);
        });
    }

    function renderCardapio() {
        if (!cardapioContainer) return;
        cardapioContainer.innerHTML = '';

        // <<< AQUI ESTÁ A LÓGICA DO FILTRO "TODOS" >>>
        const itensFiltrados = categoriaAtiva === 'todos'
            ? dadosCardapio.itens
            : dadosCardapio.itens.filter(item => item.categoriaId === categoriaAtiva);

        itensFiltrados.forEach(item => {
            const card = document.createElement('div');
            card.className = 'cardapio-card';
            card.dataset.itemId = item.id;
            let optionsHTML = '';
            if (item.opcoes && item.opcoes.length > 0) {
                item.opcoes.forEach(opcao => {
                    optionsHTML += `<div class="cardapio-options-group" data-tipo="${opcao.tipo}"><label class="option-label">${opcao.label}</label><div class="option-choices">`;
                    opcao.valores.forEach(valor => {
                        optionsHTML += `<button class="option-choice-btn" data-value="${valor}">${valor}</button>`;
                    });
                    optionsHTML += `</div></div>`;
                });
            }
            card.innerHTML = `<div class="cardapio-image-container"><img src="${item.imagem}" alt="${item.nome}" class="cardapio-image"></div><div class="cardapio-info"><h3 class="cardapio-title">${item.nome}</h3><p class="cardapio-description">${item.descricao}</p><div class="cardapio-options-container">${optionsHTML}</div><div class="card-actions-container"><div class="quantity-counter hidden"><button class="quantity-btn decrease">-</button><span class="quantity-value">1</span><button class="quantity-btn increase">+</button></div><button class="add-to-order-button">ADICIONAR</button></div></div>`;
            cardapioContainer.appendChild(card);
        });
        setupCardEventListeners();
    }

    function setupCardEventListeners() {
        document.querySelectorAll('.option-choice-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const parentGroup = btn.closest('.option-choices');
                parentGroup.querySelectorAll('.option-choice-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        document.querySelectorAll('.add-to-order-button').forEach(btnAdd => {
            btnAdd.addEventListener('click', (e) => {
                const card = e.currentTarget.closest('.cardapio-card');
                const itemData = dadosCardapio.itens.find(i => i.id === card.dataset.itemId);
                adicionarOuAtualizarItem(card, itemData, 1);
            });
        });
        document.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.currentTarget.closest('.cardapio-card');
                const itemData = dadosCardapio.itens.find(i => i.id === card.dataset.itemId);
                const change = e.currentTarget.classList.contains('increase') ? 1 : -1;
                adicionarOuAtualizarItem(card, itemData, change);
            });
        });
    }

    function adicionarOuAtualizarItem(cardElement, itemData, quantityChange) {
        const selection = { itemName: itemData.nome, options: {} };
        let allOptionsSelected = true;
        let optionsIdentifier = '';
        if (itemData.opcoes && itemData.opcoes.length > 0) {
            itemData.opcoes.forEach(opcao => {
                const selectedButton = cardElement.querySelector(`.cardapio-options-group[data-tipo="${opcao.tipo}"] .option-choice-btn.active`);
                if (selectedButton) {
                    const value = selectedButton.dataset.value;
                    selection.options[opcao.label] = value;
                    optionsIdentifier += `_${value}`;
                } else {
                    allOptionsSelected = false;
                }
            });
        }
        if (!allOptionsSelected) {
            alert('Por favor, selecione uma opção para cada item.');
            return;
        }
        const uniqueItemId = itemData.id + optionsIdentifier;
        const itemExistente = pedidoAtual.find(item => item.uniqueId === uniqueItemId);
        if (itemExistente) {
            itemExistente.quantity += quantityChange;
        } else if (quantityChange > 0) {
            pedidoAtual.push({ ...selection, uniqueId: uniqueItemId, quantity: 1 });
        }
        const itemFinal = pedidoAtual.find(item => item.uniqueId === uniqueItemId);
        if (itemFinal && itemFinal.quantity <= 0) {
            pedidoAtual = pedidoAtual.filter(item => item.uniqueId !== uniqueItemId);
        }
        atualizarUIdoCard(cardElement, itemFinal);
        renderPedido();
    }

    function atualizarUIdoCard(cardElement, itemNoPedido) {
        const counter = cardElement.querySelector('.quantity-counter');
        const addButton = cardElement.querySelector('.add-to-order-button');
        if (itemNoPedido && itemNoPedido.quantity > 0) {
            counter.querySelector('.quantity-value').textContent = itemNoPedido.quantity;
            counter.classList.remove('hidden');
            addButton.classList.add('hidden');
        } else {
            counter.classList.add('hidden');
            addButton.classList.remove('hidden');
        }
    }
    
    function renderPedido() {
        if (pedidoAtual.length === 0) {
            pedidoResumoBar.classList.add('hidden');
            return;
        }
        pedidoResumoBar.classList.remove('hidden');
        const totalItens = pedidoAtual.reduce((total, item) => total + item.quantity, 0);
        resumoTexto.textContent = `${totalItens} ${totalItens > 1 ? 'itens no pedido' : 'item no pedido'}`;
        pedidoDetalheLista.innerHTML = '';
        pedidoAtual.forEach((item) => {
            const li = document.createElement('li');
            li.className = 'pedido-item';
            let optionsText = Object.values(item.options).join(' / ');
            li.innerHTML = `
                <div class="pedido-item-info">
                    <span class="pedido-item-name">${item.quantity}x ${item.itemName}</span>
                    <span class="pedido-item-options">${optionsText}</span>
                </div>
                <button class="remover-item-btn" data-unique-id="${item.uniqueId}">&times;</button>
            `;
            li.querySelector('.remover-item-btn').addEventListener('click', (e) => {
                removerItemDoPedido(e.currentTarget.dataset.uniqueId);
            });
            pedidoDetalheLista.appendChild(li);
        });
    }

    function removerItemDoPedido(uniqueId) {
        pedidoAtual = pedidoAtual.filter(item => item.uniqueId !== uniqueId);
        const cardElement = document.querySelector(`.cardapio-card[data-item-id="${uniqueId.split('_')[0]}"]`);
        if (cardElement) atualizarUIdoCard(cardElement, null);
        renderPedido();
    }

    async function enviarPedidoFinal() {
        if (pedidoAtual.length === 0) return;
        enviarPedidoResumoBtn.disabled = true;
        enviarPedidoResumoBtn.textContent = 'Enviando...';
        const pedidoLimpo = pedidoAtual.map(({ uniqueId, ...resto }) => resto);
        const payload = {
            patientId: patientId || 'Não identificado',
            pedidoCompleto: pedidoLimpo,
            timestamp: new Date().toISOString()
        };
        try {
            const response = await fetch(webhookURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                alert('Seu pedido foi enviado com sucesso!');
                pedidoAtual = [];
                renderPedido();
                renderCardapio();
            } else { throw new Error('Falha no envio.'); }
        } catch (error) {
            alert('Não foi possível enviar seu pedido. Tente novamente.');
        } finally {
            enviarPedidoResumoBtn.disabled = false;
            enviarPedidoResumoBtn.textContent = 'Enviar Pedido';
        }
    }

    // --- EVENT LISTENERS ---
    visualizarPedidoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        pedidoDetalheModal.classList.remove('hidden');
    });

    fecharModalPedidoBtn.addEventListener('click', () => {
        pedidoDetalheModal.classList.add('hidden');
    });

    pedidoDetalheModal.addEventListener('click', (e) => {
        if (e.target === pedidoDetalheModal) {
            pedidoDetalheModal.classList.add('hidden');
        }
    });

    enviarPedidoResumoBtn.addEventListener('click', enviarPedidoFinal);

    // --- INICIALIZAÇÃO ---
    renderFiltros();
    renderCardapio();
});