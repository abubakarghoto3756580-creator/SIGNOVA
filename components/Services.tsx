'use client';

import { motion } from 'motion/react';
import { Sparkles, Activity, Droplets, Smile, Zap, Scissors } from 'lucide-react';

const services = [
  { id: 1, title: 'Aesthetic & Skin Care', description: 'Premium facials, hydra facial, and anti-aging treatments.', icon: Sparkles },
  { id: 2, title: 'Dental & Smile Design', description: 'Scaling, polishing, implants, and orthodontics.', icon: Smile },
  { id: 3, title: 'Physiotherapy', description: 'Pain management, stroke recovery, and muscle strengthening.', icon: Activity },
  { id: 4, title: 'Hijama Therapy', description: 'Traditional cupping therapy for detox and wellness.', icon: Droplets },
  { id: 5, title: 'Laser Treatments', description: 'Advanced laser hair removal and skin resurfacing.', icon: Zap },
  { id: 6, title: 'Beauty Treatments', description: 'Bespoke beauty regimens tailored to your skin type.', icon: Scissors },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-signova-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-signova-gold font-serif italic text-lg md:text-xl mb-4"
          >
            Our Expertise
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif leading-[1.1] text-signova-black mb-6"
          >
            Bespoke <span className="italic font-light">Treatments.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-signova-black opacity-70 text-lg font-light max-w-xl mx-auto"
          >
            Discover our comprehensive range of luxury medical services, delivered by industry-leading experts in a serene environment.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative p-8 rounded-3xl flex flex-col space-y-4 transition-all duration-300 ${
                  index === 1 
                  ? 'bg-white border border-signova-gold shadow-xl shadow-signova-gold/10' 
                  : 'bg-white/60 border border-signova-beige hover:bg-white hover:shadow-lg'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                  index === 1 ? 'bg-signova-black text-white' : 'bg-signova-cream text-signova-gold group-hover:bg-signova-gold group-hover:text-white'
                } transition-colors`}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-signova-black">{service.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed text-signova-black">
                  {service.description}
                </p>
                <a href="#book" className={`text-xs uppercase tracking-widest font-semibold mt-auto pt-4 ${
                  index === 1 ? 'text-signova-gold' : 'text-signova-black opacity-60 group-hover:opacity-100 group-hover:text-signova-gold'
                } flex items-center gap-2 transition-colors`}>
                  Explore <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
