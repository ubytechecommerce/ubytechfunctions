import React from 'react';
import { Search, Palette, Rocket, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComoFunciona: React.FC = () => {
  const passos = [
    {
      icon: Search,
      numero: '01',
      titulo: 'Escolha seu Modelo',
      descricao: 'Navegue por nossa galeria e escolha o template que mais combina com seu negócio.',
      cor: 'from-[#00C2FF] to-[#00A8E8]'
    },
    {
      icon: Palette,
      numero: '02',
      titulo: 'Personalize',
      descricao: 'Enviamos seu conteúdo e personalizamos cores, textos e imagens para sua marca.',
      cor: 'from-[#A66CFF] to-[#8B5CF6]'
    },
    {
      icon: Rocket,
      numero: '03',
      titulo: 'Publicamos',
      descricao: 'Colocamos seu site no ar com domínio próprio e configuramos tudo para funcionar.',
      cor: 'from-[#00C2FF] to-[#A66CFF]'
    },
    {
      icon: CheckCircle,
      numero: '04',
      titulo: 'Pronto!',
      descricao: 'Seu site está online e pronto para receber clientes. Suporte contínuo incluído.',
      cor: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como <span className="bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] bg-clip-text text-transparent">Funciona</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Processo simples e transparente para colocar seu site no ar rapidamente
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {passos.map((passo, index) => {
            const IconComponent = passo.icon;
            return (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < passos.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0" />
                )}
                
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 relative z-10">
                  {/* Número */}
                  <div className="text-6xl font-bold text-white/10 mb-4">
                    {passo.numero}
                  </div>
                  
                  {/* Ícone */}
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${passo.cor} w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Conteúdo */}
                  <h3 className="text-xl font-bold mb-4">{passo.titulo}</h3>
                  <p className="text-white/70 leading-relaxed">{passo.descricao}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#00C2FF]/10 to-[#A66CFF]/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
            <p className="text-white/80 mb-6">Escolha seu modelo e tenha seu site profissional rapidamente</p>
            <Link
              to="/modelos"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00C2FF]/25 transition-all duration-300 hover:scale-105"
            >
              Ver Modelos Disponíveis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;