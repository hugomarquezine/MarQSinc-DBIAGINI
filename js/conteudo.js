// js/conteudo.js (VERSÃO ATUALIZADA COM IDs E DETALHES PARA O 'SAIBA MAIS')

const dadosClinica = {
    // --- PONTOS DO MAPA FACIAL ---
    "couro-cabeludo": {
        titulo: "Tratamentos para Couro Cabeludo",
        queixas: ["Queda de cabelo", "Rarefação", "Coceira", "Oleosidade"],
        tratamentos: [
            { 
                id: "microagulhamento-capilar",
                nome: "Microagulhamento", 
                imagem: "images/procedimentos/microagulhamento.webp", 
                descricao: "Técnica que cria microcanais no couro cabeludo para estimular a circulação e o crescimento capilar.", 
                beneficios: ["Estimula a circulação", "Melhora a absorção de medicamentos", "Promove o crescimento"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O microagulhamento no couro cabeludo cria microcanais que estimulam a circulação sanguínea, melhoram a absorção de medicamentos e promovem o crescimento capilar de forma natural.",
                    galeriaImagens: ["images/galeria/microagulhamento-1.webp", "images/galeria/microagulhamento-2.webp"]
                }
            },
            { 
                id: "exossomos-capilar",
                nome: "Exossomos", 
                imagem: "images/procedimentos/exossomos.webp", 
                descricao: "Tratamento com exossomos para regeneração celular e melhora da saúde do couro cabeludo.", 
                beneficios: ["Regeneração celular", "Melhora a saúde do couro cabeludo", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os exossomos são tratamentos inovadores que promovem a regeneração celular e melhoram a saúde do couro cabeludo, proporcionando resultados naturais e duradouros.",
                    galeriaImagens: ["images/galeria/exossomos-1.webp", "images/galeria/exossomos-2.webp"]
                }
            },
            { 
                id: "pdrn-capilar",
                nome: "PDRN", 
                imagem: "images/procedimentos/pdrn.webp", 
                descricao: "Tratamento com PDRN para regeneração celular e melhora da saúde do couro cabeludo.", 
                beneficios: ["Regeneração celular", "Melhora a saúde do couro cabeludo", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O PDRN é um tratamento inovador que promove a regeneração celular e melhora a saúde do couro cabeludo, proporcionando resultados naturais e duradouros.",
                    galeriaImagens: ["images/galeria/pdrn-1.webp", "images/galeria/pdrn-2.webp"]
                }
            },
            { 
                id: "mesoterapia-capilar",
                nome: "Mesoterapia Capilar", 
                imagem: "images/procedimentos/mesoterapia.webp", 
                descricao: "Técnica que insere medicamentos diretamente no couro cabeludo para tratar queda e estimular o crescimento.", 
                beneficios: ["Ação direta no folículo", "Resultados mais rápidos", "Procedimento seguro"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A mesoterapia capilar é uma técnica que insere medicamentos diretamente no couro cabeludo para tratar queda e estimular o crescimento, proporcionando resultados mais rápidos e eficazes.",
                    galeriaImagens: ["images/galeria/mesoterapia-1.webp", "images/galeria/mesoterapia-2.webp"]
                }
            },
            { 
                id: "aquapure-capilar",
                nome: "Aquapure", 
                imagem: "images/procedimentos/aquapure.webp", 
                descricao: "Tratamento de hidratação profunda que melhora a qualidade do couro cabeludo.", 
                beneficios: ["Hidratação profunda", "Melhora a textura", "Pele mais viçosa"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Aquapure é um tratamento de hidratação profunda que melhora a textura, o viço e a qualidade geral do couro cabeludo.",
                    galeriaImagens: ["images/galeria/aquapure-1.webp", "images/galeria/aquapure-2.webp"]
                }
            }
        ]
    },

    olhos: {
        titulo: "Tratamentos para Região dos Olhos",
        queixas: ["Olheiras", "Flacidez", "Linhas finas (pés de galinha)", "Bolsas"],
        tratamentos: [
            { 
                id: "volnewmer-olhos",
                nome: "Volnewmer", 
                imagem: "images/procedimentos/volnewmer.webp", 
                descricao: "Tecnologia de ultrassom que combina macro e microfoco para tratar gordura localizada e flacidez na região dos olhos.", 
                beneficios: ["Reduz gordura localizada", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Volnewmer é uma tecnologia avançada de ultrassom que atua tanto na camada de gordura quanto na pele, proporcionando um tratamento completo para a região dos olhos com resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/volnewmer-1.webp", "images/galeria/volnewmer-2.webp"]
                }
            },
            { 
                id: "ultraformer-olhos",
                nome: "Ultraformer MPT", 
                imagem: "images/procedimentos/ultraformer-olhos.webp", 
                descricao: "Ultrassom microfocado que promove um efeito lifting na área das pálpebras e sobrancelhas, tratando a flacidez.", 
                beneficios: ["Lifting de sobrancelhas", "Melhora a firmeza da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/LpiKp7jWn4A?si=0W2apgrAdmibtU-r",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro na área dos olhos.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            { 
                id: "botox-olhos",
                nome: "Toxina Botulínica (Botox®)", 
                imagem: "images/procedimentos/botox-olhos.webp", 
                descricao: "Relaxa a musculatura ao redor dos olhos para suavizar as linhas de expressão conhecidas como 'pés de galinha'.", 
                beneficios: ["Previne rugas futuras", "Aparência mais descansada", "Aplicação rápida"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Entenda como a toxina botulínica atua para relaxar os músculos responsáveis pelos 'pés de galinha', prevenindo a formação de rugas mais profundas e suavizando a expressão ao redor dos olhos.",
                    galeriaImagens: ["images/galeria-botox-olhos-1.webp", "images/galeria-botox-olhos-2.webp"]
                }
            },
            { 
                id: "laser-olhos",
                nome: "Laser", 
                imagem: "images/procedimentos/laser.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno na região dos olhos.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser na região dos olhos é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "skinbooster-olhos",
                nome: "SkinBooster", 
                imagem: "images/procedimentos/skinbooster.webp", 
                descricao: "Hidratação profunda com ácido hialurônico para melhorar a qualidade da pele na região dos olhos.", 
                beneficios: ["Hidratação profunda", "Melhora a textura", "Pele mais viçosa"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O SkinBooster é um tratamento de hidratação profunda que injeta ácido hialurônico na pele, melhorando a textura, o viço e a qualidade geral da pele na região dos olhos.",
                    galeriaImagens: ["images/galeria/skinbooster-1.webp", "images/galeria/skinbooster-2.webp"]
                }
            },
            { 
                id: "endymed-olhos",
                nome: "Endymed", 
                imagem: "images/procedimentos/endymed.webp", 
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele na região dos olhos.", 
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno na região dos olhos.",
                    galeriaImagens: ["images/galeria/endymed-1.webp", "images/galeria/endymed-2.webp"]
                }
            },
            { 
                id: "microagulhamento-olhos",
                nome: "Microagulhamento", 
                imagem: "images/procedimentos/microagulhamento.webp", 
                descricao: "Técnica que cria microcanais na pele para estimular a produção de colágeno na região dos olhos.", 
                beneficios: ["Estimula o colágeno", "Melhora a textura", "Reduz linhas finas"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O microagulhamento é uma técnica que cria microcanais na pele para estimular a produção natural de colágeno, melhorando a textura e reduzindo linhas finas na região dos olhos.",
                    galeriaImagens: ["images/galeria/microagulhamento-1.webp", "images/galeria/microagulhamento-2.webp"]
                }
            },
            { 
                id: "profhilo-olhos",
                nome: "Profhilo", 
                imagem: "images/procedimentos/profhilo.webp", 
                descricao: "Bioestimulador que melhora a qualidade da pele e trata a flacidez com resultados naturais na região dos olhos.", 
                beneficios: ["Melhora a qualidade da pele", "Trata a flacidez", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Profhilo é um bioestimulador inovador que melhora a qualidade da pele, trata a flacidez e proporciona um rejuvenescimento natural e harmonioso na região dos olhos.",
                    galeriaImagens: ["images/galeria/profhilo-1.webp", "images/galeria/profhilo-2.webp"]
                }
            },
            { 
                id: "exossomos-olhos",
                nome: "Exossomos/PDRN", 
                imagem: "images/procedimentos/exossomos.webp", 
                descricao: "Tratamento com exossomos e PDRN para regeneração celular e melhora da qualidade da pele na região dos olhos.", 
                beneficios: ["Regeneração celular", "Melhora a qualidade da pele", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os exossomos e PDRN são tratamentos inovadores que promovem a regeneração celular e melhoram a qualidade da pele na região dos olhos, proporcionando resultados naturais e duradouros.",
                    galeriaImagens: ["images/galeria/exossomos-1.webp", "images/galeria/exossomos-2.webp"]
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
                nome: "Preenchimento com Ácido Hialurônico", 
                imagem: "images/procedimentos/preenchimento-labial.webp", 
                descricao: "Uso de ácido hialurônico para dar volume, contorno e hidratação aos lábios de forma natural.", 
                beneficios: ["Volume e contorno definidos", "Hidratação profunda", "Resultados personalizados"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Descubra as diferentes técnicas de preenchimento labial, desde a hidratação até a volumização, e como o procedimento pode realçar a beleza dos lábios de maneira natural e harmoniosa.",
                    galeriaImagens: ["images/galeria-labios-1.webp", "images/galeria-labios-2.webp"]
                }
            },
            { 
                id: "skinbooster-labios",
                nome: "SkinBooster", 
                imagem: "images/procedimentos/skinbooster.webp", 
                descricao: "Hidratação profunda com ácido hialurônico para melhorar a qualidade da pele dos lábios.", 
                beneficios: ["Hidratação profunda", "Melhora a textura", "Pele mais viçosa"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O SkinBooster é um tratamento de hidratação profunda que injeta ácido hialurônico na pele, melhorando a textura, o viço e a qualidade geral da pele dos lábios.",
                    galeriaImagens: ["images/galeria/skinbooster-1.webp", "images/galeria/skinbooster-2.webp"]
                }
            },
            { 
                id: "endymed-labios",
                nome: "Endymed", 
                imagem: "images/procedimentos/endymed.webp", 
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele dos lábios.", 
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno nos lábios.",
                    galeriaImagens: ["images/galeria/endymed-1.webp", "images/galeria/endymed-2.webp"]
                }
            },
            { 
                id: "laser-labios",
                nome: "Laser", 
                imagem: "images/procedimentos/laser.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno nos lábios.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser nos lábios é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "ultraformer-labios",
                nome: "Ultraformer MPT", 
                imagem: "images/procedimentos/ultraformer.webp", 
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele dos lábios.", 
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro nos lábios.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            { 
                id: "profhilo-labios",
                nome: "Profhilo", 
                imagem: "images/procedimentos/profhilo.webp", 
                descricao: "Bioestimulador que melhora a qualidade da pele e trata a flacidez com resultados naturais nos lábios.", 
                beneficios: ["Melhora a qualidade da pele", "Trata a flacidez", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Profhilo é um bioestimulador inovador que melhora a qualidade da pele, trata a flacidez e proporciona um rejuvenescimento natural e harmonioso dos lábios.",
                    galeriaImagens: ["images/galeria/profhilo-1.webp", "images/galeria/profhilo-2.webp"]
                }
            },
            { 
                id: "microagulhamento-labios",
                nome: "Microagulhamento", 
                imagem: "images/procedimentos/microagulhamento.webp", 
                descricao: "Técnica que cria microcanais na pele para estimular a produção de colágeno nos lábios.", 
                beneficios: ["Estimula o colágeno", "Melhora a textura", "Reduz linhas finas"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O microagulhamento é uma técnica que cria microcanais na pele para estimular a produção natural de colágeno, melhorando a textura e reduzindo linhas finas nos lábios.",
                    galeriaImagens: ["images/galeria/microagulhamento-1.webp", "images/galeria/microagulhamento-2.webp"]
                }
            },
            { 
                id: "hidralips",
                nome: "Hidralips", 
                imagem: "images/procedimentos/hidralips.webp", 
                descricao: "Tratamento específico para hidratação e rejuvenescimento dos lábios.", 
                beneficios: ["Hidratação profunda", "Melhora a textura", "Rejuvenescimento"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Hidralips é um tratamento específico para hidratação e rejuvenescimento dos lábios, proporcionando uma aparência mais jovem e hidratada.",
                    galeriaImagens: ["images/galeria/hidralips-1.webp", "images/galeria/hidralips-2.webp"]
                }
            }
        ]
    },

    orelhas: {
        titulo: "Tratamentos para Orelhas",
        queixas: ["Envelhecimento do lóbulo", "Flacidez", "'Rasgo' por uso de brinco"],
        tratamentos: [
            { 
                id: "laser-orelhas",
                nome: "Laser", 
                imagem: "images/procedimentos/laser.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno nas orelhas.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser nas orelhas é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "preenchimento-orelhas",
                nome: "Preenchimento com Ácido Hialurônico", 
                imagem: "images/procedimentos/lobulo.webp", 
                descricao: "Com ácido hialurônico, devolve o volume e a firmeza ao lóbulo da orelha, que murcha com o tempo.", 
                beneficios: ["Lóbulo mais jovem e preenchido", "Melhora o suporte para brincos", "Procedimento rápido"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento do lóbulo é um procedimento simples e rápido que restaura o volume e a firmeza da orelha, melhorando a sustentação de brincos e rejuvenescendo a aparência.",
                    galeriaImagens: ["images/galeria-preench-olhos-1.webp", "images/galeria-preench-olhos-2.webp"]
                }
            },
            { 
                id: "cirurgia-furo-alargado",
                nome: "Cirurgia para Furo Alargado", 
                imagem: "images/procedimentos/cirurgia.webp", 
                descricao: "Procedimento cirúrgico para correção de furos alargados ou rasgados nas orelhas.", 
                beneficios: ["Corrige furos alargados", "Melhora a aparência", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A cirurgia para furo alargado é um procedimento que corrige furos rasgados ou alargados nas orelhas, restaurando a aparência natural e permitindo o uso de brincos novamente.",
                    galeriaImagens: ["images/galeria/cirurgia-1.webp", "images/galeria/cirurgia-2.webp"]
                }
            }
        ]
    },

    pescoco: {
        titulo: "Tratamentos para Pescoço",
        queixas: ["Flacidez", "Rugas horizontais (linhas de colar)"],
        tratamentos: [
            { 
                id: "volnewmer-pescoco",
                nome: "Volnewmer", 
                imagem: "images/procedimentos/volnewmer.webp", 
                descricao: "Tecnologia de ultrassom que combina macro e microfoco para tratar gordura localizada e flacidez no pescoço.", 
                beneficios: ["Reduz gordura localizada", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Volnewmer é uma tecnologia avançada de ultrassom que atua tanto na camada de gordura quanto na pele, proporcionando um tratamento completo para o pescoço com resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/volnewmer-1.webp", "images/galeria/volnewmer-2.webp"]
                }
            },
            { 
                id: "ultraformer-pescoco",
                nome: "Ultraformer MPT", 
                imagem: "images/procedimentos/ultraformer-pescoco.webp", 
                descricao: "Promove um lifting não cirúrgico, tratando a flacidez e melhorando o contorno do pescoço.", 
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno a longo prazo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Veja como o Ultraformer MPT atua nas camadas profundas da pele do pescoço para tratar a flacidez, reduzir a papada e definir o contorno, promovendo um rejuvenescimento notável.",
                    galeriaImagens: ["images/galeria-pescoco-1.webp", "images/galeria-pescoco-2.webp"]
                }
            },
            { 
                id: "laser-pescoco",
                nome: "Laser", 
                imagem: "images/procedimentos/laser.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno no pescoço.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser no pescoço é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "sculptra-pescoco",
                nome: "Sculptra", 
                imagem: "images/procedimentos/sculptra.webp", 
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez do pescoço.", 
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Sculptra é um bioestimulador de colágeno que atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura no pescoço.",
                    galeriaImagens: ["images/galeria/sculptra-1.webp", "images/galeria/sculptra-2.webp"]
                }
            },
            { 
                id: "radiesse-pescoco",
                nome: "Radiesse", 
                imagem: "images/procedimentos/radiesse.webp", 
                descricao: "Bioestimulador que combina preenchimento imediato com estímulo de colágeno para o pescoço.", 
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Radiesse oferece um preenchimento imediato com ácido hialurônico e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para o pescoço.",
                    galeriaImagens: ["images/galeria/radiesse-1.webp", "images/galeria/radiesse-2.webp"]
                }
            },
            { 
                id: "endymed-pescoco",
                nome: "Endymed", 
                imagem: "images/procedimentos/endymed.webp", 
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele do pescoço.", 
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno no pescoço.",
                    galeriaImagens: ["images/galeria/endymed-1.webp", "images/galeria/endymed-2.webp"]
                }
            },
            { 
                id: "skinbooster-pescoco",
                nome: "SkinBooster", 
                imagem: "images/procedimentos/skinbooster.webp", 
                descricao: "Hidratação profunda com ácido hialurônico para melhorar a qualidade da pele do pescoço.", 
                beneficios: ["Hidratação profunda", "Melhora a textura", "Pele mais viçosa"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O SkinBooster é um tratamento de hidratação profunda que injeta ácido hialurônico na pele, melhorando a textura, o viço e a qualidade geral da pele do pescoço.",
                    galeriaImagens: ["images/galeria/skinbooster-1.webp", "images/galeria/skinbooster-2.webp"]
                }
            },
            { 
                id: "soprano-pescoco",
                nome: "Soprano", 
                imagem: "images/procedimentos/soprano.webp", 
                descricao: "Laser de diodo que trata gordura localizada e melhora a qualidade da pele do pescoço.", 
                beneficios: ["Reduz gordura localizada", "Melhora a textura", "Não invasivo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Soprano é um laser de diodo que atua de forma não invasiva para reduzir a gordura localizada e melhorar a qualidade da pele do pescoço, proporcionando resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/soprano-1.webp", "images/galeria/soprano-2.webp"]
                }
            },
            { 
                id: "exossomos-pescoco",
                nome: "Exossomos/PDRN/Exocube", 
                imagem: "images/procedimentos/exossomos.webp", 
                descricao: "Tratamento com exossomos, PDRN e Exocube para regeneração celular e melhora da qualidade da pele do pescoço.", 
                beneficios: ["Regeneração celular", "Melhora a qualidade da pele", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os exossomos, PDRN e Exocube são tratamentos inovadores que promovem a regeneração celular e melhoram a qualidade da pele do pescoço, proporcionando resultados naturais e duradouros.",
                    galeriaImagens: ["images/galeria/exossomos-1.webp", "images/galeria/exossomos-2.webp"]
                }
            },
            { 
                id: "microagulhamento-pescoco",
                nome: "Microagulhamento", 
                imagem: "images/procedimentos/microagulhamento.webp", 
                descricao: "Técnica que cria microcanais na pele para estimular a produção de colágeno no pescoço.", 
                beneficios: ["Estimula o colágeno", "Melhora a textura", "Reduz linhas finas"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O microagulhamento é uma técnica que cria microcanais na pele para estimular a produção natural de colágeno, melhorando a textura e reduzindo linhas finas no pescoço.",
                    galeriaImagens: ["images/galeria/microagulhamento-1.webp", "images/galeria/microagulhamento-2.webp"]
                }
            },
            { 
                id: "profhilo-pescoco",
                nome: "Profhilo", 
                imagem: "images/procedimentos/profhilo.webp", 
                descricao: "Bioestimulador que melhora a qualidade da pele e trata a flacidez com resultados naturais no pescoço.", 
                beneficios: ["Melhora a qualidade da pele", "Trata a flacidez", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Profhilo é um bioestimulador inovador que melhora a qualidade da pele, trata a flacidez e proporciona um rejuvenescimento natural e harmonioso do pescoço.",
                    galeriaImagens: ["images/galeria/profhilo-1.webp", "images/galeria/profhilo-2.webp"]
                }
            }
        ]
    },

    colo: {
        titulo: "Tratamentos para Colo / Décolleté",
        queixas: ["Rugas finas ('sleep lines')", "Manchas solares", "Flacidez"],
        tratamentos: [
            { 
                id: "volnewmer",
                nome: "Volnewmer", 
                imagem: "images/procedimentos/volnewmer.webp", 
                descricao: "Tecnologia de ultrassom que combina macro e microfoco para tratar gordura localizada e flacidez no colo.", 
                beneficios: ["Reduz gordura localizada", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Volnewmer é uma tecnologia avançada de ultrassom que atua tanto na camada de gordura quanto na pele, proporcionando um tratamento completo para o colo com resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/volnewmer-1.webp", "images/galeria/volnewmer-2.webp"]
                }
            },
            { 
                id: "ultraformer",
                nome: "Ultraformer MPT", 
                imagem: "images/procedimentos/ultraformer.webp", 
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele do colo.", 
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro no colo.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            { 
                id: "laser",
                nome: "Laser", 
                imagem: "images/procedimentos/laser.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno no colo.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser no colo é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "sculptra",
                nome: "Sculptra", 
                imagem: "images/procedimentos/sculptra.webp", 
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez do colo.", 
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Sculptra é um bioestimulador de colágeno que atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura.",
                    galeriaImagens: ["images/galeria/sculptra-1.webp", "images/galeria/sculptra-2.webp"]
                }
            },
            { 
                id: "radiesse",
                nome: "Radiesse", 
                imagem: "images/procedimentos/radiesse.webp", 
                descricao: "Bioestimulador que combina preenchimento imediato com estímulo de colágeno para o colo.", 
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Radiesse oferece um preenchimento imediato com ácido hialurônico e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para o colo.",
                    galeriaImagens: ["images/galeria/radiesse-1.webp", "images/galeria/radiesse-2.webp"]
                }
            },
            { 
                id: "skinbooster",
                nome: "SkinBooster", 
                imagem: "images/procedimentos/skinbooster.webp", 
                descricao: "Hidratação profunda com ácido hialurônico para melhorar a qualidade da pele do colo.", 
                beneficios: ["Hidratação profunda", "Melhora a textura", "Pele mais viçosa"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O SkinBooster é um tratamento de hidratação profunda que injeta ácido hialurônico na pele, melhorando a textura, o viço e a qualidade geral da pele do colo.",
                    galeriaImagens: ["images/galeria/skinbooster-1.webp", "images/galeria/skinbooster-2.webp"]
                }
            },
            { 
                id: "profhilo",
                nome: "Profhilo", 
                imagem: "images/procedimentos/profhilo.webp", 
                descricao: "Bioestimulador que melhora a qualidade da pele e trata a flacidez com resultados naturais.", 
                beneficios: ["Melhora a qualidade da pele", "Trata a flacidez", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Profhilo é um bioestimulador inovador que melhora a qualidade da pele, trata a flacidez e proporciona um rejuvenescimento natural e harmonioso do colo.",
                    galeriaImagens: ["images/galeria/profhilo-1.webp", "images/galeria/profhilo-2.webp"]
                }
            }
        ]
    },

    papada: {
        titulo: "Tratamentos para Papada",
        queixas: ["Gordura localizada", "Flacidez", "Perda de definição do contorno"],
        tratamentos: [
            { 
                id: "ultraformer-papada",
                nome: "Ultraformer MPT", 
                imagem: "images/procedimentos/ultraformer-abdomen.webp", 
                descricao: "Ultrassom microfocado que atua na gordura e na pele da papada, promovendo um contorno mais definido.", 
                beneficios: ["Reduz a gordura localizada", "Melhora a firmeza da pele", "Define o contorno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é uma tecnologia avançada que combina ultrassom microfocado para tratar tanto a gordura quanto a flacidez da papada, resultando em um contorno mais definido e jovem.",
                    galeriaImagens: ["images/galeria-papada-1.webp", "images/galeria-papada-2.webp"]
                }
            },
            { 
                id: "volnewmer-papada",
                nome: "Volnewmer", 
                imagem: "images/procedimentos/volnewmer.webp", 
                descricao: "Tecnologia de ultrassom que combina macro e microfoco para tratar gordura localizada e flacidez na papada.", 
                beneficios: ["Reduz gordura localizada", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Volnewmer é uma tecnologia avançada de ultrassom que atua tanto na camada de gordura quanto na pele, proporcionando um tratamento completo para a papada com resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/volnewmer-1.webp", "images/galeria/volnewmer-2.webp"]
                }
            },
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
                id: "endymed-papada",
                nome: "Endymed", 
                imagem: "images/procedimentos/endymed.webp", 
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele da papada.", 
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno na papada.",
                    galeriaImagens: ["images/galeria/endymed-1.webp", "images/galeria/endymed-2.webp"]
                }
            },
            { 
                id: "laser-papada",
                nome: "Laser", 
                imagem: "images/procedimentos/laser.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno na papada.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser na papada é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "sculptra-papada",
                nome: "Sculptra", 
                imagem: "images/procedimentos/sculptra.webp", 
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez da papada.", 
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Sculptra é um bioestimulador de colágeno que atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura na papada.",
                    galeriaImagens: ["images/galeria/sculptra-1.webp", "images/galeria/sculptra-2.webp"]
                }
            },
            { 
                id: "radiesse-papada",
                nome: "Radiesse", 
                imagem: "images/procedimentos/radiesse.webp", 
                descricao: "Bioestimulador que combina preenchimento imediato com estímulo de colágeno para a papada.", 
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Radiesse oferece um preenchimento imediato com ácido hialurônico e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para a papada.",
                    galeriaImagens: ["images/galeria/radiesse-1.webp", "images/galeria/radiesse-2.webp"]
                }
            },
            { 
                id: "exossomos-papada",
                nome: "Exossomos/PDRN/Exocube", 
                imagem: "images/procedimentos/exossomos.webp", 
                descricao: "Tratamento com exossomos, PDRN e Exocube para regeneração celular e melhora da qualidade da pele da papada.", 
                beneficios: ["Regeneração celular", "Melhora a qualidade da pele", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os exossomos, PDRN e Exocube são tratamentos inovadores que promovem a regeneração celular e melhoram a qualidade da pele da papada, proporcionando resultados naturais e duradouros.",
                    galeriaImagens: ["images/galeria/exossomos-1.webp", "images/galeria/exossomos-2.webp"]
                }
            },
            { 
                id: "microagulhamento-papada",
                nome: "Microagulhamento", 
                imagem: "images/procedimentos/microagulhamento.webp", 
                descricao: "Técnica que cria microcanais na pele para estimular a produção de colágeno na papada.", 
                beneficios: ["Estimula o colágeno", "Melhora a textura", "Reduz linhas finas"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O microagulhamento é uma técnica que cria microcanais na pele para estimular a produção natural de colágeno, melhorando a textura e reduzindo linhas finas na papada.",
                    galeriaImagens: ["images/galeria/microagulhamento-1.webp", "images/galeria/microagulhamento-2.webp"]
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
                imagem: "images/procedimentos/tratamento-botox-testa.webp",
                descricao: "A aplicação de toxina botulínica é o tratamento padrão-ouro para suavizar as rugas dinâmicas da testa, que se formam ao levantar as sobrancelhas.",
                beneficios: ["Atenua linhas de expressão", "Previne a formação de rugas permanentes", "Pode arquear levemente as sobrancelhas"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Entenda o mecanismo de ação da toxina botulínica para o tratamento das rugas da testa, um procedimento rápido e eficaz que proporciona uma aparência mais lisa e rejuvenescida.",
                    galeriaImagens: ["images/galeria-botox-testa-1.webp", "images/galeria-botox-testa-2.webp"]
                }
            },
            {
                id: "volnewmer-testa",
                nome: "Volnewmer",
                imagem: "images/procedimentos/volnewmer.webp",
                descricao: "Tecnologia de ultrassom que combina macro e microfoco para tratar gordura localizada e flacidez na testa.",
                beneficios: ["Reduz gordura localizada", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Volnewmer é uma tecnologia avançada de ultrassom que atua tanto na camada de gordura quanto na pele, proporcionando um tratamento completo para a testa com resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/volnewmer-1.webp", "images/galeria/volnewmer-2.webp"]
                }
            },
            {
                id: "ultraformer-testa",
                nome: "Ultraformer MPT",
                imagem: "images/procedimentos/ultraformer.webp",
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele da testa.",
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro na testa.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            {
                id: "laser-testa",
                nome: "Laser",
                imagem: "images/procedimentos/laser.webp",
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno na testa.",
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser na testa é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            {
                id: "endymed-testa",
                nome: "Endymed",
                imagem: "images/procedimentos/endymed.webp",
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele da testa.",
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno na testa.",
                    galeriaImagens: ["images/galeria/endymed-1.webp", "images/galeria/endymed-2.webp"]
                }
            },
            {
                id: "aquapure-testa",
                nome: "Aquapure",
                imagem: "images/procedimentos/aquapure.webp",
                descricao: "Tratamento de hidratação profunda que melhora a qualidade da pele da testa.",
                beneficios: ["Hidratação profunda", "Melhora a textura", "Pele mais viçosa"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Aquapure é um tratamento de hidratação profunda que melhora a textura, o viço e a qualidade geral da pele da testa.",
                    galeriaImagens: ["images/galeria/aquapure-1.webp", "images/galeria/aquapure-2.webp"]
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
                imagem: "images/procedimentos/tratamento-botox-glabela.webp",
                descricao: "É o tratamento mais eficaz para relaxar os músculos que formam a ruga vertical entre as sobrancelhas.",
                beneficios: ["Suaviza a 'ruga do bravo'", "Aparência mais relaxada e positiva", "Resultados em poucos dias"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A ruga da 'bravura' é tratada eficazmente com a toxina botulínica, que relaxa a musculatura local e suaviza a expressão, conferindo uma aparência mais serena e descansada.",
                    galeriaImagens: ["images/galeria-glabela-1.webp", "images/galeria-glabela-2.webp"]
                }
            },
            {
                id: "laser-glabela",
                nome: "Laser",
                imagem: "images/procedimentos/laser.webp",
                descricao: "Tratamento a laser para uniformizar o tom da pele e tratar manchas na região da glabela.",
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser na glabela é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            {
                id: "volnewmer-glabela",
                nome: "Volnewmer",
                imagem: "images/procedimentos/volnewmer.webp",
                descricao: "Tecnologia de ultrassom que combina macro e microfoco para tratar gordura localizada e flacidez na glabela.",
                beneficios: ["Reduz gordura localizada", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Volnewmer é uma tecnologia avançada de ultrassom que atua tanto na camada de gordura quanto na pele, proporcionando um tratamento completo para a glabela com resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/volnewmer-1.webp", "images/galeria/volnewmer-2.webp"]
                }
            },
            {
                id: "ultraformer-glabela",
                nome: "Ultraformer MPT",
                imagem: "images/procedimentos/ultraformer.webp",
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele da glabela.",
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro na glabela.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            {
                id: "aquapure-glabela",
                nome: "Aquapure",
                imagem: "images/procedimentos/aquapure.webp",
                descricao: "Tratamento de hidratação profunda que melhora a qualidade da pele da glabela.",
                beneficios: ["Hidratação profunda", "Melhora a textura", "Pele mais viçosa"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Aquapure é um tratamento de hidratação profunda que melhora a textura, o viço e a qualidade geral da pele da glabela.",
                    galeriaImagens: ["images/galeria/aquapure-1.webp", "images/galeria/aquapure-2.webp"]
                }
            },
            {
                id: "soprano-glabela",
                nome: "Soprano",
                imagem: "images/procedimentos/soprano.webp",
                descricao: "Laser de diodo que trata gordura localizada e melhora a qualidade da pele da glabela.",
                beneficios: ["Reduz gordura localizada", "Melhora a textura", "Não invasivo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Soprano é um laser de diodo que atua de forma não invasiva para reduzir a gordura localizada e melhorar a qualidade da pele da glabela, proporcionando resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/soprano-1.webp", "images/galeria/soprano-2.webp"]
                }
            },
            {
                id: "microagulhamento-glabela",
                nome: "Microagulhamento",
                imagem: "images/procedimentos/microagulhamento.webp",
                descricao: "Técnica que cria microcanais na pele para estimular a produção de colágeno na glabela.",
                beneficios: ["Estimula o colágeno", "Melhora a textura", "Reduz linhas finas"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O microagulhamento é uma técnica que cria microcanais na pele para estimular a produção natural de colágeno, melhorando a textura e reduzindo linhas finas na glabela.",
                    galeriaImagens: ["images/galeria/microagulhamento-1.webp", "images/galeria/microagulhamento-2.webp"]
                }
            }
        ]
    },

    bochechas: {
        titulo: "Tratamentos para Bochechas e Região Malar",
        queixas: ["Perda de sustentação", "Rosto com aspecto 'derretido'", "Sulco nasogeniano ('bigode chinês')", "Falta de definição"],
        tratamentos: [
            {
                id: "volnewmer-bochechas",
                nome: "Volnewmer",
                imagem: "images/procedimentos/volnewmer.webp",
                descricao: "Tecnologia de ultrassom que combina macro e microfoco para tratar gordura localizada e flacidez nas bochechas.",
                beneficios: ["Reduz gordura localizada", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Volnewmer é uma tecnologia avançada de ultrassom que atua tanto na camada de gordura quanto na pele, proporcionando um tratamento completo para as bochechas com resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/volnewmer-1.webp", "images/galeria/volnewmer-2.webp"]
                }
            },
            {
                id: "ultraformer-bochechas",
                nome: "Ultraformer MPT",
                imagem: "images/procedimentos/ultraformer.webp",
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele das bochechas.",
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro nas bochechas.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            {
                id: "laser-bochechas",
                nome: "Laser",
                imagem: "images/procedimentos/laser.webp",
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno nas bochechas.",
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser nas bochechas é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            {
                id: "sculptra-bochechas",
                nome: "Sculptra",
                imagem: "images/procedimentos/sculptra.webp",
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez das bochechas.",
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Sculptra é um bioestimulador de colágeno que atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura nas bochechas.",
                    galeriaImagens: ["images/galeria/sculptra-1.webp", "images/galeria/sculptra-2.webp"]
                }
            },
            {
                id: "radiesse-bochechas",
                nome: "Radiesse",
                imagem: "images/procedimentos/radiesse.webp",
                descricao: "Bioestimulador que combina preenchimento imediato com estímulo de colágeno para as bochechas.",
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Radiesse oferece um preenchimento imediato com ácido hialurônico e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para as bochechas.",
                    galeriaImagens: ["images/galeria/radiesse-1.webp", "images/galeria/radiesse-2.webp"]
                }
            },
            {
                id: "preenchimento-bochechas",
                nome: "Preenchimento com Ácido Hialurônico",
                imagem: "images/procedimentos/preenchimento-olhos.webp",
                descricao: "Aplicação de ácido hialurônico na região malar para restaurar o volume perdido, definir o contorno e criar um efeito lifting no rosto.",
                beneficios: ["Efeito lifting facial", "Rosto com contornos mais definidos", "Suavização do 'bigode chinês'"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento malar, ou 'Top Model Look', utiliza ácido hialurônico para redefinir as maçãs do rosto, proporcionando sustentação e um efeito lifting que rejuvenesce toda a face.",
                    galeriaImagens: ["images/galeria-preench-olhos-1.webp", "images/galeria-preench-olhos-2.webp"]
                }
            },
            {
                id: "endymed-bochechas",
                nome: "Endymed",
                imagem: "images/procedimentos/endymed.webp",
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele das bochechas.",
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno nas bochechas.",
                    galeriaImagens: ["images/galeria/endymed-1.webp", "images/galeria/endymed-2.webp"]
                }
            },
            {
                id: "skinbooster-bochechas",
                nome: "SkinBooster",
                imagem: "images/procedimentos/skinbooster.webp",
                descricao: "Hidratação profunda com ácido hialurônico para melhorar a qualidade da pele das bochechas.",
                beneficios: ["Hidratação profunda", "Melhora a textura", "Pele mais viçosa"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O SkinBooster é um tratamento de hidratação profunda que injeta ácido hialurônico na pele, melhorando a textura, o viço e a qualidade geral da pele das bochechas.",
                    galeriaImagens: ["images/galeria/skinbooster-1.webp", "images/galeria/skinbooster-2.webp"]
                }
            },
            {
                id: "soprano-bochechas",
                nome: "Soprano",
                imagem: "images/procedimentos/soprano.webp",
                descricao: "Laser de diodo que trata gordura localizada e melhora a qualidade da pele das bochechas.",
                beneficios: ["Reduz gordura localizada", "Melhora a textura", "Não invasivo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Soprano é um laser de diodo que atua de forma não invasiva para reduzir a gordura localizada e melhorar a qualidade da pele das bochechas, proporcionando resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/soprano-1.webp", "images/galeria/soprano-2.webp"]
                }
            },
            {
                id: "exossomos-bochechas",
                nome: "Exossomos/PDRN/Exocube",
                imagem: "images/procedimentos/exossomos.webp",
                descricao: "Tratamento com exossomos, PDRN e Exocube para regeneração celular e melhora da qualidade da pele das bochechas.",
                beneficios: ["Regeneração celular", "Melhora a qualidade da pele", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os exossomos, PDRN e Exocube são tratamentos inovadores que promovem a regeneração celular e melhoram a qualidade da pele das bochechas, proporcionando resultados naturais e duradouros.",
                    galeriaImagens: ["images/galeria/exossomos-1.webp", "images/galeria/exossomos-2.webp"]
                }
            },
            {
                id: "microagulhamento-bochechas",
                nome: "Microagulhamento",
                imagem: "images/procedimentos/microagulhamento.webp",
                descricao: "Técnica que cria microcanais na pele para estimular a produção de colágeno nas bochechas.",
                beneficios: ["Estimula o colágeno", "Melhora a textura", "Reduz linhas finas"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O microagulhamento é uma técnica que cria microcanais na pele para estimular a produção natural de colágeno, melhorando a textura e reduzindo linhas finas nas bochechas.",
                    galeriaImagens: ["images/galeria/microagulhamento-1.webp", "images/galeria/microagulhamento-2.webp"]
                }
            },
            {
                id: "aquapure-bochechas",
                nome: "Aquapure",
                imagem: "images/procedimentos/aquapure.webp",
                descricao: "Tratamento de hidratação profunda que melhora a qualidade da pele das bochechas.",
                beneficios: ["Hidratação profunda", "Melhora a textura", "Pele mais viçosa"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Aquapure é um tratamento de hidratação profunda que melhora a textura, o viço e a qualidade geral da pele das bochechas.",
                    galeriaImagens: ["images/galeria/aquapure-1.webp", "images/galeria/aquapure-2.webp"]
                }
            },
            {
                id: "profhilo-bochechas",
                nome: "Profhilo",
                imagem: "images/procedimentos/profhilo.webp",
                descricao: "Bioestimulador que melhora a qualidade da pele e trata a flacidez com resultados naturais nas bochechas.",
                beneficios: ["Melhora a qualidade da pele", "Trata a flacidez", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Profhilo é um bioestimulador inovador que melhora a qualidade da pele, trata a flacidez e proporciona um rejuvenescimento natural e harmonioso das bochechas.",
                    galeriaImagens: ["images/galeria/profhilo-1.webp", "images/galeria/profhilo-2.webp"]
                }
            }
        ]
    },

    nariz: {
        titulo: "Tratamentos para o Nariz",
        queixas: ["Poros dilatados", "Vasinhos", "Ponta caída", "Dorso irregular"],
        tratamentos: [
            {
                id: "laser-nariz",
                nome: "Laser",
                imagem: "images/procedimentos/laser.webp",
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno no nariz.",
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser no nariz é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            {
                id: "botox-nariz",
                nome: "Toxina Botulínica (Botox®)",
                imagem: "images/procedimentos/botox.webp",
                descricao: "Aplicação de toxina botulínica para relaxar a musculatura nasal e suavizar linhas de expressão.",
                beneficios: ["Suaviza linhas de expressão", "Melhora a aparência", "Aplicação rápida"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "A toxina botulínica no nariz pode ser utilizada para relaxar a musculatura nasal e suavizar linhas de expressão, proporcionando uma aparência mais harmoniosa.",
                    galeriaImagens: ["images/galeria-botox-olhos-1.webp", "images/galeria-botox-olhos-2.webp"]
                }
            },
            {
                id: "microagulhamento-nariz",
                nome: "Microagulhamento",
                imagem: "images/procedimentos/microagulhamento.webp",
                descricao: "Técnica que cria microcanais na pele para estimular a produção de colágeno no nariz.",
                beneficios: ["Estimula o colágeno", "Melhora a textura", "Reduz poros dilatados"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O microagulhamento é uma técnica que cria microcanais na pele para estimular a produção natural de colágeno, melhorando a textura e reduzindo poros dilatados no nariz.",
                    galeriaImagens: ["images/galeria/microagulhamento-1.webp", "images/galeria/microagulhamento-2.webp"]
                }
            },
            {
                id: "aquapure-nariz",
                nome: "Aquapure",
                imagem: "images/procedimentos/aquapure.webp",
                descricao: "Tratamento de hidratação profunda que melhora a qualidade da pele do nariz.",
                beneficios: ["Hidratação profunda", "Melhora a textura", "Pele mais viçosa"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Aquapure é um tratamento de hidratação profunda que melhora a textura, o viço e a qualidade geral da pele do nariz.",
                    galeriaImagens: ["images/galeria/aquapure-1.webp", "images/galeria/aquapure-2.webp"]
                }
            }
        ]
    },

    queixo: {
        titulo: "Tratamentos para Queixo e Contorno Mandibular",
        queixas: ["Queixo retraído", "Falta de definição na mandíbula", "Perda do contorno facial"],
        tratamentos: [
            {
                id: "volnewmer-queixo",
                nome: "Volnewmer",
                imagem: "images/procedimentos/volnewmer.webp",
                descricao: "Tecnologia de ultrassom que combina macro e microfoco para tratar gordura localizada e flacidez no queixo e contorno mandibular.",
                beneficios: ["Reduz gordura localizada", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Volnewmer é uma tecnologia avançada de ultrassom que atua tanto na camada de gordura quanto na pele, proporcionando um tratamento completo para o queixo e contorno mandibular com resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/volnewmer-1.webp", "images/galeria/volnewmer-2.webp"]
                }
            },
            {
                id: "ultraformer-queixo",
                nome: "Ultraformer MPT",
                imagem: "images/procedimentos/ultraformer.webp",
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele do queixo e contorno mandibular.",
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro no queixo e contorno mandibular.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            {
                id: "laser-queixo",
                nome: "Laser",
                imagem: "images/procedimentos/laser.webp",
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno no queixo e contorno mandibular.",
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser no queixo e contorno mandibular é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            {
                id: "sculptra-queixo",
                nome: "Sculptra",
                imagem: "images/procedimentos/sculptra.webp",
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez do queixo e contorno mandibular.",
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Sculptra é um bioestimulador de colágeno que atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura no queixo e contorno mandibular.",
                    galeriaImagens: ["images/galeria/sculptra-1.webp", "images/galeria/sculptra-2.webp"]
                }
            },
            {
                id: "radiesse-queixo",
                nome: "Radiesse",
                imagem: "images/procedimentos/radiesse.webp",
                descricao: "Bioestimulador que combina preenchimento imediato com estímulo de colágeno para o queixo e contorno mandibular.",
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Radiesse oferece um preenchimento imediato com ácido hialurônico e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para o queixo e contorno mandibular.",
                    galeriaImagens: ["images/galeria/radiesse-1.webp", "images/galeria/radiesse-2.webp"]
                }
            },
            {
                id: "preenchimento-queixo",
                nome: "Preenchimento com Ácido Hialurônico",
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
                id: "endymed-queixo",
                nome: "Endymed",
                imagem: "images/procedimentos/endymed.webp",
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele do queixo e contorno mandibular.",
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno no queixo e contorno mandibular.",
                    galeriaImagens: ["images/galeria/endymed-1.webp", "images/galeria/endymed-2.webp"]
                }
            },
            {
                id: "skinbooster-queixo",
                nome: "SkinBooster",
                imagem: "images/procedimentos/skinbooster.webp",
                descricao: "Hidratação profunda com ácido hialurônico para melhorar a qualidade da pele do queixo e contorno mandibular.",
                beneficios: ["Hidratação profunda", "Melhora a textura", "Pele mais viçosa"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O SkinBooster é um tratamento de hidratação profunda que injeta ácido hialurônico na pele, melhorando a textura, o viço e a qualidade geral da pele do queixo e contorno mandibular.",
                    galeriaImagens: ["images/galeria/skinbooster-1.webp", "images/galeria/skinbooster-2.webp"]
                }
            },
            {
                id: "soprano-queixo",
                nome: "Soprano",
                imagem: "images/procedimentos/soprano.webp",
                descricao: "Laser de diodo que trata gordura localizada e melhora a qualidade da pele do queixo e contorno mandibular.",
                beneficios: ["Reduz gordura localizada", "Melhora a textura", "Não invasivo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Soprano é um laser de diodo que atua de forma não invasiva para reduzir a gordura localizada e melhorar a qualidade da pele do queixo e contorno mandibular, proporcionando resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/soprano-1.webp", "images/galeria/soprano-2.webp"]
                }
            },
            {
                id: "exossomos-queixo",
                nome: "Exossomos/PDRN/Exocube",
                imagem: "images/procedimentos/exossomos.webp",
                descricao: "Tratamento com exossomos, PDRN e Exocube para regeneração celular e melhora da qualidade da pele do queixo e contorno mandibular.",
                beneficios: ["Regeneração celular", "Melhora a qualidade da pele", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os exossomos, PDRN e Exocube são tratamentos inovadores que promovem a regeneração celular e melhoram a qualidade da pele do queixo e contorno mandibular, proporcionando resultados naturais e duradouros.",
                    galeriaImagens: ["images/galeria/exossomos-1.webp", "images/galeria/exossomos-2.webp"]
                }
            },
            {
                id: "microagulhamento-queixo",
                nome: "Microagulhamento",
                imagem: "images/procedimentos/microagulhamento.webp",
                descricao: "Técnica que cria microcanais na pele para estimular a produção de colágeno no queixo e contorno mandibular.",
                beneficios: ["Estimula o colágeno", "Melhora a textura", "Reduz linhas finas"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O microagulhamento é uma técnica que cria microcanais na pele para estimular a produção natural de colágeno, melhorando a textura e reduzindo linhas finas no queixo e contorno mandibular.",
                    galeriaImagens: ["images/galeria/microagulhamento-1.webp", "images/galeria/microagulhamento-2.webp"]
                }
            },
            {
                id: "aquapure-queixo",
                nome: "Aquapure",
                imagem: "images/procedimentos/aquapure.webp",
                descricao: "Tratamento de hidratação profunda que melhora a qualidade da pele do queixo e contorno mandibular.",
                beneficios: ["Hidratação profunda", "Melhora a textura", "Pele mais viçosa"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Aquapure é um tratamento de hidratação profunda que melhora a textura, o viço e a qualidade geral da pele do queixo e contorno mandibular.",
                    galeriaImagens: ["images/galeria/aquapure-1.webp", "images/galeria/aquapure-2.webp"]
                }
            },
            {
                id: "profhilo-queixo",
                nome: "Profhilo",
                imagem: "images/procedimentos/profhilo.webp",
                descricao: "Bioestimulador que melhora a qualidade da pele e trata a flacidez com resultados naturais no queixo e contorno mandibular.",
                beneficios: ["Melhora a qualidade da pele", "Trata a flacidez", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Profhilo é um bioestimulador inovador que melhora a qualidade da pele, trata a flacidez e proporciona um rejuvenescimento natural e harmonioso do queixo e contorno mandibular.",
                    galeriaImagens: ["images/galeria/profhilo-1.webp", "images/galeria/profhilo-2.webp"]
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
                id: "volnewmer",
                nome: "Volnewmer", 
                imagem: "images/procedimentos/volnewmer.webp", 
                descricao: "Tecnologia de ultrassom que combina macro e microfoco para tratar gordura localizada e flacidez nos braços.", 
                beneficios: ["Reduz gordura localizada", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Volnewmer é uma tecnologia avançada de ultrassom que atua tanto na camada de gordura quanto na pele, proporcionando um tratamento completo para os braços com resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/volnewmer-1.webp", "images/galeria/volnewmer-2.webp"]
                }
            },
            { 
                id: "ultraformer",
                nome: "Ultraformer MPT", 
                imagem: "images/procedimentos/ultraformer.webp", 
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele dos braços.", 
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro nos braços.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            { 
                id: "laser",
                nome: "Laser", 
                imagem: "images/procedimentos/laser.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno nos braços.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser nos braços é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "coolsculpting",
                nome: "CoolSculpting", 
                imagem: "images/procedimentos/coolsculpting.webp", 
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva nos braços.", 
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada nos braços.",
                    galeriaImagens: ["images/galeria-coolsculpting-1.webp", "images/galeria-coolsculpting-2.webp"]
                }
            },
            { 
                id: "endymed",
                nome: "Endymed", 
                imagem: "images/procedimentos/endymed.webp", 
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele dos braços.", 
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno nos braços.",
                    galeriaImagens: ["images/galeria-endymed-1.webp", "images/galeria-endymed-2.webp"]
                }
            },
            { 
                id: "sculptra",
                nome: "Sculptra", 
                imagem: "images/procedimentos/sculptra.webp", 
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez dos braços.", 
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Sculptra é um bioestimulador de colágeno que atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura.",
                    galeriaImagens: ["images/galeria/sculptra-1.webp", "images/galeria/sculptra-2.webp"]
                }
            },
            { 
                id: "radiesse",
                nome: "Radiesse", 
                imagem: "images/procedimentos/radiesse.webp", 
                descricao: "Bioestimulador que combina preenchimento imediato com estímulo de colágeno para os braços.", 
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Radiesse oferece um preenchimento imediato com ácido hialurônico e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para os braços.",
                    galeriaImagens: ["images/galeria/radiesse-1.webp", "images/galeria/radiesse-2.webp"]
                }
            },
            { 
                id: "emptiers",
                nome: "Emptiers", 
                imagem: "images/procedimentos/emptiers.webp", 
                descricao: "Enzimas que quebram as células de gordura localizada nos braços de forma natural.", 
                beneficios: ["Reduz gordura localizada", "Procedimento natural", "Resultados visíveis"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os Emptiers são enzimas que atuam quebrando as células de gordura localizada nos braços de forma natural e segura, proporcionando uma redução gradual e eficaz da gordura localizada.",
                    galeriaImagens: ["images/galeria-emptiers-1.webp", "images/galeria-emptiers-2.webp"]
                }
            },
            { 
                id: "soprano",
                nome: "Soprano", 
                imagem: "images/procedimentos/soprano.webp", 
                descricao: "Laser de diodo que trata gordura localizada e melhora a qualidade da pele dos braços.", 
                beneficios: ["Reduz gordura localizada", "Melhora a textura", "Não invasivo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Soprano é um laser de diodo que atua de forma não invasiva para reduzir a gordura localizada e melhorar a qualidade da pele dos braços, proporcionando resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria-soprano-1.webp", "images/galeria-soprano-2.webp"]
                }
            }
        ]
    },
    maos: {
        titulo: "Tratamentos para Mãos",
        queixas: ["Envelhecimento", "Manchas", "Ressecamento", "Perda de volume"],
        tratamentos: [
            { 
                id: "laser",
                nome: "Laser", 
                imagem: "images/procedimentos/laser.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno nas mãos.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser nas mãos é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "radiesse",
                nome: "Radiesse", 
                imagem: "images/procedimentos/radiesse.webp", 
                descricao: "Bioestimulador que combina preenchimento imediato com estímulo de colágeno para as mãos.", 
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Radiesse oferece um preenchimento imediato com ácido hialurônico e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para as mãos.",
                    galeriaImagens: ["images/galeria/radiesse-1.webp", "images/galeria/radiesse-2.webp"]
                }
            },
            { 
                id: "skinbooster",
                nome: "SkinBooster", 
                imagem: "images/procedimentos/skinbooster.webp", 
                descricao: "Hidratação profunda com ácido hialurônico para melhorar a qualidade da pele das mãos.", 
                beneficios: ["Hidratação profunda", "Melhora a textura", "Pele mais viçosa"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O SkinBooster é um tratamento de hidratação profunda que injeta ácido hialurônico na pele, melhorando a textura, o viço e a qualidade geral da pele das mãos.",
                    galeriaImagens: ["images/galeria/skinbooster-1.webp", "images/galeria/skinbooster-2.webp"]
                }
            },
            { 
                id: "ultraformer",
                nome: "Ultraformer MPT", 
                imagem: "images/procedimentos/ultraformer.webp", 
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele das mãos.", 
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro nas mãos.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            { 
                id: "volnewmer",
                nome: "Volnewmer", 
                imagem: "images/procedimentos/volnewmer.webp", 
                descricao: "Tecnologia de ultrassom que combina macro e microfoco para tratar gordura localizada e flacidez nas mãos.", 
                beneficios: ["Reduz gordura localizada", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Volnewmer é uma tecnologia avançada de ultrassom que atua tanto na camada de gordura quanto na pele, proporcionando um tratamento completo para as mãos com resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/volnewmer-1.webp", "images/galeria/volnewmer-2.webp"]
                }
            },
            { 
                id: "profhilo",
                nome: "Profhilo", 
                imagem: "images/procedimentos/profhilo.webp", 
                descricao: "Bioestimulador que melhora a qualidade da pele e trata a flacidez com resultados naturais nas mãos.", 
                beneficios: ["Melhora a qualidade da pele", "Trata a flacidez", "Resultados naturais"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Profhilo é um bioestimulador inovador que melhora a qualidade da pele, trata a flacidez e proporciona um rejuvenescimento natural e harmonioso das mãos.",
                    galeriaImagens: ["images/galeria/profhilo-1.webp", "images/galeria/profhilo-2.webp"]
                }
            }
        ]
    },
    abdomen: {
        titulo: "Tratamentos para Abdômen",
        queixas: ["Flacidez", "Gordura localizada", "Estrias"],
        tratamentos: [
            { 
                id: "volnewmer",
                nome: "Volnewmer", 
                imagem: "images/procedimentos/volnewmer.webp", 
                descricao: "Tecnologia de ultrassom que combina macro e microfoco para tratar gordura localizada e flacidez no abdômen.", 
                beneficios: ["Reduz gordura localizada", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Volnewmer é uma tecnologia avançada de ultrassom que atua tanto na camada de gordura quanto na pele, proporcionando um tratamento completo para o abdômen com resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/volnewmer-1.webp", "images/galeria/volnewmer-2.webp"]
                }
            },
            { 
                id: "ultraformer",
                nome: "Ultraformer MPT", 
                imagem: "images/procedimentos/ultraformer.webp", 
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele do abdômen.", 
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro no abdômen.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            { 
                id: "laser",
                nome: "Laser", 
                imagem: "images/procedimentos/laser.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno no abdômen.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser no abdômen é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "coolsculpting",
                nome: "CoolSculpting", 
                imagem: "images/procedimentos/coolsculpting.webp", 
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva no abdômen.", 
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada no abdômen.",
                    galeriaImagens: ["images/galeria-coolsculpting-1.webp", "images/galeria-coolsculpting-2.webp"]
                }
            },
            { 
                id: "endymed",
                nome: "Endymed", 
                imagem: "images/procedimentos/endymed.webp", 
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele do abdômen.", 
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno no abdômen.",
                    galeriaImagens: ["images/galeria-endymed-1.webp", "images/galeria-endymed-2.webp"]
                }
            },
            { 
                id: "sculptra",
                nome: "Sculptra", 
                imagem: "images/procedimentos/sculptra.webp", 
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez do abdômen.", 
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Sculptra é um bioestimulador de colágeno que atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura.",
                    galeriaImagens: ["images/galeria/sculptra-1.webp", "images/galeria/sculptra-2.webp"]
                }
            },
            { 
                id: "radiesse",
                nome: "Radiesse", 
                imagem: "images/procedimentos/radiesse.webp", 
                descricao: "Bioestimulador que combina preenchimento imediato com estímulo de colágeno para o abdômen.", 
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Radiesse oferece um preenchimento imediato com ácido hialurônico e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para o abdômen.",
                    galeriaImagens: ["images/galeria/radiesse-1.webp", "images/galeria/radiesse-2.webp"]
                }
            },
            { 
                id: "emptiers",
                nome: "Emptiers", 
                imagem: "images/procedimentos/emptiers.webp", 
                descricao: "Enzimas que quebram as células de gordura localizada no abdômen de forma natural.", 
                beneficios: ["Reduz gordura localizada", "Procedimento natural", "Resultados visíveis"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os Emptiers são enzimas que atuam quebrando as células de gordura localizada no abdômen de forma natural e segura, proporcionando uma redução gradual e eficaz da gordura localizada.",
                    galeriaImagens: ["images/galeria-emptiers-1.webp", "images/galeria-emptiers-2.webp"]
                }
            },
            { 
                id: "soprano",
                nome: "Soprano", 
                imagem: "images/procedimentos/soprano.webp", 
                descricao: "Laser de diodo que trata gordura localizada e melhora a qualidade da pele do abdômen.", 
                beneficios: ["Reduz gordura localizada", "Melhora a textura", "Não invasivo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Soprano é um laser de diodo que atua de forma não invasiva para reduzir a gordura localizada e melhorar a qualidade da pele do abdômen, proporcionando resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria-soprano-1.webp", "images/galeria-soprano-2.webp"]
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
                imagem: "images/procedimentos/tratamento-peeling-costas.webp",
                descricao: "Aplicação de ácidos específicos para a pele do corpo, promovendo a renovação celular e clareando manchas.",
                beneficios: ["Reduz a acne e cravos", "Clareia manchas pós-inflamatórias", "Pele mais lisa e uniforme"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O peeling químico corporal é uma ótima opção para tratar acne, foliculite e manchas nas costas, promovendo uma renovação celular intensa que resulta em uma pele mais lisa e de tom uniforme.",
                    galeriaImagens: ["images/galeria-peeling-costas-1.webp", "images/galeria-peeling-costas-2.webp"]
                }
            },
            {
                id: "laser-cicatrizes-costas",
                nome: "Laser Fracionado para Cicatrizes",
                imagem: "images/procedimentos/tratamento-laser-costas.webp",
                descricao: "Tecnologia a laser que atua profundamente na pele para tratar cicatrizes de acne e melhorar a textura.",
                beneficios: ["Suaviza cicatrizes", "Melhora a textura irregular", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Para cicatrizes de acne mais profundas nas costas, o laser fracionado atua estimulando o colágeno e remodelando a pele, o que suaviza a textura e melhora a aparência das marcas.",
                    galeriaImagens: ["images/galeria-laser-costas-1.webp", "images/galeria-laser-costas-2.webp"]
                }
            }
        ]
    },
    pernas: {
        titulo: "Tratamentos para Pernas, Coxas e Joelhos",
        queixas: ["Flacidez", "Celulite", "Gordura localizada", "Estrias", "Vasinhos"],
        tratamentos: [
            { 
                id: "volnewmer",
                nome: "Volnewmer", 
                imagem: "images/procedimentos/volnewmer.webp", 
                descricao: "Tecnologia de ultrassom que combina macro e microfoco para tratar gordura localizada e flacidez nas pernas.", 
                beneficios: ["Reduz gordura localizada", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Volnewmer é uma tecnologia avançada de ultrassom que atua tanto na camada de gordura quanto na pele, proporcionando um tratamento completo para as pernas com resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/volnewmer-1.webp", "images/galeria/volnewmer-2.webp"]
                }
            },
            { 
                id: "ultraformer",
                nome: "Ultraformer MPT", 
                imagem: "images/procedimentos/ultraformer.webp", 
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele das pernas.", 
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro nas pernas.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            { 
                id: "laser",
                nome: "Laser", 
                imagem: "images/procedimentos/laser.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno nas pernas.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser nas pernas é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "coolsculpting",
                nome: "CoolSculpting", 
                imagem: "images/procedimentos/coolsculpting.webp", 
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva nas pernas.", 
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada nas pernas.",
                    galeriaImagens: ["images/galeria-coolsculpting-1.webp", "images/galeria-coolsculpting-2.webp"]
                }
            },
            { 
                id: "endymed",
                nome: "Endymed", 
                imagem: "images/procedimentos/endymed.webp", 
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele das pernas.", 
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno nas pernas.",
                    galeriaImagens: ["images/galeria-endymed-1.webp", "images/galeria-endymed-2.webp"]
                }
            },
            { 
                id: "sculptra",
                nome: "Sculptra", 
                imagem: "images/procedimentos/sculptra.webp", 
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez das pernas.", 
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Sculptra é um bioestimulador de colágeno que atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura.",
                    galeriaImagens: ["images/galeria/sculptra-1.webp", "images/galeria/sculptra-2.webp"]
                }
            },
            { 
                id: "radiesse",
                nome: "Radiesse", 
                imagem: "images/procedimentos/radiesse.webp", 
                descricao: "Bioestimulador que combina preenchimento imediato com estímulo de colágeno para as pernas.", 
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Radiesse oferece um preenchimento imediato com ácido hialurônico e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para as pernas.",
                    galeriaImagens: ["images/galeria/radiesse-1.webp", "images/galeria/radiesse-2.webp"]
                }
            },
            { 
                id: "emptiers",
                nome: "Emptiers", 
                imagem: "images/procedimentos/emptiers.webp", 
                descricao: "Enzimas que quebram as células de gordura localizada nas pernas de forma natural.", 
                beneficios: ["Reduz gordura localizada", "Procedimento natural", "Resultados visíveis"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os Emptiers são enzimas que atuam quebrando as células de gordura localizada nas pernas de forma natural e segura, proporcionando uma redução gradual e eficaz da gordura localizada.",
                    galeriaImagens: ["images/galeria-emptiers-1.webp", "images/galeria-emptiers-2.webp"]
                }
            },
            { 
                id: "soprano",
                nome: "Soprano", 
                imagem: "images/procedimentos/soprano.webp", 
                descricao: "Laser de diodo que trata gordura localizada e melhora a qualidade da pele das pernas.", 
                beneficios: ["Reduz gordura localizada", "Melhora a textura", "Não invasivo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Soprano é um laser de diodo que atua de forma não invasiva para reduzir a gordura localizada e melhorar a qualidade da pele das pernas, proporcionando resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria-soprano-1.webp", "images/galeria-soprano-2.webp"]
                }
            }
        ]
    },
    pes: {
        titulo: "Tratamentos para os Pés",
        queixas: ["Ressecamento", "Fissuras", "Pele grossa (hiperqueratose)"],
        tratamentos: [
            { 
                id: "laser",
                nome: "Laser", 
                imagem: "images/procedimentos/laser-pes.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno nos pés.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser nos pés é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "soprano",
                nome: "Soprano", 
                imagem: "images/procedimentos/soprano.webp", 
                descricao: "Laser de diodo que trata gordura localizada e melhora a qualidade da pele dos pés.", 
                beneficios: ["Reduz gordura localizada", "Melhora a textura", "Não invasivo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Soprano é um laser de diodo que atua de forma não invasiva para reduzir a gordura localizada e melhorar a qualidade da pele dos pés, proporcionando resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria-soprano-1.webp", "images/galeria-soprano-2.webp"]
                }
            }
        ]
    },
    costas: {
        titulo: "Tratamentos para as Costas",
        queixas: ["Acne nas costas ('Bocne')", "Manchas e cicatrizes de acne", "Gordura localizada (flancos)"],
        tratamentos: [
            { 
                id: "volnewmer",
                nome: "Volnewmer", 
                imagem: "images/procedimentos/volnewmer.webp", 
                descricao: "Tecnologia de ultrassom que combina macro e microfoco para tratar gordura localizada e flacidez nas costas.", 
                beneficios: ["Reduz gordura localizada", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Volnewmer é uma tecnologia avançada de ultrassom que atua tanto na camada de gordura quanto na pele, proporcionando um tratamento completo para as costas com resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/volnewmer-1.webp", "images/galeria/volnewmer-2.webp"]
                }
            },
            { 
                id: "ultraformer",
                nome: "Ultraformer MPT", 
                imagem: "images/procedimentos/ultraformer.webp", 
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele das costas.", 
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro nas costas.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            { 
                id: "laser",
                nome: "Laser", 
                imagem: "images/procedimentos/laser.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno nas costas.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser nas costas é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "coolsculpting",
                nome: "CoolSculpting", 
                imagem: "images/procedimentos/coolsculpting.webp", 
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva nas costas.", 
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada nas costas.",
                    galeriaImagens: ["images/galeria-coolsculpting-1.webp", "images/galeria-coolsculpting-2.webp"]
                }
            },
            { 
                id: "endymed",
                nome: "Endymed", 
                imagem: "images/procedimentos/endymed.webp", 
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele das costas.", 
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno nas costas.",
                    galeriaImagens: ["images/galeria-endymed-1.webp", "images/galeria-endymed-2.webp"]
                }
            },
            { 
                id: "emptiers",
                nome: "Emptiers", 
                imagem: "images/procedimentos/emptiers.webp", 
                descricao: "Enzimas que quebram as células de gordura localizada nas costas de forma natural.", 
                beneficios: ["Reduz gordura localizada", "Procedimento natural", "Resultados visíveis"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os Emptiers são enzimas que atuam quebrando as células de gordura localizada nas costas de forma natural e segura, proporcionando uma redução gradual e eficaz da gordura localizada.",
                    galeriaImagens: ["images/galeria-emptiers-1.webp", "images/galeria-emptiers-2.webp"]
                }
            },
            { 
                id: "soprano",
                nome: "Soprano", 
                imagem: "images/procedimentos/soprano.webp", 
                descricao: "Laser de diodo que trata gordura localizada e melhora a qualidade da pele das costas.", 
                beneficios: ["Reduz gordura localizada", "Melhora a textura", "Não invasivo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Soprano é um laser de diodo que atua de forma não invasiva para reduzir a gordura localizada e melhorar a qualidade da pele das costas, proporcionando resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria-soprano-1.webp", "images/galeria-soprano-2.webp"]
                }
            }
        ]
    },
    gluteos: {
        titulo: "Tratamentos para Glúteos",
        queixas: ["Celulite", "Flacidez", "Estrias", "Falta de projeção"],
        tratamentos: [
            { 
                id: "volnewmer",
                nome: "Volnewmer", 
                imagem: "images/procedimentos/volnewmer.webp", 
                descricao: "Tecnologia de ultrassom que combina macro e microfoco para tratar gordura localizada e flacidez nos glúteos.", 
                beneficios: ["Reduz gordura localizada", "Melhora a flacidez", "Resultados progressivos"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Volnewmer é uma tecnologia avançada de ultrassom que atua tanto na camada de gordura quanto na pele, proporcionando um tratamento completo para os glúteos com resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria/volnewmer-1.webp", "images/galeria/volnewmer-2.webp"]
                }
            },
            { 
                id: "ultraformer",
                nome: "Ultraformer MPT", 
                imagem: "images/procedimentos/ultraformer.webp", 
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele dos glúteos.", 
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro nos glúteos.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            { 
                id: "laser",
                nome: "Laser", 
                imagem: "images/procedimentos/laser.webp", 
                descricao: "Tratamento a laser para uniformizar o tom da pele, tratar manchas e estimular o colágeno nos glúteos.", 
                beneficios: ["Uniformiza o tom da pele", "Trata manchas solares", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O tratamento a laser nos glúteos é eficaz para tratar os sinais do fotoenvelhecimento, como manchas e pequenos vasos, melhorando a textura e uniformidade da pele.",
                    galeriaImagens: ["images/galeria/laser-1.webp", "images/galeria/laser-2.webp"]
                }
            },
            { 
                id: "coolsculpting",
                nome: "CoolSculpting", 
                imagem: "images/procedimentos/coolsculpting.webp", 
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva nos glúteos.", 
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada nos glúteos.",
                    galeriaImagens: ["images/galeria-coolsculpting-1.webp", "images/galeria-coolsculpting-2.webp"]
                }
            },
            { 
                id: "endymed",
                nome: "Endymed", 
                imagem: "images/procedimentos/endymed.webp", 
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele dos glúteos.", 
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno nos glúteos.",
                    galeriaImagens: ["images/galeria-endymed-1.webp", "images/galeria-endymed-2.webp"]
                }
            },
            { 
                id: "sculptra",
                nome: "Sculptra", 
                imagem: "images/procedimentos/sculptra.webp", 
                descricao: "Bioestimulador de colágeno que melhora a qualidade da pele e trata a flacidez dos glúteos.", 
                beneficios: ["Estimula o colágeno natural", "Melhora a firmeza", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Sculptra é um bioestimulador de colágeno que atua estimulando a produção natural de colágeno pelo organismo, melhorando a qualidade da pele e tratando a flacidez de forma progressiva e duradoura.",
                    galeriaImagens: ["images/galeria/sculptra-1.webp", "images/galeria/sculptra-2.webp"]
                }
            },
            { 
                id: "radiesse",
                nome: "Radiesse", 
                imagem: "images/procedimentos/radiesse.webp", 
                descricao: "Bioestimulador que combina preenchimento imediato com estímulo de colágeno para os glúteos.", 
                beneficios: ["Resultado imediato", "Estimula o colágeno", "Melhora a firmeza"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Radiesse oferece um preenchimento imediato com ácido hialurônico e estimula a produção de colágeno, proporcionando resultados tanto imediatos quanto duradouros para os glúteos.",
                    galeriaImagens: ["images/galeria/radiesse-1.webp", "images/galeria/radiesse-2.webp"]
                }
            },
            { 
                id: "preenchimento",
                nome: "Preenchimento", 
                imagem: "images/procedimentos/preenchimento.webp", 
                descricao: "Preenchimento com ácido hialurônico para dar volume e projeção aos glúteos.", 
                beneficios: ["Aumenta o volume", "Melhora a projeção", "Resultado imediato"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O preenchimento dos glúteos com ácido hialurônico é uma técnica segura e eficaz para aumentar o volume e melhorar a projeção, proporcionando resultados imediatos e naturais.",
                    galeriaImagens: ["images/galeria-preench-gluteos-1.webp", "images/galeria-preench-gluteos-2.webp"]
                }
            },
            { 
                id: "soprano",
                nome: "Soprano", 
                imagem: "images/procedimentos/soprano.webp", 
                descricao: "Laser de diodo que trata gordura localizada e melhora a qualidade da pele dos glúteos.", 
                beneficios: ["Reduz gordura localizada", "Melhora a textura", "Não invasivo"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Soprano é um laser de diodo que atua de forma não invasiva para reduzir a gordura localizada e melhorar a qualidade da pele dos glúteos, proporcionando resultados visíveis e duradouros.",
                    galeriaImagens: ["images/galeria-soprano-1.webp", "images/galeria-soprano-2.webp"]
                }
            }
        ]
    },
    banana: {
        titulo: "Tratamentos para Bananinha",
        queixas: ["Gordura localizada", "Flacidez", "Falta de definição"],
        tratamentos: [
            { 
                id: "ultraformer",
                nome: "Ultraformer MPT", 
                imagem: "images/procedimentos/ultraformer.webp", 
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele da bananinha.", 
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro na bananinha.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            { 
                id: "emptiers",
                nome: "Emptiers", 
                imagem: "images/procedimentos/emptiers.webp", 
                descricao: "Enzimas que quebram as células de gordura localizada na bananinha de forma natural.", 
                beneficios: ["Reduz gordura localizada", "Procedimento natural", "Resultados visíveis"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os Emptiers são enzimas que atuam quebrando as células de gordura localizada na bananinha de forma natural e segura, proporcionando uma redução gradual e eficaz da gordura localizada.",
                    galeriaImagens: ["images/galeria-emptiers-1.webp", "images/galeria-emptiers-2.webp"]
                }
            },
            { 
                id: "endymed",
                nome: "Endymed", 
                imagem: "images/procedimentos/endymed.webp", 
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele da bananinha.", 
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno na bananinha.",
                    galeriaImagens: ["images/galeria-endymed-1.webp", "images/galeria-endymed-2.webp"]
                }
            },
            { 
                id: "coolsculpting",
                nome: "CoolSculpting", 
                imagem: "images/procedimentos/coolsculpting.webp", 
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva na bananinha.", 
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada na bananinha.",
                    galeriaImagens: ["images/galeria-coolsculpting-1.webp", "images/galeria-coolsculpting-2.webp"]
                }
            }
        ]
    },
    culote: {
        titulo: "Tratamentos para Culote",
        queixas: ["Gordura localizada", "Flacidez", "Falta de definição"],
        tratamentos: [
            { 
                id: "ultraformer",
                nome: "Ultraformer MPT", 
                imagem: "images/procedimentos/ultraformer.webp", 
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele do culote.", 
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro no culote.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            { 
                id: "emptiers",
                nome: "Emptiers", 
                imagem: "images/procedimentos/emptiers.webp", 
                descricao: "Enzimas que quebram as células de gordura localizada no culote de forma natural.", 
                beneficios: ["Reduz gordura localizada", "Procedimento natural", "Resultados visíveis"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os Emptiers são enzimas que atuam quebrando as células de gordura localizada no culote de forma natural e segura, proporcionando uma redução gradual e eficaz da gordura localizada.",
                    galeriaImagens: ["images/galeria-emptiers-1.webp", "images/galeria-emptiers-2.webp"]
                }
            },
            { 
                id: "endymed",
                nome: "Endymed", 
                imagem: "images/procedimentos/endymed.webp", 
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele do culote.", 
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno no culote.",
                    galeriaImagens: ["images/galeria-endymed-1.webp", "images/galeria-endymed-2.webp"]
                }
            },
            { 
                id: "coolsculpting",
                nome: "CoolSculpting", 
                imagem: "images/procedimentos/coolsculpting.webp", 
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva no culote.", 
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada no culote.",
                    galeriaImagens: ["images/galeria-coolsculpting-1.webp", "images/galeria-coolsculpting-2.webp"]
                }
            }
        ]
    },
    flancos: {
        titulo: "Tratamentos para Flancos",
        queixas: ["Gordura localizada", "Flacidez", "Falta de definição"],
        tratamentos: [
            { 
                id: "ultraformer",
                nome: "Ultraformer MPT", 
                imagem: "images/procedimentos/ultraformer.webp", 
                descricao: "Ultrassom microfocado que estimula o colágeno e trata a flacidez da pele dos flancos.", 
                beneficios: ["Efeito lifting", "Melhora a qualidade da pele", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Ultraformer MPT é a mais recente evolução da tecnologia de ultrassom. Ele atua em camadas profundas da pele para contrair o tecido e estimular a produção de colágeno, resultando em um efeito lifting natural e duradouro nos flancos.",
                    galeriaImagens: ["images/galeria/ultraformer-1.webp", "images/galeria/ultraformer-2.webp"]
                }
            },
            { 
                id: "emptiers",
                nome: "Emptiers", 
                imagem: "images/procedimentos/emptiers.webp", 
                descricao: "Enzimas que quebram as células de gordura localizada nos flancos de forma natural.", 
                beneficios: ["Reduz gordura localizada", "Procedimento natural", "Resultados visíveis"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "Os Emptiers são enzimas que atuam quebrando as células de gordura localizada nos flancos de forma natural e segura, proporcionando uma redução gradual e eficaz da gordura localizada.",
                    galeriaImagens: ["images/galeria-emptiers-1.webp", "images/galeria-emptiers-2.webp"]
                }
            },
            { 
                id: "endymed",
                nome: "Endymed", 
                imagem: "images/procedimentos/endymed.webp", 
                descricao: "Radiofrequência fracionada que trata a flacidez e melhora a qualidade da pele dos flancos.", 
                beneficios: ["Trata a flacidez", "Melhora a textura", "Estimula o colágeno"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O Endymed é uma tecnologia de radiofrequência fracionada que atua profundamente na pele para tratar a flacidez, melhorar a textura e estimular a produção de colágeno nos flancos.",
                    galeriaImagens: ["images/galeria-endymed-1.webp", "images/galeria-endymed-2.webp"]
                }
            },
            { 
                id: "coolsculpting",
                nome: "CoolSculpting", 
                imagem: "images/procedimentos/coolsculpting.webp", 
                descricao: "Tecnologia de congelamento que destrói células de gordura de forma não invasiva nos flancos.", 
                beneficios: ["Reduz gordura localizada", "Não invasivo", "Resultados duradouros"],
                detalhes: {
                    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID",
                    descricaoLonga: "O CoolSculpting utiliza a tecnologia de congelamento para destruir células de gordura de forma seletiva e não invasiva, proporcionando uma redução natural e duradoura da gordura localizada nos flancos.",
                    galeriaImagens: ["images/galeria-coolsculpting-1.webp", "images/galeria-coolsculpting-2.webp"]
                }
            }
        ]
    }
};