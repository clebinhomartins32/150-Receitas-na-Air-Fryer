import React, { useState, useEffect } from 'react';
import { RECENT_BUYERS_DATA } from '../data/testimonials';
import { CheckCircle2, X, ShoppingBag } from 'lucide-react';

export const RecentPurchaseToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show first toast after 3 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Rotate every 12 seconds: show for 6s, hide for 6s
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_BUYERS_DATA.length);
        setIsVisible(true);
      }, 3500);
    }, 11000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  const current = RECENT_BUYERS_DATA[currentIndex];

  return (
    <div
      id="recent-purchase-popup"
      className="fixed bottom-20 sm:bottom-6 left-4 z-50 max-w-[340px] bg-stone-900/95 border border-amber-500/40 text-stone-100 p-3.5 rounded-2xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-5 duration-300 flex items-center gap-3"
    >
      <div className="relative shrink-0">
        <img
          src={current.avatar}
          alt={current.name}
          referrerPolicy="no-referrer"
          className="w-11 h-11 rounded-full object-cover border-2 border-emerald-400"
          loading="lazy"
        />
        <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow-xs">
          <CheckCircle2 className="w-3 h-3" />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1">
          <span className="text-xs font-bold text-white truncate">
            {current.name}
          </span>
          <span className="text-[10px] text-stone-400 shrink-0 font-mono">
            {current.timeAgo}
          </span>
        </div>
        <p className="text-[11px] text-stone-300 truncate">
          de {current.city}, {current.state}
        </p>
        <div className="flex items-center gap-1 mt-0.5 text-[11px] font-semibold text-emerald-400">
          <ShoppingBag className="w-3 h-3 shrink-0" />
          <span className="truncate">Adquiriu por R$ 14,99</span>
        </div>
      </div>

      <button
        onClick={() => setIsDismissed(true)}
        className="text-stone-400 hover:text-white p-1 shrink-0 rounded-md transition"
        title="Fechar notificação"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
