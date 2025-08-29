// js/cardapio-conteudo.js (VERSÃO ATUALIZADA COM O NOVO CARDÁPIO)

const dadosCardapio = {
    // 1. Definimos as novas categorias
    categorias: [
        { id: 'todos', nome: 'Todos' },
        //{ id: 'bebidas_quentes', nome: 'Bebidas Quentes' },
        { id: 'bebidas', nome: 'Bebidas' },
        { id: 'snacks', nome: 'Snacks' },
        //{ id: 'frutas', nome: 'Frutas' }
    ],

    // 2. Lista de itens atualizada e organizada
    itens: [
        // --- BEBIDAS QUENTES ---
        {
            id: 'cafe-expresso',
            categoriaId: 'bebidas',
            nome: 'Café Expresso',
            descricao: 'Café de grãos selecionados, forte e aromático.',
            imagem: 'images/cardapio-cafe.jpg',
            opcoes: [
                { tipo: 'variedade', label: 'Como você prefere?', valores: ['Com Açucar', 'Sem Açucar'] }
            ]
        },
        {
            id: 'cappuccino',
            categoriaId: 'bebidas',
            nome: 'Cappuccino',
            descricao: 'Um clássico cremoso, feito com café expresso e leite vaporizado.',
            imagem: 'images/cardapio-cappuccino.jpg', // Crie esta imagem
            opcoes: [
                { tipo: 'extra', label: 'Deseja um toque especial?', valores: ['Com Canela', 'Sem Canela'] }
            ]
        },
        {
            id: 'chocolate-quente',
            categoriaId: 'bebidas',
            nome: 'Chocolate Quente',
            descricao: 'Chocolate cremoso e aveludado, perfeito para aquecer e adoçar o dia.',
            imagem: 'images/cardapio-chocolate.jpg', // Crie esta imagem
            opcoes: [
                { tipo: 'extra', label: 'Deseja um toque especial?', valores: ['Com Canela', 'Sem Canela'] }]
        },

        // --- BEBIDAS FRIAS ---
        {
            id: 'agua-sem-gas',
            categoriaId: 'bebidas',
            nome: 'Água Sem Gás',
            descricao: 'Água mineral natural, pura e refrescante.',
            imagem: 'images/cardapio-agua.jpg',
            opcoes: [
                { tipo: 'temperatura', label: 'Como você prefere?', valores: ['Gelada', 'Natural'] }
            ]
        },
        {
            id: 'agua-com-gas',
            categoriaId: 'bebidas',
            nome: 'Água Com Gás',
            descricao: 'Água mineral gaseificada naturalmente.',
            imagem: 'images/cardapio-agua-gas.jpg', // Crie esta imagem
            opcoes: [
                { tipo: 'temperatura', label: 'Como você prefere?', valores: ['Gelada', 'Natural'] }
            ]
        },
        {
            id: 'suco-natural',
            categoriaId: 'bebidas',
            nome: 'Suco Natural',
            descricao: 'Suco de laranja feito na hora, sem conservantes.',
            imagem: 'images/cardapio-suco.jpg', // Crie esta imagem
            opcoes: [
                { tipo: 'adocante', label: 'Deseja adoçar?', valores: ['Sem Açúcar', 'Com Açúcar'] }
            ]
        },
         {
            id: 'refrigerante',
            categoriaId: 'bebidas',
            nome: 'Refrigerante',
            descricao: 'Coca-Cola em lata, 350ml.',
            imagem: 'images/cardapio-refrigerante.jpg', // Crie esta imagem
            opcoes: [
                { tipo: 'variedade', label: 'Qual você prefere?', valores: ['Tradicional', 'Zero Açúcar'] }
            ]
        },

        // --- SNACKS ---
        {
            id: 'bolo-do-dia',
            categoriaId: 'snacks',
            nome: 'Bolo',
            descricao: 'Uma fatia de bolo caseiro, consulte o sabor do dia.',
            imagem: 'images/cardapio-bolo.jpg', // Crie esta imagem
            opcoes: []
        },
        {
            id: 'mix-de-nuts',
            categoriaId: 'snacks',
            nome: 'Mix de Nuts',
            descricao: 'Uma seleção cuidadosa de amêndoas, amendoins, castanhas e uvas passas.',
            imagem: 'images/cardapio-castanhas.jpg',
            opcoes: []
        },
                {
            id: 'chocolate',
            categoriaId: 'snacks',
            nome: 'Chocolate',
            descricao: 'Chocolate em barra',
            imagem: 'images/chocolate.jpg',
            opcoes: [
                {tipo: 'variedade', label: 'Qual você prefere?', valores: ['Ao Leite', '70% Cacau']}
            ]
        },

        // --- FRUTAS ---
        {
            id: 'maca',
            categoriaId: 'snacks',
            nome: 'Maçã',
            descricao: 'Uma maçã fresca e crocante, uma opção leve e saudável.',
            imagem: 'images/cardapio-maca.jpg', // Crie esta imagem
            opcoes: []
        }
    ]
};