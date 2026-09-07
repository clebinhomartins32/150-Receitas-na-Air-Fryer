export interface Recipe {
  id: string;
  name: string;
  category: 'acompanhamentos' | 'pratos_principais' | 'sobremesas' | 'paes_bolos';
  time: string;
  temp: string;
  highlight: string;
  servings?: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  state: string;
  avatar: string;
  role: string;
  rating: number;
  comment: string;
  favoriteRecipe: string;
  timeAgo: string;
  result: string;
}

export interface RecentBuyer {
  id: string;
  name: string;
  city: string;
  state: string;
  avatar: string;
  timeAgo: string;
  recipeLoved: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
