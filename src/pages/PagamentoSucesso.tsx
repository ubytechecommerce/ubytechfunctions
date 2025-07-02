import React, { useEffect } from 'react';
import { CheckCircle, Home, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PagamentoSucesso: React.FC = () => {
  useEffect(() => {
    // Log para analytics
    console.log('[Ubytech] Pagamento realizado com sucesso');
    
    // Aqui você pode adicionar:
    // - Google Analytics event
    // - Facebook Pixel
    // - Outras integrações de tracking
  }, []);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        {/* Ícone de Sucesso */}
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-500">
            Pagamento Aprovado!
          </h1>
          <p className="text-xl text-white/80">
            Seu pedido foi processado com sucesso
          </p>
        </div>

        {/* Informações */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-[#00C2FF]">
            O que acontece agora?
          </h2>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#00C2FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Confirmação por E-mail</h3>
                <p className="text-white/70">Você receberá um e-mail com os detalhes do seu pedido em alguns minutos.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#00C2FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Contato da Equipe</h3>
                <p className="text-white/70">Nossa equipe entrará em contato via WhatsApp para iniciar o desenvolvimento.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#00C2FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Desenvolvimento</h3>
                <p className="text-white/70">Seu site será desenvolvido e personalizado conforme suas necessidades.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Entrega</h3>
                <p className="text-white/70">Seu site estará pronto e online rapidamente!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contato */}
        <div className="bg-gradient-to-r from-[#00FFCC]/10 to-green-600/10 backdrop-blur-lg border border-[#00FFCC]/20 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Precisa falar conosco?</h3>
          <p className="text-white/80 mb-4">
            Nossa equipe está pronta para tirar suas dúvidas e iniciar seu projeto.
          </p>
          <a
            href="https://wa.me/5524988147679?text=Olá! Acabei de fazer um pagamento e gostaria de falar sobre meu projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FFCC] text-black font-semibold rounded-lg hover:bg-[#00ffd0] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
          >
            <Home className="w-5 h-5" />
            Voltar ao Início
          </Link>
          
          <Link
            to="/modelos"
            className="px-6 py-3 bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00C2FF]/25 transition-all duration-300"
          >
            Ver Outros Modelos
          </Link>
        </div>

        {/* Informações de Contato */}
        <div className="mt-12 text-center text-white/60">
          <p className="mb-2">Dúvidas? Entre em contato:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <span>📱 (24) 98814-7679</span>
            <span>📧 ubytechecommerce@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagamentoSucesso;