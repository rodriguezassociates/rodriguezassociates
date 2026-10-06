import { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { firmData } from '@/data/firm';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  preferredContact: string;
  legalMatter: string;
  description: string;
  preferredDate: string;
  preferredTime: string;
  acknowledge: boolean;
};

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  preferredContact: '',
  legalMatter: '',
  description: '',
  preferredDate: '',
  preferredTime: '',
  acknowledge: false,
};

export default function ConsultationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const endpoint = firmData.formEndpoint;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({ ...prev, [name]: checked !== undefined ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.acknowledge) {
      setStatus('error');
      setErrorMessage('Please acknowledge the notice regarding attorney-client relationship before submitting.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    if (!endpoint) {
      // No endpoint configured — fall back to mailto
      const subject = encodeURIComponent(`Consultation Request — ${form.legalMatter || 'General Inquiry'}`);
      const body = encodeURIComponent(
        `Full Name: ${form.fullName}\n` +
          `Email: ${form.email}\n` +
          `Phone: ${form.phone}\n` +
          `Preferred Contact Method: ${form.preferredContact}\n` +
          `Legal Matter / Subject: ${form.legalMatter}\n\n` +
          `Brief Description:\n${form.description}\n\n` +
          `Preferred Contact Date: ${form.preferredDate}\n` +
          `Preferred Contact Time: ${form.preferredTime}\n`
      );
      window.location.href = `${firmData.contact.emailHref}?subject=${subject}&body=${body}`;
      setStatus('idle');
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm(initialState);
      } else {
        setStatus('error');
        setErrorMessage('There was an issue submitting your request. Please try again or contact the office directly.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Unable to submit the form at this time. Please call the office or send an email directly.');
    }
  };

  const inputClasses =
    'w-full bg-transparent border-b border-charcoal/20 py-3 px-0 text-charcoal placeholder-charcoal/40 focus:border-gold focus:outline-none transition-colors duration-200 text-sm md:text-base';
  const labelClasses =
    'block text-xs tracking-wide uppercase text-charcoal-muted font-medium mb-2';

  return (
    <section
      id="consultation-form"
      className="py-24 md:py-32 bg-offwhite"
      aria-labelledby="form-heading"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-extra-wide uppercase text-gold font-medium">
              Consultation Request
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2
            id="form-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-medium leading-tight"
          >
            Request a Consultation
          </h2>
          <p className="mt-6 text-base text-charcoal-muted leading-relaxed max-w-xl mx-auto">
            Complete the form below and the firm will contact you to discuss your matter.
          </p>
        </div>

        {/* Notice */}
        <div className="mb-10 p-5 border-l-2 border-gold bg-warmwhite">
          <p className="text-sm text-charcoal-muted leading-relaxed">
            <strong className="text-charcoal font-medium">Please note:</strong> Do not submit
            highly sensitive or confidential information through this initial contact form.
          </p>
        </div>

        {/* Form */}
        {status === 'success' ? (
          <div className="text-center py-12">
            <CheckCircle2 size={48} className="mx-auto text-gold" />
            <p className="mt-6 font-serif text-2xl text-charcoal font-medium">
              Your request has been received.
            </p>
            <p className="mt-3 text-base text-charcoal-muted">
              The firm will contact you at the provided information.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className={labelClasses}>
                  Full Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  className={inputClasses}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClasses}
                  autoComplete="tel"
                />
              </div>
              <div>
                <label htmlFor="preferredContact" className={labelClasses}>
                  Preferred Contact Method
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={form.preferredContact}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select method</option>
                  <option value="Phone">Phone</option>
                  <option value="Email">Email</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="legalMatter" className={labelClasses}>
                Legal Matter / Subject <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="legalMatter"
                name="legalMatter"
                required
                value={form.legalMatter}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="description" className={labelClasses}>
                Brief Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={form.description}
                onChange={handleChange}
                className={inputClasses + ' resize-none'}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredDate" className={labelClasses}>
                  Preferred Contact Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={form.preferredDate}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="preferredTime" className={labelClasses}>
                  Preferred Contact Time
                </label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  value={form.preferredTime}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Acknowledgement */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="acknowledge"
                  checked={form.acknowledge}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 shrink-0 accent-gold cursor-pointer"
                  aria-describedby="acknowledge-notice"
                />
                <span className="text-sm text-charcoal-muted leading-relaxed group-hover:text-charcoal transition-colors">
                  I understand that submitting this form does not create an
                  attorney-client relationship.
                </span>
              </label>
            </div>

            {/* Error */}
            {status === 'error' && (
              <div className="flex items-start gap-3 p-4 border-l-2 border-red-700/60 bg-red-50/50">
                <AlertCircle size={20} className="shrink-0 text-red-700 mt-0.5" />
                <p className="text-sm text-red-800 leading-relaxed">{errorMessage}</p>
              </div>
            )}

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-medium tracking-wide text-warmwhite bg-charcoal hover:bg-gold transition-colors duration-300 focus-visible-ring rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Request'
                )}
              </button>
            </div>

            {!endpoint && (
              <p className="text-xs text-charcoal/40 leading-relaxed pt-2">
                This form will open your email client. For direct submission, the firm can
                configure a form endpoint.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
