import React, { useState, useEffect } from 'react';
import { ArrowRight, Flame } from 'lucide-react';

interface StickyMobileBarProps {
  onCtaClick: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onCtaClick }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolled past 400px
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div
      id="mobile-sticky-cta"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 border-t border-amber-500/40 p-3 px-4 backdrop-blur-md shadow-2xl flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200"
    >
      <div>
        <div className="flex items-center gap-1 text-[10px] uppercase font-extrabold text-red-400">
          <Flame className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
          <span>81% OFF SÓ HOJE</span>
        </div>
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className="text-[11px] text-stone-400 line-through">R$ 80</span>
          <span className="text-xl font-black text-amber-300">R$ 14,99</span>
        </div>
      </div>

      <button
        onClick={onCtaClick}
        id="mobile-sticky-btn"
        className="flex-1 max-w-[210px] bg-gradient-to-r from-amber-500 to-yellow-400 active:scale-95 text-stone-950 font-black text-xs sm:text-sm py-3 px-3 rounded-xl shadow-lg flex items-center justify-center gap-1.5 cursor-pointer border border-yellow-200"
      >
        <span>COMPRAR AGORA</span>
        <ArrowRight className="w-4 h-4 text-stone-950 shrink-0" />
      </button>
    </div>
  );
};
