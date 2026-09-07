import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check, Sparkles, Flame, Clock, ArrowRight, Lock, Zap, Smartphone, RefreshCw } from 'lucide-react';

interface PricingSectionProps {
  onCtaClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onCtaClick }) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 14, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="oferta" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0c0c0f] via-[#14141c] to-[#0c0c0f] text-stone-200 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-red-400 font-extrabold text-xs sm:text-sm uppercase tracking-widest bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/30 inline-flex items-center gap-2">
            <Flame className="w-4 h-4 text-red-400 animate-pulse" /> Oferta Especial Válida Apenas Hoje
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 tracking-tight">
            Comece Hoje Mesmo a Comer Muito Melhor!
          </h2>
          
          <p className="mt-3 text-stone-300 text-sm sm:text-base">
            O valor de R$ 14,99 é simbólico e custa <strong className="text-amber-300">menos que um único lanche de delivery</strong>, mas vai transformar suas refeições para sempre.
          </p>

          {/* Countdown timer pill */}
          <div className="mt-5 inline-flex items-center gap-2 bg-stone-900 border border-amber-500/40 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-amber-300">
            <Clock className="w-4 h-4 text-amber-400 animate-spin" />
            <span>Esta condição promocional expira em: <strong>{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}</strong></span>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-gradient-to-b from-stone-900/95 to-stone-950 border-2 border-amber-500/60 rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_rgba(245,158,11,0.15)] relative">
          
          {/* Top highlight ribbon */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider py-1 px-6 rounded-full shadow-lg border border-yellow-200">
            🔥 81% DE DESCONTO EXCLUSIVO
          </div>

          <div className="text-center pt-2 pb-6 border-b border-stone-800">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Guia Completo: 150 Receitas na Air Fryer
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              Desenvolvido pela nutricionista Cátia Viegas • Acesso Vitalício Imediato
            </p>

            {/* Price Stack */}
            <div className="mt-6">
              <span className="text-sm sm:text-base text-stone-400 line-through font-medium">
                De R$ 80,00 por apenas:
              </span>
              
              <div className="mt-2 flex items-baseline justify-center gap-1 text-5xl sm:text-6xl font-black text-amber-300 tracking-tight">
                <span className="text-2xl sm:text-3xl font-bold text-amber-400">R$</span>
                <span>14,99</span>
              </div>

              <div className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1">
                Pagamento ÚNICO • Sem pegadinhas • Sem mensalidades
              </div>
            </div>
          </div>

          {/* Value Checklist */}
          <div className="py-6 space-y-3.5 text-sm sm:text-base text-stone-200 max-w-xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <strong>Mais de 150 Receitas Passo a Passo:</strong> Carnes, frangos, peixes, acompanhamentos, lanches, bolos e sobremesas.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <strong>Tabela de Tempos e Temperaturas Exatas:</strong> Acabe de vez com receitas cruas ou queimadas.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <strong>BÔNUS 1:</strong> Manual de Limpeza & Conservação Fácil da Antiaderência (<span className="line-through text-stone-400 text-xs">R$ 29,90</span> ➔ <strong>Grátis</strong>).
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <strong>BÔNUS 2:</strong> Guia de Fritura sem Óleo para Alimentos Congelados (<span className="line-through text-stone-400 text-xs">R$ 19,90</span> ➔ <strong>Grátis</strong>).
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <strong>BÔNUS 3:</strong> Segredos de Marinadas & Crostas Douradas (<span className="line-through text-stone-400 text-xs">R$ 24,90</span> ➔ <strong>Grátis</strong>).
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <strong>Acesso Imediato no seu E-mail:</strong> Abra e consulte pelo Celular, Tablet ou Computador.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <strong>Garantia Incondicional de 7 Dias:</strong> Risco absolutamente zero para o seu bolso.
              </div>
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="pt-4 text-center max-w-xl mx-auto">
            <button
              onClick={onCtaClick}
              id="pricing-checkout-btn"
              className="w-full group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-stone-950 font-black text-lg sm:text-xl py-4 sm:py-5 px-6 rounded-2xl shadow-[0_0_35px_rgba(245,158,11,0.5)] transform active:scale-95 hover:scale-[1.02] transition duration-200 cursor-pointer border-2 border-yellow-200"
            >
              <span>SIM! QUERO COMPRAR POR APENAS R$ 14,99</span>
              <ArrowRight className="w-6 h-6 text-stone-950 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <Lock className="w-3.5 h-3.5" /> Compra 100% Criptografada e Segura
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-400" /> Entrega Imediata
              </span>
              <span className="flex items-center gap-1">
                <RefreshCw className="w-3.5 h-3.5 text-blue-400" /> 7 Dias de Garantia
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
