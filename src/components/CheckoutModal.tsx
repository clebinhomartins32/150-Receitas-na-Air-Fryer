import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CheckCircle2, QrCode, Copy, Sparkles, ArrowRight, Download, Mail, ExternalLink, Zap } from 'lucide-react';
import { redirectToKiwifyCheckout, KIWIFY_CHECKOUT_URL } from '../utils/analytics';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    redirectToKiwifyCheckout('checkout_modal_form');
  };

  const dummyPixCode = "00020126580014br.gov.bcb.pix0136e4f3a71b-7419-4871-b0e9-967b635d3121520400005303986540514.995802BR5925RECEITAS AIRFRYER LTDA6009SAO PAULO62070503***6304D1A8";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(dummyPixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-stone-900 border-2 border-amber-500/50 rounded-3xl max-w-lg w-full max-h-[92vh] flex flex-col shadow-2xl text-stone-200 overflow-hidden relative"
        role="dialog"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border-b border-stone-800 text-center">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase mb-2">
            <ShieldCheck className="w-3.5 h-3.5" /> Ambiente 100% Criptografado
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Finalizar Pedido com 81% OFF
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Receba o acesso instantâneo ao <strong className="text-amber-300">Guia 150 Receitas + 3 Bônus</strong>
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {!isCompleted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Order Summary Box */}
              <div className="bg-stone-950/80 border border-stone-800 rounded-2xl p-3.5 sm:p-4 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-stone-300">
                  <span>Guia 150 Receitas na Air Fryer</span>
                  <span className="line-through text-stone-500">R$ 80,00</span>
                </div>
                <div className="flex justify-between items-center text-stone-300">
                  <span>3 Super Bônus de Lançamento</span>
                  <span className="text-emerald-400 font-bold">GRÁTIS</span>
                </div>
                <div className="flex justify-between items-center text-stone-300">
                  <span>Desconto Aplicado (Hoje)</span>
                  <span className="text-red-400 font-bold">- R$ 65,01</span>
                </div>
                <div className="pt-2 border-t border-stone-800 flex justify-between items-center text-base font-bold text-white">
                  <span>Total a Pagar:</span>
                  <span className="text-2xl font-black text-amber-300">R$ 14,99</span>
                </div>
              </div>

              {/* User Data Inputs */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                    Seu Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Maria da Silva"
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                    Seu Melhor E-mail (Onde receberá o acesso):
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ex: maria@gmail.com"
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                  <span className="text-[11px] text-amber-300/80 mt-1 block">
                    ⚡ O material digital é liberado imediatamente neste e-mail.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                    Telefone / WhatsApp (Opcional):
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
                  Escolha a Forma de Pagamento:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex flex-col items-center justify-center gap-1 transition cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'bg-amber-500/10 border-amber-400 text-amber-300 ring-1 ring-amber-400'
                        : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <span className="flex items-center gap-1 font-bold text-emerald-400">
                      <Zap className="w-3.5 h-3.5" /> PIX IMEDIATO
                    </span>
                    <span className="text-[10px] text-stone-400 font-normal">Aprovação em segundos</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex flex-col items-center justify-center gap-1 transition cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-amber-500/10 border-amber-400 text-amber-300 ring-1 ring-amber-400'
                        : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <span>CARTÃO DE CRÉDITO</span>
                    <span className="text-[10px] text-stone-400 font-normal">Até 3x sem juros</span>
                  </button>
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-stone-950 font-black text-base sm:text-lg py-4 px-6 rounded-xl shadow-xl flex items-center justify-center gap-2 cursor-pointer transition transform active:scale-95 disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Processando com Segurança...</span>
                ) : (
                  <>
                    <Lock className="w-5 h-5 text-stone-950" />
                    <span>PAGAR R$ 14,99 & RECEBER ACESSO</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-stone-500">
                🔒 Seus dados estão 100% protegidos por criptografia SSL de 256 bits.
              </p>
            </form>
          ) : (
            /* Completed Screen (Simulated Instant Access & Pix) */
            <div className="text-center py-4 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="text-2xl font-black text-white">
                  Pedido Gerado com Sucesso!
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-sm mx-auto">
                  Parabéns, <strong>{name}</strong>! As instruções de acesso imediato foram enviadas para <strong className="text-amber-300">{email}</strong>.
                </p>
              </div>

              {paymentMethod === 'pix' ? (
                <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 space-y-3">
                  <span className="text-xs uppercase font-bold text-amber-400 flex items-center justify-center gap-1.5">
                    <QrCode className="w-4 h-4" /> Pague com Pix para liberação instantânea:
                  </span>

                  {/* Dummy Pix QR code representation */}
                  <div className="w-40 h-40 mx-auto bg-white p-2 rounded-xl flex items-center justify-center shadow-inner">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(dummyPixCode)}`}
                      alt="QR Code Pix"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="text-xs text-stone-400">
                    Valor: <strong className="text-emerald-400 text-sm">R$ 14,99</strong>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="w-full bg-stone-800 hover:bg-stone-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition border border-stone-700"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{copiedPix ? 'CÓDIGO PIX COPIADO!' : 'COPIAR CÓDIGO PIX (COPIA E COLA)'}</span>
                  </button>
                </div>
              ) : (
                <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 space-y-2 text-xs sm:text-sm text-stone-300">
                  <p>
                    O pagamento no cartão foi pré-autorizado com sucesso! Em instantes você receberá o recibo e seus dados de acesso no e-mail informado.
                  </p>
                </div>
              )}

              {/* Instant Access Download/Read Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    alert(`Acesso simulado confirmado para ${email}! Seu Guia 150 Receitas na Air Fryer está pronto para uso.`);
                    onClose();
                  }}
                  className="w-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-black py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer transition shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>ACESSAR O GUIA AGORA</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
