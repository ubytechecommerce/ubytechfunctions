import React from 'react';
import { Target, Eye, Heart, Users, Award, Zap } from 'lucide-react';

const Sobre: React.FC = () => {
  console.log('[Ubytech] Sobre page loaded');

  const valores = [
    {
      icon: Target,
      titulo: 'Missão',
      descricao: 'Democratizar o acesso a sites profissionais, oferecendo soluções prontas e acessíveis para empresas de todos os tamanhos prosperarem no digital.'
    },
    {
      icon: Eye,
      titulo: 'Visão',
      descricao: 'Ser a principal referência em sites prontos no Brasil, transformando a forma como pequenas empresas constroem sua presença online.'
    },
    {
      icon: Heart,
      titulo: 'Valores',
      descricao: 'Qualidade, inovação, acessibilidade e compromisso com o sucesso dos nossos clientes. Acreditamos que todo negócio merece uma presença digital de qualidade.'
    }
  ];

  const estatisticas = [
    { numero: '500+', label: 'Sites Entregues' },
    { numero: '98%', label: 'Satisfação' },
    { numero: '3', label: 'Anos de Mercado' },
    { numero: 'Rápida', label: 'Entrega' }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] bg-clip-text text-transparent">Ubytech</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Transformamos ideias em presenças digitais impactantes. Conheça nossa história e os valores que nos movem.
          </p>
        </div>

        {/* História */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] bg-clip-text text-transparent">
              Nossa História
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                A Ubytech nasceu da necessidade observada no mercado: pequenas e médias empresas precisavam de sites profissionais, mas enfrentavam barreiras como alto custo e complexidade técnica.
              </p>
              <p>
                Em 2021, fundamos a empresa com o objetivo de democratizar o acesso a soluções digitais de qualidade. Desenvolvemos um catálogo de templates profissionais que combinam design moderno, funcionalidade e facilidade de personalização.
              </p>
              <p>
                Hoje, já ajudamos mais de 500 empresas a estabelecer sua presença digital com sites que realmente convertem visitantes em clientes. Nossa abordagem única de "sites prontos" revolucionou a forma como nossos clientes pensam sobre presença online.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#00C2FF]/20 to-[#A66CFF]/20 backdrop-blur-lg border border-white/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <Zap className="w-24 h-24 text-[#00C2FF] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Inovação Contínua</h3>
                <p className="text-white/70">
                  Sempre buscando as melhores tecnologias e tendências de design para oferecer soluções que realmente fazem a diferença.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {estatisticas.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] bg-clip-text text-transparent mb-2">
                  {stat.numero}
                </div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valores.map((valor, index) => {
            const IconComponent = valor.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#00C2FF] to-[#A66CFF] w-fit mb-6">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#00C2FF]">{valor.titulo}</h3>
                <p className="text-white/80 leading-relaxed">{valor.descricao}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[#00C2FF]/10 to-[#A66CFF]/10 backdrop-blur-lg border border-white/10 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para transformar seu negócio digital?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já confiam na Ubytech para criar sua presença online profissional.
            </p>
            <a
              href="/contato"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00C2FF]/25 transition-all duration-300 hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;