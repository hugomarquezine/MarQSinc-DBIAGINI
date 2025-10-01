// js/data-service.js - Serviço de Dados Híbrido (Webhook + Supabase)

class DataService {
    constructor() {
        if (!window.appConfig) {
            throw new Error('AppConfig não está disponível');
        }
        
        this.config = window.appConfig;
        this.supabase = null; // Supabase removido
        this.queueKey = 'offline_event_queue_v1';
        this.defaultTimeoutMs = 8000; // 8s

        // Processa fila ao voltar a ficar online
        window.addEventListener('online', () => {
            this.processQueue();
        });

        // Tenta processar a fila no load (caso tenha pendências)
        setTimeout(() => this.processQueue(), 1500);
    }
    
    // Método principal para enviar dados - desabilitado
    async sendData(service, data) {
        throw new Error('Envio de dados desabilitado');
    }
    
    // Envia dados para webhook - desabilitado
    async sendToWebhook(service, data) {
        throw new Error('Webhooks desabilitados');
    }

    // fetch com timeout usando AbortController
    async fetchWithTimeout(resource, timeoutMs, options) {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeoutMs);
        try {
            const response = await fetch(resource, { ...options, signal: controller.signal });
            return response;
        } finally {
            clearTimeout(id);
        }
    }

    // ====== Fila Offline ======
    enqueueEvent(event) {
        try {
            const now = Date.now();
            const withMeta = { ...event, queuedAt: now };
            const current = JSON.parse(localStorage.getItem(this.queueKey) || '[]');
            current.push(withMeta);
            localStorage.setItem(this.queueKey, JSON.stringify(current));
        } catch (_) {
            // Silencioso
        }
    }

    async processQueue() {
        try {
            if (!navigator.onLine) return;
            const raw = localStorage.getItem(this.queueKey);
            if (!raw) return;
            let queue = [];
            try { queue = JSON.parse(raw) || []; } catch (_) { queue = []; }
            if (queue.length === 0) return;

            const remaining = [];
            for (const item of queue) {
                try {
                    if (item.provider === 'webhook') {
                        await this.sendToWebhook(item.service, item.payload);
                    } else if (item.provider === 'supabase') {
                        await this.sendToSupabase(item.service, item.payload);
                    }
                    // sucesso: não re-enfileira
                } catch (_) {
                    // falhou: mantém para próxima tentativa
                    remaining.push(item);
                }
            }
            localStorage.setItem(this.queueKey, JSON.stringify(remaining));
        } catch (_) {
            // Silencioso
        }
    }
    
    // Envia dados para Supabase - desabilitado
    async sendToSupabase(service, data) {
        throw new Error('Supabase desabilitado');
    }
    
    // Busca dados do Supabase - desabilitada
    async getData(service, filters = {}) {
        throw new Error('Supabase desabilitado');
    }
    
    // Métodos específicos para cada serviço
    async sendAnamnese(anamneseData) {
        return await this.sendData('anamnese', anamneseData);
    }
    
    async sendChatMessage(chatData) {
        return await this.sendData('chat', chatData);
    }
    
    async sendPedidoCardapio(pedidoData) {
        return await this.sendData('cardapio', pedidoData);
    }
    
    async sendInteresseSkincare(skincareData) {
        return await this.sendData('skincare', skincareData);
    }
    
    async sendWishlistItem(wishlistData) {
        return await this.sendData('wishlist', wishlistData);
    }
    
    async sendAreaIncomodo(areaData) {
        return await this.sendData('areasIncomodo', areaData);
    }
    
    async sendAreaInteresse(areaData) {
        return await this.sendData('areasInteresse', areaData);
    }
    
    async buscarPaciente(pacienteData) {
        return await this.sendData('buscarPaciente', pacienteData);
    }
    
    async sendAnamnese(anamneseData) {
        return await this.sendData('anamnese', anamneseData);
    }
    
    // Método auxiliar para extrair target_value baseado no tipo de interação
    getTargetValue(service, data) {
        switch (service) {
            case 'chat':
                return data.question || data.answer || 'Chat interaction';
            case 'cardapio':
                return JSON.stringify(data.pedidoCompleto || data.pedido_completo);
            case 'skincare':
                return data.treatmentName || data.treatment_name || 'Skincare interest';
            case 'wishlist':
                return data.treatmentName || data.treatment_name || 'Wishlist item';
            case 'areasIncomodo':
                return data.annoyanceArea || data.area || 'Annoyance area';
            case 'areasInteresse':
                return data.interestArea || data.viewedArea || data.area || 'Interest area';
            case 'anamnese':
                return data.nome_completo || data.full_name || 'Anamnese completed';
            default:
                return JSON.stringify(data);
        }
    }
    
    // Método para testar conectividade - desabilitado
    async testConnection() {
        throw new Error('Teste de conectividade desabilitado');
    }
    
    // Método específico para testar endSession
    async testEndSession() {
        try {
            const testData = { 
                test: true, 
                timestamp: new Date().toISOString(),
                eventType: 'test_endSession'
            };
            
            const webhookURL = this.config.getWebhookURL('endSession');
            
            if (!webhookURL) {
                throw new Error('URL do endSession não encontrada');
            }
            
            const response = await fetch(webhookURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(testData)
            });
            
            return { 
                success: response.ok, 
                status: response.status,
                statusText: response.statusText,
                error: response.ok ? null : `HTTP ${response.status}` 
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
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
        },
        sendWishlistItem: async (data) => {
            throw new Error('DataService não disponível');
        },
        sendAreaInteresse: async (data) => {
            throw new Error('DataService não disponível');
        },
        sendAreaIncomodo: async (data) => {
            throw new Error('DataService não disponível');
        },
        testEndSession: async () => {
            return { success: false, error: 'DataService não disponível' };
        }
    };
}

// Exporta para uso em outros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataService;
}