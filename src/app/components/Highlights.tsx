import { Crown, Gauge, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

const highlights = [
  {
    icon: Crown,
    title: 'Total Controle',
    description: 'Você é dono de cada linha de código, cada dado e cada decisão. Sem dependências de terceiros ou limitações impostas.',
    gradient: 'from-amber-500/20 to-amber-600/5',
    iconColor: 'text-amber-400',
    borderColor: 'border-amber-500/30',
  },
  {
    icon: Gauge,
    title: 'Performance Incomparável',
    description: 'Infraestrutura otimizada especificamente para seu negócio. Velocidade de carregamento e tempo de resposta superiores.',
    gradient: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: Rocket,
    title: 'Crescimento Ilimitado',
    description: 'Escale sem barreiras. Adicione funcionalidades, integre sistemas e expanda conforme sua visão e necessidade.',
    gradient: 'from-purple-500/20 to-purple-600/5',
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
  },
];

export function Highlights() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-500/10 via-transparent to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Vantagens Estratégicas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Três Pilares do
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Sucesso Premium
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative h-full p-10 rounded-3xl bg-gradient-to-br ${highlight.gradient} border ${highlight.borderColor} backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105`}>
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${highlight.gradient} blur-2xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="mb-8"
                    >
                      <div className="inline-flex p-4 rounded-2xl bg-slate-950/50 border border-slate-700/50">
                        <Icon className={`w-10 h-10 ${highlight.iconColor}`} strokeWidth={1.5} />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {highlight.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${highlight.gradient} blur-3xl opacity-50`} />
                </div>

                {/* Shadow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`} />
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
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-amber-500/30">
            <p className="text-xl text-white font-semibold mb-6">
              Pronto para ter uma plataforma verdadeiramente sua?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 rounded-xl font-bold text-lg hover:from-amber-500 hover:to-amber-600 transition-all shadow-2xl shadow-amber-500/30"
              >
                Iniciar Meu Projeto
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all border border-white/10"
              >
                Agendar Demonstração
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
