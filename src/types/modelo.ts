export interface Modelo {
  id: number;
  nome: string;
  categoria: 'loja' | 'portfólio' | 'institucional' | 'blog' | 'landing page';
  descricao: string;
  imagem: string;
  preco: number;
  features: string[];
  tecnologias: string[];
  /**
   * Palavras-chave para busca, SEO e organização de catálogo
   */
  tags?: string[];
}