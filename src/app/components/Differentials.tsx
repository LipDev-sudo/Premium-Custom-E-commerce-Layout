import { Database, Server, Zap, Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const differentials = [
  {
    icon: Server,
    title: 'Sistema Proprio',
    description:
      'Arquitetura exclusiva sem limites de plataformas de prateleira. Cada modulo moldado ao seu negocio.',
    features: ['Codigo-fonte 100% seu', 'Sem taxas de plataforma', 'Modulos sob medida'],
  },
  {
    icon: Database,
    title: 'Dados Dedicados',
    description:
      'Infraestrutura isolada com total seguranca, privacidade e conformidade. Seus dados, suas regras.',
    features: ['Banco isolado', 'LGPD compliant', 'Backup automatico'],
  },
  {
    icon: Zap,
    title: 'Performance Elite',
    description:
      'Velocidade sub-segundo. Otimizado para conversao maxima e experiencia impecavel em cada clique.',
    features: ['Sub-segundo de resposta', 'CDN global', '99.9% uptime'],
  },
];

export function Differentials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [60, -30]);

  return (
    <section id="diferenciais" className="py-32 md:py-44 px-6 bg-[#000000] relative" ref={sectionRef}>
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/[0.02] blur-[100px] rounded-full animate-breathe-glow" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header with parallax */}
        <motion.div
          style={{ y: headerY }}
          className="text-center mb-24"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.5em] uppercase text-[#D4AF37]/60 mb-6"
          >
            Diferenciais
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white tracking-tight"
          >
            Por que escolher uma
            <br />
            <span className="bg-gradient-to-r from-[#C9A55C] via-[#F5E6A3] to-[#D4AF37] bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              plataforma sob medida
            </span>
          </motion.h2>
        </motion.div>

        {/* Cards with glassmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full p-10 md:p-12 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:border-[#D4AF37]/30 transition-all duration-700 overflow-hidden">
                  {/* Glass-morphism glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4AF37]/[0.06] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    {/* Icon with gold accent */}
                    <div className="mb-8 inline-flex p-4 rounded-xl border border-[#D4AF37]/10 bg-[#D4AF37]/[0.04] backdrop-blur-sm group-hover:border-[#D4AF37]/20 transition-all duration-500">
                      <Icon
                        className="w-8 h-8 text-[#D4AF37] opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
                        strokeWidth={1}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-light text-white mb-4 tracking-wide">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/30 leading-relaxed text-[15px] font-light mb-6">
                      {item.description}
                    </p>

                    {/* Feature list with gold checkmarks */}
                    <div className="space-y-3 pt-4 border-t border-white/[0.04]">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-[#D4AF37]" strokeWidth={2.5} />
                          </div>
                          <span className="text-sm text-white/40 font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
