import { firmData } from '@/data/firm';

export default function Disclaimer() {
  return (
    <section className="py-16 bg-cream border-t border-gold/15" aria-labelledby="disclaimer-heading">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <h2
          id="disclaimer-heading"
          className="text-xs tracking-extra-wide uppercase text-gold font-medium mb-4"
        >
          Legal Disclaimer
        </h2>
        <p className="text-sm text-charcoal-muted leading-relaxed">
          {firmData.disclaimer.text}
        </p>
      </div>
    </section>
  );
}
