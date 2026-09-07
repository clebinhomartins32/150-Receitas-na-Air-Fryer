/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { PainToSolutionSection } from './components/PainToSolutionSection';
import { WhoIsItFor } from './components/WhoIsItFor';
import { ModulesSection } from './components/ModulesSection';
import { AuthorSection } from './components/AuthorSection';
import { BonusesSection } from './components/BonusesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { RecentPurchaseToast } from './components/RecentPurchaseToast';
import { StickyMobileBar } from './components/StickyMobileBar';
import { CheckoutModal } from './components/CheckoutModal';
import { LegalModals, LegalModalType } from './components/LegalModals';
import { redirectToKiwifyCheckout, trackPageView, trackPurchase } from './utils/analytics';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);
  const [purchaseSuccessBanner, setPurchaseSuccessBanner] = useState(false);

  useEffect(() => {
    // 1. Fire PageView on load
    trackPageView();

    // 2. Check if user arrived via Kiwify thank you or status=paid/obrigado
    const params = new URLSearchParams(window.location.search);
    if (
      params.get('status') === 'paid' || 
      params.get('status') === 'obrigado' || 
      params.get('compra') === 'sucesso' ||
      window.location.pathname.includes('/obrigado')
    ) {
      trackPurchase();
      setPurchaseSuccessBanner(true);
    }
  }, []);

  const handleCta = (source: string) => {
    redirectToKiwifyCheckout(source);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-stone-100 font-sans selection:bg-amber-500 selection:text-white pb-20 md:pb-0">
      
      {/* Thank you / Purchase verified notification if redirected from checkout */}
      {purchaseSuccessBanner && (
        <div className="bg-emerald-600 text-white py-3 px-4 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg relative z-50">
          <CheckCircle2 className="w-5 h-5 text-white animate-bounce" />
          <span>PARABÉNS! Seu pedido foi confirmado. Enviamos as 150 receitas para o seu e-mail!</span>
          <button 
            onClick={() => setPurchaseSuccessBanner(false)}
            className="ml-3 underline text-emerald-100 hover:text-white"
          >
            Fechar
          </button>
        </div>
      )}

      {/* 1. Urgency Top Bar */}
      <TopBanner onCtaClick={() => handleCta('top_banner')} />

      <main>
        {/* 2. High-Converting Hero Section */}
        <HeroSection onCtaClick={() => handleCta('hero_cta')} />

        {/* 3. Pain Point to Solution Section */}
        <PainToSolutionSection onCtaClick={() => handleCta('pain_cta')} />

        {/* 4. For Whom is this Guide & Benefits */}
        <WhoIsItFor onCtaClick={() => handleCta('who_is_it_for_cta')} />

        {/* 5. What is inside: 150 Recipes Modules & Filterable Dishes */}
        <ModulesSection onCtaClick={() => handleCta('modules_cta')} />

        {/* 6. Author: Dra. Cátia Viegas (Nutricionista) */}
        <AuthorSection />

        {/* 7. Special Bonuses Included for Free */}
        <BonusesSection onCtaClick={() => handleCta('bonus_cta')} />

        {/* 8. Authentic Customer Testimonials with Distinct Photos */}
        <TestimonialsSection />

        {/* 9. 7-Day Unconditional Money Back Guarantee */}
        <GuaranteeSection onCtaClick={() => handleCta('guarantee_cta')} />

        {/* 10. Main Pricing Card & Offer Anchor (Direct Kiwify Checkout) */}
        <PricingSection onCtaClick={() => handleCta('pricing_main_cta')} />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 12. Footer with Compliance Links */}
      <Footer onOpenLegalModal={(modal) => setActiveLegalModal(modal)} />

      {/* 13. Dynamic Recent Purchase Notification Popup */}
      <RecentPurchaseToast />

      {/* 14. Mobile Sticky Bottom CTA */}
      <StickyMobileBar onCtaClick={() => handleCta('mobile_sticky_cta')} />

      {/* 15. Instant Checkout Modal (if needed as fallback) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* 16. Legal & Policy Modals */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
