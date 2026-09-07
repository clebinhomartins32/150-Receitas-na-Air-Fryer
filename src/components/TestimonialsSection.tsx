import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Star, ShieldCheck, CheckCircle2, Heart, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0c0c0f] border-b border-stone-800 text-stone-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 font-bold text-xs sm:text-sm uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-rose-400" /> Resultados Reais de Quem Comprou
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Quem comprou o método não larga mais a Air Fryer!
          </h2>
          <p className="mt-3 text-stone-400 text-base">
            Veja como pessoas comuns transformaram suas refeições diárias e economizaram tempo e dinheiro na cozinha:
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-stone-900/80 border border-stone-800/90 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-500/30 transition duration-300 shadow-xl relative"
            >
              <div>
                {/* User Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="relative">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-13 h-13 rounded-full object-cover border-2 border-amber-400/60 shadow-md"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5" title="Compra Verificada">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-base leading-tight flex items-center gap-1.5">
                      {item.name}
                    </h4>
                    <p className="text-xs text-stone-400 mt-0.5">
                      {item.city}, {item.state} • {item.age} anos
                    </p>
                    <span className="text-[11px] text-emerald-400 font-medium inline-block">
                      Compra Verificada ✅
                    </span>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-amber-300 ml-1.5">5.0</span>
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic mb-4">
                  "{item.comment}"
                </p>
              </div>

              {/* Recipe Loved & Outcome Badge */}
              <div className="pt-3 border-t border-stone-800 space-y-1.5 text-xs">
                <div className="text-stone-400">
                  ❤️ <strong>Receita favorita:</strong> <span className="text-amber-300">{item.favoriteRecipe}</span>
                </div>
                <div className="inline-block bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 px-2.5 py-1 rounded-lg text-[11px] font-semibold">
                  🏆 {item.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Trust Bar */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border border-stone-800 rounded-2xl p-4 sm:p-6 text-center max-w-4xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm text-stone-300">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-lg sm:text-xl text-amber-400">4.9 / 5.0</span>
            <span>Nota média de avaliação dos alunos</span>
          </div>
          <div className="h-4 w-px bg-stone-700 hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-lg sm:text-xl text-emerald-400">99.4%</span>
            <span>Taxa de satisfação comprovada</span>
          </div>
          <div className="h-4 w-px bg-stone-700 hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-lg sm:text-xl text-cyan-400">+3.400</span>
            <span>Acessos liberados em todo o Brasil</span>
          </div>
        </div>

      </div>
    </section>
  );
};
