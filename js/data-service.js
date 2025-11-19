// js/data-service.js - Serviço de Dados (simplificado)

class DataService {
    constructor() {
        if (!window.appConfig) {
            throw new Error('AppConfig não está disponível');
        }
        
        this.config = window.appConfig;
    }
    
    // Método principal para enviar dados - desabilitado
    async sendData(service, data) {
        throw new Error('Envio de dados desabilitado');
    }
    
}

// Cria instância global
try {
    window.dataService = new DataService();
} catch (error) {
    // Cria uma instância de fallback
    window.dataService = {
        sendData: async (service, data) => {
            throw new Error('DataService não disponível');
        }
    };
}

// Exporta para uso em outros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataService;
}