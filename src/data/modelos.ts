import { Modelo } from '../types/modelo';

// Modelos de serviços e produtos digitais oferecidos
// Cada modelo possui descrição, preço inicial, recursos e tecnologias utilizadas
export const modelos: Modelo[] = [
  // Landing Page Profissional: solução rápida e acessível para campanhas e captação de leads
  {
    id: 1,
    nome: 'Landing Page Profissional',
    categoria: 'landing page',
    descricao: 'Página única, moderna, responsiva e otimizada para conversão. Ideal para campanhas, produtos ou serviços.',
    imagem: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 249,
    features: [
      'Design moderno e responsivo',
      'Formulário de contato integrado',
      'SEO técnico básico',
      'Carregamento rápido',
      'Integração com WhatsApp',
      'Pronta para publicação em Vercel/Netlify'
    ],
    tecnologias: ['React', 'Tailwind CSS', 'Vite'],
    tags: ['landing page', 'conversão', 'rápido', 'mobile', 'lead', 'one page']
  },
  // Blog Simples: estrutura pronta para quem quer publicar conteúdo de forma fácil
  {
    id: 2,
    nome: 'Blog Simples',
    categoria: 'blog',
    descricao: 'Blog pronto para publicar, layout limpo e responsivo. Ideal para quem quer começar rápido e fácil.',
    imagem: 'https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 349,
    features: [
      'Publicação de posts',
      'Busca interna',
      'Design responsivo',
      'SEO técnico básico',
      'Integração com WhatsApp',
      'Pronto para deploy'
    ],
    tecnologias: ['React', 'Tailwind CSS', 'Vite'],
    tags: ['blog', 'conteúdo', 'notícias', 'artigos', 'mobile', 'SEO']
  },
  // Blog com postagens iniciais: já entregue com conteúdo para atrair visitantes
  {
    id: 3,
    nome: 'Blog com postagens iniciais',
    categoria: 'blog',
    descricao: 'Blog entregue já com 3 postagens profissionais, pronto para atrair visitantes desde o primeiro dia.',
    imagem: 'https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 499,
    features: [
      'Tudo do Blog Simples',
      '3 postagens iniciais inclusas',
      'Copywriting otimizado',
      'Sugestão de pautas',
      'Pronto para crescer'
    ],
    tecnologias: ['React', 'Tailwind CSS', 'Vite'],
    tags: ['blog', 'conteúdo', 'copywriting', 'SEO', 'inicial', 'pronto']
  },
  // Pacote mensal de postagens: mantenha o blog atualizado com conteúdo profissional
  {
    id: 4,
    nome: 'Pacote mensal de postagens para Blog',
    categoria: 'blog',
    descricao: 'Receba 4 postagens profissionais por mês para manter seu blog sempre atualizado e relevante. Integre com WhatsApp, Google Analytics, e receba sugestões automáticas de temas!',
    imagem: 'https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 349,
    features: [
      '4 posts mensais',
      'Copywriting otimizado',
      'SEO básico',
      'Sugestão de temas',
      'Entrega mensal'
    ],
    tecnologias: ['Conteúdo', 'Copywriting', 'SEO'],
    tags: ['blog', 'conteúdo', 'mensal', 'copywriting', 'SEO', 'atualização']
  },
  // Site Institucional: presença digital completa para empresas e profissionais
  {
    id: 5,
    nome: 'Site Institucional',
    categoria: 'institucional',
    descricao: 'Site completo para empresas, profissionais ou negócios locais. Estrutura clássica: Home, Sobre, Serviços, Contato.',
    imagem: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 590,
    features: [
      'Páginas institucionais',
      'Formulário de contato',
      'Design responsivo',
      'SEO técnico básico',
      'Integração com WhatsApp',
      'Pronto para publicação'
    ],
    tecnologias: ['React', 'Tailwind CSS', 'Vite'],
    tags: ['institucional', 'empresa', 'negócio', 'profissional', 'site', 'presença']
  },
  // Revisão de Site: diagnóstico e consultoria para melhorar sites existentes
  {
    id: 6,
    nome: 'Revisão de Site',
    categoria: 'institucional',
    descricao: 'Análise completa do seu site atual: performance, SEO, responsividade, acessibilidade e sugestões de melhoria.',
    imagem: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 199,
    features: [
      'Relatório detalhado de problemas',
      'Checklist de SEO e performance',
      'Sugestões práticas de melhoria',
      'Análise mobile e desktop',
      'Revisão de acessibilidade',
      'Consultoria rápida por WhatsApp'
    ],
    tecnologias: ['Auditoria', 'SEO', 'Performance', 'UX'],
    tags: ['revisão', 'auditoria', 'SEO', 'performance', 'acessibilidade', 'consultoria']
  },
  // Revisão Textual Profissional: correção e aprimoramento de textos digitais
  {
    id: 7,
    nome: 'Revisão Textual Profissional',
    categoria: 'institucional',
    descricao: 'Correção ortográfica, gramatical e aprimoramento de textos para sites, blogs e materiais digitais.',
    imagem: 'https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 99,
    features: [
      'Correção ortográfica e gramatical',
      'Aprimoramento de clareza e persuasão',
      'Sugestões de títulos e chamadas',
      'Entrega rápida',
      'Ajuste para SEO',
      'Atendimento personalizado'
    ],
    tecnologias: ['Copywriting', 'SEO', 'Português'],
    tags: ['revisão', 'texto', 'copywriting', 'português', 'SEO', 'correção']
  },
  // Portfólio Profissional: destaque para profissionais e criativos
  {
    id: 8,
    nome: 'Portfólio Profissional',
    categoria: 'portfólio',
    descricao: 'Site elegante para apresentar trabalhos, projetos e depoimentos. Ideal para designers, fotógrafos, freelancers e criativos.',
    imagem: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 299,
    features: [
      'Galeria de projetos/trabalhos',
      'Página Sobre',
      'Depoimentos de clientes',
      'Links para redes sociais',
      'Design responsivo',
      'Formulário de contato integrado'
    ],
    tecnologias: ['React', 'Tailwind CSS', 'Vite'],
    tags: ['portfólio', 'criativo', 'projetos', 'galeria', 'profissional', 'site']
  },
  // Mini Site Link na Bio: centralize seus links em uma página moderna
  {
    id: 9,
    nome: 'Mini Site Link na Bio',
    categoria: 'landing page',
    descricao: 'Página única para centralizar todos os seus links importantes. Ideal para TikTok, WhatsApp e outras redes.',
    imagem: 'https://images.pexels.com/photos/2656673/pexels-photo-2656673.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 119,
    features: [
      'Links ilimitados',
      'Personalização de cores',
      'Foto de perfil e bio',
      'Botões para WhatsApp, etc.',
      'Design mobile first',
      'Pronto para publicar'
    ],
    tecnologias: ['React', 'Tailwind CSS', 'Vite'],
    tags: ['link na bio', 'landing page', 'mobile', 'links', 'personalizável']
  },
  // Site Jurídico: presença digital para advogados e escritórios
  {
    id: 10,
    nome: 'Site Jurídico Profissional',
    categoria: 'institucional',
    descricao: 'Site sob medida para advogados, escritórios e profissionais do Direito. Estrutura clássica, foco em credibilidade e captação de clientes.',
    imagem: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 390,
    features: [
      'Página inicial institucional',
      'Áreas de atuação',
      'Equipe/advogados',
      'Formulário de contato',
      'Depoimentos de clientes',
      'Design responsivo e sóbrio',
      'SEO básico',
      'Pronto para publicação'
    ],
    tecnologias: ['React', 'Tailwind CSS', 'Vite'],
    tags: ['jurídico', 'advogado', 'escritório', 'institucional', 'direito', 'site']
  },
  // Revisão de Documentos Jurídicos e Profissionais
  {
    id: 11,
    nome: 'Revisão de Documentos',
    categoria: 'institucional',
    descricao: 'Revisão ortográfica, gramatical e de clareza para contratos, petições, currículos, apresentações e outros documentos profissionais.',
    imagem: 'https://images.pexels.com/photos/4427545/pexels-photo-4427545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 129,
    features: [
      'Correção ortográfica e gramatical',
      'Ajuste de clareza e formalidade',
      'Sugestões de melhoria textual',
      'Revisão de contratos, petições, currículos, etc.',
      'Entrega rápida',
      'Atendimento personalizado'
    ],
    tecnologias: ['Copywriting', 'Português', 'Revisão'],
    tags: ['revisão', 'documentos', 'jurídico', 'contrato', 'currículo', 'profissional']
  },
  // Blog Profissional no Blogger (Google)
  {
    id: 12,
    nome: 'Blog Profissional no Blogger',
    categoria: 'blog',
    descricao: 'Blog pronto, personalizado e otimizado na plataforma Blogger (Google). Ideal para quem quer publicar conteúdo com facilidade, baixo custo e hospedagem gratuita.',
    imagem: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 199,
    features: [
      'Configuração e personalização completa',
      'Layout responsivo e moderno',
      'Integração com Google Analytics',
      'Domínio próprio (opcional)',
      'SEO básico',
      'Instruções para uso e atualização'
    ],
    tecnologias: ['Blogger', 'Google', 'SEO'],
    tags: ['blog', 'blogger', 'google', 'conteúdo', 'hospedagem grátis', 'SEO']
  },
  // Site Estático GitHub + Netlify
  {
    id: 13,
    nome: 'Site Estático GitHub + Netlify',
    categoria: 'institucional',
    descricao: 'Site institucional, portfólio ou landing page hospedado gratuitamente via GitHub Pages e Netlify. Entrega com deploy automatizado e domínio customizado.',
    imagem: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 179,
    features: [
      'Setup de repositório no GitHub',
      'Deploy automatizado no Netlify',
      'Domínio customizado',
      'Design responsivo',
      'Instruções para atualização fácil',
      'Hospedagem gratuita'
    ],
    tecnologias: ['GitHub', 'Netlify', 'React', 'Vite'],
    tags: ['site estático', 'github', 'netlify', 'deploy', 'hospedagem grátis', 'institucional']
  },
  // Blog para Eventos e Convites Digitais
  {
    id: 14,
    nome: 'Blog para Eventos e Convites',
    categoria: 'blog',
    descricao: 'Blog pronto para divulgação de eventos, festas, workshops ou convites digitais. Inclui agenda, galeria de fotos e formulário de confirmação.',
    imagem: 'https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 229,
    features: [
      'Agenda de eventos',
      'Galeria de fotos',
      'Formulário de confirmação (RSVP)',
      'Design responsivo',
      'Integração com WhatsApp',
      'Pronto para publicar'
    ],
    tecnologias: ['React', 'Tailwind CSS', 'Vite'],
    tags: ['blog', 'evento', 'convite', 'galeria', 'agenda', 'rsvp']
  },
  // Blog para Restaurantes e Delivery
  {
    id: 15,
    nome: 'Blog para Restaurantes e Delivery',
    categoria: 'blog',
    descricao: 'Blog pronto para restaurantes, lanchonetes e delivery. Divulgue cardápio, promoções, novidades e receba pedidos pelo WhatsApp.',
    imagem: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 259,
    features: [
      'Página de cardápio',
      'Sessão de promoções',
      'Galeria de fotos',
      'Botão de pedido via WhatsApp',
      'Design responsivo',
      'SEO básico'
    ],
    tecnologias: ['React', 'Tailwind CSS', 'Vite'],
    tags: ['blog', 'restaurante', 'delivery', 'cardápio', 'promoção', 'whatsapp']
  },
  // Blog para Profissionais de Saúde
  {
    id: 16,
    nome: 'Blog para Profissionais de Saúde',
    categoria: 'blog',
    descricao: 'Blog pronto para médicos, dentistas, psicólogos e terapeutas. Compartilhe artigos, dicas de saúde, depoimentos e informações de contato.',
    imagem: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 249,
    features: [
      'Publicação de artigos e dicas',
      'Sessão de depoimentos',
      'Página de contato',
      'Design responsivo',
      'SEO básico',
      'Pronto para publicar'
    ],
    tecnologias: ['React', 'Tailwind CSS', 'Vite'],
    tags: ['blog', 'saúde', 'profissional', 'artigos', 'depoimentos', 'contato']
  },
  // Implantação de CRM Profissional Integrado
  {
    id: 17,
    nome: 'Implantação de CRM Profissional',
    categoria: 'institucional', // usando categoria existente para evitar erro de tipagem
    descricao: 'Implantação, personalização e integração de CRM gratuito (Google, Notion, HubSpot, etc.) para gestão de clientes, vendas e atendimento. Integre com WhatsApp, e-mail, Google Agenda, automações de lembretes e relatórios. Tudo pronto para você controlar seu negócio de forma simples e eficiente.',
    imagem: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    preco: 249,
    features: [
      'Configuração e personalização do CRM',
      'Cadastro de clientes, funil de vendas e histórico',
      'Integração com site, WhatsApp e e-mail',
      'Automação de tarefas e lembretes',
      'Treinamento básico para uso',
      'Sem mensalidade de software, só o serviço'
    ],
    tecnologias: ['Google Sheets', 'Notion', 'HubSpot', 'Trello'],
    tags: ['crm', 'gestão', 'clientes', 'vendas', 'automação', 'serviço']
  }
];

// Observação: Todos os modelos podem ser entregues com integração opcional de chatbot inteligente (Chatbase, WhatsApp, etc.), configurado em português, com mensagens personalizadas, FAQ e captação de leads. Consulte para adicionar ao seu projeto!