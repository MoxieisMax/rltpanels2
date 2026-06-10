export interface MoneyPageData {
  slug: string;
  title: string;
  metaDescription: string;
  lastUpdated: string;
  summary: string;
  featured: boolean;
  productIds: string[];
  buyingGuide: string;
  faqs: { q: string; a: string }[];
}

export const MONEY_PAGES: Record<string, MoneyPageData> = {
  'best-red-light-therapy-panels-under-300': {
    slug: 'best-red-light-therapy-panels-under-300',
    title: 'Best Red Light Therapy Panels Under $300 (2026 Guide)',
    metaDescription: 'Find the most powerful and effective red light therapy panels for under $300. We compared Hooga, Bestqool, and more.',
    lastUpdated: '19/04/26',
    summary: 'For most home users, a targeted panel under $300 provides the perfect balance of therapeutic power and affordability. We have tested the top-selling units for irradiance and build quality.',
    featured: true,
    productIds: ['hooga-hg300', 'bestqool-pro300', 'hi-red-300', 'serfory-panel'],
    buyingGuide: `Choosing a budget panel doesn't mean you should sacrifice quality. Focus on these three metrics: 
    1. **Irradiance**: Minimum 80 mW/cm² at 6 inches.
    2. **EMF Shielding**: Ensure low EMF at the treatment distance.
    3. **Fan Noise**: Cheap panels often have loud fans; look for "quiet cooling" labels.`,
    faqs: [
      { q: "Is a $150 panel really as good as a $1000 one?", a: "For targeted treatment (face, joints), yes. The main difference in expensive units is the coverage area and advanced digital controls." }
    ]
  },
  'best-professional-red-light-therapy-panels-under-500': {
    slug: 'best-professional-red-light-therapy-panels-under-500',
    title: 'Top Professional Red Light Panels Under $500',
    metaDescription: 'Upgrade your home setup with professional-grade RLT panels under $500. Better coverage and higher intensity.',
    lastUpdated: '19/04/26',
    summary: 'If you want deeper penetration and larger coverage for muscle recovery or professional skin results, these sub-$500 panels are the gold standard.',
    featured: true,
    productIds: ['mitored-mitopro-300', 'rogue-orbital', 'hi-red-300'],
    buyingGuide: `At the $500 price point, you should expect:
    - **Dual Chip LEDs**: 660nm and 850nm occurring in every lens.
    - **Modular Capability**: The ability to snap multiple panels together.
    - **Digital Timers**: Built-in treatment controls.`,
    faqs: [
      { q: "Why spend $500?", a: "Better build quality, longer warranties (usually 3 years), and verified flicker-free tech." }
    ]
  },
  'best-full-body-red-light-therapy-panels-under-1000': {
    slug: 'best-full-body-red-light-therapy-panels-under-1000',
    title: 'Best Full-Body Red Light Therapy Panels Under $1000',
    metaDescription: 'Discover the most powerful full-body red light therapy panels under $1000. Comprehensive clinical comparison of PlatinumLED, Mito Red, and Hooga.',
    lastUpdated: '19/04/26',
    summary: 'For a complete clinic-level or saloon-grade full-body treatment at home, these high-powered premium panels under $1000 deliver maximum energy, multi-wavelength spectrums, and massive therapeutic surface coverage.',
    featured: true,
    productIds: ['platinum-biomax-900', 'mitored-mitopro-1500', 'hooga-pro1500'],
    buyingGuide: `When investing in a premium therapy panel under $1000, focus on these defining features:
    - **Clinical Coverage**: Sizing should measure at least 35 inches in height to treat your entire torso and thighs simultaneously.
    - **Multi-Wavelength Spectrum**: Advanced options such as the BioMax incorporate up to 5 wavelengths, reaching deeper layers and targeting various skin and deep-tissue recovery mechanisms.
    - **Smart Digital Consoles**: Touchscreens, integrated treatment timers, customized intensity levels, and Bluetooth app connectivity are a standard at this tier.
    - **Whisper Ventilation**: High density LED arrays run hot; check that the unit uses twin quiet cooling fans with smart heat sensors to prevent EMF spikes.`,
    faqs: [
      { q: "Is a full-body $1000 panel worth the price over smaller, cheaper ones?", a: "For comprehensive physical benefits (like entire muscle recovery, sleep enhancement, and metabolic optimization), yes. It reduces a 1-hour multi-location session with a small panel down to a single 15-minute standing treatment." },
      { q: "What mounting accessories are typically included with larger panels?", a: "Most sub-$1000 panels come with standard steel cable suspension kits, adjustable door hooks, and robust rubber desk feet. Modular floor stands or mobile wheeled racks are sold separately." }
    ]
  }
};
