import axios from 'axios';
import { Modelo } from '../types/modelo';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export interface ClienteData {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
}

export interface CheckoutData {
  modelo: Modelo;
  cliente: ClienteData;
  metodoPagamento: 'pix' | 'credito' | 'debito' | 'boleto';
  parcelas?: number;
}

export interface CheckoutResponse {
  success: boolean;
  checkoutCode?: string;
  checkoutUrl?: string;
  reference?: string;
  environment?: string;
  error?: string;
  details?: string;
}

export interface SessionResponse {
  success: boolean;
  sessionId?: string;
  publicKey?: string;
  environment?: string;
  error?: string;
}

class PagBankService {
  async createSession(): Promise<SessionResponse> {
    try {
      console.log('[PagBank] Criando sessão...');
      const response = await axios.get(`${API_BASE_URL}/pagbank/session`);
      
      console.log('[PagBank] Sessão criada:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('[PagBank] Erro ao criar sessão:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Erro ao inicializar pagamento'
      };
    }
  }

  async processCheckout(data: CheckoutData): Promise<CheckoutResponse> {
    try {
      console.log('[PagBank] Enviando dados do checkout:', data);
      
      const response = await axios.post(`${API_BASE_URL}/pagbank/checkout`, data, {
        timeout: 30000
      });
      
      console.log('[PagBank] Resposta do checkout:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('[PagBank] Erro no checkout:', error);
      
      return {
        success: false,
        error: error.response?.data?.error || 'Erro ao processar pagamento',
        details: error.response?.data?.details || error.message
      };
    }
  }

  async consultarTransacao(transactionId: string): Promise<any> {
    try {
      const response = await axios.get(`${API_BASE_URL}/pagbank/transaction/${transactionId}`);
      return response.data;
    } catch (error) {
      console.error('[PagBank] Erro ao consultar transação:', error);
      throw error;
    }
  }

  async verificarConfiguracao(): Promise<any> {
    try {
      const response = await axios.get(`${API_BASE_URL}/pagbank/config`);
      return response.data;
    } catch (error) {
      console.error('[PagBank] Erro ao verificar configuração:', error);
      throw error;
    }
  }

  // Método para redirecionar para o checkout do PagBank
  redirectToCheckout(checkoutCode: string, environment: 'sandbox' | 'production' = 'sandbox') {
    const baseUrl = environment === 'sandbox' 
      ? 'https://sandbox.pagseguro.uol.com.br'
      : 'https://pagseguro.uol.com.br';
    
    const checkoutUrl = `${baseUrl}/v2/checkout/payment.html?code=${checkoutCode}`;
    
    console.log('[PagBank] Redirecionando para:', checkoutUrl);
    window.open(checkoutUrl, '_blank');
  }

  // Método para testar conexão
  async testarConexao(): Promise<any> {
    try {
      const response = await axios.get(`${API_BASE_URL}/test`);
      return response.data;
    } catch (error) {
      console.error('[PagBank] Erro ao testar conexão:', error);
      throw error;
    }
  }
}

// Exportar como pagSeguroService para manter compatibilidade
export const pagSeguroService = new PagBankService();
export const pagBankService = new PagBankService();