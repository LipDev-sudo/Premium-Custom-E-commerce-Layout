import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    category: 'Controle e Propriedade',
    items: [
      { feature: 'Código-fonte próprio', common: false, custom: true },
      { feature: 'Banco de dados dedicado', common: false, custom: true },
      { feature: 'Liberdade total de customização', common: false, custom: true },
      { feature: 'Sem taxas mensais recorrentes', common: false, custom: true },
    ],
  },
  {
    category: 'Performance e Escalabilidade',
    items: [
      { feature: 'Infraestrutura escalável', common: false, custom: true },
      { feature: 'Otimização dedicada', common: false, custom: true },
      { feature: 'Sem limitações de recursos', common: false, custom: true },
      { feature: 'Velocidade otimizada', common: true, custom: true },
    ],
  },
  {
    category: 'Recursos e Integrações',
    items: [
      { feature: 'Integrações sob demanda', common: false, custom: true },
      { feature: 'API própria customizada', common: false, custom: true },
      { feature: 'Módulos exclusivos', common: false, custom: true },
      { feature: 'Suporte prioritário', common: false, custom: true },
    ],
  },
];

export function Comparison() {
  return (
    <section id="comparacao" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Comparação Técnica
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Plataforma Comum vs
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Sistema Sob Medida
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Entenda as vantagens competitivas de ter uma solução desenvolvida exclusivamente para você.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-slate-700/50 bg-slate-950/50">
            <div className="text-slate-400 font-semibold text-sm">Característica</div>
            <div className="text-center">
              <div className="text-slate-300 font-semibold mb-1">Plataforma Comum</div>
              <div className="text-xs text-slate-500">SaaS Genérico</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent font-bold mb-1">
                Sistema Próprio
              </div>
              <div className="text-xs text-amber-400/70">Sob Medida</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-700/30">
            {features.map((category, categoryIndex) => (
              <div key={category.category}>
                <div className="px-6 py-3 bg-slate-950/30">
                  <h3 className="text-white font-semibold text-sm">{category.category}</h3>
                </div>
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-slate-800/30 transition-colors"
                  >
                    <div className="text-slate-300 text-sm">{item.feature}</div>
                    <div className="flex justify-center">
                      {item.common ? (
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-400" strokeWidth={2.5} />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                          <X className="w-4 h-4 text-red-400" strokeWidth={2.5} />
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center">
                      {item.custom ? (
                        <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-amber-400" strokeWidth={2.5} />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                          <X className="w-4 h-4 text-red-400" strokeWidth={2.5} />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="p-6 bg-gradient-to-r from-amber-500/10 to-transparent border-t border-amber-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white font-semibold mb-1">
                  Invista em uma solução que cresce com você
                </p>
                <p className="text-slate-400 text-sm">
                  Liberdade, controle e retorno a longo prazo
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 rounded-xl font-bold hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/25 whitespace-nowrap"
              >
                Solicitar Consultoria
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
