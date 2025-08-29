// js/procedimento-detalhe.js (VERSÃO CORRIGIDA)

document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMENTOS DO DOM ---
    const tituloEl = document.getElementById('detalhe-titulo');
    const videoContainerEl = document.getElementById('detalhe-video-container');
    const descricaoEl = document.getElementById('detalhe-descricao');
    const galeriaEl = document.getElementById('detalhe-galeria');
    const voltarBtn = document.getElementById('detalhe-voltar-btn');

    // --- LÓGICA PARA PREENCHER A PÁGINA ---
    const params = new URLSearchParams(window.location.search);
    const tratamentoId = params.get('id');

    function encontrarTratamento(id) {
        for (const areaKey in dadosClinica) {
            const area = dadosClinica[areaKey];
            if (area.tratamentos) {
                const tratamentoEncontrado = area.tratamentos.find(t => t.id === id);
                if (tratamentoEncontrado) return tratamentoEncontrado;
            }
        }
        return null;
    }

    const tratamento = encontrarTratamento(tratamentoId);

    if (tratamento && tratamento.detalhes) {
        const detalhes = tratamento.detalhes;
        
        tituloEl.textContent = tratamento.nome;
        descricaoEl.textContent = detalhes.descricaoLonga;

        if (detalhes.videoUrl) {
            try {
                const videoUrl = new URL(detalhes.videoUrl);
                videoUrl.searchParams.set('controls', '1'); 
                videoContainerEl.innerHTML = `<iframe src="${videoUrl.href}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            } catch (e) {
                videoContainerEl.style.display = 'none';
            }
        } else {
            videoContainerEl.style.display = 'none';
        }

        galeriaEl.innerHTML = '';
        detalhes.galeriaImagens.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = `Imagem do procedimento ${tratamento.nome}`;
            galeriaEl.appendChild(img);
        });
    } else {
        tituloEl.textContent = "Procedimento não encontrado";
        videoContainerEl.style.display = 'none';
        descricaoEl.parentElement.style.display = 'none';
        galeriaEl.parentElement.style.display = 'none';
    }

    // --- LÓGICA CORRIGIDA DO BOTÃO VOLTAR ---
    // Verifica se o botão realmente existe na página antes de adicionar o evento
    if (voltarBtn) {
        voltarBtn.addEventListener('click', (e) => {
            // 1. Impede a ação padrão do link (ir para o topo)
            e.preventDefault(); 
            // 2. Executa a função de voltar no histórico do navegador
            history.back();
        });
    }
});