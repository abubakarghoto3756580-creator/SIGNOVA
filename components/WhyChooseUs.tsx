'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Microscope, HeartHandshake, Sparkles } from 'lucide-react';

const features = [
  { id: 1, title: 'Internationally Certified', icon: ShieldCheck, desc: 'Our practitioners hold global certifications and adhere to international standards.' },
  { id: 2, title: 'Modern Technology', icon: Microscope, desc: 'Equipped with the latest, FDA-approved medical and aesthetic technology.' },
  { id: 3, title: 'Exceptional Care', icon: HeartHandshake, desc: 'A patient-first approach ensuring comfort, privacy, and safety.' },
  { id: 4, title: 'Luxury Environment', icon: Sparkles, desc: 'A serene, spa-like clinic designed to make you feel relaxed from the moment you step in.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-signova-dark text-signova-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-signova-gold opacity-10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-signova-deep-gold opacity-10 blur-[100px] rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif leading-[1.1] mb-12 text-signova-white"
            >
              The Gold Standard <br/><span className="italic text-signova-gold">in Medical Care.</span>
            </motion.h2>

            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={feature.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-signova-gold/10 flex items-center justify-center text-signova-gold border border-signova-gold/20">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2 text-signova-white tracking-wide">{feature.title}</h3>
                      <p className="text-signova-white/60 font-light leading-relaxed text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center lg:justify-end py-12 lg:py-0"
          >
            <div className="max-w-md text-center lg:text-right">
              <h3 className="font-cursive text-5xl md:text-7xl lg:text-8xl text-signova-gold leading-tight drop-shadow-2xl">
                &quot;Because You Deserve to Shine ✦&quot;
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
