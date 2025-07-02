import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Toast from './Toast';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white font-inter">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <Toast />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;