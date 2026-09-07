import React, { useState } from 'react';
import { CATEGORY_INFO, RECIPES_DATA } from '../data/recipes';
import { Utensils, Flame, Sparkles, Coffee, Clock, Thermometer, ChevronRight, CheckCircle2, BookmarkCheck } from 'lucide-react';

interface ModulesSectionProps {
  onCtaClick: () => void;
}

export const ModulesSection: React.FC<ModulesSectionProps> = ({ onCtaClick }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'acompanhamentos' | 'pratos_principais' | 'sobremesas' | 'paes_bolos'>('all');

  const filteredRecipes = activeTab === 'all' 
    ? RECIPES_DATA 
    : RECIPES_DATA.filter(r => r.category === activeTab);

  return (
    <section id="conteudo" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#131318] border-b border-stone-800 text-stone-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 font-bold text-xs sm:text-sm uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
            Cardápio Completo & Ilustrado
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Veja o que você vai aprender a fazer no Guia das 150 Receitas
          </h2>
          <p className="mt-3 text-stone-400 text-base">
            De petiscos rápidos para o lanche da tarde até churrasco nobre e sobremesas de confeitaria fina.
          </p>
        </div>

        {/* 4 Category Cards Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {CATEGORY_INFO.map((cat) => {
            const isAcomp = cat.id === 'acompanhamentos';
            const isPratos = cat.id === 'pratos_principais';
            const isSobremesas = cat.id === 'sobremesas';

            return (
              <div 
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`cursor-pointer rounded-2xl p-5 border transition duration-300 flex flex-col justify-between ${
                  activeTab === cat.id 
                    ? 'bg-amber-500/10 border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.15)] ring-1 ring-amber-400' 
                    : 'bg-stone-900/80 border-stone-800 hover:border-stone-700 hover:bg-stone-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      {isAcomp && <Utensils className="w-5 h-5" />}
                      {isPratos && <Flame className="w-5 h-5" />}
                      {isSobremesas && <Sparkles className="w-5 h-5" />}
                      {!isAcomp && !isPratos && !isSobremesas && <Coffee className="w-5 h-5" />}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                      {cat.count}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-base mb-1.5">{cat.title}</h3>
                  <p className="text-xs text-stone-400 leading-relaxed">{cat.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center text-xs font-semibold text-amber-400">
                  <span>Ver receitas deste módulo</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Showcase Banner Box */}
        <div className="mb-12 bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 shadow-2xl">
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl border border-stone-700 aspect-video md:aspect-[4/3]">
            <img
              src="/images/dishes-showcase.jpg"
              alt="Pratos gourmet preparados na Air Fryer com crocância e sabor"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
              loading="lazy"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              O Segredo Revelado
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              Nunca mais sofra com carnes secas ou batatas murchas!
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Cada uma das 150 receitas foi formulada com a <strong>tabela exata de minutagem e temperatura</strong>. Basta colocar no cesto, programar o timer e esperar o bipe. O prato sai crocante por fora e suculento por dentro, com aroma que invade a casa inteira.
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-stone-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Medidas simples em colheres, xícaras e gramas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ingredientes acessíveis encontrados em qualquer feira ou mercado</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dicas de como usar o timer para congelados sem queimar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-amber-400 text-stone-950 shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
            }`}
          >
            Todas as 150 Receitas (Amostra)
          </button>
          <button
            onClick={() => setActiveTab('acompanhamentos')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === 'acompanhamentos'
                ? 'bg-amber-400 text-stone-950 shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
            }`}
          >
            🍟 Acompanhamentos
          </button>
          <button
            onClick={() => setActiveTab('pratos_principais')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === 'pratos_principais'
                ? 'bg-amber-400 text-stone-950 shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
            }`}
          >
            🥩 Pratos Principais
          </button>
          <button
            onClick={() => setActiveTab('sobremesas')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === 'sobremesas'
                ? 'bg-amber-400 text-stone-950 shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
            }`}
          >
            🧁 Sobremesas
          </button>
          <button
            onClick={() => setActiveTab('paes_bolos')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === 'paes_bolos'
                ? 'bg-amber-400 text-stone-950 shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
            }`}
          >
            🍞 Pães e Bolos
          </button>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {filteredRecipes.slice(0, 9).map((recipe) => (
            <div
              key={recipe.id}
              className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 hover:border-amber-500/40 transition duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {recipe.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold uppercase tracking-wider bg-stone-800 text-amber-300/90 px-2 py-0.5 rounded-md border border-stone-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition mb-2">
                  {recipe.name}
                </h4>

                <p className="text-xs text-stone-400 leading-relaxed mb-4">
                  {recipe.highlight}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-300">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-emerald-400 font-semibold">
                  <Thermometer className="w-3.5 h-3.5" />
                  <span>{recipe.temp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block inside Modules */}
        <div className="text-center bg-gradient-to-b from-stone-900 to-stone-950 border border-amber-500/30 rounded-3xl p-8 max-w-3xl mx-auto shadow-xl">
          <BookmarkCheck className="w-10 h-10 text-amber-400 mx-auto mb-3" />
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            E isso é apenas uma pequena amostra das 150 receitas!
          </h3>
          <p className="text-sm text-stone-300 mt-2 max-w-xl mx-auto">
            Garanta agora o guia completo com todas as 150 receitas + manual de limpeza e conservação por apenas <strong className="text-amber-300 text-base">R$ 14,99</strong> hoje!
          </p>

          <div className="mt-6">
            <button
              onClick={onCtaClick}
              id="modules-cta-btn"
              className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-stone-950 font-black px-8 py-4 rounded-xl text-base sm:text-lg transition transform hover:scale-105 shadow-xl cursor-pointer"
            >
              QUERO ACESSO ÀS 150 RECEITAS AGORA
            </button>
            <div className="mt-2 text-xs text-stone-400">
              ⚡ Envio imediato no seu e-mail após a compra
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
