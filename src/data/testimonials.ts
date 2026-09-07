import { Testimonial, RecentBuyer, FaqItem } from '../types';

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Patrícia Mendes',
    age: 36,
    city: 'Campinas',
    state: 'SP',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&crop=face',
    role: 'Mãe de 2 filhos e Gerente Administrativa',
    rating: 5,
    comment: 'Minha Air Fryer vivia guardada pegando poeira porque eu só sabia fazer batata congelada e ficava sem graça. Comprei o guia sem muita expectativa por causa do preço de R$ 14,99, mas virou meu xodó! Ontem fiz a Costelinha ao Barbecue e o Bolo de Cenoura com cobertura pretinha. Meus filhos comeram raspando o prato e acharam que pedi de restaurante. É inacreditável a praticidade!',
    favoriteRecipe: 'Costelinha Suína ao Barbecue & Bolo de Cenoura',
    timeAgo: 'Comprado há 3 dias',
    result: 'Economizou mais de R$ 420 em delivery neste mês'
  },
  {
    id: '2',
    name: 'Carlos Eduardo Silveira',
    age: 44,
    city: 'Belo Horizonte',
    state: 'MG',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face',
    role: 'Engenheiro e Fã de Churrasco',
    rating: 5,
    comment: 'Sou chato pra churrasco e não botava fé em carne na fritadeira. Quando li a técnica do pedaço de carvão em brasa que a Dra. Cátia ensina no livro, resolvi testar na Picanha de domingo. Gente, o sabor e cheiro de churrascaria que ficou foi impressionante! Macia, suculenta por dentro e crocante por fora. Só por essa dica o material já valeu 100 reais!',
    favoriteRecipe: 'Churrasco de Picanha com Carvão',
    timeAgo: 'Comprado há 1 semana',
    result: 'Faz churrasco de apartamento sem fumaça'
  },
  {
    id: '3',
    name: 'Juliana Alencar',
    age: 29,
    city: 'Florianópolis',
    state: 'SC',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&crop=face',
    role: 'Nutricionista & Praticante de Atividade Física',
    rating: 5,
    comment: 'Eu precisava de receitas práticas e limpas para a correria dos atendimentos. O frango empanado com farofa e a lasanha de berinjela viraram lei no meu almoço. Sem falar nas opções doces como o Petit Gâteau e o Pão de Banana Low Carb. Já perdi 3,5 kg sem passar fome e sem sentir falta de fritura!',
    favoriteRecipe: 'Lasanha de Berinjela & Petit Gâteau 70%',
    timeAgo: 'Comprado há 2 semanas',
    result: 'Menos 3,5 kg comendo com muito prazer'
  },
  {
    id: '4',
    name: 'Dona Helena Vieira',
    age: 58,
    city: 'Curitiba',
    state: 'PR',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=160&h=160&fit=crop&crop=face',
    role: 'Aposentada e Avó dedicada',
    rating: 5,
    comment: 'Tenho problema de colesterol e o médico proibiu óleo de cozinha. Eu achava que a comida ia ficar ressecada e branca. O guia tem truques fáceis com azeite borrifado e temperos que deixam tudo dourado e estaladiço. O pudim de leite na Air Fryer ficou lisinho, perfeito! E o melhor de tudo: não fico horas limpando respingo de gordura do fogão.',
    favoriteRecipe: 'Pudim Lisinho & Iscas de Peixe na Aveia',
    timeAgo: 'Comprado há 5 dias',
    result: 'Reduziu 100% o uso de óleo nas frituras'
  },
  {
    id: '5',
    name: 'Renato Siqueira',
    age: 33,
    city: 'Ribeirão Preto',
    state: 'SP',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=face',
    role: 'Mora sozinho e trabalha em home-office',
    rating: 5,
    comment: 'Vivia gastando 50 a 80 reais todo dia no iFood porque não sei cozinhar nada complexo. O acesso chegou no meu e-mail 15 segundos após passar o Pix. As receitas são explicadas de forma mastigadinha: tempo, temperatura e o que colocar. O hambúrguer recheado com cream cheese ficou 10x melhor que o da lanchonete da esquina.',
    favoriteRecipe: 'Hambúrguer com Cream Cheese & Batatas Rústicas',
    timeAgo: 'Comprado há 4 dias',
    result: 'Economizou mais de R$ 600 em um único mês'
  }
];

export const RECENT_BUYERS_DATA: RecentBuyer[] = [
  {
    id: 'b1',
    name: 'Ana Beatriz Souza',
    city: 'São Paulo',
    state: 'SP',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    timeAgo: 'há 1 minuto',
    recipeLoved: 'Churrasco de Picanha & Pudim'
  },
  {
    id: 'b2',
    name: 'Marcos Vinícius T.',
    city: 'Belo Horizonte',
    state: 'MG',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
    timeAgo: 'há 2 minutos',
    recipeLoved: 'Costelinha ao Barbecue'
  },
  {
    id: 'b3',
    name: 'Camila Rocha',
    city: 'Rio de Janeiro',
    state: 'RJ',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    timeAgo: 'há 4 minutos',
    recipeLoved: 'Bolo de Cenoura com Calda'
  },
  {
    id: 'b4',
    name: 'Rodrigo Fontes',
    city: 'Porto Alegre',
    state: 'RS',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
    timeAgo: 'há 6 minutos',
    recipeLoved: 'Anéis de Cebola & Hambúrguer'
  },
  {
    id: 'b5',
    name: 'Letícia Barbosa',
    city: 'Goiânia',
    state: 'GO',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
    timeAgo: 'há 8 minutos',
    recipeLoved: 'Petit Gâteau & Lasanha'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Como e quando recebo o acesso ao Guia?',
    answer: 'O envio é 100% imediato e automático! Assim que o seu pagamento de apenas R$ 14,99 for aprovado (no Pix ou Cartão), o link de acesso exclusivo é enviado diretamente para o seu e-mail cadastrado. Você pode começar a cozinhar em menos de 2 minutos!'
  },
  {
    question: 'Posso acessar pelo celular, tablet ou computador?',
    answer: 'Sim! O material foi otimizado para abrir instantaneamente em qualquer smartphone, tablet ou computador, sem necessidade de instalar aplicativos pesados. Você pode deixar o celular apoiado na bancada da cozinha enquanto prepara suas receitas.'
  },
  {
    question: 'Funciona para qualquer marca ou tamanho de Air Fryer?',
    answer: 'Sim, com certeza! As 150 receitas foram rigorosamente testadas e adaptadas para qualquer modelo do mercado: Mondial, Philips Walita, Britânia, Oster, Electrolux, Arno, Midea, Philco, seja de 3 litros, 4 litros, 5 litros ou tamanho família.'
  },
  {
    question: 'As receitas têm ingredientes caros ou difíceis de encontrar?',
    answer: 'Absolutamente não! Todas as receitas usam ingredientes do dia a dia que você já tem na geladeira ou encontra em qualquer mercado do bairro (ovos, batatas, frango, queijo, cenoura, temperos naturais). Nada de ingredientes gourmet caros.'
  },
  {
    question: 'O pagamento é único ou tem mensalidade?',
    answer: 'É pagamento ÚNICO de apenas R$ 14,99 hoje! Você paga uma única vez e o acesso é seu para sempre, incluindo todas as futuras atualizações de receitas sem nenhuma cobrança extra.'
  },
  {
    question: 'E se eu não gostar ou não conseguir fazer?',
    answer: 'Você conta com nossa Garantia Incondicional Blindada de 7 Dias. Se por qualquer motivo você achar que o guia não valeu muito mais do que os R$ 14,99 investidos, basta enviar um único e-mail que devolvemos 100% do seu dinheiro na hora, sem perguntas nem enrolação.'
  }
];
