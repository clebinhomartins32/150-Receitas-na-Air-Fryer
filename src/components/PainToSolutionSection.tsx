import React from 'react';
import { AlertCircle, Lightbulb, Clock, DollarSign, ChefHat, Sparkles, HeartCrack, Smile } from 'lucide-react';

interface PainToSolutionSectionProps {
  onCtaClick: () => void;
}

export const PainToSolutionSection: React.FC<PainToSolutionSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#111116] border-b border-stone-800 text-stone-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 font-bold text-xs sm:text-sm uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
            Você Merece Comer Bem sem Complicação
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Você comprou a sua Air Fryer sonhando com praticidade... mas a realidade do dia a dia foi outra?
          </h2>
          <p className="mt-4 text-stone-400 text-base sm:text-lg">
            Se você já sentiu raiva ao abrir a fritadeira e ver o almoço estragado, saiba que você <strong className="text-white">não está sozinha</strong>.
          </p>
        </div>

        {/* 4 Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <div className="bg-stone-900/90 border border-stone-800 p-6 rounded-2xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-800/40 flex items-center justify-center shrink-0 text-red-400">
              <HeartCrack className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Frango seco como sola de sapato</h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                Você coloca a carne achando que vai ficar suculenta e ela sai esturricada, sem suco e com textura de borracha, porque faltavam os truques certos de selagem e umidade.
              </p>
            </div>
          </div>

          <div className="bg-stone-900/90 border border-stone-800 p-6 rounded-2xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-800/40 flex items-center justify-center shrink-0 text-red-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Perdendo horas pensando: "O que fazer hoje?"</h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                Chega cansada do trabalho após um dia exaustivo, abre a geladeira e não tem a menor ideia do que preparar. O desespero bate e o estresse na cozinha só aumenta.
              </p>
            </div>
          </div>

          <div className="bg-stone-900/90 border border-stone-800 p-6 rounded-2xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-800/40 flex items-center justify-center shrink-0 text-red-400">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Culpa de gastar rios de dinheiro com Delivery</h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                Sem tempo e sem criatividade, a saída acaba sendo o aplicativo de comida. Lá se vão R$ 60, R$ 80 ou mais de R$ 100 por refeição, comendo fritura pesada e gordurosa.
              </p>
            </div>
          </div>

          <div className="bg-stone-900/90 border border-stone-800 p-6 rounded-2xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-800/40 flex items-center justify-center shrink-0 text-red-400">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Aparelho encostado pegando poeira no armário</h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                Você gastou caro na fritadeira elétrica, mas hoje só usa para requentar pão de queijo ou fazer batata frita murcha. Uma máquina tão poderosa subutilizada por falta de um método!
              </p>
            </div>
          </div>

        </div>

        {/* The Epiphany / Solution Bridge */}
        <div className="bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 border border-amber-500/30 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0 text-amber-300">
              <Lightbulb className="w-9 h-9 sm:w-11 sm:h-11 animate-pulse" />
            </div>

            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold flex items-center justify-center md:justify-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> A Revelação que vai destravar sua cozinha
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                O problema NUNCA foi a sua Air Fryer. Faltavam as receitas com os tempos e segredos corretos!
              </h3>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                A fritadeira elétrica funciona através de ar quente ultrarrápido em alta rotatividade. Quando você sabe a temperatura exata, como temperar sem desidratar a carne e o ponto certo de cada alimento, ela se transforma no melhor chef particular da sua casa.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-stone-300">
              <Smile className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Mais de <strong>150 opções prontas</strong> para você nunca mais ter dúvida do que cozinhar!</span>
            </div>
            <button
              onClick={onCtaClick}
              id="pain-cta-btn"
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold px-6 py-3 rounded-xl text-sm transition transform hover:scale-105 shadow-md cursor-pointer whitespace-nowrap"
            >
              Destravar Minha Air Fryer por R$ 14,99
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
