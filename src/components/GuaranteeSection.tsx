import React from 'react';
import { ShieldCheck, ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';

interface GuaranteeSectionProps {
  onCtaClick: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#111115] border-b border-stone-800 text-stone-200">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-gradient-to-b from-stone-900 via-stone-850 to-stone-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center sm:text-left">
          
          {/* Subtle gold badge watermark */}
          <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
            <ShieldCheck className="w-80 h-80 text-amber-400" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 relative z-10">
            
            {/* Golden Guarantee Seal */}
            <div className="shrink-0 flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 text-stone-950 p-4 shadow-xl border-4 border-yellow-200 text-center transform hover:scale-105 transition">
              <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-stone-950 stroke-[2.2] mx-auto" />
              <span className="font-black text-2xl sm:text-3xl leading-none mt-1">7 DIAS</span>
              <span className="font-extrabold text-[10px] sm:text-xs uppercase tracking-wider leading-tight">
                GARANTIA BLINDADA
              </span>
              <span className="text-[9px] font-bold text-stone-900 mt-0.5">100% RISCO ZERO</span>
            </div>

            {/* Guarantee Explanation */}
            <div className="space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Seu Risco é Absolutamente Zero
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Garantia Incondicional de Satisfação Total
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                Eu tenho tanta certeza de que o <strong>Guia das 150 Receitas na Air Fryer</strong> vai transformar as suas refeições que assumo todo o risco por você.
              </p>

              <p className="text-sm text-stone-400 leading-relaxed">
                Adquira hoje com desconto especial. Acesse o material, teste as receitas, faça o churrasco, as sobremesas e os acompanhamentos. Se dentro de <strong>7 dias</strong> você não ficar 100% satisfeita por qualquer motivo, basta enviar um único e-mail para nossa equipe que devolveremos cada centavo do seu dinheiro. Sem perguntas chatas e sem letras miúdas.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Devolução imediata
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Sem burocracia
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Amizade continua
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
