import React from 'react';
import { X, Zap } from 'lucide-react';
import { Modelo } from '../types/modelo';

interface ModeloModalProps {
  modelo: Modelo;
  isOpen: boolean;
  onClose: () => void;
}

const ModeloModal: React.FC<ModeloModalProps> = ({ modelo, isOpen, onClose }) => {
  if (!isOpen) return null;

  const categoriaColors = {
    loja: 'from-green-500 to-green-600',
    'portfólio': 'from-purple-500 to-purple-600',
    institucional: 'from-blue-500 to-blue-600',
    blog: 'from-orange-500 to-orange-600',
    'landing page': 'from-pink-500 to-pink-600'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[#0D1117] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className={`px-3 py-1 bg-gradient-to-r ${categoriaColors[modelo.categoria] || 'from-gray-500 to-gray-600'} text-white text-sm font-medium rounded-full capitalize`}>
              {modelo.categoria}
            </div>
            <h2 className="text-2xl font-bold">{modelo.nome}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
          {/* Imagem */}
          <div className="lg:w-1/2 aspect-video lg:aspect-auto">
            <img
              src={modelo.imagem}
              alt={modelo.nome}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Detalhes */}
          <div className="lg:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <p className="text-white/80 mb-4">{modelo.descricao}</p>
              <ul className="mb-4 list-disc list-inside text-white/70">
                {modelo.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="mb-4">
                <span className="text-lg font-bold text-[#00FFCC]">A partir de R$ {modelo.preco}</span>
              </div>
            </div>
            <button
              onClick={() => window.open('https://wa.me/5524988147679', '_blank')}
              className="w-full px-4 py-2 bg-[#00FFCC] text-black font-medium rounded-lg hover:bg-[#00ffd0] transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Entre em contato e faça seu orçamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeloModal;