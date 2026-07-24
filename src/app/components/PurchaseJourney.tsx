import { useState } from 'react';
import { Check, ChevronRight, CreditCard, PackageCheck, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';

const trackingSteps = [
  { label: 'Pedido confirmado', detail: 'Pagamento demonstrativo aprovado' },
  { label: 'Preparação cuidadosa', detail: 'Conferência e embalagem premium' },
  { label: 'Entrega agendada', detail: 'A caminho no período escolhido' },
];

export function PurchaseJourney() {
  const [delivery, setDelivery] = useState<'scheduled' | 'concierge'>('scheduled');
  const [payment, setPayment] = useState<'card' | 'pix'>('card');
  const [confirmed, setConfirmed] = useState(false);
  const [trackingStage, setTrackingStage] = useState(0);

  const resetJourney = () => {
    setConfirmed(false);
    setTrackingStage(0);
  };

  return (
    <section id="jornada" className="relative border-y border-[#D4AF37]/20 bg-[#080808] px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-[#D4AF37]">Jornada de compra</p>
          <h2 className="max-w-xl text-4xl font-light leading-tight text-white md:text-5xl">
            Decisão segura, checkout claro e cuidado até a entrega.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/60">
            Uma demonstração interativa para produtos de alto valor. Nenhum pagamento ou pedido real é processado.
          </p>

          <ol className="mt-10 space-y-4 text-sm text-white/70">
            {['Escolha da entrega', 'Pagamento demonstrativo', 'Acompanhamento do pedido'].map((label, index) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37]">
                  {index + 1}
                </span>
                {label}
              </li>
            ))}
          </ol>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-black shadow-[0_30px_100px_rgba(212,175,55,0.08)]"
        >
          {!confirmed ? (
            <>
              <div className="border-b border-white/10 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">Seleção privada</p>
                    <h3 className="mt-2 text-2xl text-white">Maison One — edição numerada</h3>
                    <p className="mt-2 text-sm text-white/50">Acabamento ouro escovado · garantia de 24 meses</p>
                  </div>
                  <p className="whitespace-nowrap text-xl text-[#D4AF37]">R$ 8.490</p>
                </div>
              </div>

              <div className="space-y-8 p-6 sm:p-8">
                <fieldset>
                  <legend className="mb-4 flex items-center gap-2 text-sm font-medium text-white">
                    <Truck className="size-4 text-[#D4AF37]" />
                    Como prefere receber?
                  </legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { value: 'scheduled' as const, title: 'Entrega agendada', detail: 'Escolha do período após confirmar' },
                      { value: 'concierge' as const, title: 'Retirada concierge', detail: 'Atendimento privativo no showroom' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        aria-pressed={delivery === option.value}
                        onClick={() => setDelivery(option.value)}
                        className={`rounded-xl border p-4 text-left transition ${
                          delivery === option.value
                            ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                            : 'border-white/10 bg-white/[0.03] hover:border-white/30'
                        }`}
                      >
                        <span className="block text-sm text-white">{option.title}</span>
                        <span className="mt-1 block text-xs leading-5 text-white/45">{option.detail}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="mb-4 flex items-center gap-2 text-sm font-medium text-white">
                    <CreditCard className="size-4 text-[#D4AF37]" />
                    Pagamento demonstrativo
                  </legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { value: 'card' as const, title: 'Cartão', detail: 'Até 10x de R$ 849,00' },
                      { value: 'pix' as const, title: 'PIX', detail: '5% de desconto demonstrativo' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        aria-pressed={payment === option.value}
                        onClick={() => setPayment(option.value)}
                        className={`rounded-xl border p-4 text-left transition ${
                          payment === option.value
                            ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                            : 'border-white/10 bg-white/[0.03] hover:border-white/30'
                        }`}
                      >
                        <span className="block text-sm text-white">{option.title}</span>
                        <span className="mt-1 block text-xs text-white/45">{option.detail}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex items-center gap-2 text-xs text-white/45">
                    <ShieldCheck className="size-4 text-[#D4AF37]" />
                    Ambiente demonstrativo; nenhum dado financeiro é solicitado.
                  </p>
                  <button
                    type="button"
                    onClick={() => setConfirmed(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#E6C75F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                  >
                    Confirmar simulação
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="p-6 sm:p-8" aria-live="polite">
              <div className="flex items-start gap-4 border-b border-white/10 pb-8">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                  <PackageCheck className="size-6" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">Pedido demonstrativo #LUX-2048</p>
                  <h3 className="mt-2 text-3xl text-white">Tudo confirmado.</h3>
                  <p className="mt-2 text-sm text-white/50">
                    {delivery === 'scheduled' ? 'Entrega agendada' : 'Retirada concierge'} · {payment === 'card' ? 'Cartão' : 'PIX'}
                  </p>
                </div>
              </div>

              <div className="py-8">
                <h4 className="mb-6 text-sm font-medium text-white">Acompanhamento transparente</h4>
                <ol className="space-y-2">
                  {trackingSteps.map((step, index) => {
                    const completed = index <= trackingStage;
                    return (
                      <li key={step.label} className="grid grid-cols-[2rem_1fr] gap-3">
                        <div className="flex flex-col items-center">
                          <span
                            className={`flex size-8 items-center justify-center rounded-full border ${
                              completed ? 'border-[#D4AF37] bg-[#D4AF37] text-black' : 'border-white/20 text-white/30'
                            }`}
                          >
                            {completed ? <Check className="size-4" /> : index + 1}
                          </span>
                          {index < trackingSteps.length - 1 && (
                            <span className={`h-10 w-px ${index < trackingStage ? 'bg-[#D4AF37]' : 'bg-white/10'}`} />
                          )}
                        </div>
                        <div className="pt-1">
                          <p className={completed ? 'text-white' : 'text-white/35'}>{step.label}</p>
                          <p className="mt-1 text-xs text-white/35">{step.detail}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={resetJourney}
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/70 hover:border-white/40 hover:text-white"
                >
                  Reiniciar jornada
                </button>
                {trackingStage < trackingSteps.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setTrackingStage((stage) => Math.min(stage + 1, trackingSteps.length - 1))}
                    className="rounded-full bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#E6C75F]"
                  >
                    Avançar acompanhamento
                  </button>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
