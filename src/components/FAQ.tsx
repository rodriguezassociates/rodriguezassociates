import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { firmData } from '@/data/firm';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-warmwhite" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-extra-wide uppercase text-gold font-medium">
              Questions
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2
            id="faq-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-medium leading-tight"
          >
            {firmData.faqs.heading}
          </h2>
          <p className="mt-6 text-base md:text-lg text-charcoal-muted leading-relaxed max-w-2xl mx-auto">
            {firmData.faqs.description}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="border-t border-gold/20">
          {firmData.faqs.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-gold/20">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group focus-visible-ring rounded-sm"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg md:text-xl text-charcoal font-medium group-hover:text-gold transition-colors duration-200">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-base text-charcoal-muted leading-relaxed pr-10">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
