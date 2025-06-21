// js/conteudo.js (VERSÃO FINAL E COMPLETA)

const dadosClinica = {
    // --- PONTOS DO MAPA FACIAL ---
    "couro-cabeludo": {
        titulo: "Tratamentos para Couro Cabeludo",
        queixas: ["Queda de cabelo", "Rarefação", "Coceira", "Oleosidade"],
        tratamentos: [
            { nome: "MMP (Microinfusão de medicamentos)", imagem: "images/mmp-couro.jpg", descricao: "Técnica que insere medicamentos diretamente no couro cabeludo para tratar queda e estimular o crescimento.", beneficios: ["Ação direta no folículo", "Resultados mais rápidos", "Procedimento seguro"] },
            { nome: "Drug delivery capilar", imagem: "images/drug-capilar.jpg", descricao: "Uso de lasers ou microagulhamento para criar microcanais na pele e facilitar a entrega de ativos (drug delivery).", beneficios: ["Potencializa a ação de tônicos", "Estimula a circulação local", "Melhora a saúde do couro cabeludo"] },
            { nome: "LEDterapia", imagem: "images/led-capilar.jpg", descricao: "Terapia com luz de LED que atua nas células, reduzindo a inflamação e estimulando o crescimento capilar.", beneficios: ["Não invasivo e indolor", "Reduz a queda", "Pode ser combinado com outros tratamentos"] }
        ]
    },

    olhos: {
        titulo: "Tratamentos para Região dos Olhos",
        queixas: ["Olheiras", "Flacidez", "Linhas finas (pés de galinha)", "Bolsas"],
        tratamentos: [
            { nome: "Ultraformer MPT", 
                imagem: "images/ultraformer-olhos.jpg", 
                descricao: "Ultrassom microfocado que promove um efeito lifting na área das pálpebras e sobrancelhas, tratando a flacidez.", 
                beneficios: ["Lifting de sobrancelhas", "Melhora a firmeza da pele", "Estimula o colágeno"]
            },

            { nome: "Preenchimento com Ácido Hialurônico", 
                imagem: "images/preenchimento-olhos.jpg", 
                descricao: "Técnica delicada para preencher a região da olheira funda, suavizando o aspecto de cansaço.", 
                beneficios: ["Suaviza olheiras profundas", "Resultado imediato", "Devolve o volume perdido"] 
            },

            { nome: "Toxina Botulínica (Botox®)", 
                imagem: "images/botox-olhos.jpg", 
                descricao: "Relaxa a musculatura ao redor dos olhos para suavizar as linhas de expressão conhecidas como 'pés de galinha'.", 
                beneficios: ["Previne rugas futuras", "Aparência mais descansada", "Aplicação rápida"] 
            }
        ]
    },

    labios: {
        titulo: "Tratamentos para Lábios e Região Perioral",
        queixas: ["Volume reduzido", "Ressecamento", "Linhas ao redor (código de barras)"],
        tratamentos: [
            { nome: "Preenchimento Labial", 
                imagem: "images/preenchimento-labial.jpg", 
                descricao: "Uso de ácido hialurônico para dar volume, contorno e hidratação aos lábios de forma natural.", 
                beneficios: ["Volume e contorno definidos", "Hidratação profunda", "Resultados personalizados"] 
            },

            { nome: "Toxina Botulínica (Código de Barras)", 
                imagem: "images/botox-labios.jpg", 
                descricao: "Suaviza as linhas verticais acima do lábio superior, conhecidas como 'código de barras'.", 
                beneficios: ["Rejuvenesce a região perioral", "Previne o aprofundamento das linhas", "Complementa o preenchimento"] 
            }
        ]
    },

    orelhas: {
        titulo: "Tratamentos para Orelhas",
        queixas: ["Envelhecimento do lóbulo", "Flacidez", "'Rasgo' por uso de brinco"],
        tratamentos: [
            { nome: "Preenchimento do Lóbulo", 
                imagem: "images/lobulo.jpg", 
                descricao: "Com ácido hialurônico, devolve o volume e a firmeza ao lóbulo da orelha, que murcha com o tempo.", 
                beneficios: ["Lóbulo mais jovem e preenchido", "Melhora o suporte para brincos", "Procedimento rápido"] 
            }
        ]
    },

    pescoco: {
        titulo: "Tratamentos para Pescoço",
        queixas: ["Flacidez", "Rugas horizontais (linhas de colar)"],
        tratamentos: [
            { nome: "Ultraformer MPT", 
                imagem: "images/ultraformer-pescoco.jpg", 
                descricao: "Promove um lifting não cirúrgico, tratando a flacidez e melhorando o contorno do pescoço.", 
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno a longo prazo"] 
            },

            { nome: "Toxina Botulínica (Nefertiti Lift)", 
                imagem: "images/botox-pescoco.jpg", 
                descricao: "Aplicação em pontos estratégicos para relaxar a musculatura que 'puxa' o rosto para baixo, melhorando o contorno da mandíbula e do pescoço.", 
                beneficios: ["Melhora o contorno da mandíbula", "Previne a flacidez", "Efeito rejuvenescedor"] 
            }
        ]
    },

    colo: {
        titulo: "Tratamentos para Colo / Décolleté",
        queixas: ["Rugas finas ('sleep lines')", "Manchas solares", "Flacidez"],
        tratamentos: [
            { nome: "Luz Intensa Pulsada", 
                imagem: "images/luz-colo.jpg", 
                descricao: "Trata as manchas acastanhadas e avermelhadas causadas pelo sol, uniformizando o tom da pele do colo.", 
                beneficios: ["Uniformiza o tom da pele", "Melhora vasos finos", "Estimula o colágeno"] 
            },
            
            { nome: "Bioestimuladores de Colágeno", 
                imagem: "images/estimulador-colo.jpg", 
                descricao: "Estimula a produção natural de colágeno para tratar a flacidez e o aspecto 'craquelado' da pele.", 
                beneficios: ["Pele mais firme e espessa", "Reduz as rugas do sono", "Resultados duradouros"] 
            }
        ]
    },

    papada: {
        titulo: "Tratamentos para Papada",
        queixas: ["Gordura localizada", "Flacidez na região"],
        tratamentos: [
            { nome: "Esvaziadores de Gordura (Lipo Enzimática)", 
                imagem: "images/lipo-papada.jpg", 
                descricao: "Aplicação de enzimas que quebram as células de gordura localizada na região da papada.", 
                beneficios: ["Redução da gordura localizada", "Melhora do contorno facial", "Procedimento minimamente invasivo"] 
            }
        ]
    },

    // ... (outras áreas faciais como 'orelhas', 'pescoco', etc. estão aqui)

    testa: {
        titulo: "Tratamentos para a Testa",
        queixas: ["Rugas e linhas de expressão horizontais", "Pele com aspecto 'bravo' ou 'cansado'"],
        tratamentos: [
            {
                nome: "Toxina Botulínica (Botox®)",
                imagem: "images/tratamento-botox-testa.jpg",
                descricao: "A aplicação de toxina botulínica é o tratamento padrão-ouro para suavizar as rugas dinâmicas da testa, que se formam ao levantar as sobrancelhas. O resultado é uma pele mais lisa e uma aparência rejuvenescida.",
                beneficios: ["Atenua linhas de expressão", "Previne a formação de rugas permanentes", "Pode arquear levemente as sobrancelhas (efeito lifting)"]
            },
            {
                nome: "Skinbooster® para Linhas Finas",
                imagem: "images/tratamento-skinbooster.jpg",
                descricao: "Para linhas mais finas e uma melhora geral na qualidade da pele, o Skinbooster aplica ácido hialurônico para uma hidratação profunda, devolvendo o viço e a elasticidade.",
                beneficios: ["Suaviza rugas finas e estáticas", "Melhora a textura e o brilho da pele", "Hidratação profunda"]
            }
        ]
    },

    glabela: {
        titulo: "Tratamentos para Glabela (entre as sobrancelhas)",
        queixas: ["Ruga da 'bravura'", "Expressão de raiva ou preocupação constante"],
        tratamentos: [
            {
                nome: "Toxina Botulínica (Botox®)",
                imagem: "images/tratamento-botox-glabela.jpg",
                descricao: "É o tratamento mais eficaz para relaxar os músculos que formam a ruga vertical entre as sobrancelhas. Suaviza a expressão, proporcionando uma aparência mais calma e serena.",
                beneficios: ["Suaviza a 'ruga do bravo'", "Aparência mais relaxada e positiva", "Resultados em poucos dias"]
            }
        ]
    },

    bochechas: {
        titulo: "Tratamentos para Bochechas e Região Malar",
        queixas: [
            "Perda de sustentação", 
            "Rosto com aspecto 'derretido'", 
            "Sulco nasogeniano ('bigode chinês')", // <-- Queixa que você pediu
            "Falta de definição"
        ],
        tratamentos: [
            {
                nome: "Preenchimento Malar (Top Model Look)",
                imagem: "images/tratamento-malar.jpg",
                descricao: "Aplicação de ácido hialurônico na região malar (maçãs do rosto) para restaurar o volume perdido com o tempo, definir o contorno e criar um efeito lifting no rosto.",
                beneficios: ["Efeito lifting facial", "Rosto com contornos mais definidos", "Suavização do 'bigode chinês'"]
            },
            {
                nome: "Bioestimuladores de Colágeno",
                imagem: "images/tratamento-bioestimulador.jpg",
                descricao: "Substâncias como Sculptra® ou Radiesse® são aplicadas para estimular o próprio organismo a produzir mais colágeno, tratando a flacidez e melhorando a estrutura da pele a longo prazo.",
                beneficios: ["Trata a flacidez da pele", "Resultados progressivos e duradouros", "Melhora a firmeza e a sustentação"]
            }
        ]
    },

    nariz: {
    titulo: "Tratamentos para o Nariz",
    queixas: ["Poros dilatados", "Vasinhos", "Ponta caída", "Dorso irregular"],
    tratamentos: [
        {
            nome: "Rinomodelação",
            imagem: "images/tratamento-rinomodelacao.jpg",
            descricao: "Procedimento não cirúrgico que utiliza ácido hialurônico para corrigir pequenas imperfeições no nariz, como elevar a ponta ou retificar o dorso.",
            beneficios: ["Correção sem cirurgia", "Resultados imediatos", "Harmonização facial"]
        },
        {
            nome: "Laser para Poros e Vasos",
            imagem: "images/tratamento-laser-facial.jpg",
            descricao: "Uso de tecnologias a laser para tratar poros dilatados e pequenos vasos sanguíneos (telangiectasias), uniformizando a pele do nariz.",
            beneficios: ["Reduz a aparência dos poros", "Elimina pequenos vasos aparentes", "Melhora a textura da pele"]
        }
    ]
},

    queixo: {
        titulo: "Tratamentos para Queixo e Contorno Mandibular",
        queixas: ["Queixo retraído", "Falta de definição na mandíbula", "Perda do contorno facial", "Assimetrias"],
        tratamentos: [
            {
                nome: "Contorno Mandibular",
                imagem: "images/tratamento-contorno-mandibular.jpg",
                descricao: "Aplicação de preenchedores de ácido hialurônico de alta densidade para definir e marcar a linha da mandíbula, proporcionando um rosto com contorno mais forte e definido.",
                beneficios: ["Melhora a definição do terço inferior", "Rosto com aparência mais angulada e marcante", "Diminui a percepção de flacidez"]
            },
            {
                nome: "Preenchimento de Mento (Queixo)",
                imagem: "images/tratamento-mento.jpg",
                descricao: "Técnica para projetar o queixo quando ele é retraído, melhorando o perfil do paciente e a harmonia facial de forma significativa e natural.",
                beneficios: ["Melhora o perfil facial", "Proporciona harmonia entre nariz, lábios e queixo", "Alongamento sutil do rosto"]
            }
        ]
    },


    // (A seção de braços e outras começa aqui)

    // --- ZONAS DO CORPO (PARA A TELA 'CORPO') ---
    bracos: {
        titulo: "Tratamentos para Braços",
        queixas: ["Flacidez", "Gordura localizada", "Manchas", "Queratose pilar ('bolinhas')"],
        tratamentos: [
            { nome: "Ultraformer MPT", imagem: "images/ultraformer-braco.jpg", descricao: "Trata a flacidez na região do 'tchauzinho', estimulando o colágeno e firmando a pele.", beneficios: ["Reduz a flacidez", "Braços mais tonificados", "Resultados progressivos"] }
        ]
    },
    maos: {
        titulo: "Tratamentos para Mãos",
        queixas: ["Envelhecimento", "Manchas", "Ressecamento", "Perda de volume"],
        tratamentos: [
            { nome: "Preenchimento com Ácido Hialurônico", imagem: "images/preenchimento-maos.jpg", descricao: "Devolve o volume perdido no dorso das mãos, escondendo tendões e veias aparentes e rejuvenescendo a aparência.", beneficios: ["Esconde tendões e veias", "Aparência mais jovem", "Hidratação profunda"] }
        ]
    },
    abdomen: {
        titulo: "Tratamentos para Abdômen",
        queixas: ["Flacidez", "Gordura localizada", "Estrias"],
        tratamentos: [
            { nome: "Ultraformer MPT (Macro e Microfocado)", imagem: "images/ultraformer-abdomen.jpg", descricao: "Tecnologia de ultrassom que atua tanto na camada de gordura (macrofocado) quanto na pele para tratar a flacidez (microfocado).", beneficios: ["Tratamento 2 em 1: gordura e flacidez", "Melhora do contorno corporal", "Não invasivo"] }
        ]
    },

    costas: {
        titulo: "Tratamentos para as Costas",
        queixas: ["Acne nas costas ('Bocne')", "Manchas e cicatrizes de acne", "Foliculite", "Gordura localizada (flancos)"],
        tratamentos: [
            {
                nome: "Peeling Químico Corporal",
                imagem: "images/tratamento-peeling-costas.jpg",
                descricao: "Aplicação de ácidos específicos para a pele do corpo, promovendo a renovação celular, clareando manchas de acne e melhorando a textura geral das costas.",
                beneficios: ["Reduz a acne e cravos", "Clareia manchas pós-inflamatórias", "Pele mais lisa e uniforme"],
                skincareRecomendado: ["Hidratante Corporal Firmador", "Protetor Solar Toque Seco FPS 50"]

            },
            {
                nome: "Laser Fracionado para Cicatrizes",
                imagem: "images/tratamento-laser-costas.jpg",
                descricao: "Tecnologia a laser que atua profundamente na pele para tratar cicatrizes de acne, melhorar a textura e estimular a produção de colágeno, resultando em uma pele renovada.",
                beneficios: ["Suaviza cicatrizes", "Melhora a textura irregular", "Estimula o colágeno para uma pele mais firme"]
            }
        ]
    },
    
    gluteos: {
        titulo: "Tratamentos para Glúteos",
        queixas: ["Celulite", "Flacidez", "Estrias", "Falta de projeção ('bumbum achatado')"],
        tratamentos: [
            { nome: "Bioestimuladores para Volume e Firmeza", imagem: "images/estimulador-gluteos.jpg", descricao: "Aplicação de Sculptra® ou Radiesse® para estimular o colágeno, melhorar a celulite e a firmeza, e promover um leve efeito de volume.", beneficios: ["Melhora da celulite e flacidez", "Efeito 'lifting'", "Resultados naturais"] }
        ]
    },
    
    pernas: {
        titulo: "Tratamentos para Pernas, Coxas e Joelhos",
        queixas: ["Flacidez", "Celulite", "Gordura localizada", "Estrias", "Vasinhos"],
        tratamentos: [
            {
                nome: "Ultraformer MPT",
                imagem: "images/ultraformer-pernas.jpg",
                descricao: "Excelente para tratar a flacidez na parte interna das coxas e na região acima dos joelhos, estimulando o colágeno e firmando a pele.",
                beneficios: ["Firmeza para a parte interna da coxa", "Trata a flacidez acima dos joelhos", "Resultados visíveis"]
            },
            {
                nome: "Bioestimuladores de Colágeno",
                imagem: "images/bioestimulador-pernas.jpg",
                descricao: "Estimula a produção natural de colágeno, melhorando a qualidade da pele, a flacidez e a aparência da celulite nas coxas e joelhos.",
                beneficios: ["Melhora da celulite", "Pele mais firme e espessa", "Resultados duradouros"]
            },
            {
                nome: "Laser Vascular",
                imagem: "images/laser-vascular.jpg",
                descricao: "Trata os pequenos vasos vermelhos (telangiectasias) que aparecem comumente nas pernas e coxas.",
                beneficios: ["Elimina os vasinhos", "Pele com tom mais uniforme", "Procedimento rápido"]
            }
        ]
    },

    pes: {
    titulo: "Tratamentos para os Pés",
    queixas: ["Ressecamento", "Fissuras", "Pele grossa (hiperqueratose)"],
    tratamentos: [
        {
            nome: "Peeling Químico",
            imagem: "images/peeling-pes.jpg",
            descricao: "Aplicação de ácidos para promover uma esfoliação profunda, removendo a camada de células mortas e pele grossa, e estimulando a renovação celular.",
            beneficios: ["Pés mais macios e lisos", "Melhora de calosidades", "Renovação da pele"]
        },
        {
            nome: "Hidratação Injetável (Skinbooster)",
            imagem: "images/skinbooster-pes.jpg",
            descricao: "Para casos de ressecamento extremo, o Skinbooster injeta ácido hialurônico na pele dos pés para uma hidratação profunda e duradoura de dentro para fora.",
            beneficios: ["Combate o ressecamento severo", "Previne fissuras e rachaduras", "Devolve o viço à pele"]
        }
    ]
    }

};