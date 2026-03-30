import { Crown } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#000000] pt-20 pb-10 px-6 relative">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Main footer */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-3 mb-4 group">
              <Crown className="w-5 h-5 text-[#D4AF37] group-hover:drop-shadow-[0_0_6px_rgba(212,175,55,0.4)] transition-all duration-500" strokeWidth={1.5} />
              <span className="text-sm tracking-[0.3em] uppercase text-white font-light">
                Elite Store
              </span>
            </a>
            <p className="text-white/20 text-sm font-light max-w-xs leading-relaxed">
              Plataformas de e-commerce sob medida para empresas que buscam excelencia e controle total.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37]/40 mb-4">
                Solucoes
              </p>
              <ul className="space-y-2.5">
                {['E-commerce', 'Dashboard', 'Integracoes', 'Consultoria'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/20 hover:text-[#D4AF37] transition-colors duration-300 font-light"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37]/40 mb-4">
                Contato
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:contato@elitestore.com"
                    className="text-sm text-white/20 hover:text-[#D4AF37] transition-colors duration-300 font-light"
                  >
                    contato@elitestore.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+5511999999999"
                    className="text-sm text-white/20 hover:text-[#D4AF37] transition-colors duration-300 font-light"
                  >
                    +55 11 9999-9999
                  </a>
                </li>
                <li>
                  <span className="text-sm text-white/20 font-light">
                    Sao Paulo, Brasil
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.04] mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/10 font-light">
            &copy; 2026 Elite Store. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            {['Privacidade', 'Termos', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[12px] text-white/10 hover:text-[#D4AF37] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
