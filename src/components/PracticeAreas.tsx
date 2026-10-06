import { firmData } from '@/data/firm';

export default function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="py-24 md:py-32 bg-offwhite"
      aria-labelledby="practice-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-extra-wide uppercase text-gold font-medium">
              What We Handle
            </span>
          </div>
          <h2
            id="practice-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-medium leading-tight text-balance"
          >
            {firmData.practiceAreas.heading}
          </h2>
          <p className="mt-6 text-base md:text-lg text-charcoal-muted leading-relaxed">
            {firmData.practiceAreas.description}
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/20 border border-gold/20">
          {firmData.practiceAreas.items.map((item) => (
            <div
              key={item.number}
              className="group bg-warmwhite p-8 md:p-10 hover:bg-cream transition-colors duration-300 focus-within:bg-cream"
            >
              <div className="flex items-start gap-6">
                <span className="font-serif text-3xl text-gold font-light shrink-0 tabular-nums">
                  {item.number}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl text-charcoal font-medium leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-charcoal-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 h-px bg-gold/20 group-hover:bg-gold/50 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
