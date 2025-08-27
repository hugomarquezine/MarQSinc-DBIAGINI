// js/cardapio-conteudo.js

const dadosCardapio = {
    // 1. Definimos as categorias
    categorias: [
        { id: 'bebidas', nome: 'Bebidas' },
        { id: 'snacks', nome: 'Snacks' }
        // Adicione mais categorias aqui se precisar (ex: Doces)
    ],

    // 2. Adicionamos a propriedade "categoriaId" em cada item
    itens: [
        {
            id: 'cafe-expresso',
            categoriaId: 'bebidas', // <-- Associado a 'Bebidas'
            nome: 'Café Expresso',
            descricao: 'Grãos selecionados 100% arábica, resultando em um café de aroma intenso e sabor marcante.',
            imagem: 'images/cardapio-cafe.jpg',
            opcoes: [
                { tipo: 'variedade', label: 'Escolha a variedade', valores: ['Tradicional', 'Descafeinado'] }
            ]
        },
        {
            id: 'agua-saborizada',
            categoriaId: 'bebidas', // <-- Associado a 'Bebidas'
            nome: 'Água Saborizada',
            descricao: 'Água mineral naturalmente saborizada com rodelas de limão siciliano e folhas de hortelã.',
            imagem: 'images/cardapio-agua.jpg',
            opcoes: [
                { tipo: 'temperatura', label: 'Como você prefere?', valores: ['Gelada', 'Temperatura Ambiente'] }
            ]
        },
        {
            id: 'cha-especial',
            categoriaId: 'bebidas', // <-- Associado a 'Bebidas'
            nome: 'Chá Especial',
            descricao: 'Uma infusão relaxante de camomila, erva-cidreira e um toque de maracujá.',
            imagem: 'images/cardapio-cha.jpg',
            opcoes: [
                 { tipo: 'adocante', label: 'Deseja adoçar?', valores: ['Sem Açúcar', 'Com Açúcar', 'Com Adoçante'] }
            ]
        },
        {
            id: 'mix-de-castanhas',
            categoriaId: 'snacks', // <-- Associado a 'Snacks'
            nome: 'Mix de Castanhas',
            descricao: 'Uma seleção saudável de castanhas, nozes e amêndoas, perfeitas para um lanche rápido.',
            imagem: 'images/cardapio-castanhas.jpg', // Lembre-se de adicionar a imagem
            opcoes: [
                 { tipo: 'sal', label: 'Preferência', valores: ['Com Sal', 'Sem Sal'] }
            ]
        },
        {
            id: 'cookies-artesanais',
            categoriaId: 'snacks', // <-- Associado a 'Snacks'
            nome: 'Cookies Artesanais',
            descricao: 'Cookies com gotas de chocolate belga, feitos artesanalmente na clínica.',
            imagem: 'images/cardapio-cookies.jpg', // Lembre-se de adicionar a imagem
            opcoes: [
                 { tipo: 'sabor', label: 'Sabor', valores: ['Chocolate', 'Baunilha'] }
            ]
        }
    ]
};