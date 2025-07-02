import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/10 via-transparent to-[#A66CFF]/10" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#00C2FF]/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#A66CFF]/20 rounded-full blur-3xl opacity-50" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full mb-8">
            <Star className="w-4 h-4 text-[#00C2FF]" />
            <span className="text-sm font-medium">Mais de 500 sites entregues</span>
            <Star className="w-4 h-4 text-[#A66CFF]" />
          </div>
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Sites prontos, CRM e Chatbot para seu
            <span className="block bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] bg-clip-text text-transparent">
              sucesso digital
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Soluções profissionais, rápidas e acessíveis para você conquistar mais clientes e crescer online. Fale agora e receba uma proposta personalizada!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5524988147679"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00C2FF] hover:bg-[#00ffd0] text-black font-bold rounded-lg text-lg shadow-lg transition-all gap-2 focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
              aria-label="Fale agora pelo WhatsApp"
            >
              <Zap className="w-5 h-5" /> Fale agora pelo WhatsApp
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg text-lg shadow-lg transition-all gap-2 focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
              aria-label="Solicite orçamento por e-mail"
            >
              <ArrowRight className="w-5 h-5" /> Solicite orçamento
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;