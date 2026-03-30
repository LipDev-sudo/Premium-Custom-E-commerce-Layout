import { motion, useScroll, useTransform } from 'motion/react';
import { BarChart3, ShoppingCart, Users, DollarSign, Package } from 'lucide-react';
import { useRef } from 'react';

export function DashboardMockup() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [60, -30]);
  const mockupRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -4]);

  return (
    <section id="tecnologia" className="py-32 md:py-44 px-6 bg-[#000000] relative overflow-hidden" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#D4AF37]/[0.02] blur-[120px] rounded-full animate-breathe-glow" />

      <div className="max-w-6xl mx-auto relative z-10">
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
            Tecnologia
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white tracking-tight"
          >
            Painel Administrativo
            <br />
            <span className="bg-gradient-to-r from-[#C9A55C] via-[#F5E6A3] to-[#D4AF37] bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              Moderno e Intuitivo
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/30 text-lg font-light max-w-xl mx-auto mt-6"
          >
            Gerencie toda sua operacao com analytics em tempo real e controle total.
          </motion.p>
        </motion.div>

        {/* Dashboard with parallax tilt */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative"
          style={{ perspective: '1200px' }}
        >
          <motion.div
            className="relative mx-auto max-w-4xl"
            style={{ rotateX: mockupRotateX }}
          >
            {/* Laptop screen with glassmorphism */}
            <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl shadow-[0_0_80px_rgba(212,175,55,0.06)]">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-5 py-3 bg-black/40 backdrop-blur-md border-b border-white/[0.04]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                </div>
                <div className="flex-1 ml-4">
                  <div className="px-4 py-1 bg-white/[0.03] backdrop-blur-sm rounded text-[11px] text-white/20 max-w-sm font-mono border border-white/[0.04]">
                    suaplataforma.com.br/admin
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 md:p-8 bg-[#0A0A0A]/60">
                {/* Stat cards row - glass panels */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                  <DashStatCard icon={DollarSign} label="Faturamento" value="R$ 47.259" trend="+23%" />
                  <DashStatCard icon={ShoppingCart} label="Pedidos" value="142" trend="+12%" />
                  <DashStatCard icon={Users} label="Clientes" value="89" trend="+8%" />
                  <DashStatCard icon={Package} label="Vendidos" value="1.247" trend="+18%" />
                </div>

                {/* Charts area - glass panels */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Main chart */}
                  <div className="lg:col-span-2 bg-white/[0.02] backdrop-blur-sm rounded-xl p-5 border border-white/[0.04]">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <p className="text-white text-sm font-light">Vendas por Periodo</p>
                        <p className="text-white/20 text-xs mt-0.5">Ultimos 7 dias</p>
                      </div>
                      <BarChart3 className="w-4 h-4 text-[#D4AF37]/40" />
                    </div>
                    <div className="h-36 flex items-end justify-between gap-1.5">
                      {[65, 45, 78, 52, 88, 72, 95].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            transition={{ duration: 0.8, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="w-full bg-gradient-to-t from-[#D4AF37]/50 to-[#D4AF37]/10 rounded-sm"
                          />
                          <span className="text-[10px] text-white/20">
                            {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activity feed - glass panel */}
                  <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl p-5 border border-white/[0.04]">
                    <p className="text-white text-sm font-light mb-4">Atividade</p>
                    <div className="space-y-3">
                      {[
                        { label: 'Pedido #4892', time: '2 min', dot: 'bg-[#D4AF37]' },
                        { label: 'Pagamento OK', time: '5 min', dot: 'bg-[#D4AF37]/60' },
                        { label: 'Despacho #4889', time: '12 min', dot: 'bg-[#D4AF37]/40' },
                        { label: 'Novo cliente', time: '18 min', dot: 'bg-[#D4AF37]/20' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.08 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2.5"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-white/50 truncate">{item.label}</p>
                          </div>
                          <p className="text-[10px] text-white/15">{item.time}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop base */}
            <div className="h-3 bg-gradient-to-b from-white/[0.03] to-transparent rounded-b-xl mx-4 border-x border-b border-white/[0.02]" />

            {/* Reflection glow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-[#D4AF37]/[0.05] blur-[60px] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function DashStatCard({
  icon: Icon,
  label,
  value,
  trend,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl p-4 border border-white/[0.04] hover:border-[#D4AF37]/20 transition-all duration-500 group">
      <div className="flex items-center justify-between mb-2">
        <Icon className="w-4 h-4 text-[#D4AF37]/40 group-hover:text-[#D4AF37]/70 transition-colors duration-500" strokeWidth={1.5} />
        <span className="text-[10px] text-[#D4AF37]/60 font-mono">{trend}</span>
      </div>
      <p className="text-lg font-light text-white mb-0.5">{value}</p>
      <p className="text-[11px] text-white/20">{label}</p>
    </div>
  );
}
