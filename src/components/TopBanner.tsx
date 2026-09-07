import React, { useState, useEffect } from 'react';
import { Flame, Clock, ShieldCheck } from 'lucide-react';

interface TopBannerProps {
  onCtaClick: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onCtaClick }) => {
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
    <div id="top-notification-banner" className="bg-gradient-to-r from-red-700 via-rose-600 to-amber-600 text-white text-xs sm:text-sm font-semibold py-2.5 px-3 sm:px-4 shadow-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center">
        <div className="flex items-center justify-center gap-1.5 w-full sm:w-auto">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-200"></span>
          </span>
          <Flame className="w-4 h-4 text-amber-300 shrink-0 inline animate-bounce" />
          <span>
            <strong className="text-amber-200 uppercase tracking-wide">OFERTA ESPECIAL APENAS HOJE:</strong> De <span className="line-through text-red-200">R$ 80,00</span> por <span className="bg-amber-400 text-stone-950 px-1.5 py-0.5 rounded font-bold text-xs sm:text-sm">R$ 14,99</span>!
          </span>
        </div>

        <div className="flex items-center justify-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-1 bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-mono text-amber-200 border border-white/10">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>Oferta expira em: <strong>{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}</strong></span>
          </div>

          <button
            onClick={onCtaClick}
            id="banner-cta-btn"
            className="hidden md:inline-flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold px-3 py-1 rounded-md text-xs transition transform hover:scale-105 shadow-xs cursor-pointer"
          >
            Aproveitar Agora
          </button>
        </div>
      </div>
    </div>
  );
};
