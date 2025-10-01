# 📋 Anamnese Completa - Guia de Implementação

## 🎯 Visão Geral

A anamnese foi completamente reformulada para incluir todas as seções solicitadas e suportar diferentes configurações por clínica.

## 📊 Estrutura da Anamnese

### **Seção 1: Dados Pessoais**
- ✅ Nome Completo
- ✅ Data de Nascimento
- ✅ Telefone (com formatação automática)
- ✅ E-mail (com validação)
- ✅ Endereço Completo
- ✅ Como prefere ser chamado: Você ou Senhor(a)

### **Seção 2: Histórico Clínico**
- ✅ Já realizou algum tratamento dermatológico?
  - Se sim: Botox, Preenchimento, Ultraformer, Coolsculpting, Laser, Volnewmer
  - Campo "Outros" para especificar
- ✅ Tem interesse em realizar procedimentos estéticos?

### **Seção 3: Saúde Geral**
- ✅ Possui alguma doença crônica? (com campo para especificar)
- ✅ Faz uso contínuo de medicamentos? (com campo para especificar)
- ✅ Possui alergias? (com campo para especificar)

### **Seção 4: Hábitos e Rotina**
- ✅ Utiliza protetor solar diariamente?
- ✅ Fuma?
- ✅ Consome bebidas alcoólicas? (Nunca/Socialmente/Frequentemente)
- ✅ Rotina de cuidados com a pele (campo de texto longo)

### **Seção 5: Histórico Familiar**
- ✅ Histórico de câncer de pele na família? (com campo para especificar quem)

### **Seção 6: Observações Finais**
- ✅ Observações adicionais (campo de texto longo)
- ✅ Gênero (Feminino ou Masculino)
- ✅ CPF (com validação e formatação)

**Total: 6 seções** (formalidade integrada na seção 1)

## 🗄️ Schema do Supabase

### **Tabela `patients` (Atualizada)**
```sql
-- Novos campos adicionados:
data_nascimento date,
endereco_completo text,
formalidade_preferencia text, -- 'voce' ou 'senhor'
historico_dermatologico boolean,
tratamentos_realizados text[], -- Array para múltiplos tratamentos
outros_tratamentos text,
interesse_procedimentos boolean,
doenca_cronica boolean,
doenca_cronica_descricao text,
medicamentos_continuos boolean,
medicamentos_descricao text,
alergias boolean,
alergias_descricao text,
protetor_solar_diario boolean,
fuma boolean,
consumo_alcool text, -- 'nunca', 'socialmente', 'frequentemente'
rotina_cuidados_pele text,
historico_cancer_pele_familia boolean,
cancer_pele_familia_quem text,
observacoes_adicionais text;
```

### **Nova Tabela `anamnese_config`**
```sql
CREATE TABLE anamnese_config (
    id bigint GENERATED ALWAYS AS IDENTITY,
    clinica_id bigint NOT NULL,
    secoes_habilitadas jsonb, -- Controla quais seções mostrar
    campos_obrigatorios jsonb, -- Controla campos obrigatórios
    campos_personalizados jsonb, -- Campos específicos da clínica
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
```

### **Nova Tabela `anamnese_logs`**
```sql
CREATE TABLE anamnese_logs (
    id bigint GENERATED ALWAYS AS IDENTITY,
    patient_id bigint NOT NULL,
    clinica_id bigint NOT NULL,
    dados_anamnese jsonb NOT NULL, -- Dados completos da anamnese
    versao_anamnese text DEFAULT '2.0',
    created_at timestamp with time zone DEFAULT now()
);
```

## 🔧 Configuração por Clínica

### **Exemplo de Configuração:**
```javascript
{
    "secoes_habilitadas": {
        "dados_pessoais": true,
        "historico_clinico": true,
        "doencas_medicamentos": true,
        "habitos_rotina": true,
        "historico_familiar": true,
        "observacoes": true
    },
    "campos_obrigatorios": {
        "nome_completo": true,
        "data_nascimento": true,
        "telefone": true,
        "email": true,
        "cpf": true
    },
    "campos_personalizados": {
        "campo_especial": {
            "tipo": "texto",
            "obrigatorio": false,
            "label": "Campo Especial da Clínica"
        }
    }
}
```

## 🚀 Funcionalidades

### **Validações Automáticas:**
- ✅ **CPF**: Validação completa com dígitos verificadores
- ✅ **E-mail**: Validação de formato
- ✅ **Telefone**: Formatação automática (11) 99999-9999
- ✅ **Campos obrigatórios**: Validação em tempo real

### **Interface Responsiva:**
- ✅ **Mobile-first**: Otimizado para tablets
- ✅ **Progress bar**: Mostra progresso da anamnese
- ✅ **Campos condicionais**: Aparecem/desaparecem conforme seleção
- ✅ **Estilos consistentes**: Segue design system da clínica

### **Integração com Sistema:**
- ✅ **Webhook n8n**: Envia dados para processamento
- ✅ **Supabase**: Armazena dados estruturados
- ✅ **Logs de auditoria**: Registra todas as anamneses
- ✅ **Multi-tenant**: Suporte a múltiplas clínicas

## 📱 Como Usar

### **1. Executar Schema:**
```sql
-- Execute o arquivo supabase/schema-anamnese-completa.sql
-- Isso criará as novas tabelas e campos
```

### **2. Configurar Clínica:**
```sql
-- Inserir configuração para uma clínica
INSERT INTO anamnese_config (clinica_id, secoes_habilitadas, campos_obrigatorios)
VALUES (1, '{"dados_pessoais": true, "historico_clinico": true}', '{"nome_completo": true}');
```

### **3. Testar Anamnese:**
1. Acesse `anamnese.html`
2. Preencha todas as seções
3. Verifique se os dados chegam no webhook n8n
4. Confirme se os dados são salvos no Supabase

## 🔄 Fluxo de Dados

### **1. Preenchimento:**
```
Usuário preenche anamnese → Validação local → Envio para webhook
```

### **2. Processamento:**
```
Webhook n8n recebe dados → Processa → Salva no Supabase → Retorna ID do paciente
```

### **3. Armazenamento:**
```
Supabase: patients (dados estruturados) + anamnese_logs (auditoria)
```

## 🎨 Personalização

### **Cores e Logo:**
- ✅ Usa `--cor-primaria` do CSS
- ✅ Logo carregado automaticamente
- ✅ Responsivo para diferentes tamanhos

### **Campos Personalizados:**
- ✅ Adicione campos específicos via `campos_personalizados`
- ✅ Controle obrigatoriedade por campo
- ✅ Suporte a diferentes tipos de campo

## 🚨 Troubleshooting

### **Problema: Anamnese não envia**
```javascript
// Verificar no console:
console.log('DataService:', window.dataService);
console.log('AppConfig:', window.appConfig);
```

### **Problema: Dados não chegam no Supabase**
```sql
-- Verificar se o schema foi executado:
SELECT * FROM anamnese_config;
SELECT * FROM anamnese_logs;
```

### **Problema: Validação de CPF falha**
```javascript
// Verificar se a função validarCPF está funcionando:
validarCPF('12345678901'); // Deve retornar false
validarCPF('11144477735'); // Deve retornar true
```

## 📈 Próximos Passos

### **Funcionalidades Futuras:**
- ✅ **Anamnese parcial**: Salvar progresso
- ✅ **Revisão**: Permitir editar anamnese
- ✅ **Relatórios**: Gerar relatórios de anamnese
- ✅ **IA**: Sugestões baseadas na anamnese

### **Integrações:**
- ✅ **CRM**: Integrar com sistemas de CRM
- ✅ **Agendamento**: Conectar com sistema de agendamento
- ✅ **Prontuário**: Integrar com prontuário eletrônico

---

**✅ Anamnese completa implementada e pronta para uso!** 🚀