// js/config.js - Sistema de Configuração Híbrida (Webhook + Supabase)

class AppConfig {
    constructor() {
        this.config = {
            // Configuração principal - determina se usa webhook ou Supabase
            useSupabase: false, // Por padrão, mantém webhooks funcionando
            
            // URLs dos webhooks removidas
            webhooks: {},
            
            // Configuração para múltiplas clínicas
            multiTenant: {
                enabled: true,
                defaultClinicId: 'clinica-padrao',
                clinicConfigs: {
                    // Exemplo de configuração por clínica
                    'clinica-1': {
                        name: 'Clínica Exemplo 1',
                        webhooks: {
                            // URLs específicas da clínica (opcional)
                        },
                        settings: {
                            primaryColor: '#008080',
                            secondaryColor: '#FF6B6B',
                            logo: 'images/logo-clinica-1.png'
                        }
                    }
                }
            },
            
            // Configurações do Supabase removidas
            
            // Configurações de fallback removidas
        };
        
        this.loadConfig();
    }
    
    // Carrega configuração do localStorage ou usa padrão
    loadConfig() {
        const savedConfig = localStorage.getItem('appConfig');
        if (savedConfig) {
            try {
                const parsed = JSON.parse(savedConfig);
                this.config = { ...this.config, ...parsed };
            } catch (e) {
                // Silencioso
            }
        }
    }
    
    // Salva configuração no localStorage
    saveConfig() {
        localStorage.setItem('appConfig', JSON.stringify(this.config));
    }
    
    // Alterna entre webhook e Supabase
    toggleDataProvider() {
        this.config.useSupabase = !this.config.useSupabase;
        this.saveConfig();
        return this.config.useSupabase;
    }
    
    // Obtém URL do webhook para um serviço específico
    getWebhookURL(service) {
        const url = this.config.webhooks[service] || null;
        return url;
    }
    
    // Métodos de Supabase removidos
    
    // Atualiza configuração específica
    updateConfig(key, value) {
        this.config[key] = value;
        this.saveConfig();
    }
    
    // Obtém configuração completa
    getConfig() {
        return this.config;
    }
    
    // Métodos para múltiplas clínicas
    getCurrentClinicId() {
        const clinicInfo = JSON.parse(localStorage.getItem('clinicInfo') || '{}');
        return clinicInfo?.id || this.config.multiTenant.defaultClinicId;
    }
    
    getClinicConfig(clinicId = null) {
        const id = clinicId || this.getCurrentClinicId();
        return this.config.multiTenant.clinicConfigs[id] || null;
    }
    
    getWebhookURLForClinic(service, clinicId = null) {
        const id = clinicId || this.getCurrentClinicId();
        const clinicConfig = this.getClinicConfig(id);
        
        // Se a clínica tem URLs específicas, usa elas
        if (clinicConfig && clinicConfig.webhooks && clinicConfig.webhooks[service]) {
            return clinicConfig.webhooks[service];
        }
        
        // Senão, usa as URLs padrão
        return this.config.webhooks[service] || null;
    }
    
    updateClinicConfig(clinicId, config) {
        this.config.multiTenant.clinicConfigs[clinicId] = {
            ...this.config.multiTenant.clinicConfigs[clinicId],
            ...config
        };
        this.saveConfig();
    }
    
    // Aplica configurações da clínica (cores, logo, etc.)
    applyClinicSettings(clinicId = null) {
        const id = clinicId || this.getCurrentClinicId();
        const clinicConfig = this.getClinicConfig(id);
        
        if (clinicConfig && clinicConfig.settings) {
            const settings = clinicConfig.settings;
            
            // Aplica cor primária
            if (settings.primaryColor) {
                document.documentElement.style.setProperty('--cor-primaria', settings.primaryColor);
            }
            
            // Aplica cor secundária
            if (settings.secondaryColor) {
                document.documentElement.style.setProperty('--cor-secundaria', settings.secondaryColor);
            }
            
            // Aplica logo
            if (settings.logo) {
                const logoElements = document.querySelectorAll('.logo');
                logoElements.forEach(logo => {
                    logo.src = settings.logo;
                    // Adiciona classe para mostrar o logo suavemente
                    logo.addEventListener('load', () => {
                        logo.classList.add('loaded');
                    });
                    // Se o logo já estiver carregado (cache), mostra imediatamente
                    if (logo.complete) {
                        logo.classList.add('loaded');
                    }
                });
            }
        }
    }
}

// Cria instância global
try {
    window.appConfig = new AppConfig();
} catch (error) {
    // Cria uma instância de fallback
    window.appConfig = {
        getWebhookURL: (service) => {
            return null;
        },
        shouldUseSupabase: () => false,
        getFallbackConfig: () => ({ enableFallback: false })
    };
}

// Exporta para uso em outros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AppConfig;
}