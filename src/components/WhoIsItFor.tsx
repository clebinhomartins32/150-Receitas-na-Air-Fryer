import React from 'react';
import { Check, X, Users, Heart, Sparkles, Clock, TrendingUp, DollarSign } from 'lucide-react';

interface WhoIsItForProps {
  onCtaClick: () => void;
}

export const WhoIsItFor: React.FC<WhoIsItForProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0e0e12] border-b border-stone-800 text-stone-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-400 font-bold text-xs sm:text-sm uppercase tracking-widest bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20 inline-flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" /> Será que é para você?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Para quem é indicado o Guia das 150 Receitas?
          </h2>
          <p className="mt-4 text-stone-400 text-base">
            Desenvolvido para pessoas reais que precisam de praticidade, sabor e saúde sem complicação.
          </p>
        </div>

        {/* 2-Column Comparison: For You vs NOT For You */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Col 1: For You */}
          <div className="bg-gradient-to-b from-emerald-950/20 to-stone-900/90 border-2 border-emerald-600/40 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-bold text-xs uppercase px-4 py-1 rounded-bl-xl">
              Feito para você
            </div>

            <h3 className="text-xl font-bold text-emerald-300 mb-6 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </span>
              Este guia é PERFEITO para você que:
            </h3>

            <ul className="space-y-4 text-sm sm:text-base text-stone-200">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Tem pouco tempo para cozinhar</strong> e quer pratos quentinhos e deliciosos prontos em 10 a 20 minutos.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Quer emagrecer ou manter a saúde</strong> comendo o que gosta sem usar óleo prejudicial e sem passar fome.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Quer parar de gastar uma fortuna em delivery</strong> e aprender a fazer fast-food caseiro muito mais gostoso.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Mães e pais que desejam agradar a família</strong> com petiscos crocantes, bolos fofos e sobremesas que as crianças amam.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Tem a Air Fryer parada no armário</strong> e quer finalmente tirar proveito do dinheiro investido nela.</span>
              </li>
            </ul>
          </div>

          {/* Col 2: NOT For You */}
          <div className="bg-gradient-to-b from-stone-900/80 to-stone-900/60 border border-stone-800 rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-stone-400 mb-6 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                <X className="w-5 h-5 stroke-[2.5]" />
              </span>
              Este guia NÃO é para quem:
            </h3>

            <ul className="space-y-4 text-sm sm:text-base text-stone-400">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>Gosta de passar 2 horas na cozinha sujando panelas, fogão e chão com respingo de óleo.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>Não se importa em gastar mais de R$ 500 todo mês pedindo lanches gordurosos em aplicativos de entrega.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>Prefere continuar comendo comida seca, sem tempero e sem graça todos os dias por preguiça de seguir um passo a passo simples.</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-stone-950/60 rounded-2xl border border-stone-800 text-xs text-stone-400">
              💡 <em>"Se você tem uma Air Fryer e quer aproveitar 100% da sua capacidade comendo bem gastando pouco, este é o único guia que você vai precisar."</em>
            </div>
          </div>

        </div>

        {/* Benefits Summary Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-stone-900/60 border border-stone-800/80 p-4 rounded-2xl">
            <Clock className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <div className="font-bold text-white text-sm sm:text-base">Pronto em Minutos</div>
            <div className="text-xs text-stone-400 mt-1">Refeições de 4 a 25 min</div>
          </div>

          <div className="bg-stone-900/60 border border-stone-800/80 p-4 rounded-2xl">
            <Heart className="w-6 h-6 text-rose-400 mx-auto mb-2" />
            <div className="font-bold text-white text-sm sm:text-base">100% Sem Óleo</div>
            <div className="text-xs text-stone-400 mt-1">Mais saúde e menos calorias</div>
          </div>

          <div className="bg-stone-900/60 border border-stone-800/80 p-4 rounded-2xl">
            <DollarSign className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <div className="font-bold text-white text-sm sm:text-base">Economia Real</div>
            <div className="text-xs text-stone-400 mt-1">Economize no gás e no delivery</div>
          </div>

          <div className="bg-stone-900/60 border border-stone-800/80 p-4 rounded-2xl">
            <Sparkles className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <div className="font-bold text-white text-sm sm:text-base">Fácil de Limpar</div>
            <div className="text-xs text-stone-400 mt-1">Chega de engordurar o fogão</div>
          </div>
        </div>

      </div>
    </section>
  );
};
