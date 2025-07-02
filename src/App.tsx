import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Modelos from './pages/Modelos';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import PagamentoSucesso from './pages/PagamentoSucesso';
import PagamentoFalha from './pages/PagamentoFalha';
import PagamentoPendente from './pages/PagamentoPendente';
import { ToastProvider } from './contexts/ToastContext';

function App() {
  console.log('[Ubytech] App initialized - ubytech.com.br');
  
  return (
    <ToastProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modelos" element={<Modelos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/pagamento/sucesso" element={<PagamentoSucesso />} />
            <Route path="/pagamento/falha" element={<PagamentoFalha />} />
            <Route path="/pagamento/pendente" element={<PagamentoPendente />} />
          </Routes>
        </Layout>
      </Router>
    </ToastProvider>
  );
}

export default App;