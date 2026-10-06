import { firmData } from '@/data/firm';

export default function OurApproach() {
  return (
    <section
      id="our-approach"
      className="py-24 md:py-32 bg-warmwhite"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-extra-wide uppercase text-gold font-medium">
              The Process
            </span>
          </div>
          <h2
            id="approach-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-medium leading-tight text-balance"
          >
            {firmData.approach.heading}
          </h2>
          <p className="mt-6 text-base md:text-lg text-charcoal-muted leading-relaxed">
            {firmData.approach.description}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/20 border border-gold/20">
          {firmData.approach.steps.map((step) => (
            <div
              key={step.number}
              className="bg-warmwhite p-8 md:p-10 flex flex-col min-h-[220px]"
            >
              <span className="font-serif text-4xl text-gold font-light tabular-nums">
                {step.number}
              </span>
              <h3 className="mt-6 font-serif text-xl md:text-2xl text-charcoal font-medium">
                {step.title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-charcoal-muted leading-relaxed flex-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
