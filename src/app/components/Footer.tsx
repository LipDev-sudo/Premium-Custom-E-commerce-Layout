import { Crown, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="relative pt-24 pb-8 px-6 border-t border-slate-800/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Crown className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
                <div className="absolute inset-0 blur-xl bg-amber-400/30 -z-10" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Elite Store
                </h2>
                <p className="text-xs text-amber-400/70 tracking-widest uppercase">
                  Custom Platform
                </p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Desenvolvemos plataformas de e-commerce sob medida para empresas que buscam 
              excelência, controle total e crescimento sustentável no digital.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-amber-500/20 border border-slate-700/50 hover:border-amber-500/50 flex items-center justify-center transition-all group"
              >
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-amber-500/20 border border-slate-700/50 hover:border-amber-500/50 flex items-center justify-center transition-all group"
              >
                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-amber-500/20 border border-slate-700/50 hover:border-amber-500/50 flex items-center justify-center transition-all group"
              >
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors" />
              </motion.a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-white font-bold mb-6">Soluções</h3>
            <ul className="space-y-3">
              {['E-commerce Personalizado', 'Dashboard Administrativo', 'Integrações Enterprise', 'Consultoria Técnica', 'Suporte Dedicado'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <a href="mailto:contato@elitestore.com" className="text-white text-sm hover:text-amber-400 transition-colors">
                    contato@elitestore.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-sm">Telefone</p>
                  <a href="tel:+5511999999999" className="text-white text-sm hover:text-amber-400 transition-colors">
                    +55 11 9999-9999
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-sm">Localização</p>
                  <p className="text-white text-sm">São Paulo, Brasil</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Elite Store. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-amber-400 transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-slate-500 hover:text-amber-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-slate-500 hover:text-amber-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
