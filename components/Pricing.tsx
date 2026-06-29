'use client';
import { motion } from 'motion/react';
import { Smile, Sparkles, Activity } from 'lucide-react';

const pricingData = [
  {
    id: 1,
    title: 'Dental Care',
    icon: Smile,
    badge: '50% OFF',
    featured: false,
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
    services: [
      { name: 'Classic Hydra Facial', price: 'Starting Rs. 3,000' },
      { name: 'Full Body Muscle Relaxation', price: 'Rs. 4,999', oldPrice: 'Rs. 16,000' },
      { name: 'Deep Tissue Massage', price: 'Starting Rs. 3,500' },
      { name: 'Skin Resurfacing', price: 'Starting Rs. 4,000' },
      { name: 'Anti-Aging Treatment', price: 'Starting Rs. 5,000' },
    ],
    cta: 'Book Aesthetic Appointment'
  },
  {
    id: 3,
    title: 'Physiotherapy & Wellness',
    icon: Activity,
    badge: '50% OFF',
    featured: false,
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
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#2B1A0E] relative overflow-hidden">
      {/* === PHASE 3: PRICING SECTION === */}
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1000/1000')] opacity-5 mix-blend-overlay pointer-events-none" />
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

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {pricingData.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-signova-white rounded-sm p-8 md:p-10 transition-all duration-300 flex flex-col h-full ${
                  plan.featured 
                    ? 'border-2 border-signova-gold shadow-[0_10px_40px_rgba(200,163,106,0.3)] scale-105 z-10' 
                    : 'border border-signova-gold/20 shadow-[0_5px_15px_rgba(200,163,106,0.05)]'
                }`}
              >
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-signova-gold text-signova-white px-4 py-1 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase shadow-md whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>

                <div className="text-center border-b border-signova-gold/20 pb-8 mb-8 mt-4">
                  <div className="w-16 h-16 rounded-full bg-signova-ivory flex items-center justify-center text-signova-gold mx-auto mb-4 border border-signova-gold/20">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-3xl text-signova-dark">{plan.title}</h3>
                </div>

                <ul className="space-y-6 mb-8 flex-grow">
                  {plan.services.map((item, i) => (
                    <li key={i} className="flex flex-col gap-1">
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
