import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Instagram } from 'lucide-react';
import ContatoForm from '../components/ContatoForm';

const Contato: React.FC = () => {
  console.log('[Ubytech] Contato page loaded');

  const contatos = [
    {
      icon: Phone,
      titulo: 'WhatsApp',
      info: '(24) 98814-7679',
      link: 'https://wa.me/5524988147679',
      color: 'from-[#00FFCC] to-[#00ffd0]'
    },
    {
      icon: Mail,
      titulo: 'E-mail',
      info: 'ubytechecommerce@gmail.com',
      link: 'mailto:ubytechecommerce@gmail.com',
      color: 'from-[#00C2FF] to-[#0099CC]'
    },
    {
      icon: Instagram,
      titulo: 'Instagram',
      info: '@ubytech',
      link: 'https://instagram.com/ubytech',
      color: 'from-[#A66CFF] to-[#8B5CF6]'
    },
    {
      icon: MapPin,
      titulo: 'Localização',
      info: 'Rio de Janeiro, RJ - Brasil',
      link: '#',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="bg-gradient-to-r from-[#00FFCC] to-[#A66CFF] bg-clip-text text-transparent">Contato</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Pronto para transformar sua presença digital? Fale conosco e descubra como podemos ajudar seu negócio a crescer online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <ContatoForm />

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Fale Conosco</h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Estamos aqui para ajudar você a encontrar a solução perfeita para seu negócio. 
                Entre em contato através de qualquer um dos canais abaixo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contatos.map((contato, index) => {
                const IconComponent = contato.icon;
                return (
                  <a
                    key={index}
                    href={contato.link}
                    target={contato.link.startsWith('http') ? '_blank' : '_self'}
                    rel={contato.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="block bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${contato.color} w-fit mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-1">{contato.titulo}</h3>
                    <p className="text-white/70">{contato.info}</p>
                  </a>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-[#00FFCC]/10 to-green-600/10 backdrop-blur-lg border border-[#00FFCC]/20 rounded-xl p-6 text-center">
              <MessageCircle className="w-12 h-12 text-[#00FFCC] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Precisa de uma resposta rápida?</h3>
              <p className="text-white/80 mb-4">
                Fale conosco pelo WhatsApp e tire suas dúvidas em tempo real.
              </p>
              <a
                href="https://wa.me/5524988147679"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#00FFCC] text-black font-semibold rounded-lg hover:bg-[#00ffd0] transition-colors"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;