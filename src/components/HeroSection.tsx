import React from 'react';
import { CheckCircle2, XCircle, ShieldCheck, Zap, Sparkles, ArrowRight, Award, Flame, HeartHandshake, Download } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#141419] via-[#1a1a23] to-[#0f0f13] text-stone-100 pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[200px] bg-rose-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Pre-headline tag */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-inner">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Mais de 3.420 famílias já transformaram sua rotina</span>
          </div>
        </div>

        {/* Main Headline directed to the pain point */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
            Cansada de não saber o que fazer na{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 underline decoration-amber-500/50 decoration-wavy decoration-2">
              Air Fryer
            </span>{' '}
            e comer comida sem graça todo dia?
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-stone-300 leading-relaxed max-w-3xl mx-auto">
            A solução é mais simples do que você imagina! Descubra o método completo com <strong className="text-white font-bold">150 receitas práticas, rápidas e deliciosas</strong> desenvolvidas por nutricionista para você fazer pratos dignos de restaurante — <span className="text-amber-300 font-semibold">100% sem óleo, sem fumaça e em poucos minutos</span>.
          </p>
        </div>

        {/* Hero Grid: Comparison Box (Left) + 3D Book Visual (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10">
          
          {/* Left Column: Pain vs Solution (Direct from creative image) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pain Box (Red Theme) */}
            <div className="bg-red-950/30 border border-red-800/40 rounded-2xl p-4 sm:p-6 backdrop-blur-xs">
              <h3 className="text-red-400 font-bold text-sm sm:text-base uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block animate-ping"></span>
                Se você se identifica com isso hoje:
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base text-stone-200">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Comidas sem graça, secas</strong> e sempre as mesmas coisas repetitivas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Perde muito tempo</strong> quebrando a cabeça sem saber o que preparar.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Receitas complicadas</strong> da internet que dão errado, ficam cruas ou queimam.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Gasta uma fortuna</strong> pedindo delivery e comendo fritura cheia de gordura.</span>
                </li>
              </ul>
            </div>

            {/* Solution Box (Green Theme) */}
            <div className="bg-emerald-950/30 border border-emerald-700/40 rounded-2xl p-4 sm:p-6 backdrop-blur-xs shadow-lg">
              <h3 className="text-emerald-400 font-bold text-sm sm:text-base uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-300" />
                Como será a sua rotina com o Guia Definitivo:
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base text-stone-100">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>150 receitas testadas e aprovadas</strong> com passo a passo ilustrado e tempo exato.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Alimentação muito mais saudável:</strong> Frituras crocantes sem usar nenhuma gota de óleo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Pronto em minutos:</strong> Pratos práticos que te dão mais tempo livre com a sua família.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Para todas as refeições do dia:</strong> Acompanhamentos, Carnes Nobres, Sobremesas, Pães e Bolos!</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: 3D Product Mockup & Price Highlight */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Glow background behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-red-500/20 rounded-3xl blur-2xl transform -rotate-1 group-hover:rotate-0 transition duration-500" />
              
              <div className="relative bg-gradient-to-b from-stone-800/80 to-stone-900/90 border border-stone-700/60 rounded-3xl p-3 sm:p-4 shadow-2xl backdrop-blur-md">
                
                {/* Floating Discount Pill */}
                <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-red-600 to-rose-600 text-white font-extrabold text-xs sm:text-sm uppercase px-3.5 py-1.5 rounded-full shadow-lg border border-red-400 animate-bounce">
                  🔥 81% DE DESCONTO
                </div>

                {/* 3D Mockup Image */}
                <div className="overflow-hidden rounded-2xl bg-stone-950 aspect-square flex items-center justify-center border border-stone-800">
                  <img
                    src="/images/book-mockup.jpg"
                    alt="Capa em 3D do Livro 150 Receitas na Air Fryer com Fritadeira e Pratos Deliciosos"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                    loading="eager"
                  />
                </div>

                {/* Micro Badges under image */}
                <div className="mt-3.5 pt-3 border-t border-stone-800 grid grid-cols-3 gap-2 text-center text-[11px] sm:text-xs text-stone-300 font-medium">
                  <div className="flex flex-col items-center">
                    <span className="text-amber-400 font-bold text-sm">150+</span>
                    <span>Receitas</span>
                  </div>
                  <div className="flex flex-col items-center border-x border-stone-700">
                    <span className="text-emerald-400 font-bold text-sm">100%</span>
                    <span>Sem Óleo</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-blue-400 font-bold text-sm">Imediato</span>
                    <span>No E-mail</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Price Box */}
            <div className="w-full max-w-sm sm:max-w-md mt-6 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-center">
              <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                Promoção Especial por Tempo Limitado
              </div>
              <div className="mt-1 flex items-baseline justify-center gap-2">
                <span className="text-stone-400 text-sm sm:text-base line-through font-medium">De R$ 80,00</span>
                <span className="text-xs uppercase font-bold text-amber-400">Por Apenas:</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-amber-300 tracking-tight flex items-center justify-center gap-1 my-1">
                <span className="text-xl sm:text-2xl font-bold text-amber-400">R$</span>
                <span>14,99</span>
              </div>
              <div className="text-xs text-emerald-400 font-medium">
                ⚡ Pagamento único • Sem mensalidade • Acesso vitalício
              </div>
            </div>

          </div>

        </div>

        {/* Large Central Action CTA Button */}
        <div className="max-w-xl mx-auto text-center space-y-4">
          <button
            onClick={onCtaClick}
            id="hero-main-cta-button"
            className="w-full group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-stone-950 font-black text-lg sm:text-xl py-4 sm:py-5 px-6 sm:px-8 rounded-2xl shadow-[0_0_35px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] transform active:scale-95 hover:scale-[1.02] transition duration-200 cursor-pointer border-2 border-yellow-200"
          >
            <span>QUERO MEU GUIA COM 81% DE DESCONTO</span>
            <ArrowRight className="w-6 h-6 text-stone-950 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <p className="text-xs sm:text-sm text-stone-400 font-medium">
            🔒 Compra 100% Segura • Apenas <strong className="text-amber-300">R$ 14,99</strong> • Acesso Imediato
          </p>

          {/* 4 Trust Feature Badges */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left sm:text-center text-xs text-stone-300">
            <div className="flex items-center sm:justify-center gap-2 bg-stone-900/60 border border-stone-800 px-3 py-2 rounded-xl">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center sm:justify-center gap-2 bg-stone-900/60 border border-stone-800 px-3 py-2 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center sm:justify-center gap-2 bg-stone-900/60 border border-stone-800 px-3 py-2 rounded-xl">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Nutricionista Responsável</span>
            </div>
            <div className="flex items-center sm:justify-center gap-2 bg-stone-900/60 border border-stone-800 px-3 py-2 rounded-xl">
              <Download className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Celular, Tablet ou PC</span>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
