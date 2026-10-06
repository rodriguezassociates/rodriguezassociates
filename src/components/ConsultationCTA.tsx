import { Phone, ArrowRight } from 'lucide-react';
import { firmData } from '@/data/firm';

export default function ConsultationCTA() {
  return (
    <section
      className="py-24 md:py-28 bg-navy relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/40" />

      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-10 bg-gold" />
          <span className="text-xs tracking-extra-wide uppercase text-gold font-medium">
            Consultation
          </span>
          <span className="h-px w-10 bg-gold" />
        </div>

        <h2
          id="cta-heading"
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-warmwhite font-medium leading-tight text-balance"
        >
          {firmData.consultationCTA.heading}
        </h2>

        <p className="mt-6 text-base md:text-lg text-warmwhite/70 leading-relaxed max-w-2xl mx-auto">
          {firmData.consultationCTA.text}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#consultation-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-charcoal bg-gold hover:bg-gold-light transition-colors duration-300 focus-visible-ring rounded-sm"
          >
            Request a Consultation
            <ArrowRight size={16} />
          </a>
          <a
            href={firmData.contact.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-warmwhite border border-warmwhite/25 hover:border-gold hover:text-gold transition-colors duration-300 focus-visible-ring rounded-sm"
          >
            <Phone size={16} />
            Call the Office
          </a>
        </div>
      </div>
    </section>
  );
}
