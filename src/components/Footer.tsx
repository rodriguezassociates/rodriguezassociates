import { Phone, Mail, MapPin } from 'lucide-react';
import { firmData } from '@/data/firm';

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-warmwhite" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Site Footer
      </h2>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-serif text-2xl font-semibold tracking-wide">
                RODRIGUEZ
              </span>
              <span className="font-serif text-2xl font-light text-gold">&amp;</span>
              <span className="font-serif text-2xl font-semibold tracking-wide">
                ASSOCIATES
              </span>
            </div>
            <p className="mt-2 text-xs tracking-extra-wide uppercase text-warmwhite/50">
              {firmData.subtitle}
            </p>
            <div className="mt-6 h-px w-16 bg-gold/40" />
          </div>

          {/* Navigation */}
          <nav aria-label="Footer Navigation">
            <h3 className="text-xs tracking-extra-wide uppercase text-gold font-medium mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {firmData.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-warmwhite/70 hover:text-gold transition-colors duration-200 focus-visible-ring rounded-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-extra-wide uppercase text-gold font-medium mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-warmwhite/70">
              <li className="flex items-start gap-3">
                <Phone size={16} className="shrink-0 text-gold mt-0.5" />
                <a
                  href={firmData.contact.phoneHref}
                  className="hover:text-gold transition-colors duration-200 focus-visible-ring rounded-sm"
                >
                  {firmData.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="shrink-0 text-gold mt-0.5" />
                <a
                  href={firmData.contact.emailHref}
                  className="hover:text-gold transition-colors duration-200 break-words focus-visible-ring rounded-sm"
                >
                  {firmData.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="shrink-0 text-gold mt-0.5" />
                <span>
                  {firmData.contact.address.line1}
                  <br />
                  {firmData.contact.address.line2}
                  <br />
                  {firmData.contact.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal links */}
        <div className="mt-14 pt-8 border-t border-warmwhite/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warmwhite/40">
            © {new Date().getFullYear()} Rodriguez &amp; Associates. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex gap-6">
            <a href="#" className="text-xs text-warmwhite/50 hover:text-gold transition-colors duration-200 focus-visible-ring rounded-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-warmwhite/50 hover:text-gold transition-colors duration-200 focus-visible-ring rounded-sm">
              Terms
            </a>
            <a href="#" className="text-xs text-warmwhite/50 hover:text-gold transition-colors duration-200 focus-visible-ring rounded-sm">
              Legal Disclaimer
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
