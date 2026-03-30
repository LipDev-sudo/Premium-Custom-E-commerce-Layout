import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';

const stats = [
  { value: 10000, suffix: '+', label: 'Clientes Ativos', prefix: '', icon: Sparkles },
  { value: 99, suffix: '%', label: 'Satisfacao', prefix: '', icon: TrendingUp },
  { value: 50, suffix: 'M+', label: 'Transacoes Processadas', prefix: 'R$ ', icon: Shield },
  { value: 99.9, suffix: '%', label: 'Uptime Garantido', prefix: '', icon: Zap },
];

function AnimatedCounter({
  value,
  suffix,
  prefix,
  inView,
}: {
  value: number;
  suffix: string;
  prefix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const end = value;
    const duration = 2000;
    const isDecimal = value % 1 !== 0;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;

      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [inView, value]);

  const display = value % 1 !== 0 ? count.toFixed(1) : count.toLocaleString('pt-BR');

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function Highlights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.4 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [60, -30]);

  return (
    <section id="resultados" className="py-32 md:py-44 px-6 bg-[#000000] relative" ref={sectionRef}>
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-[#D4AF37]/[0.02] blur-[120px] rounded-full animate-breathe-glow" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />

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
            Resultados
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white tracking-tight"
          >
            Numeros que
            <br />
            <span className="bg-gradient-to-r from-[#C9A55C] via-[#F5E6A3] to-[#D4AF37] bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              falam por si
            </span>
          </motion.h2>
        </motion.div>

        {/* Stats grid - glassmorphism cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative p-8 md:p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:border-[#D4AF37]/30 transition-all duration-700 overflow-hidden">
                  {/* Hover gold glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/[0.06] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Gold icon accent */}
                  <div className="relative z-10 mb-4 flex justify-center">
                    <Icon className="w-5 h-5 text-[#D4AF37]/40 group-hover:text-[#D4AF37]/70 transition-colors duration-500" strokeWidth={1.5} />
                  </div>

                  <p className="relative z-10 text-4xl md:text-5xl font-extralight text-white mb-3 tracking-tight">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      inView={inView}
                    />
                  </p>
                  <p className="relative z-10 text-[12px] tracking-[0.2em] uppercase text-white/30">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-white/30 text-lg font-light mb-8">
            Pronto para ter uma plataforma verdadeiramente sua?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-10 py-4 bg-[#D4AF37] text-black text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#E5C349] transition-colors duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Iniciar Meu Projeto</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 text-sm tracking-[0.15em] uppercase text-white/30 hover:text-white border border-white/[0.06] hover:border-[#D4AF37]/30 backdrop-blur-sm transition-all duration-500"
            >
              Agendar Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
