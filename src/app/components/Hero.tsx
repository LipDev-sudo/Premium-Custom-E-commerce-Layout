import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#000000]"
    >
      {/* Animated radial glow - parallax breathing */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full animate-breathe-glow"
      >
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,rgba(212,175,55,0.02)_40%,transparent_70%)] rounded-full" />
      </motion.div>

      {/* Subtle gold particle dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#D4AF37]/20 animate-parallax-float"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + i * 12}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div style={{ opacity }} className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[11px] tracking-[0.5em] uppercase text-[#D4AF37]/60 mb-10"
        >
          Plataforma Enterprise de Alto Desempenho
        </motion.p>

        {/* Main Title with parallax */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: titleY }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight leading-[0.9] mb-8"
        >
          <span className="text-white">Sua Loja.</span>
          <br />
          <span className="bg-gradient-to-r from-[#C9A55C] via-[#F5E6A3] to-[#D4AF37] bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
            Seu Mundo.
          </span>
        </motion.h1>

        {/* Subtitle with parallax */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ y: subtitleY }}
          className="text-lg md:text-xl text-white/40 font-light max-w-2xl mx-auto leading-relaxed mb-16"
        >
          Sistema exclusivo desenvolvido sob medida. Banco de dados proprio,
          escalabilidade ilimitada e controle absoluto sobre cada detalhe.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-3 px-10 py-4 text-sm tracking-[0.15em] uppercase font-medium border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 overflow-hidden"
          >
            {/* Shimmer sweep on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">Descubra o Premium</span>
            <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 text-sm tracking-[0.15em] uppercase text-white/30 hover:text-white border border-white/[0.06] hover:border-[#D4AF37]/30 backdrop-blur-sm transition-all duration-500"
          >
            Ver Demo
          </motion.button>
        </motion.div>

        {/* Floating product mockup visual with parallax */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: mockupY }}
          className="mt-24 relative"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative mx-auto max-w-3xl"
          >
            {/* Device frame with glassmorphism */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl shadow-[0_0_80px_rgba(212,175,55,0.06)]">
              {/* Screen top bar */}
              <div className="h-8 bg-black/60 backdrop-blur-md flex items-center px-4 gap-2 border-b border-white/[0.04]">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>

              {/* Mock store interface */}
              <div className="p-8 space-y-6 bg-[#0A0A0A]/80">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 bg-[#D4AF37]/20 rounded" />
                  <div className="flex gap-3">
                    <div className="h-3 w-16 bg-white/[0.04] rounded" />
                    <div className="h-3 w-16 bg-white/[0.04] rounded" />
                  </div>
                </div>

                {/* Product grid mockup */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-3">
                      <div className="aspect-square bg-white/[0.02] rounded-lg border border-white/[0.04]" />
                      <div className="h-2 w-3/4 bg-white/[0.06] rounded" />
                      <div className="h-2 w-1/2 bg-[#D4AF37]/15 rounded" />
                    </div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                  <div className="h-2 w-20 bg-white/[0.04] rounded" />
                  <div className="h-8 w-28 bg-[#D4AF37]/10 rounded border border-[#D4AF37]/20" />
                </div>
              </div>
            </div>

            {/* Reflection / glow beneath */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#D4AF37]/[0.06] blur-3xl rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
    </section>
  );
}
