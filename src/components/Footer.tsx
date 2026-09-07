import React from 'react';
import { LegalModalType } from './LegalModals';
import { ShieldCheck, Lock, HeartHandshake } from 'lucide-react';

interface FooterProps {
  onOpenLegalModal: (modal: LegalModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  return (
    <footer className="bg-[#08080a] border-t border-stone-800/80 text-stone-400 text-xs py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-stone-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold">Site 100% Seguro & Autenticado</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-amber-400" />
            <span className="font-semibold">Criptografia SSL de 256 Bits</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-rose-400" />
            <span className="font-semibold">Satisfação Garantida ou Dinheiro de Volta</span>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 border-t border-stone-900 text-stone-400">
          <button
            onClick={() => onOpenLegalModal('privacidade')}
            className="hover:text-amber-300 transition underline underline-offset-4 cursor-pointer"
          >
            Políticas de Privacidade
          </button>
          <span className="text-stone-700">•</span>
          <button
            onClick={() => onOpenLegalModal('termos')}
            className="hover:text-amber-300 transition underline underline-offset-4 cursor-pointer"
          >
            Termos de Uso
          </button>
          <span className="text-stone-700">•</span>
          <button
            onClick={() => onOpenLegalModal('aviso')}
            className="hover:text-amber-300 transition underline underline-offset-4 cursor-pointer"
          >
            Aviso Legal
          </button>
          <span className="text-stone-700">•</span>
          <button
            onClick={() => onOpenLegalModal('contato')}
            className="hover:text-amber-300 transition underline underline-offset-4 cursor-pointer"
          >
            Contato & Suporte
          </button>
        </div>

        {/* Legal Disclaimer */}
        <div className="max-w-3xl mx-auto text-center space-y-2 text-[11px] text-stone-500 leading-relaxed">
          <p>
            Este site não é afiliado ao Facebook, Google, Mercado Livre ou a qualquer marca fabricante de fritadeiras elétricas. Todas as marcas mencionadas (Airfryer, Mondial, Walita, etc.) são de propriedade exclusiva de seus respectivos detentores de direitos.
          </p>
          <p>
            As receitas, dicas e técnicas apresentadas neste guia digital são formuladas para fins culinários e informativos para uma alimentação mais saudável sem a imersão em óleo.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 border-t border-stone-900 text-[11px] text-stone-600">
          © {new Date().getFullYear()} 150 Receitas na Air Fryer. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};
