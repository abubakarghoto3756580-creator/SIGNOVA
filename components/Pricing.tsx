'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smile, Sparkles, Activity } from 'lucide-react';

const aestheticCategories = [
  {
    id: 'peels',
    name: 'Chemical Peels',
    services: [
      { name: 'Underarm Brightening Peel', oldPrice: 'Rs. 6,000', price: 'Rs. 3,000' },
      { name: 'Underleg Glow Peel', oldPrice: 'Rs. 6,000', price: 'Rs. 3,000' },
      { name: 'Neck Glow Peel', oldPrice: 'Rs. 8,000', price: 'Rs. 4,000' },
      { name: 'Face Radiance Peel', oldPrice: 'Rs. 8,000', price: 'Rs. 4,000' },
      { name: 'Hand Glow Peel', oldPrice: 'Rs. 10,000', price: 'Rs. 5,000' },
      { name: 'Foot Glow Peel', oldPrice: 'Rs. 10,000', price: 'Rs. 5,000' },
      { name: 'Advanced American Peel', oldPrice: 'Rs. 22,000', price: 'Rs. 11,000' },
    ]
  },
  {
    id: 'hydrafacials',
    name: 'Hydrafacials',
    services: [
      { name: 'Crystal Cleanse Facial', oldPrice: 'Rs. 6,000', price: 'Rs. 3,000' },
      { name: 'Teen Detox HydraFacial', oldPrice: 'Rs. 7,000', price: 'Rs. 3,500' },
      { name: 'Hollywood Glass Skin Facial', oldPrice: 'Rs. 8,000', price: 'Rs. 4,000' },
      { name: 'Lymphatic Sculpt HydraFacial', oldPrice: 'Rs. 9,000', price: 'Rs. 4,500' },
      { name: 'Acne Defense HydraFacial', oldPrice: 'Rs. 10,000', price: 'Rs. 5,000' },
      { name: 'Age Reverse HydraFacial', oldPrice: 'Rs. 12,000', price: 'Rs. 6,000' },
      { name: 'Ultra Bright HydraFacial', oldPrice: 'Rs. 14,000', price: 'Rs. 7,000' },
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced Hydrafacials',
    services: [
      { name: 'Deluxe Hydra Experience', oldPrice: 'Rs. 14,000', price: 'Rs. 7,000' },
      { name: 'Platinum Skin Infusion Facial', oldPrice: 'Rs. 18,000', price: 'Rs. 9,000' },
      { name: 'Signature Luxury HydraFacial', oldPrice: 'Rs. 24,000', price: 'Rs. 12,000' },
    ]
  }
];

type Service = {
  name: string;
  price: string;
  oldPrice?: string;
};

type PricingPlan = {
  id: number;
  title: string;
  icon: any;
  badge: string;
  featured: boolean;
  isAesthetic: boolean;
  services: Service[];
  cta: string;
};

const pricingData: PricingPlan[] = [
  {
    id: 1,
    title: 'Dental Care',
    icon: Smile,
    badge: '50% OFF',
    featured: false,
    isAesthetic: false,
    services: [
      { name: 'Scaling & Polishing', price: 'Starting Rs. 2,000' },
      { name: 'Teeth Whitening', price: 'Starting Rs. 5,000' },
      { name: 'Tooth Extraction', price: 'Starting Rs. 1,500' },
      { name: 'Dental Filling', price: 'Starting Rs. 2,500' },
      { name: 'Orthodontic Consultation', price: 'Rs. 500' },
    ],
    cta: 'Book Dental Appointment'
  },
  {
    id: 2,
    title: 'Aesthetic & Skin',
    icon: Sparkles,
    badge: 'Most Popular ✦',
    featured: true,
    isAesthetic: true,
    services: [], // Services managed dynamically through tabs
    cta: 'Book Aesthetic Appointment'
  },
  {
    id: 3,
    title: 'Physiotherapy & Wellness',
    icon: Activity,
    badge: '50% OFF',
    featured: false,
    isAesthetic: false,
    services: [
      { name: 'Physiotherapy Session', price: 'Starting Rs. 1,500' },
      { name: 'Hijama (Wet Cupping)', price: 'Starting Rs. 3,000' },
      { name: 'Hijama (Dry Cupping)', price: 'Starting Rs. 2,000' },
      { name: 'EMS Training Session', price: 'Starting Rs. 2,500' },
      { name: 'Soft Tissue Massage', price: 'Starting Rs. 2,000' },
    ],
    cta: 'Book Physio Appointment'
  }
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('hydrafacials');

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#2B1A0E] relative overflow-hidden overflow-x-hidden w-full max-w-full">
      {/* === PHASE 3: PRICING SECTION === */}
      <div className="absolute inset-0 bg-[url('https://i.postimg.cc/sDGpxyTm/Clinic-treatment-room-interior-202607010026-2.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cursive text-3xl md:text-4xl text-signova-gold mb-2"
          >
            Transparent Pricing
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif leading-[1.1] text-signova-white mb-6"
          >
            Investment In Your <span className="italic text-signova-gold">Beauty & Health</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-signova-white/80 font-light text-sm uppercase tracking-[0.2em]"
          >
            Grand Opening Special — 50% OFF on All Treatments
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-full w-full mx-auto">
          {pricingData.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-signova-white rounded-sm p-8 md:p-10 transition-all duration-300 flex flex-col h-full overflow-hidden w-full max-w-full ${
                  plan.featured 
                    ? 'border-2 border-signova-gold shadow-[0_10px_40px_rgba(200,163,106,0.3)] lg:scale-105 z-10' 
                    : 'border border-signova-gold/20 shadow-[0_5px_15px_rgba(200,163,106,0.05)]'
                }`}
              >
                {/* Badge */}
                <div className="absolute top-0 right-0 z-20">
                  <span className="bg-signova-gold text-signova-white px-4 py-1.5 rounded-bl-lg text-[10px] font-bold tracking-[0.2em] uppercase shadow-md whitespace-nowrap block">
                    {plan.badge}
                  </span>
                </div>

                <div className="text-center border-b border-signova-gold/20 pb-6 mb-6 mt-4">
                  <div className="w-16 h-16 rounded-full bg-signova-ivory flex items-center justify-center text-signova-gold mx-auto mb-4 border border-signova-gold/20">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-3xl text-signova-dark">{plan.title}</h3>
                </div>

                {plan.isAesthetic ? (
                  <div className="flex-grow flex flex-col mb-8">
                    <div className="bg-signova-gold/10 text-signova-dark p-3 rounded-sm text-center mb-6 border border-signova-gold/20">
                      <p className="text-xs font-semibold tracking-wide">🎁 Glow More, Pay Less! Your best self is just a treatment away.</p>
                    </div>
                    
                    <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-6 pb-2">
                      {aestheticCategories.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => setActiveTab(cat.id)}
                          className={`px-4 py-2 rounded-sm text-[10px] font-bold tracking-[0.1em] uppercase whitespace-nowrap transition-colors flex-1 ${
                            activeTab === cat.id 
                              ? 'bg-signova-gold text-white shadow-md' 
                              : 'bg-signova-ivory text-signova-dark/60 hover:text-signova-gold hover:bg-signova-gold/10 border border-signova-gold/10'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-grow">
                      <AnimatePresence mode="wait">
                        {aestheticCategories.map(cat => (
                          cat.id === activeTab && (
                            <motion.ul 
                              key={cat.id}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-4"
                            >
                              {cat.services.map((item, i) => (
                                <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 p-3 rounded-sm border-b border-signova-gold/10 last:border-0 even:bg-signova-gold/5 odd:bg-transparent transition-colors">
                                  <span className="text-sm font-semibold text-signova-dark/90 tracking-wide">{item.name}</span>
                                  <div className="flex items-center gap-2 shrink-0">
                                    <span className="text-xs text-signova-dark/40 line-through">{item.oldPrice}</span>
                                    <span className="text-sm text-signova-gold font-bold">{item.price}</span>
                                  </div>
                                </li>
                              ))}
                            </motion.ul>
                          )
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-6 mb-8 flex-grow">
                    {plan.services.map((item, i) => (
                      <li key={i} className="flex flex-col gap-1 pb-4 border-b border-signova-gold/10 last:border-0 last:pb-0">
                        <span className="text-sm font-semibold text-signova-dark/90 tracking-wide">{item.name}</span>
                        <div className="flex items-center gap-2">
                          {item.oldPrice && (
                            <span className="text-xs text-signova-dark/40 line-through">{item.oldPrice}</span>
                          )}
                          <span className="text-sm text-signova-gold font-medium">{item.price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                <a 
                  href="https://wa.me/923098644429" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-4 rounded-sm text-xs uppercase tracking-[0.2em] font-semibold transition-colors mt-auto ${
                    plan.featured
                      ? 'bg-signova-gold text-white hover:bg-signova-deep-gold shadow-[0_5px_15px_rgba(200,163,106,0.3)]'
                      : 'border border-signova-gold text-signova-gold hover:bg-signova-gold hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <p className="text-signova-white/50 text-xs leading-relaxed font-light italic">
            *All prices are starting rates. Final pricing depends on treatment complexity. Consultation is available to assess your needs. Grand Opening 50% discount applies on selected treatments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
