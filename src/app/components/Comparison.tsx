import { Check, X, ArrowRight, Crown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const plans = [
  {
    name: 'Plataforma Comum',
    subtitle: 'SaaS Generico',
    price: 'R$ 299',
    period: '/mes + taxas',
    recommended: false,
    features: [
      { text: 'Templates padronizados', included: true },
      { text: 'Hospedagem compartilhada', included: true },
      { text: 'Suporte basico', included: true },
      { text: 'Codigo-fonte proprio', included: false },
      { text: 'Banco de dados dedicado', included: false },
      { text: 'Customizacao total', included: false },
      { text: 'Integracoes sob demanda', included: false },
      { text: 'API propria', included: false },
      { text: 'Escalabilidade ilimitada', included: false },
    ],
  },
  {
    name: 'Sistema Proprio',
    subtitle: 'Sob Medida',
    price: 'Sob Consulta',
    period: 'investimento unico',
    recommended: true,
    features: [
      { text: 'Templates padronizados', included: true },
      { text: 'Hospedagem compartilhada', included: true },
      { text: 'Suporte basico', included: true },
      { text: 'Codigo-fonte proprio', included: true },
      { text: 'Banco de dados dedicado', included: true },
      { text: 'Customizacao total', included: true },
      { text: 'Integracoes sob demanda', included: true },
      { text: 'API propria', included: true },
      { text: 'Escalabilidade ilimitada', included: true },
    ],
  },
];

export function Comparison() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [60, -30]);

  return (
    <section id="planos" className="py-32 md:py-44 px-6 bg-[#000000] relative" ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header with parallax */}
        <motion.div
          style={{ y: headerY }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.5em] uppercase text-[#D4AF37]/60 mb-6"
          >
            Comparacao
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white tracking-tight"
          >
            Escolha o caminho
            <br />
            <span className="bg-gradient-to-r from-[#C9A55C] via-[#F5E6A3] to-[#D4AF37] bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              para o seu sucesso
            </span>
          </motion.h2>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {plans.map((plan, planIndex) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: planIndex * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <span className="flex items-center gap-1.5 px-4 py-1 text-[10px] tracking-[0.3em] uppercase font-medium bg-[#D4AF37] text-black">
                    <Crown className="w-3 h-3" strokeWidth={2} />
                    Recomendado
                  </span>
                </div>
              )}

              <div
                className={`relative h-full rounded-2xl overflow-hidden transition-all duration-700 ${
                  plan.recommended
                    ? 'bg-white/[0.04] backdrop-blur-xl border-2 border-[#D4AF37]/40 shadow-[0_0_80px_rgba(212,175,55,0.1)]'
                    : 'bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.1]'
                }`}
              >
                {/* Gold shimmer glow for premium card */}
                {plan.recommended && (
                  <>
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#D4AF37]/[0.06] rounded-full blur-3xl animate-breathe-glow" />
                    <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#D4AF37]/[0.04] rounded-full blur-3xl animate-breathe-glow" style={{ animationDelay: '2s' }} />
                  </>
                )}

                {/* Card header */}
                <div className="relative z-10 p-8 md:p-10 pb-0">
                  <p className="text-[11px] tracking-[0.3em] uppercase text-white/30 mb-2">
                    {plan.subtitle}
                  </p>
                  <h3
                    className={`text-2xl font-light mb-4 ${
                      plan.recommended ? 'text-[#D4AF37]' : 'text-white'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-3xl md:text-4xl font-extralight text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs text-white/20 ml-1">{plan.period}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative z-10 mx-8 md:mx-10 h-px bg-white/[0.04]" />

                {/* Features */}
                <div className="relative z-10 p-8 md:p-10 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3">
                      {feature.included ? (
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            plan.recommended
                              ? 'bg-[#D4AF37]/15'
                              : 'bg-white/[0.06]'
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              plan.recommended ? 'text-[#D4AF37]' : 'text-white/40'
                            }`}
                            strokeWidth={2.5}
                          />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-white/[0.02] flex items-center justify-center">
                          <X className="w-3 h-3 text-white/10" strokeWidth={2} />
                        </div>
                      )}
                      <span
                        className={`text-sm font-light ${
                          feature.included ? 'text-white/60' : 'text-white/15'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="relative z-10 p-8 md:p-10 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group/btn w-full py-4 text-sm tracking-[0.15em] uppercase font-medium flex items-center justify-center gap-2 transition-all duration-500 overflow-hidden relative ${
                      plan.recommended
                        ? 'bg-[#D4AF37] text-black hover:bg-[#E5C349]'
                        : 'border border-white/[0.06] text-white/30 hover:text-white hover:border-[#D4AF37]/30'
                    }`}
                  >
                    {plan.recommended && (
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    )}
                    <span className="relative">{plan.recommended ? 'Solicitar Consultoria' : 'Saiba Mais'}</span>
                    <ArrowRight className="relative w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
