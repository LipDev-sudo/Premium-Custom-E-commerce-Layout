import { Crown } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'header-solid'
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <Crown
              className="w-6 h-6 text-[#D4AF37] transition-all duration-500 group-hover:rotate-12 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
              strokeWidth={1.5}
            />
          </div>
          <span className="text-sm font-light tracking-[0.3em] uppercase text-white">
            Elite Store
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {['Diferenciais', 'Tecnologia', 'Planos', 'Resultados'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-[13px] tracking-[0.15em] uppercase text-white/40 hover:text-[#D4AF37] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-2.5 text-[12px] tracking-[0.2em] uppercase font-medium text-[#D4AF37] border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-black transition-all duration-500 backdrop-blur-sm"
        >
          Contato
        </motion.button>
      </div>

      {/* Gold line at bottom */}
      <div
        className={`h-px transition-opacity duration-700 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </motion.header>
  );
}
