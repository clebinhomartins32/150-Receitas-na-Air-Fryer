import { Recipe } from '../types';

export const RECIPES_DATA: Recipe[] = [
  // Acompanhamentos
  {
    id: '1',
    name: 'Batata Rústica com Alecrim e Casca Crocante',
    category: 'acompanhamentos',
    time: '25-30 min',
    temp: '180°C - 200°C',
    highlight: 'Sequinha por fora e macia como purê por dentro, sem usar 1 gota de óleo.',
    servings: '3 a 4 porções',
    tags: ['Sem Óleo', 'Crocante', 'Mais Pedida']
  },
  {
    id: '2',
    name: 'Pão de Alho Especial com Crosta de Queijo Gratinado',
    category: 'acompanhamentos',
    time: '7 min',
    temp: '200°C',
    highlight: 'Creme de alho artesanal com mussarela derretida e toque de orégano.',
    servings: '4 fatias',
    tags: ['Rápido', 'Petisco', 'Churrasco']
  },
  {
    id: '3',
    name: 'Anéis de Cebola Empanados Super Crocantes',
    category: 'acompanhamentos',
    time: '8 min',
    temp: '200°C',
    highlight: 'Técnica secreta de imersão na água gelada para tirar a acidez e dourar por igual.',
    servings: '3 porções',
    tags: ['Crocante', 'Sem Fritura', 'Aperitivo']
  },
  {
    id: '4',
    name: 'Tomate Recheado com Ricota Fresca e Castanhas',
    category: 'acompanhamentos',
    time: '4 min',
    temp: '200°C',
    highlight: 'Gratinado ao ponto com recheio cremoso e crocância das castanhas-de-caju.',
    servings: '4 unidades',
    tags: ['Low Carb', 'Fitness', 'Rápido']
  },
  {
    id: '5',
    name: 'Chips de Banana da Terra com Toque Cítrico',
    category: 'acompanhamentos',
    time: '40 min',
    temp: '180°C',
    highlight: 'Snack perfeito para beliscar à tarde, crocância duradoura e natural.',
    servings: 'Pote 200g',
    tags: ['Snack Saudável', 'Sem Glúten', 'Vegano']
  },
  {
    id: '6',
    name: 'Couve Crispy Crocante em Folhas Finas',
    category: 'acompanhamentos',
    time: '5 min',
    temp: '180°C',
    highlight: 'Fica sequinha e desmancha na boca, ideal para acompanhar qualquer prato.',
    servings: '2 a 3 porções',
    tags: ['5 Minutos', 'Super Saudável']
  },
  {
    id: '7',
    name: 'Mandioca Frita Dourada sem Óleo',
    category: 'acompanhamentos',
    time: '10 min',
    temp: '200°C',
    highlight: 'Casquinha estaladiça com toque sutil de páprica e maciez impecável.',
    servings: '4 porções',
    tags: ['Clássico', 'Petisco']
  },

  // Pratos Principais
  {
    id: '8',
    name: 'Churrasco de Picanha com Fumaça de Carvão na Airfryer',
    category: 'pratos_principais',
    time: '15 min',
    temp: '200°C',
    highlight: 'O segredo da pedra de carvão em brasa que dá aroma e gosto idêntico ao churrasco!',
    servings: '4 pessoas',
    tags: ['Aroma de Brasa', 'Carne Nobre', 'Exclusivo']
  },
  {
    id: '9',
    name: 'Costelinha de Porco ao Molho Barbecue Caramelizado',
    category: 'pratos_principais',
    time: '35 min',
    temp: '200°C',
    highlight: 'Marinada com alecrim e limão; carne soltando do osso com crosta agridoce.',
    servings: '3 a 4 porções',
    tags: ['Molho Barbecue', 'Derrete na Boca']
  },
  {
    id: '10',
    name: 'Lasanha de Berinjela Gratinada ao Sugo',
    category: 'pratos_principais',
    time: '20 min',
    temp: '160°C',
    highlight: 'Camadas de queijo derretido, molho de tomate fresco e berinjelas grelhadas sem amargor.',
    servings: 'Travessa média',
    tags: ['Low Carb', 'Muito Pedida']
  },
  {
    id: '11',
    name: 'Frango Empanado Crocante com Crosta de Farofa Temperada',
    category: 'pratos_principais',
    time: '20 min',
    temp: '200°C',
    highlight: 'Marinado com mostarda escura e páprica defumada, crocância imbatível.',
    servings: '4 porções',
    tags: ['Sucesso Crianças', 'Super Crocante']
  },
  {
    id: '12',
    name: 'Hambúrguer Gourmet Recheado com Cream Cheese',
    category: 'pratos_principais',
    time: '9 min',
    temp: '200°C',
    highlight: 'Carne alta, ponto suculento e recheio de queijo cremoso escorrendo ao morder.',
    servings: '2 a 3 hambúrgueres',
    tags: ['Gourmet', 'Fácil']
  },
  {
    id: '13',
    name: 'Camarão Alho e Azeite Grelhado no Ponto',
    category: 'pratos_principais',
    time: '10 min',
    temp: '180°C',
    highlight: 'Camarões macios, sem ressecar e com alho douradinho aromático.',
    servings: '2 a 3 porções',
    tags: ['Frutos do Mar', 'Sofisticado']
  },
  {
    id: '14',
    name: 'Medalhão de Filé Mignon ao Molho de Gorgonzola',
    category: 'pratos_principais',
    time: '10 min',
    temp: '200°C',
    highlight: 'Corte nobre selado com perfeição e coberto com molho cremoso aveludado.',
    servings: '2 porções',
    tags: ['Jantar Especial', 'Restaurante em Casa']
  },

  // Sobremesas
  {
    id: '15',
    name: 'Pudim de Leite Tradicional Lisinho com Calda Dourada',
    category: 'sobremesas',
    time: '1h15 min',
    temp: '110°C',
    highlight: 'Textura acetinada impecável sem precisar ligar forno convencional grande.',
    servings: '8 fatias',
    tags: ['Sem Furinhos', 'Sobremesa de Domingo']
  },
  {
    id: '16',
    name: 'Petit Gâteau Quentinho com Recheio Escorrendo',
    category: 'sobremesas',
    time: '8 min',
    temp: '200°C',
    highlight: 'Bordas assadas com o coração de chocolate 70% derretido e cremoso.',
    servings: '2 ramequins',
    tags: ['Chocolatudo', 'Sobremesa Francesa']
  },
  {
    id: '17',
    name: 'Mini Tortinhas de Banana com Massa Folhada de Pastel',
    category: 'sobremesas',
    time: '12 min',
    temp: '200°C',
    highlight: 'Recheio com canela e baunilha, finalizadas com manteiga derretida e açúcar.',
    servings: '6 unidades',
    tags: ['Crocante', 'Rápido de Fazer']
  },
  {
    id: '18',
    name: 'Churros Dourados com Recheio de Doce de Leite',
    category: 'sobremesas',
    time: '15 min',
    temp: '180°C',
    highlight: 'Massa clássica sequinha, sem encharcar de gordura, com açúcar e canela.',
    servings: '12 churros',
    tags: ['Infância', 'Sem Gordura']
  },
  {
    id: '19',
    name: 'Brigadeiro Cremoso de Colher na Airfryer',
    category: 'sobremesas',
    time: '8 min',
    temp: '180°C',
    highlight: 'Feito direto na gaveta sem precisar ficar 30 minutos mexendo no fogão!',
    servings: '4 porções',
    tags: ['Praticidade Máxima', 'Para Matar a Vontade']
  },

  // Pães e Bolos
  {
    id: '20',
    name: 'Bolo de Cenoura com Calda de Chocolate Pretinha e Brilhante',
    category: 'paes_bolos',
    time: '20 min',
    temp: '180°C',
    highlight: 'Massa fofa e cor dourada viva com a famosa cobertura que forma casquinha brilhante.',
    servings: '6 a 8 fatias',
    tags: ['Mais Amado do Brasil', 'Café da Tarde']
  },
  {
    id: '21',
    name: 'Pão Caseiro Quentinho de Minuto',
    category: 'paes_bolos',
    time: '15 min',
    temp: '180°C',
    highlight: 'Casca douradinha e miolo macio e elástico, aroma de padaria na casa toda.',
    servings: '1 pão médio',
    tags: ['Econômico', 'Fácil']
  },
  {
    id: '22',
    name: 'Bolo de Chocolate Fofinho com Calda Vulcão',
    category: 'paes_bolos',
    time: '20 min',
    temp: '200°C',
    highlight: 'Massa úmida e fofinha que cresce perfeitamente no cesto da fritadeira.',
    servings: '6 fatias',
    tags: ['Favorito da Família', 'Super Fofo']
  },
  {
    id: '23',
    name: 'Pão de Aveia Funcional e Fibras',
    category: 'paes_bolos',
    time: '25 min',
    temp: '80°C a 160°C',
    highlight: 'Ideal para quem busca emagrecimento saudável e saciedade prolongada.',
    servings: '8 fatias',
    tags: ['Saudável', 'Fitness']
  },
  {
    id: '24',
    name: 'Cookies Artesanais de Pasta de Amendoim com Chocolate',
    category: 'paes_bolos',
    time: '12 min',
    temp: '180°C',
    highlight: 'Crocantes na base e incrivelmente macios por dentro.',
    servings: '10 cookies',
    tags: ['Sem Farinha Branca', 'Proteico']
  }
];

export const CATEGORY_INFO = [
  {
    id: 'acompanhamentos',
    title: 'Acompanhamentos & Petiscos',
    icon: 'Utensils',
    desc: 'Batatas rústicas, queijos grelhados, anéis de cebola, mandioca sequinha e legumes com ervas que acompanham qualquer refeição.',
    count: '38 receitas exclusivas'
  },
  {
    id: 'pratos_principais',
    title: 'Pratos Principais & Carnes Nobres',
    icon: 'Flame',
    desc: 'Churrasco de picanha com aroma de carvão, costelinha barbecue, frangos crocantes, filés ao molho, peixes e lasanhas de dar água na boca.',
    count: '52 receitas completas'
  },
  {
    id: 'sobremesas',
    title: 'Sobremesas & Doces Irresistíveis',
    icon: 'Sparkles',
    desc: 'Pudim lisinho com calda de caramelo, petit gâteau de restaurante, churros dourados, brigadeiro sem fogão e tortinhas de frutas.',
    count: '32 sobremesas dos sonhos'
  },
  {
    id: 'paes_bolos',
    title: 'Pães Caseiros, Bolos & Tortas',
    icon: 'Coffee',
    desc: 'Bolo de cenoura com calda escorrendo, pães caseiros quentinhos, bolos de fubá e chocolate, cookies proteicos e tortas salgadas.',
    count: '28 delícias de padaria'
  }
];
