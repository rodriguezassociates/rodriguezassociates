import { firmData } from '@/data/firm';
import { images } from '@/data/images';

export default function Attorney() {
  return (
    <section
      id="attorney"
      className="py-24 md:py-32 bg-offwhite"
      aria-labelledby="attorney-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-extra-wide uppercase text-gold font-medium">
              The Attorney
            </span>
          </div>
          <h2
            id="attorney-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-medium leading-tight"
          >
            {firmData.attorney.heading}
          </h2>
        </div>

        {/* Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src={images.attorneyPortrait}
                alt={`${firmData.attorney.name}, ${firmData.attorney.title}`}
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-l-2 border-b-2 border-gold/40" />
              <div className="absolute -top-3 -right-3 w-24 h-24 border-r-2 border-t-2 border-gold/40" />
            </div>
            <div className="mt-6 pl-1">
              <p className="font-serif text-2xl text-charcoal font-medium">
                {firmData.attorney.name}
              </p>
              <p className="mt-1 text-sm tracking-wide text-gold uppercase font-medium">
                {firmData.attorney.title}
              </p>
            </div>
          </div>

          {/* Biography */}
          <div className="lg:col-span-7 lg:pt-2">
            <p className="text-base md:text-lg text-charcoal-muted leading-relaxed">
              {firmData.attorney.bio}
            </p>
            <div className="my-8 h-px bg-gold/20 max-w-xs" />
            <p className="text-base md:text-lg text-charcoal-muted leading-relaxed">
              {firmData.attorney.bio2}
            </p>

            <a
              href="#consultation-form"
              className="mt-10 inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-warmwhite bg-charcoal hover:bg-gold transition-colors duration-300 focus-visible-ring rounded-sm"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
