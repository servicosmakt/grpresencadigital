/**
 * Content, links, and text data for GR Presença Digital.
 * Strictly preserves the original copies, URLs, prices, and WhatsApp messages.
 */

export const WHATSAPP_NUMBER = "31975321051";

export const WA_MESSAGES = {
  general: "Olá! Conheci a GR Presença Digital pelo site e gostaria de saber mais sobre como colocar meu negócio no digital.",
  pacote1: "Olá! Conheci a GR Presença Digital pelo site e tenho interesse no pacote Presença Digital. Gostaria de saber mais.",
  pacote2: "Olá! Conheci a GR Presença Digital pelo site e tenho interesse no pacote Presença + Site. Gostaria de saber mais.",
  pacote3: "Olá! Conheci a GR Presença Digital pelo site e tenho interesse no pacote Presença + Divulgação. Gostaria de saber mais.",
  crm: "Olá! Vi no site o anúncio do CRM para Profissionais da Beleza e Autônomos e gostaria de entrar no grupo de lançamento para garantir minha vaga entre os 10 primeiros com preço especial!"
} as const;

export type MessageKey = keyof typeof WA_MESSAGES;

export function getWhatsAppUrl(msgKey: MessageKey = "general"): string {
  const text = WA_MESSAGES[msgKey] || WA_MESSAGES.general;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const CRM_VIP_GROUP_URL = "https://chat.whatsapp.com/GZ5z74pSPWDB4QhYHZW6Bo?s=cl&p=a&mlu=4&ilr=4";

export interface Benefit {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export const BENEFITS: Benefit[] = [
  {
    id: "visibilidade",
    title: "Mais visibilidade",
    description: "Quando alguém busca por serviços perto de você no Google, sua empresa precisa aparecer no topo com avaliações e rotas fáceis. Apareça onde seu cliente já está.",
    badge: "Google & Região"
  },
  {
    id: "credibilidade",
    title: "Credibilidade",
    description: "Um site limpo e elegante e links organizados no Instagram transmitem profissionalismo e confiança imediata, valorizando o seu trabalho artesanal e técnico.",
    badge: "Confiança Imediata"
  },
  {
    id: "clientes",
    title: "Mais clientes",
    description: "Transforme curiosas em clientes fidelizadas. Canais diretos de WhatsApp e agendamentos sem atrito multiplicam suas conversões diárias.",
    badge: "Conversão sem Atrito"
  },
  {
    id: "crescimento",
    title: "Crescimento",
    description: "Construa uma presença digital sólida, duradoura e acessível para o orçamento de pequenos negócios, com alto retorno e previsibilidade.",
    badge: "Estrutura Sólida"
  }
];

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  importance: string;
  tag: string;
  iconName: string;
  previewType: "google" | "instagram" | "site" | "cartao" | "divulgacao" | "identidade";
}

export const SOLUTIONS: Solution[] = [
  {
    id: "google-perfil",
    title: "Google Meu Negócio",
    subtitle: "Apareça onde seu cliente já está.",
    description: "Posicionamos o seu negócio no topo das buscas locais do Google e Google Maps quando clientes procuram por serviços na sua região.",
    importance: "É onde as pessoas buscam profissionais no momento exato em que precisam de atendimento local, gerando ligações e rotas de GPS diretas.",
    tag: "Visibilidade no Mapa",
    iconName: "MapPin",
    previewType: "google"
  },
  {
    id: "instagram-bio",
    title: "Instagram",
    subtitle: "Conteúdo que conecta e engaja.",
    description: "Centralizamos todos os seus canais de atendimento, catálogo de procedimentos, tabela de preços e rotas em um único link elegante no Instagram.",
    importance: "Elimina a confusão na hora da seguidora marcar horário, transformando curiosas do Instagram em clientes agendadas.",
    tag: "Link para Bio Organizado",
    iconName: "Instagram",
    previewType: "instagram"
  },
  {
    id: "site-exclusivo",
    title: "Site",
    subtitle: "Sua marca online, 24h por dia.",
    description: "Estrutura limpa contendo cabeçalho institucional, apresentação dos serviços, tabela informativa, endereço/atendimento e botão com chamada direta para o WhatsApp.",
    importance: "Transmite seriedade profissional imediata, facilitando o contato de clientes que desejam agendar horários sem burocracia.",
    tag: "Site Exclusivo e Responsivo",
    iconName: "Globe",
    previewType: "site"
  },
  {
    id: "cartao-digital",
    title: "Cartão Digital",
    subtitle: "Praticidade e profissionalismo no seu contato.",
    description: "Um cartão de visitas digital com toque interativo que pode ser compartilhado facilmente no WhatsApp com parcerias e novas clientes.",
    importance: "Dispensa cartões de papel impressos e garante que seus contatos fiquem salvos de forma interativa no celular de quem receber.",
    tag: "Networking Moderno",
    iconName: "CreditCard",
    previewType: "cartao"
  },
  {
    id: "divulgacao-local",
    title: "Divulgação Local",
    subtitle: "Colocamos tudo em prática no seu negócio na sua região.",
    description: "Planejamento e ações de divulgação direcionadas para grupos e comunidades locais da sua região, promovendo seus serviços diretamente para quem mora perto do seu estúdio.",
    importance: "Atrai o público que realmente pode frequentar seu espaço com frequência, enchendo sua agenda com clientes vizinhas.",
    tag: "Atração Regional",
    iconName: "Megaphone",
    previewType: "divulgacao"
  },
  {
    id: "identidade-visual",
    title: "Identidade Visual",
    subtitle: "Sua marca com mais personalidade.",
    description: "Alinhamento visual completo com paleta de cores, tipografia e elementos gráficos que valorizam a percepção de valor do seu negócio no digital.",
    importance: "Faz seu negócio parecer mais refinado e profissional, permitindo cobrar valores mais justos pelos seus procedimentos e serviços.",
    tag: "Presença de Marca",
    iconName: "Palette",
    previewType: "identidade"
  }
];

export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  detail: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnóstico",
    shortDesc: "Entendo seu negócio, seu objetivo e seu público.",
    detail: "O primeiro contato é feito diretamente pelo WhatsApp para entender o momento do seu negócio e sua maior necessidade."
  },
  {
    number: "02",
    title: "Planejamento",
    shortDesc: "Crio a estratégia ideal para sua presença digital.",
    detail: "A informação para a criação do projeto é alinhada de forma prática e estruturada em um modelo sob medida."
  },
  {
    number: "03",
    title: "Implementação",
    shortDesc: "Coloco tudo em prática com cuidado e atenção.",
    detail: "Desenvolvo seu projeto sob medida, unindo visual moderno, agilidade e otimização para o Google."
  }
];

export interface PortfolioItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  imageFallbackKey: "port1" | "port2" | "port3" | "port4" | "port5" | "port6";
  link: string;
  accent: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "amostra-1",
    tag: "Amostra • Lash & Beauty",
    title: "Estilo Clean e Soft",
    subtitle: "Studio de Extensão de Cílios e Sobrancelhas",
    description: "Paleta suave, foco em leveza, delicadeza e agendamento prático para profissionais de cílios e sobrancelhas.",
    imageFallbackKey: "port1",
    link: "https://modelos.grpresencadigital.site/lashdesigner/",
    accent: "#F43F5E"
  },
  {
    id: "amostra-2",
    tag: "Amostra • Fios e Visagismo",
    title: "Studio de Beleza Exclusivo",
    subtitle: "Visagismo, Cortes & Tratamentos Capilares",
    description: "Layout sofisticado em tons alabaster e carvão, ideal para especialistas em cabelo e visagismo que buscam alto padrão.",
    imageFallbackKey: "port2",
    link: "https://modelos.grpresencadigital.site/salaodebeleza/",
    accent: "#D97706"
  },
  {
    id: "amostra-3",
    tag: "Amostra • Minimalismo Premium",
    title: "Estilo Minimal Modern",
    subtitle: "Alta Conversão e Tabela de Procedimentos",
    description: "Foco total em conversão rápida, tabela de procedimentos clara e chamada direta para agendamento via WhatsApp.",
    imageFallbackKey: "port3",
    link: "https://modelos.grpresencadigital.site/maquiadora/",
    accent: "#2563EB"
  },
  {
    id: "amostra-4",
    tag: "Amostra • Estética Avançada",
    title: "Estilo Clínico e Sofisticado",
    subtitle: "Harmonização, Skincare & Procedimentos",
    description: "Design voltado para clínicas de estética, destacando protocolos com rigor profissional e credibilidade científica.",
    imageFallbackKey: "port4",
   link: "https://modelos.grpresencadigital.site/esteticista/",
    accent: "#0D9488"
  },
  {
    id: "amostra-5",
    tag: "Amostra • Barbearia Urbana",
    title: "Estilo Urbano & Marcante",
    subtitle: "Barbearia Clássica & Moderna",
    description: "Tipografia forte, tons escuros e texturas que transmitem personalidade, estilo autêntico e praticidade.",
    imageFallbackKey: "port5",
    link: "https://modelos.grpresencadigital.site/barbearia/",
    accent: "#475569"
  },
  {
    id: "amostra-6",
    tag: "Amostra • Nail Art Autoral",
    title: "Estilo Criativo & Color",
    subtitle: "Alongamento, Gel & Esmaltação Artística",
    description: "Paletas vibrantes e artísticas para nail designers que expressam autenticidade e atraem clientes de valor.",
    imageFallbackKey: "port6",
    link: "https://modelos.grpresencadigital.site/naildesigner/",
    accent: "#8B5CF6"
  }
];

export interface PackageItem {
  id: "pacote1" | "pacote2" | "pacote3";
  name: string;
  target: string;
  price: string;
  period: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export const PACKAGES: PackageItem[] = [
  {
    id: "pacote1",
    name: "Essencial",
    target: "Ideal para quem está começando a estruturar sua presença.",
    price: "Sob Medida",
    period: "Investimento personalizado",
    features: [
      "Google Meu Negócio (Perfil Otimizado)",
      "Instagram (Link na Bio Organizado)",
      "Cartão Digital Interativo"
    ],
    ctaText: "Falar no WhatsApp"
  },
  {
    id: "pacote2",
    name: "Profissional",
    target: "Mais visibilidade e mais resultados para consolidar sua marca.",
    price: "Sob Medida",
    period: "Investimento personalizado",
    badge: "MAIS PROCURADO",
    isPopular: true,
    features: [
      "Google Meu Negócio Otimizado",
      "Site Exclusivo e Responsivo",
      "Instagram (Link na Bio)",
      "Cartão Digital Interativo",
      "Página de serviços e galeria organizadas"
    ],
    ctaText: "Falar no WhatsApp"
  },
  {
    id: "pacote3",
    name: "Crescer",
    target: "Para quem quer ir além com presença completa e atração local.",
    price: "Sob Medida",
    period: "Investimento personalizado",
    features: [
      "Google Meu Negócio + Link na Bio",
      "Site Exclusivo e Responsivo de Alto Padrão",
      "Cartão Digital Interativo",
      "Divulgação Local Estratégica (Grupos da Região)",
    
    ],
    ctaText: "Falar no WhatsApp"
  }
];

export const LEGAL_DOCS = {
  privacidade: {
    title: "Política de Privacidade",
    badge: "LGPD & Privacidade",
    sections: [
      {
        heading: "1. Compromisso com a sua Privacidade",
        content: "A GR Presença Digital valoriza a sua privacidade. Esta política descreve como coletamos, usamos e protegemos as informações fornecidas por você ao utilizar nosso site e serviços digitais."
      },
      {
        heading: "2. Coleta de Dados",
        content: "Coletamos informações de contato (como nome e WhatsApp) exclusivamente quando fornecidas de forma voluntária por você através dos nossos botões de atendimento no WhatsApp ou solicitações de orçamento."
      },
      {
        heading: "3. Finalidade do Uso",
        content: "Seus dados são utilizados exclusivamente para responder às suas solicitações, prestar consultoria digital especializada e realizar o atendimento dos serviços contratados. Jamais comercializamos seus dados com terceiros."
      },
      {
        heading: "4. Segurança das Informações",
        content: "Adotamos padrões e medidas técnicas de segurança adequadas para proteger suas informações contra qualquer acesso não autorizado, alteração ou perda."
      }
    ]
  },
  termos: {
    title: "Termos de Uso",
    badge: "Condições de Serviço",
    sections: [
      {
        heading: "1. Aceite dos Termos",
        content: "Bem-vindo à GR Presença Digital. Ao acessar nosso site, você concorda em cumprir e estar integralmente vinculado aos seguintes termos e condições de uso."
      },
      {
        heading: "2. Propriedade Intelectual",
        content: "Todo o conteúdo presente neste site (textos, marcas, design, layout, mockups e logotipos) é de propriedade exclusiva da GR Presença Digital e protegido pelas leis de propriedade intelectual."
      },
      {
        heading: "3. Prestação dos Serviços",
        content: "Nossos serviços de criação de sites, Google Perfil, links para bio, cartões digitais e consultoria são prestados conforme o escopo e contrato acordados individualmente com cada cliente."
      },
      {
        heading: "4. Atualizações",
        content: "Reservamo-nos o direito de modificar estes termos a qualquer momento para refletir melhorias no serviço, entrando em vigor imediatamente após a publicação no site."
      }
    ]
  },
  cookies: {
    title: "Política de Cookies",
    badge: "Transparência de Navegação",
    sections: [
      {
        heading: "1. O que são Cookies",
        content: "Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita páginas na internet. Eles servem para lembrar preferências e garantir o funcionamento correto e rápido do site."
      },
      {
        heading: "2. Como Utilizamos",
        content: "Utilizamos cookies estritamente necessários para permitir uma navegação ágil, responsiva e segura em qualquer dispositivo."
      },
      {
        heading: "3. Gerenciamento",
        content: "Você pode configurar seu navegador para recusar ou excluir cookies a qualquer momento nas configurações do seu navegador, sem prejuízo à navegação básica no site."
      }
    ]
  },
  lgpd: {
    title: "Proteção de Dados & LGPD",
    badge: "Lei nº 13.709/2018",
    sections: [
      {
        heading: "1. Conformidade com a LGPD",
        content: "A GR Presença Digital atua em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), tratando seus dados com transparência, necessidade e segurança."
      },
      {
        heading: "2. Direitos do Titular",
        content: "Você tem o direito de solicitar a qualquer momento a confirmação da existência de tratamento, o acesso aos dados, a correção de dados incompletos ou a eliminação dos seus dados de contato dos nossos registros."
      },
      {
        heading: "3. Canal de Atendimento ao Titular",
        content: "Para exercer quaisquer dos seus direitos referentes à privacidade e proteção de dados, basta entrar em contato diretamente com nossa equipe pelo WhatsApp oficial (31) 97532-1051."
      }
    ]
  }
} as const;

export type LegalDocKey = keyof typeof LEGAL_DOCS;
