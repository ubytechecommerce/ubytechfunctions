import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    console.log('[Ubytech][WhatsApp] Redirecionando para WhatsApp');
    window.open('https://wa.me/5524988147679', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#00FFCC] text-black p-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 hover:bg-[#00ffd0] hover:shadow-xl"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;