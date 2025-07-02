import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import ModeloCard from '../components/ModeloCard';
import { modelos } from '../data/modelos';

const Modelos: React.FC = () => {
  const [filtroCategoria, setFiltroCategoria] = useState('todos');
  const [termoPesquisa, setTermoPesquisa] = useState('');

  console.log('[Ubytech] Modelos page loaded');

  const categorias = ['todos', 'loja', 'portfólio', 'institucional', 'blog'];

  const modelosFiltrados = useMemo(() => {
    return modelos.filter(modelo => {
      const matchCategoria = filtroCategoria === 'todos' || modelo.categoria === filtroCategoria;
      const matchPesquisa = modelo.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
                           modelo.descricao.toLowerCase().includes(termoPesquisa.toLowerCase());
      return matchCategoria && matchPesquisa;
    });
  }, [filtroCategoria, termoPesquisa]);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] bg-clip-text text-transparent">Modelos</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Escolha entre nossos modelos profissionais e modernos. Cada template é cuidadosamente projetado para converter visitantes em clientes.
          </p>
        </div>

        {/* Filtros */}
        <section aria-label="Filtros de modelos" className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Pesquisa */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Pesquisar modelos..."
                value={termoPesquisa}
                onChange={(e) => setTermoPesquisa(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00C2FF] transition-colors"
                aria-label="Pesquisar modelos"
              />
            </div>

            {/* Filtro de Categoria */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Categorias de modelos">
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setFiltroCategoria(categoria)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 capitalize ${
                    filtroCategoria === categoria
                      ? 'bg-gradient-to-r from-[#00C2FF] to-[#A66CFF] text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                  aria-pressed={filtroCategoria === categoria}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid de Modelos */}
        <section aria-label="Lista de modelos disponíveis" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modelosFiltrados.map((modelo) => (
            <ModeloCard key={modelo.id} modelo={modelo} />
          ))}
        </section>

        {/* Nenhum resultado */}
        {modelosFiltrados.length === 0 && (
          <div className="text-center py-20" role="status" aria-live="polite">
            <Filter className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-white/70 mb-2">Nenhum modelo encontrado</h2>
            <p className="text-white/50">Tente ajustar os filtros ou termo de pesquisa.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modelos;