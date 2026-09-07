import React from 'react';
import { X, ShieldCheck, FileText, Mail, AlertTriangle } from 'lucide-react';

export type LegalModalType = 'privacidade' | 'termos' | 'aviso' | 'contato' | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-stone-900 border border-stone-700 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl text-stone-200 overflow-hidden"
        role="dialog"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {activeModal === 'privacidade' && <ShieldCheck className="w-5 h-5 text-amber-400" />}
            {activeModal === 'termos' && <FileText className="w-5 h-5 text-amber-400" />}
            {activeModal === 'aviso' && <AlertTriangle className="w-5 h-5 text-amber-400" />}
            {activeModal === 'contato' && <Mail className="w-5 h-5 text-amber-400" />}
            
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {activeModal === 'privacidade' && 'Políticas de Privacidade'}
              {activeModal === 'termos' && 'Termos de Uso'}
              {activeModal === 'aviso' && 'Aviso Legal'}
              {activeModal === 'contato' && 'Fale Conosco / Suporte'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed">
          {activeModal === 'privacidade' && (
            <>
              <p>
                A sua privacidade é de extrema importância para nós. Esta política descreve como tratamos e protegemos as informações fornecidas por você durante sua visita e compra neste site, em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
              <h4 className="text-white font-bold text-sm">1. Coleta de Dados</h4>
              <p>
                Coletamos apenas as informações essenciais para o processamento do seu pedido e envio do seu produto digital (como nome completo e endereço de e-mail). Nunca vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de spam.
              </p>
              <h4 className="text-white font-bold text-sm">2. Segurança das Informações</h4>
              <p>
                Todas as transações de pagamento são processadas através de plataformas seguras com criptografia de ponta a ponta (SSL de 256 bits). Não armazenamos nenhum dado de cartão de crédito ou informações bancárias em nossos servidores.
              </p>
              <h4 className="text-white font-bold text-sm">3. Seus Direitos</h4>
              <p>
                Você tem o direito de solicitar a confirmação da existência de tratamento, o acesso aos seus dados ou a exclusão definitiva a qualquer momento através do nosso canal de suporte.
              </p>
            </>
          )}

          {activeModal === 'termos' && (
            <>
              <p>
                Ao adquirir o material "150 Receitas na Air Fryer", você concorda expressamente com os seguintes termos e condições:
              </p>
              <h4 className="text-white font-bold text-sm">1. Propriedade Intelectual e Licença de Uso</h4>
              <p>
                Todo o conteúdo do guia (textos, tabelas, receitas e fotografias) é protegido por direitos autorais. A aquisição concede a você uma licença pessoal, intransferível e não exclusiva para uso doméstico individual. É expressamente proibida a reprodução, revenda, rateio ou distribuição pública sem autorização prévia por escrito.
              </p>
              <h4 className="text-white font-bold text-sm">2. Entrega do Conteúdo</h4>
              <p>
                O acesso ao guia digital é disponibilizado imediatamente por e-mail após a confirmação do pagamento pelo gateway processador. Certifique-se de preencher o e-mail corretamente no momento da compra.
              </p>
              <h4 className="text-white font-bold text-sm">3. Garantia de 7 Dias</h4>
              <p>
                Conforme o Artigo 49 do Código de Defesa do Consumidor, oferecemos 7 dias incondicionais para solicitação de reembolso integral caso o produto não atenda às suas expectativas.
              </p>
            </>
          )}

          {activeModal === 'aviso' && (
            <>
              <p>
                As informações, receitas e orientações contidas neste material têm caráter informativo e educacional sobre culinária e uso de fritadeiras elétricas sem óleo.
              </p>
              <h4 className="text-white font-bold text-sm">1. Resultados Individuais</h4>
              <p>
                Os resultados podem variar de acordo com o modelo, voltagem e potência da fritadeira utilizada, bem como o tamanho e qualidade dos ingredientes. Sempre verifique a temperatura e o ponto de cozimento antes de servir carnes e alimentos.
              </p>
              <h4 className="text-white font-bold text-sm">2. Restrições Alimentares</h4>
              <p>
                Pessoas com alergias, intolerâncias alimentares ou condições médicas específicas devem atentar-se aos ingredientes utilizados e consultar seu médico ou nutricionista caso necessário.
              </p>
            </>
          )}

          {activeModal === 'contato' && (
            <>
              <p>
                Nossa equipe de suporte está sempre à disposição para esclarecer qualquer dúvida sobre sua compra ou sobre o material:
              </p>
              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                <div>
                  <strong className="text-white">E-mail de Suporte:</strong>{' '}
                  <span className="text-amber-400">suporte@150receitasairfryer.com.br</span>
                </div>
                <div>
                  <strong className="text-white">Horário de Atendimento:</strong>{' '}
                  <span>Segunda a Sexta, das 09h às 18h</span>
                </div>
                <div>
                  <strong className="text-white">Tempo médio de resposta:</strong>{' '}
                  <span className="text-emerald-400 font-semibold">Menos de 2 horas úteis</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-950 border-t border-stone-800 text-right">
          <button
            onClick={onClose}
            className="bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold px-5 py-2 rounded-xl text-xs sm:text-sm cursor-pointer"
          >
            Entendido e Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
