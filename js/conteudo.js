// js/conteudo.js (VERSÃO ATUALIZADA COM IDs E DETALHES PARA O 'SAIBA MAIS')

const dadosClinica = {
    // --- PONTOS DO MAPA FACIAL ---
    "couro-cabeludo": {
        titulo: "Tratamentos para Couro Cabeludo",
        queixas: ["Queda de cabelo", "Cabelo afinado", "Caspa"],
        tratamentos: [
            { 
                id: "mmp-microagulhamento-capilar",
                nome: "MMP - microagulhamento capilar", 
                imagem: "images/procedimentos/mmp-microagulhamento.webp", 
                descricao: "Técnica que cria microcanais no couro cabeludo para estimular a circulação e o crescimento capilar.", 
                beneficios: ["Estimula a circulação", "Melhora a absorção de medicamentos", "Promove o crescimento"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O MMP - microagulhamento capilar cria microcanais que estimulam a circulação sanguínea, melhoram a absorção de medicamentos e promovem o crescimento capilar de forma natural.",
                    galeriaImagens: ["images/galeria/microagulhamento-1.webp", "images/galeria/microagulhamento-2.webp"]
                }
            },
            { 
                id: "exossomos-capilar",
                nome: "Exossomos capilar", 
                imagem: "images/procedimentos/exossomos.webp", 
                descricao: "Tratamento com exossomos para regeneração celular e melhora da saúde do couro cabeludo.", 
                beneficios: ["Regeneração celular", "Melhora a saúde do couro cabeludo", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os exossomos capilares são tratamentos inovadores que promovem a regeneração celular e melhoram a saúde do couro cabeludo, proporcionando resultados naturais e duradouros.",
                    galeriaImagens: ["images/galeria/exossomos-1.webp", "images/galeria/exossomos-2.webp"]
                }
            },
            { 
                id: "mesoterapia-capilar",
                nome: "MESOTERAPIA", 
                imagem: "images/procedimentos/mesoterapia.webp", 
                descricao: "Técnica que insere medicamentos diretamente no couro cabeludo para tratar queda e estimular o crescimento.", 
                beneficios: ["Ação direta no folículo", "Resultados mais rápidos", "Procedimento seguro"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A MESOTERAPIA capilar é uma técnica que insere medicamentos diretamente no couro cabeludo para tratar queda e estimular o crescimento, proporcionando resultados mais rápidos e eficazes.",
                    galeriaImagens: ["images/galeria/mesoterapia-1.webp", "images/galeria/mesoterapia-2.webp"]
                }
            },
            {
                id: "prp-capilar",
                nome: "PRP - Plasma Rico em Plaquetas",
                imagem: "images/procedimentos/prp.webp",
                descricao: "Tratamento com plasma rico em plaquetas para estimular o crescimento capilar e melhorar a saúde do couro cabeludo.",
                beneficios: ["Estimula o crescimento", "Melhora a saúde do couro cabeludo", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O PRP - Plasma Rico em Plaquetas utiliza componentes do próprio sangue para estimular o crescimento capilar e melhorar a saúde do couro cabeludo, proporcionando resultados naturais e duradouros.",
                    galeriaImagens: ["images/galeria/prp-1.webp", "images/galeria/prp-2.webp"]
                }
            },
            {
                id: "mesojectgun-capilar",
                nome: "Mesojectgun capilar",
                imagem: "images/procedimentos/mesojectgun.webp",
                descricao: "Aplicação de ativos via mesojectgun diretamente no couro cabeludo para tratar queda e estimular o crescimento.",
                beneficios: ["Aplicação precisa", "Melhora absorção", "Resultados mais rápidos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O mesojectgun capilar permite a aplicação precisa de ativos diretamente no couro cabeludo, melhorando a absorção e proporcionando resultados mais rápidos no tratamento da queda e estimulação do crescimento.",
                    galeriaImagens: ["images/galeria/mesojectgun-1.webp", "images/galeria/mesojectgun-2.webp"]
                }
            },
            {
                id: "led-vermelha-capilar",
                nome: "Luz de LED Vermelha",
                imagem: "images/procedimentos/led-vermelha.webp",
                descricao: "Tratamento com luz LED vermelha para estimular o crescimento capilar e melhorar a saúde do couro cabeludo.",
                beneficios: ["Estimula o crescimento", "Melhora a circulação", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A luz de LED vermelha estimula o crescimento capilar e melhora a circulação no couro cabeludo, proporcionando resultados progressivos e naturais.",
                    galeriaImagens: ["images/galeria/led-1.webp", "images/galeria/led-2.webp"]
                }
            }
        ]
    },

    olhos: {
        titulo: "Tratamentos para Região dos Olhos",
        queixas: ["Pálpebras caindo", "Flacidez", "Rugas", "Ressecamento"],
        tratamentos: [
            { 
                id: "botox-olhos",
                nome: "Toxina Botulínica (Botox®)", 
                imagem: "images/procedimentos/botox.webp", 
                descricao: "Relaxa a musculatura ao redor dos olhos para suavizar as linhas de expressão conhecidas como 'pés de galinha'.", 
                beneficios: ["Previne rugas futuras", "Aparência mais descansada", "Aplicação rápida"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Entenda como a toxina botulínica atua para relaxar os músculos responsáveis pelos 'pés de galinha', prevenindo a formação de rugas mais profundas e suavizando a expressão ao redor dos olhos.",
                    galeriaImagens: ["images/galeria-botox-olhos-1.webp", "images/galeria-botox-olhos-2.webp"]
                }
            },
            { 
                id: "laser-zye-olhos",
                nome: "Laser Zye", 
                imagem: "images/procedimentos/laser-zye.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno na região dos olhos.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Laser Zye na região dos olhos é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "plasma-iq-olhos",
                nome: "Plasma IQ", 
                imagem: "images/procedimentos/plasma-iq.webp", 
                descricao: "Tratamento com plasma para tratar flacidez e pálpebras caindo nas pálpebras superiores.", 
                beneficios: ["Trata flacidez", "Levanta pálpebras", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Plasma IQ é um tratamento inovador que utiliza plasma para tratar a flacidez e levantar pálpebras superiores que estão caindo, proporcionando resultados duradouros e naturais.",
                    galeriaImagens: ["images/galeria/plasma-iq-1.webp", "images/galeria/plasma-iq-2.webp"]
                }
            },
            { 
                id: "coolfase-olhos",
                nome: "CoolFase", 
                imagem: "images/procedimentos/coolfase.webp", 
                descricao: "Tratamento de resfriamento para pálpebras inferiores e pés de galinha, tratando ressecamento e flacidez.", 
                beneficios: ["Trata ressecamento", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolFase é um tratamento de resfriamento que atua nas pálpebras inferiores e pés de galinha, tratando o ressecamento e melhorando a flacidez com resultados progressivos.",
                    galeriaImagens: ["images/galeria/coolfase-1.webp", "images/galeria/coolfase-2.webp"]
                }
            },
            { 
                id: "radiofrequencia-olhos",
                nome: "Radiofrequência", 
                imagem: "images/procedimentos/radiofrequencia.webp", 
                descricao: "Tratamento com radiofrequência para pálpebras inferiores e pés de galinha, tratando flacidez e ressecamento.", 
                beneficios: ["Trata flacidez", "Melhora ressecamento", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A radiofrequência nas pálpebras inferiores e pés de galinha trata a flacidez e o ressecamento, estimulando a produção de colágeno para resultados duradouros.",
                    galeriaImagens: ["images/galeria/radiofrequencia-1.webp", "images/galeria/radiofrequencia-2.webp"]
                }
            },
            { 
                id: "fios-pdo-olhos",
                nome: "Fios de PDO", 
                imagem: "images/procedimentos/fios-pdo.webp", 
                descricao: "Fios de PDO para pálpebras inferiores e pés de galinha, promovendo lifting e estimulando o colágeno.", 
                beneficios: ["Efeito lifting", "Estimula o colágeno", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os fios de PDO são inseridos nas pálpebras inferiores e pés de galinha para promover um efeito lifting e estimular a produção de colágeno, proporcionando resultados duradouros.",
                    galeriaImagens: ["images/galeria/fios-pdo-1.webp", "images/galeria/fios-pdo-2.webp"]
                }
            },
            { 
                id: "mesojectgun-olhos",
                nome: "Mesojectgun", 
                imagem: "images/procedimentos/mesojectgun.webp", 
                descricao: "Aplicação de ativos via mesojectgun para pálpebras inferiores e pés de galinha, tratando ressecamento e flacidez.", 
                beneficios: ["Aplicação precisa", "Melhora absorção", "Trata ressecamento"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O mesojectgun permite a aplicação precisa de ativos nas pálpebras inferiores e pés de galinha, melhorando a absorção e tratando o ressecamento e flacidez.",
                    galeriaImagens: ["images/galeria/mesojectgun-1.webp", "images/galeria/mesojectgun-2.webp"]
                }
            },
            { 
                id: "liftera-olhos",
                nome: "Liftera", 
                imagem: "images/procedimentos/liftera.webp", 
                descricao: "Tratamento que promove lifting para pálpebras inferiores (bolsas) e pés de galinha (flacidez).", 
                beneficios: ["Trata bolsas", "Melhora flacidez", "Efeito lifting"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Liftera é um tratamento que promove um efeito lifting nas pálpebras inferiores para tratar bolsas e nos pés de galinha para melhorar a flacidez, proporcionando resultados visíveis.",
                    galeriaImagens: ["images/galeria/liftera-1.webp", "images/galeria/liftera-2.webp"]
                }
            },
            { 
                id: "preenchimento-facial-olhos",
                nome: "Preenchimento Facial", 
                imagem: "images/procedimentos/preenchimento.webp", 
                descricao: "Preenchimento com ácido hialurônico para pálpebras inferiores, tratando olheiras e melhorando o contorno.", 
                beneficios: ["Trata olheiras", "Melhora contorno", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento facial nas pálpebras inferiores utiliza ácido hialurônico para tratar olheiras e melhorar o contorno da região, proporcionando resultados naturais e harmoniosos.",
                    galeriaImagens: ["images/galeria/preenchimento-olhos-1.webp", "images/galeria/preenchimento-olhos-2.webp"]
                }
            }
        ]
    },

    labios: {
        titulo: "Tratamentos para Lábios e Região Perioral",
        queixas: ["Melhora do contorno", "Projeção", "Hidratação"],
        tratamentos: [
            { 
                id: "preenchimento-labial",
                nome: "Preenchimento", 
                imagem: "images/procedimentos/preenchimento.webp", 
                descricao: "Uso de ácido hialurônico para dar volume, contorno e hidratação aos lábios de forma natural.", 
                beneficios: ["Volume e contorno definidos", "Hidratação profunda", "Resultados personalizados"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Descubra as diferentes técnicas de preenchimento labial, desde a hidratação até a volumização, e como o procedimento pode realçar a beleza dos lábios de maneira natural e harmoniosa.",
                    galeriaImagens: ["images/galeria-labios-1.webp", "images/galeria-labios-2.webp"]
                }
            },
            { 
                id: "laser-zye-labios",
                nome: "Laser Zye", 
                imagem: "images/procedimentos/laser-zye.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno nos lábios.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Laser Zye nos lábios é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "liftera-labios",
                nome: "Liftera", 
                imagem: "images/procedimentos/liftera.webp", 
                descricao: "Tratamento que promove lifting e melhora o contorno dos lábios.", 
                beneficios: ["Efeito lifting", "Melhora o contorno", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Liftera é um tratamento que promove um efeito lifting e melhora o contorno dos lábios, estimulando a produção de colágeno para resultados duradouros.",
                    galeriaImagens: ["images/galeria/liftera-1.webp", "images/galeria/liftera-2.webp"]
                }
            },
            { 
                id: "coolfase-labios",
                nome: "CoolFase", 
                imagem: "images/procedimentos/coolfase.webp", 
                descricao: "Tratamento de resfriamento que melhora a qualidade da pele e hidratação dos lábios.", 
                beneficios: ["Melhora a hidratação", "Melhora a qualidade da pele", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolFase é um tratamento de resfriamento que melhora a qualidade da pele e hidratação dos lábios, proporcionando resultados progressivos e naturais.",
                    galeriaImagens: ["images/galeria/coolfase-1.webp", "images/galeria/coolfase-2.webp"]
                }
            }
        ]
    },
    "bigode-chines": {
        titulo: "Tratamentos para Bigode Chinês e Código de Barras",
        queixas: ["Sulcos nasogenianos", "Linhas do sorriso", "Linhas verticais ao redor dos lábios", "Rugas periorais", "Flacidez na região"],
        tratamentos: [
            { 
                id: "preenchimento-facial-bigode-chines",
                nome: "Preenchimento Facial", 
                imagem: "images/procedimentos/preenchimento.webp", 
                descricao: "Preenchimento com ácido hialurônico para suavizar os sulcos nasogenianos e linhas ao redor dos lábios.", 
                beneficios: ["Suaviza sulcos", "Melhora o contorno facial", "Resultado natural"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento com ácido hialurônico é o tratamento mais eficaz para suavizar os sulcos nasogenianos (bigode chinês) e as linhas verticais ao redor dos lábios (código de barras), proporcionando um resultado natural e harmonioso.",
                    galeriaImagens: ["images/galeria/preenchimento-1.webp", "images/galeria/preenchimento-2.webp"]
                }
            },
            { 
                id: "botox-bigode-chines",
                nome: "Botox", 
                imagem: "images/procedimentos/botox.webp", 
                descricao: "Toxina botulínica para relaxar os músculos ao redor dos lábios e prevenir o aprofundamento das linhas.", 
                beneficios: ["Suaviza linhas de expressão", "Previne rugas", "Resultado natural"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Botox é especialmente eficaz para tratar o código de barras, relaxando o músculo orbicular da boca e prevenindo que os sulcos do bigode chinês se aprofundem com as expressões faciais.",
                    galeriaImagens: ["images/galeria/botox-1.webp", "images/galeria/botox-2.webp"]
                }
            },
            { 
                id: "liftera-bigode-chines",
                nome: "Liftera", 
                imagem: "images/procedimentos/liftera.webp", 
                descricao: "Tratamento de ultrassom microfocado que trata a flacidez e melhora a sustentação da região.", 
                beneficios: ["Trata flacidez", "Melhora sustentação", "Lifting natural"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Liftera atua na flacidez que contribui para a formação dos sulcos nasogenianos, promovendo um lifting natural da região e melhorando a sustentação dos tecidos ao redor dos lábios.",
                    galeriaImagens: ["images/galeria/liftera-1.webp", "images/galeria/liftera-2.webp"]
                }
            }
        ]
    },
    "embaixo-olho": {
        titulo: "Tratamentos para Região Inferior dos Olhos",
        queixas: ["Flacidez", "Ressecamento", "Bolsas", "Olheiras"],
        tratamentos: [
            { 
                id: "coolfase-embaixo-olho",
                nome: "CoolFase", 
                imagem: "images/procedimentos/coolfase.webp", 
                descricao: "Tratamento de resfriamento que melhora a qualidade da pele e trata flacidez e ressecamento embaixo dos olhos.", 
                beneficios: ["Trata ressecamento", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolFase é um tratamento de resfriamento que melhora a qualidade da pele e trata a flacidez e ressecamento embaixo dos olhos, proporcionando resultados progressivos e naturais.",
                    galeriaImagens: ["images/galeria/coolfase-1.webp", "images/galeria/coolfase-2.webp"]
                }
            },
            { 
                id: "radiofrequencia-embaixo-olho",
                nome: "Radiofrequência", 
                imagem: "images/procedimentos/radiofrequencia.webp", 
                descricao: "Tratamento com radiofrequência que estimula o colágeno e melhora a qualidade da pele embaixo dos olhos.", 
                beneficios: ["Estimula o colágeno", "Melhora a textura", "Trata a flacidez"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A radiofrequência embaixo dos olhos estimula a produção de colágeno e melhora a qualidade da pele, tratando a flacidez e proporcionando resultados progressivos.",
                    galeriaImagens: ["images/galeria/radiofrequencia-1.webp", "images/galeria/radiofrequencia-2.webp"]
                }
            },
            { 
                id: "fios-pdo-embaixo-olho",
                nome: "Fios de PDO", 
                imagem: "images/procedimentos/fios-pdo.webp", 
                descricao: "Fios de PDO que promovem lifting e estimulam a produção de colágeno embaixo dos olhos.", 
                beneficios: ["Efeito lifting", "Estimula o colágeno", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os fios de PDO são inseridos embaixo dos olhos para promover um efeito lifting e estimular a produção de colágeno, proporcionando resultados duradouros e naturais.",
                    galeriaImagens: ["images/galeria/fios-pdo-1.webp", "images/galeria/fios-pdo-2.webp"]
                }
            },
            { 
                id: "mesojectgun-embaixo-olho",
                nome: "Mesojectgun", 
                imagem: "images/procedimentos/mesojectgun.webp", 
                descricao: "Aplicação de ativos via mesojectgun para tratar ressecamento e flacidez embaixo dos olhos.", 
                beneficios: ["Aplicação precisa", "Melhora absorção", "Trata ressecamento"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O mesojectgun permite a aplicação precisa de ativos embaixo dos olhos, melhorando a absorção e tratando o ressecamento e flacidez.",
                    galeriaImagens: ["images/galeria/mesojectgun-1.webp", "images/galeria/mesojectgun-2.webp"]
                }
            },
            { 
                id: "laser-zye-embaixo-olho",
                nome: "Laser Zye", 
                imagem: "images/procedimentos/laser-zye.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno embaixo dos olhos.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Laser Zye embaixo dos olhos é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "liftera-embaixo-olho",
                nome: "Liftera", 
                imagem: "images/procedimentos/liftera.webp", 
                descricao: "Tratamento que promove lifting e melhora a flacidez embaixo dos olhos, especialmente para tratar bolsas.", 
                beneficios: ["Trata bolsas", "Melhora flacidez", "Efeito lifting"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Liftera é um tratamento que promove um efeito lifting embaixo dos olhos, tratando bolsas e melhorando a flacidez, proporcionando resultados visíveis.",
                    galeriaImagens: ["images/galeria/liftera-1.webp", "images/galeria/liftera-2.webp"]
                }
            },
            { 
                id: "preenchimento-facial-embaixo-olho",
                nome: "Preenchimento Facial", 
                imagem: "images/procedimentos/preenchimento.webp", 
                descricao: "Preenchimento com ácido hialurônico para tratar olheiras e melhorar o contorno da região embaixo dos olhos.", 
                beneficios: ["Trata olheiras", "Melhora o contorno", "Resultado natural"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento facial embaixo dos olhos utiliza ácido hialurônico para tratar olheiras e melhorar o contorno da região, proporcionando um resultado natural e harmonioso.",
                    galeriaImagens: ["images/galeria-preench-olhos-1.webp", "images/galeria-preench-olhos-2.webp"]
                }
            }
        ]
    },

    orelhas: {
        titulo: "Tratamentos para Orelhas",
        queixas: ["Perda de volume", "Rasgo ou deformidade"],
        tratamentos: [
            { 
                id: "preenchimento-orelhas",
                nome: "Preenchimento", 
                imagem: "images/procedimentos/preenchimento.webp", 
                descricao: "Com ácido hialurônico, devolve o volume e a firmeza ao lóbulo da orelha, que murcha com o tempo.", 
                beneficios: ["Lóbulo mais jovem e preenchido", "Melhora o suporte para brincos", "Procedimento rápido"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento do lóbulo é um procedimento simples e rápido que restaura o volume e a firmeza da orelha, melhorando a sustentação de brincos e rejuvenescendo a aparência.",
                    galeriaImagens: ["images/galeria-preench-olhos-1.webp", "images/galeria-preench-olhos-2.webp"]
                }
            },
            { 
                id: "lobuloplastia-orelhas",
                nome: "Lobuloplastia", 
                imagem: "images/procedimentos/lobuloplastia.webp", 
                descricao: "Procedimento para correção de furos alargados ou rasgados nas orelhas.", 
                beneficios: ["Corrige furos alargados", "Melhora a aparência", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A lobuloplastia é um procedimento que corrige furos rasgados ou alargados nas orelhas, restaurando a aparência natural e permitindo o uso de brincos novamente.",
                    galeriaImagens: ["images/galeria/cirurgia-1.webp", "images/galeria/cirurgia-2.webp"]
                }
            }
        ]
    },

    pescoco: {
        titulo: "Tratamentos para Pescoço",
        queixas: ["Flacidez e contorno", "Qualidade da pele", "Manchas"],
        tratamentos: [
            { 
                id: "laser-zye-pescoco",
                nome: "Laser Zye", 
                imagem: "images/procedimentos/laser-zye.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno no pescoço.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Laser Zye no pescoço é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            {
                id: "botox-pescoco",
                nome: "Toxina Botulínica (Botox®)",
                imagem: "images/procedimentos/botox.webp",
                descricao: "Aplicação de toxina botulínica para relaxar a musculatura e melhorar o contorno do pescoço.",
                beneficios: ["Melhora o contorno", "Relaxa musculatura", "Aplicação rápida"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A toxina botulínica no pescoço pode ser utilizada para relaxar a musculatura e melhorar o contorno, proporcionando uma aparência mais harmoniosa.",
                    galeriaImagens: ["images/galeria-botox-olhos-1.webp", "images/galeria-botox-olhos-2.webp"]
                }
            },
            {
                id: "liftera-pescoco",
                nome: "Liftera",
                imagem: "images/procedimentos/liftera.webp",
                descricao: "Tratamento que promove lifting e melhora a flacidez e contorno do pescoço.",
                beneficios: ["Efeito lifting", "Melhora a flacidez", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Liftera é um tratamento que promove um efeito lifting e melhora a flacidez e contorno do pescoço, estimulando a produção de colágeno para resultados duradouros.",
                    galeriaImagens: ["images/galeria/liftera-1.webp", "images/galeria/liftera-2.webp"]
                }
            },
            {
                id: "seffiller-pescoco",
                nome: "SEFFILLER",
                imagem: "images/procedimentos/seffiller.webp",
                descricao: "Tratamento que combina preenchimento e estímulo de colágeno para o pescoço.",
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O SEFFILLER oferece um preenchimento imediato e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para o pescoço.",
                    galeriaImagens: ["images/galeria/seffiller-1.webp", "images/galeria/seffiller-2.webp"]
                }
            },
            {
                id: "radiofrequencia-pescoco",
                nome: "Radiofrequência",
                imagem: "images/procedimentos/radiofrequencia.webp",
                descricao: "Tratamento com radiofrequência que estimula o colágeno e melhora a qualidade da pele do pescoço.",
                beneficios: ["Estimula o colágeno", "Melhora a textura", "Trata a flacidez"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A radiofrequência no pescoço estimula a produção de colágeno e melhora a qualidade da pele, tratando a flacidez e proporcionando resultados progressivos.",
                    galeriaImagens: ["images/galeria/radiofrequencia-1.webp", "images/galeria/radiofrequencia-2.webp"]
                }
            },
            {
                id: "fios-pdo-pescoco",
                nome: "Fios de PDO",
                imagem: "images/procedimentos/fios-pdo.webp",
                descricao: "Fios de PDO que promovem lifting e estimulam a produção de colágeno no pescoço.",
                beneficios: ["Efeito lifting", "Estimula o colágeno", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os fios de PDO são inseridos no pescoço para promover um efeito lifting e estimular a produção de colágeno, proporcionando resultados duradouros e naturais.",
                    galeriaImagens: ["images/galeria/fios-pdo-1.webp", "images/galeria/fios-pdo-2.webp"]
                }
            },
            {
                id: "exossomos-pescoco",
                nome: "Exossomos",
                imagem: "images/procedimentos/exossomos.webp",
                descricao: "Tratamento com exossomos para regeneração celular e melhora da qualidade da pele do pescoço.",
                beneficios: ["Regeneração celular", "Melhora a qualidade da pele", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os exossomos são tratamentos inovadores que promovem a regeneração celular e melhoram a qualidade da pele do pescoço, proporcionando resultados naturais e duradouros.",
                    galeriaImagens: ["images/galeria/exossomos-1.webp", "images/galeria/exossomos-2.webp"]
                }
            }
        ]
    },

    colo: {
        titulo: "Tratamentos para Colo",
        queixas: ["Manchas", "Flacidez"],
        tratamentos: [
            { 
                id: "laser-zye-colo",
                nome: "Laser Zye", 
                imagem: "images/procedimentos/laser-zye.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno no colo.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Laser Zye no colo é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            {
                id: "seffiller-colo",
                nome: "SEFFILLER",
                imagem: "images/procedimentos/seffiller.webp",
                descricao: "Tratamento que combina preenchimento e estímulo de colágeno para o colo.",
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O SEFFILLER oferece um preenchimento imediato e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para o colo.",
                    galeriaImagens: ["images/galeria/seffiller-1.webp", "images/galeria/seffiller-2.webp"]
                }
            },
            {
                id: "bioestimulador-colo",
                nome: "Bioestimulador",
                imagem: "images/procedimentos/bioestimulador.webp",
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez do colo.",
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O bioestimulador atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura no colo.",
                    galeriaImagens: ["images/galeria/bioestimulador-1.webp", "images/galeria/bioestimulador-2.webp"]
                }
            },
            {
                id: "liftera-2-colo",
                nome: "Liftera II",
                imagem: "images/procedimentos/liftera.webp",
                descricao: "Tratamento que promove lifting e melhora a flacidez do colo.",
                beneficios: ["Efeito lifting", "Melhora a flacidez", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Liftera 2 é um tratamento que promove um efeito lifting e melhora a flacidez do colo, estimulando a produção de colágeno para resultados duradouros.",
                    galeriaImagens: ["images/galeria/liftera-1.webp", "images/galeria/liftera-2.webp"]
                }
            },
            {
                id: "coolfase-colo",
                nome: "CoolFase",
                imagem: "images/procedimentos/coolfase.webp",
                descricao: "Tratamento de resfriamento que melhora a qualidade da pele e trata a flacidez do colo.",
                beneficios: ["Melhora a qualidade da pele", "Trata a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolFase é um tratamento de resfriamento que melhora a qualidade da pele e trata a flacidez do colo, proporcionando resultados progressivos e naturais.",
                    galeriaImagens: ["images/galeria/coolfase-1.webp", "images/galeria/coolfase-2.webp"]
                }
            }
        ]
    },

    papada: {
        titulo: "Tratamentos para Papada",
        queixas: ["Papada aparente", "Flacidez"],
        tratamentos: [
            { 
                id: "coolsculpting-papada",
                nome: "CoolSculpting", 
                imagem: "images/procedimentos/coolsculpting.webp", 
                descricao: "Criolipólise que congela e elimina as células de gordura da papada de forma não invasiva.", 
                beneficios: ["Elimina gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting é uma técnica de criolipólise que congela seletivamente as células de gordura da papada, levando à sua eliminação natural pelo organismo, sem cirurgia ou tempo de recuperação.",
                    galeriaImagens: ["images/galeria-coolsculpting-1.webp", "images/galeria-coolsculpting-2.webp"]
                }
            },
            {
                id: "liftera-papada",
                nome: "Liftera",
                imagem: "images/procedimentos/liftera.webp",
                descricao: "Tratamento que promove lifting e melhora a flacidez da papada.",
                beneficios: ["Efeito lifting", "Melhora a flacidez", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Liftera é um tratamento que promove um efeito lifting e melhora a flacidez da papada, estimulando a produção de colágeno para resultados duradouros.",
                    galeriaImagens: ["images/galeria/liftera-1.webp", "images/galeria/liftera-2.webp"]
                }
            },
            {
                id: "fios-pdo-papada",
                nome: "Fios de PDO",
                imagem: "images/procedimentos/fios-pdo.webp",
                descricao: "Fios de PDO que promovem lifting e estimulam a produção de colágeno na papada.",
                beneficios: ["Efeito lifting", "Estimula o colágeno", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os fios de PDO são inseridos na papada para promover um efeito lifting e estimular a produção de colágeno, proporcionando resultados duradouros e naturais.",
                    galeriaImagens: ["images/galeria/fios-pdo-1.webp", "images/galeria/fios-pdo-2.webp"]
                }
            },
            {
                id: "coolfase-papada",
                nome: "CoolFase",
                imagem: "images/procedimentos/coolfase.webp",
                descricao: "Tratamento de resfriamento que melhora a qualidade da pele e trata a flacidez da papada.",
                beneficios: ["Melhora a qualidade da pele", "Trata a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolFase é um tratamento de resfriamento que melhora a qualidade da pele e trata a flacidez da papada, proporcionando resultados progressivos e naturais.",
                    galeriaImagens: ["images/galeria/coolfase-1.webp", "images/galeria/coolfase-2.webp"]
                }
            },
            {
                id: "seffiller-papada",
                nome: "SEFFILLER",
                imagem: "images/procedimentos/seffiller.webp",
                descricao: "Tratamento que combina preenchimento e estímulo de colágeno para a papada.",
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O SEFFILLER oferece um preenchimento imediato e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para a papada.",
                    galeriaImagens: ["images/galeria/seffiller-1.webp", "images/galeria/seffiller-2.webp"]
                }
            }
        ]
    },

    testa: {
        titulo: "Tratamentos para a Testa",
        queixas: ["Rugas", "Poros", "Manchas", "Acne", "Flacidez"],
        tratamentos: [
            {
                id: "botox-testa",
                nome: "Toxina Botulínica (Botox®)",
                imagem: "images/procedimentos/botox.webp",
                descricao: "A aplicação de toxina botulínica é o tratamento padrão-ouro para suavizar as rugas dinâmicas da testa, que se formam ao levantar as sobrancelhas.",
                beneficios: ["Atenua linhas de expressão", "Previne a formação de rugas permanentes", "Pode arquear levemente as sobrancelhas"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Entenda o mecanismo de ação da toxina botulínica para o tratamento das rugas da testa, um procedimento rápido e eficaz que proporciona uma aparência mais lisa e rejuvenescida.",
                    galeriaImagens: ["images/galeria-botox-testa-1.webp", "images/galeria-botox-testa-2.webp"]
                }
            },
            {
                id: "laser-zye-testa",
                nome: "Laser Zye",
                imagem: "images/procedimentos/laser-zye.webp",
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno na testa.",
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Laser Zye na testa é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            {
                id: "microagulhamento-testa",
                nome: "Microagulhamento",
                imagem: "images/procedimentos/microagulhamento.webp",
                descricao: "Técnica que cria microcanais na pele para estimular a produção de colágeno na testa.",
                beneficios: ["Estimula o colágeno", "Melhora a textura", "Reduz linhas finas"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O microagulhamento é uma técnica que cria microcanais na pele para estimular a produção natural de colágeno, melhorando a textura e reduzindo linhas finas na testa.",
                    galeriaImagens: ["images/galeria/microagulhamento-1.webp", "images/galeria/microagulhamento-2.webp"]
                }
            },
            {
                id: "preenchimento-facial-testa",
                nome: "Preenchimento Facial",
                imagem: "images/procedimentos/preenchimento.webp",
                descricao: "Preenchimento com ácido hialurônico para melhorar o contorno e volume da região da testa.",
                beneficios: ["Melhora o contorno", "Adiciona volume", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento facial na testa utiliza ácido hialurônico para melhorar o contorno e adicionar volume de forma natural e harmoniosa.",
                    galeriaImagens: ["images/galeria/preenchimento-1.webp", "images/galeria/preenchimento-2.webp"]
                }
            },
            {
                id: "coolfase-testa",
                nome: "CoolFase",
                imagem: "images/procedimentos/coolfase.webp",
                descricao: "Tratamento de resfriamento que melhora a qualidade da pele e trata a flacidez na testa.",
                beneficios: ["Melhora a qualidade da pele", "Trata a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolFase é um tratamento de resfriamento que melhora a qualidade da pele e trata a flacidez na testa, proporcionando resultados progressivos e naturais.",
                    galeriaImagens: ["images/galeria/coolfase-1.webp", "images/galeria/coolfase-2.webp"]
                }
            },
            {
                id: "peeling-testa",
                nome: "Peeling",
                imagem: "images/procedimentos/peeling.webp",
                descricao: "Tratamento de renovação celular que melhora a textura, uniformiza o tom e trata manchas na testa.",
                beneficios: ["Renovação celular", "Uniformiza o tom", "Trata manchas"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O peeling é um tratamento de renovação celular que melhora a textura, uniformiza o tom da pele e trata manchas na testa, proporcionando uma pele mais lisa e uniforme.",
                    galeriaImagens: ["images/galeria/peeling-1.webp", "images/galeria/peeling-2.webp"]
                }
            },
            {
                id: "limpeza-pele-testa",
                nome: "Limpeza de pele",
                imagem: "images/procedimentos/limpeza-pele.webp",
                descricao: "Limpeza profunda que remove impurezas, cravos e melhora a qualidade da pele da testa.",
                beneficios: ["Remove impurezas", "Trata cravos", "Melhora a qualidade da pele"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A limpeza de pele é um procedimento que remove impurezas, cravos e melhora a qualidade da pele da testa, deixando-a mais limpa e saudável.",
                    galeriaImagens: ["images/galeria/limpeza-1.webp", "images/galeria/limpeza-2.webp"]
                }
            },
            {
                id: "peeling-mesojectgun-testa",
                nome: "Peeling Mesojectgun",
                imagem: "images/procedimentos/peeling-mesojectgun.webp",
                descricao: "Peeling aplicado com mesojectgun para renovação celular e melhora da qualidade da pele na testa.",
                beneficios: ["Renovação celular", "Melhora a absorção", "Resultados mais rápidos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O peeling mesojectgun combina a técnica de peeling com aplicação via mesojectgun, proporcionando renovação celular e melhora da qualidade da pele na testa com resultados mais rápidos.",
                    galeriaImagens: ["images/galeria/peeling-meso-1.webp", "images/galeria/peeling-meso-2.webp"]
                }
            },
            {
                id: "liftera-testa",
                nome: "Liftera",
                imagem: "images/procedimentos/liftera.webp",
                descricao: "Tratamento que promove lifting e melhora a flacidez da pele na testa.",
                beneficios: ["Efeito lifting", "Melhora a flacidez", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Liftera é um tratamento que promove um efeito lifting e melhora a flacidez da pele na testa, estimulando a produção de colágeno para resultados duradouros.",
                    galeriaImagens: ["images/galeria/liftera-1.webp", "images/galeria/liftera-2.webp"]
                }
            },
            {
                id: "radiofrequencia-testa",
                nome: "Radiofrequência",
                imagem: "images/procedimentos/radiofrequencia.webp",
                descricao: "Tratamento com radiofrequência que estimula o colágeno e melhora a qualidade da pele na testa.",
                beneficios: ["Estimula o colágeno", "Melhora a textura", "Trata a flacidez"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A radiofrequência é um tratamento que estimula a produção de colágeno e melhora a qualidade da pele na testa, tratando a flacidez e proporcionando resultados progressivos.",
                    galeriaImagens: ["images/galeria/radiofrequencia-1.webp", "images/galeria/radiofrequencia-2.webp"]
                }
            },
            {
                id: "fios-pdo-testa",
                nome: "Fios de PDO",
                imagem: "images/procedimentos/fios-pdo.webp",
                descricao: "Fios de PDO que promovem lifting e estimulam a produção de colágeno na testa.",
                beneficios: ["Efeito lifting", "Estimula o colágeno", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os fios de PDO são inseridos na pele da testa para promover um efeito lifting e estimular a produção de colágeno, proporcionando resultados duradouros e naturais.",
                    galeriaImagens: ["images/galeria/fios-pdo-1.webp", "images/galeria/fios-pdo-2.webp"]
                }
            }
        ]
    },

    glabela: {
        titulo: "Tratamentos para Glabela (entre as sobrancelhas)",
        queixas: ["Rugas"],
        tratamentos: [
            {
                id: "botox-glabela",
                nome: "Toxina Botulínica (Botox®)",
                imagem: "images/procedimentos/botox.webp",
                descricao: "É o tratamento mais eficaz para relaxar os músculos que formam a ruga vertical entre as sobrancelhas.",
                beneficios: ["Suaviza a 'ruga do bravo'", "Aparência mais relaxada e positiva", "Resultados em poucos dias"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A ruga da 'bravura' é tratada eficazmente com a toxina botulínica, que relaxa a musculatura local e suaviza a expressão, conferindo uma aparência mais serena e descansada.",
                    galeriaImagens: ["images/galeria-glabela-1.webp", "images/galeria-glabela-2.webp"]
                }
            },
            {
                id: "preenchimento-facial-glabela",
                nome: "Preenchimento Facial",
                imagem: "images/procedimentos/preenchimento.webp",
                descricao: "Preenchimento com ácido hialurônico para suavizar rugas e melhorar o contorno da região da glabela.",
                beneficios: ["Suaviza rugas", "Melhora o contorno", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento facial na glabela utiliza ácido hialurônico para suavizar rugas e melhorar o contorno da região, proporcionando resultados naturais e harmoniosos.",
                    galeriaImagens: ["images/galeria/preenchimento-1.webp", "images/galeria/preenchimento-2.webp"]
                }
            }
        ]
    },

    bochechas: {
        titulo: "Tratamentos para Bochechas e Região Malar",
        queixas: ["Flacidez", "Qualidade de pele e manchas", "Lifting", "Definição"],
        tratamentos: [
            {
                id: "preenchimento-facial-bochechas",
                nome: "Preenchimento Facial",
                imagem: "images/procedimentos/preenchimento.webp",
                descricao: "Aplicação de ácido hialurônico na região malar para restaurar o volume perdido, definir o contorno e criar um efeito lifting no rosto.",
                beneficios: ["Efeito lifting facial", "Rosto com contornos mais definidos", "Suavização do 'bigode chinês'"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento facial malar utiliza ácido hialurônico para redefinir as maçãs do rosto, proporcionando sustentação e um efeito lifting que rejuvenesce toda a face.",
                    galeriaImagens: ["images/galeria-preench-olhos-1.webp", "images/galeria-preench-olhos-2.webp"]
                }
            },
            {
                id: "laser-zye-bochechas",
                nome: "Laser Zye",
                imagem: "images/procedimentos/laser-zye.webp",
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno nas bochechas.",
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Laser Zye nas bochechas é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            {
                id: "bioestimulador-bochechas",
                nome: "Bioestimulador",
                imagem: "images/procedimentos/bioestimulador.webp",
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez das bochechas.",
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O bioestimulador atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura nas bochechas.",
                    galeriaImagens: ["images/galeria/bioestimulador-1.webp", "images/galeria/bioestimulador-2.webp"]
                }
            },
            {
                id: "seffiller-bochechas",
                nome: "SEFFILLER",
                imagem: "images/procedimentos/seffiller.webp",
                descricao: "Tratamento que combina preenchimento e estímulo de colágeno para as bochechas.",
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O SEFFILLER oferece um preenchimento imediato e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para as bochechas.",
                    galeriaImagens: ["images/galeria/seffiller-1.webp", "images/galeria/seffiller-2.webp"]
                }
            },
            {
                id: "coolfase-bochechas",
                nome: "CoolFase",
                imagem: "images/procedimentos/coolfase.webp",
                descricao: "Tratamento de resfriamento que melhora a qualidade da pele e trata a flacidez nas bochechas.",
                beneficios: ["Melhora a qualidade da pele", "Trata a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolFase é um tratamento de resfriamento que melhora a qualidade da pele e trata a flacidez nas bochechas, proporcionando resultados progressivos e naturais.",
                    galeriaImagens: ["images/galeria/coolfase-1.webp", "images/galeria/coolfase-2.webp"]
                }
            },
            {
                id: "fios-pdo-bochechas",
                nome: "Fios de PDO",
                imagem: "images/procedimentos/fios-pdo.webp",
                descricao: "Fios de PDO que promovem lifting e estimulam a produção de colágeno nas bochechas.",
                beneficios: ["Efeito lifting", "Estimula o colágeno", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os fios de PDO são inseridos nas bochechas para promover um efeito lifting e estimular a produção de colágeno, proporcionando resultados duradouros e naturais.",
                    galeriaImagens: ["images/galeria/fios-pdo-1.webp", "images/galeria/fios-pdo-2.webp"]
                }
            },
            {
                id: "exossomos-bochechas",
                nome: "Exossomos",
                imagem: "images/procedimentos/exossomos.webp",
                descricao: "Tratamento com exossomos para regeneração celular e melhora da qualidade da pele das bochechas.",
                beneficios: ["Regeneração celular", "Melhora a qualidade da pele", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os exossomos são tratamentos inovadores que promovem a regeneração celular e melhoram a qualidade da pele das bochechas, proporcionando resultados naturais e duradouros.",
                    galeriaImagens: ["images/galeria/exossomos-1.webp", "images/galeria/exossomos-2.webp"]
                }
            },
            {
                id: "botox-bochechas",
                nome: "Toxina Botulínica (Botox®)",
                imagem: "images/procedimentos/botox.webp",
                descricao: "Aplicação de toxina botulínica para relaxar a musculatura e suavizar linhas de expressão nas bochechas.",
                beneficios: ["Suaviza linhas de expressão", "Melhora a aparência", "Aplicação rápida"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A toxina botulínica nas bochechas pode ser utilizada para relaxar a musculatura e suavizar linhas de expressão, proporcionando uma aparência mais harmoniosa.",
                    galeriaImagens: ["images/galeria-botox-olhos-1.webp", "images/galeria-botox-olhos-2.webp"]
                }
            },
            {
                id: "liftera-bochechas",
                nome: "Liftera",
                imagem: "images/procedimentos/liftera.webp",
                descricao: "Tratamento que promove lifting e melhora a flacidez das bochechas.",
                beneficios: ["Efeito lifting", "Melhora a flacidez", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Liftera é um tratamento que promove um efeito lifting e melhora a flacidez das bochechas, estimulando a produção de colágeno para resultados duradouros.",
                    galeriaImagens: ["images/galeria/liftera-1.webp", "images/galeria/liftera-2.webp"]
                }
            }
        ]
    },

    nariz: {
        titulo: "Tratamentos para o Nariz",
        queixas: ["Cravos", "Rinomodelação"],
        tratamentos: [
            {
                id: "limpeza-pele-nariz",
                nome: "Limpeza de pele",
                imagem: "images/procedimentos/limpeza-pele.webp",
                descricao: "Limpeza profunda que remove impurezas e cravos do nariz, melhorando a qualidade da pele.",
                beneficios: ["Remove impurezas", "Trata cravos", "Melhora a qualidade da pele"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A limpeza de pele no nariz é um procedimento que remove impurezas e cravos, deixando a pele mais limpa e saudável.",
                    galeriaImagens: ["images/galeria/limpeza-1.webp", "images/galeria/limpeza-2.webp"]
                }
            },
            {
                id: "peeling-nariz",
                nome: "Peeling",
                imagem: "images/procedimentos/peeling.webp",
                descricao: "Tratamento de renovação celular que melhora a textura e uniformiza o tom da pele do nariz.",
                beneficios: ["Renovação celular", "Uniformiza o tom", "Melhora a textura"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O peeling no nariz é um tratamento de renovação celular que melhora a textura e uniformiza o tom da pele, proporcionando uma pele mais lisa e uniforme.",
                    galeriaImagens: ["images/galeria/peeling-1.webp", "images/galeria/peeling-2.webp"]
                }
            },
            {
                id: "preenchimento-rinomodelacao-nariz",
                nome: "Preenchimento Facial – Rinomodelação",
                imagem: "images/procedimentos/rinomodelacao.webp",
                descricao: "Preenchimento com ácido hialurônico para rinomodelação, melhorando o formato e contorno do nariz sem cirurgia.",
                beneficios: ["Melhora o formato", "Ajusta o contorno", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A rinomodelação com preenchimento facial utiliza ácido hialurônico para melhorar o formato e contorno do nariz de forma não cirúrgica, proporcionando resultados naturais e harmoniosos.",
                    galeriaImagens: ["images/galeria/rinomodelacao-1.webp", "images/galeria/rinomodelacao-2.webp"]
                }
            }
        ]
    },

    queixo: {
        titulo: "Tratamentos para Queixo e Contorno Mandibular",
        queixas: ["Contorno mandíbula", "Formato e projeção queixo"],
        tratamentos: [
            {
                id: "preenchimento-queixo",
                nome: "Preenchimento",
                imagem: "images/procedimentos/preenchimento.webp",
                descricao: "Aplicação de preenchedores de ácido hialurônico para definir e marcar a linha da mandíbula e projetar o queixo.",
                beneficios: ["Melhora a definição do terço inferior", "Rosto com aparência mais angulada", "Melhora o perfil facial"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento do contorno mandibular e queixo com ácido hialurônico é ideal para quem busca uma mandíbula mais definida, um queixo projetado e um rosto com contornos mais marcantes e angulados.",
                    galeriaImagens: ["images/galeria-preench-olhos-1.webp", "images/galeria-preench-olhos-2.webp"]
                }
            },
            {
                id: "liftera-queixo",
                nome: "Liftera",
                imagem: "images/procedimentos/liftera.webp",
                descricao: "Tratamento que promove lifting e melhora o contorno do queixo e mandíbula.",
                beneficios: ["Efeito lifting", "Melhora o contorno", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Liftera é um tratamento que promove um efeito lifting e melhora o contorno do queixo e mandíbula, estimulando a produção de colágeno para resultados duradouros.",
                    galeriaImagens: ["images/galeria/liftera-1.webp", "images/galeria/liftera-2.webp"]
                }
            },
            {
                id: "botox-queixo",
                nome: "Toxina Botulínica (Botox®)",
                imagem: "images/procedimentos/botox.webp",
                descricao: "Aplicação de toxina botulínica para relaxar a musculatura e melhorar o contorno do queixo.",
                beneficios: ["Melhora o contorno", "Relaxa musculatura", "Aplicação rápida"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A toxina botulínica no queixo pode ser utilizada para relaxar a musculatura e melhorar o contorno, proporcionando uma aparência mais harmoniosa.",
                    galeriaImagens: ["images/galeria-botox-olhos-1.webp", "images/galeria-botox-olhos-2.webp"]
                }
            }
        ]
    },

    // --- ZONAS DO CORPO ---
    bracos: {
        titulo: "Tratamentos para Braços",
        queixas: ["Gordura localizada", "Definição muscular", "Flacidez de pele"],
        tratamentos: [
            {
                id: "coolsculpting-bracos",
                nome: "CoolSculpting",
                imagem: "images/procedimentos/coolsculpting.webp",
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva nos braços.",
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada nos braços.",
                    galeriaImagens: ["images/galeria/coolsculpting-1.webp", "images/galeria/coolsculpting-2.webp"]
                }
            },
            {
                id: "emsculpt-neo-bracos",
                nome: "EMSCULPT NEO",
                imagem: "images/procedimentos/emsculpt-neo.webp",
                descricao: "Tecnologia que combina radiofrequência e contrações musculares para reduzir gordura e aumentar a massa muscular nos braços.",
                beneficios: ["Reduz gordura", "Aumenta massa muscular", "Define os braços"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O EMSCULPT NEO é um tratamento revolucionário que combina radiofrequência para reduzir gordura com contrações musculares intensas para aumentar a massa muscular, proporcionando definição e tonificação dos braços.",
                    galeriaImagens: ["images/galeria/emsculpt-neo-1.webp", "images/galeria/emsculpt-neo-2.webp"]
                }
            },
            {
                id: "bioestimulador-bracos",
                nome: "Bioestimulador",
                imagem: "images/procedimentos/bioestimulador.webp",
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez dos braços.",
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O bioestimulador atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura nos braços.",
                    galeriaImagens: ["images/galeria/bioestimulador-1.webp", "images/galeria/bioestimulador-2.webp"]
                }
            },
            {
                id: "radiofrequencia-bracos",
                nome: "Radiofrequência",
                imagem: "images/procedimentos/radiofrequencia.webp",
                descricao: "Radiofrequência que trata a flacidez e melhora a qualidade da pele dos braços.",
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A radiofrequência atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno nos braços.",
                    galeriaImagens: ["images/galeria/radiofrequencia-1.webp", "images/galeria/radiofrequencia-2.webp"]
                }
            }
        ]
    },
    maos: {
        titulo: "Tratamentos para Mãos",
        queixas: ["Flacidez", "Manchas", "Sinais de envelhecimento"],
        tratamentos: [
            {
                id: "laser-zye-maos",
                nome: "Laser Zye",
                imagem: "images/procedimentos/laser-zye.webp",
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno nas mãos.",
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Laser Zye nas mãos é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            {
                id: "bioestimulador-maos",
                nome: "Bioestimulador",
                imagem: "images/procedimentos/bioestimulador.webp",
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez das mãos.",
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O bioestimulador atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura nas mãos.",
                    galeriaImagens: ["images/galeria/bioestimulador-1.webp", "images/galeria/bioestimulador-2.webp"]
                }
            },
            {
                id: "coolfase-maos",
                nome: "CoolFase",
                imagem: "images/procedimentos/coolfase.webp",
                descricao: "Tratamento de resfriamento que melhora a qualidade da pele das mãos.",
                beneficios: ["Melhora a qualidade da pele", "Trata a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolFase é um tratamento de resfriamento que melhora a qualidade da pele das mãos, proporcionando resultados progressivos e naturais.",
                    galeriaImagens: ["images/galeria/coolfase-1.webp", "images/galeria/coolfase-2.webp"]
                }
            },
            {
                id: "liftera-maos",
                nome: "Liftera",
                imagem: "images/procedimentos/liftera.webp",
                descricao: "Tratamento que promove lifting e melhora a flacidez das mãos.",
                beneficios: ["Efeito lifting", "Melhora a flacidez", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Liftera é um tratamento que promove um efeito lifting e melhora a flacidez das mãos, estimulando a produção de colágeno para resultados duradouros.",
                    galeriaImagens: ["images/galeria/liftera-1.webp", "images/galeria/liftera-2.webp"]
                }
            },
            {
                id: "seffiller-maos",
                nome: "SEFFILLER",
                imagem: "images/procedimentos/seffiller.webp",
                descricao: "Tratamento que combina preenchimento e estímulo de colágeno para as mãos.",
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O SEFFILLER oferece um preenchimento imediato e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para as mãos.",
                    galeriaImagens: ["images/galeria/seffiller-1.webp", "images/galeria/seffiller-2.webp"]
                }
            }
        ]
    },
    abdomen: {
        titulo: "Tratamentos para Abdômen",
        queixas: ["Gordura localizada", "Definição muscular", "Flacidez de pele"],
        tratamentos: [
            {
                id: "coolsculpting-abdomen",
                nome: "CoolSculpting",
                imagem: "images/procedimentos/coolsculpting.webp",
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva no abdômen.",
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada no abdômen.",
                    galeriaImagens: ["images/galeria/coolsculpting-1.webp", "images/galeria/coolsculpting-2.webp"]
                }
            },
            {
                id: "emsculpt-neo-abdomen",
                nome: "EMSCULPT NEO",
                imagem: "images/procedimentos/emsculpt-neo.webp",
                descricao: "Tecnologia que combina radiofrequência e contrações musculares para reduzir gordura e aumentar a massa muscular no abdômen.",
                beneficios: ["Reduz gordura", "Aumenta massa muscular", "Define o abdômen"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O EMSCULPT NEO é um tratamento revolucionário que combina radiofrequência para reduzir gordura com contrações musculares intensas para aumentar a massa muscular, proporcionando definição e tonificação do abdômen.",
                    galeriaImagens: ["images/galeria/emsculpt-neo-1.webp", "images/galeria/emsculpt-neo-2.webp"]
                }
            },
            {
                id: "enzimas-abdomen",
                nome: "Enzimas",
                imagem: "images/procedimentos/enzimas.webp",
                descricao: "Enzimas que quebram as células de gordura localizada no abdômen de forma natural.",
                beneficios: ["Reduz gordura localizada", "Procedimento natural", "Resultados visíveis"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "As enzimas atuam quebrando as células de gordura localizada no abdômen de forma natural e segura, proporcionando uma redução gradual e eficaz da gordura localizada.",
                    galeriaImagens: ["images/galeria/enzimas-1.webp", "images/galeria/enzimas-2.webp"]
                }
            },
            {
                id: "bioestimulador-abdomen",
                nome: "Bioestimulador",
                imagem: "images/procedimentos/bioestimulador.webp",
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez do abdômen.",
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O bioestimulador atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura no abdômen.",
                    galeriaImagens: ["images/galeria/bioestimulador-1.webp", "images/galeria/bioestimulador-2.webp"]
                }
            },
            {
                id: "radiofrequencia-abdomen",
                nome: "Radiofrequência",
                imagem: "images/procedimentos/radiofrequencia.webp",
                descricao: "Radiofrequência que trata a flacidez e melhora a qualidade da pele do abdômen.",
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A radiofrequência atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno no abdômen.",
                    galeriaImagens: ["images/galeria/radiofrequencia-1.webp", "images/galeria/radiofrequencia-2.webp"]
                }
            },
            {
                id: "cmslim-abdomen",
                nome: "CMSLim",
                imagem: "images/procedimentos/cmslim.webp",
                descricao: "Tratamento de eletroestimulação muscular que tonifica e define o abdômen.",
                beneficios: ["Tonifica músculos", "Define o abdômen", "Resultados visíveis"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CMSLim utiliza eletroestimulação muscular de alta intensidade para tonificar e definir o abdômen, proporcionando resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/cmslim-1.webp", "images/galeria/cmslim-2.webp"]
                }
            }
        ]
    },
    costas: {
        titulo: "Tratamentos para as Costas",
        queixas: ["Gordura localizada"],
        tratamentos: [
            {
                id: "coolsculpting-costas",
                nome: "CoolSculpting",
                imagem: "images/procedimentos/coolsculpting.webp",
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva nas costas.",
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada nas costas.",
                    galeriaImagens: ["images/galeria/coolsculpting-1.webp", "images/galeria/coolsculpting-2.webp"]
                }
            },
            {
                id: "emsculpt-neo-costas",
                nome: "EMSCULPT NEO",
                imagem: "images/procedimentos/emsculpt-neo.webp",
                descricao: "Tecnologia que combina radiofrequência e contrações musculares para reduzir gordura e tonificar as costas.",
                beneficios: ["Reduz gordura", "Tonifica músculos", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O EMSCULPT NEO é um tratamento revolucionário que combina radiofrequência para reduzir gordura com contrações musculares intensas, proporcionando tonificação e definição das costas.",
                    galeriaImagens: ["images/galeria/emsculpt-neo-1.webp", "images/galeria/emsculpt-neo-2.webp"]
                }
            }
        ]
    },
    pernas: {
        titulo: "Tratamentos para Pernas e Joelhos",
        queixas: ["Gordura localizada", "Definição muscular", "Flacidez de pele"],
        tratamentos: [
            {
                id: "coolsculpting-pernas",
                nome: "CoolSculpting",
                imagem: "images/procedimentos/coolsculpting.webp",
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva nas pernas e joelhos.",
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada nas pernas e joelhos.",
                    galeriaImagens: ["images/galeria/coolsculpting-1.webp", "images/galeria/coolsculpting-2.webp"]
                }
            },
            {
                id: "emsculpt-neo-pernas",
                nome: "EMSCULPT NEO",
                imagem: "images/procedimentos/emsculpt-neo.webp",
                descricao: "Tecnologia que combina radiofrequência e contrações musculares para reduzir gordura e aumentar a massa muscular nas pernas.",
                beneficios: ["Reduz gordura", "Aumenta massa muscular", "Define as pernas"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O EMSCULPT NEO é um tratamento revolucionário que combina radiofrequência para reduzir gordura com contrações musculares intensas para aumentar a massa muscular, proporcionando definição e tonificação das pernas.",
                    galeriaImagens: ["images/galeria/emsculpt-neo-1.webp", "images/galeria/emsculpt-neo-2.webp"]
                }
            },
            {
                id: "bioestimulador-pernas",
                nome: "Bioestimulador",
                imagem: "images/procedimentos/bioestimulador.webp",
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez das pernas.",
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O bioestimulador atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura nas pernas.",
                    galeriaImagens: ["images/galeria/bioestimulador-1.webp", "images/galeria/bioestimulador-2.webp"]
                }
            },
            {
                id: "radiofrequencia-pernas",
                nome: "Radiofrequência",
                imagem: "images/procedimentos/radiofrequencia.webp",
                descricao: "Radiofrequência que trata a flacidez e melhora a qualidade da pele das pernas.",
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A radiofrequência atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno nas pernas.",
                    galeriaImagens: ["images/galeria/radiofrequencia-1.webp", "images/galeria/radiofrequencia-2.webp"]
                }
            },
            {
                id: "liftera-joelho",
                nome: "Liftera",
                imagem: "images/procedimentos/liftera.webp",
                descricao: "Tratamento que promove lifting e melhora a flacidez especialmente na região do joelho.",
                beneficios: ["Efeito lifting", "Melhora a flacidez no joelho", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Liftera é um tratamento que promove um efeito lifting e melhora a flacidez especialmente na região do joelho, estimulando a produção de colágeno para resultados duradouros.",
                    galeriaImagens: ["images/galeria/liftera-1.webp", "images/galeria/liftera-2.webp"]
                }
            }
        ]
    },
    "axila": {
        titulo: "Tratamentos para Axila",
        queixas: ["Suor excessivo", "Odor", "Manchas escuras", "Gordura localizada"],
        tratamentos: [
            {
                id: "botox-axila",
                nome: "Botox",
                imagem: "images/procedimentos/botox.webp",
                descricao: "Tratamento com toxina botulínica para reduzir a produção de suor e odor nas axilas.",
                beneficios: ["Reduz suor excessivo", "Elimina odor", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Botox nas axilas bloqueia a transmissão dos impulsos nervosos para as glândulas sudoríparas, reduzindo significativamente a produção de suor e eliminando o odor de forma eficaz e duradoura.",
                    galeriaImagens: ["images/galeria/botox-1.webp", "images/galeria/botox-2.webp"]
                }
            },
            {
                id: "laser-zye-axila",
                nome: "Laser Zye",
                imagem: "images/procedimentos/laser-zye.webp",
                descricao: "Tratamento a laser para clarear manchas escuras e melhorar a textura da pele das axilas.",
                beneficios: ["Clareia manchas", "Melhora a textura", "Uniformiza o tom"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Laser Zye nas axilas é eficaz para clarear manchas escuras, melhorar a textura e uniformizar o tom da pele, proporcionando resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            {
                id: "coolsculpting-axila",
                nome: "CoolSculpting",
                imagem: "images/procedimentos/coolsculpting.webp",
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva nas axilas.",
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva nas axilas, proporcionando resultados duradouros.",
                    galeriaImagens: ["images/galeria/coolsculpting-1.webp", "images/galeria/coolsculpting-2.webp"]
                }
            },
            {
                id: "radiofrequencia-axila",
                nome: "Radiofrequência",
                imagem: "images/procedimentos/radiofrequencia.webp",
                descricao: "Radiofrequência que melhora a qualidade da pele e trata a flacidez nas axilas.",
                beneficios: ["Melhora a textura", "Trata a flacidez", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A radiofrequência nas axilas melhora a qualidade da pele, trata a flacidez e estimula a produção de colágeno.",
                    galeriaImagens: ["images/galeria/radiofrequencia-1.webp", "images/galeria/radiofrequencia-2.webp"]
                }
            }
        ]
    },
    "gordura-sutia": {
        titulo: "Tratamentos para Gordura Sutiã",
        queixas: ["Gordura localizada"],
        tratamentos: [
            {
                id: "coolsculpting-sutia",
                nome: "CoolSculpting",
                imagem: "images/procedimentos/coolsculpting.webp",
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva na região do sutiã.",
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada na região do sutiã.",
                    galeriaImagens: ["images/galeria/coolsculpting-1.webp", "images/galeria/coolsculpting-2.webp"]
                }
            }
        ]
    },
    "coxa-anterior": {
        titulo: "Tratamentos para Coxa Anterior",
        queixas: ["Gordura localizada", "Definição muscular", "Flacidez de pele"],
        tratamentos: [
            {
                id: "coolsculpting-coxa",
                nome: "CoolSculpting",
                imagem: "images/procedimentos/coolsculpting.webp",
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva nas coxas.",
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada nas coxas.",
                    galeriaImagens: ["images/galeria/coolsculpting-1.webp", "images/galeria/coolsculpting-2.webp"]
                }
            },
            {
                id: "emsculpt-neo-coxa",
                nome: "EMSCULPT NEO",
                imagem: "images/procedimentos/emsculpt-neo.webp",
                descricao: "Tecnologia que combina radiofrequência e contrações musculares para reduzir gordura e tonificar as coxas.",
                beneficios: ["Reduz gordura", "Aumenta massa muscular", "Define as coxas"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O EMSCULPT NEO é um tratamento revolucionário que combina radiofrequência para reduzir gordura com contrações musculares intensas, proporcionando definição e tonificação das coxas.",
                    galeriaImagens: ["images/galeria/emsculpt-neo-1.webp", "images/galeria/emsculpt-neo-2.webp"]
                }
            },
            {
                id: "bioestimulador-coxa",
                nome: "Bioestimulador",
                imagem: "images/procedimentos/bioestimulador.webp",
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez das coxas.",
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O bioestimulador atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura nas coxas.",
                    galeriaImagens: ["images/galeria/bioestimulador-1.webp", "images/galeria/bioestimulador-2.webp"]
                }
            },
            {
                id: "radiofrequencia-coxa",
                nome: "Radiofrequência",
                imagem: "images/procedimentos/radiofrequencia.webp",
                descricao: "Radiofrequência que trata a flacidez e melhora a qualidade da pele das coxas.",
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A radiofrequência atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno nas coxas.",
                    galeriaImagens: ["images/galeria/radiofrequencia-1.webp", "images/galeria/radiofrequencia-2.webp"]
                }
            }
        ]
    },
    gluteos: {
        titulo: "Tratamentos para Glúteos",
        queixas: ["Celulite", "Flacidez de pele", "Definição", "Projeção"],
        tratamentos: [
            {
                id: "preenchimento-corporal-gluteos",
                nome: "Preenchimento Corporal",
                imagem: "images/procedimentos/preenchimento.webp",
                descricao: "Preenchimento corporal para dar volume e projeção aos glúteos.",
                beneficios: ["Aumenta o volume", "Melhora a projeção", "Resultado imediato"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento corporal dos glúteos é uma técnica segura e eficaz para aumentar o volume e melhorar a projeção, proporcionando resultados imediatos e naturais.",
                    galeriaImagens: ["images/galeria/preenchimento-1.webp", "images/galeria/preenchimento-2.webp"]
                }
            },
            {
                id: "protocolo-glow-up-gluteos",
                nome: "Protocolo Glow Up",
                imagem: "images/procedimentos/protocolo-glow-up.webp",
                descricao: "Protocolo exclusivo que combina diferentes tecnologias para melhorar a aparência dos glúteos.",
                beneficios: ["Resultados completos", "Trata celulite", "Melhora definição"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Protocolo Glow Up é um tratamento completo que combina diferentes tecnologias para melhorar a aparência dos glúteos, tratando celulite e melhorando a definição.",
                    galeriaImagens: ["images/galeria/protocolo-glow-up-1.webp", "images/galeria/protocolo-glow-up-2.webp"]
                }
            },
            {
                id: "bioestimulador-gluteos",
                nome: "Bioestimulador",
                imagem: "images/procedimentos/bioestimulador.webp",
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez dos glúteos.",
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O bioestimulador atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura nos glúteos.",
                    galeriaImagens: ["images/galeria/bioestimulador-1.webp", "images/galeria/bioestimulador-2.webp"]
                }
            },
            {
                id: "radiofrequencia-gluteos",
                nome: "Radiofrequência",
                imagem: "images/procedimentos/radiofrequencia.webp",
                descricao: "Radiofrequência que trata a flacidez e celulite nos glúteos.",
                beneficios: ["Trata a flacidez", "Reduz celulite", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A radiofrequência atua profundamente na pele para tratar a flacidez e celulite nos glúteos, estimulando a produção de colágeno.",
                    galeriaImagens: ["images/galeria/radiofrequencia-1.webp", "images/galeria/radiofrequencia-2.webp"]
                }
            },
            {
                id: "emsculpt-neo-gluteos",
                nome: "EMSCULPT NEO",
                imagem: "images/procedimentos/emsculpt-neo.webp",
                descricao: "Tecnologia que combina radiofrequência e contrações musculares para tonificar e levantar os glúteos.",
                beneficios: ["Tonifica músculos", "Levanta os glúteos", "Define a região"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O EMSCULPT NEO é um tratamento revolucionário que combina radiofrequência com contrações musculares intensas para tonificar, levantar e definir os glúteos.",
                    galeriaImagens: ["images/galeria/emsculpt-neo-1.webp", "images/galeria/emsculpt-neo-2.webp"]
                }
            },
            {
                id: "cmslim-gluteos",
                nome: "CMSLIM",
                imagem: "images/procedimentos/cmslim.webp",
                descricao: "Tratamento de eletroestimulação muscular que tonifica e levanta os glúteos.",
                beneficios: ["Tonifica músculos", "Levanta os glúteos", "Resultados visíveis"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CMSLIM utiliza eletroestimulação muscular de alta intensidade para tonificar e levantar os glúteos, proporcionando resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/cmslim-1.webp", "images/galeria/cmslim-2.webp"]
                }
            }
        ]
    },
    banana: {
        titulo: "Tratamentos para Bananinha",
        queixas: ["Gordura localizada"],
        tratamentos: [
            {
                id: "coolsculpting-banana",
                nome: "CoolSculpting",
                imagem: "images/procedimentos/coolsculpting.webp",
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva na bananinha.",
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada na bananinha.",
                    galeriaImagens: ["images/galeria/coolsculpting-1.webp", "images/galeria/coolsculpting-2.webp"]
                }
            },
            {
                id: "radiofrequencia-banana",
                nome: "Radiofrequência",
                imagem: "images/procedimentos/radiofrequencia.webp",
                descricao: "Radiofrequência que trata a gordura localizada e melhora a qualidade da pele da bananinha.",
                beneficios: ["Reduz gordura", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A radiofrequência atua profundamente na pele para tratar a gordura localizada, melhorar a textura e estimular a produção de colágeno na bananinha.",
                    galeriaImagens: ["images/galeria/radiofrequencia-1.webp", "images/galeria/radiofrequencia-2.webp"]
                }
            },
            {
                id: "cmslim-banana",
                nome: "CMSlim",
                imagem: "images/procedimentos/cmslim.webp",
                descricao: "Tratamento de eletroestimulação muscular que tonifica a região da bananinha.",
                beneficios: ["Tonifica músculos", "Define a região", "Resultados visíveis"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CMSlim utiliza eletroestimulação muscular de alta intensidade para tonificar a região da bananinha, proporcionando resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/cmslim-1.webp", "images/galeria/cmslim-2.webp"]
                }
            }
        ]
    },
    culote: {
        titulo: "Tratamentos para Culote",
        queixas: ["Gordura localizada"],
        tratamentos: [
            {
                id: "coolsculpting-culote",
                nome: "CoolSculpting",
                imagem: "images/procedimentos/coolsculpting.webp",
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva no culote.",
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada no culote.",
                    galeriaImagens: ["images/galeria/coolsculpting-1.webp", "images/galeria/coolsculpting-2.webp"]
                }
            },
            {
                id: "radiofrequencia-culote",
                nome: "Radiofrequência",
                imagem: "images/procedimentos/radiofrequencia.webp",
                descricao: "Radiofrequência que trata a gordura localizada e melhora a qualidade da pele do culote.",
                beneficios: ["Reduz gordura", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A radiofrequência atua profundamente na pele para tratar a gordura localizada, melhorar a textura e estimular a produção de colágeno no culote.",
                    galeriaImagens: ["images/galeria/radiofrequencia-1.webp", "images/galeria/radiofrequencia-2.webp"]
                }
            },
            {
                id: "emsculpt-neo-culote",
                nome: "EMSCULPT NEO",
                imagem: "images/procedimentos/emsculpt-neo.webp",
                descricao: "Tecnologia que combina radiofrequência e contrações musculares para reduzir gordura no culote.",
                beneficios: ["Reduz gordura", "Tonifica músculos", "Define a região"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O EMSCULPT NEO é um tratamento revolucionário que combina radiofrequência para reduzir gordura com contrações musculares intensas, proporcionando definição no culote.",
                    galeriaImagens: ["images/galeria/emsculpt-neo-1.webp", "images/galeria/emsculpt-neo-2.webp"]
                }
            },
            {
                id: "enzimas-culote",
                nome: "Enzimas",
                imagem: "images/procedimentos/enzimas.webp",
                descricao: "Enzimas que quebram as células de gordura localizada no culote de forma natural.",
                beneficios: ["Reduz gordura localizada", "Procedimento natural", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "As enzimas atuam quebrando as células de gordura localizada no culote de forma natural e segura, proporcionando uma redução gradual e eficaz da gordura.",
                    galeriaImagens: ["images/galeria/enzimas-1.webp", "images/galeria/enzimas-2.webp"]
                }
            }
        ]
    },
    flancos: {
        titulo: "Tratamentos para Flancos",
        queixas: ["Gordura localizada"],
        tratamentos: [
            {
                id: "coolsculpting-flancos",
                nome: "CoolSculpting",
                imagem: "images/procedimentos/coolsculpting.webp",
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva nos flancos.",
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada nos flancos.",
                    galeriaImagens: ["images/galeria/coolsculpting-1.webp", "images/galeria/coolsculpting-2.webp"]
                }
            },
            {
                id: "emsculpt-neo-flancos",
                nome: "EMSCULPT NEO",
                imagem: "images/procedimentos/emsculpt-neo.webp",
                descricao: "Tecnologia que combina radiofrequência e contrações musculares para reduzir gordura nos flancos.",
                beneficios: ["Reduz gordura", "Tonifica músculos", "Define a região"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O EMSCULPT NEO é um tratamento revolucionário que combina radiofrequência para reduzir gordura com contrações musculares intensas, proporcionando definição nos flancos.",
                    galeriaImagens: ["images/galeria/emsculpt-neo-1.webp", "images/galeria/emsculpt-neo-2.webp"]
                }
            },
            {
                id: "enzimas-flancos",
                nome: "Enzimas",
                imagem: "images/procedimentos/enzimas.webp",
                descricao: "Enzimas que quebram as células de gordura localizada nos flancos de forma natural.",
                beneficios: ["Reduz gordura localizada", "Procedimento natural", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "As enzimas atuam quebrando as células de gordura localizada nos flancos de forma natural e segura, proporcionando uma redução gradual e eficaz da gordura.",
                    galeriaImagens: ["images/galeria/enzimas-1.webp", "images/galeria/enzimas-2.webp"]
                }
            }
        ]
    }
};