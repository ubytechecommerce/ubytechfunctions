import axios from 'axios';
import { Modelo } from '../types/modelo';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://ubytech.com.br/api';

export interface ClienteData {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
}

export interface CheckoutData {
  modelo: Modelo;
  cliente: ClienteData;
  metodoPagamento: 'pix' | 'credito' | 'debito';
}

export interface PreferenceResponse {
  success: boolean;
  preferenceId?: string;
  initPoint?: string;
  sandboxInitPoint?: string;
  reference?: string;
  error?: string;
  details?: string;
}

class MercadoPagoService {
  async createPreference(data: CheckoutData): Promise<PreferenceResponse> {
    try {
      console.log('[MercadoPago] Criando preferência:', data);
      
      const response = await axios.post(`${API_BASE_URL}/mercadopago/create-preference`, data, {
        timeout: 30000
      });
      
      console.log('[MercadoPago] Preferência criada:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('[MercadoPago] Erro ao criar preferência:', error);
      
      return {
        success: false,
        error: error.response?.data?.error || 'Erro ao processar pagamento',
        details: error.response?.data?.details || error.message
      };
    }
  }

  async consultarPagamento(paymentId: string): Promise<any> {
    try {
      const response = await axios.get(`${API_BASE_URL}/mercadopago/payment/${paymentId}`);
      return response.data;
    } catch (error) {
      console.error('[MercadoPago] Erro ao consultar pagamento:', error);
      throw error;
    }
  }

  async verificarConfiguracao(): Promise<any> {
    try {
      const response = await axios.get(`${API_BASE_URL}/mercadopago/config`);
      return response.data;
    } catch (error) {
      console.error('[MercadoPago] Erro ao verificar configuração:', error);
      throw error;
    }
  }

  redirectToCheckout(initPoint: string) {
    console.log('[MercadoPago] Redirecionando para:', initPoint);
    window.open(initPoint, '_blank');
  }

  async testarConexao(): Promise<any> {
    try {
      const response = await axios.get(`${API_BASE_URL}/test`);
      return response.data;
    } catch (error) {
      console.error('[MercadoPago] Erro ao testar conexão:', error);
      throw error;
    }
  }
}

export const mercadoPagoService = new MercadoPagoService();