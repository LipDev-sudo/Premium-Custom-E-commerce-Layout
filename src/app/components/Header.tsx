import { Crown } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-amber-500/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Crown className="w-8 h-8 text-amber-400" strokeWidth={1.5} />
            <div className="absolute inset-0 blur-xl bg-amber-400/30 -z-10" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">
              Elite Store
            </h1>
            <p className="text-xs text-amber-400/70 tracking-widest uppercase">
              Custom Platform
            </p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#diferenciais" className="text-sm text-slate-300 hover:text-amber-400 transition-colors">
            Diferenciais
          </a>
          <a href="#tecnologia" className="text-sm text-slate-300 hover:text-amber-400 transition-colors">
            Tecnologia
          </a>
          <a href="#comparacao" className="text-sm text-slate-300 hover:text-amber-400 transition-colors">
            Comparação
          </a>
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 rounded-lg font-semibold text-sm hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/25"
        >
          Contato
        </motion.button>
      </div>
    </motion.header>
  );
}
