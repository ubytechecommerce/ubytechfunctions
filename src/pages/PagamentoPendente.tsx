import React from 'react';
import { Clock, Home, MessageCircle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const PagamentoPendente: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        {/* Ícone de Pendente */}
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
            <Clock className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">
            Pagamento Pendente
          </h1>
          <p className="text-xl text-white/80">
            Seu pagamento está sendo processado
          </p>
        </div>

        {/* Informações sobre Pendência */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-[#00C2FF]">
            O que significa "Pendente"?
          </h2>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">PIX</h3>
                <p className="text-white/70">Se você escolheu PIX, o pagamento pode levar alguns minutos para ser confirmado.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Boleto</h3>
                <p className="text-white/70">Boletos podem levar até 3 dias úteis para serem processados após o pagamento.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Cartão</h3>
                <p className="text-white/70">Alguns cartões podem precisar de verificação adicional do banco.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Próximos Passos */}
        <div className="bg-gradient-to-r from-blue-500/10 to-[#00C2FF]/10 backdrop-blur-lg border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4 text-[#00C2FF]">Próximos Passos</h3>
          
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#00C2FF] rounded-full mt-2"></div>
              <p className="text-white/80">Aguarde a confirmação do pagamento (pode levar alguns minutos)</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#00C2FF] rounded-full mt-2"></div>
              <p className="text-white/80">Você receberá um e-mail quando o pagamento for aprovado</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#00C2FF] rounded-full mt-2"></div>
              <p className="text-white/80">Nossa equipe entrará em contato para iniciar seu projeto</p>
            </div>
          </div>
        </div>

        {/* Aviso Importante */}
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-8">
          <div className="flex items-center gap-3 justify-center">
            <Eye className="w-5 h-5 text-yellow-500" />
            <p className="text-yellow-400 font-medium">
              Não feche esta página até receber a confirmação
            </p>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00C2FF]/25 transition-all duration-300"
          >
            <Clock className="w-5 h-5" />
            Verificar Status
          </button>
          
          <a
            href="https://wa.me/5524988147679?text=Olá! Meu pagamento está pendente e gostaria de verificar o status."
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
          <p className="mb-2">Dúvidas sobre seu pagamento?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <span>📱 (24) 98814-7679</span>
            <span>📧 ubytechecommerce@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagamentoPendente;