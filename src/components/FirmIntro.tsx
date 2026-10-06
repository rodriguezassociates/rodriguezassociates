import { ArrowRight } from 'lucide-react';
import { firmData } from '@/data/firm';
import { images } from '@/data/images';

export default function FirmIntro() {
  return (
    <section id="about" className="py-24 md:py-32 bg-warmwhite" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column — Label & Image */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs tracking-extra-wide uppercase text-gold font-medium">
                {firmData.about.label}
              </span>
            </div>

            <div className="relative mt-8">
              <img
                src={images.lawLibrary}
                alt="Law library with wooden shelves and books"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-gold/40 hidden md:block" />
            </div>
          </div>

          {/* Right Column — Text */}
          <div className="lg:col-span-7 lg:pt-4">
            <h2
              id="about-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight font-medium text-balance"
            >
              {firmData.about.heading}
            </h2>

            <div className="mt-8 space-y-6 text-base md:text-lg text-charcoal-muted leading-relaxed">
              <p>{firmData.about.text}</p>
            </div>

            <a
              href="#our-approach"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-charcoal hover:text-gold transition-colors duration-200 group focus-visible-ring rounded-sm"
            >
              {firmData.about.linkText}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
