import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, CreditCard } from 'lucide-react';
import ModeloCard from '../ModeloCard';
import { modelos } from '../../data/modelos';

const GaleriaModelos: React.FC = () => {
  // Mostrar apenas os 6 primeiros modelos
  const modelosDestaque = modelos.slice(0, 6);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] bg-clip-text text-transparent">Modelos</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Templates profissionais criados especialmente para converter visitantes em clientes
          </p>
          
          {/* Destaque Pagamento */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
              <Zap className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium">5% desconto no PIX</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#00C2FF]/20 border border-[#00C2FF]/30 rounded-full">
              <CreditCard className="w-4 h-4 text-[#00C2FF]" />
              <span className="text-[#00C2FF] font-medium">Parcelamento em até 12x</span>
            </div>
          </div>
        </div>

        {/* Grid de Modelos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {modelosDestaque.map((modelo) => (
            <ModeloCard key={modelo.id} modelo={modelo} />
          ))}
        </div>

        {/* Ver Todos */}
        <div className="text-center">
          <Link
            to="/modelos"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00C2FF]/25 transition-all duration-300 hover:scale-105"
          >
            Ver Todos os Modelos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GaleriaModelos;