# Sistema SaaS - Clínica Interativa

## Visão Geral

Este projeto foi transformado em um sistema SaaS híbrido que mantém compatibilidade com webhooks existentes enquanto adiciona funcionalidades de banco de dados com Supabase.

## Características do Sistema Híbrido

### ✅ Mantém Webhooks Funcionando
- Todos os webhooks existentes continuam funcionando normalmente
- Sistema de fallback automático: se webhook falhar, tenta Supabase
- Transição suave sem quebrar funcionalidades existentes

### ✅ Funcionalidades SaaS
- Multi-tenancy (múltiplas clínicas)
- Armazenamento de dados no Supabase
- Dashboard administrativo
- Sistema de configuração flexível

## Arquivos Criados/Modificados

### Novos Arquivos
- `js/config.js` - Sistema de configuração híbrida
- `js/data-service.js` - Serviço de dados híbrido
- `supabase/schema.sql` - Schema do banco de dados
- `admin.html` - Dashboard administrativo
- `README-SAAS.md` - Este arquivo

### Arquivos Modificados
- `index.html` - Adicionados novos scripts
- `retornando.html` - Adicionados novos scripts
- `js/cardapio.js` - Migrado para sistema híbrido
- `js/chat.js` - Migrado para sistema híbrido
- `js/skincare.js` - Migrado para sistema híbrido
- `js/tratamento.js` - Migrado para sistema híbrido
- `js/mapa.js` - Migrado para sistema híbrido
- `js/anamnese.js` - Migrado para sistema híbrido

## Como Implementar

### 1. Configurar Supabase

1. Acesse [supabase.com](https://supabase.com) e crie um projeto
2. **IMPORTANTE**: Este sistema foi adaptado para usar seu schema existente com as seguintes tabelas:
   - `clinicas` - Dados das clínicas com sistema de planos
   - `patients` - Cadastro de pacientes
   - `patient_interactions` - Todas as interações (chat, pedidos, interesses, etc.)
   - `planos` - Planos de assinatura
   - `uso_cotas` - Controle de uso mensal
   - `dispositivos_pareados` - Controle de dispositivos
3. Atualize as credenciais em `js/supabase-client.js`:
   ```javascript
   const supabaseUrl = 'SUA_URL_DO_SUPABASE';
   const supabaseKey = 'SUA_CHAVE_PUBLICA';
   ```

### 2. Configurar o Sistema

#### Modo Webhook (Padrão)
- Sistema funciona exatamente como antes
- Todos os dados vão para os webhooks existentes
- Fallback automático para Supabase se webhook falhar

#### Modo Supabase
- Acesse `admin.html` no navegador
- Ative o toggle "Provedor de Dados"
- Todos os dados vão direto para o Supabase

### 3. Dashboard Administrativo

Acesse `admin.html` para:
- Alternar entre webhook e Supabase
- Ver estatísticas do sistema
- Monitorar conectividade
- Configurar fallback automático
- Visualizar logs do sistema

## Estrutura do Banco de Dados

### Tabelas Principais (Schema Existente)
- `clinicas` - Dados das clínicas com sistema de planos e billing
- `patients` - Cadastro de pacientes
- `patient_interactions` - **TODAS** as interações (chat, pedidos, interesses, áreas, etc.)
- `planos` - Planos de assinatura com limites
- `uso_cotas` - Controle de uso mensal por clínica
- `dispositivos_pareados` - Controle de dispositivos autorizados
- `reports` - Relatórios gerados
- `usuarios` - Usuários do sistema

### Mapeamento de Dados
- **Anamnese** → `patients` (dados do paciente)
- **Chat** → `patient_interactions` (tipo: 'chat')
- **Cardápio** → `patient_interactions` (tipo: 'cardapio')
- **Skincare** → `patient_interactions` (tipo: 'skincare')
- **Wishlist** → `patient_interactions` (tipo: 'wishlist')
- **Áreas de Incômodo** → `patient_interactions` (tipo: 'areasIncomodo')
- **Áreas de Interesse** → `patient_interactions` (tipo: 'areasInteresse')

## Configuração de Multi-Tenancy

### Para Novas Clínicas
1. Insira dados na tabela `clinicas`:
   ```sql
   INSERT INTO clinicas (nome, cnpj, email, ativo) 
   VALUES ('Nova Clínica', '12.345.678/0001-90', 'contato@novaclinica.com', true);
   ```

2. Configure o `clinicInfo` no localStorage do app:
   ```javascript
   localStorage.setItem('clinicInfo', JSON.stringify({
       id: 'uuid-da-clinica',
       nome: 'Nova Clínica'
   }));
   ```

## Sistema de Fallback

### Como Funciona
1. Tenta enviar dados para o provedor principal (webhook ou Supabase)
2. Se falhar e fallback estiver ativado, tenta o outro provedor
3. Logs detalhados de todas as tentativas

### Configuração
```javascript
// Em js/config.js
fallback: {
    enableFallback: true,    // Ativa/desativa fallback
    retryAttempts: 2,        // Número de tentativas
    retryDelay: 1000         // Delay entre tentativas (ms)
}
```

## Sistema de Cotas

### Funcionalidades
- **Controle de uso mensal** por clínica baseado no plano
- **Verificação automática** antes de cada submissão
- **Controle de dispositivos** autorizados por plano
- **Estatísticas detalhadas** de uso

### Como Funciona
1. Antes de enviar dados, verifica se a clínica tem cota disponível
2. Incrementa contador de uso automaticamente
3. Bloqueia submissões quando limite é atingido
4. Monitora dispositivos pareados por clínica

### Estrutura de Planos
```sql
-- Exemplo de plano
INSERT INTO planos (nome, limite_submissoes_mes, limite_dispositivos) 
VALUES ('Básico', 100, 1);

-- Exemplo de clínica
INSERT INTO clinicas (nome_clinica, plano_id, status_billing) 
VALUES ('Minha Clínica', 1, 'ativo');
```

### Monitoramento
- Dashboard admin mostra uso em tempo real
- Histórico de uso dos últimos 6 meses
- Alertas quando próximo do limite
- Controle de dispositivos autorizados

## Monitoramento

### Logs do Sistema
- Todos os envios são logados
- Erros são capturados e exibidos
- Dashboard mostra status em tempo real

### Métricas Disponíveis
- Total de pacientes
- Total de clínicas
- Sessões do dia
- Total de interações

## Migração Gradual

### Fase 1: Implementação Híbrida
- Sistema funciona com webhooks (padrão)
- Supabase configurado e testado
- Fallback automático ativo

### Fase 2: Transição
- Clínicas podem optar por usar Supabase
- Dados duplicados (webhook + Supabase)
- Monitoramento de performance

### Fase 3: Migração Completa
- Todas as clínicas migram para Supabase
- Webhooks mantidos como backup
- Sistema otimizado

## Troubleshooting

### Problemas Comuns

#### Supabase não conecta
1. Verifique as credenciais em `js/supabase-client.js`
2. Confirme se o schema foi executado
3. Verifique as políticas RLS

#### Webhooks falhando
1. Sistema automaticamente tenta Supabase
2. Verifique logs no dashboard admin
3. Teste conectividade manualmente

#### Dados não aparecem
1. Verifique se está no modo correto (webhook/Supabase)
2. Confirme se `clinicInfo` está configurado
3. Verifique logs de erro

## Próximos Passos

### Funcionalidades Futuras
- [ ] Sistema de autenticação para clínicas
- [ ] Relatórios avançados
- [ ] API REST para integrações
- [ ] Sistema de notificações
- [ ] Backup automático
- [ ] Métricas de performance

### Otimizações
- [ ] Cache de dados frequentes
- [ ] Compressão de logs
- [ ] Otimização de queries
- [ ] CDN para assets estáticos

## Suporte

Para dúvidas ou problemas:
1. Verifique os logs no dashboard admin
2. Teste conectividade com ambos os provedores
3. Confirme configurações de multi-tenancy
4. Verifique se o schema está correto

---

**Nota**: Este sistema foi projetado para manter 100% de compatibilidade com o sistema anterior, garantindo que nenhuma funcionalidade seja perdida durante a transição para SaaS.