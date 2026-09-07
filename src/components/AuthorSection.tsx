import React from 'react';
import { Award, Heart, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export const AuthorSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0f0f13] border-b border-stone-800 text-stone-200">
      <div className="max-w-5xl mx-auto">
        
        <div className="bg-stone-900/80 border border-stone-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle warm backdrop */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Author Portrait */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl">
                <img
                  src="/images/dra-catia.jpg"
                  alt="Dra. Cátia Viegas - Nutricionista e Autora do Guia 150 Receitas na Air Fryer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">Cátia Viegas</h3>
                <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mt-0.5">
                  Nutricionista & Especialista em Gastronomia Saudável
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 bg-stone-950 px-3 py-1 rounded-full border border-stone-800 text-[11px] text-stone-300">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Autora do Método 150 Receitas</span>
                </div>
              </div>
            </div>

            {/* Author Biography / Words from the PDF presentation */}
            <div className="md:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" /> Quem criou o guia para você
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                "É possível comer bem sem abrir mão do sabor e da praticidade!"
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                <em>
                  "Com anos de experiência ajudando milhares de pessoas a adotarem hábitos alimentares mais saudáveis e descomplicados, percebi uma grande frustração comum: quase todo mundo tem uma Air Fryer, mas pouquíssimas pessoas sabem como extrair todo o seu potencial de crocância e sabor sem ressecar."
                </em>
              </p>

              <p className="text-sm text-stone-400 leading-relaxed">
                Por isso, uni minha paixão pela nutrição com a incrível versatilidade da fritadeira para criar este guia prático com <strong>150 receitas testadas e aperfeiçoadas</strong>. Cada tempo e temperatura foi cronometrado para que você nunca mais erre ou queime um prato.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Receitas 100% testadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sem ingredientes caros</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Foco em saúde e sabor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Praticidade no dia a dia</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
