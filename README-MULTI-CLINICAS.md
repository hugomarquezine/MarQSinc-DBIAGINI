# 🏥 Sistema Multi-Clínicas - Guia de Configuração

## 📋 Visão Geral

O sistema foi configurado para suportar **múltiplas clínicas** rodando simultaneamente, com:
- **Login via Supabase** (mais seguro)
- **Dados via Webhook (n8n)** (mais flexível)
- **Configurações por clínica** (cores, logos, URLs)

## 🔧 Configuração Básica

### 1. **Estrutura de Dados**

Cada clínica precisa ter:
```javascript
{
    id: "clinica-unica-id",
    nome_clinica: "Nome da Clínica",
    cor_primaria: "#008080",
    webhooks: {
        // URLs específicas (opcional)
    }
}
```

### 2. **Configuração no Supabase**

#### Tabela `clinicas`:
```sql
CREATE TABLE clinicas (
    id TEXT PRIMARY KEY,
    nome_clinica TEXT NOT NULL,
    cor_primaria TEXT DEFAULT '#008080',
    status_billing TEXT DEFAULT 'active',
    created_at TIMESTAMP DEFAULT NOW()
);
```

#### Tabela `usuarios`:
```sql
CREATE TABLE usuarios (
    id UUID PRIMARY KEY,
    nome_completo TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    clinica_id TEXT REFERENCES clinicas(id),
    role TEXT DEFAULT 'user',
    created_at TIMESTAMP DEFAULT NOW()
);
```

### 3. **Configuração Local (config.js)**

```javascript
// Exemplo de configuração para múltiplas clínicas
multiTenant: {
    enabled: true,
    defaultClinicId: 'clinica-padrao',
    clinicConfigs: {
        'clinica-1': {
            name: 'Clínica Exemplo 1',
            webhooks: {
                // URLs específicas da clínica (opcional)
                anamnese: 'https://clinica1-n8n.com/webhook/anamnese',
                chat: 'https://clinica1-n8n.com/webhook/chat'
            },
            settings: {
                primaryColor: '#FF6B6B',
                logo: 'images/logo-clinica-1.png'
            }
        },
        'clinica-2': {
            name: 'Clínica Exemplo 2',
            settings: {
                primaryColor: '#4ECDC4',
                logo: 'images/logo-clinica-2.png'
            }
        }
    }
}
```

## 🚀 Como Adicionar uma Nova Clínica

### 1. **No Supabase:**
```sql
-- Adicionar clínica
INSERT INTO clinicas (id, nome_clinica, cor_primaria) 
VALUES ('clinica-nova', 'Nova Clínica', '#FF6B6B');

-- Adicionar usuário admin
INSERT INTO usuarios (id, nome_completo, email, clinica_id, role)
VALUES ('user-uuid', 'Admin Nova Clínica', 'admin@novaclinica.com', 'clinica-nova', 'admin');
```

### 2. **No config.js (opcional):**
```javascript
// Adicionar configuração específica
window.appConfig.updateClinicConfig('clinica-nova', {
    name: 'Nova Clínica',
    settings: {
        primaryColor: '#FF6B6B',
        logo: 'images/logo-nova-clinica.png'
    }
});
```

### 3. **Configurar Webhooks (opcional):**
Se a clínica quiser URLs específicas:
```javascript
window.appConfig.updateClinicConfig('clinica-nova', {
    webhooks: {
        anamnese: 'https://novaclinica-n8n.com/webhook/anamnese',
        chat: 'https://novaclinica-n8n.com/webhook/chat'
    }
});
```

## 🔄 Fluxo de Funcionamento

### **Login:**
1. Usuário faz login → **Supabase Auth**
2. Sistema busca dados da clínica → **Supabase**
3. Aplica configurações (cores, logo) → **Local**

### **Dados do Paciente:**
1. Anamnese → **Webhook (n8n)**
2. Chat → **Webhook (n8n)**
3. Tratamentos → **Webhook (n8n)**
4. End Session → **Webhook (n8n)**

### **Configurações:**
1. Cores/Logo → **Supabase** (fallback para local)
2. URLs Webhook → **Local** (fallback para padrão)

## 🛠️ URLs dos Webhooks

### **Padrão (todas as clínicas):**
```
https://marqai-n8n-webhook.5ummqx.easypanel.host/webhook/
├── anamnesedemov1
├── chatdemov1
├── pedidocardapio
├── skincaredemov1
├── wishlistdemov1
├── areasdeincomodo
├── areasdeinteresse
├── buscar-paciente
└── end-session
```

### **Específico por Clínica:**
Cada clínica pode ter suas próprias URLs se necessário.

## 📊 Monitoramento

### **Admin Panel:**
- Acesse `admin.html`
- Login: `admin@clinica.com` / `admin123`
- Monitora todas as clínicas

### **Config Panel:**
- Acesse `config.html`
- Gerencia URLs e configurações
- Testa conectividade

### **Test Panel:**
- Acesse `test-saas.html`
- Testa todos os sistemas
- Verifica funcionamento

## 🔒 Segurança

### **Login:**
- ✅ **Supabase Auth** (seguro)
- ✅ **Roles por usuário** (admin, user, etc.)
- ✅ **Isolamento por clínica**

### **Dados:**
- ✅ **Webhooks** (flexível)
- ✅ **Fallback** (resiliente)
- ✅ **Logs detalhados**

## 🚨 Troubleshooting

### **Problema: Clínica não carrega**
```javascript
// Verificar no console:
console.log('Clínica atual:', window.appConfig.getCurrentClinicId());
console.log('Config clínica:', window.appConfig.getClinicConfig());
```

### **Problema: Webhook não funciona**
```javascript
// Verificar URL:
console.log('URL webhook:', window.appConfig.getWebhookURLForClinic('anamnese'));
```

### **Problema: Cores não aplicam**
```javascript
// Aplicar manualmente:
window.appConfig.applyClinicSettings('clinica-id');
```

## 📈 Escalabilidade

### **Para 10+ Clínicas:**
1. **Use URLs padrão** (mais simples)
2. **Configure apenas cores/logos** no Supabase
3. **Monitore via admin panel**

### **Para 50+ Clínicas:**
1. **Considere URLs específicas** por clínica
2. **Use CDN** para logos
3. **Implemente cache** de configurações

## 🎯 Próximos Passos

1. **Teste com 2-3 clínicas** primeiro
2. **Configure URLs específicas** se necessário
3. **Monitore performance** via admin panel
4. **Escale gradualmente** conforme demanda

---

**✅ Sistema pronto para múltiplas clínicas!** 🚀