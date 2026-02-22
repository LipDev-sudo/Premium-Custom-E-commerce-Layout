import { Database, Server, TrendingUp, Puzzle, Shield, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const differentials = [
  {
    icon: Server,
    title: 'Sistema Próprio',
    description: 'Arquitetura customizada desenvolvida exclusivamente para seu negócio, sem limitações de plataformas de prateleira.',
  },
  {
    icon: Database,
    title: 'Banco de Dados Exclusivo',
    description: 'Seus dados em infraestrutura dedicada, com total segurança, privacidade e conformidade com LGPD.',
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidade Infinita',
    description: 'Preparado para crescer junto com seu negócio. Suporta desde milhares até milhões de transações.',
  },
  {
    icon: Puzzle,
    title: 'Integrações Personalizadas',
    description: 'Conecte-se com qualquer sistema: ERP, CRM, logística, pagamentos e muito mais.',
  },
  {
    icon: Shield,
    title: 'Segurança de Nível Enterprise',
    description: 'Proteção avançada com criptografia, backups automáticos e monitoramento 24/7.',
  },
  {
    icon: Zap,
    title: 'Performance Otimizada',
    description: 'Velocidade de carregamento excepcional e tempo de resposta otimizado para conversão máxima.',
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Diferenciais Premium
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por que Escolher uma
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Plataforma Sob Medida?
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Investimento em tecnologia própria que se paga com resultados superiores e crescimento sustentável.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-transparent transition-all duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 relative">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20">
                      <Icon className="w-7 h-7 text-amber-400" strokeWidth={1.5} />
                    </div>
                    <div className="absolute inset-0 blur-2xl bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
