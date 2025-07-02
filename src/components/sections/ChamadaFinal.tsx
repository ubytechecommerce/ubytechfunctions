import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ChamadaFinal: React.FC = () => {
  const beneficios = [
    'Site profissional rapidamente',
    'Design 100% responsivo',
    'Otimizado para conversão',
    'SSL e segurança inclusos',
    'Suporte técnico contínuo'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/20 via-transparent to-[#A66CFF]/20" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#00C2FF]/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Pronto para 
          <span className="block bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] bg-clip-text text-transparent">
            dominar o digital?
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
          Não perca mais tempo. Transforme sua presença online hoje mesmo e 
          comece a atrair mais clientes para seu negócio.
        </p>

        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="flex items-center gap-3 text-left">
              <CheckCircle className="w-6 h-6 text-[#00C2FF] flex-shrink-0" />
              <span className="text-white/90">{beneficio}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            to="/modelos"
            className="group px-10 py-5 bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] text-white font-bold text-lg rounded-lg hover:shadow-xl hover:shadow-[#00C2FF]/30 transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            Escolher Meu Modelo
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/contato"
            className="px-10 py-5 bg-[#00FFCC] text-black font-bold text-lg rounded-lg hover:bg-[#00ffd0] transition-all duration-300"
          >
            Solicitar Orçamento
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Mais de 500 sites entregues</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>98% de satisfação dos clientes</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Suporte técnico incluído</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChamadaFinal;