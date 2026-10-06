import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { firmData } from '@/data/firm';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-warmwhite/95 backdrop-blur-sm border-b border-gold/20'
          : 'bg-warmwhite/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'py-3' : 'py-5'
          }`}
        >
          {/* Logo / Firm Name */}
          <a href="#home" className="group focus-visible-ring rounded-sm" aria-label="Rodriguez and Associates home">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-charcoal">
                RODRIGUEZ
              </span>
              <span className="font-serif text-xl md:text-2xl font-light text-gold tracking-wide">
                &amp;
              </span>
              <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-charcoal">
                ASSOCIATES
              </span>
            </div>
            <div className="mt-0.5 text-[10px] tracking-extra-wide uppercase text-charcoal-muted font-sans">
              {firmData.subtitle}
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {firmData.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-charcoal-light hover:text-gold transition-colors duration-200 relative group focus-visible-ring rounded-sm"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#consultation-form"
              className="hidden md:inline-flex items-center px-6 py-2.5 text-sm font-medium tracking-wide text-warmwhite bg-charcoal hover:bg-gold transition-colors duration-300 focus-visible-ring rounded-sm"
            >
              Request a Consultation
            </a>
            <button
              type="button"
              className="lg:hidden text-charcoal p-2 -mr-2 focus-visible-ring rounded-sm"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-0 top-0 bg-warmwhite z-40 pt-24 px-6 pb-8 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {firmData.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 text-lg font-serif text-charcoal border-b border-gold/15 hover:text-gold transition-colors focus-visible-ring rounded-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#consultation-form"
              onClick={() => setMobileOpen(false)}
              className="mt-6 inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium tracking-wide text-warmwhite bg-charcoal hover:bg-gold transition-colors duration-300 focus-visible-ring rounded-sm"
            >
              Request a Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
