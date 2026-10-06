export const firmData = {
  name: 'Rodriguez & Associates',
  subtitle: 'Attorneys at Law',
  website: 'www.rodriguezassociates.online',
  owner: {
    name: 'Jose Ruiz Rodriguez',
    title: 'Attorney & Owner',
  },
  contact: {
    phone: '+1 803 696 5064',
    phoneHref: 'tel:+18036965064',
    email: 'info@rodriguezassociates.online',
    emailHref: 'mailto:info@rodriguezassociates.online',
    address: {
      line1: 'Daytona Business Park',
      line2: '21398 Harvill Ave',
      city: 'Perris, CA 92570',
    },
  },
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'Our Approach', href: '#our-approach' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    title: 'Rodriguez & Associates',
    tagline: 'Strategic Legal Counsel. Clear Representation.',
    description:
      'Focused legal representation built around careful analysis, clear communication, and strategic preparation.',
  },
  about: {
    label: 'About the Firm',
    heading: 'A Measured Approach to Legal Representation',
    text: 'RODRIGUEZ & ASSOCIATES provides focused legal consultation and representation with an emphasis on careful analysis, clear communication, and practical legal strategy. Every matter is approached with attention to the specific circumstances and objectives of the client.',
    linkText: 'Learn More About Our Firm',
  },
  practiceAreas: {
    heading: 'Practice Areas',
    description:
      'Legal guidance tailored to the circumstances and objectives of each matter.',
    items: [
      {
        number: '01',
        title: 'Contract & Employment Matters',
        description:
          'Review, negotiation, and guidance on contractual agreements and employment-related legal concerns.',
      },
      {
        number: '02',
        title: 'Civil Legal Matters',
        description:
          'Representation and consultation across a range of civil legal issues, grounded in careful factual review.',
      },
      {
        number: '03',
        title: 'Business & Commercial Matters',
        description:
          'Legal support for business and commercial matters, including formation, compliance, and dispute considerations.',
      },
      {
        number: '04',
        title: 'Dispute Resolution',
        description:
          'Strategic counsel aimed at resolving disputes through practical, outcome-focused approaches.',
      },
      {
        number: '05',
        title: 'Legal Consultation',
        description:
          'Structured legal consultation to help clients understand their position, options, and potential next steps.',
      },
      {
        number: '06',
        title: 'General Legal Representation',
        description:
          'Focused representation across additional legal matters, assessed on a case-by-case basis.',
      },
    ],
  },
  approach: {
    heading: 'Our Approach',
    description:
      'A structured process designed to provide clarity and direction at each stage of the engagement.',
    steps: [
      {
        number: '01',
        title: 'Understand',
        description:
          'Begin by understanding the client’s circumstances, objectives, and legal concerns.',
      },
      {
        number: '02',
        title: 'Assess',
        description:
          'Review the relevant facts and documents and identify the key legal considerations.',
      },
      {
        number: '03',
        title: 'Strategize',
        description:
          'Develop a practical legal approach appropriate to the circumstances.',
      },
      {
        number: '04',
        title: 'Represent',
        description:
          'Provide clear communication and legal representation throughout the engagement.',
      },
    ],
  },
  attorney: {
    heading: 'Meet the Attorney',
    name: 'Jose Ruiz Rodriguez',
    title: 'Attorney & Owner',
    bio: 'Jose Ruiz Rodriguez founded Rodriguez & Associates with a commitment to providing focused, practical legal counsel. His approach centers on careful analysis of each matter, clear communication with clients, and strategic preparation tailored to the circumstances at hand.',
    bio2:
      'The firm handles a range of legal matters including contract and employment issues, civil legal matters, business and commercial concerns, and dispute resolution. Each engagement begins with understanding the client’s objectives and ends with clear, deliberate representation.',
  },
  consultationCTA: {
    heading: 'Discuss Your Legal Matter',
    text: 'If you require legal consultation or representation, contact Rodriguez & Associates to discuss your matter.',
  },
  faqs: {
    heading: 'Frequently Asked Questions',
    description:
      'Common questions about working with the firm. For specific legal concerns, please contact the office directly.',
    items: [
      {
        question: 'Do I need to schedule a consultation?',
        answer:
          'A consultation allows the firm to understand your circumstances and determine whether representation is appropriate. You are welcome to contact the office by phone or through the website form to arrange an initial discussion.',
      },
      {
        question: 'How do I contact the firm?',
        answer:
          'You can reach Rodriguez & Associates by phone at +1 803 696 5064, by email at info@rodriguezassociates.online, or by submitting the consultation request form on this website.',
      },
      {
        question: 'What information should I provide during an initial inquiry?',
        answer:
          'A brief description of your legal matter, your contact information, and your preferred method and time for contact. Please avoid submitting highly sensitive or confidential details through the initial website form.',
      },
      {
        question:
          'Does submitting the website form create an attorney-client relationship?',
        answer:
          'No. Submitting an inquiry through the website does not create an attorney-client relationship. An attorney-client relationship is established only after a formal engagement agreement is signed by both parties.',
      },
      {
        question: 'Can I send confidential documents through the website?',
        answer:
          'Please do not submit highly sensitive or confidential information through the initial contact form unless specifically instructed to do so by the firm. Sensitive materials should be handled through secure, established channels after an engagement is in place.',
      },
    ],
  },
  contactSection: {
    heading: 'Contact',
    description:
      'Reach out to discuss your legal matter or to schedule a consultation.',
  },
  disclaimer: {
    text: 'This website is provided for general informational purposes only and does not constitute legal advice. The information presented on this site should not be relied upon as a substitute for legal counsel. Submitting an inquiry through this website does not create an attorney-client relationship. An attorney-client relationship is established only through a formal written engagement agreement signed by both the client and the firm. Please do not submit highly sensitive or confidential information through the initial website contact form unless specifically instructed to do so by the firm.',
  },
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
} as const;

export type FirmData = typeof firmData;
