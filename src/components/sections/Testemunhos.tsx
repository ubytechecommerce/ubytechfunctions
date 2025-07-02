import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testemunhos: React.FC = () => {
  const testemunhos = [
    {
      nome: 'Maria Silva',
      empresa: 'Boutique Elegance',
      foto: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      feedback: 'A Ubytech transformou completamente a presença digital da minha boutique. Em apenas 24h tinha um site profissional que já está trazendo novos clientes!',
      rating: 5
    },
    {
      nome: 'João Santos',
      empresa: 'Advocacia Santos & Associados',
      foto: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      feedback: 'Excelente trabalho! O site ficou exatamente como imaginei. A equipe é muito profissional e o suporte é fantástico. Recomendo para todos.',
      rating: 5
    },
    {
      nome: 'Ana Costa',
      empresa: 'Studio de Beleza Ana',
      foto: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      feedback: 'Melhor investimento que fiz para o meu negócio! O site é lindo, funciona perfeitamente e já aumentou significativamente minha agenda de clientes.',
      rating: 5
    },
    {
      nome: 'Carlos Oliveira',
      empresa: 'Consultoria CO',
      foto: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      feedback: 'Processo super simples e resultado incrível. A Ubytech cumpriu tudo que prometeu: site profissional, entrega rápida e preço justo.',
      rating: 5
    },
    {
      nome: 'Lucia Ferreira',
      empresa: 'Doceria da Lu',
      foto: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      feedback: 'Fiquei impressionada com a qualidade do trabalho. O site da minha doceria ficou um amor! Agora recebo pedidos online todos os dias.',
      rating: 5
    },
    {
      nome: 'Roberto Lima',
      empresa: 'Arquitetura RL',
      foto: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      feedback: 'A Ubytech entendeu perfeitamente o que eu precisava. O portfólio digital do meu escritório de arquitetura ficou espetacular!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos <span className="bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] bg-clip-text text-transparent">clientes</span> dizem
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Mais de 500 empresas já transformaram sua presença digital conosco
          </p>
        </div>

        {/* Grid de Testemunhos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testemunhos.map((testemunho, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-[#00C2FF] mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testemunho.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Feedback */}
              <p className="text-white/80 mb-6 leading-relaxed">
                "{testemunho.feedback}"
              </p>
              
              {/* Autor */}
              <div className="flex items-center gap-4">
                <img
                  src={testemunho.foto}
                  alt={testemunho.nome}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">{testemunho.nome}</h4>
                  <p className="text-sm text-white/60">{testemunho.empresa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#00C2FF]/10 to-[#A66CFF]/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4">Seja o próximo case de sucesso!</h3>
            <p className="text-white/80 mb-6">Junte-se a centenas de empresas que já transformaram seu negócio digital</p>
            <a
              href="/contato"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00C2FF]/25 transition-all duration-300 hover:scale-105"
            >
              Começar Meu Projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testemunhos;