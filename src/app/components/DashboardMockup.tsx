import { motion } from 'motion/react';
import { BarChart3, ShoppingCart, Users, TrendingUp, DollarSign, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DashboardMockup() {
  return (
    <section id="tecnologia" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Tecnologia de Ponta
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dashboard Administrativo
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Moderno e Intuitivo
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Gerencie toda sua operação com uma interface profissional, 
            analytics em tempo real e controle total do seu negócio.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Dashboard Container */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 shadow-2xl shadow-amber-500/10">
            {/* Browser-like Header */}
            <div className="flex items-center gap-2 px-6 py-4 bg-slate-950/50 border-b border-slate-700/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 ml-4">
                <div className="px-4 py-1.5 bg-slate-800/50 rounded-lg text-xs text-slate-400 max-w-md">
                  https://suaplataforma.com.br/admin
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard
                  icon={DollarSign}
                  label="Faturamento Hoje"
                  value="R$ 47.259"
                  trend="+23%"
                  color="amber"
                />
                <StatCard
                  icon={ShoppingCart}
                  label="Pedidos Ativos"
                  value="142"
                  trend="+12%"
                  color="blue"
                />
                <StatCard
                  icon={Users}
                  label="Novos Clientes"
                  value="89"
                  trend="+8%"
                  color="green"
                />
                <StatCard
                  icon={Package}
                  label="Produtos Vendidos"
                  value="1.247"
                  trend="+18%"
                  color="purple"
                />
              </div>

              {/* Chart Area */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart */}
                <div className="lg:col-span-2 bg-slate-950/30 rounded-2xl p-6 border border-slate-700/30">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-white font-semibold text-lg">Vendas por Período</h3>
                      <p className="text-slate-400 text-sm">Últimos 7 dias</p>
                    </div>
                    <BarChart3 className="w-5 h-5 text-amber-400" />
                  </div>
                  
                  {/* Simplified Chart Visualization */}
                  <div className="h-48 flex items-end justify-between gap-2">
                    {[65, 45, 78, 52, 88, 72, 95].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="w-full bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-lg"
                        />
                        <span className="text-xs text-slate-500">
                          {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-slate-950/30 rounded-2xl p-6 border border-slate-700/30">
                  <h3 className="text-white font-semibold text-lg mb-6">Atividade Recente</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Novo pedido #4892', time: '2 min atrás', color: 'bg-green-500' },
                      { label: 'Pagamento aprovado', time: '5 min atrás', color: 'bg-blue-500' },
                      { label: 'Produto despachado', time: '12 min atrás', color: 'bg-amber-500' },
                      { label: 'Novo cliente cadastrado', time: '18 min atrás', color: 'bg-purple-500' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white truncate">{item.label}</p>
                          <p className="text-xs text-slate-500">{item.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  trend: string;
  color: 'amber' | 'blue' | 'green' | 'purple';
}

function StatCard({ icon: Icon, label, value, trend, color }: StatCardProps) {
  const colorClasses = {
    amber: 'from-amber-500/10 to-amber-600/5 border-amber-500/20 text-amber-400',
    blue: 'from-blue-500/10 to-blue-600/5 border-blue-500/20 text-blue-400',
    green: 'from-green-500/10 to-green-600/5 border-green-500/20 text-green-400',
    purple: 'from-purple-500/10 to-purple-600/5 border-purple-500/20 text-purple-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br ${colorClasses[color].split(' ').slice(0, 2).join(' ')} border ${colorClasses[color].split(' ')[2]} rounded-xl p-4`}
    >
      <div className="flex items-center justify-between mb-2">
        <Icon className={`w-5 h-5 ${colorClasses[color].split(' ')[3]}`} />
        <span className="text-xs text-green-400 font-semibold">{trend}</span>
      </div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-slate-400">{label}</p>
    </motion.div>
  );
}
