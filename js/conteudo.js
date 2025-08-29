// js/conteudo.js (VERSÃO ATUALIZADA COM IDs E DETALHES PARA O 'SAIBA MAIS')

const dadosClinica = {
    // --- PONTOS DO MAPA FACIAL ---
    "couro-cabeludo": {
        titulo: "Tratamentos para Couro Cabeludo",
        queixas: ["Queda de cabelo", "Rarefação", "Coceira", "Oleosidade"],
        tratamentos: [
            { 
                id: "mmp-capilar",
                nome: "MMP (Microinfusão de medicamentos)", 
                imagem: "images/mmp-couro.jpg", 
                descricao: "Técnica que insere medicamentos diretamente no couro cabeludo para tratar queda e estimular o crescimento.", 
                beneficios: ["Ação direta no folículo", "Resultados mais rápidos", "Procedimento seguro"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Descrição detalhada sobre o procedimento MMP, explicando como a microinfusão funciona, quais medicamentos são utilizados e quais são os resultados esperados para o tratamento da queda de cabelo.",
                    galeriaImagens: ["images/galeria-mmp-1.jpg", "images/galeria-mmp-2.jpg"]
                }
            },
            { 
                id: "drug-delivery-capilar",
                nome: "Drug delivery capilar", 
                imagem: "images/drug-capilar.jpg", 
                descricao: "Uso de lasers ou microagulhamento para criar microcanais na pele e facilitar a entrega de ativos (drug delivery).", 
                beneficios: ["Potencializa a ação de tônicos", "Estimula a circulação local", "Melhora a saúde do couro cabeludo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Explicação aprofundada sobre como o drug delivery capilar funciona, as tecnologias envolvidas e como ele potencializa a absorção de tratamentos tópicos para melhores resultados.",
                    galeriaImagens: ["images/galeria-drug-delivery-1.jpg", "images/galeria-drug-delivery-2.jpg"]
                }
            },
            { 
                id: "ledterapia-capilar",
                nome: "LEDterapia", 
                imagem: "images/led-capilar.jpg", 
                descricao: "Terapia com luz de LED que atua nas células, reduzindo a inflamação e estimulando o crescimento capilar.", 
                beneficios: ["Não invasivo e indolor", "Reduz a queda", "Pode ser combinado com outros tratamentos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Detalhes sobre a ciência por trás da LEDterapia, os diferentes comprimentos de onda de luz utilizados e como eles atuam no folículo capilar para promover o crescimento e a saúde dos fios.",
                    galeriaImagens: ["images/galeria-led-1.jpg", "images/galeria-led-2.jpg"]
                }
            }
        ]
    },

    olhos: {
        titulo: "Tratamentos para Região dos Olhos",
        queixas: ["Olheiras", "Flacidez", "Linhas finas (pés de galinha)", "Bolsas"],
        tratamentos: [
            { 
                id: "ultraformer-olhos",
                nome: "Ultraformer MPT", 
                imagem: "images/ultraformer-olhos.jpg", 
                descricao: "Ultrassom microfocado que promove um efeito lifting na área das pálpebras e sobrancelhas, tratando a flacidez.", 
                beneficios: ["Lifting de sobrancelhas", "Melhora a firmeza da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/LpiKp7jWn4A?si=0W2apgrAdmibtU-r",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro na área dos olhos.",
                    galeriaImagens: ["images/galeria-ultraformer-1.jpg", "images/galeria-ultraformer-2.jpg"]
                }
            },
            { 
                id: "preenchimento-olheiras",
                nome: "Preenchimento com Ácido Hialurônico", 
                imagem: "images/preenchimento-olhos.jpg", 
                descricao: "Técnica delicada para preencher a região da olheira funda, suavizando o aspecto de cansaço.", 
                beneficios: ["Suaviza olheiras profundas", "Resultado imediato", "Devolve o volume perdido"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Saiba como o preenchimento com ácido hialurônico é realizado na delicada área das olheiras para restaurar o volume, melhorar a sombra e proporcionar uma aparência mais descansada e rejuvenescida.",
                    galeriaImagens: ["images/galeria-preench-olhos-1.jpg", "images/galeria-preench-olhos-2.jpg"]
                }
            },
            { 
                id: "botox-olhos",
                nome: "Toxina Botulínica (Botox®)", 
                imagem: "images/botox-olhos.jpg", 
                descricao: "Relaxa a musculatura ao redor dos olhos para suavizar as linhas de expressão conhecidas como 'pés de galinha'.", 
                beneficios: ["Previne rugas futuras", "Aparência mais descansada", "Aplicação rápida"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Entenda como a toxina botulínica atua para relaxar os músculos responsáveis pelos 'pés de galinha', prevenindo a formação de rugas mais profundas e suavizando a expressão ao redor dos olhos.",
                    galeriaImagens: ["images/galeria-botox-olhos-1.jpg", "images/galeria-botox-olhos-2.jpg"]
                }
            }
        ]
    },

    labios: {
        titulo: "Tratamentos para Lábios e Região Perioral",
        queixas: ["Volume reduzido", "Ressecamento", "Linhas ao redor (código de barras)"],
        tratamentos: [
            { 
                id: "preenchimento-labial",
                nome: "Preenchimento Labial", 
                imagem: "images/preenchimento-labial.jpg", 
                descricao: "Uso de ácido hialurônico para dar volume, contorno e hidratação aos lábios de forma natural.", 
                beneficios: ["Volume e contorno definidos", "Hidratação profunda", "Resultados personalizados"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Descubra as diferentes técnicas de preenchimento labial, desde a hidratação até a volumização, e como o procedimento pode realçar a beleza dos lábios de maneira natural e harmoniosa.",
                    galeriaImagens: ["images/galeria-labios-1.jpg", "images/galeria-labios-2.jpg"]
                }
            },
            { 
                id: "botox-codigo-barras",
                nome: "Toxina Botulínica (Código de Barras)", 
                imagem: "images/botox-labios.jpg", 
                descricao: "Suaviza as linhas verticais acima do lábio superior, conhecidas como 'código de barras'.", 
                beneficios: ["Rejuvenesce a região perioral", "Previne o aprofundamento das linhas", "Complementa o preenchimento"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Veja como a aplicação de toxina botulínica pode suavizar as rugas do 'código de barras' ao relaxar a musculatura perioral, um tratamento que rejuvenesce a aparência da boca.",
                    galeriaImagens: ["images/galeria-cod-barras-1.jpg", "images/galeria-cod-barras-2.jpg"]
                }
            }
        ]
    },

    orelhas: {
        titulo: "Tratamentos para Orelhas",
        queixas: ["Envelhecimento do lóbulo", "Flacidez", "'Rasgo' por uso de brinco"],
        tratamentos: [
            { 
                id: "preenchimento-lobulo",
                nome: "Preenchimento do Lóbulo", 
                imagem: "images/lobulo.jpg", 
                descricao: "Com ácido hialurônico, devolve o volume e a firmeza ao lóbulo da orelha, que murcha com o tempo.", 
                beneficios: ["Lóbulo mais jovem e preenchido", "Melhora o suporte para brincos", "Procedimento rápido"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento do lóbulo é um procedimento simples e rápido que restaura o volume e a firmeza da orelha, melhorando a sustentação de brincos e rejuvenescendo a aparência.",
                    galeriaImagens: ["images/galeria-lobulo-1.jpg", "images/galeria-lobulo-2.jpg"]
                }
            }
        ]
    },

    pescoco: {
        titulo: "Tratamentos para Pescoço",
        queixas: ["Flacidez", "Rugas horizontais (linhas de colar)"],
        tratamentos: [
            { 
                id: "ultraformer-pescoco",
                nome: "Ultraformer MPT", 
                imagem: "images/ultraformer-pescoco.jpg", 
                descricao: "Promove um lifting não cirúrgico, tratando a flacidez e melhorando o contorno do pescoço.", 
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno a longo prazo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Veja como o Ultraformer MPT atua nas camadas profundas da pele do pescoço para tratar a flacidez, reduzir a papada e definir o contorno, promovendo um rejuvenescimento notável.",
                    galeriaImagens: ["images/galeria-pescoco-1.jpg", "images/galeria-pescoco-2.jpg"]
                }
            },
            { 
                id: "botox-nefertiti",
                nome: "Toxina Botulínica (Nefertiti Lift)", 
                imagem: "images/botox-pescoco.jpg", 
                descricao: "Aplicação em pontos estratégicos para relaxar a musculatura que 'puxa' o rosto para baixo, melhorando o contorno da mandíbula e do pescoço.", 
                beneficios: ["Melhora o contorno da mandíbula", "Previne a flacidez", "Efeito rejuvenescedor"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A técnica Nefertiti Lift utiliza a toxina botulínica para redefinir as linhas da mandíbula e do pescoço, proporcionando um efeito lifting ao relaxar os músculos que puxam o contorno facial para baixo.",
                    galeriaImagens: ["images/galeria-nefertiti-1.jpg", "images/galeria-nefertiti-2.jpg"]
                }
            }
        ]
    },

    colo: {
        titulo: "Tratamentos para Colo / Décolleté",
        queixas: ["Rugas finas ('sleep lines')", "Manchas solares", "Flacidez"],
        tratamentos: [
            { 
                id: "luz-pulsada-colo",
                nome: "Luz Intensa Pulsada", 
                imagem: "images/luz-colo.jpg", 
                descricao: "Trata as manchas acastanhadas e avermelhadas causadas pelo sol, uniformizando o tom da pele do colo.", 
                beneficios: ["Uniformiza o tom da pele", "Melhora vasos finos", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A Luz Intensa Pulsada é uma tecnologia eficaz para tratar os sinais do fotoenvelhecimento no colo, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria-lip-1.jpg", "images/galeria-lip-2.jpg"]
                }
            },
            { 
                id: "bioestimuladores-colo",
                nome: "Bioestimuladores de Colágeno", 
                imagem: "images/estimulador-colo.jpg", 
                descricao: "Estimula a produção natural de colágeno para tratar a flacidez e o aspecto 'craquelado' da pele.", 
                beneficios: ["Pele mais firme e espessa", "Reduz as rugas do sono", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Saiba mais sobre como os bioestimuladores de colágeno agem para reestruturar a pele do colo, tratando a flacidez e as rugas finas de dentro para fora, com resultados progressivos e naturais.",
                    galeriaImagens: ["images/galeria-bio-colo-1.jpg", "images/galeria-bio-colo-2.jpg"]
                }
            }
        ]
    },

    papada: {
        titulo: "Tratamentos para Papada",
        queixas: ["Gordura localizada", "Flacidez na região"],
        tratamentos: [
            { 
                id: "lipo-enzimatica",
                nome: "Esvaziadores de Gordura (Lipo Enzimática)", 
                imagem: "images/lipo-papada.jpg", 
                descricao: "Aplicação de enzimas que quebram as células de gordura localizada na região da papada.", 
                beneficios: ["Redução da gordura localizada", "Melhora do contorno facial", "Procedimento minimamente invasivo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A lipo enzimática é um tratamento minimamente invasivo que utiliza enzimas para destruir as células de gordura na região da papada, ajudando a definir o contorno facial.",
                    galeriaImagens: ["images/galeria-lipo-papada-1.jpg", "images/galeria-lipo-papada-2.jpg"]
                }
            }
        ]
    },

    testa: {
        titulo: "Tratamentos para a Testa",
        queixas: ["Rugas e linhas de expressão horizontais", "Pele com aspecto 'bravo' ou 'cansado'"],
        tratamentos: [
            {
                id: "botox-testa",
                nome: "Toxina Botulínica (Botox®)",
                imagem: "images/tratamento-botox-testa.jpg",
                descricao: "A aplicação de toxina botulínica é o tratamento padrão-ouro para suavizar as rugas dinâmicas da testa, que se formam ao levantar as sobrancelhas.",
                beneficios: ["Atenua linhas de expressão", "Previne a formação de rugas permanentes", "Pode arquear levemente as sobrancelhas"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Entenda o mecanismo de ação da toxina botulínica para o tratamento das rugas da testa, um procedimento rápido e eficaz que proporciona uma aparência mais lisa e rejuvenescida.",
                    galeriaImagens: ["images/galeria-botox-testa-1.jpg", "images/galeria-botox-testa-2.jpg"]
                }
            },
            {
                id: "skinbooster-testa",
                nome: "Skinbooster® para Linhas Finas",
                imagem: "images/tratamento-skinbooster.jpg",
                descricao: "Para linhas mais finas e uma melhora geral na qualidade da pele, o Skinbooster aplica ácido hialurônico para uma hidratação profunda.",
                beneficios: ["Suaviza rugas finas e estáticas", "Melhora a textura e o brilho da pele", "Hidratação profunda"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Skinbooster é um tratamento que hidrata profundamente a pele de dentro para fora, ideal para suavizar linhas finas na testa e melhorar o viço e a qualidade geral da pele.",
                    galeriaImagens: ["images/galeria-skinbooster-1.jpg", "images/galeria-skinbooster-2.jpg"]
                }
            }
        ]
    },

    glabela: {
        titulo: "Tratamentos para Glabela (entre as sobrancelhas)",
        queixas: ["Ruga da 'bravura'", "Expressão de raiva ou preocupação constante"],
        tratamentos: [
            {
                id: "botox-glabela",
                nome: "Toxina Botulínica (Botox®)",
                imagem: "images/tratamento-botox-glabela.jpg",
                descricao: "É o tratamento mais eficaz para relaxar os músculos que formam a ruga vertical entre as sobrancelhas.",
                beneficios: ["Suaviza a 'ruga do bravo'", "Aparência mais relaxada e positiva", "Resultados em poucos dias"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A ruga da 'bravura' é tratada eficazmente com a toxina botulínica, que relaxa a musculatura local e suaviza a expressão, conferindo uma aparência mais serena e descansada.",
                    galeriaImagens: ["images/galeria-glabela-1.jpg", "images/galeria-glabela-2.jpg"]
                }
            }
        ]
    },

    bochechas: {
        titulo: "Tratamentos para Bochechas e Região Malar",
        queixas: ["Perda de sustentação", "Rosto com aspecto 'derretido'", "Sulco nasogeniano ('bigode chinês')", "Falta de definição"],
        tratamentos: [
            {
                id: "preenchimento-malar",
                nome: "Preenchimento Malar (Top Model Look)",
                imagem: "images/tratamento-malar.jpg",
                descricao: "Aplicação de ácido hialurônico na região malar para restaurar o volume perdido, definir o contorno e criar um efeito lifting no rosto.",
                beneficios: ["Efeito lifting facial", "Rosto com contornos mais definidos", "Suavização do 'bigode chinês'"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento malar, ou 'Top Model Look', utiliza ácido hialurônico para redefinir as maçãs do rosto, proporcionando sustentação e um efeito lifting que rejuvenesce toda a face.",
                    galeriaImagens: ["images/galeria-malar-1.jpg", "images/galeria-malar-2.jpg"]
                }
            },
            {
                id: "bioestimuladores-face",
                nome: "Bioestimuladores de Colágeno",
                imagem: "images/tratamento-bioestimulador.jpg",
                descricao: "Substâncias como Sculptra® ou Radiesse® são aplicadas para estimular o próprio organismo a produzir mais colágeno.",
                beneficios: ["Trata a flacidez da pele", "Resultados progressivos e duradouros", "Melhora a firmeza e a sustentação"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os bioestimuladores de colágeno são a chave para tratar a flacidez facial. Eles estimulam a produção natural de colágeno, melhorando a firmeza e a estrutura da pele de forma gradual e duradoura.",
                    galeriaImagens: ["images/galeria-bio-face-1.jpg", "images/galeria-bio-face-2.jpg"]
                }
            }
        ]
    },

    nariz: {
        titulo: "Tratamentos para o Nariz",
        queixas: ["Poros dilatados", "Vasinhos", "Ponta caída", "Dorso irregular"],
        tratamentos: [
            {
                id: "rinomodelacao",
                nome: "Rinomodelação",
                imagem: "images/tratamento-rinomodelacao.jpg",
                descricao: "Procedimento não cirúrgico que utiliza ácido hialurônico para corrigir pequenas imperfeições no nariz.",
                beneficios: ["Correção sem cirurgia", "Resultados imediatos", "Harmonização facial"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A rinomodelação é a alternativa não cirúrgica para corrigir imperfeições do nariz. Com ácido hialurônico, é possível elevar a ponta, retificar o dorso e harmonizar o perfil facial.",
                    galeriaImagens: ["images/galeria-rino-1.jpg", "images/galeria-rino-2.jpg"]
                }
            },
            {
                id: "laser-poros-vasos",
                nome: "Laser para Poros e Vasos",
                imagem: "images/tratamento-laser-facial.jpg",
                descricao: "Uso de tecnologias a laser para tratar poros dilatados e pequenos vasos sanguíneos (telangiectasias).",
                beneficios: ["Reduz a aparência dos poros", "Elimina pequenos vasos aparentes", "Melhora a textura da pele"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Tecnologias a laser são utilizadas para fechar poros dilatados e tratar pequenos vasos no nariz, resultando em uma pele com textura mais lisa e tom uniforme.",
                    galeriaImagens: ["images/galeria-laser-poros-1.jpg", "images/galeria-laser-poros-2.jpg"]
                }
            }
        ]
    },

    queixo: {
        titulo: "Tratamentos para Queixo e Contorno Mandibular",
        queixas: ["Queixo retraído", "Falta de definição na mandíbula", "Perda do contorno facial"],
        tratamentos: [
            {
                id: "contorno-mandibular",
                nome: "Contorno Mandibular",
                imagem: "images/tratamento-contorno-mandibular.jpg",
                descricao: "Aplicação de preenchedores de ácido hialurônico para definir e marcar a linha da mandíbula.",
                beneficios: ["Melhora a definição do terço inferior", "Rosto com aparência mais angulada", "Diminui a percepção de flacidez"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento do contorno mandibular com ácido hialurônico é ideal para quem busca uma mandíbula mais definida e um rosto com contornos mais marcantes e angulados.",
                    galeriaImagens: ["images/galeria-mandibula-1.jpg", "images/galeria-mandibula-2.jpg"]
                }
            },
            {
                id: "preenchimento-mento",
                nome: "Preenchimento de Mento (Queixo)",
                imagem: "images/tratamento-mento.jpg",
                descricao: "Técnica para projetar o queixo quando ele é retraído, melhorando o perfil do paciente e a harmonia facial.",
                beneficios: ["Melhora o perfil facial", "Proporciona harmonia entre nariz, lábios e queixo", "Alongamento sutil do rosto"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento do mento (queixo) é um procedimento chave para a harmonização facial, projetando um queixo retraído e equilibrando as proporções do perfil do paciente.",
                    galeriaImagens: ["images/galeria-mento-1.jpg", "images/galeria-mento-2.jpg"]
                }
            }
        ]
    },

    // --- ZONAS DO CORPO ---
    bracos: {
        titulo: "Tratamentos para Braços",
        queixas: ["Flacidez", "Gordura localizada", "Manchas", "Queratose pilar ('bolinhas')"],
        tratamentos: [
            { 
                id: "ultraformer-bracos",
                nome: "Ultraformer MPT", 
                imagem: "images/ultraformer-braco.jpg", 
                descricao: "Trata a flacidez na região do 'tchauzinho', estimulando o colágeno e firmando a pele.", 
                beneficios: ["Reduz a flacidez", "Braços mais tonificados", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é altamente eficaz para tratar a flacidez na região dos braços, conhecida como 'tchauzinho'. A tecnologia estimula o colágeno, resultando em braços mais firmes e tonificados.",
                    galeriaImagens: ["images/galeria-bracos-1.jpg", "images/galeria-bracos-2.jpg"]
                }
            }
        ]
    },
    maos: {
        titulo: "Tratamentos para Mãos",
        queixas: ["Envelhecimento", "Manchas", "Ressecamento", "Perda de volume"],
        tratamentos: [
            { 
                id: "preenchimento-maos",
                nome: "Preenchimento com Ácido Hialurônico", 
                imagem: "images/preenchimento-maos.jpg", 
                descricao: "Devolve o volume perdido no dorso das mãos, escondendo tendões e veias aparentes.", 
                beneficios: ["Esconde tendões e veias", "Aparência mais jovem", "Hidratação profunda"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O envelhecimento das mãos é tratado com o preenchimento de ácido hialurônico, que restaura o volume perdido, suaviza a aparência de tendões e veias, e hidrata profundamente a pele.",
                    galeriaImagens: ["images/galeria-maos-1.jpg", "images/galeria-maos-2.jpg"]
                }
            }
        ]
    },
    abdomen: {
        titulo: "Tratamentos para Abdômen",
        queixas: ["Flacidez", "Gordura localizada", "Estrias"],
        tratamentos: [
            { 
                id: "ultraformer-abdomen",
                nome: "Ultraformer MPT (Macro e Microfocado)", 
                imagem: "images/ultraformer-abdomen.jpg", 
                descricao: "Tecnologia de ultrassom que atua tanto na camada de gordura quanto na pele para tratar a flacidez.", 
                beneficios: ["Tratamento 2 em 1: gordura e flacidez", "Melhora do contorno corporal", "Não invasivo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Com ponteiras macro e microfocadas, o Ultraformer MPT é um tratamento completo para o abdômen, atuando simultaneamente na quebra de gordura localizada e no estímulo de colágeno para tratar a flacidez.",
                    galeriaImagens: ["images/galeria-abdomen-1.jpg", "images/galeria-abdomen-2.jpg"]
                }
            }
        ]
    },
    costas: {
        titulo: "Tratamentos para as Costas",
        queixas: ["Acne nas costas ('Bocne')", "Manchas e cicatrizes de acne", "Gordura localizada (flancos)"],
        tratamentos: [
            {
                id: "peeling-costas",
                nome: "Peeling Químico Corporal",
                imagem: "images/tratamento-peeling-costas.jpg",
                descricao: "Aplicação de ácidos específicos para a pele do corpo, promovendo a renovação celular e clareando manchas.",
                beneficios: ["Reduz a acne e cravos", "Clareia manchas pós-inflamatórias", "Pele mais lisa e uniforme"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O peeling químico corporal é uma ótima opção para tratar acne, foliculite e manchas nas costas, promovendo uma renovação celular intensa que resulta em uma pele mais lisa e de tom uniforme.",
                    galeriaImagens: ["images/galeria-peeling-costas-1.jpg", "images/galeria-peeling-costas-2.jpg"]
                }
            },
            {
                id: "laser-cicatrizes-costas",
                nome: "Laser Fracionado para Cicatrizes",
                imagem: "images/tratamento-laser-costas.jpg",
                descricao: "Tecnologia a laser que atua profundamente na pele para tratar cicatrizes de acne e melhorar a textura.",
                beneficios: ["Suaviza cicatrizes", "Melhora a textura irregular", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Para cicatrizes de acne mais profundas nas costas, o laser fracionado atua estimulando o colágeno e remodelando a pele, o que suaviza a textura e melhora a aparência das marcas.",
                    galeriaImagens: ["images/galeria-laser-costas-1.jpg", "images/galeria-laser-costas-2.jpg"]
                }
            }
        ]
    },
    gluteos: {
        titulo: "Tratamentos para Glúteos",
        queixas: ["Celulite", "Flacidez", "Estrias", "Falta de projeção"],
        tratamentos: [
            { 
                id: "bioestimuladores-gluteos",
                nome: "Bioestimuladores para Volume e Firmeza", 
                imagem: "images/estimulador-gluteos.jpg", 
                descricao: "Aplicação de Sculptra® ou Radiesse® para estimular o colágeno, melhorar a celulite e a firmeza.", 
                beneficios: ["Melhora da celulite e flacidez", "Efeito 'lifting'", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os bioestimuladores são o tratamento de escolha para a região dos glúteos, pois melhoram a qualidade da pele, tratam a celulite, promovem um efeito lifting e podem até adicionar um leve volume de forma natural.",
                    galeriaImagens: ["images/galeria-gluteos-1.jpg", "images/galeria-gluteos-2.jpg"]
                }
            }
        ]
    },
    pernas: {
        titulo: "Tratamentos para Pernas, Coxas e Joelhos",
        queixas: ["Flacidez", "Celulite", "Gordura localizada", "Estrias", "Vasinhos"],
        tratamentos: [
            {
                id: "ultraformer-pernas",
                nome: "Ultraformer MPT",
                imagem: "images/ultraformer-pernas.jpg",
                descricao: "Excelente para tratar a flacidez na parte interna das coxas e na região acima dos joelhos.",
                beneficios: ["Firmeza para a parte interna da coxa", "Trata a flacidez acima dos joelhos", "Resultados visíveis"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A flacidez na parte interna das coxas e acima dos joelhos responde muito bem ao tratamento com Ultraformer MPT, que firma a pele e melhora o contorno da região.",
                    galeriaImagens: ["images/galeria-ultra-pernas-1.jpg", "images/galeria-ultra-pernas-2.jpg"]
                }
            },
            {
                id: "bioestimuladores-pernas",
                nome: "Bioestimuladores de Colágeno",
                imagem: "images/bioestimulador-pernas.jpg",
                descricao: "Estimula a produção natural de colágeno, melhorando a qualidade da pele, a flacidez e a aparência da celulite.",
                beneficios: ["Melhora da celulite", "Pele mais firme e espessa", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Para um tratamento global das pernas, os bioestimuladores de colágeno melhoram a qualidade geral da pele, combatendo a flacidez e a celulite de forma eficaz e duradoura.",
                    galeriaImagens: ["images/galeria-bio-pernas-1.jpg", "images/galeria-bio-pernas-2.jpg"]
                }
            },
            {
                id: "laser-vascular-pernas",
                nome: "Laser Vascular",
                imagem: "images/laser-vascular.jpg",
                descricao: "Trata os pequenos vasos vermelhos (telangiectasias) que aparecem comumente nas pernas e coxas.",
                beneficios: ["Elimina os vasinhos", "Pele com tom mais uniforme", "Procedimento rápido"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O laser vascular é a tecnologia mais indicada para tratar os pequenos vasos (telangiectasias) que surgem nas pernas, eliminando-os de forma segura e eficaz para uma pele de tom uniforme.",
                    galeriaImagens: ["images/galeria-vascular-1.jpg", "images/galeria-vascular-2.jpg"]
                }
            }
        ]
    },
    pes: {
        titulo: "Tratamentos para os Pés",
        queixas: ["Ressecamento", "Fissuras", "Pele grossa (hiperqueratose)"],
        tratamentos: [
            {
                id: "peeling-pes",
                nome: "Peeling Químico",
                imagem: "images/peeling-pes.jpg",
                descricao: "Aplicação de ácidos para promover uma esfoliação profunda, removendo a camada de células mortas e pele grossa.",
                beneficios: ["Pés mais macios e lisos", "Melhora de calosidades", "Renovação da pele"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O peeling químico para os pés promove uma esfoliação intensa para remover a pele grossa e as células mortas, sendo um excelente tratamento para calosidades e ressecamento.",
                    galeriaImagens: ["images/galeria-peeling-pes-1.jpg", "images/galeria-peeling-pes-2.jpg"]
                }
            },
            {
                id: "skinbooster-pes",
                nome: "Hidratação Injetável (Skinbooster)",
                imagem: "images/skinbooster-pes.jpg",
                descricao: "Para casos de ressecamento extremo, o Skinbooster injeta ácido hialurônico na pele dos pés para uma hidratação profunda.",
                beneficios: ["Combate o ressecamento severo", "Previne fissuras e rachaduras", "Devolve o viço à pele"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Para um nível superior de hidratação, o Skinbooster injeta ácido hialurônico diretamente na pele dos pés, tratando o ressecamento severo de dentro para fora e prevenindo fissuras.",
                    galeriaImagens: ["images/galeria-skin-pes-1.jpg", "images/galeria-skin-pes-2.jpg"]
                }
            }
        ]
    }
};