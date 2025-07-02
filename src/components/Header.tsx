import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Modelos', path: '/modelos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0D1117]/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img
                src="/logo 3.png"
                alt="Ubytech - Sites prontos para seu sucesso digital"
                className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
              />
              {/* Texto da logo integrado */}
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full">
                <div className="text-white font-bold text-xl tracking-tight">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-[#00FFCC] ${
                  location.pathname === item.path 
                    ? 'text-[#00FFCC]' 
                    : 'text-white/80'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00FFCC] to-[#A66CFF] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contato"
            className="hidden md:block px-6 py-2 bg-[#00FFCC] text-black font-medium rounded-lg hover:bg-[#00ffd0] transition-all duration-300 hover:scale-105"
          >
            Começar Agora
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path 
                      ? 'text-[#00FFCC]' 
                      : 'text-white/80 hover:text-[#00FFCC]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-6 py-2 bg-[#00FFCC] text-black font-medium rounded-lg text-center"
              >
                Começar Agora
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;