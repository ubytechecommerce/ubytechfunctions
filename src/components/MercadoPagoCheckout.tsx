import React, { useState } from 'react';
import { CreditCard, Smartphone, Zap, Shield, CheckCircle, ExternalLink, AlertTriangle } from 'lucide-react';
import { Modelo } from '../types/modelo';
import { useToast } from '../contexts/ToastContext';
import { mercadoPagoService, CheckoutData } from '../services/mercadoPagoService';

interface MercadoPagoCheckoutProps {
  modelo: Modelo;
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  metodoPagamento: 'pix' | 'credito' | 'debito';
  confirmacao: boolean;
}

const MercadoPagoCheckout: React.FC<MercadoPagoCheckoutProps> = ({ modelo, isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    metodoPagamento: 'pix',
    confirmacao: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    return value;
  };

  const formatTelefone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    setFormData(prev => ({ ...prev, cpf: formatted }));
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatTelefone(e.target.value);
    setFormData(prev => ({ ...prev, telefone: formatted }));
  };

  const validateForm = () => {
    if (!formData.nome || !formData.email || !formData.telefone || !formData.cpf) {
      showToast('Por favor, preencha todos os campos obrigatórios.', 'error');
      return false;
    }

    if (!formData.confirmacao) {
      showToast('Por favor, confirme que está ciente de que este é um pagamento real.', 'error');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast('Por favor, insira um e-mail válido.', 'error');
      return false;
    }

    const cpfNumbers = formData.cpf.replace(/\D/g, '');
    if (cpfNumbers.length !== 11) {
      showToast('Por favor, insira um CPF válido.', 'error');
      return false;
    }

    const telefoneNumbers = formData.telefone.replace(/\D/g, '');
    if (telefoneNumbers.length < 10) {
      showToast('Por favor, insira um telefone válido.', 'error');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const checkoutData: CheckoutData = {
        modelo,
        cliente: {
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          cpf: formData.cpf
        },
        metodoPagamento: formData.metodoPagamento
      };

      console.log('[Ubytech][MercadoPago] Iniciando checkout:', checkoutData);

      const response = await mercadoPagoService.createPreference(checkoutData);

      if (response.success && response.initPoint) {
        showToast('Redirecionando para o pagamento...', 'success');
        
        // Redirecionar para o checkout do Mercado Pago
        mercadoPagoService.redirectToCheckout(response.initPoint);
        
        onClose();
      } else {
        throw new Error(response.error || 'Erro desconhecido');
      }
      
    } catch (error: any) {
      console.error('[Ubytech][MercadoPago] Erro no checkout:', error);
      showToast(error.message || 'Erro ao processar pagamento. Tente novamente.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const metodosPagamento = [
    {
      id: 'pix',
      nome: 'PIX',
      icon: Zap,
      descricao: 'Aprovação instantânea',
      desconto: '5% de desconto',
      taxa: 'Sem taxa adicional'
    },
    {
      id: 'credito',
      nome: 'Cartão de Crédito',
      icon: CreditCard,
      descricao: 'Até 12x sem juros',
      desconto: null,
      taxa: '~2,99% + R$ 0,39'
    },
    {
      id: 'debito',
      nome: 'Cartão de Débito',
      icon: Smartphone,
      descricao: 'Aprovação rápida',
      desconto: null,
      taxa: '~1,99% + R$ 0,39'
    }
  ];

  const precoFinal = formData.metodoPagamento === 'pix' 
    ? modelo.preco * 0.95 
    : modelo.preco;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[#0D1117] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold">Finalizar Compra</h2>
            <p className="text-white/70">{modelo.nome}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Aviso Mercado Pago */}
        <div className="bg-blue-500/10 border border-blue-500/20 p-4 m-6 rounded-xl">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-500" />
            <div>
              <h3 className="font-semibold text-blue-500">Pagamento Seguro via Mercado Pago</h3>
              <p className="text-sm text-blue-400">
                PIX nativo, cartões e outras formas de pagamento brasileiras.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
          {/* Formulário */}
          <div className="lg:w-2/3 p-6 overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dados Pessoais */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#00C2FF]">Dados Pessoais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCC] transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCC] transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleTelefoneChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCC] transition-colors"
                      placeholder="(24) 98814-7679"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      CPF *
                    </label>
                    <input
                      type="text"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleCPFChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCC] transition-colors"
                      placeholder="000.000.000-00"
                    />
                  </div>
                </div>
              </div>

              {/* Método de Pagamento */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#00C2FF]">Método de Pagamento</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {metodosPagamento.map((metodo) => {
                    const IconComponent = metodo.icon;
                    return (
                      <label key={metodo.id} className="cursor-pointer">
                        <input
                          type="radio"
                          name="metodoPagamento"
                          value={metodo.id}
                          checked={formData.metodoPagamento === metodo.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`p-4 rounded-xl border-2 transition-all ${
                          formData.metodoPagamento === metodo.id
                            ? 'border-[#00FFCC] bg-[#00FFCC]/10'
                            : 'border-white/20 bg-white/5 hover:bg-white/10'
                        }`}>
                          <div className="flex items-center gap-3 mb-2">
                            <IconComponent className="w-6 h-6 text-[#00FFCC]" />
                            <span className="font-semibold">{metodo.nome}</span>
                          </div>
                          <p className="text-sm text-white/70">{metodo.descricao}</p>
                          {metodo.desconto && (
                            <p className="text-sm text-green-400 font-medium mt-1">
                              {metodo.desconto}
                            </p>
                          )}
                          <p className="text-xs text-white/50 mt-1">
                            Taxa MP: {metodo.taxa}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Confirmação */}
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="confirmacao"
                    checked={formData.confirmacao}
                    onChange={handleInputChange}
                    required
                    className="mt-1 text-[#00FFCC] focus:ring-[#00FFCC] rounded"
                  />
                  <div>
                    <span className="text-sm font-medium text-yellow-400">
                      Confirmo que estou ciente de que este é um pagamento real
                    </span>
                    <p className="text-xs text-yellow-300 mt-1">
                      Você será redirecionado para o checkout seguro do Mercado Pago.
                    </p>
                  </div>
                </label>
              </div>
            </form>
          </div>

          {/* Resumo */}
          <div className="lg:w-1/3 bg-white/5 p-6 border-l border-white/10">
            <h3 className="text-lg font-semibold mb-4">Resumo do Pedido</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-white/70">Modelo:</span>
                <span className="font-medium">{modelo.nome}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-white/70">Valor original:</span>
                <span>R$ {modelo.preco.toLocaleString('pt-BR')}</span>
              </div>
              
              {formData.metodoPagamento === 'pix' && (
                <div className="flex justify-between text-green-400">
                  <span>Desconto PIX (5%):</span>
                  <span>- R$ {(modelo.preco * 0.05).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
              )}
              
              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-[#00FFCC]">
                    R$ {precoFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>

            {/* Segurança */}
            <div className="bg-white/5 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="font-medium text-green-400">Pagamento Seguro</span>
              </div>
              <p className="text-sm text-white/70">
                Processado pelo Mercado Pago, líder em pagamentos na América Latina
              </p>
            </div>

            {/* Garantias */}
            <div className="space-y-2 mb-6">
              {[
                'Site entregue em até 7 dias',
                'Suporte técnico incluído',
                'Garantia de satisfação',
                'SSL e hospedagem grátis'
              ].map((garantia, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-white/80">{garantia}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading || !formData.confirmacao}
              className="w-full px-6 py-4 bg-[#00FFCC] text-black font-semibold rounded-xl hover:bg-[#00ffd0] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                'Processando...'
              ) : (
                <>
                  <ExternalLink className="w-5 h-5" />
                  Pagar com Mercado Pago
                </>
              )}
            </button>

            <p className="text-center text-white/60 text-xs mt-4">
              Você será redirecionado para o checkout seguro do Mercado Pago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MercadoPagoCheckout;