import React, { useState } from 'react';
import { Send, User, Building, Zap } from 'lucide-react';
import { useToast } from '../contexts/ToastContext';

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  tipoCliente: 'pessoal' | 'comercial';
  nomeEmpresa?: string;
  cnpj?: string;
  descricao: string;
  coresDesejadas: string;
  plataformas: string[];
  urgencia: 'rapida' | 'normal';
}

const ContatoForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    whatsapp: '',
    tipoCliente: 'pessoal',
    nomeEmpresa: '',
    cnpj: '',
    descricao: '',
    coresDesejadas: '',
    plataformas: [],
    urgencia: 'normal'
  });
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  console.log('[Ubytech][ContatoForm] Componente carregado');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlataformaChange = (plataforma: string) => {
    setFormData(prev => ({
      ...prev,
      plataformas: prev.plataformas.includes(plataforma)
        ? prev.plataformas.filter(p => p !== plataforma)
        : [...prev.plataformas, plataforma]
    }));
  };

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const formatCNPJ = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 14) {
      return numbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    return value;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setFormData(prev => ({ ...prev, whatsapp: formatted }));
  };

  const handleCNPJChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCNPJ(e.target.value);
    setFormData(prev => ({ ...prev, cnpj: formatted }));
  };

  const validateForm = () => {
    if (!formData.nome || !formData.email || !formData.whatsapp || !formData.descricao) {
      showToast('Por favor, preencha todos os campos obrigatórios.', 'error');
      return false;
    }

    if (formData.tipoCliente === 'comercial' && !formData.nomeEmpresa) {
      showToast('Nome da empresa é obrigatório para clientes comerciais.', 'error');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast('Por favor, insira um e-mail válido.', 'error');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          mensagem: `WhatsApp: ${formData.whatsapp}\nTipo: ${formData.tipoCliente}\nEmpresa: ${formData.nomeEmpresa || ''}\nCNPJ: ${formData.cnpj || ''}\nDescrição: ${formData.descricao}\nCores: ${formData.coresDesejadas}\nPlataformas: ${formData.plataformas.join(', ')}\nUrgência: ${formData.urgencia}`
        })
      });
      const result = await response.json();
      if (response.ok && result.success) {
        showToast('Solicitação enviada com sucesso!', 'success');
        setFormData({
          nome: '',
          email: '',
          whatsapp: '',
          tipoCliente: 'pessoal',
          nomeEmpresa: '',
          cnpj: '',
          descricao: '',
          coresDesejadas: '',
          plataformas: [],
          urgencia: 'normal'
        });
      } else {
        showToast(result.error || 'Erro ao enviar solicitação. Tente novamente.', 'error');
      }
    } catch (error) {
      console.error('[Ubytech][Formulário] Erro:', error);
      showToast('Erro ao enviar solicitação. Tente novamente.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const plataformasOptions = [
    'Site para PC',
    'Site para Mobile',
    'Landing Page',
    'Loja virtual',
    'Portfólio',
    'Blog pessoal'
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Send className="w-6 h-6 text-[#00FFCC]" />
        Solicitar Orçamento
      </h2>
      {/* Aviso de resposta rápida */}
      <div className="mb-6 p-3 bg-[#e6fff8] border-l-4 border-[#00FFCC] text-black rounded shadow-sm text-sm" role="status" aria-live="polite">
        <strong>Resposta rápida:</strong> normalmente respondemos em até 1 hora no WhatsApp ou e-mail!
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Tipo de Cliente */}
        <div>
          <label className="block text-sm font-medium text-white/80 mb-3">
            Tipo de Cliente
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tipoCliente"
                value="pessoal"
                checked={formData.tipoCliente === 'pessoal'}
                onChange={handleInputChange}
                className="text-[#00FFCC] focus:ring-[#00FFCC]"
              />
              <User className="w-4 h-4" />
              <span>Pessoal</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tipoCliente"
                value="comercial"
                checked={formData.tipoCliente === 'comercial'}
                onChange={handleInputChange}
                className="text-[#00FFCC] focus:ring-[#00FFCC]"
              />
              <Building className="w-4 h-4" />
              <span>Comercial</span>
            </label>
          </div>
        </div>

        {/* Campos Básicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-white/80 mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCC] transition-colors"
              placeholder="Seu nome completo"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCC] transition-colors"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-white/80 mb-2">
            WhatsApp *
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleWhatsAppChange}
            required
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCC] transition-colors"
            placeholder="(24) 98814-7679"
          />
        </div>

        {/* Campos Comerciais */}
        {formData.tipoCliente === 'comercial' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <div>
              <label htmlFor="nomeEmpresa" className="block text-sm font-medium text-white/80 mb-2">
                Nome da Empresa *
              </label>
              <input
                type="text"
                id="nomeEmpresa"
                name="nomeEmpresa"
                value={formData.nomeEmpresa}
                onChange={handleInputChange}
                required={formData.tipoCliente === 'comercial'}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCC] transition-colors"
                placeholder="Nome da sua empresa"
              />
            </div>
            
            <div>
              <label htmlFor="cnpj" className="block text-sm font-medium text-white/80 mb-2">
                CNPJ
              </label>
              <input
                type="text"
                id="cnpj"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleCNPJChange}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCC] transition-colors"
                placeholder="00.000.000/0000-00"
              />
            </div>
          </div>
        )}

        {/* Descrição */}
        <div>
          <label htmlFor="descricao" className="block text-sm font-medium text-white/80 mb-2">
            O que você deseja? *
          </label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCC] transition-colors resize-none"
            placeholder="Descreva seu projeto, necessidades e objetivos..."
          ></textarea>
        </div>

        {/* Cores Desejadas */}
        <div>
          <label htmlFor="coresDesejadas" className="block text-sm font-medium text-white/80 mb-2">
            Cores Desejadas
          </label>
          <input
            type="text"
            id="coresDesejadas"
            name="coresDesejadas"
            value={formData.coresDesejadas}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCC] transition-colors"
            placeholder="Ex: Azul e branco, tons escuros, colorido..."
          />
        </div>

        {/* Plataformas */}
        <div>
          <label className="block text-sm font-medium text-white/80 mb-3">
            Plataforma Desejada
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {plataformasOptions.map((plataforma) => (
              <label key={plataforma} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.plataformas.includes(plataforma)}
                  onChange={() => handlePlataformaChange(plataforma)}
                  className="text-[#00FFCC] focus:ring-[#00FFCC] rounded"
                />
                <span className="text-sm">{plataforma}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Urgência */}
        <div>
          <label className="block text-sm font-medium text-white/80 mb-3">
            Urgência
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="urgencia"
                value="rapida"
                checked={formData.urgencia === 'rapida'}
                onChange={handleInputChange}
                className="text-[#00FFCC] focus:ring-[#00FFCC]"
              />
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Entrega rápida (até 7 dias)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="urgencia"
                value="normal"
                checked={formData.urgencia === 'normal'}
                onChange={handleInputChange}
                className="text-[#00FFCC] focus:ring-[#00FFCC]"
              />
              <span>Entrega normal (até 15 dias)</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-4 bg-[#00FFCC] text-black font-semibold rounded-xl hover:bg-[#00ffd0] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            'Enviando...'
          ) : (
            <>
              <Send className="w-5 h-5" />
              Solicitar Orçamento
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContatoForm;