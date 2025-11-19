// js/config.js - Sistema de Configuração (simplificado)

class AppConfig {
    constructor() {
        this.config = {
            // Configuração para múltiplas clínicas
            multiTenant: {
                enabled: true,
                defaultClinicId: 'clinica-padrao',
                clinicConfigs: {
                    'clinica-1': {
                        name: 'Clínica Exemplo 1',
                        settings: {
                            primaryColor: '#FFFFFF',
                            secondaryColor: '#FF6B6B',
                            logo: 'images/logo-clinica-1.png'
                        }
                    }
                }
            }
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
        getConfig: () => ({}),
        getCurrentClinicId: () => 'clinica-padrao',
        getClinicConfig: () => null
    };
}

// Exporta para uso em outros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AppConfig;
}