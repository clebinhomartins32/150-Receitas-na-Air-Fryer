import React from 'react';
import { Gift, Shield, Check, Sparkles, BookOpen, Clock, Wrench } from 'lucide-react';

interface BonusesSectionProps {
  onCtaClick: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#111116] border-b border-stone-800 text-stone-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 font-bold text-xs sm:text-sm uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
            <Gift className="w-4 h-4 text-amber-400" /> Presentes Especiais Para Você Hoje
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Comprando Hoje, Você Leva 3 Super Bônus Exclusivos de Graça!
          </h2>
          <p className="mt-3 text-stone-400 text-base">
            Materiais complementares que sozinhos já custariam mais de R$ 70,00, mas que serão seus sem pagar 1 centavo a mais.
          </p>
        </div>

        {/* 3 Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Bonus 1 */}
          <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 relative flex flex-col justify-between hover:border-amber-500/40 transition duration-300 shadow-xl">
            <div className="absolute -top-3 left-6 bg-amber-500 text-stone-950 font-black text-[11px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
              Bônus #01
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 mt-2">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Manual de Conservação & Limpeza Fácil da Antiaderência
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Descubra como limpar o cesto e a resistência em menos de 3 minutos sem descascar o teflon antiaderente e sem deixar resíduos de gordura ou cheiro de fumaça.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-500 line-through">De R$ 29,90</span>
                <div className="text-xs font-bold text-emerald-400 uppercase">Hoje: GRÁTIS</div>
              </div>
              <span className="text-xs font-mono bg-stone-950 text-amber-300 px-2.5 py-1 rounded-md border border-stone-800">
                Incluso
              </span>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 relative flex flex-col justify-between hover:border-amber-500/40 transition duration-300 shadow-xl">
            <div className="absolute -top-3 left-6 bg-amber-500 text-stone-950 font-black text-[11px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
              Bônus #02
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 mt-2">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Tabela de Tempos & Temperaturas para Alimentos Congelados
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Aprenda a fritar ou assar direto do freezer sem deixar a comida crua no meio e sem queimar por fora. A proporção perfeita para pão de queijo, massas e salgados.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-500 line-through">De R$ 19,90</span>
                <div className="text-xs font-bold text-emerald-400 uppercase">Hoje: GRÁTIS</div>
              </div>
              <span className="text-xs font-mono bg-stone-950 text-amber-300 px-2.5 py-1 rounded-md border border-stone-800">
                Incluso
              </span>
            </div>
          </div>

          {/* Bonus 3 */}
          <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 relative flex flex-col justify-between hover:border-amber-500/40 transition duration-300 shadow-xl">
            <div className="absolute -top-3 left-6 bg-amber-500 text-stone-950 font-black text-[11px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
              Bônus #03
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 mt-2">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Segredos de Marinadas & Crostas Douradas sem Óleo
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                As melhores combinações de ervas, limão, azeite borrifado e páprica para conferir cor bronzeada e suculência digna de prato de restaurante na sua mesa.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-500 line-through">De R$ 24,90</span>
                <div className="text-xs font-bold text-emerald-400 uppercase">Hoje: GRÁTIS</div>
              </div>
              <span className="text-xs font-mono bg-stone-950 text-amber-300 px-2.5 py-1 rounded-md border border-stone-800">
                Incluso
              </span>
            </div>
          </div>

        </div>

        {/* Callout */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-stone-950/80 border border-stone-800 rounded-2xl p-4 sm:px-8">
            <span className="text-xs sm:text-sm text-stone-300">
              Valor total dos bônus: <span className="line-through text-stone-500">R$ 74,70</span> ➔ <strong className="text-emerald-400">100% GRÁTIS na compra de hoje!</strong>
            </span>
            <button
              onClick={onCtaClick}
              id="bonus-cta-btn"
              className="bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Garantir Meus Bônus Grátis
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
