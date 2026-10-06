import { ArrowRight } from 'lucide-react';
import { firmData } from '@/data/firm';
import { images } from '@/data/images';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={images.heroCourthouseLarge}
          alt="Neoclassical courthouse architecture at dusk"
          className="w-full h-full object-cover opacity-35"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 w-full pt-32 pb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs tracking-extra-wide uppercase text-gold font-medium">
              {firmData.subtitle}
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-warmwhite font-medium leading-[1.05] text-balance"
          >
            {firmData.hero.title}
          </h1>

          <p className="mt-8 font-serif text-2xl md:text-3xl text-gold-light leading-snug italic">
            {firmData.hero.tagline}
          </p>

          <p className="mt-6 text-base md:text-lg text-warmwhite/75 leading-relaxed max-w-xl">
            {firmData.hero.description}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-charcoal bg-gold hover:bg-gold-light transition-colors duration-300 focus-visible-ring rounded-sm"
            >
              Request a Consultation
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-warmwhite border border-warmwhite/30 hover:border-gold hover:text-gold transition-colors duration-300 focus-visible-ring rounded-sm"
            >
              Contact Our Office
            </a>
          </div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30" />
    </section>
  );
}
