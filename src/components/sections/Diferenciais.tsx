import React from 'react';
import { Zap, Shield, Headphones, Smartphone, Search, Palette } from 'lucide-react';

const Diferenciais: React.FC = () => {
  const diferenciais = [
    {
      icon: Zap,
      titulo: 'Entrega Rápida',
      descricao: 'Seu site pronto e funcionando rapidamente após confirmação do pedido.',
      cor: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Smartphone,
      titulo: '100% Responsivo',
      descricao: 'Design adaptado para todas as telas: celular, tablet e desktop.',
      cor: 'from-[#00C2FF] to-[#00A8E8]'
    },
    {
      icon: Search,
      titulo: 'Otimizado para SEO',
      descricao: 'Configurado para aparecer bem no Google e atrair mais visitantes.',
      cor: 'from-green-500 to-green-600'
    },
    {
      icon: Palette,
      titulo: 'Personalização Completa',
      descricao: 'Cores, textos, imagens e conteúdo adaptados à sua marca.',
      cor: 'from-[#A66CFF] to-[#8B5CF6]'
    },
    {
      icon: Shield,
      titulo: 'Segurança Garantida',
      descricao: 'SSL gratuito, backups automáticos e proteção contra malware.',
      cor: 'from-red-500 to-red-600'
    },
    {
      icon: Headphones,
      titulo: 'Suporte Contínuo',
      descricao: 'Suporte técnico especializado sempre que você precisar.',
      cor: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher a <span className="bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] bg-clip-text text-transparent">Ubytech</span>?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Oferecemos muito mais que um site. Entregamos uma solução completa para seu sucesso digital.
          </p>
        </div>

        {/* Grid de Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((diferencial, index) => {
            const IconComponent = diferencial.icon;
            return (
              <div key={index} className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                {/* Ícone */}
                <div className={`p-4 rounded-xl bg-gradient-to-br ${diferencial.cor} w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Conteúdo */}
                <h3 className="text-xl font-bold mb-4">{diferencial.titulo}</h3>
                <p className="text-white/70 leading-relaxed">{diferencial.descricao}</p>
              </div>
            );
          })}
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            { numero: '500+', label: 'Sites Entregues' },
            { numero: '98%', label: 'Satisfação' },
            { numero: 'Rápida', label: 'Entrega' },
            { numero: '3 anos', label: 'No Mercado' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] bg-clip-text text-transparent mb-2">
                {stat.numero}
              </div>
              <div className="text-white/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;