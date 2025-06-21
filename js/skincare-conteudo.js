// js/skincare-conteudo.js

const dadosSkincare = {
    // A ESTRUTURA MUDOU PARA UMA LISTA ÚNICA DE PRODUTOS
    products: [
        {
            nome: "Sabonete Facial Suave",
            imagem: "images/produto-sabonete.jpg",
            descricao: "Formulado para limpar a pele profundamente sem agredir a barreira de proteção natural. Ideal para todos os tipos de pele, incluindo as sensíveis.",
            beneficios: ["Remove impurezas e maquiagem", "Não causa ressecamento", "Controla a oleosidade"],
            target: "rosto", // A que público se destina: 'rosto' ou 'corpo'
            area: "geral"      // Área específica: 'geral', 'olhos', 'boca', etc.
        },
        {
            nome: "Sérum de Ácido Hialurônico",
            imagem: "images/produto-serum.jpg",
            descricao: "Um concentrado de hidratação que atrai e retém a umidade na pele, preenchendo linhas finas e deixando o rosto com um aspecto mais macio e luminoso.",
            beneficios: ["Hidratação multinível", "Melhora a firmeza e elasticidade", "Textura leve e de rápida absorção"],
            target: "rosto",
            area: "geral"
        },
        {
            nome: "Creme para Área dos Olhos",
            imagem: "images/creme-olhos.jpg",
            descricao: "Tratamento concentrado para a delicada pele ao redor dos olhos, visando reduzir a aparência de olheiras, bolsas e linhas finas.",
            beneficios: ["Reduz olheiras e bolsas", "Suaviza 'pés de galinha'", "Aumenta a firmeza local"],
            target: "rosto",
            area: "olhos"
        },
        {
            nome: "Balm Hidratante Labial",
            imagem: "images/balm-labial.jpg",
            descricao: "Hidratante labial com alto poder de reparação, ideal para lábios ressecados ou sensibilizados. Cria uma barreira protetora e devolve a maciez.",
            beneficios: ["Reparação intensiva", "Proteção contra ressecamento", "Pode ser usado sob o batom"],
            target: "rosto",
            area: "boca"
        },
        {
            nome: "Protetor Solar Toque Seco FPS 50",
            imagem: "images/produto-protetor.jpg",
            descricao: "Alta proteção contra raios UVA e UVB com textura ultra-fluida e efeito mate. Controla o brilho ao longo do dia e não deixa resíduos brancos.",
            beneficios: ["Alta proteção UVA/UVB", "Toque seco e efeito mate", "Resistente à água e ao suor"],
            target: "rosto",
            area: "geral"
        },
        {
            nome: "Hidratante Corporal Firmador",
            imagem: "images/firmador-corporal.jpg",
            descricao: "Loção corporal de rápida absorção que combina hidratação profunda com ativos firmadores, melhorando a elasticidade e o tônus da pele do corpo.",
            beneficios: ["Melhora a firmeza da pele", "Hidratação por 24 horas", "Combate a flacidez"],
            target: "corpo",
            area: "geral"
        },
        {
            nome: "Creme para Pernas Cansadas",
            imagem: "images/creme-perna.jpg",
            descricao: "Formulado com extratos botânicos que ativam a circulação e proporcionam uma sensação de alívio e frescor para pernas e pés.",
            beneficios: ["Alivia a sensação de peso", "Melhora a circulação local", "Hidrata e refresca"],
            target: "corpo",
            area: "pernas"
        }
    ]
};