import React from 'react';
import { XCircle, Home, MessageCircle, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const PagamentoFalha: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        {/* Ícone de Erro */}
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mb-6">
            <XCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">
            Pagamento Não Aprovado
          </h1>
          <p className="text-xl text-white/80">
            Houve um problema com o processamento do seu pagamento
          </p>
        </div>

        {/* Possíveis Causas */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-[#00C2FF]">
            Possíveis Causas
          </h2>
          
          <div className="space-y-3 text-left text-white/80">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Dados do cartão incorretos ou inválidos</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Limite insuficiente no cartão</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Cartão bloqueado ou vencido</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Problema temporário com o processador</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Transação cancelada pelo usuário</span>
            </div>
          </div>
        </div>

        {/* O que fazer */}
        <div className="bg-gradient-to-r from-blue-500/10 to-[#00C2FF]/10 backdrop-blur-lg border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4 text-[#00C2FF]">O que você pode fazer?</h3>
          
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <RefreshCw className="w-5 h-5 text-[#00C2FF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white">Tentar Novamente</h4>
                <p className="text-white/70 text-sm">Verifique os dados e tente realizar o pagamento novamente</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-[#00C2FF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white">Falar Conosco</h4>
                <p className="text-white/70 text-sm">Nossa equipe pode ajudar com outras formas de pagamento</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/modelos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00C2FF]/25 transition-all duration-300"
          >
            <RefreshCw className="w-5 h-5" />
            Tentar Novamente
          </Link>
          
          <a
            href="https://wa.me/5524988147679?text=Olá! Tive um problema com o pagamento e gostaria de ajuda."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FFCC] text-black font-semibold rounded-lg hover:bg-[#00ffd0] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
          >
            <Home className="w-5 h-5" />
            Voltar ao Início
          </Link>
        </div>

        {/* Informações de Contato */}
        <div className="mt-12 text-center text-white/60">
          <p className="mb-2">Precisa de ajuda? Entre em contato:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <span>📱 (24) 98814-7679</span>
            <span>📧 ubytechecommerce@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagamentoFalha;