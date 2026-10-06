import { Phone, Mail, MapPin } from 'lucide-react';
import { firmData } from '@/data/firm';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-warmwhite" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-extra-wide uppercase text-gold font-medium">
              Get in Touch
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2
            id="contact-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-medium leading-tight"
          >
            {firmData.contactSection.heading}
          </h2>
          <p className="mt-6 text-base md:text-lg text-charcoal-muted leading-relaxed max-w-xl mx-auto">
            {firmData.contactSection.description}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Contact Details */}
          <div className="lg:col-span-5">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-5">
                <MapPin size={22} className="shrink-0 text-gold mt-1" />
                <div>
                  <h3 className="text-xs tracking-extra-wide uppercase text-charcoal-muted font-medium mb-2">
                    Office Address
                  </h3>
                  <p className="font-serif text-lg text-charcoal font-medium">
                    {firmData.name}
                  </p>
                  <p className="text-base text-charcoal-muted leading-relaxed mt-1">
                    {firmData.contact.address.line1}
                    <br />
                    {firmData.contact.address.line2}
                    <br />
                    {firmData.contact.address.city}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gold/20" />

              {/* Phone */}
              <div className="flex items-start gap-5">
                <Phone size={22} className="shrink-0 text-gold mt-1" />
                <div>
                  <h3 className="text-xs tracking-extra-wide uppercase text-charcoal-muted font-medium mb-2">
                    Telephone
                  </h3>
                  <a
                    href={firmData.contact.phoneHref}
                    className="text-lg text-charcoal hover:text-gold transition-colors duration-200 focus-visible-ring rounded-sm"
                  >
                    {firmData.contact.phone}
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gold/20" />

              {/* Email */}
              <div className="flex items-start gap-5">
                <Mail size={22} className="shrink-0 text-gold mt-1" />
                <div>
                  <h3 className="text-xs tracking-extra-wide uppercase text-charcoal-muted font-medium mb-2">
                    Email
                  </h3>
                  <a
                    href={firmData.contact.emailHref}
                    className="text-lg text-charcoal hover:text-gold transition-colors duration-200 break-words focus-visible-ring rounded-sm"
                  >
                    {firmData.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={firmData.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide text-warmwhite bg-charcoal hover:bg-gold transition-colors duration-300 focus-visible-ring rounded-sm"
              >
                <Phone size={16} />
                Call the Office
              </a>
              <a
                href={firmData.contact.emailHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide text-charcoal border border-charcoal/25 hover:border-gold hover:text-gold transition-colors duration-300 focus-visible-ring rounded-sm"
              >
                <Mail size={16} />
                Send an Email
              </a>
            </div>
          </div>

          {/* Right — Map Placeholder */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[400px] bg-navy overflow-hidden">
              <iframe
                title="Office location map — Perris, CA area"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-117.25%2C33.77%2C-117.15%2C33.82&layer=mapnik"
                className="w-full h-full min-h-[400px] grayscale opacity-60 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none bg-navy/20" />
              <div className="absolute bottom-6 left-6 right-6 bg-warmwhite/95 backdrop-blur-sm p-5 border-l-2 border-gold">
                <p className="text-xs tracking-wide uppercase text-gold font-medium mb-1">
                  Office Location
                </p>
                <p className="font-serif text-lg text-charcoal font-medium">
                  {firmData.contact.address.line2}, {firmData.contact.address.city}
                </p>
                <p className="text-sm text-charcoal-muted mt-1">
                  Approximate area shown. Contact the office for specific directions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
