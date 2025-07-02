import React, { useState } from 'react';
import { ExternalLink, Eye, Zap } from 'lucide-react';
import { Modelo } from '../types/modelo';
import ModeloModal from './ModeloModal';

interface ModeloCardProps {
  modelo: Modelo;
}

const ModeloCard: React.FC<ModeloCardProps> = ({ modelo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoriaColors = {
    loja: 'from-green-500 to-green-600',
    'portfólio': 'from-purple-500 to-purple-600',
    institucional: 'from-blue-500 to-blue-600',
    blog: 'from-orange-500 to-orange-600',
    'landing page': 'from-pink-500 to-pink-600'
  };

  return (
    <>
      <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-[#00FFCC]">
        {/* Imagem */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={modelo.imagem}
            alt={`Exemplo de ${modelo.nome} - ${modelo.descricao}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            style={{ filter: 'contrast(1.1)' }}
            loading="lazy"
          />
          {/* Selo Mais Vendido */}
          {modelo.id === 1 && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse z-20">
              Mais vendido
            </div>
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 px-4 py-2 bg-[#00FFCC] text-black font-medium rounded-lg hover:bg-[#00ffd0] transition-all flex items-center justify-center gap-2"
                aria-label={`Ver detalhes do modelo ${modelo.nome}`}
              >
                <Zap className="w-4 h-4" />
                Fale agora e garanta condições especiais!
              </button>
            </div>
          </div>
          {/* Badge Categoria */}
          <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${categoriaColors[modelo.categoria] || 'from-gray-500 to-gray-600'} text-white text-sm font-medium rounded-full capitalize`}>
            {modelo.categoria}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{modelo.nome}</h3>
          <p className="text-white/80 mb-4 min-h-[48px]">{modelo.descricao}</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-bold text-[#00FFCC]">A partir de R$ {modelo.preco}</span>
          </div>
          <button
            onClick={() => window.open('https://wa.me/5524988147679', '_blank')}
            className="w-full px-4 py-2 bg-[#00FFCC] text-black font-medium rounded-lg hover:bg-[#00ffd0] transition-all flex items-center justify-center gap-2"
            aria-label={`Solicitar orçamento do modelo ${modelo.nome} pelo WhatsApp`}
          >
            <Zap className="w-4 h-4" />
            Fale no WhatsApp e receba orçamento rápido
          </button>
        </div>
      </div>
      {/* Modal de detalhes do modelo */}
      <ModeloModal modelo={modelo} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ModeloCard;