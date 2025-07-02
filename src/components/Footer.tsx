import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D1117] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <div className="relative">
                <img
                  src="/logo 3.png"
                  alt="Ubytech - Sites prontos para seu sucesso digital"
                  className="h-12 w-auto"
                />
                {/* Texto da logo integrado */}
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full">
                  <div className="text-white font-bold text-lg tracking-tight">
                    <span className="bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] bg-clip-text text-transparent">
                      Uby
                    </span>
                    <span className="text-white">Tech</span>
                  </div>
                  <div className="text-xs text-white/60 font-medium -mt-1">
                    você tecnológico
                  </div>
                </div>
              </div>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Sites prontos profissionais para impulsionar seu negócio digital. 
              Transforme sua presença online com nossos modelos modernos e responsivos.
            </p>
            {/* Selo de confiança */}
            <div className="mb-4 flex items-center gap-2">
              <img src="/logo 3.png" alt="Selo de confiança Ubytech" className="h-6 w-6 rounded-full border-2 border-green-400" />
              <span className="text-xs text-green-400 font-semibold">Selo de confiança: atendimento rápido e suporte especializado</span>
            </div>
            {/* Microcopy de segurança */}
            <div className="mb-4">
              <span className="text-xs text-white/50">Seus dados são protegidos. Atendimento 100% seguro e transparente.</span>
            </div>

            <div className="flex gap-4">
              <a
                href="https://wa.me/5524988147679"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1EPBz78C5G/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-[#1877F2]/20 hover:text-[#1877F2] transition-all duration-300"
                aria-label="Facebook"
              >
                {/* Ícone do Facebook */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a
                href="https://instagram.com/ubytech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-[#A66CFF]/20 hover:text-[#A66CFF] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:ubytechecommerce@gmail.com"
                className="p-2 rounded-lg bg-white/10 hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-all duration-300"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link to="/" className="hover:text-[#00FFCC] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/modelos" className="hover:text-[#00FFCC] transition-colors">
                  Modelos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-[#00FFCC] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-[#00FFCC] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="https://wa.me/5524988147679" className="hover:text-[#00FFCC] transition-colors">
                  (24) 98814-7679
                </a>
              </li>
              <li>
                <a href="mailto:ubytechecommerce@gmail.com" className="hover:text-[#00FFCC] transition-colors">
                  ubytechecommerce@gmail.com
                </a>
              </li>
              <li className="text-sm">
                Rio de Janeiro, RJ - Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2024 Ubytech. Todos os direitos reservados. • Pagamentos processados via Mercado Pago
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;