import React from 'react';
import { Bot, Users, CheckCircle, Zap, Database } from 'lucide-react';

const DiferencialCRMChatbot: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0D1117] to-[#181C25] border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-2">
          <Bot className="w-8 h-8 text-[#00FFCC]" />
          CRM Profissional & Chatbot Inteligente
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Aumente sua produtividade, organize seus contatos e ofereça atendimento automático 24h com soluções integradas e acessíveis. Tudo pronto para você vender mais e atender melhor, sem mensalidade de software!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 rounded-xl p-6 flex flex-col items-center">
            <Users className="w-8 h-8 text-[#A66CFF] mb-2" />
            <h3 className="font-semibold text-xl mb-2">CRM Integrado</h3>
            <p className="text-white/70 text-base">Gestão de clientes, funil de vendas, histórico de contatos e automações. Tudo personalizado para seu negócio.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 flex flex-col items-center">
            <Bot className="w-8 h-8 text-[#00FFCC] mb-2" />
            <h3 className="font-semibold text-xl mb-2">Chatbot Inteligente</h3>
            <p className="text-white/70 text-base">Atendimento automático no site ou WhatsApp, com mensagens personalizadas, FAQ e captação de leads 24h.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 flex flex-col items-center">
            <CheckCircle className="w-8 h-8 text-[#00C2FF] mb-2" />
            <h3 className="font-semibold text-xl mb-2">Sem Mensalidade</h3>
            <p className="text-white/70 text-base">Você só paga pela implantação e personalização. Use ferramentas gratuitas e tenha autonomia total!</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#contato" className="px-8 py-4 bg-[#00FFCC] text-black font-bold rounded-xl hover:bg-[#00ffd0] transition-all text-lg shadow-lg">Quero saber mais</a>
          <a href="#modelos" className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-[#A66CFF]/20 transition-all text-lg border border-white/20">Ver todos os modelos</a>
        </div>
      </div>
    </section>
  );
};

export default DiferencialCRMChatbot;
