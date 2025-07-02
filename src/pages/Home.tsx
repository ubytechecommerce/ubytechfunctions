import React from 'react';
import Hero from '../components/sections/Hero';
import ComoFunciona from '../components/sections/ComoFunciona';
import GaleriaModelos from '../components/sections/GaleriaModelos';
import Diferenciais from '../components/sections/Diferenciais';
import DiferencialCRMChatbot from '../components/sections/DiferencialCRMChatbot';
import Testemunhos from '../components/sections/Testemunhos';
import ChamadaFinal from '../components/sections/ChamadaFinal';

const Home: React.FC = () => {
  console.log('[Ubytech] Home page loaded');
  
  return (
    <div>
      <Hero />
      <ComoFunciona />
      <GaleriaModelos />
      <Diferenciais />
      <DiferencialCRMChatbot />
      <Testemunhos />
      <ChamadaFinal />
    </div>
  );
};

export default Home;